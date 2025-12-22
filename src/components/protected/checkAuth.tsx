import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const CheckAuth = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setAuthChecked(true);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/login/verifyAuth`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setIsAuthenticated(true);
        else localStorage.removeItem("authToken");
      } catch (err) {
        console.error("Auth verification failed:", err);
        localStorage.removeItem("authToken");
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
