import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/ArcoStudioHome/arco3.png";
import img2 from "/assets/img/portfolio/ArcoStudioHome/arco2.png";
import img3 from "/assets/img/portfolio/ArcoStudioHome/arco1.png";

const ArcoStudioHome = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/arco-studio-home"
        />
        <meta
          name="description"
          content="Discover how DigiRocket Technologies helped Arco Studio Home improve online visibility and product discoverability through SEO and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Arco Studio Home" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Arco Studio Home Website" />
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">

                  <div className="project-single-tags">
                    <Link to="#">Home Decor E-commerce</Link>
                  </div>

                  <div className="project-author-details mt-35">
                    <ul>

                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>Arco Studio Home</h3>
                        </div>
                      </li>

                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            SEO <br />
                            E-commerce Optimization <br />
                            Content Marketing <br />
                            Analytics Tracking <br />
                            Conversion Rate Optimization
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            Arco Studio Home aimed to expand its digital
                            reach and connect with customers searching
                            for premium lighting, furniture, and decorative
                            home accessories online. The objective was to
                            improve search visibility, optimize product
                            pages, and enhance the overall e-commerce
                            shopping experience.
                          </p>
                        </div>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <img src={img2} alt="Interior Decor Products" />
        </div>

        {/* Section 3 */}

        <div className="project-details-items default-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <div className="item-grid-container">

                  <div className="single-grid">
                    <div className="item-grid-colum">

                      <div className="left-info">
                        <h3>
                          <strong>01</strong> Background
                        </h3>
                      </div>

                      <div className="right-info">
                        <p>
                          Arco Studio Home is an online store offering
                          curated furniture, lighting fixtures, mirrors,
                          and decorative accessories designed to elevate
                          interior spaces. The brand focuses on timeless
                          design, craftsmanship, and carefully selected
                          pieces that enhance comfort and aesthetics
                          within modern homes.
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="single-grid">
                    <div className="item-grid-colum">

                      <div className="left-info">
                        <h3>
                          <strong>02</strong> The Challenges
                        </h3>
                      </div>

                      <div className="right-info">
                        <p>
                          The home décor and furniture market is highly
                          competitive, making it challenging for the
                          website to achieve strong organic visibility.
                          Product pages required improved keyword
                          targeting, optimized product descriptions,
                          and stronger internal linking to reach users
                          searching for premium home décor and lighting
                          solutions.
                        </p>

                        <img src={img3} alt="Project Challenges" />
                      </div>

                    </div>
                  </div>

                  <div className="single-grid">
                    <div className="item-grid-colum">

                      <div className="left-info">
                        <h3>
                          <strong>03</strong> The Solution
                        </h3>
                      </div>

                      <div className="right-info">
                        <p>
                          A comprehensive SEO and e-commerce optimization
                          strategy was implemented to improve product
                          discoverability. This included optimizing
                          product and category pages, strengthening
                          internal linking, and implementing analytics
                          tracking to monitor user behavior. These
                          improvements helped increase organic traffic,
                          improve engagement, and enhance the overall
                          shopping experience.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default ArcoStudioHome;