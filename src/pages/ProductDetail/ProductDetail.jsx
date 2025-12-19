import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Стикер скидки */}
      {product.discount && (
        <div className="discount-badge">
          -{product.discount}%
        </div>
      )}
      
      {/* Изображение товара */}
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
        />
      </div>
      
      {/* Информация о товаре */}
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">
          <h3>{product.name}</h3>
        </Link>
        
        <div className="product-category">
          <span className="category-tag">{product.category}</span>
        </div>
        
        <p className="product-description">
          {product.description ? product.description.substring(0, 100) + '...' : 'Нет описания'}
        </p>
        
        {/* Рейтинг */}
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span 
              key={index} 
              className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
          <span className="rating-value">({product.rating})</span>
        </div>
        
        {/* Цена */}
        <div className="product-price">
          {product.discount ? (
            <>
              <span className="old-price">{product.price.toLocaleString()} ₽</span>
              <span className="current-price">
                {(product.price * (1 - product.discount / 100)).toLocaleString()} ₽
              </span>
            </>
          ) : (
            <span className="current-price">{product.price.toLocaleString()} ₽</span>
          )}
        </div>
        
        {/* Кнопки действий */}
        <div className="product-actions">
          <button 
            className="btn btn-primary add-to-cart"
            onClick={() => addToCart(product)}
            aria-label={`Добавить ${product.name} в корзину`}
          >
            В корзину
          </button>
          <Link to={`/product/${product.id}`} className="btn btn-secondary view-details">
            Подробнее
          </Link>
        </div>
        
        {/* Характеристики */}
        <div className={`product-specs ${isHovered ? 'visible' : ''}`}>
          <ul>
            {product.specs && product.specs.slice(0, 3).map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;