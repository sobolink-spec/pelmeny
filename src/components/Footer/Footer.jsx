import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GamerShop. Все права защищены.</p>
      <p>Магазин игрового оборудования для геймеров.</p>
    </footer>
  );
};

export default Footer;