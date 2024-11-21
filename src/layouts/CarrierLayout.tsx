import React, { useState } from "react";
import Sidebar from "@components/Sidebar";
import Headerbar from "@components/Headerbar";

interface CarrierLayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const CarrierLayout: React.FC<CarrierLayoutProps> = ({
  children,
  darkMode,
  toggleDarkMode,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        darkMode={darkMode}
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <Headerbar
          handleDrawerToggle={handleDrawerToggle}
          isDarkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Main Content */}
        <main
          className={`flex-grow p-4 overflow-auto bg-gray-50 dark:bg-gray-900`}
          style={{
            marginTop: "75px", // Espace pour éviter le Header
            marginLeft: window.innerWidth >= 640 ? "240px" : "0px", // 240px sur desktop, 0 sur mobile
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default CarrierLayout;
