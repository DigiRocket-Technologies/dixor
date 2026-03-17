import illustration1 from "/assets/img/illustration/1.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import SplitText from "../animation/SplitText.jsx";
import { useEffect, useRef } from "react";

interface DataType {
  lightMode?: boolean;
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
}

interface Meteor {
  x: number;
  y: number;
  len: number;
  speed: number;
  alpha: number;
  active: boolean;
  timer: number;
  delay: number;
}

// ─── Particle + Meteor Canvas ─────────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log('h');
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // ── Particles ──
    const NUM = 120;
    const particles: Particle[] = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // ── Meteors ──
    const METEOR_COUNT = 6;
    const meteors: Meteor[] = Array.from({ length: METEOR_COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H * 0.4 - 50,
      len: Math.random() * 180 + 80,
      speed: Math.random() * 8 + 6,
      alpha: 0,
      active: false,
      timer: 0,
      delay: i * 90 + Math.random() * 120,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ── Draw particles ──
      for (let i = 0; i < NUM; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,220,255,${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < NUM; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(100,180,255,${0.12 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // ── Draw meteors ──
      meteors.forEach((m) => {
        m.timer++;
        if (m.timer < m.delay) return;

        if (!m.active) {
          m.active = true;
          m.x = Math.random() * W * 1.2;
          m.y = Math.random() * H * 0.3 - 50;
          m.alpha = 0;
          m.len = Math.random() * 180 + 80;
          m.speed = Math.random() * 9 + 7;
        }

        m.x -= m.speed * 0.7;
        m.y += m.speed * 0.5;

        if (m.alpha < 0.9) m.alpha += 0.06;

        if (m.x < -m.len || m.y > H * 0.75) {
          m.active = false;
          m.timer = 0;
          m.delay = Math.random() * 200 + 80;
          return;
        }

        ctx.save();
        ctx.globalAlpha = m.alpha * 0.75;

        // tail gradient
        const mg = ctx.createLinearGradient(
          m.x, m.y,
          m.x + m.len * 0.7, m.y - m.len * 0.5
        );
        mg.addColorStop(0, "rgba(255,255,255,0)");
        mg.addColorStop(0.3, "rgba(180,230,255,0.6)");
        mg.addColorStop(1, "rgba(79,248,210,0.9)");
        ctx.strokeStyle = mg;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#4ff8d2";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.len * 0.7, m.y - m.len * 0.5);
        ctx.stroke();

        // bright head dot
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.shadowBlur = 10;
        ctx.fill();

        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

// ─── Main Banner ───────────────────────────────────────────────────────────────
const BannerV8 = ({ lightMode }: DataType) => {
  console.log(lightMode);
  return (
    <>
      <style>{`
        .bv8-bg-wrapper {
          position: relative;
          overflow: hidden;
          background: #040608;
        }
        .bv8-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(79,248,210,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,248,210,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }
        .bv8-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .bv8-blob-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(79,248,210,0.12) 0%, transparent 70%);
          top: -120px; right: -100px;
          animation: blobFloat 8s ease-in-out infinite;
        }
        .bv8-blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(91,143,255,0.14) 0%, transparent 70%);
          bottom: -80px; left: 5%;
          animation: blobFloat 11s ease-in-out infinite reverse;
        }
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(30px, -30px) scale(1.08); }
        }
        .bv8-noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
          z-index: 0;
        }
        .bv8-content {
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="banner-style-eight-area bv8-bg-wrapper">

        {/* ── Animated Background Layers ── */}
        <ParticleField />
        <div className="bv8-grid-overlay" />
        <div className="bv8-blob bv8-blob-1" />
        <div className="bv8-blob bv8-blob-2" />
        <div className="bv8-noise" />

        {/* ── Original Content (unchanged) ── */}
        <div style={{paddingBottom:"70px"}} className="container bv8-content">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner-style-eight-heading">
                <div className="banner-title" style={{marginBottom: "-26px"}}>
                  <h1 className="bannerV8title">
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
                      BUILT TO SCALE
                    </SplitText>
                  </h1>

                  {/* <h2
                    className="title-right split-text"
                  >
                    <SplitText
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
                    
                    </SplitText>
                  </h2> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="thumb">
                <img src={illustration1} alt="Image Not Found" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7">
              <div className="d-grid">
                <h4>DigiRocket Technologies</h4>
                <div className="right">
                  <p>
                    As digital boundaries expand, DigiRocket Technologies stands
                    strong—your trusted partner in achieving lasting success in
                    a dynamic landscape.
                  </p>
                  <Link className="btn-animation mt-10" to="/about-us">
                    <i className="fas fa-arrow-right" /> <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1">
              <div style={{marginTop:"150px",paddingTop:"0",paddingBottom:"0"}} className="card-style-one">
                <div className="bottom" style={{gap:"0",justifyContent:"space-evenly"}}>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={450} enableScrollSpy />
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Completed Projects</span>
                  </div>
                  <Link to="/portfolio">
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV8;