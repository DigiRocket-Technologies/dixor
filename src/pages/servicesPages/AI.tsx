import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";

const AI = () => {

    const data = ServicesV1Data.find(service => service.id === "artificial-intelligence");
    const pricing=pricingInfo.find((service)=>service.serviceId==="artificial-intelligence")
    return (
        <>
            <Helmet>
                <title>Artificial Intelligence | DigiRocket Technologies</title>
            </Helmet>
            
            <LayoutV1Light>
                <Breadcrumb title='Artificial Intelligence' breadCrumb='Artificial Intelligence' LightMode={true} />
                {data &&  <ServiceDetailsContentLight2 serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
            </LayoutV1Light>
        </>
    );
};

export default AI;