import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import WordpressContent from "../../components/services/WordpressContent";
import DarkClass from "../../components/classes/DarkClass";

const Wordpress = () => {
    const data = ServicesV1Data.find(service => service.id === "wordpress-development");
    const pricing=pricingInfo.find((service)=>service.serviceId==="wordpress-development")

    return (
        <>
            <Helmet>
                <title>Wordpress Development | DigiRocket Technologies</title>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Wordpress Development' breadCrumb='Wordpress Development' LightMode={false} />
                {data && <WordpressContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default Wordpress;