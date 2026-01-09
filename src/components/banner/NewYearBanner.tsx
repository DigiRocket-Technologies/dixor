import { useEffect, useState } from "react";
// import "../../assets/css/Christmas.css";
import bg from "../../assets/image/new-year-offer-banner.png";
import mobileBg from "../../assets/image/mobile-banner-new-year.png";


interface DataType {
    lightMode?: boolean;
}

const NewYearBanner = ({ lightMode }: DataType) => {
    const [backgroundImage, setBackgroundImage] = useState(bg);

    useEffect(() => {
        const updateBackground = () => {
            const isMobileLike =
                window.innerWidth < 768 ||
                window.innerHeight > window.innerWidth;

            setBackgroundImage(isMobileLike ? mobileBg : bg);
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
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

        </div>

    );
};

export default NewYearBanner;
