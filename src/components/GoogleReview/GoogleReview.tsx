"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import GravitPng from "../../assets/image/Profile-PNG-Photo (1).png";
import shannon from "../../assets/image/girlProfile1.png";
import Drake from "../../assets/image/girlProfile2.png";
import R1 from "../../assets/image/R1Profile.png";
import Mike from "../../assets/image/boyProfile1.png";
import saji from "../../assets/image/saji.jpg";

type Review = {
  name: string;
  rating: number;
  text: string;
  img: string;
};

const reviews: Review[] = [
  { name: "Garvit Sharma",       rating: 5, text: "We've had a great experience working with Digirocket. Their AI-powered marketing...",           img: GravitPng },
  { name: "Shynice Puddy",       rating: 5, text: "Sadarth was very helpful in reviewing my Shopify website and pin pointing the exact...",        img: shannon   },
  { name: "Shannon Drake",       rating: 4, text: "My website review with Sidharth was insightful and professional. Even though my budget will...", img: Drake     },
  { name: "Sonya Donleynutt",    rating: 5, text: "Exceptional Service and Expertise: A Stellar experience with DigiRocket Online Marketing...",   img: GravitPng },
  { name: "Regal Creations",     rating: 4, text: "Sid was absolutely amazing, he provided some great advise on how to improve my website...",     img: R1        },
  { name: "Mike Donaldson",      rating: 5, text: "I hired Digirocket to help me redesign my website and to improve my SEO. They have exc...",     img: Mike      },
  { name: "Saurabh Kumar Singh", rating: 5, text: "Recently i joined hands with digirocket technologies for social media management...",          img: saji      },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=digirocket+technologies#lrd=0x390d193264f549fb:0xc393a21c6500fe64,1";
const WHATSAPP_URL =
  "https://wa.me/919871196816?text=Hi%20I%20visited%20your%20website%20and%20want%20details";

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.532 5.865L.057 23.7a.5.5 0 00.623.609l6.099-1.595A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.951-1.354l-.356-.21-3.683.963.985-3.594-.232-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <span style={{ display: "inline-flex", gap: "1px" }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={i < count ? "#FBBC05" : "#e0e0e0"}
        xmlns="http://www.w3.org/2000/svg"
        style={i < count ? { filter: "drop-shadow(0 0 2px rgba(251,188,5,0.6))" } : undefined}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

const CSS = `
  @keyframes gr-pulseRing {
    0%   { transform: scale(1);   opacity: .65; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  @keyframes gr-float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-5px); }
  }
  @keyframes gr-fadeSlide {
    0%   { opacity: 0; transform: translateY(6px); }
    15%  { opacity: 1; transform: translateY(0); }
    85%  { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-4px); }
  }

  /* ── WhatsApp ── */
  .wa-btn {
    position: fixed;
    bottom: 40px;
    right: 83px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 4px 15px rgba(37,211,102,.45),
      0 1px 4px rgba(0,0,0,.2);
    z-index: 9999;
    text-decoration: none;
    animation: gr-float 3s ease-in-out infinite;
    transition: transform .2s, box-shadow .2s;
  }
  .wa-btn:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow:
      0 6px 22px rgba(37,211,102,.55),
      0 2px 8px rgba(0,0,0,.25);
    animation-play-state: paused;
  }
  .wa-ring {
    position: fixed;
    bottom: 40px;
    right: 83px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid rgba(37,211,102,.7);
    z-index: 9998;
    animation: gr-pulseRing 2s cubic-bezier(.215,.61,.355,1) infinite;
    pointer-events: none;
  }

  /* ── Review pill ── */
  .review-pill {
    position: fixed;
    bottom: 30px;
    right: 160px;
    width: min(90%, 380px);
    background: #ffffff;
    padding: 12px 18px 12px 12px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow:
      0 8px 25px rgba(0,0,0,0.25),
      0 2px 8px rgba(0,0,0,0.12),
      inset 0 1px 0 rgba(255,255,255,1);
    z-index: 9999;
    cursor: pointer;
    border: 2px solid rgba(154,205,50,0.8);
    animation: gr-float 3s ease-in-out infinite;
    animation-delay: 0.4s;
    transition: transform .2s, box-shadow .2s;
    text-decoration: none;
    overflow: hidden;
  }
  .review-pill::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(135deg, rgba(154,205,50,0.07) 0%, rgba(255,255,255,0) 60%);
    pointer-events: none;
  }
  .review-pill:hover {
    transform: scale(1.02) translateY(-2px);
    box-shadow:
      0 12px 32px rgba(0,0,0,0.22),
      0 3px 10px rgba(0,0,0,0.1);
    animation-play-state: paused;
  }

  .review-avatar-wrap {
    position: relative;
    flex-shrink: 0;
  }
  .review-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    border: 2.5px solid #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }
  .review-g-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  }

  .review-body {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    animation: gr-fadeSlide 9s ease-in-out infinite;
  }
  .review-top-row {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .review-name {
    margin: 0 !important;
    font-size: 14.5px !important;
    font-weight: 700 !important;
    color: #332a2a !important;
    white-space: nowrap !important;
    letter-spacing: -0.01em !important;
  }
  .review-text {
    margin: 0 !important;
    font-size: 12.5px !important;
    line-height: 1.35 !important;
    color: #2a2828 !important;
    font-weight: 500 !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    white-space: normal !important;
  }
  .review-source {
    font-size: 10px !important;
    color: #444444 !important;
    font-weight: 600 !important;
    letter-spacing: 0.01em !important;
    white-space: nowrap !important;
  }
`;

const GoogleReview = (): React.ReactElement | null => {
  const [index, setIndex] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const checkScreen = (): void => setIsMobile(window.innerWidth < 540);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 9000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  if (!mounted || isMobile) return null;

  const portalRoot =
    typeof document !== "undefined" ? document.getElementById("portal-root") : null;
  if (!portalRoot) return null;

  const review = reviews[index];

  return createPortal(
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ── Review pill ── */}
      <div
        className="review-pill"
        onClick={(): void => {
          void window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>): void => {
          if (e.key === "Enter" || e.key === " ") {
            void window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
          }
        }}
        title="View all Google Reviews"
        role="link"
        tabIndex={0}
        aria-label={`Google review by ${review.name}`}
      >
        {/* Avatar + Google badge */}
        <div className="review-avatar-wrap">
          <img
            src={review.img}
            alt={review.name}
            className="review-avatar"
          />
          <span className="review-g-badge">
            <GoogleIcon />
          </span>
        </div>

        {/* Text body */}
        <div className="review-body">
          <div className="review-top-row">
            <p className="review-name">{review.name}</p>
            <Stars count={review.rating} />
          </div>
          <p className="review-text">{review.text}</p>
        </div>
      </div>

      {/* ── WhatsApp ── */}
      <div className="wa-ring" aria-hidden="true" />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        title="Chat on WhatsApp"
        aria-label="Open WhatsApp chat"
      >
        <WhatsAppIcon />
      </a>
    </>,
    portalRoot
  );
};

export default GoogleReview;