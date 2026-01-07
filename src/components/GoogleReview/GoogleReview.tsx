import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { CSSProperties } from "react";

import GravitPng from "../../assets/image/Profile-PNG-Photo (1).png";
import shannon from "../../assets/image/girlProfile1.png";
import Drake from "../../assets/image/girlProfile2.png";
import R1 from "../../assets/image/R1Profile.png";
import Mike from "../../assets/image/boyProfile1.png";

type Review = {
  name: string;
  rating: string;
  text: string;
  img: string;
};

const reviews: Review[] = [
  {
    name: "Garvit Sharma",
    rating: "⭐⭐⭐⭐⭐",
    text: "We’ve had a great experience working with Digirocket. Their AI-powered marketing...",
    img: GravitPng,
  },
  {
    name: "Shynice Puddy",
    rating: "⭐⭐⭐⭐⭐",
    text: "Sadarth was very helpful in reviewing my Shopify website and pin pointing the exact...",
    img: shannon,
  },
  {
    name: "Shannon Drake",
    rating: "⭐⭐⭐⭐",
    text: "My website review with Sidharth was insightful and professional. Even though my budget will...",
    img: Drake,
  },
  {
    name: "Sonya Donleynutt",
    rating: "⭐⭐⭐⭐⭐",
    text: "Exceptional Service and Expertise: A Stellar Experience with DigiRocket Online Marketing...",
    img: GravitPng,
  },
  {
    name: "Regal Creations",
    rating: "⭐⭐⭐⭐",
    text: "Sid was absolutely amazing, he provided some great advise on how to improve my website...",
    img: R1,
  },
  {
    name: "Mike Donaldson",
    rating: "⭐⭐⭐⭐⭐",
    text: "I hired Digirocket to help me redesign my website and to improve my SEO. They have exc...",
    img: Mike,
  },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=digirocket+technologies#lrd=0x390d193264f549fb:0xc393a21c6500fe64,1";

const GoogleReview = () => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  if (!mounted || isMobile) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  const review = reviews[index];

  return createPortal(
    <div
      style={styles.container}
      onClick={() =>
        window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer")
      }
      title="View all Google Reviews"
    >
      <img src={review.img} alt={review.name} style={styles.avatar} />

      <div style={styles.content}>
        <p style={styles.name}>
          {review.name} {review.rating}
        </p>
        <p style={styles.comment}>{review.text}</p>
      </div>
    </div>,
    portalRoot
  );
};

export default GoogleReview;

const styles: {
  container: CSSProperties;
  avatar: CSSProperties;
  content: CSSProperties;
  name: CSSProperties;
  comment: CSSProperties;
} = {
  container: {
  position: "fixed",
  bottom: "36px",
  right: "90px",       
  left: "auto",
  transform: "none",
  width: "min(90%, 380px)",
  background: "#fff",
  padding: "12px 16px",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
  zIndex: 9999,
  cursor: "pointer",
  border: "2px solid yellowgreen"
},
  avatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    margin: 0,
    fontSize: "15px",
    fontWeight: 600,
    color: "#111",
  },
  comment: {
    margin: 0,
    fontSize: "13px",
    lineHeight: "1.3",
    color: "#444",
  },
};
