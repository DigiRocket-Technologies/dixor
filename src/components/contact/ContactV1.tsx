import { useEffect, useRef } from "react";
import ContactForm from "../form/ContactForm";
import SocialShareV2 from "../social/SocialShareV2";
import { useLocation } from "react-router-dom";

interface DataType {
  sectionClass?: string;
}

const ContactV1 = ({ sectionClass }: DataType) => {
  const location = useLocation()
  const contactFormRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ block: "start" });
    }
  }, [location]);

  return (
    <>
      <div
        className={`contact-area overflow-hidden relative ${sectionClass ? sectionClass : ""
          }`}
      >
        <div className="container">
          <div className="contact-style-one-items">
            <div className="row">
              <div className="col-tact-stye-one col-lg-4">
                <div className="contact-style-one-info">
                  <ul className="contact-address">
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className="fas fa-user-headset" style={{fontSize: "51px", color: "#98c906ff"}} />
                      <div>
                        <a className="phone-link" href="tel:+18156886366" style={{ marginRight: "10px" }}>
                          +1 815 688 6366
                        </a>
                        <br />
                        <a className="phone-link" href="tel:+919871196816" style={{ color: "green" }}>
                          +91 987 119 6816
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4>United States</h4>
                        <p>
                          8 The Green, St#4522 <br /> Dover, Delaware 19901
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4>India</h4>
                        <p>
                          9A, Tower B4, SPAZE ITECH PARK
                          <br /> Sector 49 Gurugram
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4>United Kingdom</h4>
                        <p>
                          71-75, Shelton Street, Covent Garden
                          <br /> London, WC2H 9JQ
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4>Email</h4>
                        <a href="mailto:info@digirocket.io">
                          info@digirocket.io
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <ul className="social-link">
                          <SocialShareV2 />
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                ref={contactFormRef}
                className="col-tact-stye-one col-lg-7 offset-lg-1"
              >
                <div className="contact-form-style-one">
                  <h4 className="sub-title">Have Questions?</h4>
                  <h2 className="title">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1;
