
import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

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

const InfluencerMarketingContent = ({
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
      title: "Winning Product Research",
      description:
        "We analyze trending products, search volume, competition, and cost-per-click to find a niche that has high demand and long-term growth potential.",
    },
    {
      id: 2,
      title: "Supplier Sourcing & Logistics",
      description:
        "We connect you with reliable suppliers from the U.S. and duty-free regions to ensure faster shipping times, superior product quality, and better customer satisfaction.",
    },
    {
      id: 3,
      title: "Custom Store & Website Development",
      description:
        "We design and develop a high-converting online store tailored to your niche, ensuring a seamless user experience and optimized sales funnel.",
    },
    {
      id: 4,
      title: "Branding & Positioning",
      description:
        "We help you create a unique brand identity, from logo creation to product packaging",
    },
    {
      id: 5,
      title: "Data-Driven Marketing Strategy",
      description:
        "We don’t just build stores; we drive sales. Our expert team develops targeted ad campaigns, SEO strategies, and email marketing plans to scale your business profitably.",
    },
    {
      id: 6,
      title: "Performance Tracking & Optimization",
      description:
        "We continuously monitor your store’s performance using advanced analytics, A/B testing, and conversion rate optimization to maximize your profitability",
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
            <div
              style={{
                paddingTop: "50px",
                paddingBottom: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              className=""
            >
            <button className="btn ">For Brand</button>
            <button className="btn ">For Influencer</button>
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2>Types of Influencers :</h2>

              <div style={{ marginTop: "50px", width: "100%" }}>
                {[
                  {
                    id: 1,
                    title: "Project Research",
                    img: "/assets/img/blog/4.jpg",
                  },
                  {
                    id: 2,
                    title: "Best Concept",
                    img: "/assets/img/blog/4.jpg",
                  },
                  {
                    id: 3,
                    title: "Design Implement",
                    img: "/assets/img/blog/4.jpg",
                  },
                  {
                    id: 4,
                    title: "Final Result",
                    img: "/assets/img/blog/4.jpg",
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
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod unde omnis est eius corrupti, odit vero fuga
                        accusantium cum expedita debitis velit assumenda quidem.
                        Facilis suscipit neque ullam numquam fugiat.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
            <div style={{ marginTop: "50px" }}>
              <h2>Why you need Instagram marketing?</h2>
              <div>
                <h2 className="mb-1">For Growth</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, nostrum. Facilis impedit quibusdam iusto fugit quod
                  recusandae eum culpa, consequuntur, perferendis veritatis ex
                  corrupti dicta et quas, a ut nisi.
                </p>
              </div>
              <div>
                <h2 className="mb-1">For Growth</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, nostrum. Facilis impedit quibusdam iusto fugit quod
                  recusandae eum culpa, consequuntur, perferendis veritatis ex
                  corrupti dicta et quas, a ut nisi.
                </p>
              </div>
              <div>
                <h2 className="mb-1">For Growth</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, nostrum. Facilis impedit quibusdam iusto fugit quod
                  recusandae eum culpa, consequuntur, perferendis veritatis ex
                  corrupti dicta et quas, a ut nisi.
                </p>
              </div>
              <div>
                <h2 className="mb-1">For Growth</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, nostrum. Facilis impedit quibusdam iusto fugit quod
                  recusandae eum culpa, consequuntur, perferendis veritatis ex
                  corrupti dicta et quas, a ut nisi.
                </p>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <h1 style={{ marginBottom: "50px" }}>Our Process </h1>
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
                            style={{ height: "250px", objectFit: "cover" }}
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
            <div style={{marginTop:"50px"}} className={`w-100 d-flex flex-column flex-lg-row  mb-5`}>
              {/* Image */}
              <div className="w-100 w-lg-50 text-center p-2">
                <img
                  src="/assets/img/blog/1.jpg"
                  alt="Blog"
                  className="img-fluid"
                  style={{ maxWidth: "500px",height: "500px", width: "100%" }}
                />
              </div>
              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`/blog-single-with-sidebar`}>What we do? </Link>
                </h2>
                <p>{whyChooseP1}{whyChooseP2}</p>

              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />
        <div className="container mt-4">
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

export default InfluencerMarketingContent;
