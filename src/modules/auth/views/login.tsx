import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { authorize } from "@modules/api/requests/authorize";
import { useAuth } from "@contexts/AuthContext";
import logo from "@assets/logo_fincargo_white.svg";

const Login: React.FC = () => {
  // const navigate = useNavigate();
  const { login } = useAuth();

  // State pour gérer les champs de formulaire et les erreurs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { access_token } = await authorize({ email, password });

      // Utilisez le login du contexte pour gérer le token
      login(access_token);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
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
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
