import { useState } from "react";

const AdRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const addAdmin = async () => {
    const datahai = { firstName, lastName, email, password, gender };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/addAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(datahai),
      });

      const items = await res.json();
      console.log(items);

      if (res.ok) {
        alert("Admin added successfully!");
      } else {
        alert(items.message || "Failed to add admin");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
      <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <input onChange={(e) => setGender(e.target.value)} type="text" placeholder="Gender" />
      <button onClick={addAdmin}>Submit</button>
    </div>
  );
};

export default AdRegister;
