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

const WooCommerceContent = ({
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

  const features = [
    {
      icon: "/assets/img/services/woocommerce/integration.svg", // Bootstrap Icon class
      title: "Seamless Integration",
      description:
        "WooCommerce fits naturally within WordPress, letting you manage products, content, and design from one dashboard",
    },
    {
      icon: "/assets/img/services/woocommerce/design freedom.svg",
      title: "Total Design Freedom",
      description:
        "Take full control of your store's look and feel using themes, page builders, and custom CSS — no limits.",
    },
    {
      icon: "/assets/img/services/woocommerce/plugin.svg",
      title: "Massive Plugin Ecosystem",
      description:
        "Extend your store with thousands of WordPress plugins for SEO, speed, marketing, and more.",
    },
    {
      icon: "/assets/img/services/woocommerce/community.svg",
      title: "trong Community Support",
      description:
        "Join a global community of developers, designers, and store owners ready to help and share knowledge.",
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
                <ul className="feature-list-item">
                  {importance?.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-50 mt-xs-20">
              <h1 className="" style={{ marginBottom: "50px" }}>
                Why WooCommerce is Right for Your Business?
              </h1>
              <div style={{ marginTop: "50px", width: "100%" }}>
                {[
                  {
                    id: 1,
                    title: "Full Flexibility & Control",
                    p: "WooCommerce gives you complete control over your store—from how it looks to how it functions. You can customize everything, add unlimited products, and scale easily as your business grows, without being tied to rigid platform rules or limitations.",
                    img: "/assets/img/services/woocommerce/flexibility.png",
                  },
                  {
                    id: 2,
                    title: "Built on WordPress",
                    p: "Since WooCommerce runs on WordPress, the world’s most popular CMS, it offers seamless content and store management in one place. This makes it easier to integrate blogs, SEO tools, and plugins—giving you a competitive edge in both content and commerce",
                    img: "/assets/img/services/woocommerce/built on wordpress.png",
                  },
                  {
                    id: 3,
                    title: "Cost-Effective & Scalable",
                    p: "WooCommerce itself is free, and you only pay for the tools and features you actually need. This makes it a highly cost-effective option for small businesses and startups, while still offering scalability for larger stores as they grow.",
                    img: "/assets/img/services/woocommerce/scalability.png",
                  },
                  {
                    id: 4,
                    title: "Wide Range of Extensions",
                    p: "With thousands of extensions and plugins available, WooCommerce allows you to enhance your store’s capabilities—whether it’s advanced shipping, payment gateways, or marketing automation. You can tailor the experience to fit your exact business needs",
                    img: "assets/img/services/woocommerce/extension.png",
                  },
                ].map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-100 d-flex flex-column flex-lg-row ${
                      index % 2 !== 0 ? "flex-lg-row-reverse" : ""
                    }  mb-5`}
                  >
                    {/* Image */}
                    <div className="w-100 w-lg-50 text-center p-2">
                      <img
                        src={item.img}
                        alt="Blog"
                        className="img-fluid"
                        style={{
                          maxWidth: "500px",
                          height: "500px",
                          width: "100%",
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div className="w-100 w-lg-50 p-4 text-center">
                      <h2 className="post-title">
                        <Link to={`/blog-single-with-sidebar`}>
                          {item.title}
                        </Link>
                      </h2>
                      <p>{item?.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center">
                What Makes WooCommerce + WordPress a Smart Choice?
              </h2>
              <div className="row g-4 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-3">
                    <div className="text-white  p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                      <img
                        src={feature.icon}
                        style={{ width: "60px" }}
                        alt=""
                      />
                      <h5 className="fw-bold mt-4">{feature.title}</h5>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            >
              {/* Image */}
              <div className="w-100 w-lg-50 text-center p-2">
                <img
                  src="/assets/img/about/choose us 1.png"
                  alt="Blog"
                  className="img-fluid"
                  style={{ maxWidth: "500px", height: "500px", width: "100%" }}
                />
              </div>
              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`#`}>
                    What Sets Us Apart?{" "}
                  </Link>
                </h2>
                <p>
                  {whyChooseP1}
                  <p> {whyChooseP2}</p>
                </p>
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

export default WooCommerceContent;
