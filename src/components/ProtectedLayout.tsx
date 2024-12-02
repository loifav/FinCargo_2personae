import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import { LayoutWrapper } from "./LayoutWrapper";

export const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isLoading } = useAuth();

  // Affiche un spinner ou un écran de chargement si l'authentification est en cours
  if (isLoading) {
    return <div>Loading...</div>; // Remplacez ceci par un spinner personnalisé si nécessaire
  }

  if (!user.isAuthenticated) {
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/login" replace />;
  }

  return <LayoutWrapper>{children}</LayoutWrapper>;
};
