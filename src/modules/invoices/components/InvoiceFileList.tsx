import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import invoiceData from "../../../mocks/invoice.json";

interface Invoice {
  id: number;
  Raw: number;
  Net: number;
  Date: string;
}

const InvoiceFileList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedInvoice, setSelectedInvoice] = useState<number | null>(null);

  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setInvoices(invoiceData);
  }, []);

  // Open the menu for an invoice
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedInvoice(id);
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedInvoice(null);
  };

  // Handle the invoice view
  const handleViewClick = () => {
    if (selectedInvoice !== null) {
      navigate(`/invoices/${selectedInvoice}`);
    }
    handleMenuClose();
  };

  // Handle invoice deletion
  const handleDeleteClick = () => {
    console.log(`Delete invoice ${selectedInvoice}`);
    handleMenuClose();
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        List of current invoices
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Invoices table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.cDark[3]
                    : theme.palette.cLight[3],
              }}
            >
              <TableCell>ID</TableCell>
              <TableCell align="right">Raw</TableCell>
              <TableCell align="right">Net</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell component="th" scope="row">
                  {invoice.id}
                </TableCell>
                <TableCell align="right">{invoice.Raw}</TableCell>
                <TableCell align="right">{invoice.Net}</TableCell>
                <TableCell align="right">{invoice.Date}</TableCell>
                <TableCell align="right">
                  {/* Bouton More avec menu déroulant */}
                  <IconButton
                    aria-label="more"
                    onClick={(event) => handleMenuOpen(event, invoice.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleViewClick}>View</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default InvoiceFileList;
