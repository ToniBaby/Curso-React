import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { Skeleton } from "@mui/material";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    let consulta;

    let productsCollection = collection(db, "products");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProductos);
    });
  }, [categoryName]);

  return (
    <>
      <h1>Todos los Productos</h1>
      {/*  {items.length === 0 ? (
        <CircleLoader color="#36d7b7" />
      ) : (
        <ItemList items={items} />
      )} */}
      (<ItemList items={items} />)
    </>
  );
};

export default ItemListContainer;
