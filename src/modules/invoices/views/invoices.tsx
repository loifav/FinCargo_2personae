import { Box, Typography, Divider } from "@mui/material";
import InvoiceFileList from "../components/InvoiceFileList";
import InvoiceUploadButton from "../components/InvoiceUploadButton";

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
        Invoices
      </Typography>
      <Divider />
      {/* Upload invoice */}
      <InvoiceUploadButton />
      {/* List of invoices */}
      <InvoiceFileList />
    </Box>
  );
};

export default Invoices;
