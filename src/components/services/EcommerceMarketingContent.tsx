// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MostPopularServices from "./MostPopularServices.tsx";
import bannerImg2 from "/assets/img/services/banner02.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
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

const EcommerceMarketingContent = ({
  serviceInfo,
  sectionClass,
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

  // const images = [
  //   "/assets/img/partner/Data-Driven Decisions.jpg",
  //   "/assets/img/partner/enhanced Customer Engagement.jpg",
  //   "/assets/img/partner/higher conversion rate.jpg",
  //   "/assets/img/partner/Increased Brand Visibility.jpg",
  //   "/assets/img/partner/Scalable Marketing strategy.jpg",
  //   "/assets/img/partner/Targeted Advertising.jpg",
  // ];
  const images1 = [
    {
      img: "/assets/img/partner/Data-Driven Decisions.jpg",
      title: "Data-Driven Decisions",
    },
    {
      img: "/assets/img/partner/enhanced Customer Engagement.jpg",
      title: "Enhanced Customer Engagement",
    },
    {
      img: "/assets/img/partner/higher conversion rate.jpg",
      title: "Higher Conversion Rates",
    },
    {
      img: "/assets/img/partner/Increased Brand Visibility.jpg",
      title: "Increased Brand Visibility",
    },
    {
      img: "/assets/img/partner/Scalable Marketing strategy.jpg",
      title: "Scalable Marketing Strategies",
    },
    {
      img: "/assets/img/partner/Targeted Advertising.jpg",
      title: "Targeted Advertising",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    additional: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/ecommerce`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data?.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          additional: "",
        });
        toast.success("Form Saved Successfully");
      } else throw new Error(data?.message);
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      title: "Increase your Amazon business's growth",
      description: "Unlock the full potential of your Amazon store through strategic account management. Digirocket's dedicated experts focus on scaling your business efficiently while ensuring consistent and sustainable sales growth. We've been driving Amazon business growth for over 3 years, completing 150+ successful projects across various categories. Provided below are the services we offer:",
      bgColor: "#d9f21d",
      textColor: "text-black",
      img: "/assets/img/services/amazon/1.png"

    },
    {
      title: "Boost potential income",
      description: "Amplify your earnings on Amazon with our performance-driven approach. We help you enhance your conversion rates and streamline daily operations to boost overall profitability and long-term success.",
      bgColor: "white",
      textColor: "text-black",
      img: "/assets/img/services/amazon/2.png"
    },
    {
      title: "Comprehensive Assistance",
      description: "Our team of seasoned Amazon advisors and top-rated sellers provides hands-on support tailored to your business needs. From setup to scaling, we offer expert insights and end-to-end guidance.",
      bgColor: "#d9f21d",
      textColor: "text-black",
      img: "/assets/img/services/amazon/3.png"
    },
    {
      title: "Amazon Listing Services",
      description: "We create optimized, keyword-rich product listings that enhance visibility, attract more customers, and drive better conversions. Stand out with content that's clear, compelling, and designed to sell.",
      bgColor: "white",
      textColor: "text-black",
      img: "/assets/img/services/amazon/4.png"
    },
    {
      title: "Amazon Seller Registration",
      description: "Avoid common pitfalls and fast-track your entry into the Amazon marketplace. Our experts guide you step-by-step through the seller registration process, ensuring your account is set up accurately and efficiently.",
      bgColor: "#d9f21d",
      textColor: "text-black",
      img: "/assets/img/services/amazon/5.png"
    },
    {
      title: "Amazon Boost Services",
      description: "Elevate your Amazon presence with our tailored boost strategies. From increasing visibility to accelerating sales, we design growth plans that align with your brand goals and market positioning.",
      bgColor: "white",
      textColor: "text-black",
      img: "/assets/img/services/amazon/6.png"
    },
    {
      title: "Amazon Reconciliation",
      description: "We help you stay financially sound by resolving inconsistencies in your payments, orders, and inventory. Our reconciliation services are designed to protect your bottom line and ensure accuracy.",
      bgColor: "#d9f21d",
      textColor: "text-black",
      img: "/assets/img/services/amazon/7.png"
    },
    {
      title: "Amazon advertising Services",
      description: "Reach your ideal audience and maximize your ROI with precision-targeted Amazon advertising. We handle everything from campaign setup to optimization, helping your brand get noticed and sell more.",
      bgColor: "white",
      textColor: "text-black",
      img: "/assets/img/services/amazon/8.png"
    },
    {
      title: "Amazon account management Services",
      description: "Let our experienced team manage your Amazon account from end to end—product listings, advertising, customer service, and compliance included. We take the stress out of selling.",
      bgColor: "#d9f21d",
      textColor: "text-black",
      img: "/assets/img/services/amazon/9.png"
    },
    {
      title: "Imaging (Product Photography)",
      description: "Make a lasting impression with professional product photography that highlights every detail. Our imaging services are crafted to showcase your products in the best light—literally and figuratively.",
      bgColor: "white",
      textColor: "text-black",
      img: "/assets/img/services/amazon/10.png"
    }
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
                <h3>What We Offer:</h3>
                <ul className="feature-list-item">
                  {importance?.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={bannerImg2} alt="Thumb" />
                </div>
              </div>
            </div>
            <div>
              <h2>How will it benefit you?</h2>
              <div style={{ marginTop: "40px" }}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".right",
                    prevEl: ".left",
                  }}
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
                  {images1.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                      <div className="p-3 bg-white rounded shadow-sm text-center">
                        <img
                          src={imgSrc.img}
                          alt={`Partner ${index}`}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                          }}
                        />
                        <p
                          className="text-black "
                          style={{ fontWeight: "bold", fontSize: "24px" }}
                        >
                          {imgSrc.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                    gap: "10px",
                  }}
                  className="project-four-nav"
                >
                  <div className="d-flex justify-content-center align-items-center gap-2 my-4">
                    <button className="left btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                      <i className="fas fa-chevron-left me-2 text-dark"></i>
                    </button>
                    <button className="right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                      <i className="fas fa-chevron-right ms-2 text-dark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-50 mt-xs-20">
              <h3 style={{fontSize: "2.5rem", marginBottom: "50px",textAlign:"center" }}>Our Amazon Services </h3>

              <div className="d-none d-lg-block">
                <div style={{ width: "100%", fontSize: "14px" }} className="d-flex flex-column flex-md-row gap-2">
                  <div style={{ width: "30%", padding: "10px", borderRadius: "10px", backgroundColor: "#d9f21d", color: "black" }} className="d-flex flex-column ">

                    <img
                      src="/assets/img/services/amazon/1.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Increase your Amazon business's growth
                    </h3>
                    <div>
                      Unlock the full potential of your Amazon store through strategic account management. Digirocket’s dedicated experts focus on scaling your business efficiently while ensuring consistent and sustainable sales growth.
                      We’ve been driving Amazon business growth for over 3 years, completing 150+ successful projects across various categories. Provided below are the services we offer:
                    </div>

                  </div>
                  <div style={{ width: "30%", padding: "10px", borderRadius: "10px", backgroundColor: "#d9f21d", color: "black" }} className="d-flex flex-column ">

                    <img
                      src="/assets/img/services/amazon/2.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Boost potential income
                    </h3>
                    <div>
                      Amplify your earnings on Amazon with our performance-driven approach. We help you enhance your conversion rates and streamline daily operations to boost overall profitability and long-term success.
                    </div>

                  </div>
                  <div style={{ width: "40%", padding: "10px", borderRadius: "10px", backgroundColor: "white", color: "black" }} className="d-flex flex-column ">
                    <img
                      src="/assets/img/services/amazon/3.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Comprehensive Assistance
                    </h3>
                    <div>
                      Our team of seasoned Amazon advisors and top-rated sellers provides hands-on support tailored to your business needs. From setup to scaling, we offer expert insights and end-to-end guidance.
                    </div>

                  </div>

                </div>

                <div style={{ width: "100%", fontSize: "14px" }} className="d-flex mt-2 flex-column flex-md-row gap-2">

                  <div style={{ width: "50%", padding: "10px", borderRadius: "10px", backgroundColor: "#d9f21d", color: "black" }} className="d-flex flex-column ">

                    <img
                      src="/assets/img/services/amazon/4.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Amazon Listing Services
                    </h3>
                    <div>
                      We create optimized, keyword-rich product listings that enhance visibility, attract more customers, and drive better conversions. Stand out with content that’s clear, compelling, and designed to sell.
                    </div>

                  </div>


                  <div style={{ width: "50%", padding: "10px", borderRadius: "10px", backgroundColor: "white", color: "black" }} className="d-flex flex-column ">

                    <div>
                      <img
                        src="/assets/img/services/amazon/5.png"
                        alt="Image Not Found"
                        style={{ width: "60px" }}
                      />
                      <h3 className="mt-4 text-black">
                        Amazon Seller Registration
                      </h3>
                      <div>
                        Avoid common pitfalls and fast-track your entry into the Amazon marketplace. Our experts guide you step-by-step through the seller registration process, ensuring your account is set up accurately and efficiently.
                      </div>
                    </div>
                  </div>

                </div>

                <div style={{ width: "100%", fontSize: "14px" }} className="d-flex mt-2 flex-column flex-md-row gap-2">

                  <div style={{ width: "50%", padding: "10px", borderRadius: "10px", backgroundColor: "white", color: "black" }} className="d-flex flex-column ">

                    <div>
                      <img
                        src="/assets/img/services/amazon/6.png"
                        alt="Image Not Found"
                        style={{ width: "60px" }}
                      />
                      <h3 className="mt-4 text-black">
                        Amazon Boost Services
                      </h3>
                      <div>
                        Elevate your Amazon presence with our tailored boost strategies. From increasing visibility to accelerating sales, we design growth plans that align with your brand goals and market positioning.
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "50%", padding: "10px", borderRadius: "10px", backgroundColor: "#d9f21d", color: "black" }} className="d-flex flex-column ">

                    <img
                      src="/assets/img/services/amazon/7.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Amazon Reconciliation
                    </h3>
                    <div>
                      We help you stay financially sound by resolving inconsistencies in your payments, orders, and inventory. Our reconciliation services are designed to protect your bottom line and ensure accuracy.
                    </div>

                  </div>




                </div>

                <div style={{ width: "100%", fontSize: "14px" }} className="d-flex mt-2 flex-column flex-md-row gap-2">
                  <div style={{ width: "30%", padding: "10px", borderRadius: "10px", backgroundColor: "#d9f21d", color: "black" }} className="d-flex flex-column ">

                    <img
                      src="/assets/img/services/amazon/8.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Amazon advertising Services
                    </h3>
                    <div>
                      Reach your ideal audience and maximize your ROI with precision-targeted Amazon advertising. We handle everything from campaign setup to optimization, helping your brand get noticed and sell more.
                    </div>

                  </div>
                  <div style={{ width: "30%", padding: "10px", borderRadius: "10px", backgroundColor: "#d9f21d", color: "black" }} className="d-flex flex-column ">

                    <img
                      src="/assets/img/services/amazon/9.png"
                      alt="Image Not Found"
                      style={{ width: "60px" }}
                    />
                    <h3 className="mt-4 text-black">
                      Amazon account management Services
                    </h3>
                    <div>
                      Let our experienced team manage your Amazon account from end to end—product listings, advertising, customer service, and compliance included. We take the stress out of selling.
                    </div>

                  </div>
                  <div style={{ width: "40%", padding: "10px", borderRadius: "10px", backgroundColor: "white", color: "black" }} className="d-flex flex-column ">

                    <div>
                      <img
                        src="/assets/img/services/amazon/10.png"
                        alt="Image Not Found"
                        style={{ width: "60px" }}
                      />
                      <h3 className="mt-4 text-black">
                        Imaging (Product Photography)
                      </h3>
                      <div>
                        Make a lasting impression with professional product photography that highlights every detail. Our imaging services are crafted to showcase your products in the best light—literally and figuratively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-block d-lg-none container-fluid py-5">
                <div className="container">
                  <div className="row g-3">
                    {services.map((service, index) => (
                      <div key={index} className="col-12 col-md-6">
                        <div
                          className="card h-100 border-0 shadow-sm"
                          style={{
                            backgroundColor: service.bgColor,
                            borderRadius: '10px',
                            fontSize: '14px'
                          }}
                        >
                          <div className="card-body p-3 d-flex flex-column">
                            <div className="mb-3">
                              <img
                                src={service.img}
                                alt="Service Icon"
                                style={{ width: '60px' }}
                                className="img-fluid"
                              />
                            </div>
                            <h3 className={`card-title fw-bold mb-3 ${service.textColor}`} style={{ fontSize: '18px' }}>
                              {service.title}
                            </h3>
                            <div className={`card-text ${service.textColor} flex-grow-1`}>
                              {service.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>



            <div className="mt-50 mt-xs-20">
              <h2 style={{fontSize: "2.5rem", marginBottom: "50px" }}>Our Process </h2>
              <div style={{ marginTop: "50px", width: "100%" }}>
                {[
                  {
                    id: 1,
                    title: "Market Research and Audience Insights ",
                    decription:
                      "We begin by researching your market, competitors, and target audience. This helps us gain insights into consumer behavior and preferences, allowing us to create a marketing strategy that resonates with the right people. Understanding these elements ensures we reach your audience with personalized messaging.",
                    img: "/assets/img/blog/1.jpg",
                  },
                  {
                    id: 2,
                    title: "SEO and Content Strategy ",
                    decription:
                      "We optimize your website with a comprehensive SEO strategy that focuses on improving visibility and rankings on search engines. Our content strategy includes keyword optimization, product descriptions, blog posts, and other content forms that engage and inform your potential ",
                    img: "/assets/img/blog/3.jpg",
                  },
                  {
                    id: 3,
                    title: "Paid Advertising Campaigns",
                    decription:
                      "We run paid campaigns across multiple platforms like Google Ads and Facebook to drive qualified traffic to your online store. These campaigns are carefully crafted to ensure maximum ROI by targeting the right demographics and using effective ad creatives. We monitor, adjust, and scale campaigns based on real-time performance.",
                    img: "/assets/img/blog/2.jpg",
                  },
                  {
                    id: 4,
                    title: "Performance Analysis and Optimization",
                    decription:
                      "Constant tracking and analysis of campaign performance help us make data-driven adjustments. By analyzing metrics such as conversion rates, customer behavior, and ROI, we refine strategies to continuously improve results. This ensures that your ecommerce marketing efforts are always aligned with your goals and deliver the best outcomes.",
                    img: "/assets/img/blog/4.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-100 d-flex flex-column flex-lg-row ${index % 2 !== 0 ? "flex-lg-row-reverse" : ""
                      }  mb-5`}
                  >
                    {/* Image */}
                    <div className="w-100 w-lg-50 text-center p-2">
                      <img
                        src={item.img}
                        alt="Blog"
                        className="img-fluid "
                        style={{
                          maxWidth: "500px",
                          height: "550px",
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="w-100 w-lg-50 p-4 text-center"
                    >
                      <h2 className="post-title">
                        <Link to={`/blog-single-with-sidebar`}>
                          {item.title}
                        </Link>
                      </h2>
                      <p>{item.decription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            ></div>


            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            >
              {/* Image */}
              <div className="w-100 w-lg-50 text-center p-2">
                <img
                  src="/assets/img/blog/why.png"
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
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
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
          <div
            style={{ paddingBottom: "10px", paddingTop: "10px" }}
            className="mt-5"
          >
            <div className="card shadow bg-dark text-white">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div
                  style={{
                    height: "100%",

                    width: "40%",
                  }}
                  className="formImageDiv"
                >
                  <img
                    src="/assets/img/services/contact_us.jpg"
                    alt="Business professional"
                    className="h-100 w-100 object-cover object-top"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="formcontent p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    HELP US UNDERSTAND YOUR NEEDS
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label text-white">Name</label>
                      <input
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark text-white"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="form-control bg-dark text-white"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        className="form-control bg-dark text-white"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">
                        Descibe your query .
                      </label>
                      <textarea
                        name="additional"
                        placeholder="Describe your query "
                        className="form-control bg-dark text-white"
                        style={{ height: "120px" }}
                        value={formData.additional}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn mx-auto btn-outline-success fw-bold px-3 py-2"
                        style={{
                          color: "black",
                          borderColor: "white",
                        }}
                      >
                        {loading ? "Loading" : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceMarketingContent;
