import { Box, Typography, Divider } from "@mui/material";
import DueNOverdueList from "../../../invoices/components/DueNOverdueList.tsx";
import FilterButtons from '../TransactionMain/filterButtons.tsx';
import React, { useState } from 'react';


const DueNOverdue: React.FC = () => {

  const [filter, setFilter] = useState<string>('all'); 

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };
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
        Invoices liste
      </Typography>
      <FilterButtons onFilterChange={handleFilterChange} />

  
      <Divider />
      {/* List of due and overdue */}
      <DueNOverdueList />
     
    </Box>
  );
};

export default DueNOverdue;
