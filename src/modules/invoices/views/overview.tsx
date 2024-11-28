import React, { useState } from "react";
import { AddInvoice } from "../components/AddInvoice";
import { PendingInvoices } from "../components/PendingInvoices";

const Invoices: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Add a new invoice");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttons = [
    { label: "Add a new invoice", color: "" },
    { label: "Pending", color: "bg-orange-500" },
    { label: "Validated", color: "bg-green-500" },
    { label: "Rejected", color: "bg-red-500" },
    { label: "Overview", color: "bg-blue-500" },
  ];

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
    setMenuOpen(false); // Ferme le menu sur mobile après la sélection
  };

  return (
    <div
      className="p-5 bg-gray-50 dark:bg-gray-600 rounded-xl border-2 dark:border-0 mt-20 border-blue-100 shadow-sm"
      style={{ minHeight: `calc(100vh - 6rem)` }}
    >
      {/* Titre */}
      <h2 className="text-primary-bluedark dark:text-gray-50 text-4xl uppercase font-bold pb-8">
        Invoices
      </h2>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-row w-full mb-10 gap-5">
        {buttons.map(({ label, color }) => (
          <button
            key={label}
            className={`flex-grow py-2 px-4 flex items-center justify-center gap-2 ${
              selectedButton === label
                ? "bg-primary-bluelight dark:bg-gray-900 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-800 text-primary-bluedark dark:text-gray-50"
            } rounded-3xl`}
            onClick={() => handleButtonClick(label)}
          >
            {label}
            {color && (
              <span
                className={`w-3 h-3 rounded-full ${color}`}
                aria-label={`${label} status`}
              ></span>
            )}
          </button>
        ))}
      </div>

      {/* Mobile view */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="py-2 px-4 bg-primary-bluelight dark:bg-primary-bluedark text-white rounded-3xl hover:bg-primary-bluelight w-full text-left"
        >
          {selectedButton}
        </button>
        {menuOpen && (
          <div className="mt-3 flex flex-col space-y-3">
            {buttons.map(({ label, color }) => (
              <button
                key={label}
                className={`py-2 px-4 flex items-center justify-between rounded-3xl ${
                  selectedButton === label
                    ? "bg-primary-bluelight dark:bg-primary-bluedark text-white"
                    : "bg-gray-100 dark:bg-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => handleButtonClick(label)}
              >
                {label}
                {color && (
                  <span
                    className={`w-3 h-3 rounded-full ${color}`}
                    aria-label={`${label} status`}
                  ></span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Conditional rendering of components */}
      <div className="mt-10">
        {selectedButton === "Add a new invoice" && <AddInvoice />}
        {selectedButton === "Pending" && <PendingInvoices />}
        {selectedButton === "Validated" && (
          <div>Validated invoices content goes here.</div>
        )}
        {selectedButton === "Rejected" && (
          <div>Rejected invoices content goes here.</div>
        )}
        {selectedButton === "Overview" && (
          <div>Overview content goes here.</div>
        )}
      </div>
    </div>
  );
};

export default Invoices;
