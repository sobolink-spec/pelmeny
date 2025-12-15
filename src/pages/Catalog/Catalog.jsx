import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalog.css';

// Временные данные для товаров
const initialProducts = [
  { id: 1, name: 'Игровой ноутбук ASUS ROG', price: 150000, category: 'laptops' },
  { id: 2, name: 'Игровая мышь Razer DeathAdder', price: 5000, category: 'mice' },
  { id: 3, name: 'Механическая клавиатура Logitech G Pro', price: 12000, category: 'keyboards' },
  { id: 4, name: 'Видеокарта NVIDIA RTX 4090', price: 200000, category: 'gpu' },
  { id: 5, name: 'Процессор AMD Ryzen 9 7950X', price: 70000, category: 'cpu' },
  { id: 6, name: 'Игровой монитор Samsung Odyssey', price: 40000, category: 'monitors' },
  { id: 7, name: 'Игровая гарнитура SteelSeries Arctis', price: 15000, category: 'headsets' },
  { id: 8, name: 'Микрофон HyperX QuadCast', price: 10000, category: 'microphones' },
];

const categories = ['all', 'laptops', 'mice', 'keyboards', 'gpu', 'cpu', 'monitors', 'headsets', 'microphones'];

const Catalog = () => {
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;