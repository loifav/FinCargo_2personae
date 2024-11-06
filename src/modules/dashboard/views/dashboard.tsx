import React from "react";
import { Typography } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Dashboard!
      </Typography>
      <Typography variant="body1">
        This is a random text for the dashboard page.
      </Typography>
    </div>
  );
};

export default Dashboard;
