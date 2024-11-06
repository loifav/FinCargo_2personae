import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  UploadFile as UploadFileIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

interface HeaderProps {
  handleDrawerToggle: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Headerbar: React.FC<HeaderProps> = ({
  handleDrawerToggle,
  isDarkMode,
  toggleDarkMode,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUploadClick = () => {
    handleMenuClose();
    navigate("/invoices/upload");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "none",
        boxShadow: "none",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.cDark[2]
            : theme.palette.cLight[1],
        marginLeft: { sm: 0, md: "240px" },
        width: { sm: "100%", md: "calc(100% - 240px)" },
      }}
    >
      <Toolbar>
        {/* Icone mobile */}
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            color: isDarkMode
              ? theme.palette.cLight[1]
              : theme.palette.cDark[6],
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            mr: 2,
            flexGrow: 1,
            maxWidth: "300px",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.cDark[3]
                : theme.palette.cLight[2],
            borderRadius: "6px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              borderRadius: "6px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}></Typography>

        <IconButton
          aria-label="add"
          edge="end"
          color="inherit"
          onClick={handleMenuOpen}
          sx={{
            mx: 0.8,
            color: isDarkMode
              ? theme.palette.cLight[1]
              : theme.palette.cDark[6],
          }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: { width: 300 },
          }}
        >
          <MenuList>
            <MenuItem onClick={handleUploadClick}>
              <ListItemIcon>
                <UploadFileIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Upload Invoice</ListItemText>
            </MenuItem>
          </MenuList>
        </Menu>

        <IconButton
          color="inherit"
          sx={{
            mx: 0.8,
            color: isDarkMode
              ? theme.palette.cLight[1]
              : theme.palette.cDark[6],
          }}
        >
          <NotificationsIcon />
        </IconButton>

        {/* Bouton dark/light mode */}
        <IconButton
          color="inherit"
          onClick={toggleDarkMode}
          sx={{
            mx: 0.8,
            color: isDarkMode
              ? theme.palette.cLight[1]
              : theme.palette.cDark[6],
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Headerbar;
