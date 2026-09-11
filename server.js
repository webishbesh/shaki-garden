import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import Database from 'better-sqlite3';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getAllMenuItems } from './menuData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4000);
const isProduction = process.env.NODE_ENV === 'production';
const databasePath = process.env.DATABASE_PATH || path.join(__dirname, 'data', 'shakii-garden.sqlite');
const ownerPhone = '0509788184';
const ownerEmail = 'webish.besh@gmail.com';
const restaurantId = 'shakii-garden-baku';
const whatsappOrderNumber = String(process.env.WHATSAPP_ORDER_NUMBER || ownerPhone).replace(/\D/g, '');
const sessionSecret = process.env.SESSION_SECRET || 'development-only-session-secret';
if (isProduction && !process.env.SESSION_SECRET) throw new Error('SESSION_SECRET is required in production');
const ownerStreams = new Map();

fs.mkdirSync(path.dirname(databasePath), { recursive: true });
const database = new Database(databasePath);
database.pragma('journal_mode = WAL');
database.pragma('foreign_keys = ON');

database.exec(`
  CREATE TABLE IF NOT EXISTS restaurants (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS owners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
    order_code TEXT NOT NULL UNIQUE,
    customer_name TEXT NOT NULL,
    customer_phone TEXT,
    table_or_address TEXT NOT NULL,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    payment_status TEXT NOT NULL DEFAULT 'unpaid',
    payment_method TEXT,
    subtotal REAL NOT NULL,
    service_fee REAL NOT NULL,
    total REAL NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    item_id TEXT NOT NULL,
    item_name TEXT NOT NULL,
    unit_price REAL NOT NULL,
    quantity INTEGER NOT NULL,
    line_total REAL NOT NULL
  );
  CREATE TABLE IF NOT EXISTS order_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    status TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    expires_at INTEGER,
    data TEXT NOT NULL
  );
`);

database.prepare('INSERT OR IGNORE INTO restaurants (id, name, created_at) VALUES (?, ?, ?)')
  .run(restaurantId, 'Shakii Garden', new Date().toISOString());
const owner = database.prepare('SELECT id FROM owners WHERE email = ?').get(ownerEmail);
if (!owner) {
  const passwordHash = bcrypt.hashSync(`${ownerPhone}:${ownerEmail}`, 12);
  database.prepare(`INSERT INTO owners (restaurant_id, first_name, last_name, phone, email, password_hash, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    restaurantId,
    'Mehman',
    'Naghiyev',
    ownerPhone,
    ownerEmail,
    passwordHash,
    new Date().toISOString()
  );
}

const menuById = new Map(getAllMenuItems().map(item => [item.id, item]));

class SqliteSessionStore extends session.Store {
  constructor(storeDatabase) {
    super();
    this.storeDatabase = storeDatabase;
  }

  get(sid, callback) {
    try {
      const row = this.storeDatabase.prepare('SELECT expires_at, data FROM sessions WHERE sid = ?').get(sid);
      if (!row || (row.expires_at && row.expires_at < Date.now())) return callback(null, null);
      callback(null, JSON.parse(row.data));
    } catch (error) {
      callback(error);
    }
  }

  set(sid, sessionData, callback) {
    try {
      const expiresAt = sessionData.cookie?.expires ? new Date(sessionData.cookie.expires).getTime() : null;
      this.storeDatabase.prepare('INSERT INTO sessions (sid, expires_at, data) VALUES (?, ?, ?) ON CONFLICT(sid) DO UPDATE SET expires_at = excluded.expires_at, data = excluded.data').run(sid, expiresAt, JSON.stringify(sessionData));
      callback?.();
    } catch (error) {
      callback?.(error);
    }
  }

  destroy(sid, callback) {
    try {
      this.storeDatabase.prepare('DELETE FROM sessions WHERE sid = ?').run(sid);
      callback?.();
    } catch (error) {
      callback?.(error);
    }
  }

  touch(sid, sessionData, callback) {
    this.set(sid, sessionData, callback);
  }
}

const app = express();
app.use(express.json({ limit: '64kb' }));
app.use(session({
  secret: sessionSecret,
  store: new SqliteSessionStore(database),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProduction,
    maxAge: 8 * 60 * 60 * 1000
  }
}));

function normalize(value) {
  return String(value || '').trim().toLocaleLowerCase('az-AZ');
}

function requireOwner(request, response, next) {
  if (!request.session.ownerId || !request.session.restaurantId) {
    return response.status(401).json({ error: 'OWNER_AUTH_REQUIRED' });
  }
  next();
}

function notifyOwnerStreams(targetRestaurantId) {
  const streams = ownerStreams.get(targetRestaurantId) || new Set();
  streams.forEach(stream => stream.write(`event: dashboard-updated\ndata: {"restaurantId":"${targetRestaurantId}"}\n\n`));
}

function getDateRange(range, customDate) {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  if (range === 'yesterday') {
    start.setDate(start.getDate() - 1);
    end.setDate(end.getDate() - 1);
  } else if (range === '7d') start.setDate(start.getDate() - 6);
  else if (range === '30d') start.setDate(start.getDate() - 29);
  else if (range === 'week') {
    const day = start.getDay() || 7;
    start.setDate(start.getDate() - day + 1);
  } else if (range === 'month') start.setDate(1);
  else if (range === 'custom' && /^\d{4}-\d{2}-\d{2}$/.test(customDate || '')) {
    const custom = new Date(`${customDate}T00:00:00`);
    start.setTime(custom.getTime());
    end.setTime(custom.getTime());
    end.setHours(23, 59, 59, 999);
  }
  return { start: start.toISOString(), end: end.toISOString() };
}

function getPreviousRange(range, customDate) {
  const current = getDateRange(range, customDate);
  const start = new Date(current.start);
  const end = new Date(current.end);
  const duration = end.getTime() - start.getTime();
  return { start: new Date(start.getTime() - duration - 1).toISOString(), end: new Date(start.getTime() - 1).toISOString() };
}

function getAggregate(restaurant, range) {
  const completedFilter = `restaurant_id = ? AND created_at >= ? AND created_at <= ? AND status NOT IN ('cancelled', 'rejected') AND payment_status IN ('paid', 'completed')`;
  const orderFilter = `restaurant_id = ? AND created_at >= ? AND created_at <= ? AND status != 'cancelled'`;
  const revenue = database.prepare(`SELECT COALESCE(SUM(total), 0) AS value FROM orders WHERE ${completedFilter}`).get(restaurant, range.start, range.end).value;
  const paidOrders = database.prepare(`SELECT COUNT(*) AS value FROM orders WHERE ${completedFilter}`).get(restaurant, range.start, range.end).value;
  const orders = database.prepare(`SELECT COUNT(*) AS value FROM orders WHERE ${orderFilter}`).get(restaurant, range.start, range.end).value;
  const activeTables = database.prepare(`SELECT COUNT(DISTINCT table_or_address) AS value FROM orders WHERE restaurant_id = ? AND status IN ('pending', 'confirmed', 'preparing', 'ready')`).get(restaurant).value;
  return { revenue, paidOrders, orders, averageOrder: paidOrders ? revenue / paidOrders : null, activeTables };
}

function percentChange(current, previous) {
  if (!previous || previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

app.get('/api/health', (_request, response) => response.json({ ok: true }));

app.post('/api/owner/login', (request, response) => {
  const { firstName, lastName, phone, email } = request.body || {};
  const record = database.prepare('SELECT * FROM owners WHERE email = ? AND phone = ?').get(normalize(email), String(phone || '').replace(/\D/g, ''));
  if (!record || normalize(record.first_name) !== normalize(firstName) || normalize(record.last_name) !== normalize(lastName)) {
    return response.status(401).json({ error: 'INVALID_OWNER_CREDENTIALS' });
  }
  request.session.ownerId = record.id;
  request.session.restaurantId = record.restaurant_id;
  response.json({ authenticated: true, restaurantId: record.restaurant_id, restaurantName: 'Shakii Garden' });
});

app.post('/api/owner/logout', (request, response) => {
  request.session.destroy(() => response.json({ authenticated: false }));
});

app.get('/api/owner/me', requireOwner, (request, response) => {
  const record = database.prepare('SELECT first_name, last_name, email, restaurant_id FROM owners WHERE id = ? AND restaurant_id = ?').get(request.session.ownerId, request.session.restaurantId);
  response.json(record || { authenticated: false });
});

app.get('/api/owner/dashboard/stream', requireOwner, (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });
  response.write('event: connected\ndata: {}\n\n');
  const targetRestaurantId = request.session.restaurantId;
  if (!ownerStreams.has(targetRestaurantId)) ownerStreams.set(targetRestaurantId, new Set());
  ownerStreams.get(targetRestaurantId).add(response);
  const heartbeat = setInterval(() => response.write(': heartbeat\n\n'), 25000);
  request.on('close', () => {
    clearInterval(heartbeat);
    ownerStreams.get(targetRestaurantId)?.delete(response);
  });
});

app.post('/api/orders', (request, response) => {
  const { customerName, customerPhone, tableOrAddress, notes, items } = request.body || {};
  if (!customerName || !tableOrAddress || !Array.isArray(items) || items.length === 0) {
    return response.status(400).json({ error: 'CUSTOMER_AND_ITEMS_REQUIRED' });
  }
  const validatedItems = items.map(entry => {
    const item = menuById.get(String(entry.itemId));
    const quantity = Number(entry.quantity);
    if (!item || !Number.isInteger(quantity) || quantity < 1 || quantity > 99) return null;
    return { itemId: item.id, name: item.names.az, price: Number(item.price), quantity, lineTotal: Number(item.price) * quantity };
  });
  if (validatedItems.some(item => !item)) return response.status(400).json({ error: 'INVALID_MENU_ITEM' });
  const subtotal = validatedItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const serviceFee = Number((subtotal * 0.08).toFixed(2));
  const total = Number((subtotal + serviceFee).toFixed(2));
  const now = new Date().toISOString();
  const createOrder = database.transaction(() => {
    const orderCode = `MD-${Date.now().toString(36).toUpperCase()}`;
    const result = database.prepare(`INSERT INTO orders (restaurant_id, order_code, customer_name, customer_phone, table_or_address, notes, subtotal, service_fee, total, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(restaurantId, orderCode, String(customerName).trim(), customerPhone || null, String(tableOrAddress).trim(), notes || null, subtotal, serviceFee, total, now, now);
    const orderId = result.lastInsertRowid;
    const insertItem = database.prepare('INSERT INTO order_items (order_id, item_id, item_name, unit_price, quantity, line_total) VALUES (?, ?, ?, ?, ?, ?)');
    validatedItems.forEach(item => insertItem.run(orderId, item.itemId, item.name, item.price, item.quantity, item.lineTotal));
    database.prepare('INSERT INTO order_events (order_id, status, created_at) VALUES (?, ?, ?)').run(orderId, 'pending', now);
    return { orderId, orderCode, total };
  });
  const createdOrder = createOrder();
  notifyOwnerStreams(restaurantId);
  const whatsappMessage = [
    `Yeni sifariş: ${createdOrder.orderCode}`,
    `Müştəri: ${String(customerName).trim()}`,
    `Telefon: ${customerPhone || 'qeyd edilməyib'}`,
    `Masa/ünvan: ${String(tableOrAddress).trim()}`,
    '',
    ...validatedItems.map(item => `${item.name} x${item.quantity} - ${item.lineTotal.toFixed(2)} AZN`),
    '',
    `Cəm: ${createdOrder.total.toFixed(2)} AZN`,
    notes ? `Qeyd: ${notes}` : ''
  ].filter(Boolean).join('\n');
  response.status(201).json({
    ...createdOrder,
    whatsappUrl: whatsappOrderNumber ? `https://wa.me/${whatsappOrderNumber}?text=${encodeURIComponent(whatsappMessage)}` : null
  });
});

app.patch('/api/owner/orders/:id', requireOwner, (request, response) => {
  const allowedStatuses = new Set(['pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled', 'rejected']);
  const allowedPayments = new Set(['unpaid', 'paid', 'completed', 'refunded']);
  const { status, paymentStatus, paymentMethod } = request.body || {};
  if ((status && !allowedStatuses.has(status)) || (paymentStatus && !allowedPayments.has(paymentStatus))) return response.status(400).json({ error: 'INVALID_ORDER_STATE' });
  const order = database.prepare('SELECT id FROM orders WHERE id = ? AND restaurant_id = ?').get(request.params.id, request.session.restaurantId);
  if (!order) return response.status(404).json({ error: 'ORDER_NOT_FOUND' });
  const now = new Date().toISOString();
  database.prepare(`UPDATE orders SET status = COALESCE(?, status), payment_status = COALESCE(?, payment_status), payment_method = COALESCE(?, payment_method), updated_at = ? WHERE id = ? AND restaurant_id = ?`).run(status || null, paymentStatus || null, paymentMethod || null, now, order.id, request.session.restaurantId);
  if (status) database.prepare('INSERT INTO order_events (order_id, status, created_at) VALUES (?, ?, ?)').run(order.id, status, now);
  notifyOwnerStreams(request.session.restaurantId);
  response.json({ ok: true });
});

app.get('/api/owner/dashboard', requireOwner, (request, response) => {
  const range = request.query.range || 'today';
  const currentRange = getDateRange(range, request.query.date);
  const previousRange = getPreviousRange(range, request.query.date);
  const current = getAggregate(request.session.restaurantId, currentRange);
  const previous = getAggregate(request.session.restaurantId, previousRange);
  const orderFilter = `o.restaurant_id = ? AND o.created_at >= ? AND o.created_at <= ? AND o.status != 'cancelled'`;
  const paidFilter = `o.restaurant_id = ? AND o.created_at >= ? AND o.created_at <= ? AND o.status NOT IN ('cancelled', 'rejected') AND o.payment_status IN ('paid', 'completed')`;
  const products = database.prepare(`SELECT oi.item_id AS itemId, oi.item_name AS name, SUM(oi.quantity) AS quantity, SUM(oi.line_total) AS revenue FROM order_items oi JOIN orders o ON o.id = oi.order_id WHERE ${paidFilter} GROUP BY oi.item_id, oi.item_name ORDER BY quantity DESC`).all(request.session.restaurantId, currentRange.start, currentRange.end);
  const statuses = database.prepare(`SELECT o.status AS status, COUNT(*) AS count FROM orders o WHERE ${orderFilter} GROUP BY o.status`).all(request.session.restaurantId, currentRange.start, currentRange.end);
  const payments = database.prepare(`SELECT o.payment_method AS method, COUNT(*) AS count, SUM(o.total) AS revenue FROM orders o WHERE ${paidFilter} AND o.payment_method IS NOT NULL GROUP BY o.payment_method`).all(request.session.restaurantId, currentRange.start, currentRange.end);
  const byHour = database.prepare(`SELECT strftime('%H', o.created_at) AS hour, COUNT(*) AS orders FROM orders o WHERE ${orderFilter} GROUP BY hour ORDER BY hour`).all(request.session.restaurantId, currentRange.start, currentRange.end);
  const byDay = database.prepare(`SELECT substr(o.created_at, 1, 10) AS day, COUNT(*) AS orders, SUM(CASE WHEN o.payment_status IN ('paid', 'completed') AND o.status NOT IN ('cancelled', 'rejected') THEN o.total ELSE 0 END) AS revenue FROM orders o WHERE ${orderFilter} GROUP BY day ORDER BY day`).all(request.session.restaurantId, currentRange.start, currentRange.end);
  const cancelledOrders = database.prepare(`SELECT COUNT(*) AS value FROM orders o WHERE o.restaurant_id = ? AND o.created_at >= ? AND o.created_at <= ? AND o.status = 'cancelled'`).get(request.session.restaurantId, currentRange.start, currentRange.end).value;
  response.json({
    range: currentRange,
    kpis: { revenue: current.revenue, orders: current.orders, averageOrder: current.averageOrder, activeTables: current.activeTables },
    trends: { revenue: { percentage: percentChange(current.revenue, previous.revenue) }, orders: { percentage: percentChange(current.orders, previous.orders) }, averageOrder: { percentage: percentChange(current.averageOrder || 0, previous.averageOrder || 0) } },
    revenue: { today: current.revenue, week: getAggregate(request.session.restaurantId, getDateRange('week')).revenue, month: getAggregate(request.session.restaurantId, getDateRange('month')).revenue, total: database.prepare(`SELECT COALESCE(SUM(total), 0) AS value FROM orders WHERE restaurant_id = ? AND status NOT IN ('cancelled', 'rejected') AND payment_status IN ('paid', 'completed')`).get(request.session.restaurantId).value },
    paidOrders: current.paidOrders,
    cancelledOrders,
    averageOrder: current.averageOrder,
    products,
    statuses,
    payments,
    byHour,
    byDay
  });
});

if (isProduction) app.use(express.static(path.join(__dirname, 'dist')));
app.listen(port, () => console.log(`Shakii Garden API listening on http://localhost:${port}`));
