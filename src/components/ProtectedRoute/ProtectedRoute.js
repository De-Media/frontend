import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigate("/login");
  }

  return <>{children}</>;
};

export default ProtectedRoute;
