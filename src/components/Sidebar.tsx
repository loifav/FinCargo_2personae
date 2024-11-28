import React from "react";
import {
  FiHome as DashboardIcon,
  FiFileText as InvoicesIcon,
  FiSettings as SettingsIcon,
  FiLogOut as LogoutIcon,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logoLight from "@assets/logo_fincargo_blue.svg";
import logoDark from "@assets/logo_fincargo_white.svg";
import { useAuth } from "@contexts/AuthContext";

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen,
  handleDrawerToggle,
  darkMode,
}) => {
  return (
    <>
      {/* Sidebar for Desktop */}
      <div
        className={`fixed top-0 left-0 w-60 h-full bg-blue-50 dark:bg-gray-900 ${
          mobileOpen ? "block" : "hidden"
        } sm:block`}
      >
        <SidebarContent
          darkMode={darkMode}
          handleDrawerToggle={handleDrawerToggle}
        />
      </div>

      {/* Sidebar for Mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex sm:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleDrawerToggle}
          ></div>
          <div className="relative w-60 bg-gray-100 dark:bg-gray-900">
            <SidebarContent
              darkMode={darkMode}
              handleDrawerToggle={handleDrawerToggle}
            />
          </div>
        </div>
      )}
    </>
  );
};

const SidebarContent: React.FC<{
  darkMode: boolean;
  handleDrawerToggle: () => void;
}> = ({ darkMode, handleDrawerToggle }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const { logout } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="p-4 flex justify-center">
        <Link to="/" onClick={handleDrawerToggle}>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo FinCargo"
            className="max-h-12"
          />
        </Link>
      </div>

      <nav className="flex-1 px-4">
        <SidebarItem
          to="/"
          icon={<DashboardIcon />}
          label="Dashboard"
          active={isActive("/")}
          handleDrawerToggle={handleDrawerToggle}
        />
        <SidebarItem
          to="/invoices"
          icon={<InvoicesIcon />}
          label="Invoices"
          active={isActive("/invoices")}
          handleDrawerToggle={handleDrawerToggle}
        />
        <SidebarItem
          to="/settings"
          icon={<SettingsIcon />}
          label="Settings"
          active={isActive("/settings")}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>

      <div className="p-4">
        <button
          className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-primary-bluelight dark:text-gray-50 text-gray-900 py-2 px-4 rounded-xl hover:bg-primary-bluelight dark:hover:bg-primary-bluedark hover:text-white transition"
          onClick={logout}
        >
          <LogoutIcon />
          Logout
        </button>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  handleDrawerToggle: () => void;
}> = ({ to, icon, label, active, handleDrawerToggle }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 px-4 py-2 my-3 rounded-xl ${
        active
          ? "bg-blue-100 text-primary-bluedark shadow dark:bg-primary-bluedark  dark:text-white"
          : "text-gray-700 hover:bg-gray-200 hover:shadow dark:text-gray-300 dark:hover:bg-gray-700"
      } transition`}
      onClick={handleDrawerToggle}
    >
      <div className="text-lg">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
