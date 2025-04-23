import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

import DarkClass from "../../components/classes/DarkClass";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DigiRocket</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Privacy Policy"
          breadCrumb="Privacy Policy"
        />
        <div style={{ padding: "50px 20px" }} className="container">
          <h2 className="">Messaging Privacy Policy</h2>
          <p>
            No mobile information will be shared with any third
            parties/affiliates for marketing/promotional purposes.
            <br /> All other categories exclude text messaging originator opt-in
            data and consent; this information will not be shared with or
            obtained by any third parties.
            <br /> f you wish to be removed from receiving future
            communications, you can opt out at any time by texting STOP or
            contacting us at info@digirockett.com.
          </p>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Privacy;
