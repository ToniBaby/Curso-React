import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const FormFormik = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",

      /*  password: "",
      repet: "", */
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe contener al menos 5 caracteres")
        .max(15),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6)
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message: "La contraseña debe contener al menos una letra mayuscula",
        }),
      reper: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "40px" }}>
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
    </div>
  );
};

export default FormFormik;
