import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import AIContent from "../../components/services/AIContent";

const AI = () => {

    const data = ServicesV1Data.find(service => service.id === "artificial-intelligence");
    const pricing=pricingInfo.find((service)=>service.serviceId==="artificial-intelligence")
    return (
        <>
            <Helmet>
                <title>Artificial Intelligence | DigiRocket Technologies</title>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Artificial Intelligence' breadCrumb='Artificial Intelligence' LightMode={false} />
                {data &&  <AIContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default AI;