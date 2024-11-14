import React from 'react';

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="filter" className="text-lg font-medium mr-4">Filter:</label>
      <select
        id="filter"
        onChange={(e) => onFilterChange(e.target.value)}
        className="bg-black-800 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:black-400"
      >
        <option value="all">All</option>
        <option value="stillToValidate">Still to validate</option>
        <option value="dueAndOverdue">Due and overdue</option>
        <option value="paidAndCompleted">Paid and completed</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterButtons;

