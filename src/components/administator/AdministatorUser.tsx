import DarkClass from "../classes/DarkClass";
import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";
import "../../assets/css/administator.css";
import AdministatorUserContent from "./AdministatorUserContent";

const AdministatorUser = () => {
    return (
        <>
            <HeaderV1 />
            <AdministatorUserContent />
            <FooterV1 />
            <DarkClass />
        </>
    );
}

export default AdministatorUser;
