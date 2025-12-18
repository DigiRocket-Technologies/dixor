import { Link } from "react-router-dom";

interface DataType {
    h1?: string;
    title?: string;
    createdAt?:string;
    thumbnail:string,
    slug:string,
    metaDescription:string
}

const SingleBlog2Item = ({ blog }: { blog: DataType }) => {
    const { h1, createdAt, thumbnail, slug, metaDescription } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to={`/blog/${slug}`}>
                        <img className="thumbnailImageblog" src={thumbnail} width={800} height={600} alt="Thumb" />
                    </Link>
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>{createdAt?.substring(0,10)}</li>
                            </ul>
                        </div>
                        <h2 className="post-title">
                            <Link to={`/blog/${slug}`}>{h1?.slice(0,70)}...</Link>
                        </h2>
                        <Link to={`/blog/${slug}`} className="button-regular">
                            {metaDescription?.slice(0,65)} Continue Reading
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Item;
