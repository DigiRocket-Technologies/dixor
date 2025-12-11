import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

import SplitText from "../../components/animation/SplitText.jsx";
import TeamV2Data from "../../../src/assets/jsonData/team/TeamNew.json";

import { Swiper, SwiperSlide } from "swiper/react";

import SingleTeamV2 from "../../components/team/SingleTeamV2.js";
import thumb3 from "/assets/img/about/who-we-are.png";
import { Keyboard } from "swiper/modules";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import WhyChooseV3 from "../../components/whyChoose/WhyChooseV3.js";
import MostPopularServices from "../../components/services/MostPopularServices.js";
import Countries from "../../components/clients/countries.js";
import CertificateSlider from "../../components/certifications/CertificateSlider.js";
import { Link } from "react-router-dom";

// import SocialShareNew from "../../components/social/SocialShareNew.js";



const AboutUsPage2 = () => {
  // const [selectedIndustry, setSelectedIndustry] = useState("Textile Printing");
  // const industryData: Record<
  //   string,
  //   {
  //     activeUsers: string;
  //     sessions: string;
  //     eventCount: string;
  //     clicks: string;
  //     impressions: string;
  //   }
  // > = {
  //   "Textile Printing": {
  //     activeUsers: "205%",
  //     sessions: "159%",
  //     eventCount: "1.8 M",
  //     clicks: "53.7 K",
  //     impressions: "2.85 M",
  //   },
  //   "Food & Beverage": {
  //     activeUsers: "187%",
  //     sessions: "142%",
  //     eventCount: "2.3 M",
  //     clicks: "48.2 K",
  //     impressions: "3.12 M",
  //   },
  //   "Health & Safety": {
  //     activeUsers: "231%",
  //     sessions: "178%",
  //     eventCount: "1.5 M",
  //     clicks: "62.4 K",
  //     impressions: "2.41 M",
  //   },
  //   Clothing: {
  //     activeUsers: "193%",
  //     sessions: "151%",
  //     eventCount: "2.1 M",
  //     clicks: "57.8 K",
  //     impressions: "3.05 M",
  //   },
  //   Technologies: {
  //     activeUsers: "247%",
  //     sessions: "183%",
  //     eventCount: "2.7 M",
  //     clicks: "71.3 K",
  //     impressions: "4.22 M",
  //   },
  //   // ...
  // };

  // const currentStats = industryData[selectedIndustry];

  const b2sValues = [
    {
      title: "CLIENT CENTRIC INNOVATION",
      desc: "Client-centric innovation means every idea, feature, and solution starts with your goals, not ours. By understanding your business, strategies, and systems are designed to solve real-world challenges, not just tick boxes. The focus is on blending data, creativity, and technology to deliver measurable results that keep you ahead of the curve.",
      image: "/assets/img/b2S/client centric innovation.png"
    },
    {
      title: "OWNERSHIP CULTURE",
      desc: "Ownership culture means every member of the team treats your project as their own responsibility, not just another assignment. Each decision is made with long-term outcomes in mind, focusing on impact, not activity. This mindset builds trust, speeds up problem-solving, and ensures that commitments are followed through with real accountability.",
      image: "/assets/img/b2S/Ownership culture.png"
    },
    {
      title: "TRANSPARENCY & INTEGRITY",
      desc: "We believe trust is built through open communication and honest actions. Every decision we make reflects our commitment to doing what’s right. With clear processes and accountable practices, we ensure you always know where we stand. ",
      image: "/assets/img/b2S/Transparency and integrity.png"
    },
    {
      title: "HUMILITY",
      desc: "Humility keeps the team grounded, no matter how complex the project or how big the result. It means listening first, questioning assumptions, and staying open to better ideas wherever they come from. This mindset helps build genuine collaboration with clients and colleagues, turning every engagement into a learning opportunity and a shared win.",
      image: "/assets/img/b2S/humility.png"
    },
    {
      title: "COLLABORATE TO ELEVATE",
      desc: "Together, we achieve more than we ever could alone. Innovation grows when ideas, skills, and perspectives come together. At DigiRocket, teamwork fuels progress, and progress fuels success.",
      image: "/assets/img/b2S/collaborate to elevate.png"
    },
    {
      title: "EMPATHY & RESPECT",
      desc: "We value people first, listening with care and understanding every perspective. Each voice matters, and every idea is welcomed with openness and dignity. By treating one another with kindness, we create a culture where everyone can thrive",
      image: "/assets/img/b2S/Empathy and Respect.png"
    }
  ];


  const certifications = [
    {
      id: 1,
      imgsrc: "/assets/img/partner/certifications/iso/itsm.png",
      title: "Information Technology Service Management",
      pdfUrl: "/assets/pdf/iso/itsm.pdf"
    },
    {
      id: 2,
      title: "Quality Management System",
      imgsrc: "/assets/img/partner/certifications/iso/qms.png",
      pdfUrl: "/assets/pdf/iso/qms.pdf"

    },
    {
      id: 3,
      title: "Information Security Management System",
      imgsrc: "/assets/img/partner/certifications/iso/isms.png",
      pdfUrl: "/assets/pdf/iso/isms.pdf"
    }
  ];


  return (
    <>
      <Helmet>
        <title> About Us | DigiRocket </title>
        <meta name="description" content="DigiRocket Technologies is a passionate team of designers, strategists, and experts committed to helping startups become recognized brands for their business solutions."></meta>
        {/* <meta
          title="About DigiRocket Technologies | Transforming Startups into Brands"
          content="DigiRocket Technologies is a passionate team of designers, strategists, and experts committed to helping startups become recognized brands for their business solutions."
        ></meta> */}
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="About DigiRocket" breadCrumb="About" />
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
                      track record of working with 300+ clients, we have become
                      a trusted partner in turning visions into powerful brands.
                    </p>
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
        <div className="container">
          <CertificateSlider />
        </div>
        <div className="container my-5">
          {/* Section Header */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">Our ISO Certifications</h2>
            </div>
          </div>


          {/* Certifications Grid */}
          <div className="row g-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="col-lg-4 col-md-6">
                <div>
                  <img src={cert.imgsrc} alt="" />
                </div>

                <div className="text-center mt-2 fs-4">
                  {cert.title}
                </div>

                <div className="d-flex flex-row justify-content-center  mt-2">
                  <a href={cert?.pdfUrl}>
                    <button className="pdfButton">View Pdf</button>
                  </a>
                </div>
                {/* <div className="card h-100 shadow-sm border-0 certification-card"
                  style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  }}>

                  <div className="card-header bg-light border-0 text-center py-4">
                    <img
                      src={cert.badgeUrl}
                      alt={`${cert.title} Badge`}
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <h5 className="card-title fw-bold text-dark mb-1">{cert.title}</h5>
                    <p className="text-muted small mb-0">{cert.organization}</p>
                  </div>

     
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      <small className="text-muted d-block">
                        <i className="bi bi-calendar3 me-1"></i>
                        Earned: {cert.date}
                      </small>
                      <small className="text-muted d-block">
                        <i className="bi bi-award me-1"></i>
                        ID: {cert.credentialId}
                      </small>
                    </div>

                    <p className="card-text text-muted small flex-grow-1">
                      {cert.description.length > 100
                        ? `${cert.description.substring(0, 100)}...`
                        : cert.description}
                    </p>

                
                    <div className="mb-3">
                      {cert.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="badge bg-primary bg-opacity-10 text-primary me-1 mb-1 small">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="badge bg-secondary bg-opacity-10 text-secondary small">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>

          
                    <div className="mt-auto">
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => openModal(cert)}
                        >
                          <i className="bi bi-eye me-1"></i>
                          View Details
                        </button>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <i className="bi bi-patch-check me-1"></i>
                          Verify Credential
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */ }
              </div>
            ))}
          </div>
        </div>

        <AboutV6 sectionClass="bg-gray" />
        <div style={{ marginTop: "50px" }}>
          <h2 className="text-center">B2S Values</h2>
          <div className="container">
            <div className={`portfolio-style-three-area `}>
              {b2sValues?.map((item, idx) => {
                return (<div key={idx} className="portfolio-style-three-item" style={{ backgroundColor: "#212121" }}>
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={item?.image}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                      }}
                      className="col-lg-5"
                    >
                      <h2 className="b2stext">
                        <Link to="">
                          <strong style={{ marginLeft: "0", color: "#c9f21d" }}>{item?.title}</strong>
                        </Link>
                      </h2>
                      <p style={{ font: "30px" }}>
                        {item?.desc}
                      </p>
                    </div>
                  </div>
                </div>)
              })}

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 ">
              <div className="site-heading text-center pt-4">
                <h3 className="split-text " style={{textTransform: "none", fontSize: "2.5rem"}}>
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
                    Meet Our Brains
                  </SplitText>
                </h3>
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
                  {TeamV2Data.slice(0, 2).map((team) => (
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
                  <h3 className="split-text" style={{textTransform: "none", fontSize: "2.5rem"}}>
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
                  </h3>
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
                    {TeamV2Data.slice(2, 4).map((team) => (
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
            <h2 className="text-center">Our Team</h2>
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
                    <h4>{item?.name}</h4>
                    <span>{item?.designation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* <div
          style={{ marginTop: "60px", paddingBottom: "30px" }}
          className="container"
        >
          <div className="container-fluid p-0">
            <div className="row g-0" style={{ minHeight: "70vh" }}>
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
                          borderBottom: `1px solid ${selectedIndustry === industry
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6  d-flex flex-column">
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
        </div> */}

        <WhyChooseV3 />

        <div className="container">
          <Countries />

          <MostPopularServices />
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default AboutUsPage2;
