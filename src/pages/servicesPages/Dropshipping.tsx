import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import banner6 from "/assets/img/services/dropshipping.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerV3Data from "../../../src/assets/jsonData/banner/BannerV3Data.json";

import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(false);
  const cards = [
    {
      id: 1,
      title: "Winning Product Research",
      img: "/assets/img/services/winning product.jpg",
      description:
        "We analyze trending products, search volume, competition, and cost-per-click to find a niche that has high demand and long-term growth potential.",
    },
    {
      id: 2,
      title: "Supplier Sourcing & Logistics",
      img: "/assets/img/services/supplying.jpg",
      description:
        "We connect you with reliable suppliers from the U.S. and duty-free regions to ensure faster shipping times, superior product quality, and better customer satisfaction.",
    },
    {
      id: 3,
      title: "Custom Store & Website Development",
      img: "/assets/img/services/custom store.jpg",
      description:
        "We design and develop a high-converting online store tailored to your niche, ensuring a seamless user experience and optimized sales funnel.",
    },
    {
      id: 4,
      title: "Branding & Positioning",
      img: "/assets/img/services/branding.jpg",
      description:
        "We help you create a unique brand identity, from logo creation to product packaging",
    },
    {
      id: 5,
      title: "Data-Driven Marketing Strategy",
      img: "/assets/img/services/data driven.jpg",
      description:
        "We don’t just build stores; we drive sales. Our expert team develops targeted ad campaigns, SEO strategies, and email marketing plans to scale your business profitably.",
    },
    {
      id: 6,
      title: "Performance Tracking & Optimization",
      img: "/assets/img/services/performance.jpg",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/senddropshippingformmail`,
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
          question1: "",
          question1Details: "",
          question2: "",
          question2Details: "",
          question3: "",
          question4: "",
        });
        toast.success("Form Saved Successfully");
      } else throw new Error(data?.message);
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
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
        <div style={{ marginTop: "100px" }}>
          <div style={{ position: "relative" }} className="container">
            <h2 className="text-center">
              Our Dropshipping Service Encompasses
            </h2>
            <Swiper
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              navigation={{
                nextEl: ".dropshippingservice-next",
                prevEl: ".dropshippingservice-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1000: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Keyboard, Autoplay]}
            >
              <div className="swiper-wrapper">
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div
                      key={card.id}
                      style={{ minHeight: "650px", padding: "10px" }}
                    >
                      <div className="card h-100 border">
                        <div className="position-relative">
                          <img
                            src={
                              card?.img ? card.img : `/assets/img/blog/4.jpg`
                            }
                            className="card-img-top"
                            alt="Featured"
                            style={{ height: "460px", width: "100%" }}
                          />
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
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div
              style={{
                display: "flex",
                marginTop: "30px",
                top: "110%",
                left: "50%",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="dropshippingservice-prev left btn bg-white  border border-dark rounded-pill px-4 d-flex align-items-center">
                <i className="fas fa-chevron-left me-2 text-dark"></i>
              </button>
              <button className="dropshippingservice-next bg-white right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                <i className="fas fa-chevron-right ms-2 text-dark"></i>
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px" }} className="container">
          <h2 className="text-center">Start today with the best niche</h2>
          <div
            style={{ padding: "20px 0px" }}
            className="banner-style-three-area"
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
                {BannerV3Data.slice(0, 6).map((banner) => (
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
              <div className="row g-0" style={{ minHeight: "650px" }}>
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="col-md-5 col-lg-5  d-none d-md-block"
                >
                  <img
                    style={{ height: "80%", objectPosition: "center" }}
                    src="/assets/img/services/contact_us.jpg"
                    alt="Business professional"
                    className="w-100 object-fit-cover"
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
                        disabled={loading}
                        style={{
                          color: "black",
                         
                          borderColor: "white",
                        }}
                      >
                        {loading?"Loading":"Submit"}
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
