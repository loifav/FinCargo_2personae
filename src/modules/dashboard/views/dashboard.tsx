import React, { useState } from "react";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CreditProgressBar } from "../components/CreditProgressBar";
import TransactionTable from "../components/transactionTable";
import FilterButtons from "../components/filterButtons";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // carrier
  const carrierCards = [
    { title: "Total Users", value: 1200, color: "bg-blue-50" },
    {
      title: "Validated Invoices",
      value: 4,
      color: "bg-blue-50",
      border: "border-green-500",
      onClick: () => navigate("/invoices?tab=Validated"),
    },
    {
      title: "Pending Invoices",
      value: 75,
      color: "bg-blue-50",
      border: "border-yellow-500",
      onClick: () => navigate("/invoices?tab=Pending"),
    },
    { title: "Total Revenue", value: "$50,000", color: "bg-blue-50" },
  ];

  // freight-forwarder
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      amount: 1500,
      invoiceUrl: "#",
      actions: [
        { label: "Accepter", onClick: () => console.log("Accepter") },
        { label: "Rejeter", onClick: () => console.log("Rejeter") },
      ],
      status: "stillToValidate",
    },
    {
      id: "2",
      amount: 2000,
      invoiceUrl: "#",
      actions: [
        { label: "Accepter", onClick: () => console.log("Accepter") },
        { label: "Rejeter", onClick: () => console.log("Rejeter") },
      ],
      status: "dueAndOverdue",
    },
  ]);

  const [filter, setFilter] = useState<string>("all");

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    return transaction.status === filter;
  });

  const maxCredit = 5000;
  const usedCredit = 1500;

  if (user?.role === "carrier") {
    return (
      <div className="p-5 h-full bg-gray-50 dark:bg-gray-700 rounded-xl mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carrierCards.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center p-6 rounded-xl text-gray-800 dark:text-gray-50 ${card.color}`}
              onClick={card.onClick}
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (user?.role === "freight_forwarder") {
    return (
      <div className="p-6">
        <h1 className="text-6xl font-bold mb-6 text-center text-[#5885af]">
          Dashboard
        </h1>

        <FilterButtons onFilterChange={handleFilterChange} />

        <CreditProgressBar maxCredit={maxCredit} usedCredit={usedCredit} />

        <TransactionTable transactions={filteredTransactions} />
      </div>
    );
  }

  return <div>Unauthorized</div>;
};

export default Dashboard;
