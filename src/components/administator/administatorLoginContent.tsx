import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdministratorLoginContent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) return;

            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/login/verifyAuth`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await res.json();
                if (data.success) {
                    navigate("/admin/blogs"); // redirect automatically
                } else {
                    localStorage.removeItem("authToken");
                }
            } catch (err) {
                console.error("Token verification failed:", err);
                localStorage.removeItem("authToken");
            }
        };
        checkToken();
    }, [navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const Data = { email, password };
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/login/login`, { 
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(Data) 
            });
            const items = await response.json();
            if (items.success) {
                localStorage.setItem("adminData", JSON.stringify(items.user));
                localStorage.setItem("authToken", items.token);
                navigate("/admin/blogs"); 
            } else {
                setError(items.message || "Invalid Credentials");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "93vh" }}>
            <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: "500px", backgroundColor: "#2a2d32" }} className="p-4 rounded shadow d-flex justify-content-center flex-column">
                <h3 className="text-center mb-4">Admin Login</h3>
                {error && <div className="alert alert-danger text-center py-2">{error}</div>}
                <div className="form-group mb-3 text-start">
                    <label>Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control form-control-administator" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-4 text-start">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control form-control-administator" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary mx-auto d-block" style={{ backgroundColor: "#275df5", width: "40%" }}>Submit</button>
            </form>
        </div>
    );
};

export default AdministratorLoginContent;
