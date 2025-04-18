// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
import MostPopularServices from "./MostPopularServices.tsx";

interface DataType {
  title?: string;
  bannerImg?: string;
  img1?: string;
  img2?: string;
  whyChooseP1?: string;
  whyChooseP2?: string;
  faqs?: FAQ[];
  definition?: string;
  importance?: string[];
  importance_title?: string;
}

interface FAQ {
  q?: string;
  a?: string;
}
interface PricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
}
interface PricingDataType {
  serviceId?: string;
  monthlyPlans?: PricingPlan[];
  yearlyPlans?: PricingPlan[];
}

interface ServiceDetailsProps {
  serviceInfo?: DataType;
  sectionClass?: string;
  pricing?: PricingDataType;
}

const WordpressContent = ({
  serviceInfo,
  sectionClass,
  pricing,
}: ServiceDetailsProps) => {
  const {
    title,
    whyChooseP1,
    bannerImg,
    whyChooseP2,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

  const cards = [
    {
      id: 1,
      title: "Open-Source Platform",
      description:
        "WordPress is free and fully customizable, with constant updates from a vibrant developer community.",
    },
    {
      id: 2,
      title: "User-Friendly Interface",
      description:
        "WordPress is designed for ease of use, making it ideal for beginners. At the same time, it offers advanced features and flexibility for experienced developers.",
    },
    {
      id: 3,
      title: "SEO-Friendly",
      description:
        "With built-in SEO tools and plugins, WordPress helps you optimize your site for better visibility in search engines",
    },
    {
      id: 4,
      title: "Scalable and Flexible ",
      description:
        "WordPress grows with your business, offering the flexibility to expand your site’s features as needed .",
    },
    {
      id: 5,
      title: "Wide Range of Themes",
      description:
        "Choose from thousands of pre-designed themes to create a unique, professional look for your site .",
    },
    {
      id: 6,
      title: "Strong Community Support",
      description:
        "Benefit from extensive resources, tutorials, and support from a large, active WordPress community.",
    },
  ];
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
                  <img src={bannerImg} alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h2>{title}</h2>
                <p>{definition}</p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>{importance_title}</p>
                <h3>What we offer:</h3>
                <ul className="feature-list-item">
                  {importance?.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-50 mt-xs-20">
              <h1 style={{ marginBottom: "20px" }}>
                Why WordPress is the Best Choice for Your Website?
              </h1>
              <div className="row gx-1 mt-4 gy-4 mb-5">
                {cards.map((card) => (
                  <div key={card.id} className="col-12 mb-3 col-md-6 col-lg-4">
                    <div className="card h-100 border shadow-sm">
                      <div className="position-relative">
                        <a href="/blog-single-with-sidebar/">
                          <img
                            src={`/assets/img/blog/4.jpg`}
                            className="card-img-top"
                            alt="Featured"
                            style={{ height: "480px", objectFit: "cover" }}
                          />
                        </a>
                        <div
                          className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                          style={{
                            width: "40px",
                            height: "40px",
                            top: "12px",
                            left: "5px",
                            fontWeight: "bold",
                            border: "2px solid white",
                          }}
                        >
                          {card.id}
                        </div>
                      </div>
                      <div className="card-body">
                        <h4 style={{ color: "black" }} className="card-title">
                          {card.title}
                        </h4>
                        <p
                          className="card-text text-muted"
                          style={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center">
                Woocommerce integration for powerful ecommerce setup
              </h2>
              <div className="mt-2">
                <h2 className="mb-2">Seamless Integration with WordPress</h2>
                <p>
                  WooCommerce integrates effortlessly with WordPress, providing
                  a strong platform for eCommerce.
                </p>
              </div>
              <div className="mt-4">
                <h2 className="mb-2">Customizable Product Options</h2>
                <p>
                  WooCommerce allows you to create a variety of product types
                  and attributes, tailored to your business needs.
                </p>
              </div>
              <div className="mt-4">
                <h2 className="mb-2">Secure Payment Gateways</h2>
                <p>
                  WooCommerce supports multiple secure payment gateways,
                  offering customers convenient and safe checkout options
                </p>
              </div>
              <div className="mt-4">
                <h2 className="mb-2">Scalable and Flexible</h2>
                <p>
                  WooCommerce grows with your business, offering features to
                  support everything from small shops to large enterprises.
                </p>
              </div>
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            >
              {/* Image */}
              <div className="w-100 w-lg-50 text-center p-2">
                <img
                  src="/assets/img/blog/1.jpg"
                  alt="Blog"
                  className="img-fluid"
                  style={{ maxWidth: "500px", height: "500px", width: "100%" }}
                />
              </div>
              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`/blog-single-with-sidebar`}>What we do? </Link>
                </h2>
                <p>{whyChooseP1}</p>
                <p> {whyChooseP2}</p>
              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />

        <div className="container mt-4">
          <MostPopularServices />
          <div className="item">
            <div className="faq-style-one faq-style-two">
              <h2 className="mb-30">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                {faqs?.map((item, idx) => {
                  return (
                    <div key={idx} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${idx}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${idx}`}
                          aria-expanded="true"
                          aria-controls={`collapse${idx}`}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={`collapse${idx}`}
                        className={`accordion-collapse collapse`}
                        //className="accordion-collapse collapse show"  //use this to keep the answers open
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordpressContent;
