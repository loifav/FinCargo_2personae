import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface Props {
    filterStatus: string;
    sortOrder: string;
    onFilterChange: (status: string) => void;
    onSortChange: (order: string) => void;
}

const PastTransactionFilters: React.FC<Props> = ({
                                                     sortOrder,
                                                     onSortChange,
                                                 }) => {
    return (
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
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
