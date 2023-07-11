import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <Link to="/">Tu Hogar</Link>
        <ul className="containerCategories">
          <Link to="/">Todo</Link>
          <Link to="/category/Living">Living</Link>
          <Link to="/category/Comedor">Comedor</Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
