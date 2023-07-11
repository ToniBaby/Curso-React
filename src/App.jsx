import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemList/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          {<Route path="/itemDetail/:id" element={<ItemDetailContainer />} />}
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
