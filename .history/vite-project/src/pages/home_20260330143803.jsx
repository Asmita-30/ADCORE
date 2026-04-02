/**
 * ADRIX CORE — Full Website (Single Page)
 * Uses: Framer Motion, GSAP, Canvas particles
 * Video BG + Logo embedded as base64
 * Run with: npm install framer-motion gsap
 */

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import logo from "./assets/images/Adrixcore-removebg-preview.png";
import video from "./assets/images/Video Project.mp4";
import teamImage from "./assets/images/team.jpeg";
import codingImage from "./assets/images/coding.jpeg";

const LOGO_SRC = logo;
const VIDEO_SRC = video;
// place your Video_Project.mp4 in /public

// ─── THEME ─────────────────────────────────────────────────────────────────────
const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  violet: "#6d5cff",
  dark: "#020408",
  dark2: "#050a15",
};

// ─── PARTICLE CANVAS ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class P {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.4 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.op = Math.random() * 0.5 + 0.1;
        this.col = Math.random() > 0.5 ? "0,229,255" : "124,58,237";
        this.ph = Math.random() * Math.PI * 2;
      }
      tick() {
        this.x += this.vx; this.y += this.vy; this.ph += 0.015;
        const dx = this.x - mouse.current.x, dy = this.y - mouse.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) { this.x += dx / d * 0.6; this.y += dy / d * 0.6; }
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        const op = this.op * (0.6 + 0.4 * Math.sin(this.ph));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.col},${op})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 200; i++) particles.push(new P());

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0,229,255,0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 70) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 70) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${0.12 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.8);
      g.addColorStop(0, "rgba(0,20,50,0.95)");
      g.addColorStop(1, "rgba(2,4,8,0.99)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      drawGrid();
      particles.forEach(p => { p.tick(); p.draw(); });
      drawLines();
      if (mouse.current.x > 0) {
        const mg = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 180);
        mg.addColorStop(0, "rgba(0,229,255,0.06)");
        mg.addColorStop(1, "transparent");
        ctx.fillStyle = mg;
        ctx.fillRect(0, 0, W, H);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onMouse = e => { mouse.current.x = e.clientX; mouse.current.y = e.clientY; };
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", inset: 0, width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none",
      }}
    />
  );
}

// ─── ANIMATED ORBITAL RINGS ────────────────────────────────────────────────────
function OrbitalRings({ size = 420 }) {
  const r1 = useRef(), r2 = useRef(), r3 = useRef();

  useEffect(() => {
    gsap.to(r1.current, { rotation: 360, duration: 4, ease: "none", repeat: -1 });
    gsap.to(r2.current, { rotation: -360, duration: 7, ease: "none", repeat: -1 });
    gsap.to(r3.current, { rotation: 360, duration: 3, ease: "none", repeat: -1 });
  }, []);

  const s = size;
  const c = s / 2;
  const r = [c * 0.97, c * 0.84, c * 0.7];

  const RingArc = ({ radius, color, dashLen, total, gapFactor, forwardRef }) => (
    <g ref={forwardRef} style={{ transformOrigin: `${c}px ${c}px` }}>
      <circle cx={c} cy={c} r={radius} fill="none"
        stroke={color} strokeWidth="2.5"
        strokeDasharray={`${dashLen} ${total - dashLen}`}
        filter="url(#glow)" />
      <circle cx={c} cy={c} r={radius} fill="none"
        stroke={color} strokeWidth="0.6"
        strokeDasharray={`5 ${gapFactor}`} opacity="0.3" />
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${s} ${s}`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <RingArc radius={r[0]} color={C.cyan} dashLen={280} total={r[0] * 2 * Math.PI} gapFactor={40} forwardRef={r1} />
      <RingArc radius={r[1]} color={C.purple} dashLen={200} total={r[1] * 2 * Math.PI} gapFactor={50} forwardRef={r2} />
      <RingArc radius={r[2]} color={C.pink} dashLen={150} total={r[2] * 2 * Math.PI} gapFactor={60} forwardRef={r3} />
    </svg>
  );
}

// ─── HERO SECTION (Only Video, No Rings) ─────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const logoY = useTransform(scrollY, [0, 300], [0, -80]);
  const searchOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const videoRef = useRef();
  const [search, setSearch] = useState("");

  const suggestions = ["Web App Development", "Mobile App", "AI Integration", "UI/UX Design", "SaaS Platform"];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 2, padding: "6rem 2rem 2rem",
      overflow: "hidden",
    }}>
      {/* Video BG */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay muted loop playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg,rgba(2,4,8,0.85) 0%,rgba(5,10,30,0.75) 50%,rgba(2,4,8,0.9) 100%)"
        }} />
      </div>

      {/* Logo Arena - Only Video, No Outer Rings */}
      <motion.div
        style={{ opacity: logoOpacity, y: logoY, position: "relative", zIndex: 5, marginBottom: "2.5rem" }}
      >
        <div style={{
          position: "relative",
          width: 420,
          height: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {/* ONLY CENTER VIDEO - NO RINGS */}
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
              opacity: 0.95,
              filter: "brightness(1.2) contrast(1.1) saturate(1.1)",
              zIndex: 2,
              boxShadow: "0 0 80px rgba(0,229,255,0.6), 0 0 150px rgba(0,229,255,0.4)",
              border: "2px solid rgba(0,229,255,0.8)"
            }}
          />

          {/* LEFT: ADRIX */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              position: "absolute", right: "calc(100% + 24px)", top: "50%", transform: "translateY(-50%)",
              textAlign: "right", whiteSpace: "nowrap",
            }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontWeight: 900, fontSize: "4rem", color: "#fff", letterSpacing: "0.04em" }}>
              ADRIX
            </div>
            {/* <div style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "0.65rem", color: "rgba(224,247,255,0.4)", letterSpacing: "0.2em", marginTop: 4 }}>
              WEB DEVELOPMENT
            </div> */}
          </motion.div>

          {/* RIGHT: CORE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              position: "absolute", left: "calc(100% + 24px)", top: "50%", transform: "translateY(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontWeight: 900, fontSize: "4rem", color: C.cyan, letterSpacing: "0.04em" }}>
              CORE
            </div>
            {/* <div style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "0.65rem", color: "rgba(224,247,255,0.4)", letterSpacing: "0.2em", marginTop: 4 }}>
              & APPS
            </div> */}
          </motion.div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        style={{ opacity: searchOpacity, position: "relative", zIndex: 5, width: "min(680px,90vw)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <div style={{ position: "relative" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="What can we build for you? Try 'web app', 'AI integration'..."
            style={{
              width: "100%",
              maxWidth: "900px",
              margin: "0 auto",
              background: "rgba(0,20,60,0.85)",
              border: "1px solid rgba(0,229,255,0.4)",
              borderRadius: 60,
              padding: "1.3rem 5rem 1.3rem 2rem",
              color: "#e0f7ff",
              fontSize: "1.1rem",
              fontFamily: "Rajdhani,sans-serif",
              outline: "none",
              backdropFilter: "blur(25px)",
              boxShadow: "0 0 40px rgba(0,229,255,0.15)",
              transition: "all 0.3s ease"
            }}
            onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 30px rgba(0,229,255,0.2)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.3)"; e.target.style.boxShadow = "none"; }}
          />
          <svg style={{ position: "absolute", right: "1.2rem", top: "50%", transform: "translateY(-50%)", color: C.cyan }} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
          {suggestions.map(s => (
            <motion.button
              key={s}
              onClick={() => setSearch(s)}
              whileHover={{ scale: 1.05, borderColor: C.cyan, color: C.cyan }}
              style={{
                background: "rgba(0,229,255,0.07)", border: "1px solid rgba(0,229,255,0.2)",
                borderRadius: 20, padding: "0.3rem 1rem",
                fontSize: "0.78rem", color: "rgba(224,247,255,0.6)",
                cursor: "pointer", fontFamily: "Rajdhani,sans-serif",
                transition: "all 0.2s",
              }}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        style={{ display: "flex", gap: "3rem", marginTop: "2rem", flexWrap: "wrap", justifyContent: "center", zIndex: 5 }}
      >
        {[["200+", "Projects Delivered"], ["98%", "Client Satisfaction"], ["24/7", "Support"], ["3+", "Years Exp"]].map(([v, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 900, background: `linear-gradient(135deg,${C.cyan},${C.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(224,247,255,0.45)", marginTop: 4, letterSpacing: "0.07em" }}>{l}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ position: "absolute", bottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "rgba(224,247,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.15em", zIndex: 5 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: C.cyan }}>
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}
// ─── ABOUT SECTION ─────────────────────────────────────────────────────────
// Import your local images


function About() {
  const sectionRef = useRef();
  
  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll(".about-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ position: "relative", zIndex: 5, padding: "100px 2rem", background: "rgba(0,5,15,0.3)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-animate" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "0.8rem" }}>✦ ABOUT US</div>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Innovation Meets Execution
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div className="about-animate" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.8)", marginBottom: "1.5rem" }}>
              Adrix Core is a cutting-edge digital agency specializing in web development, mobile apps, and AI integration. 
              We blend creativity with technology to deliver exceptional digital experiences that drive business growth.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(224,247,255,0.6)", marginBottom: "2rem" }}>
              With a team of passionate developers, designers, and strategists, we've helped 200+ clients transform their ideas 
              into powerful digital solutions. Our approach combines technical excellence with creative innovation.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div><span style={{ color: C.cyan, fontSize: "1.5rem", fontWeight: 700 }}>200+</span><span style={{ color: "rgba(224,247,255,0.6)", marginLeft: "0.5rem" }}>Projects</span></div>
              <div><span style={{ color: C.cyan, fontSize: "1.5rem", fontWeight: 700 }}>98%</span><span style={{ color: "rgba(224,247,255,0.6)", marginLeft: "0.5rem" }}>Satisfaction</span></div>
              <div><span style={{ color: C.cyan, fontSize: "1.5rem", fontWeight: 700 }}>24/7</span><span style={{ color: "rgba(224,247,255,0.6)", marginLeft: "0.5rem" }}>Support</span></div>
            </div>
          </motion.div>
          <motion.div className="about-animate" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ position: "relative" }}>
            <div style={{ 
              position: "relative", 
              borderRadius: 20, 
              overflow: "hidden", 
              border: `1px solid ${C.cyan}`, 
              boxShadow: `0 0 40px rgba(0,229,255,0.2)`,
              height: "400px"
            }}>
              {/* Main Image - Using local image */}
              <img 
                src={teamImage}
                alt="Adrix Core Team" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  opacity: 0.85
                }} 
              />
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,0,0,0.4))" 
              }} />
              
              {/* Small floating image */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                overflow: "hidden",
                border: `2px solid ${C.cyan}`,
                boxShadow: "0 0 20px rgba(0,229,255,0.3)"
              }}>
                <img 
                  src={codingImage}
                  alt="Coding"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
const SERVICES = [
  { icon: "🌐", name: "Web App Development", desc: "Full-stack React & Spring Boot", color: C.cyan, pos: "top" },
  { icon: "📱", name: "Mobile App", desc: "React Native cross-platform", color: C.purple, pos: "top-right" },
  { icon: "🎨", name: "UI/UX Design", desc: "Figma prototypes & systems", color: C.pink, pos: "bottom-right" },
  { icon: "🧠", name: "AI Integration", desc: "Claude API, LLMs & smart features", color: C.cyan, pos: "bottom" },
  { icon: "🚀", name: "Landing Pages", desc: "High-converting pages that sell", color: C.purple, pos: "bottom-left" },
  { icon: "⚙️", name: "Maintenance", desc: "24/7 uptime & performance", color: C.pink, pos: "top-left" },
];

const CARD_POS = {
  "top":          { top: "2%",  left: "50%", transform: "translateX(-50%)" },
  "top-right":    { top: "15%", right: "4%" },
  "bottom-right": { bottom: "15%", right: "4%" },
  "bottom":       { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
  "bottom-left":  { bottom: "15%", left: "4%" },
  "top-left":     { top: "15%", left: "4%" },
};

const WIRE_ENDS = {
  "top":          [450, 80],
  "top-right":    [820, 170],
  "bottom-right": [820, 510],
  "bottom":       [450, 600],
  "bottom-left":  [80, 510],
  "top-left":     [80, 170],
};

function ServicesSection() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    });
    gsap.fromTo(subRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, delay: 0.2,
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    });
  }, []);

  const wireColors = { top: C.cyan, "top-right": C.purple, "bottom-right": C.pink, bottom: C.cyan, "bottom-left": C.purple, "top-left": C.pink };

  return (
    <section ref={sectionRef} id="services" style={{ position: "relative", zIndex: 5, padding: "80px 0 120px" }}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "0.8rem" }}>✦ OUR SERVICES</div>
        <h2 ref={titleRef} style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0 }}>
          What We Create
        </h2>
       