import { useEffect, useState, useRef } from "react";
import "../../assets/css/administator.css";
import "../../assets/css/blogAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  createdBy: string;
  createdAt?: string;
  updatedAt?: string;
}

interface UserDataType {
  noOfPage: number;
  currentPage: number;
  users: User[];
}

const AdministatorUserContent = () => {
  const [data, setData] = useState<UserDataType | null>(null);
  const [pageNo, setPageNo] = useState(1);
  const [searchData, setSearchData] = useState<User[]>([]);
  // const [author, setAuthor] = useState("");
  // const [dropdownValue, setDropdownValue] = useState("Name");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const userArray = useRef<User[]>([]);
  const navigate = useNavigate();
  const { authUser } = useAuthContext();

  useEffect(() => {
    console.log(loading);
    // const userType = localStorage.getItem("adminData");
    // if (userType) {
    //   const parsedUser = JSON.parse(userType);
    //   console.log(parsedUser);
    //   setAuthor(parsedUser.author || "");
    // } else {
    //   setAuthor("");
    // }
    const getAllUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/getAllUser/${pageNo}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authUser}`,
            },
          }
        );

        const items = await response.json();
        console.log("Fetched Users:", items);
        if (!items.success) throw new Error(items.message);

        setData({
          users: items.users,
          noOfPage: items.noOfPage,
          currentPage: items.currentPage,
        });
        setSearchData(items.users);
        userArray.current = items.users;
      } catch (err: any) {
        console.log(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, [authUser, pageNo]);

  const filteredUsers = searchData?.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });

  const deleteUser = async (id: string) => {
    const opinion = confirm("Do you want to delete this user?");
    if (!opinion) return;

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/deleteUser/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser}`,
          },
        }
      );

      const result = await response.json();
      if (!result.success) throw new Error(result.message);

      alert("User deleted successfully");

      // setData((prev) => ({
      //   users: prev?.users?.filter((u) => u._id !== id) || [],
      // }));
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderRow = (val: User, idx: number) => (
    <tr key={val._id}>
      <td className="blogTD">{idx + 101}</td>
      <td className="blogHeadingHai blogTD">{val.firstName} {val.lastName}</td>
      <td className="blogTD">{val.email}</td>
      <td className="blogTD">{val.gender}</td>
      <td className="blogTD">{val.createdBy}</td>
      <td className="blogTD">
          <i onClick={() => navigate(`/admin/editUser/${val._id}`)} style={{ color: "green", marginRight: "8px", cursor: "pointer" }} className="fas fa-edit"></i>
          <i onClick={() => deleteUser(val._id)} style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt"></i>
        </td>
    </tr>
  );

  return (
    <div className="container-fluid">
      <div className="container" style={{ paddingTop: "120px", marginBottom: "20px" }}>
        <div className="blogTopContainer">
          <Link to="/admin/addUser">
              <button type="button" className="mb-3 btn btn-primary addPostButton" style={{ height: "60px" }}>Add User</button>
            </Link>
          <div className="blogTopContainerRightChild">
            {/* <div className="dropdown mb-3">
              <button className="btn dropdown-toggle blog-dropdown-btn text-white" type="button" id="dropdownMenuButtonblog" data-bs-toggle="dropdown" aria-expanded="false">{dropdownValue}</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonblog">
                {["Name", "Email", "Gender"].map((val) => (
                  <li key={val}>
                    <button className="dropdown-item text-primary" onClick={() => setDropdownValue(val)}>{val}</button>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="search-bar" style={{ display: "flex", height: "50px" }}>
              <input type="text" style={{ fontSize: "20px" }} className="search-input form-control" placeholder="Search Users" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="contentContainer d-flex justify-content-between">
          <div className="sideContainer">
            <Link to="/admin/blogs">
              <div className="leftContent">
                <p style={{ color: "black" }} className="leftContentBar">Blogs</p>
              </div>
            </Link>

            <div className="leftContent" style={{ backgroundColor: "#275df5" }}>
              <p style={{ color: "white", backgroundColor: "#275df5" }} className="leftContentBar">Users</p>
            </div>
          </div>

          <div className="rightContainer">
            <table className="table table-bordered rounded table-striped bg-dark">
              <thead>
                <tr style={{ border: "1px solid grey" }}>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>ID</th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Name</th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Email</th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Gender</th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Created By</th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {searchTerm === ""
                  ? data?.users?.length
                    ? data.users.map(renderRow)
                    : (
                      <tr>
                        <td colSpan={5} style={{ color: "#ff0000ff" }}>No users found.</td>
                      </tr>
                    )
                  : filteredUsers?.length
                    ? filteredUsers.map(renderRow)
                    : (
                      <tr>
                        <td colSpan={5} style={{ color: "#ff0000ff" }}>No matching users found.</td>
                      </tr>
                    )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center pagination-container">
          <p style={{ textAlign: "center" }}>
            <span className="pageNumberDetail1" style={{ color: "#fff", margin: "0 10px" }}>Page 1 of 1</span>
          </p>
        </div>
        {searchTerm === "" && (
          <div className="d-flex justify-content-center align-items-center mb-3 pagination-container">
            <button
              disabled={pageNo <= 1}
              onClick={() => setPageNo(pageNo - 1)}
              className="btn btn-secondary me-2 text-dark blog-prev-btn blogPreviousButton"
            >
              Previous
            </button>

            <span style={{ color: "#fff", margin: "0 10px" }}>
              Page {data?.currentPage || 1} of {data?.noOfPage || 1}
            </span>


            <button
              disabled={pageNo >= (data?.noOfPage || 1)}
              onClick={() => setPageNo(pageNo + 1)}
              className="btn btn-primary blog-next-btn blogNextButton"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdministatorUserContent;
