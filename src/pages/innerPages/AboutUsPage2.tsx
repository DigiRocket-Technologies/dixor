import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

import SplitText from "../../components/animation/SplitText.jsx";
import TeamV2Data from "../../../src/assets/jsonData/team/TeamNew.json";

import { Swiper, SwiperSlide } from "swiper/react";

import SingleTeamV2 from "../../components/team/SingleTeamV2.js";
import thumb3 from "/assets/img/thumb/3.jpg";
import { Keyboard } from "swiper/modules";
// import { Link } from "react-router-dom";
import { useState } from "react";
// import SocialShareNew from "../../components/social/SocialShareNew.js";

const AboutUsPage2 = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Textile Printing");
  const industryData: Record<
    string,
    {
      activeUsers: string;
      sessions: string;
      eventCount: string;
      clicks: string;
      impressions: string;
    }
  > = {
    "Textile Printing": {
      activeUsers: "205%",
      sessions: "159%",
      eventCount: "1.8 M",
      clicks: "53.7 K",
      impressions: "2.85 M",
    },
    "Food & Beverage": {
      activeUsers: "187%",
      sessions: "142%",
      eventCount: "2.3 M",
      clicks: "48.2 K",
      impressions: "3.12 M",
    },
    "Health & Safety": {
      activeUsers: "231%",
      sessions: "178%",
      eventCount: "1.5 M",
      clicks: "62.4 K",
      impressions: "2.41 M",
    },
    Clothing: {
      activeUsers: "193%",
      sessions: "151%",
      eventCount: "2.1 M",
      clicks: "57.8 K",
      impressions: "3.05 M",
    },
    Technologies: {
      activeUsers: "247%",
      sessions: "183%",
      eventCount: "2.7 M",
      clicks: "71.3 K",
      impressions: "4.22 M",
    },
    // ...
  };
  const currentStats = industryData[selectedIndustry];
  return (
    <>
      <Helmet>
        <title>Dixor - About Us</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="About Company" breadCrumb="About" />
        <div className="py-5 bg-gray">
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
                    <h3 className="sub-title">Who We Are?</h3>
                    <p
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      With over three years of industry experience and a proven
                      track record of working with 200+ clients, we have become
                      a trusted partner in turning visions into powerful brands.
                    </p>
                    {/* <div
                      className="faq-style-one accordion mt-30"
                      id="faqAccordion"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Business Innovation
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Bennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Search Engine Optimization
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Cennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Thinking Differently
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Tennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <p>
                      If there were two words to describe us, it would be
                      “Pushing boundaries”. Not bound by traditional thinking or
                      restricted to conventional approaches, as a digital agency
                      we are innovators, creatives, and problem solvers
                      determined to forge our own path forward. Our relentless
                      pursuit of excellence has led us to create leading-edge
                      solutions that yield real results for our clients.
                    </p>
                    <p>
                      With an emphasis on innovation and creativity, We are
                      always looking for new ways to improve ourselves,
                      re-organize and grow anew in the arena of digital media.
                    </p>
                  </div>
                  {/* <div className="award-items">
                    <Animate className="animate__animated animate__fadeInLeft">
                      <div className="award-item">
                        <i className="fab fa-behance" />
                        <h4>Behance Awards </h4>
                      </div>
                    </Animate>

                    <Animate
                      className="animate__animated animate__fadeInLeft"
                      delay="100ms"
                    >
                      <div className="award-item">
                        <i className="fas fa-layer-group" />
                        <h4>Design Awards</h4>
                      </div>
                    </Animate>

                    <Animate
                      className="animate__animated animate__fadeInLeft"
                      delay="200ms"
                    >
                      <div className="award-item">
                        <i className="fab fa-laravel" />
                        <h4>Coding Awards</h4>
                      </div>
                    </Animate>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h2>Our Vision</h2>
          <div className="mt-4">
            Our vision is simple–to transform your Startup into a BRAND. At
            DigiRocket Technologies, we understand the struggle of building a
            brand from the ground up. Like many of our clients, our journey
            began as a dream fueled by passion, creativity, and determination.
            Through relentless hard work and innovative thinking, that dream
            evolved into a successful agency.{" "}
          </div>
        </div>
        <AboutV6 sectionClass="bg-gray" />
        {/* <MultiSection/> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 ">
              <div className="site-heading text-center pt-4">
                <h1 className="split-text">
                  <SplitText
                    delay={120}
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
                    The Visionaries
                  </SplitText>
                </h1>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: "20px" }} className="row">
            <div className="col-lg-12">
              <Swiper
                className="team-carousel swiper"
                direction="horizontal"
                loop={true}
                autoplay={false}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Keyboard]}
              >
                <div className="swiper-wrapper">
                  {TeamV2Data.map((team) => (
                    <SwiperSlide key={team.id}>
                      <SingleTeamV2 team={team} />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>

          <div style={{ paddingTop: "40px" }}>
            <div className="row">
              <div className="col-lg-8 offset-lg-2 ">
                <div className="site-heading text-center pt-4">
                  <h1 className="split-text">
                    <SplitText
                      delay={120}
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
                      The Leardership Personnel
                    </SplitText>
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }} className="row">
              <div className="col-lg-12">
                <Swiper
                  className="team-carousel swiper"
                  direction="horizontal"
                  loop={true}
                  autoplay={false}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Keyboard]}
                >
                  <div className="swiper-wrapper">
                    {TeamV2Data.slice(2).map((team) => (
                      <SwiperSlide key={team.id}>
                        <SingleTeamV2 team={team} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>

          <div style={{ padding: "40px 0px" }}>
            <h1 className="text-center">Key People</h1>
            <div
              className="team-grid"
              style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                justifyItems: "center",
              }}
            >
              {TeamV2Data.slice(4).map((item, idx) => (
                <div
                  key={idx}
                  className="team-style-one-item"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    textAlign: "center",
                  }}
                >
                  <div className="thumb">
                    <img
                      src={`/assets/img/team/${item.thumb}`}
                      alt="Image Not Found"
                      width={300}
                      height={315}
                      className="img-fluid"
                    />
                    {/* <div className="social-overlay">
                      <ul>
                        <SocialShareNew social={item.social}/>
                      </ul>
                      <div className="icon">
                        <i className="fas fa-plus" />
                      </div>
                    </div> */}
                  </div>
                  <div className="info mt-3">
                    <h4>Name</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "60px", paddingBottom: "30px" }}
          className="container"
        >
          {/* <div className="container-fluid bg-dark text-white min-vh-100 py-4 px-3">
            <div className="row h-100">
              
              <div className="col-md-5 d-flex flex-column justify-content-start bg-secondary text-white p-4 rounded-3">
                <h2 className="text-uppercase fw-bold mb-2">Industries</h2>
                <p className="fs-5 text-light mb-4">
                  Our expertise knows no industry boundaries.
                </p>
                <div className="list-group">
                  {Object.keys(industryData).map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2 ${
                        selectedIndustry === industry
                          ? "active border-success"
                          : "bg-dark text-light border border-secondary"
                      }`}
                    >
                      {industry}
                      <img
                        src="./Arrow 2.svg"
                        alt="arrow"
                        style={{ height: "18px" }}
                      />
                    </button>
                  ))}
                </div>
              </div>

            
              <div className="col-md-7 d-flex flex-column gap-3 mt-4 mt-md-0">
                <div className="bg-neon text-dark text-end p-4 rounded-3">
                  <p className="fs-4">Active Users</p>
                  <p className="fs-3 fw-bold">{currentStats.activeUsers}</p>
                </div>

                <div className="d-flex flex-column flex-md-row gap-3">
                  <div className="bg-dark text-neon text-end p-4 rounded-3 border border-neon w-100">
                    <p className="fs-5">Sessions</p>
                    <p className="fs-4 fw-bold text-white">
                      {currentStats.sessions}
                    </p>
                  </div>
                  <div className="bg-secondary text-neon text-end p-4 rounded-3 w-100">
                    <p className="fs-5">Event Count</p>
                    <p className="fs-4 fw-bold text-white">
                      {currentStats.eventCount}
                    </p>
                  </div>
                </div>

                <div className="bg-neon text-dark text-end p-4 rounded-3">
                  <p className="fs-4">Clicks</p>
                  <p className="fs-3 fw-bold">{currentStats.clicks}</p>
                </div>

                <div className="bg-dark text-neon text-end p-4 rounded-3 border border-neon">
                  <p className="fs-4">Impressions</p>
                  <p className="fs-3 fw-bold text-white">
                    {currentStats.impressions}
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="container-fluid p-0">
            <div className="row g-0" style={{ minHeight: "70vh" }}>
              {/* Left Column - Industries */}
              <div className="col-12 col-md-6 bg-dark h-100 d-flex flex-column">
                <div className="px-4 py-3 flex-grow-1">
                  <h2 className="fs-2 fw-bold mb-1">Industries</h2>
                  <p className="mb-3 fs-3">
                    Our expertise knows no industry boundaries.
                  </p>

                  <div className="d-flex flex-column gap-3">
                    {Object.keys(industryData).map((industry) => (
                      <div
                        key={industry}
                        className="d-flex justify-content-between align-items-center pb-2 cursor-pointer"
                        style={{
                          borderBottom: `1px solid ${
                            selectedIndustry === industry
                              ? "#C9F31D"
                              : "#D9D9D9"
                          }`,
                          color:
                            selectedIndustry === industry ? "white" : "#D9D9D9",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedIndustry(industry)}
                      >
                        <span className="fs-4">{industry}</span>
                        {/* <button
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      border: `1px solid ${selectedIndustry === industry ? "#C9F31D" : "#D9D9D9"}`,
                      color: selectedIndustry === industry ? "#C9F31D" : "#D9D9D9",
                      background: "transparent",
                    }}
                  >
                    <img src="./Arrow 2.svg" alt="" />
                  </button> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="col-12 col-md-6  d-flex flex-column">
                {/* Active Users */}
                <div
                  className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                  style={{ backgroundColor: "#C9F31D", height: "25%" }}
                >
                  <p style={{ color: "black" }} className="fs-4 mb-0">
                    Active Users
                  </p>
                  <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                    {currentStats.activeUsers}
                  </p>
                </div>

                {/* Sessions and Event Count */}
                <div className="d-flex flex-grow-1" style={{ height: "25%" }}>
                  <div
                    className="d-flex flex-column justify-content-end align-items-end p-2 text-end w-50"
                    style={{ backgroundColor: "white" }}
                  >
                    <p style={{ color: "black" }} className="fs-4 mb-0">
                      Sessions
                    </p>
                    <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                      {currentStats.sessions}
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-end align-items-end p-2 text-end w-50 bg-dark">
                    <p style={{ color: "#C9F31D" }} className="fs-4 mb-0">
                      Event Count
                    </p>
                    <p
                      className="fs-3 fw-bold mb-0"
                      style={{ color: "#C9F31D" }}
                    >
                      {currentStats.eventCount}
                    </p>
                  </div>
                </div>

                {/* Clicks */}
                <div
                  className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                  style={{ backgroundColor: "#C9F31D", height: "25%" }}
                >
                  <p style={{ color: "black" }} className="fs-4 mb-0">
                    Clicks
                  </p>
                  <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                    {currentStats.clicks}
                  </p>
                </div>

                {/* Impressions */}
                <div
                  className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                  style={{ backgroundColor: "white", height: "25%" }}
                >
                  <p style={{ color: "black" }} className="fs-4 mb-0">
                    Impressions
                  </p>
                  <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                    {currentStats.impressions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <TeamV1 sectionClass="bg-gray" hasTitle={true} /> */}
        {/* <WhyChooseV3 /> */}
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default AboutUsPage2;
