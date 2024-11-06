import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  CardContent,
  LinearProgress,
} from "@mui/material";

const InvoiceUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Function handle the file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      simulateFileUpload();
    }
  };

  // Function to simulate file upload with progress bar
  const simulateFileUpload = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);
  };

  const handleSave = () => {
    if (file) {
      console.log("Saving file:", file.name);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <CardContent
        sx={{
          width: 500,
          p: 3,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{
            pb: 5,
          }}
        >
          Upload File
        </Typography>

        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <input
          accept="application/pdf"
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          id="invoice-upload"
        />
        <label htmlFor="invoice-upload">
          <Button variant="contained" component="span" fullWidth sx={{ mt: 2 }}>
            Choose File
          </Button>
        </label>

        {file && (
          <>
            <Box sx={{ width: "100%", mt: 3 }}>
              <LinearProgress variant="determinate" value={uploadProgress} />
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              {uploadProgress === 100
                ? "Upload Complete"
                : `Uploading: ${uploadProgress}%`}
            </Typography>
          </>
        )}

        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSave}
          disabled={!file || uploadProgress < 100}
        >
          Save
        </Button>
      </CardContent>
    </Box>
  );
};

export default InvoiceUpload;
