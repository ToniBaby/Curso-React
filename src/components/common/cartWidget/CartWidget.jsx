import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart" style={{ color: "#461F00" }}>
      <Badge badgeContent={total} color="success">
        <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
