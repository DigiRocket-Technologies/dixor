// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import MostPopularServices from "./MostPopularServices.tsx";
import { useState } from "react";

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

const WebApplicationContent = ({
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    otherWebsiteType: "",
    additional: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
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
              <h1 style={{ marginBottom: "50px" }}>
                Why do you need woocommerce?{" "}
              </h1>
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
              <h2 className="text-center">Benefits of using woocommerce</h2>
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
                <p>
                  {whyChooseP1}
                  {whyChooseP2}
                </p>
              </div>
            </div>
          </div>
        </div>
       
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
          <div className="mt-5">
            <div className="card shadow bg-dark text-white">
              <div className="row g-0" style={{ minHeight: "750px" }}>
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div className="col-md-5 col-lg-5 d-none d-md-block">
                  <img
                    src="/assets/img/blog/1.jpg"
                    alt="Business professional"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="col-md-7 col-lg-7 p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    LEARN HOW WE CAN ENHANCE THE EFFECTIVENESS OF YOUR
                 
                      E-COMMERCE PLATFORM'S DEVELOPMENT.
              
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark text-white"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email address *"
                          className="form-control bg-dark text-white"
                          
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <span className="alert-error" />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone no. *"
                          className="form-control bg-dark text-white"
                          
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <select
                        name="websiteType"
                        className="form-select bg-dark text-white"
                       
                        value={formData.websiteType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Website Type
                        </option>
                        <option value="eCommerce App">eCommerce App</option>
                        <option value="Blog App">Blog App</option>
                        <option value="Chat App">Chat App</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    {formData.websiteType === "Others" && (
                      <div className="mb-4">
                        <input
                          type="text"
                          name="otherWebsiteType"
                          placeholder="Specify Website Type"
                          className="form-control bg-dark text-white"
                         
                          value={formData.otherWebsiteType}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    <div className="mb-4">
                      <textarea
                        name="additional"
                        placeholder="Additional information"
                        className="form-control bg-dark text-white"
                        style={{
                          height: "120px",
                       
                        }}
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
                      className=""
                    >
                      <button
                        type="submit"
                        className="btn mx-auto btn-outline-success fw-bold px-3 py-2"
                        style={{ color: "black", backgroundColor:"white", borderColor: "white" }}
                      >
                        BOOK CONSULTATION
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

export default WebApplicationContent;
