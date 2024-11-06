import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

// const isAuthenticated = true;

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = getUser();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
