// contexts/ThemeContext.tsx
import React, { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          cLight: {
            1: "#FDFDFE",
            2: "#F6F9FF",
            3: "#ECF2FF",
            4: "#DEEAFF",
            5: "#CDDFFF",
            6: "#B9D1FF",
            7: "#A2BEFF",
            8: "#82A4FA",
            9: "#0E1E53",
            10: "#21356C",
            11: "#4361B0",
            12: "#1A2C62",
          },
          cDark: {
            1: "#0B111A",
            2: "#111924",
            3: "#17273E",
            4: "#1D3353",
            5: "#264065",
            6: "#314E77",
            7: "#3D5F8D",
            8: "#4972A9",
            9: "#223C60",
            10: "#304E77",
            11: "#98BDF0",
            12: "#D7E9FF",
          },
          primary: {
            main: darkMode ? "#3D5F8D" : "#223C60",
          },
          success: {
            main: "#4caf50",
          },
          error: {
            main: "#f44336",
          },
          secondary: {
            main: "#dc004e",
          },
          background: {
            default: darkMode ? "#303030" : "#fafafa",
          },
        },
        typography: {
          fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                color: "#fff",
                padding: "6px 10px",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: darkMode ? "#4972A9" : "#304E77",
                },
              },
              containedSuccess: {
                backgroundColor: "#4caf50",
                "&:hover": {
                  backgroundColor: "#43a047",
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
