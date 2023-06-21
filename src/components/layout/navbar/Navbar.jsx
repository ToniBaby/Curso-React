import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Tiendo de Comidas</h4>
      <ul className="containerCategories">
        <li>Nuestros Platos</li>
        <li>Conocenos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
