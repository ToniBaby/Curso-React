import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../../firebaseConfig";

import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let reffCollection = collection(db, "products");
    let refDoc = doc(reffCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);
  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
    Swal.fire({
      title: "Muy Bieeeen !",
      text: `Agregaste un producto al carrito.`,
      imageUrl:
        "https://res.cloudinary.com/dil3lubud/image/upload/v1689955359/mario_h6izx6.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Iujuuuuuu",
    });
  };
  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
};

export default ItemDetailContainer;
