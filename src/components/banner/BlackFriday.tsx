import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx";
import bg from "../../assets/image/newFridaybg.png";
import mobileBg from "../../assets/image/mobileImgbg.png";
import "../../assets/css/blackFriday.css";

interface DataType {
  lightMode?: boolean;
}

const BlackFriday = ({ lightMode }: DataType) => {
  const [backgroundImage, setBackgroundImage] = useState(bg);

  useEffect(() => {
    // function to set background depending on screen width
    const updateBackground = () => {
      if (window.innerWidth < 500) {
        setBackgroundImage(mobileBg);
      } else {
        setBackgroundImage(bg);
      }
    };

    updateBackground(); // run on mount
    window.addEventListener("resize", updateBackground); // run on resize

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <>
      <div
        className="banner-style-eight-area bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="blackfriday-offer-text">
          <p className="offer-subtitle">
            <SplitText
              className="title-left split-text"
              delay={150}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{
                opacity: 1,
                transform: "translate3d(0,0,0)",
              }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            >
              SPECIAL OFFER
            </SplitText>
          </p>

          <h1 className="offer-heading offset-lg-2">
            BLACK{" "}
            <span>
              <SplitText
                className="title-left split-text"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{
                  opacity: 1,
                  transform: "translate3d(0,0,0)",
                }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              >
                FRIDAY SALE
              </SplitText>
            </span>
          </h1>

          <Link to="/contact-us">
            <div className="offer-badge">50% OFF ON ALL SERVICES</div>
          </Link>

          <p className="offer-description">
            JOIN DIGIROCKET FROM NOVEMBER 28–30 AND ENJOY <br />
            <span>50% OFF</span> YOUR FIRST MONTH ON EVERY SERVICE.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlackFriday;
