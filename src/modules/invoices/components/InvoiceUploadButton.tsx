import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InvoiceUploadButton: React.FC = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/invoices/upload");
  };

  return (
    <Box sx={{ my: 6 }}>
      {" "}
      <Typography variant="h5" component="h2" gutterBottom>
        Download an invoice
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleUploadClick}>
        Go to Upload
      </Button>
    </Box>
  );
};

export default InvoiceUploadButton;
