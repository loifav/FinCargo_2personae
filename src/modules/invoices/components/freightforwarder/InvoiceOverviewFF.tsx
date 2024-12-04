import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FinCarrierFilter, FinSearch } from "@modules/core";

export const InvoiceOverviewFF: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("Add a new invoice");
  const [selectedCarriers, setSelectedCarriers] = useState<string[]>([]);
  const [searchParams] = useSearchParams();

  const buttons = [
    { label: "To validate", color: "bg-orange-500" },
    { label: "Rejected", color: "bg-red-500" },
    { label: "Overview", color: "bg-blue-500" },
  ];

  // Suppression de `filteredData` inutilisé
  const placeholderData = [{ name: "Example" }];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && buttons.some((btn) => btn.label === tab)) {
      setSelectedButton(tab);
    }
  }, [searchParams]);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-xl border-2 mt-20 border-blue-100 shadow-sm min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
      <h2 className="text-primary-bluedark dark:text-gray-50 text-4xl uppercase font-bold pb-8">
        Invoices
      </h2>
      <div className="flex gap-2 pb-4">
        <FinSearch
          placeholder="Search invoices..."
          data={placeholderData}
          filterKey="name"
          onFilter={(filteredData) => {
            console.log("Filtered Data:", filteredData);
          }}
        />
        <FinCarrierFilter
          value={selectedCarriers}
          onChange={setSelectedCarriers}
          multiple={true}
        />
      </div>
      <div className="border-t border-gray-300 dark:border-gray-500 mb-4"></div>

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
    </div>
  );
};
