import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useAuth } from "@contexts/AuthContext";
import TransactionDetails from "../components/freightforwarder/transactionDetails/transactionDetail";

const InvoiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  if (user.role === "carrier") {
    return (
      <div>
        <Typography variant="h4" component="h1">
          Transaction Detail - {id}
        </Typography>
      </div>
    );
  }

  if (user.role === "freight_forwarder") {
    return <TransactionDetails />;
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-xl mt-20 border-2 border-blue-100 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Unauthorized
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        You do not have access to this page.
      </p>
    </div>
  );
};

export default InvoiceDetail;
