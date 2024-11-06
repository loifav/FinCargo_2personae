import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserRole, getUser } from "./auth";

interface UserContextType {
  role: UserRole;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const user = getUser();
  const [role] = useState<UserRole>(user.role);
  const [isAuthenticated] = useState<boolean>(user.isAuthenticated);

  return (
    <UserContext.Provider value={{ role, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
