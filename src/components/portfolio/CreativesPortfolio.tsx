import CreativesData from '../../assets/jsonData/portfolio/CreativesData.json';
import SingleCreativePortfolio from './SingleCreativePortfolio';
import useUpDownScroll from '../../hooks/useUpDownScroll';
import shape2 from '/assets/img/shape/2.png';

interface DataType {
    hasShape?: boolean;
}

const CreativesPortfolio = ({ hasShape }: DataType) => {
    useUpDownScroll(".upDownScrol");

    return (
        <>
            <div className="portfolio-style-five-area default-padding bg-gray">
                {/* Moving Shape */}
                {hasShape ? (
                    <div className="upDownScrol">
                        <img src={shape2} alt="Image Not Found" />
                    </div>
                ) : (
                    <></>
                )}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Our Creative Work</h4>
                                <h2 className="title">Graphics & Visual Identity Showcase</h2>
                                <p>
                                    Discover our creative expertise in brand identity, logo design, 
                                    visual graphics, and digital artwork that makes brands stand out.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-style-five-items title-animation">
                        <div className="title-fixed text-center">
                            <h2>Creatives</h2>
                        </div>
                        <div className="portfolio-style-five-items">
                            <div className="row gutter-xl">
                                {CreativesData.slice(0, 2).map((creative) => (
                                    <div
                                        className="col-lg-6 portfolio-style-five-item"
                                        key={creative.id}
                                    >
                                        <SingleCreativePortfolio creative={creative} />
                                    </div>
                                ))}
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="row gutter-xl">
                                        {CreativesData.slice(2, 4).map((creative) => (
                                            <div
                                                className="col-lg-6 portfolio-style-five-item"
                                                key={creative.id}
                                            >
                                                <SingleCreativePortfolio creative={creative} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {CreativesData.slice(4, 6).map((creative) => (
                                    <div
                                        className="col-lg-6 portfolio-style-five-item"
                                        key={creative.id}
                                    >
                                        <SingleCreativePortfolio creative={creative} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreativesPortfolio;
