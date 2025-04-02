import { Helmet } from "react-helmet-async";
import AboutV1 from "../../components/about/AboutV1";
import BannerV1 from "../../components/banner/BannerV1";
import BlogV2 from "../../components/blog/BlogV2";
import BrandV1 from "../../components/brand/BrandV1";
import DarkClass from "../../components/classes/DarkClass";
// import FooterV3 from "../../components/footer/FooterV3";
import HeaderV1 from "../../components/header/HeaderV1";
import MultiSection from "../../components/multi/MultiSection";
import PriceV2 from "../../components/price/PriceV2";
import ProjectV2 from "../../components/project/ProjectV2";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV3 from "../../components/team/TeamV3";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import BrandV2 from "../../components/brand/BrandV2";
// import FooterV4 from "../../components/footer/FooterV4";
// import FooterV2 from "../../components/footer/FooterV2";
// import FooterV1 from "../../components/footer/FooterV1";
import ServicesV2 from "../../components/services/ServicesV2";
import ServicesV3 from "../../components/services/ServicesV3";
import ServicesV4 from "../../components/services/ServicesV4";
import ServicesV5 from "../../components/services/ServicesV5";
import ServicesV6 from "../../components/services/ServicesV6";
import ClientsV1 from "../../components/clients/ClientsV1";
import PortfolioV1 from "../../components/portfolio/PortfolioV1";
import PortfolioV2 from "../../components/portfolio/PortfolioV2";
import PortfolioV3 from "../../components/portfolio/PortfolioV3";
import PortfolioV4 from "../../components/portfolio/PortfolioV4";
import PortfolioV5 from "../../components/portfolio/PortfolioV5";
import PortfolioV6 from "../../components/portfolio/PortfolioV6";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import ContactV1 from "../../components/contact/ContactV1";
import QuickContact from "../../components/contact/QuickContact";
import ProcessWrapper from "../../components/process/ProcessWrapper";
import AboutV2 from "../../components/about/AboutV2";
import AboutV3 from "../../components/about/AboutV3";
import AboutV4 from "../../components/about/AboutV4";
import AboutV5 from "../../components/about/AboutV5";
import AboutV6 from "../../components/about/AboutV6";
import AboutV7 from "../../components/about/AboutV7";

const dt = () => {
  return (
    <>
      <Helmet>
        <title>Dixor - Home 9</title>
      </Helmet>

      <div className="smooth-scroll-container">
        <HeaderV1 />
        <BannerV1 />
        <p>Brand v1</p>
        <BrandV1 />
        <p>Brand v2</p>
        <BrandV2 />
        <p>Focus 1</p>
        <ServicesV1 sectionClass="default-padding bg-gray" hasTitle={true} />
        <p>Focus 2</p>
        <ServicesV2 sectionClass="default-padding bg-gray" hasTitle={true} />
        <p>Focus 3</p>
        <ServicesV3 sectionClass="default-padding bg-gray" hasTitle={true} />
        <p>Focus 4</p>
        <ServicesV4 />
        <p>Focus 5</p>
        <ServicesV5 />
        <p>Focus 6</p>
        <ServicesV6 />
        <p>Client 1</p>
        <ClientsV1 sectionClass="bg-gray" />

        <p>Portfolio 1</p>
        <PortfolioV1 />
        <p>Portfolio 2</p>
        <PortfolioV2 />
        <p>Portfolio 3</p>
        <PortfolioV3 />
        <p>Portfolio 4</p>
        <PortfolioV4 />
        <p>Portfolio 5</p>
        <PortfolioV5 />
        <p>Portfolio 6</p>
        <PortfolioV6 />
        <p> Process </p>
        <ProcessWrapper />
        <p>Service 1</p>
        <ServicesV1/>
        <p>Service 2</p>
        <ServicesV2/>
        <p>Service 3</p>
        <ServicesV3/>
        <p>Service 4</p>
        <ServicesV4/>
        <p>Service 5</p>
        <ServicesV5/>
        <p>Service 6</p>
        <ServicesV6/>
        <p>Testimonial 1</p>
        <TestimonialV1 />
        <p>Testimonial 2</p>
        <TestimonialV2 />
        <p>Testimonial 3</p>
        <TestimonialV3 />
        <ProjectV2 />
        <PriceV2 />
        <TestimonialV1 />
        <TeamV3 sectionClass="bg-gray" hasTitle={true} />
        <MultiSection />
        <BlogV2 sectionClass="bg-gray" />
        <p>Contact 1</p>
        <ContactV1 />
        <p>Contact 2</p>
        <QuickContact />
        <p>About 1</p>
        <AboutV1 />
        <p>About 2</p>
        <AboutV2 />
        <p>About 3</p>
        <AboutV3 />
        <p>About 4</p>
        <AboutV4/>
        <p>About 5</p>
        <AboutV5 />
        <p>About 6</p>
        <AboutV6 />
        <p>About 7</p>
        <AboutV7/>
        {/* <FooterV3 />
        <FooterV4 />
        <FooterV2 />
        <FooterV1 /> */}
        <DarkClass />
      </div>
    </>
  );
};

export default dt;
