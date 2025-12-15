import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, total, onCheckout }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Функция для увеличения количества товара
  const increaseQuantity = (item) => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  // Функция для уменьшения количества товара
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    } else {
      onRemove(item.id);
    }
  };

  // Функция оформления заказа с имитацией загрузки
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Имитация процесса оформления заказа
    setTimeout(() => {
      onCheckout();
      setIsCheckingOut(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-container" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Корзина</h2>
          <button className="close-btn" onClick={onClose} aria-label="Закрыть корзину">
            ✕
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h3>Корзина пуста</h3>
              <p>Добавьте товары из каталога</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p className="cart-item-category">{item.category}</p>
                      <p className="cart-item-price">
                        {item.price.toLocaleString()} ₽ × {item.quantity} = 
                        <span className="item-total"> {(item.price * item.quantity).toLocaleString()} ₽</span>
                      </p>
                    </div>
                    
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button 
                          className="quantity-btn" 
                          onClick={() => decreaseQuantity(item)}
                          aria-label="Уменьшить количество"
                        >
                          −
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn" 
                          onClick={() => increaseQuantity(item)}
                          aria-label="Увеличить количество"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        className="remove-btn" 
                        onClick={() => onRemove(item.id)}
                        aria-label="Удалить товар"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Товаров:</span>
                  <span>{items.reduce((sum, item) => sum + item.quantity, 0)} шт.</span>
                </div>
                <div className="summary-row">
                  <span>Сумма:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <div className="summary-row total">
                  <span>Итого:</span>
                  <span className="total-price">{total.toLocaleString()} ₽</span>
                </div>
                
                <button 
                  className="checkout-btn" 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <span className="spinner"></span>
                      Оформление...
                    </>
                  ) : (
                    'Оформить заказ'
                  )}
                </button>
                
                <p className="cart-note">
                  ⓘ После оформления с вами свяжется наш менеджер для подтверждения заказа
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;