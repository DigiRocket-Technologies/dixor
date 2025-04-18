import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
// import thumb15 from "/assets/img/thumb/15.jpg";
// import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import banner6 from "/assets/img/services/dropshipping.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import SplitText from "../../components/animation/SplitText.jsx";
// import { Link } from "react-router-dom";

import BannerV3Data from "../../../src/assets/jsonData/banner/BannerV3Data.json";
// import BannerV3ModalContent from "../../components/banner/BannerV3ModalContent.js";
import {
  Keyboard,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import SingleBannerV3 from "../../components/banner/SingleBannerV3.js";
import { useState } from "react";
import MostPopularServices from "../../components/services/MostPopularServices.js";
const Dropshipping = () => {
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
  // const data = ServicesV1Data.find((service) => service.id === "dropshipping");
  // const pricing = pricingInfo.find(
  //   (service) => service.serviceId === "dropshipping"
  // );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question1: "",
    question1Details: "",
    question2: "",
    question2Details: "",
    question3: "",
    question4: "",
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
      <Helmet>
        <title>Dropshipping | DigiRocket Technologies</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Dropshipping"
          breadCrumb="Dropshipping"
          LightMode={false}
        />
        <div style={{ width: "95%", margin: "auto" }} className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center">
              Access suppliers used by top sellers
            </h2>
            <p style={{ fontSize: "20px" }}>
              Dropshipping isn't all about selling products, it's about selling
              the right products that are sourced from reliable suppliers, with
              profit margins that make your business sustainable. When you pick
              DigiRocket, you are choosing an agency that will build you a
              profitable brand with data-backed strategies, high-quality
              suppliers, and expert marketing techniques.
            </p>
          </div>
        </div>
        <div
          style={{ marginTop: "100px" }}
          className={`blog-area home-blog blog-style-two-area  bottom-less `}
        >
          {" "}
          <div className="container">
            <h2 className="text-center">
              Our Dropshipping Service Encompasses
            </h2>
            <div className="row gx-1 mt-4 gy-4 mb-5">
              {cards.map((card) => (
                <div key={card.id} className="col-12 mb-3 col-md-6 col-lg-4">
                  <div className="card h-100 border">
                    <div className="position-relative">
                      <a href="/blog-single-with-sidebar/">
                        <img
                          src={`/assets/img/blog/4.jpg`}
                          className="card-img-top"
                          alt="Featured"
                          style={{ height: "460px", objectFit: "cover" }}
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
        </div>

        <div className="container">
          <h2 className="text-center">Start today with the best niche</h2>
          <div
            style={{ padding: "20px 0px" }}
            className="banner-style-three-area "
          >
            <Swiper
              className="banner-slide-counter"
              loop={true}
              grabCursor={true}
              mousewheel={true}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              pagination={{
                clickable: true,
                type: "fraction",
                el: ".banner-slide-pagination",
              }}
              navigation={{
                nextEl: ".banner-slide-button-next",
                prevEl: ".banner-slide-button-prev",
              }}
              breakpoints={{
                991: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
                1400: {
                  slidesPerView: 2.4,
                  spaceBetween: 80,
                },
              }}
              modules={[Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
            >
              <div className="swiper-wrapper">
                {BannerV3Data.map((banner) => (
                  <SwiperSlide key={banner.id}>
                    <SingleBannerV3 banner={banner} />
                  </SwiperSlide>
                ))}
              </div>

              <div className="banner-slide-button-prev" />
              <div className="banner-slide-button-next" />
            </Swiper>
          </div>
          <MostPopularServices />
          <div
            style={{ paddingBottom: "80px", paddingTop: "40px" }}
            className="mt-5"
          >
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
                    HELP US UNDERSTAND YOUR NEEDS WITH THESE QUESTIONS
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
                        Do you have a website?
                      </label>
                      <select
                        name="question1"
                        className="form-select bg-dark text-white"
                        value={formData.question1}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {formData.question1 === "Yes" && (
                        <input
                          type="url"
                          name="question1Details"
                          placeholder="Enter Website URL"
                          className="form-control bg-dark text-white mt-4"
                          value={formData.question1Details}
                          onChange={handleChange}
                        />
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Do you have a registered company?
                      </label>
                      <select
                        name="question2"
                        className="form-select bg-dark text-white"
                        value={formData.question2}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {formData.question2 === "Yes" && (
                        <input
                          type="text"
                          name="question2Details"
                          placeholder="Enter Company Name"
                          className="form-control bg-dark text-white mt-4"
                          value={formData.question2Details}
                          onChange={handleChange}
                        />
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Have you tried hands-on dropshipping?
                      </label>
                      <select
                        name="question3"
                        className="form-select bg-dark text-white"
                        value={formData.question3}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Do you want to pursue dropshipping as full-time or side
                        income?
                      </label>
                      <select
                        name="question4"
                        className="form-select bg-dark text-white"
                        value={formData.question4}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Full-time">Full-time</option>
                        <option value="Side Income">Side Income</option>
                      </select>
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
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          borderColor: "white",
                        }}
                      >
                        SUBMIT RESPONSES
                      </button>
                    </div>
                  </form>
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

export default Dropshipping;
