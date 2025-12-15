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
        let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/checkauth`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        let data = await res.json();
        if (!data.success) {
          const refreshRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/refresh`, {
            method: "POST",
            credentials: "include", 
          });
          const refreshData = await refreshRes.json();

          if (refreshData.success && refreshData.token) {
            localStorage.setItem("auth_token", refreshData.token);

            res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/checkauth`, {
              headers: { Authorization: `Bearer ${refreshData.token}` },
            });
            data = await res.json();
          }
        }

        if (data.success) setIsAuthenticated(true);
      } catch (err) {
        console.log("Auth verification failed:", err);
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
