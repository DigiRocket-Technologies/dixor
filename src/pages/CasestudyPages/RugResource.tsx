import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/Rug/rug3.png";
import img2 from "/assets/img/portfolio/Rug/rug2.png";
import img3 from "/assets/img/portfolio/Rug/rug1.png";

const RugResources = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link rel="canonical" href="https://digirocket.io/case-study/rug-resources" />
        <meta name="description" content="Learn how DigiRocket Technologies improved the digital visibility and performance of Rug Resources through SEO, e-commerce optimization, and analytics tracking." />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Rug Resources" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Rug Resources Website" />
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">

                  <div className="project-single-tags">
                    <Link to="#">E-commerce</Link>
                  </div>

                  <div className="project-author-details mt-35">
                    <ul>

                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>Rug Resources</h3>
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
                            Rug Resources wanted to improve its online
                            visibility and reach customers searching for
                            high-quality area rugs and home décor. The goal
                            was to increase organic search traffic, optimize
                            product listings, and enhance the overall
                            shopping experience for home décor buyers.
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
          <img src={img2} alt="Rug Resources Products" />
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
                          Rug Resources is an online retailer specializing
                          in premium area rugs and home décor collections.
                          Founded by an industry professional with more than
                          three decades of experience, the company curates
                          products from well-known brands and interior
                          designers. The platform focuses on delivering
                          stylish rugs that combine traditional craftsmanship
                          with modern interior design trends.
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
                          Although the website offered a wide range of rugs,
                          it faced challenges in organic search visibility
                          within a highly competitive home décor market.
                          Product pages required stronger keyword
                          optimization and improved content structure to
                          attract customers searching for modern area rugs,
                          designer collections, and interior décor solutions.
                        </p>

                        <img src={img3} alt="Rug Resources Challenges" />
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
                          Our team implemented a comprehensive SEO and
                          content optimization strategy focused on improving
                          product descriptions, enhancing internal linking,
                          and targeting high-intent keywords related to area
                          rugs and home décor. Technical SEO improvements and
                          analytics tracking were also introduced to monitor
                          user behavior and optimize the conversion funnel,
                          resulting in increased organic traffic and better
                          product discoverability.
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

export default RugResources;