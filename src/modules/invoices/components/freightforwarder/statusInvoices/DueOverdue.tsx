import { useNavigate } from "react-router-dom";
import { Invoice } from "../../../../../types/InvoiceTypes";
import transactionData from "@mokes/transaction.json";
import InvoiceTable from "@modules/invoices/components/freightforwarder/statusInvoices/InvoiceTable";

const DueOverdue = () => {
  const invoices: Invoice[] = transactionData.invoices.filter(
    (invoice) => invoice.status === "due" || invoice.status === "overdue"
  );
  const navigate = useNavigate();

  const viewInvoiceDetails = (id: number) => {
    navigate(`${id}`);
  };

  const reportInvoice = (id: number) => {
    alert(`Invoice ${id} reported.`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Due and Overdue</h2>
      <InvoiceTable
        invoices={invoices}
        onViewDetails={viewInvoiceDetails}
        onReport={reportInvoice}
        showDaysColumn={true}
      />
    </div>
  );
};

export default DueOverdue;
