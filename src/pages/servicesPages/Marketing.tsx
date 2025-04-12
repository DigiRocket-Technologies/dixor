import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import banner6 from "/assets/img/banner/6.jpg";
import { Link } from "react-router-dom";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import thumb3 from "/assets/img/thumb/3.jpg";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, FreeMode } from "swiper/modules";
const Marketing = () => {
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
      <Helmet>
        <title>Dixor - Service Details Light</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Marketing"
          breadCrumb="Marketing"
          LightMode={false}
        />
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-50 mt-xs-20">
            <h1>The Future of Growth is Marketing </h1>
            <div className="row g-4 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3">
                  <div className="text-white  p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                    <img src={feature.icon} style={{ width: "60px" }} alt="" />
                    <h5 className="fw-bold mt-4">{feature.title}</h5>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Smart Marketing Starts with the Right Answers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minus
              eligendi, vel nisi eum saepe ea iste enim temporibus repellendus
              culpa, molestias nobis tempore? At sint consequuntur laborum porro
              saepe!
            </p>
            {/* <ul className="" style={{ paddingLeft: "15px" }} id="marketing">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
            </ul> */}
            <div className="process-style-two">
              <div className="process-style-two-item">
                <span>01</span>
                <h4>Project Research</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>02</span>
                <h4>Best Concept</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>03</span>
                <h4>Design Implement</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>04</span>
                <h4>Final Result</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>What we bring to the table .</h2>
            {/* <div className="process-style-two">
              <div className="process-style-two-item">
                <span>01</span>
                <h4>Project Research</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>02</span>
                <h4>Best Concept</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>03</span>
                <h4>Design Implement</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>04</span>
                <h4>Final Result</h4>
                <p>
                  Excuse Deal say over contain performance from comparison new
                  melancholy themselves.
                </p>
              </div>
            </div> */}

            <div
              style={{ marginTop: "50px" }}
              className={`portfolio-style-four-area `}
            >
              <div className="container no-gap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="project-style-four-items">
                      <Swiper
                        className="project-center-stage-carousel"
                        loop={true}
                        freeMode={true}
                        grabCursor={true}
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={30}
                        autoplay={false}
                        navigation={{
                          nextEl: ".project-center-button-next",
                          prevEl: ".project-center-button-prev",
                        }}
                        breakpoints={{
                          991: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            centeredSlides: false,
                          },
                          1200: {
                            slidesPerView: 2.5,
                            spaceBetween: 60,
                          },
                          1800: {
                            slidesPerView: 2.8,
                            spaceBetween: 80,
                          },
                        }}
                        modules={[Navigation, FreeMode, Keyboard]}
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/portfolio/39.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/local-seo`}>
                                    <h2>Local Seo</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/local-seo`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/portfolio/39.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/project-details/}`}>
                                    <h2>Ecommerce Seo</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/ecommerce-seo`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/portfolio/39.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/performance-marketing`}>
                                    <h2>Performance Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/performance-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/portfolio/39.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/social-media-marketing`}>
                                    <h2>Social Media Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/social-media-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/portfolio/39.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/influencer-marketing`}>
                                    <h2>Influencer Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/influencer-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/portfolio/39.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Hii"</span>
                                  <Link to={`/ecommerce-marketing`}>
                                    <h2>Ecommerce Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/ecommerce-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      {/* Navigation */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "200px",
                        }}
                        className="project-four-nav"
                      >
                        <div className="nav-items">
                          <div className="project-center-button-prev" />
                          <div className="project-center-button-next" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h2>Behind the Numbers: Our Work in Action</h2>
            <div className="container">
              <div className="row align-center">
                <div className="col-lg-5">
                  <div className="thumb-style-one">
                    <img src={thumb3} alt="Image Not Found" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="choose-us-style-one">
                    <div className="pl-80 pl-md-0 pl-xs-0">
                      <h2 className="title">Unlock Revenue Growth</h2>
                      <div>
                        We are dedicated to providing outstanding service and
                        helping our clients achieve their goals.We are dedicated
                        to providing outstanding service and helping our clients
                        achieve their goals. We are dedicated to providing
                        outstanding service and helping our clients achieve
                        their goals. We are dedicated to providing outstanding
                        service and helping our clients achieve their goals. We
                        are dedicated to providing outstanding service and
                        helping our clients achieve their goals. We are
                        dedicated to providing outstanding service and helping
                        our clients achieve their goals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-more mt-100 mt-xs-30">
            <h2 className="mb-20">Most popular services</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <img
                    src={`/assets/img/icon/24.png`}
                    alt="Image Not Found"
                    width={75}
                    height={60}
                  />
                  <h4>
                    <Link to={`/local-seo`}>Local Seo</Link>
                  </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium dolores optio quaerat est pariatur magni ipsam
                    tenetur, aspernatur deleniti. Ipsa.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <img
                    src={`/assets/img/icon/24.png`}
                    alt="Image Not Found"
                    width={75}
                    height={60}
                  />
                  <h4>
                    <Link to={`/ecommerce-seo`}>Ecommerce Seo</Link>
                  </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium dolores optio quaerat est pariatur magni ipsam
                    tenetur, aspernatur deleniti. Ipsa.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <img
                    src={`/assets/img/icon/24.png`}
                    alt="Image Not Found"
                    width={75}
                    height={60}
                  />
                  <h4>
                    <Link to={`/performance-marketing`}>
                      Performance Marketing
                    </Link>
                  </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium dolores optio quaerat est pariatur magni ipsam
                    tenetur, aspernatur deleniti. Ipsa.
                  </p>
                </div>
              </div>
              <TestimonialV2 />
            </div>
          </div>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Marketing;
