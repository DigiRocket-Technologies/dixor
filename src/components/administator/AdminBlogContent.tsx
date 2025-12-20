import "../../assets/css/administator.css";

const AdminBlogContent = () => {
    return (
        <div className="container-fluid">
            <div className="container" style={{ paddingTop: "120px", marginBottom: "20px" }}>
                <div className="blogTopContainer">
                    <button type="button" className="mb-3 btn btn-primary addPostButton" style={{ height: "60px" }}>Add Blog</button>
                    <div className="blogTopContainerRightChild">
                        <div className="dropdown mb-3">
                            <button className="btn dropdown-toggle blog-dropdown-btn text-white" type="button" id="dropdownMenuButtonblog" data-bs-toggle="dropdown" aria-expanded="false">Heading</button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonblog">
                                {["Heading", "Date", "Published", "Draft"].map((val) => (<li key={val}><button className="dropdown-item text-primary">{val}</button></li>))}
                            </ul>
                        </div>
                        <div className="search-bar" style={{ display: "flex", height: "50px" }}>
                            <input type="text" style={{ fontSize: "20px" }} className="search-input form-control" placeholder="Search Blogs" />
                        </div>
                    </div>
                </div>
                <div className="contentContainer d-flex justify-content-between">
                    <div className="sideContainer">
                        <div className="leftContent" style={{ backgroundColor: "#275df5" }}>
                            <p style={{ color: "white" }}>Blogs</p>
                        </div>
                        <div className="leftContent">
                            <p>Users</p>
                        </div>
                    </div>

                    <div className="rightContainer">
                        <table className="table table-bordered rounded table-striped bg-dark">
                            <thead>
                                <tr style={{ border: "1px solid grey" }}>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>ID</th>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Heading</th>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Author</th>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Publish Date</th>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Updated Date</th>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Status</th>
                                    <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="blogTD">101</td>
                                    <td className="blogHeadingHai blogTD" style={{ cursor: "pointer" }}>ssaurabhsingh548@gmail.com</td>
                                    <td className="blogTD">Admin</td>
                                    <td className="blogTD">28 Dec 2025</td>
                                    <td className="blogTD">29 Dec 2025</td>
                                    <td className="blogTD">
                                        Published{" "}
                                        <i style={{ color: "red", cursor: "pointer" }} className="fas fa-minus"></i>
                                    </td>
                                    <td className="blogTD">
                                        <i style={{ color: "green", marginRight: "8px", cursor: "pointer" }} className="fas fa-edit"></i>
                                        <i style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="blogTD">102</td>
                                    <td className="blogHeadingHai blogTD" style={{ cursor: "pointer" }}>Another Blog Title...</td>
                                    <td className="blogTD">Admin</td>
                                    <td className="blogTD">20 Dec 2025</td>
                                    <td className="blogTD">21 Dec 2025</td>
                                    <td className="blogTD">
                                        Draft{" "}
                                        <i style={{ color: "#275df5", cursor: "pointer" }} className="fas fa-plus"></i>
                                    </td>
                                    <td className="blogTD">
                                        <i style={{ color: "green", marginRight: "8px", cursor: "pointer" }} className="fas fa-edit"></i>
                                        <i style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="blogTD" colSpan={7} style={{ color: "#ff0000ff" }}>
                                        No matching blogs found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3 mb-3 pagination-container">
                    <button className="btn btn-secondary me-2 text-dark blog-prev-btn blogPreviousButton">Previous</button>
                    <span style={{ color: "#fff", margin: "0 10px" }}>Page 1 of 3</span>
                    <button className="btn btn-primary blog-next-btn blogNextButton">Next</button>
                </div>
            </div>
        </div>
    );
};

export default AdminBlogContent;
