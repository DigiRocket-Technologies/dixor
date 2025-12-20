import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";
import "../../assets/css/administator.css";
import AdministatorLoginContent from './administatorLoginContent';

const AdministratorLogin = () => {
    return (
        <>
            <Helmet>
                <title>Admin Login | DigiRocket Technologies</title>
                <link rel="canonical" href="https://digirocket.io/admin" />
                <meta name="description" content="Secure admin login page for Digirocket Technologies to access the dashboard and manage users, content, settings, and website operations efficiently."></meta>
            </Helmet>
            <HeaderV1 />
            <AdministatorLoginContent />
            <DarkClass />
            <FooterV1 />
        </>
    );
};

export default AdministratorLogin;
