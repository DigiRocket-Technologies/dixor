import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"

const Wordpress = () => {
    const data = ServicesV1Data.find(service => service.id === "wordpress-development");
    const pricing=pricingInfo.find((service)=>service.serviceId==="wordpress-development")

    return (
        <>
            <Helmet>
                <title>Wordpress Development | DigiRocket Technologies</title>
            </Helmet>
            
            <LayoutV1Light>
                <Breadcrumb title='Wordpress Development' breadCrumb='Wordpress Development' LightMode={true} />
                {data && <ServiceDetailsContentLight2 serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
            </LayoutV1Light>
        </>
    );
};

export default Wordpress;