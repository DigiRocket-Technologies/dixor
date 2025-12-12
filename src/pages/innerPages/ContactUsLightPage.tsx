import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ContactMap from "../../components/map/ContactMap";

const ContactUsLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact DigiRocket Technologies | Speak with Our Experts</title>
                <link rel="canonical" href="https://digirocket.io/contact-us" />
                <meta name="description" content="Get in touch with DigiRocket Technologies to discuss your digital marketing needs. Reach us at info@digirocket.io or call +1 815 688 6366."></meta>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Get In Touch' breadCrumb='Contact Us' LightMode={true} />
                <ContactV1 sectionClass='default-padding-top' />
                <ContactMap />
            </LayoutV1Light>
        </>
    );
};

export default ContactUsLightPage;