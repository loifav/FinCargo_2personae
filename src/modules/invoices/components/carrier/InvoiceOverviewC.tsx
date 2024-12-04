import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AddInvoice } from "./AddInvoice";
import { PendingInvoices } from "./PendingInvoices";
import { FiChevronDown } from "react-icons/fi";

export const InvoiceOverviewC: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Add a new invoice");
  const [searchParams] = useSearchParams();

  const buttons = [
    { label: "Add a new invoice", color: "" },
    { label: "Pending", color: "bg-orange-500" },
    { label: "Validated", color: "bg-green-500" },
    { label: "Rejected", color: "bg-red-500" },
    { label: "Overview", color: "bg-blue-500" },
  ];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && buttons.some((btn) => btn.label === tab)) {
      setSelectedButton(tab);
    }
  }, [searchParams]);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
    setMenuOpen(false);
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-xl border-2 mt-20 border-blue-100 shadow-sm min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
      <h2 className="text-primary-bluedark dark:text-gray-50 text-4xl uppercase font-bold pb-8">
        Carrier Invoices
      </h2>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-row w-full mb-10 gap-5">
        {buttons.map(({ label, color }) => (
          <button
            key={label}
            className={`flex-grow py-2 px-4 flex items-center justify-center gap-2 ${
              selectedButton === label
                ? "bg-primary-bluelight dark:bg-gray-900 text-white border-2 border-primary-bluedark"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-800 text-primary-bluedark dark:text-gray-50 border-2 border-gray-400"
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
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-between py-2 px-4 bg-primary-bluelight dark:bg-gray-900 text-white rounded-3xl hover:bg-primary-bluelight w-full text-left border-2 border-primary-bluedark"
        >
          Stage: {selectedButton}
          <FiChevronDown />
        </button>
        {menuOpen && (
          <div className="mt-3 flex flex-col space-y-3">
            {buttons.map(({ label, color }) => (
              <button
                key={label}
                className={`py-2 px-4 flex items-center justify-between rounded-3xl ${
                  selectedButton === label
                    ? "bg-primary-bluelight dark:bg-gray-900 text-white border-2 border-primary-bluedark"
                    : "bg-gray-100 dark:bg-gray-500 hover:bg-gray-200 border-2 border-gray-400"
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
