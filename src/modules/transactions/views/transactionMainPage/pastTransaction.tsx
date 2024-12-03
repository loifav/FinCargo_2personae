import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PastTransactionFileList from "@modules/transactions/components/transactionPast/PastTransactionFileList.tsx";
import FilterButtons from "../../components/TransactionMain/filterButtons.tsx";
import { useLocation } from "react-router-dom";

const PastTransaction: React.FC = () => {
    // Récupération de l'état transmis depuis une autre vue
    const location = useLocation();
    const initialFilter = location.state?.filterStatus || ""; // Récupère le filtre transmis ou une valeur par défaut

    // État local pour gérer le statut du filtre
    const [filterStatus, setFilterStatus] = useState<string>(initialFilter);

    // Gestion du changement de filtre
    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
    };

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Gestion des Transactions
            </Typography>

            {/* Composant de filtre */}
            <FilterButtons onFilterChange={handleFilterChange} />

            {/* Liste des transactions filtrées */}
            <PastTransactionFileList filterStatus={filterStatus} />
        </Box>
    );
};

export default PastTransaction;
