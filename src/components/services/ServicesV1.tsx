// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json"
// import SplitText from "../animation/SplitText.jsx"
// import { Link } from "react-router-dom";
import { useState } from "react";

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
    lightMode?: boolean
}

const ServicesV1 = ({ sectionClass }: DataType) => {
    const [selectedIndustry, setSelectedIndustry] = useState("Textile Printing");
    const industryData: Record<
        string,
        {
            activeUsers: string;
            sessions: string;
            eventCount: string;
            clicks: string;
            impressions: string;
        }
    > = {
        "Textile Printing": {
            activeUsers: "205%",
            sessions: "159%",
            eventCount: "1.8 M",
            clicks: "53.7 K",
            impressions: "2.85 M",
        },
        "Food & Beverage": {
            activeUsers: "187%",
            sessions: "142%",
            eventCount: "2.3 M",
            clicks: "48.2 K",
            impressions: "3.12 M",
        },
        "Health & Safety": {
            activeUsers: "231%",
            sessions: "178%",
            eventCount: "1.5 M",
            clicks: "62.4 K",
            impressions: "2.41 M",
        },
        Clothing: {
            activeUsers: "193%",
            sessions: "151%",
            eventCount: "2.1 M",
            clicks: "57.8 K",
            impressions: "3.05 M",
        },
        Technologies: {
            activeUsers: "247%",
            sessions: "183%",
            eventCount: "2.7 M",
            clicks: "71.3 K",
            impressions: "4.22 M",
        },
        // ...
    };

    // const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    // const handleMouseEnter = (id: number) => {
    //     setActiveServiceId(id);
    // };

    // const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
    // };

    const currentStats = industryData[selectedIndustry];

    return (
        <>
            <div style={{ paddingBottom: "80px" }} className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div
                    style={{ marginTop: "60px", paddingBottom: "30px" }}
                    className="container"
                >
                    <div className="container-fluid p-0">
                        <div className="row g-0" style={{ minHeight: "70vh" }}>
                            <div className="col-12 col-md-6 bg-dark h-100 d-flex flex-column">
                                <div className="px-4 py-3 flex-grow-1">
                                    <h2 className="fs-2 fw-bold mb-1">Industries</h2>
                                    <p className="mb-3 fs-3">
                                        Our expertise knows no industry boundaries.
                                    </p>

                                    <div className="d-flex flex-column gap-3">
                                        {Object.keys(industryData).map((industry) => (
                                            <div
                                                key={industry}
                                                className="d-flex justify-content-between align-items-center pb-2 cursor-pointer"
                                                style={{
                                                    borderBottom: `1px solid ${selectedIndustry === industry
                                                        ? "#C9F31D"
                                                        : "#D9D9D9"
                                                        }`,
                                                    color:
                                                        selectedIndustry === industry ? "white" : "#D9D9D9",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => setSelectedIndustry(industry)}
                                            >
                                                <span className="fs-4">{industry}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6  d-flex flex-column">
                                <div
                                    className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                                    style={{ backgroundColor: "#C9F31D", height: "25%" }}
                                >
                                    <p style={{ color: "black" }} className="fs-4 mb-0">
                                        Active Users
                                    </p>
                                    <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                                        {currentStats.activeUsers}
                                    </p>
                                </div>
                                <div className="d-flex flex-grow-1" style={{ height: "25%" }}>
                                    <div
                                        className="d-flex flex-column justify-content-end align-items-end p-2 text-end w-50"
                                        style={{ backgroundColor: "white" }}
                                    >
                                        <p style={{ color: "black" }} className="fs-4 mb-0">
                                            Sessions
                                        </p>
                                        <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                                            {currentStats.sessions}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-end align-items-end p-2 text-end w-50 bg-dark">
                                        <p style={{ color: "#C9F31D" }} className="fs-4 mb-0">
                                            Event Count
                                        </p>
                                        <p
                                            className="fs-3 fw-bold mb-0"
                                            style={{ color: "#C9F31D" }}
                                        >
                                            {currentStats.eventCount}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                                    style={{ backgroundColor: "#C9F31D", height: "25%" }}
                                >
                                    <p style={{ color: "black" }} className="fs-4 mb-0">
                                        Clicks
                                    </p>
                                    <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                                        {currentStats.clicks}
                                    </p>
                                </div>
                                <div
                                    className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                                    style={{ backgroundColor: "white", height: "25%" }}
                                >
                                    <p style={{ color: "black" }} className="fs-4 mb-0">
                                        Impressions
                                    </p>
                                    <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                                        {currentStats.impressions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service Title */}
                {/* {hasTitle &&
                    <div className="service-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                    <div className="site-heading">
                                        <h4 className="sub-title">Services We Excel In</h4>
                                        <h2 className="title split-text">
                                            <SplitText
                                                delay={40}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                Turn Information Into Actionable Insights
                                            </SplitText>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="services-style-one-items">
                        <div className="row">
                            {ServicesV1Data.map((service) => (
                                <div
                                    
                                    className="col-xl-3 col-lg-6 col-md-6 single-item"
                                    key={service.id}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{position:"relative"}}
                                >
                                    <div style={{minHeight:"550px"}} className={`services-style-one-item ${activeServiceId === service.id ? 'active' : ''}`}>
                                        <div className="icon">
                                            {lightMode ?
                                                <img src={`/assets/img/${service.iconLight}`} alt="Image Not Found" width={75} height={60} /> :
                                                <img src={`/assets/img/${service.icon}`} alt="Image Not Found" width={75} height={60} />
                                            }
                                        </div>
                                        <h4 >
                                            <Link to={`#`}>{service.title}</Link>
                                        </h4>
                                        <p>{service.text}</p>
                                        <Link style={{position:"absolute",bottom:"40px",width:"70%"}} className="btn-full" to={`#`}>
                                            Read More <i className="fas fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default ServicesV1;