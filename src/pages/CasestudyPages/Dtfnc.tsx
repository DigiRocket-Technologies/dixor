import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/Dtfnc/dtfnc3.png";
import img2 from "/assets/img/portfolio/Dtfnc/dtfnc1.png";
import img3 from "/assets/img/portfolio/Dtfnc/dtfnc2.png";

const DTFNC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/dtfnc"
        />
        <meta
          name="description"
          content="Explore how DigiRocket Technologies improved the digital visibility and online performance of DTFNC through SEO, analytics tracking, and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="DTFNC Printing" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="DTFNC Printing Website" />
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">

                  <div className="project-single-tags">
                    <Link to="#">Printing & E-commerce</Link>
                  </div>

                  <div className="project-author-details mt-35">
                    <ul>

                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>DTFNC (DTF North Carolina)</h3>
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
                            DTFNC wanted to improve its online presence and
                            attract more apparel businesses searching for
                            high-quality Direct-to-Film printing transfers.
                            The goal was to increase organic search traffic,
                            optimize product pages, and enhance customer
                            engagement for custom printing services.
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
          <img src={img2} alt="DTF Printing Process" />
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
                          DTFNC is a Direct-to-Film printing company located
                          in Charlotte, North Carolina. The company provides
                          custom DTF transfers that can be applied to various
                          materials such as cotton, polyester, leather, and
                          other fabrics. Their services help apparel brands,
                          screen printers, and small businesses create custom
                          designs for clothing and merchandise with vibrant,
                          durable prints.
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
                          Although the company offered high-quality printing
                          services, the website faced challenges with search
                          visibility for competitive keywords related to
                          custom apparel printing and DTF transfers. Product
                          pages required stronger keyword optimization, and
                          the site needed improved content structure to
                          compete with established printing service providers.
                        </p>

                        <img src={img3} alt="DTFNC Challenges" />
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
                          product page content, targeting high-intent
                          keywords related to DTF transfers, and optimizing
                          technical site performance. By enhancing keyword
                          targeting, strengthening internal linking, and
                          introducing analytics tracking, the website gained
                          improved organic visibility and increased customer
                          engagement.
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

export default DTFNC;