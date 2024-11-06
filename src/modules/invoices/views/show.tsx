import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const InvoiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Typography variant="h4" component="h1">
        Invoice Detail - {id}
      </Typography>
    </div>
  );
};

export default InvoiceDetail;
