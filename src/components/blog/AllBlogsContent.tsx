
import { useEffect, useState } from "react";
// import Pagination from "react-paginate";
// import { useNavigate, useParams } from "react-router-dom";
import SingleBlog2Item from "./SingleBlog2Item";
import Preloader from "../utilities/Preloader";

interface DataType {
  sectionClass?: string;
}
interface AllDataType {
  noOfPage: number;
  blogSize: number;
}

const AllBlogPagesContent = ({ sectionClass }: DataType) => {
  const [loading, setloading] = useState(false);
  const [allData, setAllData] = useState<AllDataType | null>(null)
  const [pageNo, setPageNo] = useState(1);

  const [blogs, setBlogs] = useState([])

  const getAllBlogs = async () => {
    try {
      setloading(true)
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/getallblogs/${pageNo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
      const data = await response.json();

      if (!data?.success) throw new Error(data?.message);
      setAllData(data);
      setBlogs(data?.blogs)
    } catch (err) {
      console.log(err)
      alert(err);
    } finally {
      setloading(false)
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [pageNo]);

  // Pagination

  // const navigate = useNavigate();
  // const { page } = useParams<{ page?: string }>();

  // // Set initial page from URL
  // const currentPageNumber = Number(page) || 1;
  // // const [currentPage, setCurrentPage] = useState(currentPageNumber);
  // const [itemsPerPage] = useState(4);

  // useEffect(() => {
  //   setCurrentPage(currentPageNumber);
  // }, [currentPageNumber]);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentBlogData = BlogV3Data.slice(startIndex, endIndex);

  // const handlePageClick = (data: any) => {
  //   const selectedPage = data.selected + 1;
  //   setCurrentPage(selectedPage);

  //   // Update the URL dynamically
  //   navigate(`/blogs?page=${selectedPage}`);

  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 200);
  // };

  // const totalPages = Math.ceil(BlogV3Data.length / itemsPerPage);

  if (loading)
    return <Preloader />
  else
    return (
      <>
        <div
          className={`blog-area blog-grid-colum ${sectionClass ? sectionClass : ""
            }`}
        >
          <div className="container">
            <div className="row">
              {blogs.map((blog, idx) => (
                <div className="col-lg-6 mb-50" key={idx}>
                  <SingleBlog2Item blog={blog} />
                </div>
              ))}
            </div>
            {/* <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <button disabled={pageNo <= 1} onClick={() => setPageNo(pageNo - 1)} className="btn btn-secondary btn-sm me-2 text-dark blog-prev-btn" >
                Previous
              </button>

              <span style={{ color: "#fff", margin: "0 10px" }}>
                Page {pageNo} of {allData?.noOfPage || 1}
              </span>

              <button disabled={pageNo >= (allData?.noOfPage || 1)} onClick={() => setPageNo(pageNo + 1)} className="btn btn-primary btn-sm blog-next-btn" >
                Next
              </button>
            </div> */}

            {allData && allData?.blogSize > 10 && (
              <div className="row mt-4 mb-3">
                <p style={{ textAlign: "center" }}>
                  <span className="pageNumberDetail1" style={{ color: "#fff", margin: "0 10px" }}>
                    Page {pageNo} of {allData?.noOfPage || 1}
                  </span>
                </p>
                <div className="col-md-12 text-center">
                  <button
                    disabled={pageNo <= 1}
                    onClick={() => setPageNo(pageNo - 1)}
                    className="btn btn-secondary btn-sm me-2 text-dark blog-prev-btn rounded-pill"
                  >
                    Previous
                  </button>

                  <span
                    className="pageNumberDetail text-light mx-2"
                    style={{ fontWeight: 500 }}
                  >
                    Page {pageNo} of {allData?.noOfPage || 1}
                  </span>

                  <button
                    disabled={pageNo >= (allData?.noOfPage || 1)}
                    onClick={() => setPageNo(pageNo + 1)}
                    className="btn btn-primary btn-sm blog-next-btn rounded-pill"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}


            {/* Pagination */}
            {/* <div className="row">
            <div className="col-md-12 pagi-area text-center">
              <Pagination
                previousLabel={
                  currentPage === 1 ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-left"></i>
                  )
                }
                nextLabel={
                  currentPage === totalPages ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-right"></i>
                  )
                }
                breakLabel={"..."}
                pageCount={Math.ceil(BlogV3Data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination text-center"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
              />
            </div>
          </div> */}
          </div>
        </div>
      </>
    );
};

export default AllBlogPagesContent;
