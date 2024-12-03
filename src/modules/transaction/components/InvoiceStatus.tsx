import React from "react";

type InvoiceStatusProps = {
  status: string;
};

const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "pending":
        return {
          color: "text-yellow-600",
          bg: "bg-yellow-50 border border-yellow-400",
          label: "To be validated",
        };
      case "overdue":
        return {
          color: "text-red-600",
          bg: "bg-red-50 border border-red-400",
          label: "Overdue",
        };
      case "paid":
        return {
          color: "text-green-600",
          bg: "bg-green-50 border border-green-400",
          label: "Paid",
        };
      default:
        return {
          color: "text-gray-600",
          bg: "bg-gray-100 border border-gray-300",
          label: "Unknown",
        };
    }
  };

  const { color, bg, label } = getStatusStyles(status);

  return (
    <div className="invoice-status flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-md w-64">
      <h3 className="text-sm font-semibold text-gray-700 mb-1">
        Invoice status
      </h3>

      {/* Label de statut */}
      <span
        className={`status-label py-1 px-3 rounded-full ${bg} ${color} text-xs font-medium tracking-wide`}
      >
        {label}
      </span>

      {/* Barre de progression */}
      <div className="progress-bar w-full mt-3 h-1.5 rounded bg-gray-200 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            status === "paid"
              ? "bg-green-500 w-full"
              : status === "overdue"
              ? "bg-red-500 w-3/4"
              : "bg-yellow-500 w-1/3"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default InvoiceStatus;
