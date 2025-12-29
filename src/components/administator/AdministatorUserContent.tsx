import { useEffect, useState } from "react";
import "../../assets/css/administator.css";
import "../../assets/css/blogAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import AdministorLoading from "./AdministorLoading";

interface User { _id: string; firstName: string; lastName: string; email: string; gender: string; createdBy: string; createdAt?: string; updatedAt?: string; }
interface UserDataType { noOfPage: number; currentPage: number; users: User[]; }

const AdministatorUserContent = () => {
  const [data, setData] = useState<UserDataType | null>(null);
  const [pageNo, setPageNo] = useState(1);
  const [searchData, setSearchData] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const { authUser } = useAuthContext();

  useEffect(() => {
    const usertypes = localStorage.getItem("adminData");
    if (usertypes) {
      const parsedUser = JSON.parse(usertypes);
      console.log(parsedUser);
      setUserType(parsedUser.userType || "");
    } else {
      setUserType("");
    }
  }, [])
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/getAllUser/${pageNo}`, {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${authUser}` },
        });
        const items = await response.json();
        if (!response.ok || !items.success) throw new Error(items.message || "Failed to fetch users");
        setData({ users: items.users, noOfPage: items.noOfPage, currentPage: items.currentPage });
        setSearchData(items.users);
      } catch (err: any) {
        console.error(err);
        alert(err.message);
      } finally { setLoading(false); }
    };
    getAllUsers();
  }, [authUser, pageNo]);

  const filteredUsers = searchData?.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (user.firstName || "").toLowerCase().includes(term) || (user.lastName || "").toLowerCase().includes(term) || (user.email || "").toLowerCase().includes(term);
  });

  const deleteUser = async (id: string) => {
    const opinion = confirm("Do you want to delete this user?");
    if (!opinion) return;
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/deleteUser/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${authUser}` },
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Failed to delete user");
      alert("User deleted successfully");
      setData((prev) => (prev ? { ...prev, users: prev.users.filter((u) => u._id !== id) } : null));
      setSearchData((prev) => prev.filter((u) => u._id !== id));
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally { setLoading(false); }
  };

  const renderRow = (val: User, idx: number) => (
    <tr key={val._id}>
      <td className="blogTD">{idx + 101}</td>
      <td className="blogHeadingHai blogTD">{val.firstName} {val.lastName}</td>
      <td className="blogTD">{val.email}</td>
      <td className="blogTD">{val.gender}</td>
      <td className="blogTD">{val.createdBy}</td>
      {
        userType === "Employee" ? null : (<td className="blogTD">
        <i onClick={() => navigate(`/admin/editUser/${val._id}`)} style={{ color: "green", marginRight: "8px", cursor: "pointer" }} className="fas fa-edit"></i>
        <i onClick={() => deleteUser(val._id)} style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt"></i>
      </td>)
      }
    </tr>
  );

  return (
    <div className="container-fluid">
      <div className="container" style={{ paddingTop: "120px", marginBottom: "20px" }}>
        {
          userType === "Employee" ? (<div style={{marginBottom:"10px"}}>
          <div className="" style={{display: "flex"}}>
            <div style={{width: "75%"}}></div>
            <div className="search-bar" style={{ display: "flex", height: "50px", width: "300px" }}>
              <input type="text" style={{ fontSize: "20px" }} className="search-input form-control" placeholder="Search Users" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        </div>) : (<div className="blogTopContainer">
          <Link to="/admin/addUser"><button type="button" className="mb-3 btn btn-primary addPostButton" style={{ height: "60px" }}>Add User</button></Link>
          <div className="blogTopContainerRightChild">
            <div className="search-bar" style={{ display: "flex", height: "50px" }}>
              <input type="text" style={{ fontSize: "20px" }} className="search-input form-control" placeholder="Search Users" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        </div>)
        }

        <div className="contentContainer d-flex justify-content-between">
          <div className="sideContainer">
            <Link to="/admin/blogs"><div className="leftContent"><p style={{ color: "black" }} className="leftContentBar">Blogs</p></div></Link>
            <div className="leftContent" style={{ backgroundColor: "#275df5" }}><p style={{ color: "white", backgroundColor: "#275df5" }} className="leftContentBar">Users</p></div>
          </div>

          <div className="rightContainer">
            {loading ? <p style={{ color: "#fff", textAlign: "center" }}><AdministorLoading /></p> : (
              <table className="table table-bordered rounded table-striped bg-dark">
                <thead>
                  <tr style={{ border: "1px solid grey" }}>
                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>ID</th>
                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Name</th>
                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Email</th>
                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Gender</th>
                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Created By</th>
                    {
                      userType === "Employee" ? null : (<th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Action</th>)
                    }
                  </tr>
                </thead>
                <tbody>
                  {searchTerm === ""
                    ? data?.users?.length
                      ? data.users.map(renderRow)
                      : (<tr><td colSpan={6} style={{ color: "#ff0000ff" }}>No users found.</td></tr>)
                    : filteredUsers?.length
                      ? filteredUsers.map(renderRow)
                      : (<tr><td colSpan={6} style={{ color: "#ff0000ff" }}>No matching users found.</td></tr>)
                  }
                </tbody>
              </table>
            )}
          </div>
        </div>

        {searchTerm === "" && (
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3 pagination-container">
            <button disabled={pageNo <= 1} onClick={() => setPageNo(pageNo - 1)} className="btn btn-secondary me-2 text-dark blog-prev-btn blogPreviousButton">Previous</button>
            <span style={{ color: "#fff", margin: "0 10px" }}>Page {data?.currentPage || 1} of {data?.noOfPage || 1}</span>
            <button disabled={pageNo >= (data?.noOfPage || 1)} onClick={() => setPageNo(pageNo + 1)} className="btn btn-primary blog-next-btn blogNextButton">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdministatorUserContent;
