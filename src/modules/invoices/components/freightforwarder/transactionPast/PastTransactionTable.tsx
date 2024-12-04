import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { PastTransaction } from "../../../../../types/PastTransaction.ts";
import { MoreVert } from "@mui/icons-material";

// Définition des props attendues par PastTransactionTable
interface Props {
  transactions: PastTransaction[];
  onViewClick: (id: number) => void;
  onDownloadClick: (id: number) => void;
}

const PastTransactionTable: React.FC<Props> = ({
  transactions,
  onViewClick,
  onDownloadClick,
}) => {
  // Gérer le menu pour chaque ligne (View, Download)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTransaction, setSelectedTransaction] = React.useState<
    number | null
  >(null);

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTransaction(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTransaction(null);
  };

  // Fonction qui appelle la vue de la transaction
  const handleViewClick = () => {
    if (selectedTransaction !== null) {
      onViewClick(selectedTransaction); // Appel de la fonction passée en prop
    }
    handleMenuClose();
  };

  // Fonction qui appelle le téléchargement de la transaction
  const handleDownloadClick = () => {
    if (selectedTransaction !== null) {
      onDownloadClick(selectedTransaction); // Appel de la fonction passée en prop
    }
    handleMenuClose();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Carrier Name</TableCell>
            <TableCell align="right">Raw</TableCell>
            <TableCell align="right">Net</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Reason Code</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.carrierName}</TableCell>
              <TableCell align="right">{transaction.raw}</TableCell>
              <TableCell align="right">{transaction.net}</TableCell>
              <TableCell align="right">{transaction.invoiceDate}</TableCell>
              <TableCell align="right">{transaction.reasonCode}</TableCell>
              <TableCell>
                <IconButton
                  onClick={(event) => handleMenuClick(event, transaction.id)}
                >
                  <MoreVert />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleViewClick}>View</MenuItem>
                  <MenuItem onClick={handleDownloadClick}>Download</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PastTransactionTable;
