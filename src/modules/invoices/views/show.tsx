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
};

export default InvoiceDetail;
