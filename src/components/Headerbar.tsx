import React from "react";
<<<<<<< HEAD
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiPlusCircle,
  FiSun,
  FiMoon,
} from "react-icons/fi";
=======
import { FiMenu, FiBell, FiPlusCircle, FiSun, FiMoon } from "react-icons/fi";

import { useAuth } from "@contexts/AuthContext";
>>>>>>> upstream/main

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
<<<<<<< HEAD
=======
  const { user } = useAuth();

>>>>>>> upstream/main
  return (
    <header
      className={`fixed top-0 z-30 ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } w-full lg:left-56 lg:w-[calc(100%-240px)]`}
      style={{ height: "75px" }}
    >
<<<<<<< HEAD
      <div className="flex items-center justify-between px-4 h-full">
=======
      <div className="flex items-center justify-end px-4 h-full">
>>>>>>> upstream/main
        <button
          onClick={handleDrawerToggle}
          className="text-gray-500 dark:text-gray-300 lg:hidden"
        >
          <FiMenu className="w-6 h-6" />
        </button>

<<<<<<< HEAD
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
=======
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

>>>>>>> upstream/main
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
