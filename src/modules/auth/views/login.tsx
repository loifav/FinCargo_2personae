import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { authorize } from "@modules/api/requests/authorize";
import { useAuth } from "@contexts/AuthContext";
import logo from "@assets/logo_fincargo_blue.svg";

const Login: React.FC = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { access_token } = await authorize({ email, password });
      login(access_token);
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/background-login-fincargo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: {
              xs: 300,
              md: 400,
            },
            position: "absolute",
            top: "-200px",
          }}
        />

        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: {
              xs: 300,
              md: 400,
            },
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
            }}
          >
            Login
          </Typography>
          <Typography variant="body1" paragraph>
            Please log in to access your dashboard.
          </Typography>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                marginBottom: 2,
              }}
            >
              {error}
            </Typography>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <button
              className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-primary-bluelight dark:text-gray-50 text-gray-900 py-2 px-4 mt-4 rounded-3xl hover:bg-primary-bluelight dark:hover:bg-primary-bluedark hover:text-white transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
