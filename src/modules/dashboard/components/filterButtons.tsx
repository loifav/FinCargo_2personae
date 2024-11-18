import React from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  const navigate = useNavigate(); // Déclarez le hook navigate

  // Fonction de gestion du changement de filtre
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    onFilterChange(filter);

    // Si l'option "dueAndOverdue" est sélectionnée, rediriger vers la page des factures
    if (filter === "dueAndOverdue") {
      navigate("/DueNOverdue"); // Redirige vers /invoices
    }
    if (filter === "paidAndCompleted") {
      navigate("/pastTransaction"); // Redirige vers /pastTransaction
    }

    if (filter === "stillToValidate") {
      navigate("/"); 
    }
    if (filter === "rejected") {
      navigate("/pastTransaction"); 
    }

  };

  return (
    <div className="mb-6">
      <label htmlFor="filter" className="text-lg font-medium mr-4">
        Filter:
      </label>
      <select
        id="filter"
        onChange={handleFilterChange}
        className="bg-black-800 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:black-400"
      >
        <option value="stillToValidate">Still to validate</option>
        <option value="dueAndOverdue">Due and overdue</option>{" "}
        {/* Cette option redirige */}
        <option value="paidAndCompleted">Paid and completed</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterButtons;
