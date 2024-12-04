import React, { useState } from "react";
import DueOverdue from "../components/status/dueOverdue/DueOverdue";
import FilterButtons from "@modules/transactions/components/filterButtons";
import { useLocation } from "react-router-dom";

function transactions() {
  const location = useLocation();

  const initialFilter = location.state?.filterStatus || ""; // Récupère le filtre transmis ou une valeur par défaut

  const [filterStatus, setFilterStatus] = useState<string>(initialFilter);

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-none lg:rounded-xl border-0 lg:border-2 dark:border-0 mt-20 border-blue-100 shadow-sm min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
      <h1 className="text-primary-bluedark dark:text-gray-50 text-4xl uppercase font-bold pb-8">
        Transactions
      </h1>
      <FilterButtons onFilterChange={handleFilterChange} />

      <div className="">
        <DueOverdue />
      </div>
    </div>
  );
}

export default transactions;
