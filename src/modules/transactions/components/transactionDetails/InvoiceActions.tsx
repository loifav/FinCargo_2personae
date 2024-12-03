import React from "react";
import { Invoice } from "../../../../types/InvoiceTypes";

type InvoiceActionsProps = {
  invoice: Invoice;
  onAccept: () => void;
  onReject: () => void;
};

const InvoiceActions: React.FC<InvoiceActionsProps> = ({
  invoice,
  onAccept,
  onReject,
}) => {
  return (
    <div className="actions flex justify-center space-x-4 mt-6">
      <button
        className={`accept py-2 px-6 rounded-lg ${
          invoice.status === "pending"
            ? "bg-green-500 text-white hover:bg-green-600 transition duration-300"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={invoice.status !== "pending"}
        onClick={onAccept}
      >
        Accept
      </button>

      <button
        className={`reject py-2 px-6 rounded-lg ${
          invoice.status === "pending"
            ? "bg-red-500 text-white hover:bg-red-600 transition duration-300"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={invoice.status !== "pending"}
        onClick={onReject}
      >
        Reject
      </button>
    </div>
  );
};

export default InvoiceActions;
