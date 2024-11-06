import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "@components/Sidebar";
import Headerbar from "@components/Headerbar";

interface FreightForwarderLayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const FreightForwarderLayout: React.FC<FreightForwarderLayoutProps> = ({
  children,
  darkMode,
  toggleDarkMode,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        darkMode={darkMode}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Headerbar
          handleDrawerToggle={handleDrawerToggle}
          isDarkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: darkMode ? "grey.900" : "#2196f3",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default FreightForwarderLayout;
