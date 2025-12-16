
import Animate from "../animation/Animate";

interface DataType {
  content: string;
  thumbnail?: string;
}

interface BlogSingleProps {
  blogData?: DataType;
  sectionClass?: string;
}

const BlogContentNew = ({
  blogData,
  sectionClass,
}: BlogSingleProps) => {
  const { content, thumbnail } = blogData || {};

  return (
    <>
      <div
        className={`blog-area  single full-blog full-blog ${sectionClass ? sectionClass : ""
          }`}
      >
        <div className="container" >
          <div className="blog-items">
            <div className="row">
              <Animate className="animate__animated animate__fadeInUp">
                <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                  {thumbnail && (
                  <div className="blog-thumbnail mb-4 text-center">
                    <img
                      src={thumbnail}
                      alt="Blog Thumbnail"
                      className="img-fluid rounded"
                      style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                  )}
                  {content ? (
                    <div
                      className="blog-content-html text-white ql-editor"
                      dangerouslySetInnerHTML={{ __html: content.replace(/color:\s*rgb\(0,\s*0,\s*0\)/g, "color: rgb(255, 255, 255)") }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContentNew;
