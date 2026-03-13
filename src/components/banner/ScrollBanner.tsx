import '../../assets/css/scrollBanner.css';
import { Link } from 'react-router-dom';

import brand1 from "/assets/img/clients/eye911.png";
import brand2 from "/assets/img/clients/gourmet100.png";
import brand3 from "/assets/img/clients/ReHisk_png.png";
import brand4 from "/assets/img/clients/ladder101.png";
import brand5 from "/assets/img/clients/alamo100.png";
import brand6 from "/assets/img/clients/axyloza.png";
import brand7 from "/assets/img/clients/dtfnc101.png";
import brand8 from "/assets/img/clients/karsten.png";
import brand9 from "/assets/img/clients/candle.png";
import brand10 from "/assets/img/clients/brew.png";
import brand11 from "/assets/img/clients/drip2.png";
import brand12 from "/assets/img/clients/ch1.png";
import brand13 from "/assets/img/clients/Zoomies2.png";
import brand14 from "/assets/img/clients/biggerBra.png";
import brand15 from "/assets/img/clients/debra.png";
import brand16 from "/assets/img/clients/rug.png";
import brand17 from "/assets/img/clients/Arco.png";
import brand18 from "/assets/img/clients/mango.png";
import brand19 from "/assets/img/clients/jade.png";
import brand20 from "/assets/img/clients/evergreendog.png";
import brand21 from "/assets/img/clients/global.png";


const brands = [
  { link: "/case-study/chameleon-transfer", img: brand12, alt: "Chameleon Transfers" },
  { link: "/case-study/gourmetkitchenworks", img: brand2, alt: "Gourmet Kitchen Works" },
  { link: "/case-study/alamocitypopcorn", img: brand5, alt: "Alamo City Popcorn" },
  { link: "/case-study/axyloza", img: brand6, alt: "Axyloza" },
  { link: "/case-study/candlepearls", img: brand9, alt: "Candle Pearls" },
  { link: "/case-study/brewtheblend", img: brand10, alt: "Brew The Blend" },
  { link: "/case-study/debras-passion-boutique", img: brand15, alt: "Debras Passion Boutique" },
  { link: "/case-study/rug-resource", img: brand16, alt: "Rug Resource" },
  { link: "/case-study/mango-petals", img: brand18, alt: "Mango Petals" },
  { link: "/case-study/jade-jewels", img: brand19, alt: "Jade Jewels" },
  { link: "/case-study/evergreendog", img: brand20, alt: "Evergreen Dog" },
  { link: "/case-study/global-cable-wire", img: brand21, alt: "Global Cable Wire" },
  { link: "/case-study/just-bigger-bra", img: brand14, alt: "Bigger Bra", className: "card1 card--wide" },
  { link: "/case-study/arco-studio-home", img: brand17, alt: "Arco Studio Home", className: "card1 card--wide" },
  { link: "/case-study/eyecandybrownsalon", img: brand1, alt: "Eye Candy Brow Salon" },
  { link: "/case-study/zoomie-smart", img: brand13, alt: "Zoomie Smart", className: "card1 card--sm" },
  { link: "/case-study/rehisk", img: brand3, alt: "ReHisk" },
  { link: "/case-study/laddersafetyrails", img: brand4, alt: "Ladder Safety Rails" },
  { link: "/case-study/karsten-nursery", img: brand8, alt: "Karsten Nursery" },
  { link: "/case-study/dtfnc", img: brand7, alt: "DTFNC" },
  { link: "/case-study/dripnation", img: brand11, alt: "Drip Nation", className: "card1 card--sm" },
];


const ScrollBanner = () => {
  return (
    <div className="carousel">
      <div className="track">

        {/* First Group */}
        <div className="group">
          {brands.map((brand, index) => (
            <Link key={index} to={brand.link}>
              <img
                className={brand.className || "card1"}
                src={brand.img}
                alt={brand.alt}
              />
            </Link>
          ))}
        </div>

        {/* Duplicate Group for Infinite Scroll */}
        <div className="group">
          {brands.map((brand, index) => (
            <Link key={`dup-${index}`} to={brand.link}>
              <img
                className={brand.className || "card1"}
                src={brand.img}
                alt={brand.alt}
              />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScrollBanner;