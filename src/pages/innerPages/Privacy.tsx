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
        <Breadcrumb title="Privacy Policy" breadCrumb="Privacy Policy" />
        <div style={{ padding: "50px 20px" }} className="container">
          {/* <h2 className="">Messaging Privacy Policy</h2>
          <p>
            No mobile information will be shared with any third
            parties/affiliates for marketing/promotional purposes.
            <br /> All other categories exclude text messaging originator opt-in
            data and consent; this information will not be shared with or
            obtained by any third parties.
            <br /> f you wish to be removed from receiving future
            communications, you can opt out at any time by texting STOP or
            contacting us at info@digirockett.com.
          </p> */}
          <h2>Privacy Policy</h2>
          <p>
            At Digirocket Technologies, your privacy matters to us. This
            document outlines how we collect, use, and protect any information
            you share while interacting with our website: digirocket.io. By
            visiting or using our website, you’re agreeing to the terms laid out
            in this policy
          </p>
          <h2>Information We Collect</h2>
          When you browse our site, we may collect certain personal and
          non-personal details such as your IP address, browser type, operating
          system, the pages you view, how long you stay on each page, and how
          you found our site.
          <p>
            {" "}
            We also use cookies and similar technologies, in partnership with
            third-party services, to better understand user behavior and for
            marketing purposes. If you submit information through our
            website—like a contact form or newsletter sign-up—we may keep that
            data and use it to connect with you in the future about services,
            offers, or updates to our privacy practices.
          </p>
          <h2>How We Use Your Data</h2>
          <p>
            The information we gather helps us improve our services, website,
            and customer experience. We may also use your details to:
          </p>
          <ul style={{marginTop:"10px",paddingLeft:"20px"}} className="mb-2">
            <li className="listitem">Answer your inquiries</li>
            <li className="listitem">Share relevant updates</li>
            <li className="listitem">Offer tailored products or services</li>{" "}
            <li className="listitem">Support our marketing and advertising strategies</li>
          </ul>
          <p>All usage is done with your privacy in mind.</p>
          <h2>Keeping Your Information Safe</h2>
          <p>
            We take appropriate security steps to safeguard your data, both when
            it’s sent to us and once it’s stored. Our practices are designed to
            prevent unauthorized access, disclosure, or tampering with your
            personal information.
          </p>
          <h2>Cookies & Tracking</h2>
          <p>
            To improve your experience, our website may place cookies—small
            files stored by your browser—to remember certain actions or
            preferences. You can choose to disable cookies via your browser
            settings, but note that some features of our website might not
            function properly without them.
            <br />
            Cookies do not store any personal information by themselves.
          </p>
          <h2>Sharing Information</h2>
          <p>
            We do not sell or rent your personal information. However, we may
            share general, non-personal insights (like usage trends) with our
            partners or advertisers.
            <br /> In some cases, we may share your data with third-party
            services that work with us to deliver certain features or fulfill
            requests—but only when necessary, and with appropriate safeguards in
            place.
            <br /> We may also share information if legally required to do so or
            if we believe such action is necessary to protect our website,
            users, or legal rights.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our website may include links to third-party sites. These external
            websites have their own privacy rules and terms. Once you leave our
            site, we are not responsible for how those other sites handle your
            data.{" "}
          </p>
          <h2>Policy Updates</h2>
          <p>
            We may revise this Privacy Policy from time to time. When we do,
            we’ll update the revision date at the bottom of this page. We
            encourage you to review the policy regularly so you stay informed
            about how we’re protecting your information.
          </p>
          <h2>Your Agreement</h2>
          <p>
            By using digirocket.io, you agree to this Privacy Policy. If you
            don’t agree, we recommend not using the site. Your continued use
            after any changes to this policy will be considered your acceptance
            of those changes.
            <br />
            If you have any questions or concerns, feel free to reach out at
            info@digirocket.io.
          </p>
          <p><span style={{fontWeight:"bold"}}>Last updated</span>: 25/04/25</p>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Privacy;
