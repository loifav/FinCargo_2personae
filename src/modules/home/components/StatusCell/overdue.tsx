
import React from "react";
import StatusCell from "@modules/home/components/StatusCell/statusCell";

const InvoicesOverdue: React.FC = () => (
  <StatusCell
    name="Invoices Overdue"
    count={2}
    link="/overdue"
    fill="#223c60"
  />
);

export default InvoicesOverdue;
