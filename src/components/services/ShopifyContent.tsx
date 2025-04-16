// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  FreeMode,
  Keyboard,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import ServicesV4Data from "../../../src/assets/jsonData/services/ServicesV4Data.json";
import SingleServiceV4 from "./SingleServiceV4";
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

const ShopifyContent = ({
  serviceInfo,
  sectionClass,
  pricing,
}: ServiceDetailsProps) => {
  const {
    title,
    whyChooseP1,
    bannerImg,
    img1,
    img2,
    whyChooseP2,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

  const features = [
    {
      icon: "/assets/img/icon/24.png", // Bootstrap Icon class
      title: "First Impressions Count",
      description:
        "Visitors judge your business within seconds. A professional website helps build trust instantly.",
    },
    {
      icon: "/assets/img/icon/24.png",
      title: "User Experience Matters",
      description:
        "A well-structured and visually appealing site ensures visitors stay longer and engage more.",
    },
    {
      icon: "/assets/img/icon/24.png",
      title: "Supports Marketing Efforts",
      description:
        "Whether it’s SEO, content marketing, or social media, your website is the foundation for all digital strategies.",
    },
    {
      icon: "/assets/img/icon/24.png",
      title: "Drives Conversions",
      description:
        "Optimized design and clear call-to-actions turn visitors into customers.",
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
            <div className="row mt-80 mt-xs-50 gallery-two-columns">
              <div className="col-md-6">
                <img src={img1} alt="Image Not Found" />
              </div>
              <div className="col-md-6">
                <img src={img2} alt="Image Not Found" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", marginTop: "50px" }}
          className="services-style-four-area default-padding-bottom overflow-hidden blurry-shape-left"
        >
          <div className="mt-50 mt-xs-20">
            <div className="container container-stage">
              <h1 style={{ marginBottom: "50px" }}>
                Our Shopify Developmet Service include{" "}
              </h1>
              <div className="row">
                <div className="col-lg-12">
                  <div className="services-item-one-items">
                    <div className="services-nav">
                      <div className="nav-items">
                        <div className="services-button-prev" />
                        <div className="services-button-next" />
                      </div>
                    </div>
                    <Swiper
                      className="services-carousel swiper"
                      loop={true}
                      autoplay={false}
                      freeMode={true}
                      grabCursor={true}
                      slidesPerView={1}
                      spaceBetween={30}
                      navigation={{
                        nextEl: ".services-button-next",
                        prevEl: ".services-button-prev",
                      }}
                      breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 50,
                        },
                        1400: {
                          slidesPerView: 2.8,
                          spaceBetween: 50,
                        },
                        1800: {
                          slidesPerView: 2.8,
                          spaceBetween: 70,
                        },
                      }}
                      modules={[Navigation, FreeMode, Keyboard]}
                    >
                      <div className="swiper-wrapper">
                        {ServicesV4Data.map((service) => (
                          <SwiperSlide key={service.id}>
                            <SingleServiceV4 service={service} />
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            style={{ marginTop: "50px" }}
            className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
          >
            <h2>Shopify app integration and custom features</h2>
          </div>
          <div style={{ marginTop: "0px", paddingTop: "0px" }}>
            <Swiper
              modules={[Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
              navigation={{
                nextEl: ".right",
                prevEl: ".left",
              }}
              mousewheel={true}
              grabCursor={true}
              autoplay={true}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="feature-card d-flex flex-column justify-content-between text-center p-4 rounded-4 shadow border border-secondary bg-dark h-100">
                    <div>
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        style={{ width: "60px", marginBottom: "20px" }}
                      />
                      <h5 className="fw-semibold fs-5 text-white">
                        {feature.title}
                      </h5>
                      <p className="text-secondary fs-5 mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
          style={{ marginTop: "80px" }}
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
              <Link to={`/blog-single-with-sidebar`}>Why Choose Us? </Link>
            </h2>
            <p>
              {whyChooseP1}
              {whyChooseP2}
            </p>
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

export default ShopifyContent;
