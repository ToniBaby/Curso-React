import { Button } from "@mui/material";
import { products } from "../../productsMock";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const Dashboard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };

  return (
    <div>
      <h1>Ruta para el administrador</h1>
      <Button variant="contained" onClick={rellenar}>
        Rellenar Base de Datos
      </Button>
    </div>
  );
};

export default Dashboard;
