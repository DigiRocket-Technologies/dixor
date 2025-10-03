// AuthProvider.tsx
import { useState, useEffect, ReactNode } from "react";
import { AuthContext} from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}


const AuthContextProvider = ({ children }: AuthProviderProps) => {

  const [authUser, setAuthUser] = useState<string | null>(() => {
    const storedUser = localStorage.getItem("digirocket.io.auth_token")||null;
    return storedUser 
  });

  // Optional: keep localStorage in sync
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("digirocket.io.auth_token", authUser);
    } else {
      localStorage.removeItem("digirocket.io.auth_token");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
