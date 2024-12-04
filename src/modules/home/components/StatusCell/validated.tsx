
import React from "react";
import StatusCell from "@modules/home/components/StatusCell/statusCell";

const InvoicesValidated: React.FC = () => (
  <StatusCell
    name="Invoices validated"
    count={3}
    link="/validated"
    fill="#223c60"
  />
);

export default InvoicesValidated;
