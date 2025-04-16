import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import WooCommerceContent from "../../components/services/WooCommerceContent";
import DarkClass from "../../components/classes/DarkClass";

const Woocommerce = () => {
    const data = ServicesV1Data.find(service => service.id === "woocommerce-development");
    const pricing=pricingInfo.find((service)=>service.serviceId==="woocommerce-development")

    return (
        <>
            <Helmet>
                <title>Woo Commerce Development | DigiRocket Technologies</title>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Woo Commerce Development' breadCrumb='Woo Commerce Development' LightMode={false} />
                {data && <WooCommerceContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default Woocommerce;