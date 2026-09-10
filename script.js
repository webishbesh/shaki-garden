/**
 * ============================================================================
 * THE MOOD — BISTRO & GRILL
 * script.js — Əsas biznes məntiqi və naviqasiya skripti.
 * 
 * 1. 11 Əsas Bölmə (Main Sections) -> Ana səhifə
 * 2. Hər bölmənin daxilindəki Alt Kateqoriyalar (Subcategories) -> 
 *    Eynilə ana səhifədəki kartların eyni ölçüsündə, çərçivəsində və nömrələnməsində
 * 3. Hər alt kateqoriyaya aid Yemək Kartları (Dishes & Drinks)
 * 4. Çoxdillilik (AZ / EN / RU), Axtarış, Səbət və Sifariş sistemi
 * ============================================================================
 */

import { menuSections, getAllMenuItems } from './menuData.js';

/* ----------------------------------------------------------------------------
 * 1. i18n — ÇOXDİLLİLİK (AZ / EN / RU)
 * ---------------------------------------------------------------------------- */
const i18n = {
  az: {
    brandThe: 'THE',
    brandMood: 'MOOD',
    brandSub: 'BISTRO & GRILL',
    back: 'Geri',
    backToCategories: 'Əvvəlki bölməyə qayıdın',
    backToMainSections: 'Əvvəlki bölməyə qayıdın',
    backToSubcategories: 'Əvvəlki bölməyə qayıdın',
    searchPlaceholder: 'Yemək və ya içki axtar...',
    searchTitle: 'Axtarış nəticələri',
    searchNoResults: 'Axtarışınıza uyğun heç bir təam tapılmadı.',
    cart: 'Səbət',
    cartTitle: 'Sifariş Səbəti',
    cartEmpty: 'Səbətiniz hələlik boşdur.',
    cartEmptyBtn: 'Menyudan seçim edin',
    addToCart: 'Səbətə at',
    addedToCart: 'Səbətə əlavə olundu!',
    emptyCart: 'Səbəti Boşalt',
    emptyCartConfirm: 'Səbətdəki bütün yeməkləri silmək istədiyinizdən əminsiniz?',
    backToMenu: 'Menyuya Qayıt',
    checkoutBtn: 'Sifarişi Təsdiqlə',
    serviceFee: 'Xidmət haqqı (8%):',
    subtotal: 'Məbləğ:',
    total: 'Cəm:',
    tableColIndex: '',
    tableColName: '',
    tableColPrice: 'Qiymət',
    tableColQty: 'Say',
    tableColTotal: 'Cəm',
    itemsWord: 'təam',
    // Sifariş forması
    checkoutTitle: 'Sifarişi Rəsmiləşdir',
    fieldName: 'Adınız və Soyadınız',
    fieldNamePlaceholder: 'Məs: Rəşad Əliyev',
    fieldTableOrAddress: 'Masa Nömrəsi və ya Ünvan',
    fieldTablePlaceholder: 'Məs: Masa 12 və ya Nizami küç. 45',
    fieldPhone: 'Əlaqə nömrəsi',
    fieldPhonePlaceholder: '+994 (50) 000-00-00',
    fieldNotes: 'Xüsusi qeyd və ya istək (istəyə görə)',
    fieldNotesPlaceholder: 'Məs: sous ayrı verilsin, acısız olsun...',
    btnSubmitOrder: 'Sifarişi Göndər',
    btnCancel: 'Ləğv et',
    orderSuccessTitle: 'Sifarişiniz qəbul edildi!',
    orderSuccessMsg: 'Təşəkkür edirik! Sifarişiniz mətbəxə ötürüldü və qısa zamanda masanıza təqdim ediləcək.',
    orderCodeLabel: 'Sifariş No:',
    btnNewOrder: 'Yeni Sifariş',
    fillRequiredFields: 'Zəhmət olmasa, adınızı və masa/ünvan məlumatını qeyd edin.'
  },
  en: {
    brandThe: 'THE',
    brandMood: 'MOOD',
    brandSub: 'BISTRO & GRILL',
    back: 'Back',
    backToCategories: 'Back to previous section',
    backToMainSections: 'Back to previous section',
    backToSubcategories: 'Back to previous section',
    searchPlaceholder: 'Search dishes or drinks...',
    searchTitle: 'Search Results',
    searchNoResults: 'No dishes found matching your search.',
    cart: 'Cart',
    cartTitle: 'Your Cart',
    cartEmpty: 'Your cart is currently empty.',
    cartEmptyBtn: 'Explore the menu',
    addToCart: 'Add to Cart',
    addedToCart: 'Added to cart!',
    emptyCart: 'Clear Cart',
    emptyCartConfirm: 'Are you sure you want to clear your cart?',
    backToMenu: 'Back to Menu',
    checkoutBtn: 'Confirm Order',
    serviceFee: 'Service Charge (8%):',
    subtotal: 'Subtotal:',
    total: 'Total:',
    tableColIndex: '',
    tableColName: '',
    tableColPrice: 'Price',
    tableColQty: 'Qty',
    tableColTotal: 'Total',
    itemsWord: 'items',
    // Order form
    checkoutTitle: 'Complete Your Order',
    fieldName: 'Full Name',
    fieldNamePlaceholder: 'e.g. John Smith',
    fieldTableOrAddress: 'Table Number or Address',
    fieldTablePlaceholder: 'e.g. Table 12 or Nizami str. 45',
    fieldPhone: 'Phone Number',
    fieldPhonePlaceholder: '+994 (50) 000-00-00',
    fieldNotes: 'Special Requests / Notes (optional)',
    fieldNotesPlaceholder: 'e.g. sauce on the side, no onions...',
    btnSubmitOrder: 'Place Order',
    btnCancel: 'Cancel',
    orderSuccessTitle: 'Order Received!',
    orderSuccessMsg: 'Thank you! Your order has been dispatched to the kitchen and will be served shortly.',
    orderCodeLabel: 'Order #:',
    btnNewOrder: 'New Order',
    fillRequiredFields: 'Please provide your name and table/address.'
  },
  ru: {
    brandThe: 'THE',
    brandMood: 'MOOD',
    brandSub: 'BISTRO & GRILL',
    back: 'Назад',
    backToCategories: 'Вернуться в предыдущий раздел',
    backToMainSections: 'Вернуться в предыдущий раздел',
    backToSubcategories: 'Вернуться в предыдущий раздел',
    searchPlaceholder: 'Поиск блюд или напитков...',
    searchTitle: 'Результаты поиска',
    searchNoResults: 'По вашему запросу блюда не найдены.',
    cart: 'Корзина',
    cartTitle: 'Ваша Корзина',
    cartEmpty: 'Ваша корзина пока пуста.',
    cartEmptyBtn: 'Выбрать из меню',
    addToCart: 'В корзину',
    addedToCart: 'Добавлено в корзину!',
    emptyCart: 'Очистить корзину',
    emptyCartConfirm: 'Вы уверены, что хотите очистить корзину?',
    backToMenu: 'Вернуться в меню',
    checkoutBtn: 'Оформить заказ',
    serviceFee: 'Обслуживание (8%):',
    subtotal: 'Сумма:',
    total: 'Итого:',
    tableColIndex: '',
    tableColName: '',
    tableColPrice: 'Цена',
    tableColQty: 'Кол-во',
    tableColTotal: 'Итого',
    itemsWord: 'блюд',
    // Форма заказа
    checkoutTitle: 'Оформление Заказа',
    fieldName: 'Имя и Фамилия',
    fieldNamePlaceholder: 'Напр: Руслан Алиев',
    fieldTableOrAddress: 'Номер столика или Адрес',
    fieldTablePlaceholder: 'Напр: Стол 12 или ул. Низами 45',
    fieldPhone: 'Номер телефона',
    fieldPhonePlaceholder: '+994 (50) 000-00-00',
    fieldNotes: 'Особые пожелания (необязательно)',
    fieldNotesPlaceholder: 'Напр: соус отдельно, без лука...',
    btnSubmitOrder: 'Отправить заказ',
    btnCancel: 'Отмена',
    orderSuccessTitle: 'Заказ принят!',
    orderSuccessMsg: 'Спасибо! Ваш заказ отправлен на кухню и скоро будет подан на ваш стол.',
    orderCodeLabel: 'Заказ №:',
    btnNewOrder: 'Новый Заказ',
    fillRequiredFields: 'Пожалуйста, укажите ваше имя и номер столика/адрес.'
  }
};

let currentLang = localStorage.getItem('the_mood_lang') || 'az';

/* ----------------------------------------------------------------------------
 * 2. STATE & PERSISTENCE
 * ---------------------------------------------------------------------------- */
let currentView = 'categories';       // 'categories' | 'subcategories' | 'items' | 'cart' | 'search'
let previousView = 'categories';      // Geri düyməsi üçün əvvəlki səhifə
let activeSectionId = null;         // Aktiv əsas bölmənin ID-si (1-dən 11-ə)
let activeSubcategoryId = null;     // Aktiv alt kateqoriyanın ID-si
let activeSearchQuery = '';          // Axtarış mətni
let cartReturnState = null;
let cart = loadCartFromStorage();    // Səbət obyekti
let favorites = loadFavoritesFromStorage();
const cartReturnStateKey = 'shakii_garden_cart_return_state';
const menuNavigationStateKey = 'shakii_garden_menu_navigation_state';

// Müvəqqəti porsiya sayğacları
const itemQtyState = {};

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem('the_mood_bistro_cart');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('LocalStorage oxuma xətası:', e);
  }
  return {};
}

function saveCartToStorage() {
  try {
    localStorage.setItem('the_mood_bistro_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('LocalStorage yazma xətası:', e);
  }
}

function loadFavoritesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('shakii_garden_favorites') || '[]');
  } catch (e) {
    return [];
  }
}

function saveFavoritesToStorage() {
  localStorage.setItem('shakii_garden_favorites', JSON.stringify(favorites));
}

function saveCartReturnState(state) {
  cartReturnState = state;
  sessionStorage.setItem(cartReturnStateKey, JSON.stringify(state));
}

function loadCartReturnState() {
  try {
    return JSON.parse(sessionStorage.getItem(cartReturnStateKey) || 'null');
  } catch (e) {
    return null;
  }
}

function saveMenuNavigationState() {
  if (!['categories', 'subcategories', 'items', 'search'].includes(currentView)) return;

  sessionStorage.setItem(menuNavigationStateKey, JSON.stringify({
    view: currentView,
    sectionId: activeSectionId,
    subcategoryId: activeSubcategoryId,
    searchQuery: activeSearchQuery,
    scrollY: window.scrollY
  }));
}

function loadMenuNavigationState() {
  try {
    return JSON.parse(sessionStorage.getItem(menuNavigationStateKey) || 'null');
  } catch (e) {
    return null;
  }
}

/* ----------------------------------------------------------------------------
 * 3. DOM ELEMENTLƏRİ
 * ---------------------------------------------------------------------------- */
const catGrid = document.getElementById('catGrid');
const subCatGrid = document.getElementById('subCatGrid');
const itemGrid = document.getElementById('itemGrid');
const searchResultsGrid = document.getElementById('searchResultsGrid');

const brandLogo = document.getElementById('brandLogo');
const mainSectionTitleEl = document.getElementById('mainSectionTitle');
const categoryTitleEl = document.getElementById('categoryTitle');
const backToMainSectionsBtn = document.getElementById('backToMainSectionsBtn');
const backLinkBtn = document.getElementById('backLinkBtn');
const backToSubcategoriesText = document.getElementById('backToSubcategoriesText');
const backHeaderBtn = document.getElementById('backHeaderBtn');
const menuBtn = document.querySelector('.menu-btn');
const sideDrawer = document.getElementById('sideDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');
const drawerMenuGroup = document.getElementById('drawerMenuGroup');
const drawerMenuToggle = document.getElementById('drawerMenuToggle');
const drawerSections = document.getElementById('drawerSections');

const viewCategories = document.getElementById('view-categories');
const viewSubcategories = document.getElementById('view-subcategories');
const viewItems = document.getElementById('view-items');
const viewSearch = document.getElementById('view-search');
const viewCart = document.getElementById('view-cart');
const viewFavorites = document.getElementById('view-favorites');
const viewProfile = document.getElementById('view-profile');
const favoritesGrid = document.getElementById('favoritesGrid');
const favoritesEmpty = document.getElementById('favoritesEmpty');
const mobileCartBadgeEl = document.getElementById('mobileCartBadge');

const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const searchHeadingEl = document.getElementById('searchHeading');
const searchCountEl = document.getElementById('searchCount');

const cartBadgeEl = document.getElementById('cartBadge');
const fabBadgeEl = document.getElementById('fabBadge');
const cartTable = document.getElementById('cartTable');
const cartBody = document.getElementById('cartBody');
const cartSummaryBlock = document.getElementById('cartSummaryBlock');
const cartActionsBlock = document.getElementById('cartActionsBlock');
const cartEmptyNote = document.getElementById('cartEmptyNote');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartServiceFeeEl = document.getElementById('cartServiceFee');
const cartTotalEl = document.getElementById('cartTotal');
const toastEl = document.getElementById('toastNotice');
const cartCloseBtn = document.getElementById('cartCloseBtn');

// Sifariş Modalı
const orderModalBackdrop = document.getElementById('orderModalBackdrop');
const orderFormEl = document.getElementById('orderForm');
const orderModalCloseBtn = document.getElementById('orderModalCloseBtn');
const cancelOrderBtn = document.getElementById('cancelOrderBtn');
const orderFormContainer = document.getElementById('orderFormContainer');
const orderSuccessContainer = document.getElementById('orderSuccessContainer');
const modalSubtotalEl = document.getElementById('modalSubtotal');
const modalServiceEl = document.getElementById('modalService');
const modalTotalEl = document.getElementById('modalTotal');
const orderCodeValEl = document.getElementById('orderCodeVal');
const newOrderBtn = document.getElementById('newOrderBtn');

let scrollLockCount = 0;
let lockedScrollY = 0;

function lockBodyScroll() {
  if (scrollLockCount === 0) {
    lockedScrollY = window.scrollY;
    document.body.classList.add('overlay-scroll-locked');
    document.body.style.top = `-${lockedScrollY}px`;
  }
  scrollLockCount += 1;
}

function unlockBodyScroll() {
  if (scrollLockCount === 0) return;
  scrollLockCount -= 1;
  if (scrollLockCount > 0) return;

  document.body.classList.remove('overlay-scroll-locked');
  document.body.style.top = '';
  window.scrollTo(0, lockedScrollY);
}

function setupContainedScroll(element) {
  if (!element) return;

  let touchStartY = 0;
  const isAtBoundary = (delta) => {
    const atTop = element.scrollTop <= 0;
    const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1;
    return (atTop && delta < 0) || (atBottom && delta > 0);
  };

  element.addEventListener('wheel', (event) => {
    if (isAtBoundary(event.deltaY)) event.preventDefault();
  }, { passive: false });

  element.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  element.addEventListener('touchmove', (event) => {
    const delta = touchStartY - event.touches[0].clientY;
    if (isAtBoundary(delta)) event.preventDefault();
  }, { passive: false });
}

function closeDrawer() {
  if (!document.body.classList.contains('drawer-open')) return;
  document.body.classList.remove('drawer-open');
  if (sideDrawer) sideDrawer.setAttribute('aria-hidden', 'true');
  unlockBodyScroll();
}

function openDrawer() {
  if (document.body.classList.contains('drawer-open')) return;
  document.body.classList.add('drawer-open');
  if (sideDrawer) sideDrawer.setAttribute('aria-hidden', 'false');
  lockBodyScroll();
}

function renderDrawerSections() {
  if (!drawerSections) return;
  drawerSections.innerHTML = menuSections.map(section => {
    const sectionName = section.names[currentLang] || section.names.az;
    const subcategories = section.subcategories.map(sub => {
      const subName = sub.names[currentLang] || sub.names.az;
      return `<button class="drawer-subcategory-link" type="button" data-section-id="${section.id}" data-subcategory-id="${sub.id}">${subName}</button>`;
    }).join('');

    return `<div class="drawer-section">
      <button class="drawer-section-toggle" type="button" aria-expanded="false">
        <span>${section.num} ${sectionName}</span><span class="drawer-chevron">∨</span>
      </button>
      <div class="drawer-subcategories">${subcategories}</div>
    </div>`;
  }).join('');

  drawerSections.querySelectorAll('.drawer-section-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const section = toggle.closest('.drawer-section');
      const expanded = section.classList.toggle('expanded');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  });

  drawerSections.querySelectorAll('.drawer-subcategory-link').forEach(link => {
    link.addEventListener('click', () => {
      openSubcategory(link.dataset.sectionId, link.dataset.subcategoryId);
      closeDrawer();
    });
  });
}

/* ----------------------------------------------------------------------------
 * 4. 11 ƏSAS BÖLMƏNİN RENDERINGİ (Ana Səhifə)
 * ---------------------------------------------------------------------------- */
function renderCategories() {
  if (!catGrid) return;
  catGrid.innerHTML = '';

  menuSections.forEach(sec => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const secName = sec.names[currentLang] || sec.names.az;

    // Şəkil strukturu və zərif fallback gradient
    card.innerHTML = `
      <img src="/images/${sec.slug}.jpg" alt="${secName}" class="cat-bg-img"
           onerror="this.style.opacity='0';" />
      <div class="cat-gradient" style="background: linear-gradient(160deg, ${sec.color}CC, #1c1c1cEE);"></div>
      <div class="frame"><span class="tl"></span><span class="br"></span></div>
      <div class="num">${sec.num}</div>
      <div class="title-wrap">
        <div class="rule"></div>
        <div class="title">${secName}</div>
      </div>
    `;

    // Bölməyə klikləyəndə alt kateqoriyaları açır
    card.onclick = () => openMainSection(sec.id);
    card.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMainSection(sec.id);
      }
    };

    catGrid.appendChild(card);
  });
}

/**
 * Əsas bölməni açır və həmin bölməyə aid alt kateqoriyaları nümayiş etdirir
 */
function openMainSection(sectionId, pushHistory = true) {
  activeSectionId = Number(sectionId);
  renderSubcategories(activeSectionId);
  navigateTo('subcategories', { sectionId: activeSectionId }, pushHistory);
}

/* ----------------------------------------------------------------------------
 * 5. ALT KATEQORİYALARIN RENDERINGİ (Eyni çərçivə, eyni ölçü, eyni zəriflik)
 * ---------------------------------------------------------------------------- */
function renderSubcategories(sectionId) {
  if (!subCatGrid) return;
  subCatGrid.innerHTML = '';

  const section = menuSections.find(s => s.id === sectionId);
  if (!section) {
    navigateTo('categories');
    return;
  }

  // Bölmənin başlığını yenilə
  const secName = section.names[currentLang] || section.names.az;
  if (mainSectionTitleEl) {
    mainSectionTitleEl.textContent = secName;
  }

  // Alt kateqoriyalar üçün kartlar yaradılır — eynən cat-card ölçüsündə
  section.subcategories.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const subName = sub.names[currentLang] || sub.names.az;

    card.innerHTML = `
      <img src="/images/${sub.slug}.jpg" alt="${subName}" class="cat-bg-img"
           onerror="this.style.opacity='0';" />
      <div class="cat-gradient" style="background: linear-gradient(160deg, ${sub.color}CC, #1c1c1cEE);"></div>
      <div class="frame"><span class="tl"></span><span class="br"></span></div>
      <div class="num">${sub.num}</div>
      <div class="title-wrap">
        <div class="rule"></div>
        <div class="title">${subName}</div>
      </div>
    `;

    // Alt kateqoriyaya klikləyəndə yemək kartlarına keçid
    card.onclick = () => openSubcategory(section.id, sub.id);
    card.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSubcategory(section.id, sub.id);
      }
    };

    subCatGrid.appendChild(card);
  });
}

/**
 * Alt kateqoriyanı açır və yemək kartlarını nümayiş etdirir
 */
function openSubcategory(sectionId, subcategoryId, pushHistory = true) {
  activeSectionId = Number(sectionId);
  activeSubcategoryId = subcategoryId;
  renderCategoryItems();
  navigateTo('items', { sectionId: activeSectionId, subcategoryId }, pushHistory);
}

/* ----------------------------------------------------------------------------
 * 6. YEMƏK KARTLARININ RENDERINGİ (Item Cards)
 * ---------------------------------------------------------------------------- */
function createItemCard(it, targetContainer) {
  const card = document.createElement('div');
  card.className = 'item-card';

  if (!itemQtyState[it.id]) {
    itemQtyState[it.id] = 1;
  }
  const currentQty = itemQtyState[it.id];

  const itName = it.names[currentLang] || it.names.az;
  const itDesc = it.desc[currentLang] || it.desc.az || '';
  const itTag = it.tag ? (it.tag[currentLang] || it.tag.az) : '';
  const isSpicy = it.tag && (it.tag.az === 'Spicy' || it.tag.az === 'Veg/Spicy');
  const isFavorite = favorites.includes(it.id);

  // Kateqoriya / Bölmə etiketi (axtarış zamanı aydın görünməsi üçün)
  let parentLabel = '';
  if (it.subcategoryName) {
    parentLabel = it.subcategoryName[currentLang] || it.subcategoryName.az;
  }

    const calculatedPrice = (it.price * currentQty).toFixed(2);

    card.innerHTML = `
    <div class="photo-wrap" style="background: linear-gradient(135deg, #d8cfc0, #a98f6c);">
      <img src="/images/items/${it.id}.jpg" alt="${itName}" class="photo"
           onerror="this.style.display='none';" />
      ${itTag ? `<div class="tag-badge ${isSpicy ? 'badge-spicy' : ''}">${itTag}</div>` : ''}
      ${parentLabel ? `<div class="category-pill">${parentLabel}</div>` : ''}
      <button class="favorite-btn ${isFavorite ? 'is-favorite' : ''}" type="button" aria-label="${isFavorite ? 'Sevimlilərdən çıxar' : 'Sevimlilərə əlavə et'}" onclick="toggleFavorite(event, '${it.id}')">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.4-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.8A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.6z"/></svg>
      </button>
    </div>
    <div class="body">
      <h3 class="name">${itName}</h3>
      ${itDesc ? `<div class="desc">${itDesc}</div>` : ''}
      <div class="price-stepper-row">
        <div class="item-price-display" id="price-disp-${it.id}">${calculatedPrice} AZN</div>
        <div class="qty-stepper">
          <button type="button" class="qty-btn" aria-label="Azalt" onclick="stepItemQty('${it.id}', -1)">−</button>
          <span class="qty-val" id="qty-disp-${it.id}">${currentQty}</span>
          <button type="button" class="qty-btn" aria-label="Artır" onclick="stepItemQty('${it.id}', 1)">+</button>
        </div>
      </div>
      <button class="add-btn" onclick="addItemToCart('${it.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12L4 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
        <span>${i18n[currentLang].addToCart}</span>
      </button>
    </div>
  `;

  targetContainer.appendChild(card);
}

window.toggleFavorite = function(event, itemId) {
  event.stopPropagation();
  favorites = favorites.includes(itemId)
    ? favorites.filter(id => id !== itemId)
    : [...favorites, itemId];
  saveFavoritesToStorage();
  if (currentView === 'items' && activeSectionId && activeSubcategoryId) {
    renderCategoryItems();
  }
  renderFavorites();
};

function renderFavorites() {
  if (!favoritesGrid) return;
  favoritesGrid.innerHTML = '';
  const favoriteItems = getAllMenuItems().filter(item => favorites.includes(item.id));
  favoriteItems.forEach(item => createItemCard(item, favoritesGrid));
  if (favoritesEmpty) favoritesEmpty.style.display = favoriteItems.length ? 'none' : 'flex';
}

/**
 * Aktiv alt kateqoriyanın yeməklərini nümayiş etdirir
 */
function renderCategoryItems() {
  if (!itemGrid) return;
  itemGrid.innerHTML = '';

  const section = menuSections.find(s => s.id === activeSectionId);
  if (!section) {
    navigateTo('categories');
    return;
  }

  const subcat = section.subcategories.find(sb => sb.id === activeSubcategoryId);
  if (!subcat) {
    renderSubcategories(section.id);
    navigateTo('subcategories');
    return;
  }

  // Başlığı yenilə
  const subTitleText = subcat.names[currentLang] || subcat.names.az;
  const secName = section.names[currentLang] || section.names.az;

  if (categoryTitleEl) {
    categoryTitleEl.textContent = subTitleText;
  }

  // Geri düyməsinin mətni yemək kartları bölməsində də 'Əvvəlki bölməyə qayıdın' qalır
  if (backToSubcategoriesText) {
    backToSubcategoriesText.textContent = (i18n[currentLang] && i18n[currentLang].backToSubcategories) || 'Əvvəlki bölməyə qayıdın';
  }

  // Bütün yeməkləri əlavə et
  subcat.items.forEach(it => {
    createItemCard({
      ...it,
      subcategoryName: subcat.names
    }, itemGrid);
  });
}

/**
 * Kart üzərindəki sayğac düyməsi (+ / -)
 * Say artdıqda və ya azaldıqda həmin yeməyin kartındakı qiymət də mütənasib dəyişir
 */
window.stepItemQty = function(itemId, dir) {
  const current = itemQtyState[itemId] || 1;
  const next = Math.max(1, current + dir);
  itemQtyState[itemId] = next;

  // Sayı ekranda yenilə
  const qtyEl = document.getElementById(`qty-disp-${itemId}`);
  if (qtyEl) {
    qtyEl.textContent = next;
  }

  // Qiyməti sayına görə vurub yenilə
  const priceEl = document.getElementById(`price-disp-${itemId}`);
  if (priceEl) {
    const allItems = getAllMenuItems();
    const foundItem = allItems.find(x => x.id === itemId);
    if (foundItem) {
      const updatedTotal = (foundItem.price * next).toFixed(2);
      priceEl.textContent = `${updatedTotal} AZN`;
    }
  }
};

/**
 * Yeməyi səbətə əlavə edir
 */
window.addItemToCart = function(itemId) {
  const allItems = getAllMenuItems();
  const foundItem = allItems.find(x => x.id === itemId);

  if (!foundItem) return;

  const qtyToAdd = itemQtyState[itemId] || 1;

  if (!cart[itemId]) {
    cart[itemId] = {
      item: foundItem,
      qty: 0
    };
  }
  cart[itemId].qty += qtyToAdd;

  // Sayğacı və göstərilən qiyməti ilkin halına (1 porsiya) qaytarırıq
  itemQtyState[itemId] = 1;
  const qtyEl = document.getElementById(`qty-disp-${itemId}`);
  if (qtyEl) qtyEl.textContent = '1';

  const priceEl = document.getElementById(`price-disp-${itemId}`);
  if (priceEl) {
    priceEl.textContent = `${foundItem.price.toFixed(2)} AZN`;
  }

  saveCartToStorage();
  updateCartBadge();
  showToast(`${foundItem.names[currentLang] || foundItem.names.az} ${i18n[currentLang].addedToCart}`);
};

/* ----------------------------------------------------------------------------
 * 7. SƏBƏT İDARƏSİ (Cart System)
 * ---------------------------------------------------------------------------- */
function updateCartBadge() {
  const totalCount = Object.values(cart).reduce((sum, entry) => sum + entry.qty, 0);
  if (cartBadgeEl) cartBadgeEl.textContent = totalCount;
  if (fabBadgeEl) fabBadgeEl.textContent = totalCount;
  if (mobileCartBadgeEl) mobileCartBadgeEl.textContent = totalCount;
}

function updateCartUI() {
  updateCartBadge();
  if (!cartBody) return;

  const entries = Object.values(cart);

  if (entries.length === 0) {
    if (cartTable) cartTable.style.display = 'none';
    if (cartSummaryBlock) cartSummaryBlock.style.display = 'none';
    if (cartActionsBlock) cartActionsBlock.style.display = 'none';
    if (cartEmptyNote) cartEmptyNote.style.display = 'block';
    return;
  }

  if (cartTable) cartTable.style.display = 'table';
  if (cartSummaryBlock) cartSummaryBlock.style.display = 'block';
  if (cartActionsBlock) cartActionsBlock.style.display = 'flex';
  if (cartEmptyNote) cartEmptyNote.style.display = 'none';

  cartBody.innerHTML = '';
  let subtotal = 0;

  entries.forEach((entry, idx) => {
    const it = entry.item;
    const itemTotal = it.price * entry.qty;
    subtotal += itemTotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-num">${idx + 1}</td>
      <td class="col-item">
        <div class="cart-item-name">${it.names[currentLang] || it.names.az}</div>
        <div class="cart-item-unit-price">${it.price.toFixed(2)} AZN</div>
      </td>
      <td class="col-price">${it.price.toFixed(2)} AZN</td>
      <td class="col-qty">
        <div class="cart-qty-ctrl">
          <button class="cart-qty-btn" aria-label="Decrease" onclick="updateCartItemQty('${it.id}', -1)">−</button>
          <span class="cart-qty-num">${entry.qty}</span>
          <button class="cart-qty-btn" aria-label="Increase" onclick="updateCartItemQty('${it.id}', 1)">+</button>
        </div>
      </td>
      <td class="col-total">${itemTotal.toFixed(2)} AZN</td>
      <td class="col-del">
        <button class="cart-del-btn" aria-label="Sil" title="Səbətdən sil" onclick="removeCartItem('${it.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </td>
    `;
    cartBody.appendChild(tr);
  });

  const serviceFee = subtotal * 0.08;
  const grandTotal = subtotal + serviceFee;

  if (cartSubtotalEl) cartSubtotalEl.textContent = `${subtotal.toFixed(2)} AZN`;
  if (cartServiceFeeEl) cartServiceFeeEl.textContent = `${serviceFee.toFixed(2)} AZN`;
  if (cartTotalEl) cartTotalEl.textContent = `${grandTotal.toFixed(2)} AZN`;
}

window.updateCartItemQty = function(itemId, delta) {
  if (!cart[itemId]) return;
  cart[itemId].qty += delta;

  if (cart[itemId].qty <= 0) {
    delete cart[itemId];
  }
  saveCartToStorage();
  updateCartUI();
};

window.removeCartItem = function(itemId) {
  if (cart[itemId]) {
    delete cart[itemId];
    saveCartToStorage();
    updateCartUI();
  }
};

window.emptyCart = function() {
  if (Object.keys(cart).length === 0) return;

  if (confirm(i18n[currentLang].emptyCartConfirm)) {
    cart = {};
    saveCartToStorage();
    updateCartUI();
    showToast(i18n[currentLang].cartEmpty);
  }
};

/* ----------------------------------------------------------------------------
 * 8. REAL-TIME AXTARIŞ SİSTEMİ
 * ---------------------------------------------------------------------------- */
function setupSearch() {
  if (!searchToggleBtn || !searchContainer || !searchInput) return;

  searchToggleBtn.addEventListener('click', () => {
    const isOpen = searchContainer.classList.contains('open');
    if (isOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.classList.remove('visible');
      activeSearchQuery = '';
      if (currentView === 'search') {
        navigateTo(previousView === 'search' ? 'categories' : previousView);
      }
    });
  }

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    activeSearchQuery = q;

    if (searchClearBtn) {
      if (q.length > 0) searchClearBtn.classList.add('visible');
      else searchClearBtn.classList.remove('visible');
    }

    if (q.length === 0) {
      if (currentView === 'search') {
        navigateTo(previousView === 'search' ? 'categories' : previousView);
      }
      return;
    }

    if (currentView !== 'search') {
      navigateTo('search');
    }

    performSearch(q);
  });
}

function openSearch() {
  searchContainer.classList.add('open');
  searchToggleBtn.classList.add('active');
  setTimeout(() => searchInput.focus(), 150);
}

function closeSearch() {
  searchContainer.classList.remove('open');
  searchToggleBtn.classList.remove('active');
  searchInput.blur();
}

function performSearch(query) {
  if (!searchResultsGrid) return;
  searchResultsGrid.innerHTML = '';

  const allItems = getAllMenuItems();
  const matchedItems = [];

  allItems.forEach(it => {
    const azName = (it.names.az || '').toLowerCase();
    const enName = (it.names.en || '').toLowerCase();
    const ruName = (it.names.ru || '').toLowerCase();

    const azDesc = (it.desc.az || '').toLowerCase();
    const enDesc = (it.desc.en || '').toLowerCase();
    const ruDesc = (it.desc.ru || '').toLowerCase();

    if (
      azName.includes(query) || enName.includes(query) || ruName.includes(query) ||
      azDesc.includes(query) || enDesc.includes(query) || ruDesc.includes(query)
    ) {
      matchedItems.push(it);
    }
  });

  if (searchCountEl) {
    searchCountEl.textContent = `(${matchedItems.length} ${i18n[currentLang].itemsWord})`;
  }

  if (matchedItems.length === 0) {
    searchResultsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--ink-muted);">
        <p style="font-size: 17px; margin-bottom: 8px;">${i18n[currentLang].searchNoResults}</p>
        <span style="font-size: 13.5px; opacity: 0.8;">«${query}»</span>
      </div>
    `;
    return;
  }

  matchedItems.forEach(it => {
    createItemCard(it, searchResultsGrid);
  });
}

/* ----------------------------------------------------------------------------
 * 9. ROUTING, NAVİQASİYA VƏ TARİXÇƏ İDARƏSİ (Router & Browser History Engine)
 * ---------------------------------------------------------------------------- */
let isNavigatingFromPopState = false;
const rootHistoryBaseState = { view: 'categories', rootBase: true };
const rootHistoryGuardState = { view: 'categories', rootGuard: true };
const scrollPositionsStorageKey = 'shaki_garden_scroll_positions';

function armRootHistoryGuard() {
  window.history.replaceState(rootHistoryBaseState, '', '#categories');
  window.history.pushState(rootHistoryGuardState, '', '#categories');
}

function getSavedScrollPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(scrollPositionsStorageKey) || '{}');
  } catch (error) {
    return {};
  }
}

function saveScrollPosition(routeHash = window.location.hash || '#categories') {
  try {
    const positions = getSavedScrollPositions();
    positions[routeHash] = window.scrollY;
    sessionStorage.setItem(scrollPositionsStorageKey, JSON.stringify(positions));
  } catch (error) {
  }
}

function restoreScrollPosition(routeHash) {
  let savedPosition = 0;
  try {
    savedPosition = getSavedScrollPositions()[routeHash] || 0;
  } catch (error) {
    savedPosition = 0;
  }
  scrollToInstantly(savedPosition);
}

function scrollToInstantly(scrollY) {
  const htmlScrollBehavior = document.documentElement.style.scrollBehavior;
  const bodyScrollBehavior = document.body.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.scrollBehavior = 'auto';
  window.scrollTo(0, scrollY);
  document.documentElement.style.scrollBehavior = htmlScrollBehavior;
  document.body.style.scrollBehavior = bodyScrollBehavior;
}

function setupMobileCartTouchLock() {
  const cartWrap = document.querySelector('.cart-wrap');
  if (!cartWrap) return;

  cartWrap.addEventListener('touchmove', (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      event.preventDefault();
    }
  }, { passive: false });
}

function buildRouteHash(viewName, params = {}) {
  const secId = params.sectionId || activeSectionId;
  const subId = params.subcategoryId || activeSubcategoryId;

  if (viewName === 'subcategories' && secId) {
    return `#section-${secId}`;
  }
  if (viewName === 'items' && secId && subId) {
    return `#section-${secId}/sub-${subId}`;
  }
  if (viewName === 'cart') {
    return '#cart';
  }
  if (viewName === 'search') {
    const q = params.searchQuery || activeSearchQuery;
    return q ? `#search?q=${encodeURIComponent(q)}` : '#search';
  }
  if (viewName === 'favorites') {
    return '#favorites';
  }
  if (viewName === 'profile') {
    return '#profile';
  }
  return '#categories';
}

function navigateTo(viewName, params = {}, pushHistory = true, restoreScroll = false) {
  const currentRouteHash = window.location.hash || '#categories';
  const targetRouteHash = buildRouteHash(viewName, params);

  if (currentRouteHash !== targetRouteHash) {
    saveScrollPosition(currentRouteHash);
  }

  if (viewName === 'cart' && currentView !== 'cart') {
    saveMenuNavigationState();
    saveCartReturnState({
      view: currentView,
      sectionId: activeSectionId,
      subcategoryId: activeSubcategoryId,
      searchQuery: activeSearchQuery,
      scrollY: window.scrollY
    });
  }

  if ((viewName === 'favorites' || viewName === 'profile') && currentView !== viewName) {
    saveMenuNavigationState();
  }

  if (currentView !== viewName) {
    previousView = currentView;
  }
  currentView = viewName;

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.body.classList.toggle('mobile-view-active', viewName === 'favorites' || viewName === 'profile');
  document.body.classList.toggle('view-home-active', viewName === 'categories');
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.mobileView === viewName);
  });

  if (backHeaderBtn) {
    if (viewName === 'categories') {
      backHeaderBtn.style.opacity = '0';
      backHeaderBtn.style.pointerEvents = 'none';
    } else {
      backHeaderBtn.style.opacity = '1';
      backHeaderBtn.style.pointerEvents = 'auto';
    }
  }

  if (viewName === 'cart') {
    document.body.classList.add('view-cart-active');
    if (viewCart) viewCart.classList.add('active');
    updateCartUI();
  } else {
    document.body.classList.remove('view-cart-active');
    if (viewName === 'categories') {
      if (viewCategories) viewCategories.classList.add('active');
    } else if (viewName === 'subcategories') {
      if (viewSubcategories) viewSubcategories.classList.add('active');
    } else if (viewName === 'items') {
      if (viewItems) viewItems.classList.add('active');
    } else if (viewName === 'search') {
      if (viewSearch) viewSearch.classList.add('active');
    } else if (viewName === 'favorites') {
      if (viewFavorites) viewFavorites.classList.add('active');
      renderFavorites();
    } else if (viewName === 'profile') {
      if (viewProfile) viewProfile.classList.add('active');
    }
  }

  // Brauzerin tarixçəsinə (Browser History Stack) rəsmi qeyd əlavə etmək
  if (pushHistory && !isNavigatingFromPopState) {
    if (window.location.hash !== targetRouteHash) {
      window.history.pushState({
        view: viewName,
        sectionId: params.sectionId || activeSectionId,
        subcategoryId: params.subcategoryId || activeSubcategoryId,
        searchQuery: params.searchQuery || activeSearchQuery
      }, '', targetRouteHash);
    }
  }

  if (isNavigatingFromPopState) {
    window.requestAnimationFrame(() => restoreScrollPosition(targetRouteHash));
  } else if (restoreScroll) {
    scrollToInstantly(params.scrollY || 0);
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

window.showView = function(viewName, params = {}) {
  navigateTo(viewName, params, true);
};

function restoreMenuNavigationState(state) {
  if (!state || !state.view || state.view === 'categories') return false;

  activeSectionId = state.sectionId ? Number(state.sectionId) : null;
  activeSubcategoryId = state.subcategoryId || null;
  activeSearchQuery = state.searchQuery || '';

  if (state.view === 'subcategories' && activeSectionId) {
    renderSubcategories(activeSectionId);
    navigateTo('subcategories', { sectionId: activeSectionId, scrollY: state.scrollY }, false, true);
  } else if (state.view === 'items' && activeSectionId && activeSubcategoryId) {
    renderCategoryItems();
    navigateTo('items', {
      sectionId: activeSectionId,
      subcategoryId: activeSubcategoryId,
      scrollY: state.scrollY
    }, false, true);
  } else if (state.view === 'search' && activeSearchQuery) {
    performSearch(activeSearchQuery);
    navigateTo('search', { searchQuery: activeSearchQuery, scrollY: state.scrollY }, false, true);
  } else {
    return false;
  }

  window.history.replaceState({
    view: state.view,
    sectionId: activeSectionId,
    subcategoryId: activeSubcategoryId,
    searchQuery: activeSearchQuery
  }, '', buildRouteHash(state.view, state));
  return true;
}

window.returnToMenu = function() {
  const returnState = cartReturnState || loadCartReturnState() || {
    view: 'categories',
    sectionId: null,
    subcategoryId: null,
    searchQuery: ''
  };

  if (returnState.view === 'subcategories' && returnState.sectionId) {
    activeSectionId = Number(returnState.sectionId);
    renderSubcategories(activeSectionId);
    navigateTo('subcategories', { sectionId: activeSectionId, scrollY: returnState.scrollY }, false, true);
    window.history.replaceState({ view: 'subcategories', sectionId: activeSectionId }, '', `#section-${activeSectionId}`);
  } else if (returnState.view === 'items' && returnState.sectionId && returnState.subcategoryId) {
    activeSectionId = Number(returnState.sectionId);
    activeSubcategoryId = returnState.subcategoryId;
    renderCategoryItems();
    navigateTo('items', {
      sectionId: activeSectionId,
      subcategoryId: activeSubcategoryId,
      scrollY: returnState.scrollY
    }, false, true);
    window.history.replaceState({
      view: 'items',
      sectionId: activeSectionId,
      subcategoryId: activeSubcategoryId
    }, '', `#section-${activeSectionId}/sub-${activeSubcategoryId}`);
  } else if (returnState.view === 'search' && returnState.searchQuery) {
    activeSearchQuery = returnState.searchQuery;
    performSearch(activeSearchQuery);
    navigateTo('search', { searchQuery: activeSearchQuery, scrollY: returnState.scrollY }, false, true);
    window.history.replaceState({ view: 'search', searchQuery: activeSearchQuery }, '', `#search?q=${encodeURIComponent(activeSearchQuery)}`);
  } else {
    navigateTo('categories', { scrollY: returnState.scrollY }, false, true);
    armRootHistoryGuard();
  }

};

/**
 * URL Hash-dən tətbiq daxili marşrutu tətbiq edir (Deep Linking və popstate üçün)
 */
function applyRouteFromURL() {
  const hash = window.location.hash || '';

  // 1. Axtarış: #search və ya #search?q=kebab
  if (hash.startsWith('#search')) {
    const qIndex = hash.indexOf('?q=');
    let q = '';
    if (qIndex !== -1) {
      q = decodeURIComponent(hash.substring(qIndex + 3));
    }
    activeSearchQuery = q;
    if (q && searchInput) {
      searchInput.value = q;
      if (searchClearBtn) searchClearBtn.classList.add('visible');
    }
    if (q) {
      openSearch();
      performSearch(q);
    }
    navigateTo('search', { searchQuery: q }, false);
    return;
  }

  // 2. Səbət: #cart
  if (hash === '#cart') {
    navigateTo('cart', {}, false);
    return;
  }

  if (hash === '#favorites') {
    navigateTo('favorites', {}, false);
    return;
  }

  if (hash === '#profile') {
    navigateTo('profile', {}, false);
    return;
  }

  // 3. Yeməklər: #section-1/sub-1-1
  const itemMatch = hash.match(/^#section-([^/]+)\/sub-([^/]+)$/);
  if (itemMatch) {
    const secId = Number(itemMatch[1]);
    const subId = itemMatch[2];
    activeSectionId = secId;
    activeSubcategoryId = subId;
    renderCategoryItems();
    navigateTo('items', { sectionId: secId, subcategoryId: subId }, false);
    return;
  }

  // 4. Alt kateqoriyalar: #section-1
  const secMatch = hash.match(/^#section-([^/]+)$/);
  if (secMatch) {
    const secId = Number(secMatch[1]);
    activeSectionId = secId;
    renderSubcategories(secId);
    navigateTo('subcategories', { sectionId: secId }, false);
    return;
  }

  // 5. Ana menyu: #categories və ya boş
  activeSectionId = null;
  activeSubcategoryId = null;
  if (searchInput) searchInput.value = '';
  closeSearch();
  navigateTo('categories', {}, false);
}

/**
 * Yuxarıdakı loqoya kliklədikdə və ya hər hansı bölmədən ana səhifəyə qayıtmaq üçün funksiya
 */
function goToHomePage() {
  const savedMenuState = loadMenuNavigationState();
  if (currentView !== 'categories' && restoreMenuNavigationState(savedMenuState)) {
    return;
  }

  activeSectionId = null;
  activeSubcategoryId = null;
  if (searchInput) searchInput.value = '';
  closeSearch();
  if (typeof closeCheckoutModal === 'function') {
    closeCheckoutModal();
  }
  navigateTo('categories', {}, true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  armRootHistoryGuard();
}
window.goToHomePage = goToHomePage;

/**
 * Geri qayıtma əməliyyatı:
 * Brauzer / Mobil geri jesti və ya ekrandakı geri düymələri üçün ümumi idarəedici
 */
function handleBackAction() {
  if (orderModalBackdrop && orderModalBackdrop.classList.contains('open')) {
    closeCheckoutModal();
    return;
  }

  const hash = window.location.hash || '';
  if (window.history.length > 1 && hash && hash !== '#categories') {
    window.history.back();
  } else {
    if (currentView === 'items' || currentView === 'subcategories' || currentView === 'cart' || currentView === 'search' || currentView === 'favorites' || currentView === 'profile') {
      navigateTo('categories', {}, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
window.handleBackAction = handleBackAction;

/* ----------------------------------------------------------------------------
 * 10. ÇOXDİLLİLİK TƏTBİQİ (i18n Apply)
 * ---------------------------------------------------------------------------- */
function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('the_mood_lang', lang);

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  applyTranslations();
  renderCategories();
  renderDrawerSections();

  if (currentView === 'subcategories' && activeSectionId) {
    renderSubcategories(activeSectionId);
  } else if (currentView === 'items' && activeSectionId && activeSubcategoryId) {
    renderCategoryItems();
  } else if (currentView === 'cart') {
    updateCartUI();
  } else if (currentView === 'search' && activeSearchQuery) {
    performSearch(activeSearchQuery);
  }
}
window.changeLanguage = setLanguage;

function applyTranslations() {
  const dict = i18n[currentLang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  if (searchInput) {
    searchInput.setAttribute('placeholder', dict.searchPlaceholder);
  }
}

/* ----------------------------------------------------------------------------
 * 11. SİFARİŞ / CHECKOUT MODALI
 * ---------------------------------------------------------------------------- */
window.openCheckoutModal = function() {
  const entries = Object.values(cart);
  if (entries.length === 0) {
    showToast(i18n[currentLang].cartEmpty);
    return;
  }

  const subtotal = entries.reduce((acc, cur) => acc + cur.item.price * cur.qty, 0);
  const service = subtotal * 0.08;
  const total = subtotal + service;

  if (modalSubtotalEl) modalSubtotalEl.textContent = `${subtotal.toFixed(2)} AZN`;
  if (modalServiceEl) modalServiceEl.textContent = `${service.toFixed(2)} AZN`;
  if (modalTotalEl) modalTotalEl.textContent = `${total.toFixed(2)} AZN`;

  if (orderFormContainer) orderFormContainer.style.display = 'block';
  if (orderSuccessContainer) orderSuccessContainer.style.display = 'none';

  if (orderModalBackdrop) {
    orderModalBackdrop.classList.add('open');
    lockBodyScroll();
  }
};

window.closeCheckoutModal = function() {
  if (orderModalBackdrop) {
    orderModalBackdrop.classList.remove('open');
    unlockBodyScroll();
  }
};

function setupOrderForm() {
  if (orderModalCloseBtn) orderModalCloseBtn.addEventListener('click', closeCheckoutModal);
  if (cancelOrderBtn) cancelOrderBtn.addEventListener('click', closeCheckoutModal);

  if (orderModalBackdrop) {
    orderModalBackdrop.addEventListener('click', (e) => {
      if (e.target === orderModalBackdrop) closeCheckoutModal();
    });
  }

  if (orderFormEl) {
    orderFormEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName')?.value.trim();
      const table = document.getElementById('custTable')?.value.trim();
      const phone = document.getElementById('custPhone')?.value.trim();
      const notes = document.getElementById('custNotes')?.value.trim();

      if (!name || !table) {
        alert(i18n[currentLang].fillRequiredFields);
        return;
      }

      const orderCode = '#MD-' + Math.floor(1000 + Math.random() * 9000);
      if (orderCodeValEl) orderCodeValEl.textContent = orderCode;

      cart = {};
      saveCartToStorage();
      updateCartUI();

      if (orderFormContainer) orderFormContainer.style.display = 'none';
      if (orderSuccessContainer) orderSuccessContainer.style.display = 'block';
    });
  }

  if (newOrderBtn) {
    newOrderBtn.addEventListener('click', () => {
      closeCheckoutModal();
      navigateTo('categories');
    });
  }
}

/* ----------------------------------------------------------------------------
 * 12. BİLDİRİŞ (Toast)
 * ---------------------------------------------------------------------------- */
let toastTimeout = null;
function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('visible');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('visible');
  }, 2400);
}

/* ----------------------------------------------------------------------------
 * 13. BAŞLANĞIC İNİSİALİZASİYASI (App Init)
 * ---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', window.returnToMenu);

  setupContainedScroll(sideDrawer);
  setupContainedScroll(document.querySelector('.order-modal'));
  setupMobileCartTouchLock();

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  if (drawerMenuToggle) {
    drawerMenuToggle.addEventListener('click', () => {
      const expanded = drawerMenuGroup.classList.toggle('expanded');
      drawerMenuToggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // Geri düymələri (Brauzer tarixçəsi ilə tam sinxron)
  if (backHeaderBtn) {
    backHeaderBtn.addEventListener('click', handleBackAction);
  }
  if (brandLogo) {
    brandLogo.addEventListener('click', goToHomePage);
    brandLogo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goToHomePage();
      }
    });
  }
  if (backToMainSectionsBtn) {
    backToMainSectionsBtn.addEventListener('click', handleBackAction);
  }
  if (backLinkBtn) {
    backLinkBtn.addEventListener('click', handleBackAction);
  }

  // Mobil cihazların geri jesti və ya brauzerin Geri/İrəli düymələri (popstate)
  window.addEventListener('popstate', (event) => {
    if (orderModalBackdrop && orderModalBackdrop.classList.contains('open')) {
      closeCheckoutModal();
      return;
    }

    if (event.state?.rootBase && currentView === 'categories') {
      armRootHistoryGuard();
      return;
    }

    isNavigatingFromPopState = true;
    applyRouteFromURL();
    isNavigatingFromPopState = false;
  });

  // Dil dəyişmə düymələri
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Axtarış və formalar
  setupSearch();
  setupOrderForm();

  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.mobileView;
      if (view === 'categories') {
        goToHomePage();
      } else {
        navigateTo(view);
      }
    });
  });

  const profileFields = ['profileName', 'profileSurname', 'profilePhone', 'profileEmail'];
  const savedProfile = JSON.parse(localStorage.getItem('shakii_garden_profile') || '{}');
  profileFields.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.value = savedProfile[id] || '';
      field.addEventListener('input', () => {
        const profile = Object.fromEntries(profileFields.map(fieldId => [fieldId, document.getElementById(fieldId)?.value || '']));
        localStorage.setItem('shakii_garden_profile', JSON.stringify(profile));
      });
    }
  });
  const profileForm = document.getElementById('profileForm');
  const profileStatus = document.getElementById('profileStatus');
  if (profileForm) {
    profileForm.addEventListener('submit', event => {
      event.preventDefault();
      if (profileStatus) {
        profileStatus.textContent = 'Məlumatlar yadda saxlanıldı';
        window.setTimeout(() => { profileStatus.textContent = ''; }, 2200);
      }
    });
  }

  // İlkin render
  applyTranslations();
  renderCategories();
  renderDrawerSections();
  renderFavorites();
  document.body.classList.add('view-home-active');
  updateCartBadge();

  // İlkin marşrut yoxlanışı (Deep Linking və Refresh)
  if (window.location.hash && window.location.hash !== '#categories') {
    applyRouteFromURL();
  } else {
    armRootHistoryGuard();
  }
});
