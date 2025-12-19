import { useState } from 'react';
import ProductCard from '../ProductDetail/ProductDetail';
import './Catalog.css';

// Временные данные для товаров
const initialProducts = [
  { id: 1, name: 'Игровой ноутбук ASUS ROG', description: 'Игровой ноутбук с процессором Intel Core i9 и видеокартой NVIDIA RTX 4070', price: 150000, category: 'laptops',specs: [
      'Процессор: Intel Core i9-13900H',
      'Видеокарта: NVIDIA RTX 4070 8GB',
      'Оперативная память: 32GB DDR5',
      'Диск: 1TB NVMe SSD',
      'Экран: 17.3" QHD 240Hz'
    ] },
  { id: 2, name: 'Игровая мышь Razer DeathAdder',description: 'Беспроводная игровая мышь с оптическим сенсором 30K DPI', price: 5000, category: 'mice',specs: [
      'DPI: 30000',
      'Время отклика: 1ms',
      'Кнопки: 8 программируемых',
      'Вес: 63г',
      'Подсветка: RGB Chroma'
    ] },
  { id: 3, name: 'Механическая клавиатура Logitech G Pro',description: 'Механическая клавиатура с переключателями GX Blue', price: 12000, category: 'keyboards',specs: [
      'Тип: Механическая',
      'Переключатели: GX Blue',
      'Подсветка: RGB LIGHTSYNC',
      'Антистатик: Да',
      'USB-хаб: 2 порта'
    ] },
  { id: 4, name: 'Видеокарта NVIDIA RTX 4090',description: 'Флагманская видеокарта для игр в 4K', price: 200000, category: 'gpu',specs: [
      'Память: 24GB GDDR6X',
      'Шина: 384-bit',
      'CUDA ядер: 16384',
      'RT ядер: 128',
      'Питание: 3x8-pin'
    ] },
  { id: 5, name: 'Процессор AMD Ryzen 9 7950X',description: '16-ядерный процессор для геймеров и создателей контента', price: 70000, category: 'cpu',specs: [
      'Ядра: 16',
      'Потоки: 32',
      'Базовая частота: 4.5GHz',
      'Turbo частота: 5.7GHz',
      'Кэш L3: 64MB'
    ] },
  { id: 6, name: 'Игровой монитор Samsung Odyssey',description: 'Игровой монитор с изогнутым экраном 49"', price: 40000, category: 'monitors',specs: [
      'Размер: 49"',
      'Разрешение: 5120x1440',
      'Частота: 240Hz',
      'Отклик: 1ms',
      'Изогнутость: 1000R'
    ] },
  { id: 7, name: 'Игровая гарнитура SteelSeries Arctis',description: 'Беспроводная игровая гарнитура с активным шумоподавлением', price: 15000, category: 'headsets',specs: [
      'Аккумулятор: 22ч',
      'Микрофон: с шумоподавлением',
      'Подключение: 2.4GHz + Bluetooth',
      'Динамики: 40мм',
      'Вес: 337г'
    ] },
  { id: 8, name: 'Микрофон HyperX QuadCast',description: 'USB-микрофон с RGB подсветкой для стриминга', price: 10000, category: 'microphones',specs: [
      'Тип: Конденсаторный',
      'Направленность: 4 режима',
      'Частота: 20Hz-20kHz',
      'Подсветка: RGB',
      'Крепление: антивибрационное'
    ] },
];

const categories = ['all', 'laptops', 'mice', 'keyboards', 'gpu', 'cpu', 'monitors', 'headsets', 'microphones'];

const Catalog = ({ addToCart }) => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Функция для фильтрации товаров по категории
  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter(product => product.category === category);
      setProducts(filtered);
    }
  };

  return (
    <div className="catalog">
      <h1>Каталог товаров</h1>
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => filterProducts(cat)}
          >
            {cat === 'all' ? 'Все' : cat}
          </button>
        ))}
      </div>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Catalog;