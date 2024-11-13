import { Box, Typography, Divider } from "@mui/material";

//import InvoiceUploadButton from "../components/InvoiceUploadButton";
import TransactionFileList from "@modules/invoices/components/TransactionFileList.tsx";

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

export default Invoices;
