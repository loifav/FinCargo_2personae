import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string>("To Validated");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const buttons = [
    { label: "To Validated", color: "bg-orange-500" },
    { label: "Due and overdue", color: "bg-orange-500" },
    { label: "Rejected", color: "bg-red-500" },
    { label: "Validated and Paid", color: "bg-green-500" },
  ];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && buttons.some((btn) => btn.label === tab)) {
      setSelectedButton(tab);
    }
  }, [searchParams]);

  const handleButtonClick = (label: string) => {
    setSelectedButton(label);
    onFilterChange(label); // Appelle la fonction de filtrage

    // Navigation basée sur le bouton sélectionné
    switch (label) {
      case "To Validated":
        navigate("/");
        break;
      case "Due and overdue":
        navigate("/DueNOverdue");
        break;
      case "Rejected":
        navigate("/pastTransaction", { state: { filterStatus: "refused" } });
        break;
      case "Validated and Paid":
        navigate("/pastTransaction", { state: { filterStatus: "paid" } });
        break;
      default:
        break;
    }
  };

  return (
      <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-50 mb-4">
          Filter Invoices
        </h2>

        {/* Desktop view */}
        <div className="hidden sm:flex flex-row w-full gap-4">
          {buttons.map(({ label, color }) => (
              <button
                  key={label}
                  className={`py-2 px-6 flex-grow text-center text-white font-medium rounded-full ${
                      selectedButton === label
                          ? `${color} ring-2 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-700`
                          : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handleButtonClick(label)}
              >
                {label}
              </button>
          ))}
        </div>

        {/* Mobile view */}
        <div className="sm:hidden">
          <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="py-2 px-4 bg-blue-500 text-white rounded-full w-full text-left"
          >
            {selectedButton}
          </button>
          {menuOpen && (
              <div className="mt-4 flex flex-col space-y-3">
                {buttons.map(({ label, color }) => (
                    <button
                        key={label}
                        className={`py-2 px-4 rounded-full ${
                            selectedButton === label
                                ? `${color} text-white`
                                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => handleButtonClick(label)}
                    >
                      {label}
                    </button>
                ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default FilterButtons;
