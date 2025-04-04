import banner6 from "/assets/img/banner/6.jpg";
import portfolio45 from "/assets/img/portfolio/45.jpg";
import portfolio46 from "/assets/img/portfolio/46.jpg";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";

interface DataType {
  title?: string;
  whyChooseP1?: string;
  whyChooseP2?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

interface ServiceDetailsProps {
  serviceInfo?: DataType;
  sectionClass?: string;
}

const ServiceDetailsContentLight = ({
  serviceInfo,
  sectionClass,
}: ServiceDetailsProps) => {
  const { title, whyChooseP1, whyChooseP2, q1, a1, q2, a2, q3, a3 } =
    serviceInfo || {};

  return (
    <>
      <div
        className={`services-details-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h2>{title}</h2>
                <p>
                  E-commerce SEO E-commerce SEO is the art and science of
                  optimizing your online store to rank higher on search engines,
                  driving organic traffic, and increasing sales. Unlike general
                  SEO, E-commerce SEO focuses on product pages, category pages,
                  and overall site architecture, ensuring that your store is
                  easily discoverable by potential customers.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  New had happen unable uneasy. Drawings can followed improved
                  out sociable not. Earnestly so do instantly pretended. See
                  general few civilly amiable pleased account carried. These
                  cases are perfectly simple and easy to distinguish.
                </p>
                <ul className="feature-list-item">
                  <li>Boosts Visibility</li>
                  <li>Increases Conversions</li>
                  <li>Optimizes Experience</li>
                </ul>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                <div className="process-style-two-item">
                  <span>01</span>
                  <h4>Project Research</h4>
                  <p>
                    We begin by analyzing your target audience and understanding
                    where they spend their time online. This ensures we create
                    content that speaks to their interests and needs.
                  </p>
                </div>
                <div className="process-style-two-item">
                  <span>02</span>
                  <h4>Best Concept</h4>
                  <p>
                    Based on our research, we develop a content strategy that
                    aligns with your brand’s voice and objectives. We create
                    eye-catching posts, engaging captions, and shareable videos
                    that capture attention and spark conversations.
                  </p>
                </div>
                <div className="process-style-two-item">
                  <span>03</span>
                  <h4>Design Implement</h4>
                  <p>
                    We tailor content for each social media platform (Instagram,
                    Facebook, YouTube, etc.) to maximize reach and engagement.
                    Each platform has its own strengths, and we optimize our
                    content accordingly.
                  </p>
                </div>
                <div className="process-style-two-item">
                  <span>04</span>
                  <h4>Final Result</h4>
                  <p>
                    We track key metrics such as engagement rates, follower
                    growth, and click-through rates to gauge the success of our
                    campaigns. This allows us to continuously optimize our
                    strategy for better results.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-80 mt-xs-50 gallery-two-columns">
              <div className="col-md-6">
                <img src={portfolio45} alt="Image Not Found" />
              </div>
              <div className="col-md-6">
                <img src={portfolio46} alt="Image Not Found" />
              </div>
            </div>
          </div>
        </div>
        <PriceV2New />
        <div className="container">
          <div className="services-details-items">
            <div className="d-grid colums-2 mt-50">
              <div className="item">
                <div className="faq-style-one faq-style-two">
                  <h2 className="mb-30">Any questions find here.</h2>
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {q1}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>{a1}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          {q2}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>{a2}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          {q3}
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>{a3}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <h2>What we do?</h2>
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
            <div className="services-more mt-100 mt-xs-30">
              <h2 className="mb-20">Most popular services</h2>
              <div className="row">
                {ServicesV1Data.slice(0, 3).map((service) => (
                  <div className="col-lg-4 col-md-6" key={service.id}>
                    <div className="item">
                      <img
                        src={`/assets/img/icon/${service.iconLight}`}
                        alt="Image Not Found"
                        width={75}
                        height={60}
                      />
                      <h4>
                        <Link to={`/service-details-light/${service.id}`}>
                          {service.title}
                        </Link>
                      </h4>
                      <p>{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentLight;
