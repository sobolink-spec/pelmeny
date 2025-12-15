import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ProductCard from './pages/ProductCard/ProductCard';
import About from './pages/About/About';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Показываем модальное окно с подтверждением
    showModal(
      <div className="modal-success">
        <h3>✅ Товар добавлен в корзину!</h3>
        <p>{product.name} успешно добавлен в вашу корзину.</p>
      </div>
    );
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Функция для изменения количества товара
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Функция для подсчета общей суммы
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Функция для показа модального окна
  const showModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Функция для скрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Эффект для сохранения корзины в localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Header 
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          total={calculateTotal()}
          onCheckout={() => {
            if (cartItems.length === 0) {
              showModal(<div className="modal-error"><h3>❌ Корзина пуста!</h3><p>Добавьте товары в корзину перед оформлением заказа.</p></div>);
              return;
            }
            showModal(
              <div className="modal-success">
                <h3>🎉 Заказ оформлен!</h3>
                <p>Спасибо за покупку! Сумма заказа: {calculateTotal().toLocaleString()} ₽</p>
                <p>Наш менеджер свяжется с вами в ближайшее время.</p>
              </div>
            );
            setCartItems([]);
            setIsCartOpen(false);
          }}
        />

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {modalContent}
        </Modal>

        <Footer />
      </div>
    </Router>
  );
}

export default App;