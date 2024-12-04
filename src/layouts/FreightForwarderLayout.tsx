import React, { useState, useEffect } from "react";
import Sidebar from "@components/Sidebar";
import Headerbar from "@components/Headerbar";

interface FreightForwarderLayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const FreightForwarderLayout: React.FC<FreightForwarderLayoutProps> = ({
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
    handleResize(); // Vérifie la taille initialement

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

export default FreightForwarderLayout;
