// App.tsx
import React from "react";
import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "@contexts/AuthContext";

const App: React.FC = () => {
  const routing = useRoutes(routes);

  return (
    <AuthProvider>
      <CssBaseline />
      {routing}
    </AuthProvider>
  );
};

export default App;
