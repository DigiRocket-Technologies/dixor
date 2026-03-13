import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/zoomies/zoomie2.png";
import img2 from "/assets/img/portfolio/zoomies/zoomie1.png";
import img3 from "/assets/img/portfolio/zoomies/zoomie3.png";

const Zoomiesmart = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link rel="canonical" href="https://digirocket.io/case-study/zoomiesmart" />
        <meta
          name="description"
          content="Explore how DigiRocket Technologies enhanced Zoomiesmart's online presence with strategic SEO, content marketing, and performance optimization."
        ></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Zoomiesmart" />

        <div className={`project-details-items default-padding-bottom`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Zoomiesmart Project" />
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">
                  <div className="project-single-tags">
                    <Link to="#">E-commerce Marketing</Link>
                  </div>

                  <div className="project-author-details mt-35">
                    <ul>
                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>Zoomiesmart</h3>
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
                            Conversion Rate Optimization <br />
                            Analytics & Performance Tracking
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            Zoomiesmart aimed to grow its online visibility,
                            increase organic traffic, and boost conversions for
                            its pet products through targeted SEO strategies
                            and optimized product content.
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
          <img src={img2} alt="Zoomiesmart Website" />
        </div>

        {/* 3rd Section */}
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
                          Zoomiesmart is an online store offering premium pet
                          accessories and supplies for dogs and cats. While the
                          website had a wide range of products including pet
                          beds, feeders, grooming tools, and travel carriers,
                          the brand needed improved digital visibility and
                          stronger search engine presence to reach pet owners
                          globally.
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
                          Zoomiesmart faced challenges with low organic
                          visibility and limited search rankings for key pet
                          product keywords. Product pages lacked optimized
                          content, and the website struggled to attract
                          consistent organic traffic. Additionally, conversion
                          rates were below expectations due to limited content
                          marketing and engagement strategies.
                        </p>

                        <img src={img3} alt="Zoomiesmart Challenges" />
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
                          We implemented a comprehensive SEO strategy focused
                          on product keyword optimization, improved on-page
                          content, and technical SEO enhancements. Blog content
                          around pet care and product usage helped capture
                          informational search traffic. These improvements
                          increased organic impressions, improved keyword
                          rankings, and enhanced user engagement across the
                          platform.
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

export default Zoomiesmart;