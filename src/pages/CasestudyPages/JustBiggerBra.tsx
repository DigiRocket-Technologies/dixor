import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/JustBiggerBras/bra3.png";
import img2 from "/assets/img/portfolio/JustBiggerBras/bra1.png";
import img3 from "/assets/img/portfolio/JustBiggerBras/bra2.png";

const BiggerBras = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link rel="canonical" href="https://digirocket.io/case-study/just-bigger-bras" />
        <meta
          name="description"
          content="Learn how DigiRocket Technologies improved the online visibility and performance of Just Bigger Bras through SEO, content marketing, and e-commerce optimization."
        ></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Just Bigger Bras" />

        <div className={`project-details-items default-padding-bottom`}>
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Just Bigger Bras Website" />
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
                          <h3>Just Bigger Bras</h3>
                        </div>
                      </li>

                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            SEO <br />
                            E-commerce SEO <br />
                            Content Optimization <br />
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
                            Just Bigger Bras wanted to strengthen its online
                            presence and reach more women searching for
                            comfortable, supportive bras in larger cup sizes.
                            The focus was on improving organic visibility,
                            product discoverability, and user engagement across
                            the website.
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
          <img src={img2} alt="Just Bigger Bras Store" />
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
                          Just Bigger Bras is a specialized lingerie store
                          focused on providing high-quality bras designed for
                          women with fuller busts. The company started as a
                          family-owned boutique in Georgia and expanded online
                          to serve customers searching for properly fitted bras
                          that are often difficult to find in regular retail
                          stores. The brand emphasizes expert fitting,
                          supportive designs, and premium materials to ensure
                          comfort and confidence for every customer.
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
                          Despite offering specialized products, the website
                          struggled with limited organic visibility for key
                          search terms related to large cup size bras and bra
                          fitting. Many potential customers searching online
                          for DD+ bras or professional bra fitting services
                          were not discovering the brand. Product pages also
                          required stronger content optimization and better
                          keyword targeting to compete with established
                          lingerie retailers.
                        </p>

                        <img src={img3} alt="Challenges" />
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
                          Our team implemented a targeted SEO strategy focused
                          on optimizing product pages, improving site structure,
                          and creating informational content around bra sizing
                          and fitting. By improving keyword targeting,
                          optimizing product descriptions, and enhancing
                          analytics tracking, the website achieved better
                          search rankings, increased organic traffic, and
                          improved engagement from customers looking for
                          specialized lingerie solutions.
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

export default BiggerBras;