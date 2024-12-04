// src/components/CreditProgressBar.tsx

import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

interface CreditProgressBarProps {
  maxCredit: number;
  usedCredit: number;
}

const CreditProgressBar: React.FC<CreditProgressBarProps> = ({
  maxCredit,
  usedCredit,
}) => {
  const progress = (usedCredit / maxCredit) * 100;

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Credit used: {usedCredit} / {maxCredit}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 20,
          borderRadius: 5,
          backgroundColor: "#5885af",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#223c60",
          },
        }}
      />

      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
        {Math.round(progress)}% used
      </Typography>
    </Box>
  );
};

export { CreditProgressBar };
