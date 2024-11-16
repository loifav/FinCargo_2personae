import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PastTransactionFileList from "@modules/dashboard/components/PastTransactionFileList.tsx";

const PastTransaction: React.FC = () => {
    const [filterStatus, setFilterStatus] = useState<string>("");

    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
    };

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Gestion des Transactions
            </Typography>

            {/* Boutons pour filtrer les transactions */}
            <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleFilterChange("payé")}
                >
                    Afficher Payées
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleFilterChange("refusée")}
                >
                    Afficher Refusées
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => handleFilterChange("en attente")}
                >
                    Afficher En Attente
                </Button>
                <Button variant="outlined" onClick={() => handleFilterChange("")}>
                    Réinitialiser
                </Button>
            </Box>

            {/* Liste des transactions filtrées */}
            <PastTransactionFileList filterStatus={filterStatus} />
        </Box>
    );
};

export default PastTransaction;
