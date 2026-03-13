import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/globalCableWire/wire3.png";
import img2 from "/assets/img/portfolio/globalCableWire/wire2.png";
import img3 from "/assets/img/portfolio/globalCableWire/wire1.png";

const GlobalCableWire = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/global-cable-wire"
        />
        <meta
          name="description"
          content="Explore how DigiRocket Technologies helped Global Cable and Wire improve online visibility, optimize product pages, and increase organic traffic through SEO and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Global Cable and Wire" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Global Cable and Wire Website" />
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">

                  <div className="project-single-tags">
                    <Link to="#">Industrial E-commerce</Link>
                  </div>

                  <div className="project-author-details mt-35">
                    <ul>

                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>Global Cable and Wire</h3>
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
                            Global Cable and Wire wanted to improve its
                            online presence and reach more contractors,
                            electricians, and businesses searching for
                            reliable cable and wiring products. The goal
                            was to strengthen organic search visibility,
                            optimize product listings, and improve the
                            digital purchasing experience.
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
          <img src={img2} alt="Electrical Cable Products" />
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
                          Global Cable and Wire is an electrical supply
                          distributor providing a wide range of wire and
                          cable products for residential, commercial, and
                          industrial applications. The company focuses on
                          delivering high-quality electrical solutions with
                          competitive pricing and fast delivery to contractors,
                          electricians, and project managers across the United
                          States.
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
                          Despite offering a large inventory of electrical
                          products, the website faced challenges with organic
                          visibility in a competitive electrical supply
                          market. Many product pages needed stronger keyword
                          optimization and better content structure to reach
                          professionals searching for electrical cables,
                          building wire, and industrial wiring solutions.
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
                          Our team implemented a targeted SEO and
                          e-commerce optimization strategy focused on
                          improving product descriptions, strengthening
                          internal linking, and targeting high-intent
                          keywords related to electrical wire and cable
                          products. Technical SEO improvements and analytics
                          tracking were also implemented to enhance search
                          performance and user engagement.
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

export default GlobalCableWire;