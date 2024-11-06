import React, { useState } from "react";
import { Box, CssBaseline, useTheme } from "@mui/material";
import Sidebar from "@components/Sidebar";
import Headerbar from "@components/Headerbar";

interface CarrierLayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const CarrierLayout: React.FC<CarrierLayoutProps> = ({
  children,
  darkMode,
  toggleDarkMode,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      {/* Sidebar */}
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
            paddingTop: "75px",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.cDark[2]
                : theme.palette.cLight[1],
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default CarrierLayout;
