import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Логотип */}
          <Link to="/" className="logo">
            <span className="logo-text">Gamer</span>
            <span className="logo-highlight">Shop</span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="desktop-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Главная
            </NavLink>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Каталог
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              О нас
            </NavLink>
          </nav>

          {/* Иконки действий */}
          <div className="header-actions">
            <button className="cart-btn" onClick={onCartClick}>
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartCount}</span>
            </button>
            
            {/* Кнопка меню для мобильных устройств */}
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/catalog" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </NavLink>
            <button className="btn btn-primary mobile-cart-btn" onClick={() => {
              onCartClick();
              setIsMenuOpen(false);
            }}>
              Корзина ({cartCount})
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;