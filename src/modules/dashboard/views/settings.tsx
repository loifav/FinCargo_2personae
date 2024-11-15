import React from "react";
import { Box, Typography, Divider } from "@mui/material";

import TransactionFileList from "@modules/dashboard/components/TransactionFileList.tsx";

const Settings: React.FC = () => {

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
            <Divider />
            {/* Upload invoice */}
            {/*<InvoiceUploadButton> */}
            {/* List of invoices */}
            <TransactionFileList />
        </Box>
    );
};

export default Settings;
