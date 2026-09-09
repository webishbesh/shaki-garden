/**
 * menuData1.js — Bölmələr 1-dən 6-ya qədər
 * İstifadəçinin təqdim etdiyi dəqiq menyu və qiymətlər
 */

export const sectionsPart1 = [
  {
    id: 1,
    num: '01.',
    slug: 'milli-metbex-esas-yemekler',
    color: '#73371f',
    names: {
      az: 'Milli Mətbəx və Əsas Yeməklər',
      en: 'National Cuisine & Main Dishes',
      ru: 'Национальная кухня и Основные блюда'
    },
    subcategories: [
      {
        id: 'mm-soyuq-qelyanaltilar',
        num: '01.',
        slug: 'soyuq-qelyanaltilar',
        color: '#68361e',
        names: { az: 'Soyuq qəlyanaltılar', en: 'Cold Appetizers', ru: 'Холодные закуски' },
        items: [
          { id: 'sq-1', name: 'Pərpətöyünlü süzmə', price: 7.00 },
          { id: 'sq-2', name: 'Qozlu çuğundur əzməsi', price: 7.00 },
          { id: 'sq-3', name: 'Badımcanlı süzmə', price: 7.00 },
          { id: 'sq-4', name: 'Tərəvəzli lobya', price: 7.00 },
          { id: 'sq-5', name: 'Hummus', price: 7.00 },
          { id: 'sq-6', name: 'Zeytun assorti', price: 8.00 },
          { id: 'sq-7', name: 'Badımcan ruleti', price: 11.00 },
          { id: 'sq-8', name: 'Tərəvəz səbəti', price: 12.00 },
          { id: 'sq-9', name: 'Evsayağı turşular', price: 12.00 },
          { id: 'sq-10', name: 'Pendir assorti', price: 14.00 }
        ]
      },
      {
        id: 'mm-onceden-sifaris',
        num: '02.',
        slug: 'onceden-sifaris',
        color: '#7a3e21',
        names: { az: 'Öncədən sifariş', en: 'Pre-order Specialties', ru: 'Блюда на предзаказ' },
        items: [
          { id: 'os-1', name: 'Şah plov (2 nəfərlik)', price: 45.00 },
          { id: 'os-2', name: 'Şah plov (4 nəfərlik)', price: 70.00 },
          { id: 'os-3', name: 'Quzu səbət', price: 120.00 }
        ]
      },
      {
        id: 'mm-plovlar',
        num: '03.',
        slug: 'plovlar',
        color: '#884624',
        names: { az: 'Plovlar', en: 'Pilafs', ru: 'Плов' },
        items: [
          { id: 'pl-1', name: 'Albalı plov', price: 18.00 },
          { id: 'pl-2', name: 'Səbzi plov', price: 20.00 },
          { id: 'pl-3', name: 'Fisincan plov dana əti ilə', price: 22.00 },
          { id: 'pl-4', name: 'Turşu plov', price: 24.00 }
        ]
      },
      {
        id: 'mm-esas-yemekler',
        num: '04.',
        slug: 'esas-yemekler',
        color: '#6c3017',
        names: { az: 'Əsas yeməklər', en: 'Main Dishes', ru: 'Основные блюда' },
        items: [
          { id: 'ey-1', name: 'Yarpaq dolması', price: 15.00 },
          { id: 'ey-2', name: 'Kefli beçə', price: 26.00 },
          { id: 'ey-3', name: 'Cız-bız', price: 15.00 },
          { id: 'ey-4', name: 'Nar qovurma', price: 28.00 },
          { id: 'ey-5', name: 'Krevetka güvəzdə', price: 23.00 },
          { id: 'ey-6', name: 'Quzu ciyəri yarpaq', price: 16.00 },
          { id: 'ey-7', name: 'Tərəvəz (3 bacı) dolması', price: 14.00 },
          { id: 'ey-8', name: 'Quzu qovurma', price: 18.00 },
          { id: 'ey-9', name: 'Dana qovurma zəncəfil sousunda', price: 19.00 },
          { id: 'ey-10', name: 'Tabaka toyuq', price: 25.00 },
          { id: 'ey-11', name: 'Can əti medalyon albalı sousunda', price: 29.00 },
          { id: 'ey-12', name: 'Qızıl balıq izqara xüsusi sousda', price: 35.00 }
        ]
      }
    ]
  },
  {
    id: 2,
    num: '02.',
    slug: 'sorbalar',
    color: '#8b4513',
    names: {
      az: 'Şorbalar',
      en: 'Soups',
      ru: 'Супы'
    },
    subcategories: [
      {
        id: 'sub-sorbalar',
        num: '01.',
        slug: 'sorbalar',
        color: '#8b4513',
        names: { az: 'Şorbalar', en: 'Soups', ru: 'Супы' },
        items: [
          { id: 'sb-1', name: 'Dovğa', price: 6.00 },
          { id: 'sb-2', name: 'Şəkisayağı piti', price: 17.00 },
          { id: 'sb-3', name: 'Doğramac', price: 6.00 },
          { id: 'sb-4', name: 'Mərci', price: 6.00 },
          { id: 'sb-5', name: 'Şabalıd şorbası', price: 8.00 },
          { id: 'sb-6', name: 'Toyuq şorbası ərişdə ilə', price: 7.00 },
          { id: 'sb-7', name: 'Ərişdə', price: 8.00 },
          { id: 'sb-8', name: 'Bakı düşbərəsi', price: 8.00 },
          { id: 'sb-9', name: 'Küftə bozbaş', price: 15.00 }
        ]
      }
    ]
  },
  {
    id: 3,
    num: '03.',
    slug: 'salatlari',
    color: '#3d5c3a',
    names: {
      az: 'Salatları',
      en: 'Salads',
      ru: 'Салаты'
    },
    subcategories: [
      {
        id: 'sub-salatlari',
        num: '01.',
        slug: 'salatlari',
        color: '#3d5c3a',
        names: { az: 'Salatları', en: 'Salads', ru: 'Салаты' },
        items: [
          { id: 'sl-1', name: 'Pomidor salatı', price: 11.00 },
          { id: 'sl-2', name: 'Manqal salatı', price: 10.00 },
          { id: 'sl-3', name: 'Çoban salatı', price: 9.00 },
          { id: 'sl-4', name: 'Xırçıldayan badımcan salatı', price: 12.00 },
          { id: 'sl-5', name: 'Boranı salatı', price: 13.00 },
          { id: 'sl-6', name: 'Sezar salatı toyuq ilə', price: 14.00 },
          { id: 'sl-7', name: 'Sezar salatı krevetlərlə', price: 16.00 },
          { id: 'sl-8', name: 'Qəvurdağ salatı', price: 11.00 }
        ]
      }
    ]
  },
  {
    id: 4,
    num: '04.',
    slug: 'qelyanaltilar-xemir-yemekleri',
    color: '#7a5223',
    names: {
      az: 'Qəlyanaltılar və Xəmir Yeməkləri',
      en: 'Appetizers & Pastries',
      ru: 'Закуски и Выпечка'
    },
    subcategories: [
      {
        id: 'sub-isti-qelyanaltilar',
        num: '01.',
        slug: 'isti-qelyanaltilar',
        color: '#7a5223',
        names: { az: 'İsti qəlyanaltılar', en: 'Hot Appetizers', ru: 'Горячие закуски' },
        items: [
          { id: 'qx-1', name: 'Bakı qutabı göyərti', price: 3.00 },
          { id: 'qx-2', name: 'Bakı qutabı boranı', price: 3.00 },
          { id: 'qx-3', name: 'Bakı qutabı ət', price: 4.00 },
          { id: 'qx-4', name: 'Şirvan qutabı kartof ilə', price: 7.00 },
          { id: 'qx-5', name: 'Şirvan qutabı ət ilə', price: 9.00 },
          { id: 'qx-6', name: 'Fəsəli motal pendiri ilə', price: 14.00 },
          { id: 'qx-7', name: 'Gəncəsayağı göyərti kətəsi zirinc ilə', price: 15.00 },
          { id: 'qx-8', name: 'Ləvəngi bükməsi albalı sousunda', price: 15.00 },
          { id: 'qx-9', name: 'Gürzə sadə', price: 15.00 },
          { id: 'qx-10', name: 'Gürzə qızardılmış', price: 15.00 }
        ]
      }
    ]
  },
  {
    id: 5,
    num: '05.',
    slug: 'manqal-et-yemekleri',
    color: '#572718',
    names: {
      az: 'Manqal və Ət Yeməkləri',
      en: 'Grill & Meat Dishes',
      ru: 'Мангал и Мясные блюда'
    },
    subcategories: [
      {
        id: 'sub-saclar',
        num: '01.',
        slug: 'saclar',
        color: '#5c2214',
        names: { az: 'Saclar', en: 'Saj Dishes', ru: 'Саджи' },
        items: [
          { id: 'sc-1', name: 'Toyuq sac', price: 30.00 },
          { id: 'sc-2', name: 'Quzu sac', price: 34.00 },
          { id: 'sc-3', name: 'Dana sac', price: 36.00 },
          { id: 'sc-4', name: 'Qarışıq sac', price: 38.00 }
        ]
      },
      {
        id: 'sub-kabablar',
        num: '02.',
        slug: 'kabablar',
        color: '#501e12',
        names: { az: 'Kabablar', en: 'Kebabs', ru: 'Шашлыки' },
        items: [
          { id: 'kb-1', name: 'Tərəvəz kababı', price: 5.00 },
          { id: 'kb-2', name: 'Kartof lüləsi', price: 6.00 },
          { id: 'kb-3', name: 'Toyuq kababı', price: 10.00 },
          { id: 'kb-4', name: 'Quzu içalatı', price: 11.00 },
          { id: 'kb-5', name: 'Quzu lülə', price: 13.00 },
          { id: 'kb-6', name: 'Toyuq lülə', price: 12.00 },
          { id: 'kb-7', name: 'Quzu tikə', price: 14.00 },
          { id: 'kb-8', name: 'Dana basdırma', price: 15.00 },
          { id: 'kb-9', name: 'Xan kababı', price: 14.00 },
          { id: 'kb-10', name: 'Quzu qabırğa', price: 15.00 },
          { id: 'kb-11', name: 'Sudak', price: 25.00 },
          { id: 'kb-12', name: 'Dorado', price: 35.00 },
          { id: 'kb-13', name: 'Nərə balığı', price: 60.00 }
        ]
      }
    ]
  },
  {
    id: 6,
    num: '06.',
    slug: 'elaveler-qarnirler',
    color: '#6e5028',
    names: {
      az: 'Əlavələr və Qarnirlər',
      en: 'Sides & Garnishes',
      ru: 'Гарниры и Дополнения'
    },
    subcategories: [
      {
        id: 'sub-qarnirler',
        num: '01.',
        slug: 'qarnirler',
        color: '#6e5028',
        names: { az: 'Qarnirlər', en: 'Garnishes', ru: 'Гарниры' },
        items: [
          { id: 'qr-1', name: 'Düyü', price: 4.00 },
          { id: 'qr-2', name: 'Kartof fri', price: 5.00 },
          { id: 'qr-3', name: 'Kendsayağı kartof', price: 5.00 },
          { id: 'qr-4', name: 'Evsayağı qızardılmış kartof', price: 5.00 },
          { id: 'qr-5', name: 'Grildə qızardılmış tərəvəzlər', price: 7.00 },
          { id: 'qr-6', name: 'Çörək', price: 1.00 }
        ]
      },
      {
        id: 'sub-souslar',
        num: '02.',
        slug: 'souslar',
        color: '#613b19',
        names: { az: 'Souslar', en: 'Sauces', ru: 'Соусы' },
        items: [
          { id: 'so-1', name: 'Kənd qatığı', price: 3.00 },
          { id: 'so-2', name: 'Acika', price: 3.00 },
          { id: 'so-3', name: 'Zoğal əzməsi', price: 3.00 },
          { id: 'so-4', name: 'Narşərab', price: 3.00 }
        ]
      },
      {
        id: 'sub-nar-sarabi',
        num: '03.',
        slug: 'nar-sarabi',
        color: '#541d1a',
        names: { az: 'Nar şarabı', en: 'Pomegranate Wine', ru: 'Гранатовое вино' },
        items: [
          { id: 'ns-1', name: 'Piano nar şərabı (150 ml)', price: 11.00 },
          { id: 'ns-2', name: 'Piano nar şərabı (750 ml)', price: 45.00 },
          { id: 'ns-3', name: 'Premium Azərbaycan nar şərabı (150 ml)', price: 12.00 },
          { id: 'ns-4', name: 'Premium Azərbaycan nar şərabı (750 ml)', price: 50.00 }
        ]
      }
    ]
  }
];
