import { Box, Typography, Divider } from "@mui/material";
import InvoiceUploadButton from "../../invoices/components/InvoiceUploadButton";
import DueNOverdueList from "../../invoices/components/DueNOverdueList";
import InvoiceFileList from "../../invoices/components/InvoiceFileList";

const Invoices: React.FC = () => {
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
      <Divider />
      {/* Upload invoice */}
      {/*<InvoiceUploadButton />*/}
      {/* List of invoices */}
      <DueNOverdueList />
     
    </Box>
  );
};

export default Invoices;
