import { Helmet } from "react-helmet-async";
import AboutV1 from "../../components/about/AboutV1";
import BannerV1 from "../../components/banner/BannerV1";
import BlogV2 from "../../components/blog/BlogV2";
import BrandV1 from "../../components/brand/BrandV1";
import DarkClass from "../../components/classes/DarkClass";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV1 from "../../components/header/HeaderV1";
import MultiSection from "../../components/multi/MultiSection";
import PriceV2 from "../../components/price/PriceV2";
import ProjectV2 from "../../components/project/ProjectV2";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV3 from "../../components/team/TeamV3";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import BrandV2 from "../../components/brand/BrandV2";

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
                <AboutV1 />
                <ServicesV1 sectionClass='default-padding bg-gray' hasTitle={true} />
                <ProjectV2 />
                <PriceV2 />
                <TestimonialV1 />
                <TeamV3 sectionClass='bg-gray' hasTitle={true} />
                <MultiSection />
                <BlogV2 sectionClass='bg-gray' />
                <FooterV3 />
                <DarkClass />
            </div>
        </>
    );
};

export default dt;