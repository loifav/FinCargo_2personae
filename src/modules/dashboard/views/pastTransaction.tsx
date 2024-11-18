import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PastTransactionFileList from "@modules/dashboard/components/PastTransactionFileList.tsx";
import FilterButtons from "../components/filterButtons";

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

            {/* Composant de filtre */}
            <FilterButtons onFilterChange={handleFilterChange} />

            {/* Liste des transactions filtrées */}
            <PastTransactionFileList filterStatus={filterStatus} />
        </Box>
    );
};

export default PastTransaction;
