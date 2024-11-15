import { Box, Typography, Divider } from "@mui/material";
import InvoiceUploadButton from "../components/InvoiceUploadButton";
import DueNOverdueList from "../components/DueNOverdueList";
import InvoiceFileList from "../components/InvoiceFileList";

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
      <InvoiceFileList/>
    </Box>
  );
};

export default Invoices;
