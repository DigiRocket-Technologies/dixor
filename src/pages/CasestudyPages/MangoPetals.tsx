import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/mangoPetals/mango3.png";
import img2 from "/assets/img/portfolio/mangoPetals/mango2.png";
import img3 from "/assets/img/portfolio/mangoPetals/mango1.png";

const MangoPetals = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/mango-petals"
        />
        <meta
          name="description"
          content="Discover how DigiRocket Technologies helped Mango Petals improve its online visibility and digital performance through SEO, analytics tracking, and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Mango Petals" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Mango Petals Website" />
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
                          <h3>Mango Petals</h3>
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
                            Mango Petals aimed to strengthen its digital
                            presence and reach customers searching for
                            premium wall art and home décor products.
                            The goal was to improve organic search visibility,
                            optimize product pages, and enhance the overall
                            online shopping experience for interior décor
                            enthusiasts.
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
          <img src={img2} alt="Wall Art Collection" />
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
                          Mango Petals is an online home décor brand that
                          specializes in premium framed and canvas wall art
                          designed to enhance interior spaces. The platform
                          offers curated collections of artwork that blend
                          modern, rustic, and farmhouse styles, helping
                          customers transform their homes with unique
                          decorative pieces.
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
                          Despite offering visually appealing décor
                          products, the website faced challenges with
                          organic visibility in the competitive home décor
                          market. Many product pages required improved
                          keyword optimization, better product descriptions,
                          and stronger content structure to attract users
                          searching for wall art and interior decoration
                          products.
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
                          Our team implemented a targeted SEO strategy
                          focused on optimizing product listings,
                          improving internal linking, and targeting
                          high-intent keywords related to wall art,
                          canvas prints, and home décor. By enhancing
                          technical SEO and analytics tracking,
                          the website achieved improved search
                          rankings, increased organic traffic,
                          and stronger engagement from home décor
                          shoppers.
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

export default MangoPetals;