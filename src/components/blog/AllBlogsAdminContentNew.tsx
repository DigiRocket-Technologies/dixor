import { useEffect, useState } from "react";
import "../../assets/css/blogAdmin.css";
import { Link } from "react-router-dom";

interface DataType {
    sectionClass?: string;
}
interface PostDataType {
    blogs: [
        {
            title: string,
            slug: string,
            h1: string,
            content: string,
            thumbnail: string,
            metaDescription: string,
            scripts: string,
            live: boolean,
            createdAt: string,
            updatedAt: string
        }
    ]
}
export default function AllBlogsAdminNew({ sectionClass }: DataType) {
    console.log(sectionClass)
    const [data, setData] = useState<PostDataType | null>(null);

    useEffect(() => {
        const getAllData = async () => {
            let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/getallblogsadmin`);
            let items = await response.json();
            console.log(items);
            setData(items);
        }
        getAllData();
    }, []);

    return (
        <div className="table-responsive mt-12">

            <div className="blogTopContainer">
                <Link to="/admin/addblog">
                    <button type="button" className="btn btn-primary addPostButton" style={{ height: "60px" }}>Add Blog</button>
                </Link>
                <div className="blogTopContainerRightChild">
                    <div className="dropdown mb-3">
                        <button className="btn dropdown-toggle blog-dropdown-btn text-white" type="button" id="dropdownMenuButtonblog" data-bs-toggle="dropdown" aria-expanded="false">
                            Title
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item text-dark" href="#">Title</a></li>
                            <li><a className="dropdown-item text-dark" href="#">Date</a></li>
                            <li><a className="dropdown-item text-dark" href="#">Published</a></li>
                            <li><a className="dropdown-item text-dark" href="#">Draft</a></li>
                        </ul>
                    </div>
                    <div className="search-bar" style={{ position: "relative" }}>
                        <input type="text" style={{ fontSize: "28px" }} className="search-input form-control" placeholder="Search Post" />
                        <i className="fas fa-search search-icon" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#999" }}></i>
                    </div>
                </div>
            </div>


            {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control me-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}


            <table className="table table-bordered table-striped text-center bg-dark">
                <thead>
                    <tr style={{ border: "1px solid white" }}>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">ID</th>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">Title</th>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">Author</th>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">Publish Date</th>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">Updated Date</th>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">Status</th>
                        <th style={{ backgroundColor: "#0e0f11", color: "whitesmoke" }} className="table-header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example static rows — replace later with dynamic data */}
                    {
                        data?.blogs.map((val, idx) => {
                            return <tr>
                                <td style={{ color: "#4e4e4e", paddingTop: "20px" }}>{idx + 101}</td>
                                <td className="blogHeadingHai">
                                    {val.h1.substring(0, 65)}...
                                    <img
                                        src={val.thumbnail}
                                        alt="Male Avatar"
                                        style={{
                                            width: "65px",
                                            height: "50px",
                                            marginLeft: "12px",
                                        }}
                                    />
                                </td>
                                <td style={{ color: "#4e4e4e", paddingTop: "20px" }}>Admin</td>
                                <td style={{ color: "#4e4e4e", paddingTop: "20px" }}>{new Date(val.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td>
                                <td style={{ color: "#4e4e4e", paddingTop: "20px" }}>{new Date(val.updatedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td>
                                <td style={{ color: "#4e4e4e", paddingTop: "20px" }}>{val.live ? "Published" : "Draft"} {val.live ? <i style={{ color: "red", cursor: "pointer" }} className="fas fa-minus"></i> : <i style={{ color: "#275df5", cursor: "pointer" }} className="fas fa-plus"></i>} </td>
                                <td style={{ paddingTop: "20px" }}>
                                    <Link to={`/admin/editblog/${val.slug}`}>
                                        <i style={{ color: "red", marginRight: "8px", cursor: "pointer" }} data-bs-toggle="modal"
                                        data-bs-target="#deleteConfirmationModal" className="fas fa-edit"></i>
                                    </Link>
                                    <i style={{ color: "green", cursor: "pointer" }} className="fas fa-trash-alt"></i>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            {/* Pagination placeholder */}
            <div className="d-flex justify-content-center mt-3 mb-3">
                <button className="btn btn-secondary btn-sm me-2 text-dark blog-prev-btn" >
                    Previous
                </button>
                <button className="btn btn-primary btn-sm blog-next-btn">Next</button>
            </div>
        </div>
    );
}
