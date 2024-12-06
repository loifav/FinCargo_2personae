import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import transactionData from "../../../../../mocks/transaction.json";
import InvoiceStatus from "./InvoiceStatus";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceActions from "./InvoiceActions";
import { Invoice } from "../../../../../types/InvoiceTypes";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TransactionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <div className="text-red-500">Invoice ID missing from URL</div>;
  }

  const invoiceId = parseInt(id, 10);

  if (isNaN(invoiceId)) {
    return <div className="text-red-500">Invalid invoice ID</div>;
  }

  const invoice: Invoice | undefined = transactionData.invoices.find(
    (invoice: Invoice) => invoice.id === invoiceId
  );

  if (!invoice) {
    return <div className="text-red-500">Invoice not found</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  const handleAccept = async () => {
    try {
      console.log("Invoice accepted");
    } catch (err) {
      console.error("Failed to accept transaction:", err);
    }
  };

  const handleReject = async () => {
    try {
      console.log("Invoice rejected");
    } catch (err) {
      console.error("Failed to reject transaction:", err);
    }
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-none lg:rounded-xl border-0 lg:border-2 dark:border-0 mt-20 border-blue-100 shadow-sm min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
      <div className="invoice-card bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex justify-start mb-4">
          <Button
            onClick={goBack}
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            className="flex items-center"
          >
            Back
          </Button>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-600 mt-8 mb-4">
          Transaction view
        </h1>

        <div className="flex justify-center">
          <InvoiceStatus status={invoice.status} />
        </div>

        <InvoiceDetails invoice={invoice} />

        <InvoiceActions
          invoice={invoice}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>
    </div>
  );
};

export default TransactionDetails;
