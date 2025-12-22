import { Link } from 'react-router-dom';

const AdministatorUserContent = () => {
  return (
    <div className="container-fluid">
      <div className="container" style={{ paddingTop: "120px", marginBottom: "20px" }}>
        <div className="blogTopContainer">
            <button type="button" className="mb-3 btn btn-primary addPostButton" style={{ height: "60px" }}>Add Users</button>
          <div className="blogTopContainerRightChild">
            <div className="dropdown mb-3">
              <button className="btn dropdown-toggle blog-dropdown-btn text-white" type="button" id="dropdownMenuButtonblog" data-bs-toggle="dropdown" aria-expanded="false">Name</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonblog">
                <li><button className="dropdown-item text-primary">Name</button></li>
                <li><button className="dropdown-item text-primary">Email</button></li>
                <li><button className="dropdown-item text-primary">Gender</button></li>
              </ul>
            </div>
            <div className="search-bar" style={{ display: "flex", height: "50px" }}>
              <input type="text" style={{ fontSize: "20px" }} className="search-input form-control" placeholder="Search Users" />
            </div>
          </div>
        </div>

        <div className="contentContainer d-flex justify-content-between">
          <div className="sideContainer">
            <Link to="/admin/blogs">
              <div className="leftContent" style={{ backgroundColor: "#275df5" }}>
              <p style={{ color: "black" }} className="leftContentBar">Blogs</p>
            </div>
            </Link>
            <div className="leftContent">
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
                  <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="blogTD">101</td>
                  <td className="blogHeadingHai blogTD">Saurabh Kumar Singh</td>
                  <td className="blogTD">ssaurabhsingh548@gmail.com</td>
                  <td className="blogTD">Male</td>
                  <td className="blogTD">
                      <i style={{ color: "green", marginRight: "8px", cursor: "pointer" }} className="fas fa-edit"></i>
                    <i style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7} style={{ color: "#ff0000ff" }}>No matching Users found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-3 pagination-container">
          <p style={{ textAlign: "center" }}>
            <span className="pageNumberDetail1" style={{ color: "#fff", margin: "0 10px" }}>Page 1 of 1</span>
          </p>
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3 pagination-container">
            <button disabled className="btn btn-secondary me-2 text-dark blog-prev-btn blogPreviousButton">Previous</button>
            <span style={{ color: "#fff", margin: "0 10px" }}>Page 1 of 1</span>
            <button disabled className="btn btn-primary blog-next-btn blogNextButton">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdministatorUserContent;
