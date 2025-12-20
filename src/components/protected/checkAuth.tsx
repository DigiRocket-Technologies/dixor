import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const CheckAuth = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setAuthChecked(true);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/checkauth`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        if (data.success) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("auth_token");
        }
      } catch (err) {
        console.error("Auth verification failed:", err);
        localStorage.removeItem("auth_token");
      } finally {
        setAuthChecked(true);
      }
    };

    verifyAuth();
  }, []);

  if (!authChecked) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" />;
};

export default CheckAuth;
