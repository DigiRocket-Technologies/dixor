import DarkClass from "../classes/DarkClass";
import FooterV1 from "../footer/FooterV1";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AdministatorEditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        if (id) fetchUser();
    }, [id]);

    const fetchUser = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/getUserById/${id}`);
            const data = await res.json();

            if (!data.success) throw new Error(data.message);

            setFirstName(data.user.firstName);
            setLastName(data.user.lastName);
            setGender(data.user.gender);
            setEmail(data.user.email);
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    };

    const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user = {
                firstName, lastName, gender, email
            }
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/updateUser/${id}`, { method: "PUT", headers: {'Content-Type':'application/json'}, body:JSON.stringify(user)});
            const data = await res.json();

            if (!data.success) throw new Error(data.message);
            alert("User Updated Successfully");
            navigate('/admin/users');
        } catch(err) {

        }
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "93vh", marginTop: "20px", marginBottom: "50px" }}>
                <form onSubmit={updateUser} style={{ width: "100%", maxWidth: "700px", backgroundColor: "#2a2d32" }} className="p-4 rounded shadow d-flex justify-content-center flex-column">
                    <h3 className="text-center mb-4">Edit User</h3>
                    {/* <div className="alert alert-danger text-center py-2">Something Went Wrong</div> */}
                    <div className="form-group mb-3 text-start">
                        <label>First Name</label>
                        <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control form-control-administator" placeholder="First Name" required />
                    </div>
                    <div className="form-group mb-4 text-start">
                        <label>Last Name</label>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control form-control-administator" placeholder="Last Name" required />
                    </div>
                    <div className="form-group mb-4 text-start">
                        <label>Gender</label>
                        <input onChange={(e) => setGender(e.target.value)} value={gender} type="text" className="form-control form-control-administator" placeholder="Gender" required />
                    </div>
                    <div className="form-group mb-4 text-start">
                        <label>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control form-control-administator" placeholder="Email" required />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block" style={{ backgroundColor: "#275df5", width: "40%" }}>Submit</button>
                </form>
            </div>
            <FooterV1 />
            <DarkClass />
        </>
    );
}

export default AdministatorEditUser;
