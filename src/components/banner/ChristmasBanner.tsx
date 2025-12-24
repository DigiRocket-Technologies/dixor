import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SplitText from "../animation/SplitText.jsx";
import bg from "../../assets/image/Christmas2.png";
import mobileBg from "../../assets/image/mobileImgbg.png";
import ggpng from '../../assets/image/gg12.png';
import christmassale from '../../assets/image/christmassale.png';
import "../../assets/css/Christmas.css";

interface DataType {
  lightMode?: boolean;
}

const ChristmasBanner = ({ lightMode }: DataType) => {
  const [backgroundImage, setBackgroundImage] = useState(bg);

  useEffect(() => {
    console.log(lightMode);
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(mobileBg);
      } else {
        setBackgroundImage(bg);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div
      className="banner-style-eight-area bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="offer-container" style={{ marginTop: "-110px", height:"100vh" }}>
        <div className="leftContainerChrist">
          <img src={christmassale} className="christmassale" alt="Christmas Sale" />
        </div>

        <div className="offer-content">
          <h1 className="offer-title">
            <img className="ggpng" src={ggpng} alt="Sale" />
          </h1>
          <h2 className="offer-heading">
            Christmas Rocket Deal: UPTO 50% OFF Services!
          </h2>
          <p className="offer-text">
            Unlock massive savings on digital marketing, website design,
            dropshipping, and more. Transform your startup into a recognized
            powerhouse—limited time only!
          </p>
          <Link to="/contact-us">
            <span className="offer-button">Claim 50% OFF Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChristmasBanner;
