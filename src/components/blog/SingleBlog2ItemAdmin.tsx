import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Preloader from "../utilities/Preloader";


interface DataType {
  title?: string;
  createdAt?: string;
  thumbnail: string;
  _id: string;
  live: boolean;
  slug:string
}

const SingleBlog2Item = ({ blog }: { blog: DataType }) => {
  const { title, createdAt, thumbnail, _id, live,slug } = blog;
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const handleDelete = async (id: string) => {
    const opinion = confirm("Do you want to delete item")
    if (!opinion)
    return

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/deleteblog`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: authUser || "",
          },
          body: JSON.stringify({ id }),
        }
      );
      const data = await res.json();
      if (!data?.success) throw new Error(data?.message);
      window.location.reload()
      alert("Blog deleted sucessfully")
    } catch (err: any) {
      console.log(err)
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const changeVisibility = async (id: string) => {

    const opinion = confirm(`Do you want to ${live ? "hide" : "show"} the blog`)
    if (!opinion)
      return

    try {

      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/altervisibility`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authUser || "",
          },
          body: JSON.stringify({ id }),
        }
      );
      const data = await res.json();
      if (!data?.success) throw new Error(data?.message);
      window.location.reload()
      alert(`Blog is now ${live?"hidden":"live"}`)
    } catch (err: any) {
      console.log(err)
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <div className="home-blog-style-one">
        <div className="thumb">
          <Link to={`/blog/${slug}`}>
            <img src={thumbnail} width={800} height={600} alt="Thumb" />
          </Link>
          <div className="info">
            <div className="meta">
              <ul>
                <li>{createdAt?.substring(0, 10)}</li>
              </ul>
            </div>
            <h2 className="post-title">
              <Link to={`/blog/${slug}`}>{title}</Link>
            </h2>
            <Link to={`/admin/editblog/${slug}`}>
              <button>Edit</button>
            </Link>
            <button
              disabled={loading}
              onClick={() => handleDelete(_id)}
              style={{ marginLeft: "20px" }}
              className=""
            >
              Delete
            </button>
            <button
              disabled={loading}
              onClick={() => changeVisibility(_id)}
              style={{ marginLeft: "20px" }}
              className=""
            >
              {live ? "Hide It" : "Make it live"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog2Item;
