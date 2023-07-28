import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="LayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
