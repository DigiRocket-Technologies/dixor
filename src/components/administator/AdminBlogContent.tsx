import { useEffect, useState, useRef } from "react";
import "../../assets/css/administator.css";
import "../../assets/css/blogAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

interface Blog {
  title: string;
  slug: string;
  h1: string;
  content: string;
  thumbnail: string;
  metaDescription: string;
  scripts: string;
  live: boolean;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

interface PostDataType {
  noOfPage: number;
  blogs: Blog[];
}

const AdminBlogContent = () => {
  const [data, setData] = useState<PostDataType | null>(null);
  const [searchData, setSearchData] = useState<Blog[]>([]);
  const [dropdownValue, setDropdownValue] = useState("Heading");
  const [pageNo, setPageNo] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const blogArray = useRef<Blog[]>([]);
  const navigate = useNavigate();
  const { authUser } = useAuthContext();

  useEffect(() => {
    console.log(loading);
    const getAllData = async () => {
      let ToggleValue = "h1";
      let sortNo = -1;

      try {
        setLoading(true);

        if (dropdownValue === "Heading") ToggleValue = "h1";
        else if (dropdownValue === "Date") ToggleValue = "updatedAt";
        else if (dropdownValue === "Published" || dropdownValue === "Draft") {
          ToggleValue = "live";
          if (dropdownValue === "Draft") sortNo = 1;
        }

        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/getallblogsadmin/${ToggleValue}/${pageNo}/${sortNo}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authUser}`,
            },
          }
        );

        const items = await response.json();
        blogArray.current = items.blogs;
        setData(items);
      } catch (err: any) {
        console.log(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllData();
  }, [dropdownValue, pageNo]);

  useEffect(() => {
    const getalldataforSearch = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/getallblogsadminSearch`
      );
      const items = await response.json();
      setSearchData(items.blogs);
    };
    getalldataforSearch();
  }, []);

  const deleteblogs = async (id: string) => {
    const opinion = confirm("Do you want to delete this blog?");
    if (!opinion) return;

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/deleteblog`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser}`,
          },
          body: JSON.stringify({ id }),
        }
      );

      const result = await response.json();
      if (!result?.success) throw new Error(result?.message);

      alert("Blog deleted successfully");

      setData((prev) => ({
        ...prev!,
        blogs: prev?.blogs?.filter((b) => b._id !== id) || [],
      }));
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = searchData?.filter((blog) => {
    const term = searchTerm.toLowerCase();
    return (
      blog.title.toLowerCase().includes(term) ||
      blog.h1.toLowerCase().includes(term)
    );
  });

  const changeVisibility = async (id: string, isLive: boolean) => {
    const opinion = confirm(
      `Do you want to ${isLive ? "hide" : "show"} the blog?`
    );
    if (!opinion) return;

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/altervisibility`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser}`,
          },
          body: JSON.stringify({ id }),
        }
      );

      const data = await res.json();
      if (!data?.success) throw new Error(data?.message);

      setData((prev) => ({
        ...prev!,
        blogs:
          prev?.blogs?.map((b) =>
            b._id === id ? { ...b, live: !b.live } : b
          ) || [],
      }));

      alert(`Blog is now ${isLive ? "hidden" : "live"}`);
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderRow = (val: Blog, idx: number) => (
    <tr key={val._id}>
      <td className="blogTD">{idx + 101}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/blog/${val.slug}`)}
        className="blogHeadingHai blogTD"
      >
        {val.h1.substring(0, 55)}...
      </td>
      <td className="blogTD">Admin</td>
      <td className="blogTD">
        {new Date(val.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>
      <td className="blogTD">
        {new Date(val.updatedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>
      <td className="blogTD">
        {val.live ? "Published" : "Draft"}{" "}
        {val.live ? (
          <i
            onClick={() => changeVisibility(val._id, true)}
            style={{ color: "red", cursor: "pointer" }}
            className="fas fa-minus"
          ></i>
        ) : (
          <i
            onClick={() => changeVisibility(val._id, false)}
            style={{ color: "#275df5", cursor: "pointer" }}
            className="fas fa-plus"
          ></i>
        )}
      </td>
      <td className="blogTD">
        <Link to={`/admin/editblog/${val.slug}`}>
          <i
            style={{
              color: "green",
              marginRight: "8px",
              cursor: "pointer",
            }}
            className="fas fa-edit"
          ></i>
        </Link>
        <i
          onClick={() => deleteblogs(val._id)}
          style={{ color: "red", cursor: "pointer" }}
          className="fas fa-trash-alt"
        ></i>
      </td>
    </tr>
  );

  return (
    <div className="container-fluid">
      <div
        className="container"
        style={{ paddingTop: "120px", marginBottom: "20px" }}
      >
        {/* Top controls */}
        <div className="blogTopContainer">
          <Link to="/admin/addblog">
            <button
              type="button"
              className="mb-3 btn btn-primary addPostButton"
              style={{ height: "60px" }}
            >
              Add Blog
            </button>
          </Link>

          <div className="blogTopContainerRightChild">
            <div className="dropdown mb-3">
              <button
                className="btn dropdown-toggle blog-dropdown-btn text-white"
                type="button"
                id="dropdownMenuButtonblog"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dropdownValue}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButtonblog"
              >
                {["Heading", "Date", "Published", "Draft"].map((val) => (
                  <li key={val}>
                    <button
                      className="dropdown-item text-primary"
                      onClick={() => setDropdownValue(val)}
                    >
                      {val}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="search-bar" style={{ display: "flex", height: "50px" }}>
              <input
                type="text"
                style={{ fontSize: "20px" }}
                className="search-input form-control"
                placeholder="Search Blogs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Side panel + Table */}
        <div className="contentContainer d-flex justify-content-between">
          <div className="sideContainer">
            <div className="leftContent" style={{ backgroundColor: "#275df5" }}>
              <p
                style={{ color: "white", backgroundColor: "#275df5" }}
                className="leftContentBar"
              >
                Blogs
              </p>
            </div>
            <Link to="/admin/users">
              <div className="leftContent">
                <p style={{ color: "black" }} className="leftContentBar">
                  Users
                </p>
              </div>
            </Link>
          </div>

          <div className="rightContainer">
            <table className="table table-bordered rounded table-striped bg-dark">
              <thead>
                <tr style={{ border: "1px solid grey" }}>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    ID
                  </th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    Heading
                  </th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    Author
                  </th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    Publish Date
                  </th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    Updated Date
                  </th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    Status
                  </th>
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {searchTerm === ""
                  ? data?.blogs.map(renderRow)
                  : filteredBlogs?.length
                    ? filteredBlogs.map(renderRow)
                    : (
                      <tr>
                        <td colSpan={7} style={{ color: "#ff0000ff" }}>
                          No matching blogs found.
                        </td>
                      </tr>
                    )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center mb-3 pagination-container">
          <p style={{ textAlign: "center" }}>
            <span
              className="pageNumberDetail1"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Page {pageNo} of {data?.noOfPage || 1}
            </span>
          </p>

          {searchTerm === "" && (
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3 pagination-container">
              <button
                disabled={pageNo <= 1}
                onClick={() => setPageNo(pageNo - 1)}
                className="btn btn-secondary me-2 text-dark blog-prev-btn blogPreviousButton"
              >
                Previous
              </button>

              <span style={{ color: "#fff", margin: "0 10px" }}>
                Page {pageNo} of {data?.noOfPage || 1}
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
    </div>
  );
};

export default AdminBlogContent;
