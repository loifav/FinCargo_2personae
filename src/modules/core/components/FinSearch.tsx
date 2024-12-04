import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface FinSearchProps<T> {
  placeholder?: string;
  data: T[];
  onFilter: (filteredData: T[]) => void;
  filterKey: keyof T;
}

export const FinSearch = <T extends Record<string, unknown>>({
  placeholder = "Search...",
  data,
  onFilter,
  filterKey,
}: FinSearchProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filteredData = data.filter((item) =>
      String(item[filterKey]).toLowerCase().includes(term.toLowerCase())
    );
    onFilter(filteredData);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-bluelight dark:bg-gray-800 dark:text-gray-200"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
    </div>
  );
};
