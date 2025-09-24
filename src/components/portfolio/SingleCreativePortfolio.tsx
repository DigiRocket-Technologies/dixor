import { Link } from "react-router-dom";
import useLeftRightAnimation from "../../hooks/useLeftRightAnimation";

interface CreativeDataType {
    id?: string;
    thumb?: string;
    title?: string;
    tag?: string;
    description?: string;
}

const SingleCreativePortfolio = ({ creative }: { creative: CreativeDataType }) => {
    const { id, thumb, title, tag, description } = creative;

    const containerRef = useLeftRightAnimation();
    
    return (
        <>
            <div className="portfolio-style-five">
                <Link to={`/case-study/${id}`} className="cursor-target">
                    <div className="thumb-zoom">
                        <img 
                            className="img-reveal" 
                            src={thumb} 
                            alt="Image Not Found" 
                            width={800} 
                            height={1067} 
                            ref={containerRef} 
                        />
                        <div className="overlay">
                            <h2>{title}</h2>
                            <span>{tag}</span>
                            {description && (
                                <p style={{ 
                                    fontSize: '14px', 
                                    marginTop: '8px', 
                                    opacity: '0.8' 
                                }}>
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SingleCreativePortfolio;

