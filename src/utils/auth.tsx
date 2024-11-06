export type UserRole = "carrier" | "freight-forwarder";

interface User {
  role: UserRole;
  isAuthenticated: boolean;
}

export const getUser = (): User => {
  return {
    role: "carrier", // or 'freight-forwarder'
    isAuthenticated: true,
  };
};
