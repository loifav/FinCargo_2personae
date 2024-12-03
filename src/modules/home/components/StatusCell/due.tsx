import React from "react";
import StatusCell from "@modules/home/components/StatusCell/statusCell";


const InvoicesDue: React.FC = () => (
  <StatusCell
    name="Invoices due"
    count={10}  // Utiliser `value` au lieu de `count`
    link="/due"
    fill="#223c60"
    value=""
  />
);

export default InvoicesDue;
