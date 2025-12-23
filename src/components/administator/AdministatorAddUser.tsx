import FooterV1 from "../footer/FooterV1";
import DarkClass from "../classes/DarkClass";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const AdministatorAddUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userType = localStorage.getItem("adminData");
    if (userType) {
      const parsedUser = JSON.parse(userType);
      console.log(parsedUser);
      setCreatedBy(parsedUser.firstName || "");
    } else {
      setCreatedBy("");
    }
  }, [])

  console.log(createdBy);
  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const user = {
        firstName,
        lastName,
        email,
        gender,
        password,
        createdBy,
      };
      console.log("CreatedBy : " + createdBy)
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/addUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (data.success) {
        alert("User added successfully");
        setFirstName("");
        setLastName("");
        setGender("");
        setEmail("");
        setPassword("");
        navigate("/admin/users");
      } else {
        alert(data.message || "Failed to add user");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while adding user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "93vh", marginTop: "20px", marginBottom: "50px" }}>
        <form onSubmit={handleAddUser} style={{ width: "100%", maxWidth: "700px", backgroundColor: "#2a2d32" }} className="p-4 rounded shadow d-flex justify-content-center flex-column">
          <h3 className="text-center mb-4">Add User</h3>

          <div className="form-group mb-3 text-start">
            <label>First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control form-control-administator" placeholder="First Name" required />
          </div>

          <div className="form-group mb-4 text-start">
            <label>Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control form-control-administator" placeholder="Last Name" required />
          </div>

          <div className="form-group mb-4 text-start">
            <label>Gender</label>
            <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" className="form-control form-control-administator" placeholder="Gender" required />
          </div>

          <div className="form-group mb-4 text-start">
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-administator" placeholder="Email" required />
          </div>

          <div className="form-group mb-4 text-start">
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-administator" placeholder="Password" required />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary mx-auto d-block" style={{ backgroundColor: "#275df5", width: "40%" }}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <FooterV1 />
      <DarkClass />
    </>
  );
};

export default AdministatorAddUser;
