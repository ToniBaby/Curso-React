import { Button, Card } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css"

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  

  let limpiar = () => {
    Swal.fire({
      title: "Seguro deseas eliminar todo?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: "No",
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
    <div className="cartContainer">
      {cart.map((elemento) => {
        // Encuentra el producto correspondiente en el array de productos
        const product = cart.find((prod) => prod.id === elemento.id);

        return (
          <div className="card" key={elemento.id} style={{height:"300px", width: "200px", border: "2px solid  #461F00" }}>
            <h3>{elemento.title}</h3>
            <img src={product.img} alt={elemento.title} style={{ width: "100px" }} />
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <Button color="success" variant="outlined"  onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button color="success" variant="contained" onClick={limpiar}>
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button color="success" variant="contained">Finalizar compra</Button>
          </Link>
        </>
      )}

      <h3>El total del carrito es :{total} </h3>
    </div>
  );
};

export default CartContainer;
