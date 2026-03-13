import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/JadeAndJewels/jadean3.png";
import img2 from "/assets/img/portfolio/JadeAndJewels/jadean1.png";
import img3 from "/assets/img/portfolio/JadeAndJewels/jadean2.png";

const JadeAndJewels = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DigiRocket Technologies</title>
        <link
          rel="canonical"
          href="https://digirocket.io/case-study/jade-and-jewels"
        />
        <meta
          name="description"
          content="Explore how DigiRocket Technologies helped Jade & Jewels strengthen its digital presence and increase online visibility through SEO and e-commerce optimization."
        />
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Jade & Jewels" />

        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Jade and Jewels Website" />
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
                          <h3>Jade & Jewels</h3>
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
                            Jade & Jewels wanted to enhance its digital
                            visibility and reach more customers interested
                            in handcrafted jewellery and designer gemstone
                            pieces. The objective was to improve search
                            engine visibility, optimize product pages,
                            and increase engagement for its premium
                            jewellery collections.
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
          <img src={img2} alt="Jade and Jewels Collection" />
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
                          Jade & Jewels is a designer jewellery brand that
                          creates handcrafted collections inspired by the
                          natural textures and vibrant colors of semi-precious
                          stones. The brand sources rare gemstones from
                          different parts of the world and combines them
                          with traditional jewellery techniques to produce
                          unique and elegant designs that appeal to modern
                          and traditional audiences alike.
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
                          Despite offering unique handcrafted jewellery,
                          the website faced challenges with organic search
                          visibility in a competitive jewellery market.
                          Many product pages required better keyword
                          optimization and improved content structure
                          to attract customers searching for designer
                          gemstone jewellery and handcrafted accessories.
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
                          content strategy focused on optimizing
                          product descriptions, improving internal
                          linking, and targeting high-intent keywords
                          related to designer jewellery and gemstone
                          accessories. By enhancing technical SEO and
                          analytics tracking, the website achieved
                          improved search rankings, increased organic
                          traffic, and stronger engagement from
                          jewellery shoppers.
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

export default JadeAndJewels;