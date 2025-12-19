import { v4 as uuidv4 } from 'uuid';

export const products = [
  {
    id: 1,
    name: 'ASUS ROG Strix G17',
    category: 'Ноутбуки',
    price: 149990,
    discount: 10,
    rating: 4.8,
    image: 'gamer-shop/img/id_1.png',
    description: 'Игровой ноутбук с процессором Intel Core i9 и видеокартой NVIDIA RTX 4070',
    specs: [
      'Процессор: Intel Core i9-13900H',
      'Видеокарта: NVIDIA RTX 4070 8GB',
      'Оперативная память: 32GB DDR5',
      'Диск: 1TB NVMe SSD',
      'Экран: 17.3" QHD 240Hz'
    ],
    inStock: true
  },
  {
    id: 2,
    name: 'Razer DeathAdder V3 Pro',
    category: 'Мыши',
    price: 12990,
    discount: 15,
    rating: 4.9,
    image: 'gamer-shop/img/id_2.png',
    description: 'Беспроводная игровая мышь с оптическим сенсором 30K DPI',
    specs: [
      'DPI: 30000',
      'Время отклика: 1ms',
      'Кнопки: 8 программируемых',
      'Вес: 63г',
      'Подсветка: RGB Chroma'
    ],
    inStock: true
  },
  {
    id: 3,
    name: 'Logitech G Pro X',
    category: 'Клавиатуры',
    price: 15990,
    discount: 0,
    rating: 4.7,
    image: 'gamer-shop/img/id_3.png',
    description: 'Механическая клавиатура с переключателями GX Blue',
    specs: [
      'Тип: Механическая',
      'Переключатели: GX Blue',
      'Подсветка: RGB LIGHTSYNC',
      'Антистатик: Да',
      'USB-хаб: 2 порта'
    ],
    inStock: true
  },
  {
    id: 4,
    name: 'NVIDIA RTX 4090',
    category: 'Видеокарты',
    price: 199990,
    discount: 5,
    rating: 4.9,
    image: 'gamer-shop/img/id_4.png',
    description: 'Флагманская видеокарта для игр в 4K',
    specs: [
      'Память: 24GB GDDR6X',
      'Шина: 384-bit',
      'CUDA ядер: 16384',
      'RT ядер: 128',
      'Питание: 3x8-pin'
    ],
    inStock: false
  },
  {
    id: 5,
    name: 'AMD Ryzen 9 7950X',
    category: 'Процессоры',
    price: 79990,
    discount: 8,
    rating: 4.8,
    image: 'gamer-shop/img/id_5.png',
    description: '16-ядерный процессор для геймеров и создателей контента',
    specs: [
      'Ядра: 16',
      'Потоки: 32',
      'Базовая частота: 4.5GHz',
      'Turbo частота: 5.7GHz',
      'Кэш L3: 64MB'
    ],
    inStock: true
  },
  {
    id: 6,
    name: 'Samsung Odyssey G9',
    category: 'Мониторы',
    price: 99990,
    discount: 12,
    rating: 4.6,
    image: 'gamer-shop/img/id_6.png',
    description: 'Игровой монитор с изогнутым экраном 49"',
    specs: [
      'Размер: 49"',
      'Разрешение: 5120x1440',
      'Частота: 240Hz',
      'Отклик: 1ms',
      'Изогнутость: 1000R'
    ],
    inStock: true
  },
  {
    id: 7,
    name: 'SteelSeries Arctis Nova Pro',
    category: 'Гарнитуры',
    price: 29990,
    discount: 10,
    rating: 4.7,
    image: 'gamer-shop/img/id_7.png',
    description: 'Беспроводная игровая гарнитура с активным шумоподавлением',
    specs: [
      'Аккумулятор: 22ч',
      'Микрофон: с шумоподавлением',
      'Подключение: 2.4GHz + Bluetooth',
      'Динамики: 40мм',
      'Вес: 337г'
    ],
    inStock: true
  },
  {
    id: 8,
    name: 'HyperX QuadCast S',
    category: 'Микрофоны',
    price: 14990,
    discount: 0,
    rating: 4.5,
    image: 'gamer-shop/img/id_8.png',
    description: 'USB-микрофон с RGB подсветкой для стриминга',
    specs: [
      'Тип: Конденсаторный',
      'Направленность: 4 режима',
      'Частота: 20Hz-20kHz',
      'Подсветка: RGB',
      'Крепление: антивибрационное'
    ],
    inStock: true
  }
];

export const categories = [
  { id: 1, name: 'Все товары', value: 'all', count: 8 },
  { id: 2, name: 'Ноутбуки', value: 'Ноутбуки', count: 1 },
  { id: 3, name: 'Мыши', value: 'Мыши', count: 1 },
  { id: 4, name: 'Клавиатуры', value: 'Клавиатуры', count: 1 },
  { id: 5, name: 'Видеокарты', value: 'Видеокарты', count: 1 },
  { id: 6, name: 'Процессоры', value: 'Процессоры', count: 1 },
  { id: 7, name: 'Мониторы', value: 'Мониторы', count: 1 },
  { id: 8, name: 'Гарнитуры', value: 'Гарнитуры', count: 1 },
  { id: 9, name: 'Микрофоны', value: 'Микрофоны', count: 1 }
];