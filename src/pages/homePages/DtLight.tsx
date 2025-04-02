import HeaderV1 from '../../components/header/HeaderV1';
import BannerV1 from '../../components/banner/BannerV1';
import BrandV1 from '../../components/brand/BrandV1';
import AboutV1 from '../../components/about/AboutV1';
import ServicesV1Light from '../../components/services/ServicesV1Light';
import ProjectV2Light from '../../components/project/ProjectV2Light';
import PriceV2 from '../../components/price/PriceV2';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import TeamV3 from '../../components/team/TeamV3';
import MultiSectionLight from '../../components/multi/MultiSectionLight';
import BlogV2 from '../../components/blog/BlogV2';
import FooterV3 from '../../components/footer/FooterV3';
import { Helmet } from 'react-helmet-async';
import BannerV4 from '../../components/banner/BannerV4';
import BannerV3 from '../../components/banner/BannerV3';
import BannerV2 from '../../components/banner/BannerV2';
import BannerV6 from '../../components/banner/BannerV6';
import BannerV7 from '../../components/banner/BannerV7';
import BannerV8 from '../../components/banner/BannerV8';
import BannerV9 from '../../components/banner/BannerV9';
import BannerV10Light from '../../components/banner/BannerV10Light';
import BrandV2 from '../../components/brand/BrandV2';

import ServicesV2 from '../../components/services/ServicesV2';

import ServicesV3Light from '../../components/services/ServicesV3Light';
import ServicesV4 from '../../components/services/ServicesV4';
import ServicesV5 from '../../components/services/ServicesV5';
import ServicesV6 from '../../components/services/ServicesV6';
import ProjectV1Light from '../../components/project/ProjectV1Light';
import PriceV1 from '../../components/price/PriceV1';
import PriceV3 from '../../components/price/PriceV3';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TestimonialV3 from '../../components/testimonial/TestimonialV3';
import TeamV1 from '../../components/team/TeamV1';
import TeamV2 from '../../components/team/TeamV2';

const Home9Light = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 9 Light</title>
            </Helmet>

            <HeaderV1 lightMode={true} />
            <p>Banner 1</p>
            <BannerV1 lightMode={true} />
            <p>Banner 2</p>
            <BannerV2 />
            <p>Banner 3</p>
            <BannerV3 />
            <p>Banner 4</p>
            <BannerV4 />
            <p>Banner 6</p>
            <BannerV6 />
            <p>Banner 7</p>
            <BannerV7 lightMode={true} />
            <p>Banner 8</p>
            <BannerV8 lightMode={true} />
            <p>Banner 9</p>
            <BannerV9 lightMode={true} />
            <p>Banner 10</p>
            <BannerV10Light />

            <BrandV1 />
            <BrandV2 />


          
           <p>Focus/service 1</p>
            <ServicesV1Light sectionClass='default-padding bg-gray' hasTitle={true} />
            <p>Focus/service 2</p>
             <ServicesV2/>
             <p>Focus/service 3</p>
             <ServicesV3Light/>
             <p>Focus/service 4</p>
             <ServicesV4/>
             <p>Focus/service 5</p>
             <ServicesV5/>
             <p>Focus/service 6</p>
             <ServicesV6/>

             <p>Project v1</p>
            <ProjectV1Light/>
            <p>Project v2</p>
            <ProjectV2Light />

            <PriceV1 />
            <PriceV2 />
            <PriceV3 />

            <TestimonialV1 />
            <TestimonialV2 />
            <TestimonialV3 />


            <TeamV1 sectionClass='bg-dark' hasTitle={true} />
            <TeamV2 />
            <TeamV3 sectionClass='bg-dark' hasTitle={true} />

            <MultiSectionLight />
            <BlogV2 sectionClass='bg-gray' />
            <AboutV1 lightMode={true} />
            <FooterV3 />
        </>
    );
};

export default Home9Light;