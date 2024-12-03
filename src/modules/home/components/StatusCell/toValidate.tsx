
import React from "react";
import StatusCell from "@modules/home/components/StatusCell/statusCell";

const InvoicesToValidate: React.FC = () => (
  <StatusCell
    name="Invoices to validate"
    count={5}
    link="/validate"
    fill="#223c60"
  />
);

export default InvoicesToValidate;

