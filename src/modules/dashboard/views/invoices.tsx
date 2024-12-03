import { Box, Typography, Divider } from "@mui/material";
import InvoiceUploadButton from "../../invoices/components/InvoiceUploadButton";
import DueNOverdueList from "../../invoices/components/DueNOverdueList";
import FilterButtons from '../components/filterButtons'; 
import React, { useState } from 'react';


const Invoices: React.FC = () => {

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
      
      {/* Upload invoice */}
      {/*<InvoiceUploadButton />*/}
      {/* List of invoices */}
      <DueNOverdueList />
     
    </Box>
  );
};

export default Invoices;
