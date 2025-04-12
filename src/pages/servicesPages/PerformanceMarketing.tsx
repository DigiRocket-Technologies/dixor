// import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import LayoutV1Light from "../../components/layouts/LayoutV1Light";
// import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";
// import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
// import { Helmet } from "react-helmet-async";
// import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"

// const PerformanceMarketing = () => {
//     const data = ServicesV1Data.find(service => service.id === "performance-marketing");
//     const pricing=pricingInfo.find((service)=>service.serviceId==="performance-marketing")

//     return (
//         <>
//             <Helmet>
//                 <title>Performace Marketing | DigiRocket Technologies</title>
//             </Helmet>

//             <LayoutV1Light>
//                 <Breadcrumb title='Performance Marketing' breadCrumb='Performance Marketing' LightMode={true} />
//                 {data && <ServiceDetailsContentLight2 serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
//             </LayoutV1Light>
//         </>
//     );
// };

// export default PerformanceMarketing;

import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";

import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServiceDetailsContent2 from "../../components/services/ServiceDetailsContent2";
import DarkClass from "../../components/classes/DarkClass";

const PerformanceMarketing = () => {
  const data = ServicesV1Data.find(
    (service) => service.id === "performance-marketing"
  );
  const pricing = pricingInfo.find(
    (service) => service.serviceId === "performance-marketing"
  );

  return (
    <>
      <Helmet>
        <title>Performace Marketing | DigiRocket Technologies</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Performance Marketing"
          breadCrumb="Performance Marketing"
        />
        {data && (
          <ServiceDetailsContent2
            serviceInfo={data}
            pricing={pricing}
            sectionClass="default-padding"
          />
        )}
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default PerformanceMarketing;
