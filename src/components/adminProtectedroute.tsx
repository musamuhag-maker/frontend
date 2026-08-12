import { Navigate, Outlet } from "react-router-dom";

function ProtectedAdminRoute() {

  const token = localStorage.getItem("adminToken");
  const admin = localStorage.getItem("admin");


  if (!token || !admin) {
    return <Navigate to="/admin/login" replace />;
  }


  return <Outlet />;
}


export default ProtectedAdminRoute;