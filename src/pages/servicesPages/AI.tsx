import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";
import ServicesV1Data from "../../assets/jsonData/services/ServicesV1Data.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";

const AI = () => {
    const data = ServicesV1Data.find(service => service.id === "artificial-intelligence");
    const pricing=pricingInfo.find((service)=>service.serviceId==="artificial-intelligence")
    return (
        <>
            <Helmet>
                <title>Ecommerce-Seo</title>
            </Helmet>
            
            <LayoutV1Light>
                <Breadcrumb title='Our Services' breadCrumb='service-details-light' LightMode={true} />
                {data && <ServiceDetailsContentLight2 serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
            </LayoutV1Light>
        </>
    );
};

export default AI;