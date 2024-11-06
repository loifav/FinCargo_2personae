import React from "react";
import { Typography } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1">
        This is the content for the Settings page.
      </Typography>
    </div>
  );
};

export default Settings;
