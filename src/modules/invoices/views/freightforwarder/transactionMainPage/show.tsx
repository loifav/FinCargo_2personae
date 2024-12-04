import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Typography variant="h4" component="h1">
        Transaction Detail - {id}
      </Typography>
    </div>
  );
};

export default TransactionDetail;
