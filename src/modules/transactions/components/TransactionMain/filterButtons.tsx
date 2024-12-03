import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedButton, setSelectedButton] = useState<string>("To Validated");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const buttons = [
    { label: "To Validated", color: "bg-orange-500", filter: "stillToValidate" },
    { label: "Due and overdue", color: "bg-orange-500", filter: "dueAndOverdue" },
    { label: "Rejected", color: "bg-red-500", filter: "refused" },
    { label: "Validated and Paid", color: "bg-green-500", filter: "paid" },
  ];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && buttons.some((btn) => btn.label === tab)) {
      setSelectedButton(tab);
    }
  }, [buttons, searchParams]);

  const handleButtonClick = (label: string, filter: string) => {
    // Met à jour le bouton sélectionné
    setSelectedButton(label);

    // Appelle la fonction de filtre
    onFilterChange(filter);

    // Redirige vers la page correspondante
    switch (filter) {
      case "stillToValidate":
        navigate("/");
        break;
      case "dueAndOverdue":
        navigate("/DueNOverdue");
        break;
      case "refused":
        navigate("/pastTransaction", { state: { filterStatus: "refused" } });
        break;
      case "paid":
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
          {buttons.map(({ label, color, filter }) => (
              <button
                  key={label}
                  className={`py-2 px-6 flex items-center gap-3 justify-center flex-grow text-center font-medium rounded-full transition-colors ${
                      selectedButton === label
                          ? "bg-primary-bluelight dark:bg-gray-900 text-white"
                          : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 text-primary-bluedark dark:text-gray-50"
                  }`}
                  onClick={() => handleButtonClick(label, filter)}
              >
            <span
                className={`w-3 h-3 rounded-full ${color}`}
                aria-label={`${label} status`}
            ></span>
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
                {buttons.map(({ label, color, filter }) => (
                    <button
                        key={label}
                        className={`py-2 px-4 flex items-center gap-3 rounded-full ${
                            selectedButton === label
                                ? "bg-primary-bluelight dark:bg-primary-bluedark text-white"
                                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => handleButtonClick(label, filter)}
                    >
                <span
                    className={`w-3 h-3 rounded-full ${color}`}
                    aria-label={`${label} status`}
                ></span>
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
