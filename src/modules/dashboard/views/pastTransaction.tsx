import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import TransactionFileList from "@modules/dashboard/components/TransactionFileList.tsx";

const PastTransaction: React.FC = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: 500,
                }}
            >
                Transactions précédentes
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {/* Liste des transactions */}
            <TransactionFileList />
        </Box>
    );
};

export default PastTransaction;
