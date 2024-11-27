import React, { createContext, useContext, useState, useEffect } from "react";
import cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface User {
  role: "carrier" | "freight-forwarder" | null;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    role: null,
    isAuthenticated: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("access_token");
    if (token) {
      updateUser(token);
    }
  }, []);

  const updateUser = (token: string) => {
    try {
      const decoded: { role: "carrier" | "freight-forwarder" } =
        jwtDecode(token);
      setUser({ role: decoded.role, isAuthenticated: true });
    } catch {
      setUser({ role: null, isAuthenticated: false });
    }
  };

  const login = (token: string) => {
    cookies.set("access_token", token, { expires: 1 });
    updateUser(token);
    navigate("/");
  };

  const logout = () => {
    cookies.remove("access_token");
    setUser({ role: null, isAuthenticated: false });
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
