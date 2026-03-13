import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/Debra/debra2.png";
import img2 from "/assets/img/portfolio/Debra/debra1.png";
import img3 from "/assets/img/portfolio/Debra/debra3.png";

const DebrasPassionBoutique = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/debras-passion-boutique"
        />
        <meta
          name="description"
          content="Discover how DigiRocket Technologies improved the online visibility and digital performance of Debra's Passion Boutique through SEO and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Debra's Passion Boutique" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Debra's Passion Boutique Website" />
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
                          <h3>Debra's Passion Boutique</h3>
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
                            Debra's Passion Boutique wanted to improve its
                            online presence and attract more customers looking
                            for stylish boutique fashion. The goal was to
                            increase organic traffic, optimize product pages,
                            and enhance overall search visibility.
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
          <img src={img2} alt="Debra's Passion Boutique Store" />
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
                          Debra's Passion Boutique is an independent online
                          fashion boutique based in Houston, Texas, offering a
                          curated collection of trendy women's clothing and
                          accessories. Founded by Debra, the boutique focuses
                          on stylish designs and quality apparel sourced from
                          well-known fashion brands and manufacturers. The
                          store aims to provide fashionable pieces at
                          affordable prices while maintaining a strong focus
                          on customer satisfaction and personalized service.
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
                          Despite having a diverse catalog of fashion
                          products, the website faced challenges with organic
                          visibility and search engine rankings. Many product
                          pages were not optimized for search queries related
                          to boutique clothing, dresses, and women's fashion.
                          As a result, the brand struggled to consistently
                          attract new visitors and convert traffic into
                          customers.
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
                          Our team implemented a focused SEO and content
                          strategy that optimized product descriptions,
                          improved site structure, and enhanced keyword
                          targeting for boutique fashion searches. We also
                          introduced analytics tracking and performance
                          monitoring to better understand user behavior and
                          conversion patterns. These improvements helped
                          increase organic visibility, attract more fashion
                          shoppers, and strengthen the boutique’s digital
                          presence.
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

export default DebrasPassionBoutique;