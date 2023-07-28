import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Seguro deseas eliminar todo?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Perfecto, continua comprando", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div /* style={{ backgroundColor: cart.length > 0 ? "steelblue" : "red" }} */
    >
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid steelblue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <Button variant="outlined" onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button variant="outlined" onClick={limpiar}>
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="outlined">Finalizar compra</Button>
          </Link>
        </>
      )}

      <h3>El total del carrito es :{total} </h3>
    </div>
  );
};

export default CartContainer;
