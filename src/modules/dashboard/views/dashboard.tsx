import React from "react";
import { Typography } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div className="border border-blue-100 p-5 h-full rounded-xl bg-gray-50 dark:bg-gray-700">
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
