import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

interface DataType {
  title?: string;
  h1?:string;
  createdAt?: string;
  thumbnail: string;
  _id: string;
  live: boolean;
  slug:string;
}

const SingleBlog2Item = ({ blog }: { blog: DataType }) => {
  const navigate = useNavigate()
  const { createdAt, thumbnail, _id, live,slug, h1 } = blog;
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
            Authorization: `Bearer ${authUser}`,
          },
          body: JSON.stringify({ id }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!data?.success) {navigate('/admin'); throw new Error(data?.message)};
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
            Authorization: `Bearer ${authUser}`,
          },
          body: JSON.stringify({ id }),
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log("the value of live is : " + data.live)
      if (!data?.success) throw new Error(data?.message);
      window.location.reload()
      alert(`Blog is now ${data.live?"hidden":"live"}`)
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
              <Link to={`/blog/${slug}`}>{h1?.substring(0,65)}...</Link>
            </h2>
            <Link to={`/admin/editblog/${slug}`}>
              <button className="blogButton">Edit</button>
            </Link>
            <button
              disabled={loading}
              onClick={() => handleDelete(_id)}
              style={{ marginLeft: "20px" }}
              className="blogButton"
            >
              Delete
            </button>
            <button
              disabled={loading}
              onClick={() => changeVisibility(_id)}
              style={{ marginLeft: "20px" }}
              className="blogButton"
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
