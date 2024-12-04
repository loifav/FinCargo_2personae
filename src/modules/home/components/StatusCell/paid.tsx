
import React from "react";
import StatusCell from "@modules/home/components/StatusCell/statusCell";

const InvoicesPaid: React.FC = () => (
  <StatusCell
    name="Invoices paid"
    count={2}
    link="/paid"
    fill="#223c60"
  />
);

export default InvoicesPaid;
