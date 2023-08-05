import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let userRoll = "admin";
  return <div>{userRoll === "admin" ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
