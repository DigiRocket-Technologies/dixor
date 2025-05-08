import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import DarkClass from "../../components/classes/DarkClass";
import EcommerceSeoContent from "../../components/services/EcommerceSeoContent";

const EcommerceSeo = () => {
    const data = ServicesV1Data.find(service => service.id === "ecommerce-seo");
    const pricing=pricingInfo.find(service=>service.serviceId==="ecommerce-seo")

    

    return (
        <>
            <Helmet>
                <title>Ecommerce-Seo</title>
                <meta description="Hello World"/>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Ecommerce SEO' breadCrumb='Ecommerce SEO' LightMode={false} />
                {data && <EcommerceSeoContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default EcommerceSeo;
