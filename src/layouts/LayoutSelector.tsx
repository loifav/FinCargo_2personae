import React from "react";
import CarrierLayout from "@layouts/CarrierLayout";
import FreightForwarderLayout from "@layouts/FreightForwarderLayout";
import { useAuth } from "@contexts/AuthContext";

interface LayoutSelectorProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({
  children,
  darkMode,
  toggleDarkMode,
}) => {
  const { user } = useAuth();

  if (user.role === "carrier") {
    return (
      <CarrierLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        {children}
      </CarrierLayout>
    );
  }

  if (user.role === "freight_forwarder") {
    return (
      <FreightForwarderLayout
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        {children}
      </FreightForwarderLayout>
    );
  }

  return <div>Unauthorized</div>;
};

export default LayoutSelector;
