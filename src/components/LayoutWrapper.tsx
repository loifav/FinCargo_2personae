// components/LayoutWrapper.tsx
import React from "react";
import LayoutSelector from "@layouts/LayoutSelector";
import { useTheme } from "@contexts/useTheme";

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <LayoutSelector darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      {children}
    </LayoutSelector>
  );
};
