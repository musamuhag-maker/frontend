import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Login Required", {
      description: "Please login to access this page.",
    });

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;