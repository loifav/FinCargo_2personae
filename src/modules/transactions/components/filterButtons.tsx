import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "toValidate";

  const buttons = useMemo(
    () => [
        {
            label: "To Validated",
            color: "bg-orange-500",
            filter: "toValidate",
        },
        {
            label: "Due and overdue",
            color: "bg-orange-500",
            filter: "dueAndOverdue",
        },
        {
            label: "Validated and Paid",
            color: "bg-green-500",
            filter: "paid"
        },
        {
            label: "Rejected",
            color: "bg-red-500",
            filter: "refused"
        },
    ],
    []
  );

  const handleButtonClick = (filter: string) => {
    setSearchParams({ tab: filter });
    onFilterChange(filter);
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-50 mb-4">
        Filter Invoices
      </h2>

      <div className="hidden sm:flex flex-row w-full gap-4">
        {buttons.map(({ label, color, filter }) => (
          <button
            key={filter}
            className={`py-2 px-6 flex items-center gap-3 justify-center flex-grow text-center font-medium rounded-full transition-colors ${
              currentTab === filter
                ? "bg-primary-bluelight dark:bg-gray-900 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 text-primary-bluedark dark:text-gray-50"
            }`}
            onClick={() => handleButtonClick(filter)}
          >
            <span
              className={`w-3 h-3 rounded-full ${color}`}
              aria-label={`${label} status`}
            ></span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
