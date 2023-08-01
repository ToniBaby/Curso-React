import { Button, TextField } from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useFormik } from "formik";
import { useContext, useState } from "react";

import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";

const FormFormik = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",

      /*  password: "",
      repet: "", */
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");

      addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

      //modificar todos los productos en su stock
      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe contener al menos 5 caracteres")
        .max(15),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "40px" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            type="text"
            label="Telefono"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />

          {/*   <TextField
        type="password"
        label="Pass"
        variant="outlined"
        name="password"
        onChange={handleChange}
        error={errors.password ? true : false}
        helperText={errors.password}
      />
      <TextField
        type="text"
        label="Repet"
        variant="outlined"
        name="repet"
        onChange={handleChange}
        error={errors.repet ? true : false}
        helperText={errors.repet}
      /> */}
          <Button type="submit" variant="contained">
            Enviar
          </Button>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            Mostrar/ocultar
          </button>
        </form>
      ) : (
        <h1>la orden es{orderId}</h1>
      )}
    </div>
  );
};

export default FormFormik;
