import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
// import thumb15 from "/assets/img/thumb/15.jpg";
// import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import banner6 from "/assets/img/banner/6.jpg";
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

  return (
    <>
      <Helmet>
        <title>Drop Shipping | DigiRocket Technologies</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Drop Shipping"
          breadCrumb="Drop Shipping"
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
            <p style={{fontSize:"20px"}}>
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
          style={{marginTop:"100px"}}
          className={`blog-area home-blog blog-style-two-area  bottom-less `}
        >
          {" "}
          <div className="container">
            <h2 className="text-center">Our Dropshipping Service Encompasses</h2>
            {/* <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-30">
                <div className="home-blog-two">
                  <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/`}>
                      <img
                        style={{height:"400px"}}
                        src={`/assets/img/blog/4.jpg`}
                        alt="Image Not Found"
                      
                      />
                    </Link>
                    <div className="date">1</div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="meta">
                        <h3>Winning Product Research</h3>
                        <p>
                          We analyze trending products, search volume,
                          competition, and cost-per-click to find a niche that
                          has high demand and long-term growth potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-30">
                <div className="home-blog-two">
                  <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/`}>
                      <img
                        style={{height:"400px"}}
                        src={`/assets/img/blog/4.jpg`}
                        alt="Image Not Found"
                        
                      />
                    </Link>
                    <div className="date">2</div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="meta">
                        <h3 style={{ fontSize: "25px" }}>
                          Supplier Sourcing & Logistics
                        </h3>
                        <p>
                          We connect you with reliable suppliers from the U.S.
                          and duty-free regions to ensure faster shipping times,
                          superior product quality, and better customer
                          satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 mb-30">
                <div className="home-blog-two">
                  <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/`}>
                      <img
                        style={{height:"400px"}}
                        src={`/assets/img/blog/4.jpg`}
                        alt="Image Not Found"
                      />
                    </Link>
                    <div className="date">1</div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="meta">
                        <h3 >Winning Product Research</h3>
                        <p>
                          We analyze trending products, search volume,
                          competition, and cost-per-click to find a niche that
                          has high demand and long-term growth potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-30">
                <div className="home-blog-two">
                  <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/`}>
                      <img
                      style={{height:"400px"}}
                        src={`/assets/img/blog/4.jpg`}
                        alt="Image Not Found"
                        
                      />
                    </Link>
                    <div className="date">2</div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="meta">
                        <h3>Winning Product Research</h3>
                        <p>
                          We analyze trending products, search volume,
                          competition, and cost-per-click to find a niche that
                          has high demand and long-term growth potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 mb-30">
                <div className="home-blog-two">
                  <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/`}>
                      <img
                        src={`/assets/img/blog/4.jpg`}
                        alt="Image Not Found"
                        style={{height:"400px"}}
                      />
                    </Link>
                    <div className="date">1</div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="meta">
                        <h3 style={{ fontSize: "25px" }}>
                          Branding & Positioning:
                        </h3>
                        <p>
                          We help you create a unique brand identity, from logo
                          creation to product packaging.
                          We help you create a unique brand identity, from logo
                          creation to product packaging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-30">
                <div className="home-blog-two">
                  <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/`}>
                      <img
                        src={`/assets/img/blog/4.jpg`}
                        alt="Image Not Found"
                        style={{height:"400px"}}
                      />
                    </Link>
                    <div className="date">2</div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="meta">
                        <h3 style={{ fontSize: "25px" }}>
                          Data-Driven Marketing Strategy
                        </h3>
                        <p>
                          We don’t just build stores; we drive sales. Our expert
                          team develops targeted ad campaigns, SEO strategies,
                          and email marketing plans to scale your business
                          profitably.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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
        </div>

        {/* <div
          className={`partner-style-two-area default-padding overflow-hidden blurry-shape-right`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-110 pr-md-15 pr-xs-15">
                <div className="partner-two-thumb">
                  <img style={{height:"400px"}} src={thumb15} alt="Image Not Found" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="brand-style-two-items">
                  <h2 className="title pt-4">
                    <SplitText
                      delay={100}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                      Our Trusted Partner.
                    </SplitText>
                  </h2>
                  <p>
                    Perceived determine departure explained no forfeite. Give
                    lady of they such they sure it. Me contained explained my
                    education. Vulgar as hearts by garret. Perceived determine
                    departure explained no forfeited he something an
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* {data && <ServiceDetailsContentLight2 serviceInfo={data} pricing={pricing} sectionClass='default-padding' />} */}
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Dropshipping;
