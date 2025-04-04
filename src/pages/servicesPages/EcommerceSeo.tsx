import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";
import ServicesV1Data from "../../assets/jsonData/services/ServicesV1Data.json";
import { Helmet } from "react-helmet-async";

const EcommerceSeo = () => {
    const data = ServicesV1Data.find(service => service.id === 5);
    return (
        <>
            <Helmet>
                <title>Ecommerce-Seo</title>
            </Helmet>
            
            <LayoutV1Light>
                <Breadcrumb title='Our Services' breadCrumb='service-details-light' LightMode={true} />
                {data && <ServiceDetailsContentLight2 serviceInfo={data} sectionClass='default-padding' />}
            </LayoutV1Light>
        </>
    );
};

export default EcommerceSeo;