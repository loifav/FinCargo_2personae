import React from "react";

const Dashboard: React.FC = () => {
  const cards = [
    {
      title: "Total Users",
      value: 1200,
      color: "bg-blue-50 dark:bg-gray-900",
      border: "border-blue-500 ",
    },
    {
      title: "Active Subscriptions",
      value: 300,
      color: "bg-blue-50 dark:bg-gray-900",
      border: "border-green-500",
    },
    {
      title: "Pending Invoices",
      value: 75,
      color: "bg-blue-50 dark:bg-gray-900",
      border: "border-yellow-500",
    },
    {
      title: "Total Revenue",
      value: "$50,000",
      color: "bg-blue-50 dark:bg-gray-900",
      border: "border-red-500",
    },
  ];

  return (
    <div className="p-5 h-full bg-gray-50 dark:bg-gray-700 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl text-gray-800 dark:text-gray-50 overflow-hidden ${card.color}`}
          >
            {/* Neon Border Effect */}
            <div
              className={`absolute inset-0 rounded-xl border-2 ${card.border} `}
            ></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
