import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // 5
  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      localStorage.setItem("cart", JSON.stringify(newArr));
      setCart(newArr);
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    // localStorage.setItem("cart", JSON.stringify([]))
    localStorage.removeItem("cart");
    setCart([]);
  };

  const deleteById = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setCart(newArr);
  };

  // RETORNE EL TOTAL DE CANTIDADES
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  // RETORNE EL TOTAL DEL PRECIO

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  // dado un id, saber las cantidades que hay

  const getQuantityById = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);

    // return producto ? producto.quantity : producto
    return producto?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
