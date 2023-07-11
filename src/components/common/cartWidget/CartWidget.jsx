import { TbShoppingCartDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <TbShoppingCartDiscount />
      </Link>
    </>
  );
};

export default CartWidget;
