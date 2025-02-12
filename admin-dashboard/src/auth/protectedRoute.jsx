// src/auth/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";


const ProtectedRoute = ({ element, requiredPermission }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.permissions.includes(requiredPermission)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
