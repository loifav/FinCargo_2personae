import React from "react";
import { FiMenu, FiBell, FiPlusCircle, FiSun, FiMoon } from "react-icons/fi";

import { useAuth } from "@contexts/AuthContext";

interface HeaderProps {
  handleDrawerToggle: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Headerbar: React.FC<HeaderProps> = ({
  handleDrawerToggle,
  isDarkMode,
  toggleDarkMode,
}) => {
  const { user } = useAuth();

  return (
    <header
      className={`fixed top-0 z-30 ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } w-full lg:left-56 lg:w-[calc(100%-240px)]`}
      style={{ height: "75px" }}
    >
      <div className="flex items-center justify-end px-4 h-full">
        <button
          onClick={handleDrawerToggle}
          className="text-gray-500 dark:text-gray-300 lg:hidden"
        >
          <FiMenu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4">
          {/* Render the button only if the role is not "freight_forwarder" */}
          {user.role !== "freight_forwarder" && (
            <button
              className={`${
                isDarkMode ? "text-gray-50" : "text-primary-bluedark"
              }`}
            >
              <FiPlusCircle className="w-6 h-6" />
            </button>
          )}

          <button
            className={`${
              isDarkMode ? "text-gray-50" : "text-primary-bluedark"
            }`}
          >
            <FiBell className="w-6 h-6" />
          </button>
          <button
            onClick={toggleDarkMode}
            className={`${
              isDarkMode ? "text-gray-50" : "text-primary-bluedark"
            }`}
          >
            {isDarkMode ? (
              <FiSun className="w-6 h-6" />
            ) : (
              <FiMoon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headerbar;
