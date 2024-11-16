import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PastTransaction } from "../../../types/PastTransaction";

interface Props {
    transactions: PastTransaction[];
    onView: (id: number) => void;
    onDownload: (id: number) => void;
}

const PastTransactionTable: React.FC<Props> = ({ transactions, onView, onDownload }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedTransaction, setSelectedTransaction] = React.useState<number | null>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setAnchorEl(event.currentTarget);
        setSelectedTransaction(id);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedTransaction(null);
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
                        <TableCell align="right">Actions</TableCell>
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
                            <TableCell align="right">
                                <IconButton
                                    onClick={(event) => handleMenuOpen(event, transaction.id)}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedTransaction === transaction.id}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={() => onView(transaction.id)}>View</MenuItem>
                                    <MenuItem onClick={() => onDownload(transaction.id)}>Download</MenuItem>
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
