import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";
import transactionData from "@mokes/transaction.json"; // Import des données JSON

const ToValidate: React.FC = () => {
    // Filtrer les factures avec le statut "pending"
    const pendingInvoices = transactionData.invoices.filter(
        (invoice) => invoice.status === "pending"
    );

    // Si aucune facture "pending" n'existe
    if (pendingInvoices.length === 0) {
        return <div>No pending invoices found.</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Transaction to validate</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{borderBottom: "2px solid #e0e0e0"}}>
                            <TableCell sx={{borderBottom: "none"}}>ID</TableCell>
                            <TableCell sx={{borderBottom: "none"}}>Carrier Name</TableCell>
                            <TableCell sx={{borderBottom: "none", textAlign: "right"}}>Amount</TableCell>
                            <TableCell sx={{borderBottom: "none", textAlign: "center"}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pendingInvoices.map((invoice) => (
                            <TableRow
                                key={invoice.id}
                                sx={{
                                    borderBottom: "1px solid #e0e0e0",
                                    "&:last-child": {borderBottom: "none"},
                                }}
                            >
                                <TableCell sx={{borderBottom: "none"}}>{invoice.id}</TableCell>
                                <TableCell sx={{borderBottom: "none"}}>{invoice.carrier_name}</TableCell>
                                <TableCell sx={{borderBottom: "none", textAlign: "right"}}>
                                    ${invoice.invoice_amount.toFixed(2)}
                                </TableCell>
                                <TableCell sx={{borderBottom: "none", textAlign: "center"}}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => console.log(`Accepted invoice ID: ${invoice.id}`)}
                                        style={{marginRight: "8px"}}
                                    >
                                        Validate
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => console.log(`Rejected invoice ID: ${invoice.id}`)}
                                    >
                                        Reject
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ToValidate;
