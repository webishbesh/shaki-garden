/**
 * menuData2.js — Bölmələr 7-dən 11-ə qədər
 * İstifadəçinin təqdim etdiyi dəqiq menyu və qiymətlər
 */

export const sectionsPart2 = [
  {
    id: 7,
    num: '07.',
    slug: 'sirniyyatlar-desertler',
    color: '#824831',
    names: {
      az: 'Şirniyyatlar və Desertlər',
      en: 'Sweets & Desserts',
      ru: 'Сладости и Десерты'
    },
    subcategories: [
      {
        id: 'sub-desertler',
        num: '01.',
        slug: 'desertler',
        color: '#824831',
        names: { az: 'Desertlər', en: 'Desserts', ru: 'Десерты' },
        items: [
          { id: 'ds-1', name: 'Şəkərbura', price: 3.50 },
          { id: 'ds-2', name: 'Paxlava', price: 3.50 },
          { id: 'ds-3', name: 'Badambura', price: 3.50 },
          { id: 'ds-4', name: 'Ballı tort', price: 12.00 },
          { id: 'ds-5', name: 'San Sebastian', price: 12.00 },
          { id: 'ds-6', name: 'Abşeron tortu', price: 12.00 },
          { id: 'ds-7', name: 'İdeal tortu', price: 12.00 },
          { id: 'ds-8', name: 'Şokoladlı cheesecak (dietik)', price: 13.00 },
          { id: 'ds-9', name: 'Çiyələkli cheesecak (dietik)', price: 13.00 },
          { id: 'ds-10', name: 'Ərikli cheesecak (dietik)', price: 13.00 },
          { id: 'ds-11', name: 'Cheesecak Kefir', price: 13.00 },
          { id: 'ds-12', name: 'Red Velvet deserti', price: 13.00 },
          { id: 'ds-13', name: 'Dondurma', price: 8.00 },
          { id: 'ds-14', name: 'Havuç dilim paxlava dondurma ilə', price: 10.00 },
          { id: 'ds-15', name: 'Künəfə', price: 10.00 },
          { id: 'ds-16', name: 'Katmer', price: 20.00 },
          { id: 'ds-17', name: 'Meyvə assorti', price: 20.00 }
        ]
      }
    ]
  },
  {
    id: 8,
    num: '08.',
    slug: 'seher-yemeyi-mehsullari',
    color: '#8d6325',
    names: {
      az: 'Səhər Yeməyi və Səhər Məhsulları',
      en: 'Breakfast & Morning Delights',
      ru: 'Завтраки и Утренние продукты'
    },
    subcategories: [
      {
        id: 'sub-seher-yemeyi',
        num: '01.',
        slug: 'seher-yemeyi',
        color: '#8d6325',
        names: { az: 'Səhər yeməyi', en: 'Breakfast', ru: 'Завтрак' },
        items: [
          { id: 'sy-1', name: 'Səhər yeməyi (2 nəfərlik)', price: 38.00 },
          { id: 'sy-2', name: 'Səhər yeməyi (4 nəfərlik)', price: 68.00 },
          { id: 'sy-3', name: 'Qaynadılmış yumurta', price: 4.00 },
          { id: 'sy-4', name: 'Yulaf sıyığı', price: 6.00 },
          { id: 'sy-5', name: 'Qayğanaq', price: 5.00 },
          { id: 'sy-6', name: 'Pomidor çığırtması', price: 6.00 },
          { id: 'sy-7', name: 'Kükü', price: 6.00 },
          { id: 'sy-8', name: 'Sosis yumurta', price: 6.00 },
          { id: 'sy-9', name: 'Pomidor yumurta', price: 6.00 },
          { id: 'sy-10', name: 'Sucuklu yumurta', price: 6.00 },
          { id: 'sy-11', name: 'Pendirli qayğanaq', price: 6.00 },
          { id: 'sy-12', name: 'Ballı pendirli qayğanaq', price: 7.00 },
          { id: 'sy-13', name: 'Qiyməli qayğanaq', price: 8.00 },
          { id: 'sy-14', name: 'Gəncə qaymağı', price: 4.00 },
          { id: 'sy-15', name: 'Bal', price: 6.00 },
          { id: 'sy-16', name: 'Xama', price: 5.00 },
          { id: 'sy-17', name: 'Şor', price: 5.00 },
          { id: 'sy-18', name: 'Nehrə yağı', price: 6.00 },
          { id: 'sy-19', name: 'Kənd pendiri', price: 5.00 },
          { id: 'sy-20', name: 'Şokolad yağı', price: 5.00 },
          { id: 'sy-21', name: 'Zeytun çeşidləri', price: 8.00 },
          { id: 'sy-22', name: 'Təzə pomidor-xiyar', price: 7.00 },
          { id: 'sy-23', name: 'Kolbasa çeşidləri', price: 8.00 },
          { id: 'sy-24', name: 'Tahın', price: 8.00 },
          { id: 'sy-25', name: 'Bəhməz', price: 6.00 }
        ]
      }
    ]
  },
  {
    id: 9,
    num: '09.',
    slug: 'isti-ickiler-qehveler',
    color: '#654321',
    names: {
      az: 'İsti İçkilər və Qəhvələr',
      en: 'Hot Drinks & Coffees',
      ru: 'Горячие напитки и Кофе'
    },
    subcategories: [
      {
        id: 'sub-cay-isti-ickiler',
        num: '01.',
        slug: 'cay-isti-ickiler-setler',
        color: '#654321',
        names: { az: 'Çay / İsti içkilər / Setlər', en: 'Tea / Hot Drinks / Sets', ru: 'Чай / Горячие напитки / Сеты' },
        items: [
          { id: 'cy-1', name: 'Azərbaycan çayı', price: 10.00 },
          { id: 'cy-2', name: 'Dağ çiçəkləri çayı', price: 10.00 },
          { id: 'cy-3', name: 'Yaşıl çay', price: 12.00 },
          { id: 'cy-4', name: 'Zəncəfilli portağal çayı', price: 12.00 },
          { id: 'cy-5', name: 'Giləmeyvə çayı', price: 12.00 },
          { id: 'cy-6', name: 'Mərakeş çayı', price: 15.00 },
          { id: 'cy-7', name: 'Shakh Garden özəl çayı', price: 16.00 },
          { id: 'cy-8', name: 'Samovar', price: 25.00 },
          { id: 'cy-9', name: 'Mürəbbə', price: 10.00 },
          { id: 'cy-10', name: 'Qarışıq çərəz', price: 12.00 },
          { id: 'cy-11', name: 'Qarışıq quru meyvə', price: 12.00 },
          { id: 'cy-12', name: 'İsrail xurması', price: 12.00 },
          { id: 'cy-13', name: 'Püstə', price: 15.00 }
        ]
      },
      {
        id: 'sub-qehveler',
        num: '02.',
        slug: 'qehveler',
        color: '#55361b',
        names: { az: 'Qəhvələr', en: 'Coffees', ru: 'Кофе' },
        items: [
          { id: 'qh-1', name: 'Espresso', price: 5.00 },
          { id: 'qh-2', name: 'Double Espresso', price: 7.00 },
          { id: 'qh-3', name: 'Amerikanq', price: 5.00 },
          { id: 'qh-4', name: 'Kapuçino', price: 6.00 },
          { id: 'qh-5', name: 'Latte makiato', price: 7.00 },
          { id: 'qh-6', name: 'Türk qəhvəsi', price: 7.00 },
          { id: 'qh-7', name: 'Soyuq qəhvə', price: 8.00 },
          { id: 'qh-8', name: 'Mokka', price: 8.00 },
          { id: 'qh-9', name: 'Kofe Glase', price: 9.00 },
          { id: 'qh-10', name: 'Raf kofe', price: 10.00 },
          { id: 'qh-11', name: 'Amaretto qəhvəsi', price: 10.00 },
          { id: 'qh-12', name: 'İrland qəhvəsi', price: 12.00 }
        ]
      }
    ]
  },
  {
    id: 10,
    num: '10.',
    slug: 'soyuq-ickiler-sireler',
    color: '#2a6375',
    names: {
      az: 'Soyuq İçkilər və Şirələr',
      en: 'Cold Drinks & Juices',
      ru: 'Холодные напитки и Соки'
    },
    subcategories: [
      {
        id: 'sub-ickiler',
        num: '01.',
        slug: 'ickiler',
        color: '#2a6375',
        names: { az: 'İçkilər', en: 'Soft Drinks', ru: 'Напитки' },
        items: [
          { id: 'ik-1', name: 'Ayran', price: 3.00 },
          { id: 'ik-2', name: 'Bizon Max (250 ml)', price: 6.00 },
          { id: 'ik-3', name: 'İsti su (250 ml)', price: 5.00 },
          { id: 'ik-4', name: 'Reyhan kompotu (qrafin)', price: 12.00 },
          { id: 'ik-5', name: 'Reyhan kompotu (250 ml)', price: 5.00 },
          { id: 'ik-6', name: 'Kompot (250 ml)', price: 4.00 },
          { id: 'ik-7', name: 'Kompot (1 L)', price: 9.00 },
          { id: 'ik-8', name: 'Limonad', price: 5.00 },
          { id: 'ik-9', name: 'Coca-Cola', price: 5.00 },
          { id: 'ik-10', name: 'Fanta', price: 5.00 },
          { id: 'ik-11', name: 'Sprite', price: 5.00 },
          { id: 'ik-12', name: 'Meyvə şirəsi (250 ml)', price: 4.00 },
          { id: 'ik-13', name: 'Meyvə şirəsi (1 L)', price: 10.00 },
          { id: 'ik-14', name: 'Su qazlı (500 ml)', price: 4.00 },
          { id: 'ik-15', name: 'Su qazsız (500 ml)', price: 4.00 },
          { id: 'ik-16', name: 'Red Bull', price: 9.00 },
          { id: 'ik-17', name: 'Tonic (330 ml)', price: 6.00 },
          { id: 'ik-18', name: 'Ice Tea manqo (330 ml)', price: 5.00 },
          { id: 'ik-19', name: 'Ice Tea şaftalı (330 ml)', price: 5.00 },
          { id: 'ik-20', name: 'Ice Tea limon (330 ml)', price: 5.00 },
          { id: 'ik-21', name: 'Sarıkız', price: 5.00 },
          { id: 'ik-22', name: 'Borjomi', price: 5.00 }
        ]
      },
      {
        id: 'sub-tebii-meyve-sireleri',
        num: '02.',
        slug: 'tebii-meyve-sireleri',
        color: '#215261',
        names: { az: 'Təbii meyvə şirələri', en: 'Fresh Juices', ru: 'Свежевыжатые соки' },
        items: [
          { id: 'ts-1', name: 'Limon', price: 2.00 },
          { id: 'ts-2', name: 'Kök', price: 7.00 },
          { id: 'ts-3', name: 'Alma', price: 8.00 },
          { id: 'ts-4', name: 'Portağal', price: 9.00 },
          { id: 'ts-5', name: 'Nar', price: 10.00 },
          { id: 'ts-6', name: 'Qreyfrut', price: 11.00 },
          { id: 'ts-7', name: 'Ananas', price: 12.00 },
          { id: 'ts-8', name: 'Qarışıq meyvələr', price: 12.00 }
        ]
      }
    ]
  },
  {
    id: 11,
    num: '11.',
    slug: 'spirtli-ickiler-bar-mehsullari',
    color: '#422744',
    names: {
      az: 'Spirtli İçkilər və Bar Məhsulları',
      en: 'Alcoholic Drinks & Bar',
      ru: 'Алкогольные напитки и Бар'
    },
    subcategories: [
      {
        id: 'sub-kokteyller',
        num: '01.',
        slug: 'kokteyller',
        color: '#4f243b',
        names: { az: 'Kokteyllər', en: 'Cocktails', ru: 'Коктейли' },
        items: [
          { id: 'kk-1', name: 'Blue Lagoon', price: 10.00 },
          { id: 'kk-2', name: 'Bellini', price: 10.00 },
          { id: 'kk-3', name: 'Marqarita', price: 12.00 },
          { id: 'kk-4', name: 'Mohito', price: 11.00 },
          { id: 'kk-5', name: 'B52', price: 12.00 },
          { id: 'kk-6', name: 'Negroni', price: 12.00 },
          { id: 'kk-7', name: 'Whisky Sour', price: 16.00 },
          { id: 'kk-8', name: 'Aperol Spritz', price: 14.00 },
          { id: 'kk-9', name: 'Sangria (1 lt)', price: 35.00 },
          { id: 'kk-10', name: 'Sangria (300 ml)', price: 14.00 },
          { id: 'kk-11', name: "Shakh Garden'dən özəl", price: 15.00 },
          { id: 'kk-12', name: 'Long Island', price: 16.00 },
          { id: 'kk-13', name: 'Cuba Libre', price: 9.00 }
        ]
      },
      {
        id: 'sub-mokteyller',
        num: '02.',
        slug: 'mokteyller',
        color: '#3d2b45',
        names: { az: 'Mokteyllər', en: 'Mocktails', ru: 'Моктейли' },
        items: [
          { id: 'mk-1', name: 'Evsayağı limonad', price: 7.00 },
          { id: 'mk-2', name: 'Evsayağı soyuq çay', price: 7.00 },
          { id: 'mk-3', name: 'Mohito virgin', price: 8.00 },
          { id: 'mk-4', name: 'Mohito enerji', price: 9.00 },
          { id: 'mk-5', name: 'Mohito çiyələkli', price: 9.00 },
          { id: 'mk-6', name: 'Milk şeyk', price: 11.00 },
          { id: 'mk-7', name: 'Şah Garden smuzi', price: 15.00 },
          { id: 'mk-8', name: 'Evsayağı soyuq çay (qrafin)', price: 15.00 },
          { id: 'mk-9', name: 'Evsayağı limonad (qrafin)', price: 16.00 }
        ]
      },
      {
        id: 'sub-pive-cesidleri',
        num: '03.',
        slug: 'piveler',
        color: '#52341d',
        names: { az: 'Pivə çeşidləri', en: 'Beers', ru: 'Пиво' },
        items: [
          { id: 'pv-1', name: 'Xırdalan', price: 6.00 },
          { id: 'pv-2', name: 'Xırdalan Draft', price: 6.00 },
          { id: 'pv-3', name: 'Xırdalan Non-Filter', price: 6.00 },
          { id: 'pv-4', name: 'Efes Zero', price: 7.00 },
          { id: 'pv-5', name: 'Efes Draft', price: 9.00 },
          { id: 'pv-6', name: 'Corona', price: 10.00 },
          { id: 'pv-7', name: 'Heineken', price: 10.00 },
          { id: 'pv-8', name: 'Miller', price: 10.00 },
          { id: 'pv-9', name: 'Erdinger Dark', price: 13.00 }
        ]
      },
      {
        id: 'sub-cin',
        num: '04.',
        slug: 'cin',
        color: '#26424b',
        names: { az: 'Cin', en: 'Gin', ru: 'Джин' },
        items: [
          { id: 'cn-1', name: "Gin Gordon's (50 ml)", price: 7.00 },
          { id: 'cn-2', name: "Gin Gordon's (1 L)", price: 120.00 },
          { id: 'cn-3', name: 'Bombay Sapphire (50 ml)', price: 8.00 },
          { id: 'cn-4', name: 'Bombay Sapphire (1 L)', price: 140.00 },
          { id: 'cn-5', name: 'Hendricks (50 ml)', price: 12.00 }
        ]
      },
      {
        id: 'sub-tekilalar',
        num: '05.',
        slug: 'tekila',
        color: '#52431f',
        names: { az: 'Tekilalar', en: 'Tequila', ru: 'Текила' },
        items: [
          { id: 'tk-1', name: 'Sierra Gold (50 ml)', price: 8.00 },
          { id: 'tk-2', name: 'Sierra Gold (1 L)', price: 140.00 },
          { id: 'tk-3', name: 'Sierra Silver (50 ml)', price: 8.00 },
          { id: 'tk-4', name: 'Sierra Silver (1 L)', price: 140.00 },
          { id: 'tk-5', name: 'Olmeca Blanco Silver (50 ml)', price: 8.00 },
          { id: 'tk-6', name: 'Olmeca Blanco Silver (1 L)', price: 140.00 }
        ]
      },
      {
        id: 'sub-rom',
        num: '06.',
        slug: 'rom',
        color: '#4e2819',
        names: { az: 'Rom', en: 'Rum', ru: 'Ром' },
        items: [
          { id: 'rm-1', name: 'Captain Morgan Dark (50 ml)', price: 6.00 },
          { id: 'rm-2', name: 'Captain Morgan Dark (1 L)', price: 100.00 },
          { id: 'rm-3', name: 'Bacardi Superior (50 ml)', price: 7.00 },
          { id: 'rm-4', name: 'Bacardi Superior (1 L)', price: 110.00 }
        ]
      },
      {
        id: 'sub-vermut',
        num: '07.',
        slug: 'vermut',
        color: '#4a2530',
        names: { az: 'Vermut', en: 'Vermouth', ru: 'Вермут' },
        items: [
          { id: 'vm-1', name: 'Martini Bianco (50 ml)', price: 6.00 },
          { id: 'vm-2', name: 'Martini Bianco (1 L)', price: 100.00 },
          { id: 'vm-3', name: 'Martini Rosso (50 ml)', price: 6.00 },
          { id: 'vm-4', name: 'Martini Rosso (1 L)', price: 100.00 },
          { id: 'vm-5', name: 'Martini Rosato (50 ml)', price: 6.00 },
          { id: 'vm-6', name: 'Martini Rossato (1 L)', price: 100.00 }
        ]
      },
      {
        id: 'sub-konyaklar',
        num: '08.',
        slug: 'konyak',
        color: '#542a17',
        names: { az: 'Konyaklar', en: 'Cognac', ru: 'Коньяк' },
        items: [
          { id: 'kn-1', name: 'Azərbaycan XO (50 ml)', price: 10.00 },
          { id: 'kn-2', name: 'Azərbaycan XO (700 ml)', price: 130.00 },
          { id: 'kn-3', name: 'Hennessy VSOP (50 ml)', price: 19.00 },
          { id: 'kn-4', name: 'Hennessy VSOP (1 L)', price: 260.00 },
          { id: 'kn-5', name: 'Rémy Martin (50 ml)', price: 19.00 },
          { id: 'kn-6', name: 'Rémy Martin (1 L)', price: 260.00 },
          { id: 'kn-7', name: 'Hennessy XO (50 ml)', price: 55.00 },
          { id: 'kn-8', name: 'Hennessy XO (700 ml)', price: 700.00 }
        ]
      },
      {
        id: 'sub-viskiler',
        num: '09.',
        slug: 'viski',
        color: '#573319',
        names: { az: 'Viskilər', en: 'Whiskey', ru: 'Виски' },
        items: [
          { id: 'vs-1', name: 'Jameson (50 ml)', price: 9.00 },
          { id: 'vs-2', name: 'Jameson (1 L)', price: 145.00 },
          { id: 'vs-3', name: "Jack Daniel's (50 ml)", price: 9.00 },
          { id: 'vs-4', name: "Jack Daniel's (1 L)", price: 150.00 },
          { id: 'vs-5', name: 'Johnnie Walker Red Label (50 ml)', price: 9.00 },
          { id: 'vs-6', name: 'Johnnie Walker Red Label (1 L)', price: 150.00 },
          { id: 'vs-7', name: 'Monkey Shoulder (50 ml)', price: 11.00 },
          { id: 'vs-8', name: 'Monkey Shoulder (1 L)', price: 180.00 },
          { id: 'vs-9', name: 'Chivas Regal 12 (50 ml)', price: 13.00 },
          { id: 'vs-10', name: 'Chivas Regal 12 (1 L)', price: 230.00 },
          { id: 'vs-11', name: 'Glenfiddich (50 ml)', price: 13.00 },
          { id: 'vs-12', name: 'Glenfiddich (1 L)', price: 210.00 },
          { id: 'vs-13', name: 'Chivas Regal 18 (50 ml)', price: 17.00 },
          { id: 'vs-14', name: 'Chivas Regal 18 (1 L)', price: 320.00 }
        ]
      },
      {
        id: 'sub-sampanlar',
        num: '10.',
        slug: 'sampan',
        color: '#463c22',
        names: { az: 'Şampanlar', en: 'Champagne', ru: 'Шампанское' },
        items: [
          { id: 'sp-1', name: 'Prosecco (110 ml)', price: 13.00 },
          { id: 'sp-2', name: 'Prosecco (750 ml)', price: 70.00 },
          { id: 'sp-3', name: 'Martini şampan (110 ml)', price: 16.00 },
          { id: 'sp-4', name: 'Martini şampan (750 ml)', price: 75.00 },
          { id: 'sp-5', name: 'Moët & Chandon (750 ml)', price: 200.00 }
        ]
      },
      {
        id: 'sub-araqlar',
        num: '11.',
        slug: 'araq',
        color: '#343b44',
        names: { az: 'Araqlar', en: 'Vodka', ru: 'Водка' },
        items: [
          { id: 'ar-1', name: 'Orqanik line - yerli araq (50 ml)', price: 5.00 },
          { id: 'ar-2', name: 'Orqanik line - yerli araq (1 L)', price: 50.00 },
          { id: 'ar-3', name: 'Yerli araq premium (50 ml)', price: 6.00 },
          { id: 'ar-4', name: 'Yerli araq premium (1 L)', price: 65.00 },
          { id: 'ar-5', name: 'Stolichnaya (50 ml)', price: 6.00 },
          { id: 'ar-6', name: 'Stolichnaya (700 ml)', price: 75.00 },
          { id: 'ar-7', name: 'Finlandia (50 ml)', price: 7.00 },
          { id: 'ar-8', name: 'Finlandia (1 L)', price: 110.00 },
          { id: 'ar-9', name: 'Absolut (50 ml)', price: 8.00 },
          { id: 'ar-10', name: 'Absolut (1 L)', price: 120.00 },
          { id: 'ar-11', name: 'Beluga (50 ml)', price: 12.00 },
          { id: 'ar-12', name: 'Beluga (700 ml)', price: 180.00 },
          { id: 'ar-13', name: 'Grey Goose (1 L)', price: 200.00 },
          { id: 'ar-14', name: 'Savalan Grappola (50 ml)', price: 7.00 },
          { id: 'ar-15', name: 'Savalan Grappola (500 ml)', price: 60.00 },
          { id: 'ar-16', name: 'Zoğal arağı Savalan (50 ml)', price: 12.00 },
          { id: 'ar-17', name: 'Zoğal arağı Savalan (700 ml)', price: 150.00 },
          { id: 'ar-18', name: 'Heyva arağı Savalan (50 ml)', price: 7.00 },
          { id: 'ar-19', name: 'Heyva arağı Savalan (500 ml)', price: 65.00 },
          { id: 'ar-20', name: 'Yeni Raki (50 ml)', price: 9.00 },
          { id: 'ar-21', name: 'Yeni Raki (1 L)', price: 135.00 },
          { id: 'ar-22', name: 'Tekirdağ (50 ml)', price: 11.00 },
          { id: 'ar-23', name: 'Tekirdağ (1 L)', price: 140.00 }
        ]
      },
      {
        id: 'sub-qirmizi-serablar',
        num: '12.',
        slug: 'qirmizi-serablar',
        color: '#4f1a26',
        names: { az: 'Qırmızı şərablər', en: 'Red Wines', ru: 'Красные вина' },
        items: [
          { id: 'qs-1', name: 'Savalan Syrah (150 ml)', price: 12.00 },
          { id: 'qs-2', name: 'Savalan Syrah (750 ml)', price: 50.00 },
          { id: 'qs-3', name: 'Savalan Canyon (150 ml)', price: 19.00 },
          { id: 'qs-4', name: 'Savalan Canyon (750 ml)', price: 95.00 },
          { id: 'qs-5', name: 'Savalan Cabernet Merlot (150 ml)', price: 12.00 },
          { id: 'qs-6', name: 'Savalan Cabernet Merlot (750 ml)', price: 50.00 },
          { id: 'qs-7', name: 'Savalan Merlot Special Edition (750 ml)', price: 140.00 },
          { id: 'qs-8', name: 'Chabiant Saperavi Medrese (150 ml)', price: 11.00 },
          { id: 'qs-9', name: 'Chabiant Saperavi Medrese (750 ml)', price: 45.00 },
          { id: 'qs-10', name: 'Meysəri Mərcan (150 ml)', price: 15.00 },
          { id: 'qs-11', name: 'Meysəri Mərcan (750 ml)', price: 65.00 }
        ]
      },
      {
        id: 'sub-ag-serablar',
        num: '13.',
        slug: 'ag-serablar',
        color: '#49442a',
        names: { az: 'Ağ şərablər', en: 'White Wines', ru: 'Белые вина' },
        items: [
          { id: 'as-1', name: 'Savalan Chardonnay (150 ml)', price: 12.00 },
          { id: 'as-2', name: 'Savalan Chardonnay (750 ml)', price: 50.00 },
          { id: 'as-3', name: 'Savalan Elisa Dry (150 ml)', price: 19.00 },
          { id: 'as-4', name: 'Savalan Elisa Dry (750 ml)', price: 85.00 },
          { id: 'as-5', name: 'Chabiant Bayan Shira Rkasiteli (150 ml)', price: 11.00 },
          { id: 'as-6', name: 'Chabiant Bayan Shira Rkasiteli (750 ml)', price: 45.00 }
        ]
      },
      {
        id: 'sub-cehrayi-serablar',
        num: '14.',
        slug: 'cehrayi-serablar',
        color: '#4d232e',
        names: { az: 'Çəhrayı şərablər', en: 'Rosé Wines', ru: 'Розовые вина' },
        items: [
          { id: 'cs-1', name: 'Savalan Rose (150 ml)', price: 12.00 },
          { id: 'cs-2', name: 'Savalan Rose (750 ml)', price: 50.00 },
          { id: 'cs-3', name: 'Meysəri Sənəm (150 ml)', price: 15.00 },
          { id: 'cs-4', name: 'Meysəri Sənəm (750 ml)', price: 65.00 },
          { id: 'cs-5', name: 'Chabiant Medrese Cabernet Sauvignon (150 ml)', price: 14.00 },
          { id: 'cs-6', name: 'Chabiant Medrese Cabernet Sauvignon (750 ml)', price: 60.00 }
        ]
      },
      {
        id: 'sub-likor',
        num: '15.',
        slug: 'likor',
        color: '#422437',
        names: { az: 'Likor', en: 'Liqueur', ru: 'Ликер' },
        items: [
          { id: 'lk-1', name: 'Baileys (50 ml)', price: 6.00 },
          { id: 'lk-2', name: 'Baileys (1 L)', price: 110.00 },
          { id: 'lk-3', name: 'Aperol (50 ml)', price: 8.00 },
          { id: 'lk-4', name: 'Aperol (1 L)', price: 130.00 },
          { id: 'lk-5', name: 'Kampari (50 ml)', price: 6.00 },
          { id: 'lk-6', name: 'Kampari (1 L)', price: 110.00 },
          { id: 'lk-7', name: 'Kuantro (50 ml)', price: 6.00 },
          { id: 'lk-8', name: 'Kuantro (1 L)', price: 110.00 },
          { id: 'lk-9', name: 'Kahlua (50 ml)', price: 6.00 },
          { id: 'lk-10', name: 'Kahlua (1 L)', price: 110.00 },
          { id: 'lk-11', name: 'Malibu (50 ml)', price: 6.00 },
          { id: 'lk-12', name: 'Malibu (1 L)', price: 110.00 },
          { id: 'lk-13', name: 'Jagermeister (50 ml)', price: 8.00 },
          { id: 'lk-14', name: 'Jagermeister (1 L)', price: 140.00 },
          { id: 'lk-15', name: 'Sambuka (50 ml)', price: 7.00 },
          { id: 'lk-16', name: 'Sambuka (1 L)', price: 120.00 },
          { id: 'lk-17', name: 'Disaronno (50 ml)', price: 7.00 },
          { id: 'lk-18', name: 'Disaronno (1 L)', price: 120.00 }
        ]
      }
    ]
  }
];
