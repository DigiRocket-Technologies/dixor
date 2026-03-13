import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/EvergreenDog/dog2.png";
import img2 from "/assets/img/portfolio/EvergreenDog/dog1.png";
import img3 from "/assets/img/portfolio/EvergreenDog/dog3.png";

const EvergreenDog = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/evergreen-dog"
        />
        <meta
          name="description"
          content="Discover how DigiRocket Technologies helped Evergreen Dog improve its online visibility and product discoverability through SEO, analytics tracking, and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Evergreen Dog" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Evergreen Dog Website" />
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">

                  <div className="project-single-tags">
                    <Link to="#">Pet Accessories E-commerce</Link>
                  </div>

                  <div className="project-author-details mt-35">
                    <ul>

                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>Evergreen Dog</h3>
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
                            Evergreen Dog wanted to enhance its online
                            presence and reach pet owners searching for
                            stylish and durable dog accessories. The
                            objective was to improve product visibility
                            in search engines, optimize collection pages,
                            and enhance the overall e-commerce experience
                            for dog owners shopping online.
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
          <img src={img2} alt="Dog Accessories Products" />
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
                          Evergreen Dog is an online brand specializing
                          in stylish dog accessories including collars,
                          leashes, apparel, and lifestyle products for
                          pets and their owners. The brand focuses on
                          creating unique, handmade designs that combine
                          durability, comfort, and vibrant style for
                          everyday adventures with pets.
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
                          The website operates in a highly competitive
                          pet accessories market. Many product pages
                          required stronger keyword optimization,
                          improved product descriptions, and better
                          internal linking to attract pet owners
                          searching for collars, leashes, and dog
                          lifestyle accessories online.
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
                          discoverability and search engine rankings.
                          This included optimizing product pages,
                          enhancing collection page content, improving
                          technical SEO, and implementing analytics
                          tracking to better understand customer
                          behavior and improve conversions.
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

export default EvergreenDog;