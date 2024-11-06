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
import transactionData from "../../../mocks/transactions.json";

interface Transaction {
  id: number;
  carrierName: string;
  taxID: string;
  invoiceDate: string;
  address: string;
  country: string;
  raw: number;
  net: number;
  reasonCode: number;
}

const TransactionFileList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);

  const theme = useTheme();
  const navigate = useNavigate();

  // Load data from the JSON file on component mount
  useEffect(() => {
    setTransactions(transactionData);
  }, []);

  // Open the menu for a transaction
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedTransaction(id);
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTransaction(null);
  };

  // Handle the transaction view
  const handleViewClick = () => {
    if (selectedTransaction !== null) {
      navigate(`/invoice/${selectedTransaction}`);
    }
    handleMenuClose();
  };

  return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          List of Current Transactions
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="Transactions table">
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
                <TableCell>Carrier Name</TableCell>
                <TableCell>Tax ID</TableCell>
                <TableCell>Invoice Date</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Country</TableCell>
                <TableCell align="right">Raw</TableCell>
                <TableCell align="right">Net</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell component="th" scope="row">
                      {transaction.id}
                    </TableCell>
                    <TableCell>{transaction.carrierName}</TableCell>
                    <TableCell>{transaction.taxID}</TableCell>
                    <TableCell>{transaction.invoiceDate}</TableCell>
                    <TableCell>{transaction.address}</TableCell>
                    <TableCell>{transaction.country}</TableCell>
                    <TableCell align="right">{transaction.raw}</TableCell>
                    <TableCell align="right">{transaction.net}</TableCell>
                    <TableCell align="right">
                      {/* More button with dropdown menu */}
                      <IconButton
                          aria-label="more"
                          onClick={(event) => handleMenuOpen(event, transaction.id)}
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
        </Menu>
      </Box>
  );
};

export default TransactionFileList;
