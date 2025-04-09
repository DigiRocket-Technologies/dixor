import twitter from "/assets/img/icon/twitter.png"
import { Link } from "react-router-dom";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link to="https://www.facebook.com/digirockett" target='_blank'><i className="fab fa-facebook-f" /></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/company/digirockett/" target='_blank'><i className="fab fa-linkedin-in" /></Link>
            </li>
            <li>
                <Link to="https://x.com/digirockett/" target='_blank'><img src={twitter} alt="Image Not Found" /></Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/digirocket.io/" target='_blank'><i className="fab fa-instagram" /></Link>
            </li>
        </>
    );
};

export default FooterSocial;