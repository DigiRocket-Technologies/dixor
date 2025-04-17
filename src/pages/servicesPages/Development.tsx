import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import banner6 from "/assets/img/banner/6.jpg";
import { Link } from "react-router-dom";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import thumb3 from "/assets/img/thumb/3.jpg";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import MostPopularServices from "../../components/services/MostPopularServices";
// import Blog2ColumnContent from "../../components/blog/Blog2ColumnContent";
// import PortfolioV3 from "../../components/portfolio/PortfolioV3";

const Development = () => {
  const features = [
    {
      icon: "/assets/img/icon/2.png", // Bootstrap Icon class
      title: "First Impressions Count",
      description:
        "Visitors judge your business within seconds. A professional website helps build trust instantly.",
    },
    {
      icon: "/assets/img/icon/2.png",
      title: "User Experience Matters",
      description:
        "A well-structured and visually appealing site ensures visitors stay longer and engage more.",
    },
    {
      icon: "/assets/img/icon/2.png",
      title: "Supports Marketing Efforts",
      description:
        "Whether it’s SEO, content marketing, or social media, your website is the foundation for all digital strategies.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Dixor - Service Details Light</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Development"
          breadCrumb="Development"
          LightMode={false}
        />
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-50 mt-xs-20">
            <h1 style={{ marginBottom: "50px" }}>
              Customized Development for Every Stage of Growth{" "}
            </h1>
            <div className="container py-5">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col">
                    <div className="text-white bg-dark p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                      <img
                        src={feature.icon}
                        style={{ width: "60px" }}
                        alt=""
                      />
                      <h5 className="fw-bold mt-4">{feature.title}</h5>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Core Pillars of Our Development Solutions</h2>
          
            <div  style={{marginTop:"50px",width:"100%"}}>
              {[
                {
                  id: 1,
                  title: "Project Research",
                  img: "/assets/img/blog/4.jpg",
                },
                {
                  id: 2,
                  title: "Best Concept",
                  img: "/assets/img/blog/4.jpg",
                },
                {
                  id: 3,
                  title: "Design Implement",
                  img: "/assets/img/blog/4.jpg",
                },
                {
                  id: 4,
                  title: "Final Result",
                  img: "/assets/img/blog/4.jpg",
                },
              ].map((item, index) => (
                <div
                  key={item.id}
                  
                  className={`w-100 d-flex flex-column flex-lg-row ${
                    index % 2 !== 0 ? "flex-lg-row-reverse" : ""
                  }  mb-5`}
                >
                  {/* Image */}
                  <div className="w-100 w-lg-50 text-center p-2">
                    <img
                      src={item.img}
                      alt="Blog"
                      className="img-fluid"
                      style={{ maxWidth: "500px",height:"550px" ,width: "100%" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="w-100 w-lg-50 p-4 text-center">
                    <h2 className="post-title">
                      <Link to={`/blog-single-with-sidebar`}>{item.title}</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod unde omnis est eius corrupti, odit vero fuga
                      accusantium cum expedita debitis velit assumenda quidem.
                      Facilis suscipit neque ullam numquam fugiat.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Explore Our Services</h2>
            <div className="container">
              <div className={`portfolio-style-three-area`}>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/portfolio/1.jpg`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="col-lg-5">
                      {/* <div className="date">{date}</div> */}
                      <h2 style={{ fontSize: "80px" }}>
                        <Link to={`/shopify-development/`}>
                          <strong> Shopify</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/shopify-development/`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/portfolio/1.jpg`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="col-lg-5">
                      {/* <div className="date">{date}</div> */}
                      <h2 style={{ fontSize: "80px" }}>
                        <Link to={`/woocommerce-development`}>
                          WooCommerce <strong> Development</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/woocommerce-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/portfolio/1.jpg`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="col-lg-5">
                      {/* <div className="date">{date}</div> */}
                      <h2 style={{ fontSize: "80px" }}>
                        <Link to={`/artificial-intelligence`}>
                          Artificial <strong>Intelligence</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/artificial-intelligence`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/portfolio/1.jpg`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="col-lg-5">
                      {/* <div className="date">{date}</div> */}
                      <h2 style={{ fontSize: "80px" }}>
                        <Link to={`/web-application-development`}>
                          Web <strong>Applications</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/web-application-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/portfolio/1.jpg`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="col-lg-5">
                      {/* <div className="date">{date}</div> */}
                      <h2 style={{ fontSize: "80px" }}>
                        <Link to={`/mobile-application-development`}>
                          Mobile <strong>Application</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/mobile-application-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/portfolio/1.jpg`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="col-lg-5">
                      {/* <div className="date">{date}</div> */}
                      <h2 style={{ fontSize: "80px" }}>
                        <Link to={`/wordpress-development`}>Wordpress</Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/wordpress-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h2>Behind the Numbers: Our Work in Action</h2>
            <div className="container">
              <div className="row align-center">
                <div className="col-lg-5">
                  <div className="thumb-style-one">
                    <img src={thumb3} alt="Image Not Found" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="choose-us-style-one">
                    <div className="pl-80 pl-md-0 pl-xs-0">
                      <h2 className="title">Unlock Revenue Growth</h2>
                      <div>
                        We are dedicated to providing outstanding service and
                        helping our clients achieve their goals.We are dedicated
                        to providing outstanding service and helping our clients
                        achieve their goals. We are dedicated to providing
                        outstanding service and helping our clients achieve
                        their goals. We are dedicated to providing outstanding
                        service and helping our clients achieve their goals. We
                        are dedicated to providing outstanding service and
                        helping our clients achieve their goals. We are
                        dedicated to providing outstanding service and helping
                        our clients achieve their goals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialV2/>
          <MostPopularServices/>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Development;
