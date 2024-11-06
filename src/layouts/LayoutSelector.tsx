import React from "react";
import CarrierLayout from "@layouts/CarrierLayout";
import FreightForwarderLayout from "@layouts/FreightForwarderLayout";
import { getUser } from "@utils/auth";

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
  const { role } = getUser();

  if (role === "carrier") {
    return (
      <CarrierLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        {children}
      </CarrierLayout>
    );
  }

  if (role === "freight-forwarder") {
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
