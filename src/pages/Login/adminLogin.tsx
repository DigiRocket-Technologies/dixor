import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
}

const AdminLogin = () => {
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include", 
      });

      const data: AuthResponse = await response.json();

      if (data.success && data.token) {
        localStorage.setItem("auth_token", data.token);
        toast.success("Logged in successfully!");
        navigate("/admin/blogs");
      } else {
        toast.error(data.message || "Invalid password");
      }
    } catch (err) {
      toast.error("Something went wrong, please try again.");
      console.log("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        if (!token) return;

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

        if (data.success) navigate("/admin/blogs");
      } catch (error) {
        console.log("Auth check failed:", error);
      }
    };
    verifyAuth();
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Admin Login | DigiRocket Technologies</title>
        <link rel="canonical" href="https://digirocket.io/admin" />
        <meta name="description" content="Secure admin login page for Digirocket Technologies to access the dashboard and manage users, content, settings, and website operations efficiently."></meta>

      </Helmet>
      <LayoutV1>
        <Breadcrumb title="Login" breadCrumb="Login" LightMode={false} />

        <form
          onSubmit={handleSubmit}
          className="container"
          style={{ width: "60%", margin: "auto" }}
        >
          <div className="mb-4">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-outline-success fw-bold px-3 py-2"
              style={{ color: "black", borderColor: "white" }}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>

        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default AdminLogin;
