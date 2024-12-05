import React from "react";
import { FaDownload } from "react-icons/fa";
import { Invoice } from "../../../../../types/InvoiceTypes";

type InvoiceDetailsProps = {
  invoice: Invoice;
};

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoice }) => (
  <div className="invoice-details space-y-4 text-center">
    <p>
      <strong>Invoice Amount:</strong> ${invoice.invoice_amount}
    </p>
    <p>
      <strong>Carrier Name:</strong> {invoice.carrier_name}
    </p>
    <p>
      <strong>Tax ID:</strong> {invoice.tax_id}
    </p>
    <p>
      <strong>Invoice Date:</strong> {invoice.invoice_date}
    </p>
    <p>
      <strong>Address:</strong> {invoice.address ?? "N/A"}
    </p>
    <p>
      <strong>Country:</strong> {invoice.country ?? "N/A"}
    </p>

    <a
      href={invoice.document_download_link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-2 py-3 px-6 w-64 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 mx-auto"
    >
      <FaDownload />
      <span className="text-sm">Download The Document</span>
    </a>
  </div>
);

export default InvoiceDetails;
