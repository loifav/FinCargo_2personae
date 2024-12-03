import React from "react";
import { useParams } from "react-router-dom";
import transactionData from "../../../../mocks/transaction.json";
import InvoiceStatus from "../../components/transactionDetails/InvoiceStatus";
import InvoiceDetails from "../../components/transactionDetails/InvoiceDetails";
import InvoiceActions from "../../components/transactionDetails/InvoiceActions";
import { Invoice } from "../../../../types/InvoiceTypes";

const ViewTransactionDue: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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

  const handleAccept = () => {
    console.log("Facture acceptée");
  };

  const handleReject = () => {
    console.log("Facture rejetée");
  };

  return (
    <div className="transaction-page p-6 bg-gray-50 min-h-screen">
      <div className="invoice-card bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-black-600 mt-8 mb-4">
          Transaction view
        </h1>

        {/* Affichage du statut de la facture */}
        <div className="flex justify-center">
          <InvoiceStatus status={invoice.status} />
        </div>

        {/* Affichage des détails de la facture */}
        <InvoiceDetails invoice={invoice} />

        {/* Affichage des actions (acceptation/rejet) */}
        <InvoiceActions
          invoice={invoice}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>
    </div>
  );
};

export default ViewTransactionDue;
