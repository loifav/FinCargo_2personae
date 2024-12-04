// DueNOverdueList.tsx
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
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useTheme } from "@mui/material/styles";
import transactionData from "../../../mocks/transaction.json";

interface Transaction {
  id: number;
  invoice_amount: number;
  document_download_link: string;
  status: string;
  invoice_date: string;
}

const DueNOverdueList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const theme = useTheme();

  useEffect(() => {
    // Extraire uniquement les factures "pending" et "overdue"
    const filteredTransactions = transactionData.invoices.filter(
      (invoice: any) =>
        invoice.status === "pending" || invoice.status === "overdue"
    );
    setTransactions(filteredTransactions);
  }, []);

  // Fonction utilitaire pour calculer les jours restants pour le paiement
  const calculateDaysRemaining = (invoiceDate: string): number => {
    const currentDate = new Date();
    const dueDate = new Date(invoiceDate);
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Due and Overdue Payments
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
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Days Remaining</TableCell>
              <TableCell align="right">Invoice PDF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell component="th" scope="row">
                  {transaction.id}
                </TableCell>
                <TableCell align="right">
                  {transaction.invoice_amount.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {calculateDaysRemaining(transaction.invoice_date)}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    href={transaction.document_download_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PictureAsPdfIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DueNOverdueList;
