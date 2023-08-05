import { BrowserRouter } from "react-router-dom";
import CartContextComponent from "./context/CartContext";
import "./App.css"
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
