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

function translateItemName(name, lang) {
  if (lang === 'az' || !itemNameTranslations[lang]) return name;

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
          en: it.nameEn || translateItemName(itName, 'en'),
          ru: it.nameRu || translateItemName(itName, 'ru')
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
