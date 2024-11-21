import React from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiPlusCircle,
  FiSun,
  FiMoon,
} from "react-icons/fi";

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
  return (
    <header
      className={`fixed top-0 z-10 ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } w-full sm:left-60 sm:w-[calc(100%-240px)]`}
      style={{ height: "75px" }}
    >
      <div className="flex items-center justify-between px-4 h-full">
        <button
          onClick={handleDrawerToggle}
          className="text-gray-500 dark:text-gray-300 sm:hidden"
        >
          <FiMenu className="w-6 h-6" />
        </button>

        <div className="relative flex-grow max-w-md mx-4">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            className={`${
              isDarkMode ? "text-gray-50" : "text-primary-bluedark"
            }`}
          >
            <FiPlusCircle className="w-6 h-6" />
          </button>
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
