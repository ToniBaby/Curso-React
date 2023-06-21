import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import MaterialComponents from "./components/pages/material/MaterialComponents";
function App() {
  let nombre = "Tomas";
  const saludo = "Hola como te va?";

  return (
    <div>
      <Navbar />
      <Home nombre={nombre} />
      <MaterialComponents />
      <Login />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
