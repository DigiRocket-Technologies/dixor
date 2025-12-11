import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const CheckAuth = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        if (!token) {
          setIsAuthenticated(false);
          setAuthChecked(true);
          return;
        }

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/checkauth`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setIsAuthenticated(data.success);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setAuthChecked(true);
      }
    };
    verifyAuth();
  }, []);

  
  if (!authChecked) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default CheckAuth;





// import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";

// const CheckAuth = () => {
//   const [authChecked, setAuthChecked] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const verifyAuth = async () => {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkauth`, {
//           credentials: "include",
//         });
//         const data = await res.json();
//         setIsAuthenticated(data.success);
//       } catch {
//         setIsAuthenticated(false);
//       } finally {
//         setAuthChecked(true);
//       }
//     };
//     verifyAuth();
//   }, []);

  
//   if (!authChecked) return <div>Loading...</div>;

//   return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
// };

// export default CheckAuth;



