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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  IconButton,
  Menu,

} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom"; // Ajout de useNavigate pour la redirection
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

const TransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const transformedData = transactionData.map((transaction, index) => ({
      id: index + 1,
      carrierName: transaction["carrierName"],
      taxID: transaction["taxID"],
      invoiceDate: transaction["invoiceDate"],
      address: transaction.address,
      country: transaction.country,
      raw: transaction.raw,
      net: transaction.net,
      reasonCode: transaction["reasonCode"],
    }));

    setTransactions(transformedData);
    setFilteredTransactions(transformedData);
  }, []);

  // Filter transactions based on selected status
  const handleFilterChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setFilterStatus(value);

    let filtered;
    if (value === "payé") {
      filtered = transactions.filter((transaction) => transaction.reasonCode < 50);
    } else if (value === "refusée") {
      filtered = transactions.filter((transaction) => transaction.reasonCode >= 50 && transaction.reasonCode <= 150);
    } else if (value === "en attente") {
      filtered = transactions.filter((transaction) => transaction.reasonCode > 150);
    } else {
      filtered = transactions;
    }

    setFilteredTransactions(filtered);
  };

  // Sort transactions by date or amount
  const handleSortChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSortOrder(value);

    const sortedTransactions = [...filteredTransactions];
    if (value === "dateAsc") {
      sortedTransactions.sort((a, b) => new Date(a.invoiceDate).getTime() - new Date(b.invoiceDate).getTime());
    } else if (value === "dateDesc") {
      sortedTransactions.sort((a, b) => new Date(b.invoiceDate).getTime() - new Date(a.invoiceDate).getTime());
    } else if (value === "amountAsc") {
      sortedTransactions.sort((a, b) => a.raw - b.raw);
    } else if (value === "amountDesc") {
      sortedTransactions.sort((a, b) => b.raw - a.raw);
    }

    setFilteredTransactions(sortedTransactions);
  };

  // Open menu for a transaction
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedTransaction(id);
  };

  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTransaction(null);
  };

  // Handle the View action
  const handleViewClick = () => {
    if (selectedTransaction !== null) {
      navigate(`/settings/${selectedTransaction}`);
    }
    handleMenuClose();
  };

  // Handle Download action
  const handleDownloadClick = () => {
    if (selectedTransaction !== null) {
      const transaction = transactions.find((t) => t.id === selectedTransaction);
      if (transaction) {
        // Code pour télécharger le fichier ou générer un PDF, selon les besoins.
        console.log("Téléchargement de la transaction : ", transaction);
      }
    }
    handleMenuClose();
  };

  // Set color for Reason Code based on status
  const getReasonCodeColor = (reasonCode: number) => {
    if (reasonCode < 50) return "green";
    if (reasonCode >= 50 && reasonCode <= 150) return "red";
    return "gray";
  };

  return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          List of Past Transactions
        </Typography>

        {/* Filters and Sorters */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          {/* Status Filter */}
          <FormControl fullWidth variant="outlined">
            <InputLabel>Status</InputLabel>
            <Select
                label="Status"
                value={filterStatus}
                onChange={handleFilterChange}
                variant="outlined" // Ajout de l'attribut variant
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="payé">Payé</MenuItem>
              <MenuItem value="refusée">Refusée</MenuItem>
              <MenuItem value="en attente">En attente</MenuItem>
            </Select>
          </FormControl>

          {/* Sort By */}
          <FormControl fullWidth variant="outlined">
            <InputLabel>Sort By</InputLabel>
            <Select
                label="Sort By"
                value={sortOrder}
                onChange={handleSortChange}
                variant="outlined" // Ajout de l'attribut variant
            >
              <MenuItem value="Aucun">
                <em>Aucun</em>
              </MenuItem>
              <MenuItem value="dateAsc">Date ascendant</MenuItem>
              <MenuItem value="dateDesc">Date descendant</MenuItem>
              <MenuItem value="amountAsc">Montant ascendant</MenuItem>
              <MenuItem value="amountDesc">Montant descendant</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-label="Transactions table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Carrier Name</TableCell>
                <TableCell align="right">Raw</TableCell>
                <TableCell align="right">Net</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Reason Code</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell component="th" scope="row">
                      {transaction.id}
                    </TableCell>
                    <TableCell>{transaction.carrierName}</TableCell>
                    <TableCell align="right">{transaction.raw}</TableCell>
                    <TableCell align="right">{transaction.net}</TableCell>
                    <TableCell align="right">{transaction.invoiceDate}</TableCell>
                    <TableCell align="right" style={{ color: getReasonCodeColor(transaction.reasonCode) }}>
                      {transaction.reasonCode}
                    </TableCell>
                    <TableCell align="right">
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
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleViewClick}>View</MenuItem>
          <MenuItem onClick={handleDownloadClick}>Download</MenuItem>
        </Menu>
      </Box>
  );
};

export default TransactionList;
