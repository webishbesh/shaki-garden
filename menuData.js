/**
 * ============================================================================
 * THE MOOD — BISTRO & GRILL
 * menuData.js — Bütün 11 bölmə, alt kateqoriyalar və dəqiq yemək kartları
 * ============================================================================
 */

import { sectionsPart1 } from './menuData1.js';
import { sectionsPart2 } from './menuData2.js';

// Bütün bölmələri birləşdiririk
const rawSections = [...sectionsPart1, ...sectionsPart2];

const itemTranslations = {};
function addItemTranslations(ids, en, ru) {
  ids.forEach((id, index) => {
    itemTranslations[id] = { en: en[index], ru: ru[index] };
  });
}

addItemTranslations(
  ['sq-1', 'sq-2', 'sq-3', 'sq-4', 'sq-5', 'sq-6', 'sq-7', 'sq-8', 'sq-9', 'sq-10', 'os-1', 'os-2', 'os-3', 'pl-1', 'pl-2', 'pl-3', 'pl-4', 'ey-1', 'ey-2', 'ey-3', 'ey-4', 'ey-5', 'ey-6', 'ey-7', 'ey-8', 'ey-9', 'ey-10', 'ey-11', 'ey-12'],
  ['Purslane with Suzme (Strained Yogurt)', 'Walnut Beet Paste', 'Eggplant with Suzme', 'Vegetable Beans', 'Hummus', 'Assorted Olives', 'Eggplant Roll', 'Vegetable Basket', 'Homemade Pickles', 'Assorted Cheese', 'Shah Plov (for 2 persons)', 'Shah Plov (for 4 persons)', 'Lamb Basket', 'Cherry Plov', 'Sabzi Plov', 'Fisinjan Plov with Beef', 'Torshu Plov', 'Grape Leaf Dolma', 'Kefli Beche (Chicken in Wine)', 'Chiz-Biz (Liver and Offal)', 'Pomegranate Qovurma', 'Shrimp in Clay Pot', 'Leaf Lamb Liver', 'Triple Vegetable Dolma (3 Baji)', 'Lamb Qovurma', 'Beef Qovurma in Ginger Sauce', 'Tabaka Chicken', 'Beef Medallion in Cherry Sauce', 'Grilled Salmon in Special Sauce'],
  ['Сюзьма с портулаком', 'Свекольная паста с орехами', 'Баклажаны с сюзьмой', 'Фасоль по-домашнему', 'Хумус', 'Ассорти оливок', 'Рулетики из баклажанов', 'Овощная корзина', 'Соленья по-домашнему', 'Сырное ассорти', 'Шах-плов (на 2 персоны)', 'Шах-плов (на 4 персоны)', 'Баранья корзина (Кузу себет)', 'Алыча плов', 'Сябзи плов', 'Фисинджан плов с говядиной', 'Туршу плов', 'Долма из виноградных листьев', 'Кефли бече (цыпленок в вине)', 'Чыз-быз', 'Нар говурма', 'Креветки в кеце (горшочке)', 'Баранья печень листовая', 'Долма из трех овощей (Уч баджы)', 'Баранья говурма', 'Говяжья говурма в имбирном соусе', 'Цыпленок табака', 'Медальоны из говяжьей вырезки в вишневом соусе', 'Семга на гриле в фирменном соусе']
);

addItemTranslations(
  ['sb-1', 'sb-2', 'sb-3', 'sb-4', 'sb-5', 'sb-6', 'sb-7', 'sb-8', 'sb-9', 'sl-1', 'sl-2', 'sl-3', 'sl-4', 'sl-5', 'sl-6', 'sl-7', 'sl-8', 'qx-1', 'qx-2', 'qx-3', 'qx-4', 'qx-5', 'qx-6', 'qx-7', 'qx-8', 'qx-9', 'qx-10'],
  ['Dovga', 'Sheki Style Piti', 'Dogramach (Cold Yogurt Soup)', 'Lentil Soup', 'Chestnut Soup', 'Chicken Soup with Noodles', 'Homemade Noodles (Erishta)', 'Baku Dushbara', 'Kufta Bozbash', 'Tomato Salad', 'Mangal Salad', 'Choban Salad', 'Crispy Eggplant Salad', 'Pumpkin Salad', 'Chicken Caesar Salad', 'Shrimp Caesar Salad', 'Qovurdag Salad', 'Baku Qutab with Greens', 'Baku Qutab with Pumpkin', 'Baku Qutab with Meat', 'Shirvan Qutab with Potato', 'Shirvan Qutab with Meat', 'Feseli with Motal Cheese', 'Ganja Style Herb Kətə with Barberry', 'Levengi Roll in Cherry Sauce', 'Gurza (Plain)', 'Gurza (Fried)'],
  ['Довга', 'Пити по-шекински', 'Дограмадж (холодный суп)', 'Чечевичный суп', 'Каштановый суп', 'Куриный суп с домашней лапшой', 'Лапша (Эриште)', 'Бакинская дюшбара', 'Кюфта бозбаш', 'Салат из помидоров', 'Мангал салат', 'Чобан салат', 'Салат из хрустящих баклажанов', 'Тыквенный салат', 'Салат Цезарь с курицей', 'Салат Цезарь с креветками', 'Салат Говурдаг', 'Бакинский кутаб с зеленью', 'Бакинский кутаб с тыквой', 'Бакинский кутаб с мясом', 'Ширванский кутаб с картофелем', 'Ширванский кутаб с мясом', 'Фясели с сыром мотал', 'Гянджинская кята с зеленью и барбарисом', 'Левенги букмеси в вишневом соусе', 'Гюрза простая', 'Гюрза жареная']
);

addItemTranslations(
  ['sc-1', 'sc-2', 'sc-3', 'sc-4', 'kb-1', 'kb-2', 'kb-3', 'kb-4', 'kb-5', 'kb-6', 'kb-7', 'kb-8', 'kb-9', 'kb-10', 'kb-11', 'kb-12', 'kb-13', 'qr-1', 'qr-2', 'qr-3', 'qr-4', 'qr-5', 'qr-6', 'so-1', 'so-2', 'so-3', 'so-4', 'ns-1', 'ns-2', 'ns-3', 'ns-4'],
  ['Chicken Saj', 'Lamb Saj', 'Beef Saj', 'Mixed Saj', 'Vegetable Kebab', 'Potato Lula', 'Chicken Kebab', 'Lamb Offal Kebab', 'Lamb Lula', 'Chicken Lula', 'Lamb Tikka', 'Beef Basturma', 'Khan Kebab', 'Lamb Ribs', 'Zander (Sudak)', 'Dorado', 'Sturgeon', 'Rice', 'French Fries', 'Country Style Potatoes', 'Homemade Fried Potatoes', 'Grilled Vegetables', 'Bread', 'Village Yogurt', 'Ajika', 'Cornelian Cherry Paste', 'Narsharab (Pomegranate Sauce)', 'Piano Pomegranate Wine (150 ml)', 'Piano Pomegranate Wine (750 ml)', 'Premium Azerbaijan Pomegranate Wine (150 ml)', 'Premium Azerbaijan Pomegranate Wine (750 ml)'],
  ['Куриный садж', 'Садж из баранины', 'Садж из говядины', 'Смешанный садж', 'Овощной шашлык', 'Картофельный люля', 'Шашлык из курицы', 'Шашлык из бараньих потрохов', 'Люля из баранины', 'Куриный люля', 'Тикка из баранины', 'Бастурма из говядины', 'Хан-кебаб', 'Бараньи ребрышки', 'Судак', 'Дорадо', 'Осетрина', 'Рис', 'Картофель фри', 'Деревенский картофель', 'Жареный картофель по-домашнему', 'Овощи гриль', 'Хлеб', 'Деревенский катык', 'Аджика', 'Кизиловая паста', 'Наршараб', 'Наршараб Piano (150 мл)', 'Наршараб Piano (750 мл)', 'Премиум Наршараб Азербайджан (150 мл)', 'Премиум Наршараб Азербайджан (750 мл)']
);

addItemTranslations(
  ['ds-1', 'ds-2', 'ds-3', 'ds-4', 'ds-5', 'ds-6', 'ds-7', 'ds-8', 'ds-9', 'ds-10', 'ds-11', 'ds-12', 'ds-13', 'ds-14', 'ds-15', 'ds-16', 'ds-17', 'sy-1', 'sy-2', 'sy-3', 'sy-4', 'sy-5', 'sy-6', 'sy-7', 'sy-8', 'sy-9', 'sy-10', 'sy-11', 'sy-12', 'sy-13', 'sy-14', 'sy-15', 'sy-16', 'sy-17', 'sy-18', 'sy-19', 'sy-20', 'sy-21', 'sy-22', 'sy-23', 'sy-24', 'sy-25'],
  ['Shekerbura', 'Pakhlava', 'Badambura', 'Honey Cake', 'San Sebastian', 'Absheron Cake', 'Ideal Cake', 'Chocolate Cheesecake (Dietary)', 'Strawberry Cheesecake (Dietary)', 'Apricot Cheesecake (Dietary)', 'Kefir Cheesecake', 'Red Velvet Dessert', 'Ice Cream', 'Havuc Dilim Pakhlava with Ice Cream', 'Kunafa', 'Katmer', 'Fruit Assortment', 'Breakfast (for 2 persons)', 'Breakfast (for 4 persons)', 'Boiled Egg', 'Oatmeal', 'Scrambled Eggs (Qayğanaq)', 'Tomato Chighirtma', 'Kuku (Herb Omelet)', 'Sausage with Eggs', 'Tomato with Eggs (Menemen)', 'Sucuk with Eggs', 'Cheese Omelet', 'Honey and Cheese Omelet', 'Minced Meat Omelet', 'Ganja Cream (Qaymaq)', 'Honey', 'Sour Cream (Xama)', 'Shor (Cottage Cheese)', 'Churned Butter (Nehrə yağı)', 'Village Cheese', 'Chocolate Butter', 'Olive Varieties', 'Fresh Tomato & Cucumber', 'Sausage Varieties', 'Tahini', 'Grape Molasses (Behməz)'],
  ['Шекербура', 'Пахлава', 'Бадамбура', 'Медовый торт', 'Сан Себастьян', 'Торт Апшерон', 'Торт Идеал', 'Шоколадный чизкейк (диетический)', 'Клубничный чизкейк (диетический)', 'Абрикосовый чизкейк (диетический)', 'Чизкейк Кефир', 'Десерт Красный Бархат', 'Мороженое', 'Пахлава «Хавуч дилим» с мороженым', 'Кюнефе', 'Катмер', 'Фруктовое ассорти', 'Завтрак (на 2 персоны)', 'Завтрак (на 4 персоны)', 'Вареное яйцо', 'Овсяная каша', 'Яичница (Кайганаг)', 'Помидор чыгыртма', 'Кюкю', 'Сосиски с яйцом', 'Помидоры с яйцом (менемен)', 'Суджук с яйцом', 'Омлет с сыром', 'Омлет с медом и сыром', 'Омлет с фаршем', 'Гянджинский каймак', 'Мед', 'Сметана (Хама)', 'Шор', 'Масло из сливок (Нехря ягы)', 'Деревенский сыр', 'Шоколадное масло', 'Оливковое ассорти', 'Свежие помидоры и огурцы', 'Колбасное ассорти', 'Тахини', 'Дошак / Бехмез (виноградный сок)']
);

addItemTranslations(
  ['cy-1', 'cy-2', 'cy-3', 'cy-4', 'cy-5', 'cy-6', 'cy-7', 'cy-8', 'cy-9', 'cy-10', 'cy-11', 'cy-12', 'cy-13', 'qh-1', 'qh-2', 'qh-3', 'qh-4', 'qh-5', 'qh-6', 'qh-7', 'qh-8', 'qh-9', 'qh-10', 'qh-11', 'qh-12', 'ik-1', 'ik-2', 'ik-3', 'ik-4', 'ik-5', 'ik-6', 'ik-7', 'ik-8', 'ik-9', 'ik-10', 'ik-11', 'ik-12', 'ik-13', 'ik-14', 'ik-15', 'ik-16', 'ik-17', 'ik-18', 'ik-19', 'ik-20', 'ik-21', 'ik-22', 'ts-1', 'ts-2', 'ts-3', 'ts-4', 'ts-5', 'ts-6', 'ts-7', 'ts-8'],
  ['Azerbaijan Tea', 'Mountain Flowers Tea', 'Green Tea', 'Ginger Orange Tea', 'Berry Tea', 'Moroccan Tea', 'Shakh Garden Special Tea', 'Samovar', 'Jam', 'Mixed Nuts', 'Mixed Dried Fruit', 'Israeli Persimmon', 'Pistachios', 'Espresso', 'Double Espresso', 'Americano', 'Cappuccino', 'Latte Macchiato', 'Turkish Coffee', 'Iced Coffee', 'Mocha', 'Coffee Glace', 'Raf Coffee', 'Amaretto Coffee', 'Irish Coffee', 'Ayran', 'Bison Max (250 ml)', 'Hot Water (250 ml)', 'Basil Compote (Pitcher)', 'Basil Compote (250 ml)', 'Compote (250 ml)', 'Compote (1 L)', 'Lemonade', 'Coca-Cola', 'Fanta', 'Sprite', 'Fruit Juice (250 ml)', 'Fruit Juice (1 L)', 'Sparkling Water (500 ml)', 'Still Water (500 ml)', 'Red Bull', 'Tonic (330 ml)', 'Mango Ice Tea (330 ml)', 'Peach Ice Tea (330 ml)', 'Lemon Ice Tea (330 ml)', 'Sarıkız', 'Borjomi', 'Lemon', 'Carrot', 'Apple', 'Orange', 'Pomegranate', 'Grapefruit', 'Pineapple', 'Mixed Fruits'],
  ['Азербайджанский чай', 'Чай из горных цветов', 'Зеленый чай', 'Имбирно-апельсиновый чай', 'Ягодный чай', 'Марокканский чай', 'Фирменный чай Shakh Garden', 'Самовар', 'Варенье', 'Смешанные орехи', 'Смешанные сухофрукты', 'Изraelская хурма', 'Фисташки', 'Эспрессо', 'Двойной эспрессо', 'Американо', 'Капучино', 'Латте макиато', 'Турецкий кофе', 'Холодный кофе', 'Мокка', 'Кофе глясе', 'Раф кофе', 'Кофе Амаретто', 'Ирландский кофе', 'Айран', 'Bison Max (250 мл)', 'Горячая вода (250 мл)', 'Компот из рейхана (графин)', 'Компот из рейхана (250 мл)', 'Компот (250 мл)', 'Компот (1 л)', 'Лимонад', 'Coca-Cola', 'Fanta', 'Sprite', 'Фруктовый сок (250 мл)', 'Фруктовый сок (1 л)', 'Вода газированная (500 мл)', 'Вода негазированная (500 мл)', 'Red Bull', 'Тоник (330 мл)', 'Ice Tea манго (330 мл)', 'Ice Tea персик (330 мл)', 'Ice Tea лимон (330 мл)', 'Сарыкыз', 'Боржоми', 'Лимонный', 'Морковный', 'Яблочный', 'Апельсиновый', 'Гранатовый', 'Грейпфрутовый', 'Ананасовый', 'Микс фруктов']
);

addItemTranslations(
  ['kk-1', 'kk-2', 'kk-3', 'kk-4', 'kk-5', 'kk-6', 'kk-7', 'kk-8', 'kk-9', 'kk-10', 'kk-11', 'kk-12', 'kk-13', 'mk-1', 'mk-2', 'mk-3', 'mk-4', 'mk-5', 'mk-6', 'mk-7', 'mk-8', 'mk-9', 'pv-1', 'pv-2', 'pv-3', 'pv-4', 'pv-5', 'pv-6', 'pv-7', 'pv-8', 'pv-9'],
  ['Blue Lagoon', 'Bellini', 'Margarita', 'Mojito', 'B52', 'Negroni', 'Whisky Sour', 'Aperol Spritz', 'Sangria (1 lt)', 'Sangria (300 ml)', 'Shakh Garden Special', 'Long Island', 'Cuba Libre', 'Homemade Lemonade', 'Homemade Iced Tea', 'Virgin Mojito', 'Energy Mojito', 'Strawberry Mojito', 'Milkshake', 'Shakh Garden Smoothie', 'Homemade Iced Tea (Pitcher)', 'Homemade Lemonade (Pitcher)', 'Khirdalan', 'Khirdalan Draft', 'Khirdalan Non-Filter', 'Efes Zero', 'Efes Draft', 'Corona', 'Heineken', 'Miller', 'Erdinger Dark'],
  ['Голубая лагуна', 'Беллини', 'Маргарита', 'Мохито', 'Б52', 'Негрони', 'Виски Сауэр', 'Апероль Спритц', 'Сангрия (1 л)', 'Сангрия (300 мл)', 'Фирменный от Shakh Garden', 'Лонг Айленд', 'Куба Либре', 'Лимонад домашний', 'Холодный чай домашний', 'Мохито девственный (безалкогольный)', 'Мохито энергетический', 'Мохито клубничный', 'Милкшейк', 'Смузи Shakh Garden', 'Холодный чай домашний (графин)', 'Лимонад домашний (графин)', 'Хырдалан', 'Хырдалан разливное', 'Хырдалан нефильтрованное', 'Эфес безалкогольное', 'Эфес драфт', 'Корона', 'Хайнекен', 'Миллер', 'Эрдингер темное']
);

const itemNameTranslations = {
  en: {
    'səhər yeməyi': 'breakfast', 'isti içkilər': 'hot drinks', 'soyuq qəlyanaltılar': 'cold appetizers',
    'əsas yeməklər': 'main dishes', 'öncədən sifariş': 'pre-order specialties', 'şirniyyatlar': 'sweets',
    'desertlər': 'desserts', 'salatlar': 'salads', 'şorbalar': 'soups', 'plov': 'pilaf',
    'çay': 'tea', 'qəhvə': 'coffee', 'şirə': 'juice', 'limonad': 'lemonade', 'kokteyl': 'cocktail',
    'dondurma': 'ice cream', 'tort': 'cake', 'paxlava': 'baklava', 'şəkərbura': 'sheburek',
    'pomidor': 'tomato', 'xiyar': 'cucumber', 'kartof': 'potato', 'badımcan': 'eggplant', 'badımcanlı': 'eggplant',
    'göbələk': 'mushroom', 'soğan': 'onion', 'sarımsaq': 'garlic', 'pendir': 'cheese', 'çuğundur': 'beetroot',
    'qaymaq': 'cream', 'xama': 'sour cream', 'qatıq': 'yogurt', 'kərə yağı': 'butter',
    'toyuq': 'chicken', 'quzu': 'lamb', 'dana': 'beef', 'ət': 'meat', 'balıq': 'fish',
    'krevetka': 'shrimp', 'yumurta': 'egg', 'qoz': 'walnut', 'badam': 'almond', 'fındıq': 'hazelnut',
    'meyvə': 'fruit', 'tərəvəz': 'vegetable', 'tərəvəzli': 'with vegetables', 'düyü': 'rice', 'çörək': 'bread', 'mürəbbə': 'jam',
    'səbəti': 'basket', 'assorti': 'assortment', 'salatı': 'salad', 'şorbası': 'soup', 'lobya': 'beans', 'zeytun': 'olive', 'ruleti': 'roulade',
    'qovurma': 'roast', 'dolması': 'stuffed', 'qızartması': 'fried', 'sous': 'sauce',
    'ballı': 'with honey', 'şokoladlı': 'chocolate', 'pendirli': 'with cheese', 'qozlu': 'with walnuts',
    'tərəvəzli': 'with vegetables', 'toyuqlu': 'with chicken', 'ət ilə': 'with meat', 'ilə': 'with',
    'isti': 'hot', 'soyuq': 'cold', 'qarışıq': 'mixed', 'təzə': 'fresh', 'evsayağı': 'homemade'
  },
  ru: {
    'səhər yeməyi': 'завтрак', 'isti içkilər': 'горячие напитки', 'soyuq qəlyanaltılar': 'холодные закуски',
    'əsas yeməklər': 'основные блюда', 'öncədən sifariş': 'блюда на заказ', 'şirniyyatlar': 'сладости',
    'desertlər': 'десерты', 'salatlar': 'салаты', 'şorbalar': 'супы', 'plov': 'плов',
    'çay': 'чай', 'qəhvə': 'кофе', 'şirə': 'сок', 'limonad': 'лимонад', 'kokteyl': 'коктейль',
    'dondurma': 'мороженое', 'tort': 'торт', 'paxlava': 'пахлава', 'pomidor': 'помидор',
    'xiyar': 'огурец', 'kartof': 'картофель', 'badımcan': 'баклажан', 'badımcanlı': 'с баклажаном', 'göbələk': 'грибы',
    'soğan': 'лук', 'sarımsaq': 'чеснок', 'pendir': 'сыр', 'çuğundur': 'свёкла', 'qaymaq': 'сливки', 'xama': 'сметана',
    'qatıq': 'йогурт', 'kərə yağı': 'сливочное масло', 'toyuq': 'курица', 'quzu': 'баранина',
    'dana': 'говядина', 'ət': 'мясо', 'balıq': 'рыба', 'krevetka': 'креветка', 'yumurta': 'яйцо',
    'qoz': 'грецкий орех', 'badam': 'миндаль', 'fındıq': 'фундук', 'meyvə': 'фрукты',
    'tərəvəz': 'овощи', 'tərəvəzli': 'с овощами', 'düyü': 'рис', 'çörək': 'хлеб', 'mürəbbə': 'варенье', 'səbəti': 'корзина',
    'assorti': 'ассорти', 'salatı': 'салат', 'şorbası': 'суп', 'lobya': 'фасоль', 'zeytun': 'оливки', 'ruleti': 'рулет', 'qovurma': 'жаркое',
    'dolması': 'долма', 'qızartması': 'жареный', 'sous': 'соус', 'ballı': 'с мёдом',
    'şokoladlı': 'шоколадный', 'pendirli': 'с сыром', 'qozlu': 'с грецким орехом',
    'tərəvəzli': 'с овощами', 'toyuqlu': 'с курицей', 'ət ilə': 'с мясом', 'ilə': 'с',
    'isti': 'горячий', 'soyuq': 'холодный', 'qarışıq': 'смешанный', 'təzə': 'свежий', 'evsayağı': 'домашний'
  }
};

function translateItemName(name, lang, itemId) {
  if (lang === 'az' || !itemNameTranslations[lang]) return name;
  if (itemTranslations[itemId] && itemTranslations[itemId][lang]) {
    return itemTranslations[itemId][lang];
  }

  return Object.entries(itemNameTranslations[lang])
    .sort(([first], [second]) => second.length - first.length)
    .reduce((translated, [source, target]) => {
      const pattern = new RegExp(`(?<![\\p{L}])${source.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}(?![\\p{L}])`, 'giu');
      return translated.replace(pattern, target);
    }, name);
}

// Hər bir yemək üçün universal ad, təsvir və format təmin edirik
export const menuSections = rawSections.map(sec => ({
  ...sec,
  subcategories: sec.subcategories.map(sub => ({
    ...sub,
    items: sub.items.map(it => {
      const itName = it.name;
      return {
        id: it.id,
        price: it.price,
        names: {
          az: itName,
          en: it.nameEn || translateItemName(itName, 'en', it.id),
          ru: it.nameRu || translateItemName(itName, 'ru', it.id)
        },
        desc: {
          az: it.desc || '',
          en: it.descEn || it.desc || '',
          ru: it.descRu || it.desc || ''
        },
        tag: it.tag || null,
        subcategoryId: sub.id,
        subcategoryName: sub.names,
        sectionId: sec.id,
        sectionName: sec.names
      };
    })
  }))
}));

/**
 * Axtarış və səbət əməliyyatları üçün bütün 11 bölmədəki yeməklərin vahid siyahısı
 */
export function getAllMenuItems() {
  const all = [];
  menuSections.forEach(sec => {
    sec.subcategories.forEach(sub => {
      sub.items.forEach(it => {
        all.push(it);
      });
    });
  });
  return all;
}
