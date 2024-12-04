import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownOption {
  label: string;
  value: string;
}

interface FinDropdownProps {
  data: DropdownOption[];
  label: string;
  value: string[] | string;
  multiple?: boolean;
  onChange: (value: string[] | string) => void;
  onClear?: () => void;
}

export const FinDropdown: React.FC<FinDropdownProps> = ({
  data,
  label,
  value,
  multiple = false,
  onChange,
  onClear,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (optionValue: string) => {
    if (multiple && Array.isArray(value)) {
      const updatedValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      onChange(updatedValue);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block " ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        type="button"
        className="w-full flex items-center justify-between bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600  hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={toggleDropdown}
      >
        <span>
          {label}:{" "}
          {multiple && Array.isArray(value)
            ? value.length > 0
              ? value.join(", ")
              : "All"
            : data.find((option) => option.value === value)?.label || "Select"}
        </span>
        <span className="ml-2 text-gray-500">
          <FiChevronDown />
        </span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md  max-h-60 overflow-auto">
          {data.length > 0 ? (
            data.map((option) => (
              <div
                key={option.value}
                className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  (Array.isArray(value) && value.includes(option.value)) ||
                  (!Array.isArray(value) && value === option.value)
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                <span>{option.label}</span>
                {multiple && (
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    readOnly
                    checked={
                      Array.isArray(value) && value.includes(option.value)
                    }
                  />
                )}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options available</div>
          )}
          {onClear && (
            <button
              className="w-full text-center text-primary-bluelight hover:underline px-4 py-2 "
              onClick={() => {
                onClear();
                setIsOpen(false);
              }}
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
};
