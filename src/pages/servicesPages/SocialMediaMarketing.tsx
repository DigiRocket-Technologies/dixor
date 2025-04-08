import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";

const LocalSeo = () => {
    const data = ServicesV1Data.find(service => service.id === "social-media-marketing");
    const pricing=pricingInfo.find((service)=>service.serviceId==="social-media-marketing")
    return (
        <>
            <Helmet>
                <title>Social Media Marketing | DigiRocket Technologies</title>
            </Helmet>
            
            <LayoutV1Light>
                <Breadcrumb title='Social Media Marketing' breadCrumb='Social Media Marketing' LightMode={true} />
                {data && <ServiceDetailsContentLight2 serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
            </LayoutV1Light>
        </>
    );
};

export default LocalSeo;