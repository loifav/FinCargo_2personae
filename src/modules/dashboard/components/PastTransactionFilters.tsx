import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface Props {
    filterStatus: string;
    sortOrder: string;
    onFilterChange: (status: string) => void;
    onSortChange: (order: string) => void;
}

const PastTransactionFilters: React.FC<Props> = ({
                                                     filterStatus,
                                                     sortOrder,
                                                     onFilterChange,
                                                     onSortChange,
                                                 }) => {
    return (
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {/* Filter by status */}
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                    label="Status"
                    value={filterStatus}
                    onChange={(e) => onFilterChange(e.target.value)}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value="payé">Payé</MenuItem>
                    <MenuItem value="refusée">Refusée</MenuItem>
                    <MenuItem value="en attente">En attente</MenuItem>
                </Select>
            </FormControl>

            {/* Sort by criteria */}
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    label="Sort By"
                    value={sortOrder}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <MenuItem value="">
                        <em>Aucun</em>
                    </MenuItem>
                    <MenuItem value="dateAsc">Date ascendant</MenuItem>
                    <MenuItem value="dateDesc">Date descendant</MenuItem>
                    <MenuItem value="amountAsc">Montant ascendant</MenuItem>
                    <MenuItem value="amountDesc">Montant descendant</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default PastTransactionFilters;
