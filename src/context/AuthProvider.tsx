// AuthProvider.tsx
import { useState, useEffect, ReactNode } from "react";
import { AuthContext} from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<string | null>(() => {
    const storedUser = localStorage.getItem("user")||null;
    return storedUser 
  });

  // Optional: keep localStorage in sync
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("user", authUser);
    } else {
      localStorage.removeItem("user");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
