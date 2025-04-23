import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

import DarkClass from "../../components/classes/DarkClass";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | DigiRocket</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Terms and Conditions"
          breadCrumb="Terms and Conditions"
        />
        <div style={{ padding: "50px 20px" }} className="container">
          <h2 className="">Messaging Terms & Conditions</h2>
          <p>
            You agree to receive informational messages (appointment reminders,
            account notifications, etc.) from DigiRocket Technologies.Message
            frequency varies.
            <br /> Message and data rates may apply.
            <br /> For help, reply HELP or email us at info@digirockett.com.
            <br />
            You can opt out at any time by replying STOP.
          </p>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Terms;
