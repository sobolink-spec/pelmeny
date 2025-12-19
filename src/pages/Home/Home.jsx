import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Добро пожаловать в GamerShop!</h1>
      <p>Лучшее игровое оборудование для профессионалов и любителей.</p>
      <section className="featured">
        <h2>Популярные товары</h2>
        <div className="products">
          {/* Здесь будут карточки товаров */}
          <p>Скоро здесь появятся товары!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;