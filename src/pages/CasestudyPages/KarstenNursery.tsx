import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/Nursery/nursery3.png";
import img2 from "/assets/img/portfolio/Nursery/nursery1.png";
import img3 from "/assets/img/portfolio/Nursery/nursery2.png";

const KarstenNursery = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/karsten-nursery"
        />
        <meta
          name="description"
          content="Discover how DigiRocket Technologies helped Karsten Nursery enhance its online visibility and digital performance through SEO and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Karsten Nursery" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Karsten Nursery Website" />
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
                          <h3>Karsten Nursery</h3>
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
                            Karsten Nursery aimed to strengthen its digital
                            presence and attract more customers searching for
                            fast-growing trees, windbreak solutions, and
                            landscaping plants. The focus was on improving
                            organic visibility, optimizing product listings,
                            and enhancing the overall online shopping
                            experience.
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
          <img src={img2} alt="Karsten Nursery Trees" />
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
                          Karsten Nursery is a family-owned tree nursery based
                          in Minnesota that has been producing quality trees
                          and shrubs for over four decades. Founded by Glen
                          Karsten in the early 1980s, the nursery became known
                          for its exclusive Hybrid SuperTree®, a fast-growing
                          cultivar developed for windbreaks, privacy screens,
                          and landscaping applications. Today the nursery
                          supplies trees to homeowners, farmers, and
                          landscapers across the United States and Canada.
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
                          Although Karsten Nursery had a strong reputation for
                          producing high-quality trees, the website faced
                          challenges with organic search visibility and product
                          discoverability. Many potential customers searching
                          for windbreak trees, fast-growing shade trees, or
                          landscaping plants were not easily finding the
                          website through search engines. Additionally, product
                          information and site structure required optimization
                          to better support e-commerce growth.
                        </p>

                        <img src={img3} alt="Karsten Nursery Challenges" />
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
                          Our team implemented a comprehensive SEO and content
                          strategy focused on optimizing product pages,
                          improving internal linking, and enhancing keyword
                          targeting related to fast-growing trees and
                          landscaping solutions. We also introduced analytics
                          tracking and performance monitoring to better
                          understand user behavior. These improvements helped
                          increase organic traffic, improve search rankings,
                          and attract more customers interested in tree
                          planting and landscaping projects.
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

export default KarstenNursery;