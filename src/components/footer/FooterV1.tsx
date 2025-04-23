import { Link } from "react-router-dom";
// import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from "../social/FooterSocial";
import logoLight from "/assets/img/logo-light.png";
import logo from "/assets/img/logo.png";

interface DataType {
  sectionClass?: string;
  lightMode?: boolean;
}

const FooterV1 = ({ sectionClass, lightMode }: DataType) => {
  return (
    <>
      <footer className={`${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="f-items">
            <div className="row">
              <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                <div className="top">
                  {lightMode ? (
                    <img src={logo} alt="Image Not Found" />
                  ) : (
                    <img src={logoLight} alt="Image Not Found" />
                  )}
                </div>
                <ul className="address-list">
                  <li>
                    <h4>United States</h4>
                    <p>8 The Green, St#4522, Dover, Delaware 19901</p>
                  </li>
                  <li>
                    <h4>India</h4>
                    <p>
                      Unit No. 259, Tower B1, SPAZE ITECH PARK, Sector 49,
                      Gurugram
                    </p>
                  </li>
                  {/* <li>
                                        <h4>United Kingdom</h4>
                                        <p>
                                            71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
                                        </p>
                                    </li> */}
                </ul>
                <ul>
                  <li style={{width:'70%',marginTop:"10px"}}>
                                        <h4>United Kingdom</h4>
                                        <p>
                                            71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
                                        </p>
                                    </li>
                </ul>
              </div>
              <div className="col-lg-5 offset-lg-1 footer-item">
                <h4 className="widget-title">Useful Link</h4>
                <ul className="useful-link">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">FAQS</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Term & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Help Desk</Link>
                  </li>
                </ul>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <a href="mailto:info@digirocket.io">info@digirocket.io</a>
                    </li>
                    <li>
                      <a href="tel:+18156886366">+1 815 688 6366</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="footer-social">
                  <FooterSocial />
                </ul>
              </div>
              <div className="col-lg-6 text-end">
                <p>
                  Copyright &copy; {new Date().getFullYear()} DigiRocket
                  Technologies. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
