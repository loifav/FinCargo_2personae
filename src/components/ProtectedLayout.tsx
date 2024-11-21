// components/ProtectedLayout.tsx
import React from "react";
import ProtectedRoute from "@components/ProtectedRoute";
import { LayoutWrapper } from "./LayoutWrapper";

export const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ProtectedRoute>
    <LayoutWrapper>{children}</LayoutWrapper>
  </ProtectedRoute>
);
