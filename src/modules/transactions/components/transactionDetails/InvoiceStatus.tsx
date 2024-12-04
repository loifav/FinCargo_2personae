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
          label: "Still to validate",
          progressWidth: "w-1/5",
          progressColor: "bg-yellow-500",
        };
      case "rejected":
        return {
          color: "text-red-600",
          bg: "bg-red-50 border border-red-400",
          label: "Rejected",
          progressWidth: "w-0",
          progressColor: "bg-red-500",
        };
      case "validated":
        return {
          color: "text-orange-600",
          bg: "bg-orange-50 border border-orange-400",
          label: "Validated",
          progressWidth: "w-2/5",
          progressColor: "bg-orange-500",
        };
      case "due":
        return {
          color: "text-orange-600",
          bg: "bg-orange-50 border border-orange-400",
          label: "Due",
          progressWidth: "w-3/5",
          progressColor: "bg-orange-500",
        };
      case "overdue":
        return {
          color: "text-orange-600",
          bg: "bg-orange-50 border border-orange-400",
          label: "Overdue",
          progressWidth: "w-4/5",
          progressColor: "bg-orange-500",
        };
      case "paid":
        return {
          color: "text-green-600",
          bg: "bg-green-50 border border-green-400",
          label: "Paid",
          progressWidth: "w-full", // 100% pour paid
          progressColor: "bg-green-500",
        };
      default:
        return {
          color: "text-gray-600",
          bg: "bg-gray-100 border border-gray-300",
          label: "Unknown",
          progressWidth: "w-0", // 0% pour unknown
          progressColor: "bg-gray-300",
        };
    }
  };

  const { color, bg, label, progressWidth, progressColor } =
    getStatusStyles(status);

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
      <div className="progress-bar w-full mt-3 h-1.5 rounded-full bg-gray-200 overflow-hidden relative">
        <div
          className={`h-full ${progressColor} ${progressWidth} transition-all duration-500 ease-in-out`}
        ></div>
      </div>
    </div>
  );
};

export default InvoiceStatus;
