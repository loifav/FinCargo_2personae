import React from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Box,
  ListItemButton,
  Button,
} from "@mui/material";
import {
  SpaceDashboard as SpaceDashboardIcon,
  Receipt as InvoicesIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logoLight from "@assets/logo_fincargo_blue.svg";
import logoDark from "@assets/logo_fincargo_white.svg";

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen,
  handleDrawerToggle,
  darkMode,
}) => {
  const theme = useTheme();

  return (
    <>
      {/* Drawer for desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.cDark[1]
                : theme.palette.cLight[2],
          },
        }}
      >
        <SidebarContent darkMode={darkMode} />
      </Drawer>

      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundImage: "none",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.cDark[2]
                : theme.palette.cLight[1],
          },
        }}
      >
        <SidebarContent darkMode={darkMode} />
      </Drawer>
    </>
  );
};

const SidebarContent: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            boxSizing: "border-box",
          }}
        >
          <Link to="/" style={{ display: "block" }}>
            <img
              src={darkMode ? logoDark : logoLight}
              alt="Logo FinCargo"
              style={{ maxHeight: "100%", maxWidth: "100%", cursor: "pointer" }}
            />
          </Link>
        </Box>

        <List>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              my: 2,
              backgroundColor: isActive("/")
                ? theme.palette.mode === "dark"
                  ? theme.palette.cDark[2]
                  : theme.palette.cLight[4]
                : "inherit",
              color: isActive("/")
                ? theme.palette.mode === "dark"
                  ? theme.palette.cDark[11]
                  : theme.palette.cLight[12]
                : theme.palette.mode === "dark"
                ? theme.palette.cDark[12]
                : theme.palette.cLight[10],
              "&:hover": {
                backgroundColor: isActive("/")
                  ? theme.palette.mode === "dark"
                    ? theme.palette.cDark[3]
                    : theme.palette.cLight[5]
                  : theme.palette.mode === "dark"
                  ? theme.palette.cDark[2]
                  : theme.palette.cLight[4],
              },
            }}
          >
            <ListItemIcon>
              <SpaceDashboardIcon
                sx={{
                  color: isActive("/")
                    ? theme.palette.mode === "dark"
                      ? theme.palette.cDark[11]
                      : theme.palette.cLight[12]
                    : theme.palette.mode === "dark"
                    ? theme.palette.cDark[12]
                    : theme.palette.cLight[10],
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

        

          <ListItemButton
            component={Link}
            to="/analytics"
            sx={{
              my: 2,
              backgroundColor: isActive("/analytics")
                ? theme.palette.mode === "dark"
                  ? theme.palette.cDark[2]
                  : theme.palette.cLight[4]
                : "inherit",
              color: isActive("/analytics")
                ? theme.palette.mode === "dark"
                  ? theme.palette.cDark[11]
                  : theme.palette.cLight[12]
                : theme.palette.mode === "dark"
                ? theme.palette.cDark[12]
                : theme.palette.cLight[10],
              "&:hover": {
                backgroundColor: isActive("/analytics")
                  ? theme.palette.mode === "dark"
                    ? theme.palette.cDark[3]
                    : theme.palette.cLight[5]
                  : theme.palette.mode === "dark"
                  ? theme.palette.cDark[2]
                  : theme.palette.cLight[4],
              },
            }}
          >
            <ListItemIcon>
              <InvoicesIcon
                sx={{
                  color: isActive("/analitycs")
                    ? theme.palette.mode === "dark"
                      ? theme.palette.cDark[11]
                      : theme.palette.cLight[12]
                    : theme.palette.mode === "dark"
                    ? theme.palette.cDark[12]
                    : theme.palette.cLight[10],
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Analitycs" />
          </ListItemButton>



            <ListItemButton
            component={Link}
            to="/settings"
            sx={{
              my: 2,
              backgroundColor: isActive("/settings")
                ? theme.palette.mode === "dark"
                  ? theme.palette.cDark[2]
                  : theme.palette.cLight[4]
                : "inherit",
              color: isActive("/settings")
                ? theme.palette.mode === "dark"
                  ? theme.palette.cDark[11]
                  : theme.palette.cLight[12]
                : theme.palette.mode === "dark"
                ? theme.palette.cDark[12]
                : theme.palette.cLight[10],
              "&:hover": {
                backgroundColor: isActive("/settings")
                  ? theme.palette.mode === "dark"
                    ? theme.palette.cDark[3]
                    : theme.palette.cLight[5]
                  : theme.palette.mode === "dark"
                  ? theme.palette.cDark[2]
                  : theme.palette.cLight[4],
              },
            }}
          >
            <ListItemIcon>
              <SettingsIcon
                sx={{
                  color: isActive("/settings")
                    ? theme.palette.mode === "dark"
                      ? theme.palette.cDark[11]
                      : theme.palette.cLight[12]
                    : theme.palette.mode === "dark"
                    ? theme.palette.cDark[12]
                    : theme.palette.cLight[10],
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </div>

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.cDark[5]
                : theme.palette.cLight[9],
            color: "#fff",
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.cDark[6]
                  : theme.palette.cLight[10],
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
