import React, { useState, useEffect } from "react";
import SidebarCarrier from "@components/SidebarCarrier";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarCarrier
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
          className="flex-grow px-0 lg:px-4 overflow-auto bg-blue-50 dark:bg-gray-900"
          style={{
            marginLeft: isMobile ? "0px" : "240px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default CarrierLayout;
