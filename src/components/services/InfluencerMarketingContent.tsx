import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
import MostPopularServices from "./MostPopularServices.tsx";
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
      title: "Strategic Influencer Selection",
      description:
        "We research and handpick influencers who align perfectly with your brand, audience, and objectives.",
    },
    {
      id: 2,
      title: "Tailored Campaign Design",
      description:
        "We craft influencer campaigns that speak directly to your audience, ensuring maximum engagement and impact.",
    },

    {
      id: 3,
      title: "End-to-End Management",
      description:
        "From negotiating terms to overseeing content creation, we manage every detail to ensure seamless execution.",
    },
    {
      id: 4,
      title: "Creative Collaboration",
      description:
        "We work closely with influencers to create authentic, compelling content that resonates with their audience and drives results.",
    },
    {
      id: 5,
      title: "Data-Driven Optimization",
      description:
        "We continuously track performance, refining strategies based on real-time data to improve results as the campaign progresses.",
    },
    {
      id: 6,
      title: "Impactful Reporting",
      description:
        "We provide detailed performance reports, offering insights into campaign success and actionable recommendations for future efforts.",
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
                <h4>What We Offer:</h4>

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
                    title: "Nano Influencers",
                    description:
                      "Nano influencers typically have between 1k to 10k followers. Despite their smaller audience size, they often boast exceptionally high engagement rates and deeply loyal communities. Their recommendations feel more personal, making them ideal for hyper-targeted campaigns, local marketing, or niche-specific promotions. They are cost-effective, accessible, and more open to genuine brand collaborations.",
                    img: "/assets/img/blog/4.jpg",
                  },
                  {
                    id: 2,
                    title: "Micro Influencers",
                    description:
                      "Micro influencers usually have between 10k to 100k followers. They offer a sweet spot between reach and authenticity. Their audiences are still niche enough to feel personal but large enough to make an impact. These influencers often specialize in specific interests or industries, making them valuable for brands that want to tap into relevant and engaged communities. Micro influencers drive strong engagement, trust, and conversions. ",
                    img: "/assets/img/blog/4.jpg",
                  },
                  {
                    id: 3,
                    title: "Macro Influencers",
                    description:
                      "Macro influencers have between 100k to 1M  followers. They bring scale and visibility while still maintaining some level of audience connection. Most have built their following through consistent content creation, making them experienced and reliable partners. These influencers are ideal for brands aiming to increase awareness on a larger scale without losing all sense of relatability. Their content quality is usually high, and their audience spans diverse demographics. ",
                    img: "/assets/img/blog/4.jpg",
                  },
                  {
                    id: 4,
                    title: "Mega Influencers",
                    description:
                      "Mega influencers are creators or celebrities with over 1 million followers. They offer massive reach and brand exposure, often across global audiences. These influencers are ideal for large-scale brand awareness campaigns and product launches. Their influence can instantly boost visibility, drive social buzz, and elevate your brand’s status. While they come with higher costs, the potential impact is significant.",
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
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "50px" }}>
              <h2 className="">Why Influencer Marketing Works?</h2>
              {/* <p>
                By leveraging influencers' established relationships with their
                audience, brands can connect with potential customers in a more
                genuine and engaging way.
              </p> */}
              <div className="my-2">
                <h3 className="mb-1">Authentic Connections</h3>
                <p className="">
                  Influencers build relationships with their followers through
                  regular, relatable content. Because of this trust, their
                  product recommendations feel like advice from a friend rather
                  than a sales pitch. This authenticity leads to more meaningful
                  interactions and drives purchase decisions more effectively
                  than traditional advertising channels.
                </p>
              </div>
              <div className="my-2">
                <h3 className="mb-1">Targeted Reach</h3>
                <p>
                  Influencer marketing allows brands to connect with niche
                  audiences based on age, interests, location, and more. Instead
                  of casting a wide net, you can reach potential customers who
                  are genuinely interested in your product or service, making
                  every impression more valuable and significantly improving
                  conversion potential.
                </p>
              </div>
              <div className="my-2">
                <h3 className="mb-1">High Engagement Rates</h3>
                <p>
                  Influencer content typically garners more likes, shares,
                  comments, and saves compared to brand-generated posts. Their
                  ability to spark conversations and drive action helps boost
                  visibility and encourages users to interact, creating a ripple
                  effect of organic engagement that amplifies your brand
                  presence.
                </p>
              </div>
              <div className="my-2">
                <h3 className="mb-1">Cost-Effective ROI</h3>
                <p>
                  Influencer marketing is flexible and scalable. From micro to
                  macro influencers, brands can choose based on their goals and
                  budget. Many campaigns deliver impressive results at a
                  fraction of the cost of traditional media, offering better
                  returns, especially for targeted and smaller-scale efforts.
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
                        <img
                          src={`/assets/img/blog/4.jpg`}
                          className="card-img-top"
                          alt="Featured"
                          style={{ height: "550px", objectFit: "cover" }}
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
                  src="/assets/img/blog/why.png"
                  alt="Blog"
                  className="img-fluid"
                  style={{ maxWidth: "500px", height: "500px", width: "100%" }}
                />
              </div>
              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`/blog-single-with-sidebar`}>
                    What Makes Us Different?{" "}
                  </Link>
                </h2>
                <p>
                  {whyChooseP1}
                  {whyChooseP2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />
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
        </div>
      </div>
    </>
  );
};

export default InfluencerMarketingContent;
