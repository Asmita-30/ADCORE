// src/pages/home.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import assets
import logo from "../assets/images/Adrixcore-removebg-preview.png";
import video from "../assets/images/Video Project.mp4";
import teamImage from "../assets/images/team.jpeg";
import codingImage from "../assets/images/coding.jpeg";

const LOGO_SRC = logo;
const VIDEO_SRC = video;

// Theme Colors
const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  violet: "#6d5cff",
  dark: "#020408",
  dark2: "#050a15",
};

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
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

      {/* Logo Arena */}
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
// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
const SERVICES = [
  { 
    icon: "🌐", 
    name: "Web App Development", 
    desc: "Full-stack web applications with React, Spring Boot, and modern architectures.", 
    features: ["React.js", "Spring Boot", "TypeScript"],
    color: C.cyan,
    pos: "left" 
  },
  { 
    icon: "⚙️", 
    name: "Maintenance", 
    desc: "24/7 monitoring, security updates, and performance optimization.", 
    features: ["24/7 Support", "Security Patches", "Backups"],
    color: C.pink,
    pos: "left-bottom" 
  },
  { 
    icon: "🎨", 
    name: "UI/UX Design", 
    desc: "User-centered design systems crafted in Figma. Intuitive interfaces.", 
    features: ["Figma", "Adobe XD", "Prototyping"],
    color: C.pink,
    pos: "right-top" 
  },
  { 
    icon: "🚀", 
    name: "Landing Pages", 
    desc: "High-converting landing pages that sell. Optimized for speed and SEO.", 
    features: ["Next.js", "Tailwind CSS", "SEO"],
    color: C.purple,
    pos: "right" 
  },
  { 
    icon: "🧠", 
    name: "AI Integration", 
    desc: "Intelligent features powered by Claude API and LLMs. Smart chatbots.", 
    features: ["Claude API", "OpenAI", "LangChain"],
    color: C.cyan,
    pos: "bottom-center" 
  },
];

const CARD_POS = {
  "left":          { top: "5%", left: "0%", transform: "translateY(-50%)" },
  "left-bottom":   { bottom: "10%", left: "0%", transform: "translateY(50%)" },
  "right-top":     { top: "5%", right: "0%", transform: "translateY(-50%)" },
  "right":         { bottom: "10%", right: "0%", transform: "translateY(50%)" },
  "bottom-center": { bottom: "10%", left: "35%", transform: "translateX(-50%)" },
};

const WIRE_ENDS = {
  "left":          [200, 110],
  "left-bottom":   [180, 350],
  "right-top":     [700, 110],
  "right":         [720, 350],
  "bottom-center": [450, 520],
};

function ServicesSection() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.5,
      scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
    });
    gsap.fromTo(subRef.current, { opacity: 0, y: 15 }, {
      opacity: 1, y: 0, duration: 0.4, delay: 0.05,
      scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
    });
  }, []);

  const wireColors = { 
    left: C.cyan, 
    "left-bottom": C.pink, 
    "right-top": C.pink, 
    right: C.purple, 
    "bottom-center": C.cyan 
  };

  return (
    <section ref={sectionRef} id="services" style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "20px 0 60px",
      minHeight: "580px"
    }}>
      <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <div style={{ 
          fontFamily: "'Orbitron',monospace", 
          fontSize: "0.65rem", 
          letterSpacing: "0.3em", 
          color: C.cyan, 
          marginBottom: "0.2rem",
          display: "inline-block",
          padding: "0.15rem 0.8rem",
          borderRadius: 20,
          background: "rgba(0,229,255,0.1)"
        }}>
          ✦ OUR SERVICES
        </div>
        <h2 ref={titleRef} style={{ 
          fontFamily: "'Orbitron',monospace", 
          fontSize: "clamp(1.5rem,4vw,2.2rem)", 
          fontWeight: 900, 
          background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent", 
          opacity: 0,
          marginBottom: "0.1rem"
        }}>
          What We Create
        </h2>
        <p ref={subRef} style={{ 
          color: "rgba(224,247,255,0.6)", 
          fontSize: "0.85rem", 
          marginTop: "0.1rem", 
          opacity: 0,
          maxWidth: 550,
          margin: "0.1rem auto 0"
        }}>
          Every service wired directly to your digital success
        </p>
      </div>

      <div style={{ 
        position: "relative", 
        maxWidth: 900, 
        margin: "0 auto", 
        height: 560,
        padding: "0 1rem"
      }}>
        {/* SVG Wires */}
        <svg viewBox="0 0 900 560" style={{ 
          position: "absolute", 
          inset: 0, 
          width: "100%", 
          height: "100%", 
          pointerEvents: "none", 
          zIndex: 5 
        }}>
          <defs>
            <filter id="wg">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#6d5cff" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          
          {SERVICES.map(svc => {
            const [ex, ey] = WIRE_ENDS[svc.pos];
            const col = wireColors[svc.pos];
            return (
              <g key={svc.pos}>
                {/* Main wire line */}
                <line 
                  x1="450" 
                  y1="150" 
                  x2={ex} 
                  y2={ey} 
                  stroke={col} 
                  strokeWidth="1.6" 
                  opacity="0.5" 
                  filter="url(#wg)"
                  strokeDasharray="4 4"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="0;8" 
                    dur="2s" 
                    repeatCount="indefinite" 
                  />
                </line>
                
                {/* Animated particles */}
                <circle r="3" fill={col} opacity="0.8">
                  <animateMotion 
                    dur={`${2 + Math.random() * 1.5}s`} 
                    repeatCount="indefinite" 
                    path={`M450,150 L${ex},${ey}`} 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;3;2" 
                    dur="0.8s" 
                    repeatCount="indefinite" 
                  />
                </circle>
              </g>
            );
          })}
          
          {/* Center Hub - Moved to y=150 */}
          <g filter="url(#wg)">
            <circle cx="450" cy="150" r="50" fill="url(#grad1)" opacity="0.12" />
            <circle cx="450" cy="150" r="40" fill="rgba(0,229,255,0.08)" stroke={C.cyan} strokeWidth="1.5" />
            <circle cx="450" cy="150" r="30" fill="rgba(0,229,255,0.15)" />
            
            {/* OUR text */}
            <text x="450" y="145" textAnchor="middle" fill={C.cyan} fontSize="11" fontFamily="'Orbitron',monospace" fontWeight="bold">
              OUR
            </text>
            
            {/* SERVICES text */}
            <text x="450" y="162" textAnchor="middle" fill={C.cyan} fontSize="11" fontFamily="'Orbitron',monospace" fontWeight="bold">
              SERVICES
            </text>
          </g>
        </svg>

        {/* Service Cards - All Moved Up */}
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, duration: 0.35 }}
            whileHover={{ 
              scale: 1.02, 
              y: -3,
              transition: { duration: 0.2 }
            }}
            style={{
              position: "absolute",
              ...CARD_POS[svc.pos],
              width: 250,
              zIndex: 15,
              background: "linear-gradient(135deg, rgba(0,12,30,0.95), rgba(0,20,40,0.9))",
              border: `1px solid rgba(0,229,255,0.2)`,
              borderRadius: 16,
              padding: "1rem",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              transition: "all 0.2s ease",
              boxShadow: `0 3px 12px rgba(0,0,0,0.2)`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = svc.color;
              e.currentTarget.style.boxShadow = `0 6px 20px ${svc.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,229,255,0.2)";
              e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.2)";
            }}
          >
            {/* Icon */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${svc.color}20, transparent)`,
              marginBottom: "0.6rem",
              border: `1px solid ${svc.color}30`
            }}>
              <span style={{ fontSize: "1.6rem" }}>{svc.icon}</span>
            </div>
            
            {/* Title */}
            <h3 style={{ 
              fontFamily: "'Orbitron',monospace", 
              fontSize: "0.9rem", 
              fontWeight: 700, 
              color: svc.color, 
              marginBottom: "0.4rem"
            }}>
              {svc.name}
            </h3>
            
            {/* Description */}
            <p style={{ 
              fontSize: "0.7rem", 
              color: "rgba(224,247,255,0.75)", 
              lineHeight: 1.4, 
              marginBottom: "0.6rem"
            }}>
              {svc.desc}
            </p>
            
            {/* Tech Tags */}
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "0.4rem", 
              marginBottom: "0.6rem"
            }}>
              {svc.features.map((tech, idx) => (
                <span key={idx} style={{
                  background: "rgba(0,229,255,0.1)",
                  padding: "0.15rem 0.6rem",
                  borderRadius: 10,
                  fontSize: "0.6rem",
                  color: svc.color,
                  fontWeight: 500
                }}>
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Learn More Link */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem"
            }}>
              <span style={{ 
                fontSize: "0.65rem", 
                color: svc.color,
                fontWeight: 500
              }}>
                Learn more
              </span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5 2l3 3-3 3" stroke={svc.color} strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            
            {/* Connection Dot */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                delay: i * 0.15 
              }}
              style={{
                position: "absolute",
                [svc.pos === "left" || svc.pos === "left-bottom" ? "right" : svc.pos === "right-top" || svc.pos === "right" ? "left" : "top"]: "-6px",
                [svc.pos === "left" || svc.pos === "left-bottom" ? "top" : svc.pos === "right-top" || svc.pos === "right" ? "top" : "left"]: "50%",
                transform: "translate(-50%, -50%)",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: svc.color,
                boxShadow: `0 0 5px ${svc.color}`,
                opacity: 0.6
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
const PROJECTS = [
  { emoji: "🏪", label: "Web Development", title: "E-Commerce Platform", grad: "linear-gradient(135deg,#051228,#150830)" },
  { emoji: "💳", label: "Mobile App", title: "Finance Mobile App", grad: "linear-gradient(135deg,#051820,#001535)" },
  { emoji: "🤖", label: "AI Integration", title: "AI Analytics Dashboard", grad: "linear-gradient(135deg,#18051a,#0a0a35)" },
  { emoji: "⚡", label: "SaaS Platform", title: "Port Management System", grad: "linear-gradient(135deg,#001525,#0a1a2e)" },
];

function Portfolio() {
  const ref = useRef();
  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll(".port-item"), { opacity: 0, y: 80 }, {
      opacity: 1, y: 0, stagger: 0.15, duration: 0.7,
      scrollTrigger: { trigger: ref.current, start: "top 80%" }
    });
  }, []);

  return (
    <section id="portfolio" ref={ref} style={{ position: "relative", zIndex: 5, padding: "80px 3rem 100px", background: "rgba(0,5,15,0.5)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "0.8rem" }}>✦ PORTFOLIO</div>
        <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Featured Work</h2>
        <p style={{ color: "rgba(224,247,255,0.5)", marginTop: "0.5rem" }}>Our best projects & success stories</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(440px,1fr))", gap: "2rem", maxWidth: 1100, margin: "0 auto" }}>
        {PROJECTS.map(p => (
          <motion.div
            key={p.title}
            className="port-item"
            whileHover={{ y: -10, boxShadow: "0 30px 80px rgba(0,229,255,0.15)" }}
            style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,229,255,0.1)", cursor: "pointer", opacity: 0 }}
          >
            <div style={{ height: 260, background: p.grad, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span style={{ fontSize: "5rem" }}>{p.emoji}</span>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <button style={{ background: `linear-gradient(135deg,${C.cyan},${C.purple})`, border: "none", padding: "0.8rem 2rem", borderRadius: 50, color: "#fff", fontFamily: "'Orbitron',monospace", fontWeight: 700, fontSize: "0.72rem", cursor: "pointer", letterSpacing: "0.05em" }}>
                  View Case Study
                </button>
              </motion.div>
            </div>
            <div style={{ padding: "1.2rem 1.5rem", background: "rgba(0,12,30,0.92)" }}>
              <div style={{ color: C.cyan, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.label}</div>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 700, marginTop: "0.3rem" }}>{p.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
const PLANS = [
  { name: "Starter", price: "₹49,999", features: ["Landing Page", "Responsive Design", "SEO Optimization", "3 Revisions", "1 Month Support"], popular: false },
  { name: "Professional", price: "₹1,49,999", features: ["Web Application", "Custom Design", "Advanced Features", "Unlimited Revisions", "6 Months Support"], popular: true },
  { name: "Enterprise", price: "Custom", features: ["Full Stack Solution", "AI Integration", "Custom Architecture", "Dedicated Team", "1 Year Support"], popular: false },
];

function Pricing() {
  return (
    <section id="pricing" style={{ position: "relative", zIndex: 5, padding: "80px 3rem 100px" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "0.8rem" }}>✦ PRICING</div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Choose Your Plan
        </motion.h2>
        <p style={{ color: "rgba(224,247,255,0.5)", marginTop: "0.5rem" }}>Transparent pricing, no surprises</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "2rem", maxWidth: 1100, margin: "0 auto" }}>
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            style={{
              background: "rgba(0,12,30,0.88)",
              border: `1px solid ${plan.popular ? C.cyan : "rgba(0,229,255,0.15)"}`,
              borderRadius: 20, padding: "2.5rem 2rem",
              position: "relative",
              boxShadow: plan.popular ? `0 0 60px rgba(0,229,255,0.15)` : "none",
              transform: plan.popular ? "scale(1.04)" : "scale(1)",
            }}
          >
            {plan.popular && (
              <div style={{ position: "absolute", top: -14, right: 20, background: `linear-gradient(135deg,${C.cyan},${C.purple})`, color: "#fff", fontSize: "0.68rem", fontFamily: "'Orbitron',monospace", fontWeight: 700, padding: "0.3rem 1rem", borderRadius: 20, letterSpacing: "0.05em" }}>
                Most Popular
              </div>
            )}
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: C.cyan, marginBottom: "1rem" }}>{plan.name}</div>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem" }}>{plan.price}</div>
            <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.7rem", padding: "0.5rem 0", fontSize: "0.9rem", color: "rgba(224,247,255,0.8)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ color: C.cyan, flexShrink: 0 }}>
                    <path d="M16 5L8 13l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: `0 0 30px rgba(0,229,255,0.3)` }}
              whileTap={{ scale: 0.97 }}
              style={{ width: "100%", background: `linear-gradient(135deg,${C.cyan},${C.purple})`, border: "none", padding: "1rem", borderRadius: 50, color: "#fff", fontFamily: "'Orbitron',monospace", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em", cursor: "pointer" }}
            >
              {plan.name === "Enterprise" ? "Contact Us" : "Choose Plan"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── BLOG SECTION ─────────────────────────────────────────────────────────────────
const BLOG_POSTS = [
  { id: 1, title: "The Future of Web Development in 2026", excerpt: "Explore emerging trends like AI-driven development, WebAssembly, and edge computing.", date: "Mar 15, 2026", readTime: "5 min read", category: "Trends" },
  { id: 2, title: "How to Choose the Right Tech Stack", excerpt: "A comprehensive guide to selecting the best technologies for your next project.", date: "Mar 10, 2026", readTime: "8 min read", category: "Development" },
  { id: 3, title: "AI Integration: A Game Changer for Businesses", excerpt: "How artificial intelligence is transforming industries and creating new opportunities.", date: "Mar 5, 2026", readTime: "6 min read", category: "AI" },
];

function Blog() {
  const ref = useRef();
  
  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll(".blog-item"), { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, stagger: 0.15, duration: 0.7,
      scrollTrigger: { trigger: ref.current, start: "top 80%" }
    });
  }, []);

  return (
    <section id="blog" ref={ref} style={{ position: "relative", zIndex: 5, padding: "80px 3rem 100px", background: "rgba(0,5,15,0.3)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "0.8rem" }}>✦ OUR BLOG</div>
        <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Latest Insights</h2>
        <p style={{ color: "rgba(224,247,255,0.5)", marginTop: "0.5rem" }}>Stories, tips, and trends from the digital frontier</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "2rem", maxWidth: 1100, margin: "0 auto" }}>
        {BLOG_POSTS.map((post, i) => (
          <motion.article
            key={post.id}
            className="blog-item"
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,229,255,0.15)" }}
            style={{ opacity: 0, background: "rgba(0,12,30,0.88)", border: "1px solid rgba(0,229,255,0.15)", borderRadius: 20, overflow: "hidden", cursor: "pointer" }}
          >
            <div style={{ height: 200, background: `linear-gradient(135deg,${C.dark2},#0a1a2e)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "4rem", opacity: 0.7 }}>📄</span>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem" }}>
                <span style={{ color: C.cyan, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{post.category}</span>
                <span style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem" }}>{post.date}</span>
              </div>
              <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{post.title}</h3>
              <p style={{ color: "rgba(224,247,255,0.7)", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "1rem" }}>{post.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem" }}>{post.readTime}</span>
                <span style={{ color: C.cyan, fontSize: "0.8rem", fontWeight: 600 }}>Read more →</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", msg: "" });
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll(".cin"), { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, stagger: 0.1, duration: 0.6,
      scrollTrigger: { trigger: ref.current, start: "top 80%" }
    });
  }, []);

  const infos = [
    { icon: "📧", label: "Email", val: "adrixcoretech@gmail.com" },
    { icon: "📞", label: "Phone", val: "+91 74475 08006" },
    { icon: "📞", label: "Alternate Phone", val: "+91 80808 22156" },
    { icon: "📍", label: "Location", val: "Navi Mumbai, India" },
    { icon: "⏱️", label: "Response", val: "Within 4 hours" },
  ];

  return (
    <section id="contact" ref={ref} style={{ position: "relative", zIndex: 5, padding: "80px 3rem 100px", background: "rgba(0,5,15,0.5)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "0.8rem" }}>✦ GET IN TOUCH</div>
        <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,#fff 40%,${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Let's Build Something Amazing
        </h2>
        <p style={{ color: "rgba(224,247,255,0.5)", marginTop: "0.5rem" }}>Ready to transform your digital presence?</p>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {infos.map(info => (
            <motion.div
              key={info.label}
              className="cin"
              whileHover={{ x: 8, borderColor: C.cyan }}
              style={{ display: "flex", alignItems: "center", gap: "1.2rem", background: "rgba(0,12,30,0.75)", border: "1px solid rgba(0,229,255,0.15)", borderRadius: 14, padding: "1.2rem", opacity: 0, cursor: "default" }}
            >
              <span style={{ fontSize: "1.7rem" }}>{info.icon}</span>
              <div>
                <div style={{ color: C.cyan, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>{info.label}</div>
                <div style={{ color: "rgba(224,247,255,0.7)", fontSize: "0.9rem", marginTop: 3 }}>{info.val}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ background: "rgba(0,12,30,0.75)", border: "1px solid rgba(0,229,255,0.15)", borderRadius: 20, padding: "2.5rem" }}>
          {[
            { k: "name", ph: "Your Name", type: "text" },
            { k: "email", ph: "Your Email", type: "email" },
            { k: "budget", ph: "Project Budget (e.g. ₹1,00,000)", type: "text" },
          ].map(({ k, ph, type }) => (
            <input
              key={k}
              type={type}
              placeholder={ph}
              value={form[k]}
              onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
              style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,229,255,0.15)", borderRadius: 10, padding: "0.9rem 1.2rem", color: "#e0f7ff", fontFamily: "Rajdhani,sans-serif", fontSize: "1rem", marginBottom: "1.2rem", outline: "none" }}
              onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 20px rgba(0,229,255,0.12)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.15)"; e.target.style.boxShadow = "none"; }}
            />
          ))}
          <textarea
            rows={5}
            placeholder="Tell us about your project..."
            value={form.msg}
            onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
            style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,229,255,0.15)", borderRadius: 10, padding: "0.9rem 1.2rem", color: "#e0f7ff", fontFamily: "Rajdhani,sans-serif", fontSize: "1rem", marginBottom: "1.2rem", outline: "none", resize: "vertical" }}
            onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 20px rgba(0,229,255,0.12)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.15)"; e.target.style.boxShadow = "none"; }}
          />
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: `0 0 40px rgba(0,229,255,0.3)` }}
            whileTap={{ scale: 0.98 }}
            style={{ width: "100%", background: `linear-gradient(135deg,${C.cyan},${C.purple})`, border: "none", padding: "1.1rem", borderRadius: 50, color: "#fff", fontFamily: "'Orbitron',monospace", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", cursor: "pointer" }}
          >
            Send Message →
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN HOME COMPONENT ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <Portfolio />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}