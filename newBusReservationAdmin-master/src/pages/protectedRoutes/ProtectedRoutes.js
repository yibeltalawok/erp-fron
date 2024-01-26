import { Navigate, Outlet } from "react-router-dom";
import Login from "../login/Login";
const useAuth = () => {
  const user = { loggedIn: false };
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  //  console.log("userInfo : ", userInfo);
  return userInfo;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
