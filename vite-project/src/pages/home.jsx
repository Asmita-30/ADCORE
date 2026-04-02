// src/pages/home.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import teamImage from "../assets/images/team.jpeg";
import codingImage from "../assets/images/coding.jpeg";
import blogImg1 from "../assets/images/webblog.jpg";
import blogImg2 from "../assets/images/blog2.jpg";
import blogImg3 from "../assets/images/blog3alt.webp";
import ecommerceImg from "../assets/images/ecommerce.png";
import financeImg from "../assets/images/finance-app.png";
import aiImg from "../assets/images/ai-analytics.png";

// Only Hero background image
import heroBg from "../assets/images/hero-bg.jpg.jpeg";

// ─── DESIGN SYSTEM (Audit Doc3 — professional dark) ──────────────────────────
const C = {
  blue: "#2563EB",
  blueHover: "#3B82F6",
  blueDark: "#1D4ED8",
  cyan: "#06B6D4",
  surface: "#111827",
  surfaceHover: "#1E293B",
  border: "#1F2A3D",
  textPrimary: "#F0F4FF",
  textLead: "#CBD5E1",
  textBody: "#94A3B8",
  textMuted: "#64748B",
  bg: "#0A0F1E",
  codeBg: "#0F172A",
};

// ─── HERO (Fixes #01, #02, #04) ──────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  const serviceQuickLinks = [
    { label: "Web App", path: "/web-app-development" },
    { label: "Mobile App", path: "/mobile-app-development" },
    { label: "AI Integration", path: "/ai-integration" },
    { label: "UI/UX Design", path: "/ui-ux-design" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        padding: "7rem 2rem 3rem",
        background: `linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.8)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {/* Subtle background gradient */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
      }} />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY, position: "relative", zIndex: 5, textAlign: "center", maxWidth: 820 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Label pill */}
        <div style={{
          display: "inline-block",
          background: "rgba(30, 58, 95, 0.9)",
          backdropFilter: "blur(8px)",
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: "0.3rem 1rem",
          fontSize: "0.75rem",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: C.blueHover,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          ✦ Web, Mobile & AI Development Agency
        </div>

        {/* FIX #01: Headline-led hero — clear value proposition */}
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(2.4rem, 6vw, 4rem)",
          fontWeight: 800,
          color: C.textPrimary,
          lineHeight: 1.1,
          marginBottom: "1.25rem",
          letterSpacing: "-0.01em",
        }}>
          We Build Digital Products{" "}
          <span style={{
            background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            That Drive Growth
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          color: C.textLead,
          lineHeight: 1.7,
          marginBottom: "2.25rem",
          maxWidth: 620,
          margin: "0 auto 2.25rem",
        }}>
          From idea to launch — we design, develop, and deploy web apps, mobile apps, and AI solutions for startups and growing businesses.
        </p>

        {/* FIX #01: Two clear CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, background: C.blueHover }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: C.blue,
                border: "none",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Start a Project →
            </motion.button>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, background: C.surfaceHover }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${C.border}`,
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                color: C.textPrimary,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              See Our Work
            </motion.button>
          </Link>
        </div>

        {/* WhatsApp inline CTA (Audit CV-02) */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: C.textMuted, marginBottom: "2rem" }}>
          or{" "}
          <a
            href="https://wa.me/917447508006"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25D366", textDecoration: "none", fontWeight: 500 }}
          >
            Chat on WhatsApp
          </a>
          {" "}— we respond within 1 hour
        </p>

        {/* FIX #01: Trust badge pills below CTAs */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[
            { icon: "⚡", text: "4hr Response" },
            { icon: "💰", text: "Fixed-Price Quotes" },
            { icon: "🎯", text: "Free Consultation" },
          ].map((badge) => (
            <div key={badge.text} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(17, 24, 39, 0.8)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${C.border}`,
              borderRadius: "20px",
              padding: "0.35rem 0.9rem",
              fontSize: "0.8rem",
              fontFamily: "'Inter', sans-serif",
              color: C.textBody,
            }}>
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* FIX #02: Service quick-link pills (replaces search bar) */}
        <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap" }}>
          {serviceQuickLinks.map((s) => (
            <Link key={s.label} to={s.path} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05, borderColor: C.blueHover, color: C.textPrimary }}
                style={{
                  background: "rgba(17, 24, 39, 0.7)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${C.border}`,
                  borderRadius: "20px",
                  padding: "0.35rem 1rem",
                  fontSize: "0.8rem",
                  fontFamily: "'Inter', sans-serif",
                  color: C.textBody,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {s.label}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute", bottom: "2rem",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: C.textMuted, fontSize: "0.7rem", letterSpacing: "0.15em",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        SCROLL
      </motion.div>
    </section>
  );
}

// ─── PROCESS SECTION (Audit C-04: "How We Work" added to homepage) ────────────
function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We learn your goals, users, and constraints in a free 30-min call." },
    { num: "02", title: "Design", desc: "UI/UX wireframes and prototypes — reviewed with you before a single line of code." },
    { num: "03", title: "Build", desc: "Full-stack development with weekly progress updates and full transparency." },
    { num: "04", title: "Launch", desc: "Deployment, testing, and handoff with documentation and support." },
  ];

  return (
    <section style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "80px 2rem", 
      background: C.surface 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ HOW WE WORK
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            color: C.textPrimary,
            lineHeight: 1.2,
          }}>
            A Process Built for Clarity
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: "12px",
                padding: "1.5rem",
                position: "relative",
              }}
            >
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
                color: "#ffffff",
                opacity: 1.5,
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: C.textPrimary,
                marginBottom: "0.5rem",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: C.textBody,
                lineHeight: 1.6,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT SECTION ─────────────────────────────────────────────────────────
function About() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-animate"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "100px 2rem", 
      background: C.bg 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="about-animate" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ ABOUT US
          </div>
          {/* FIX C-06: More specific, mission-driven headline */}
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: C.textPrimary,
            lineHeight: 1.2,
          }}>
            Engineering-First.{" "}
            <span style={{
              background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Results-Driven.
            </span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div className="about-animate" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {/* FIX C-07: Lead with SIH win as primary credibility anchor */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: C.textLead, marginBottom: "1.25rem" }}>
              Adrix Core was founded by a two-time Smart India Hackathon champion. We build web, mobile, and AI solutions that are production-ready — not just good-looking demos.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.7, color: C.textBody, marginBottom: "2rem" }}>
              We've delivered real products — from port management systems to civic tech platforms. Our engineering-first approach means we build for performance, maintainability, and scale from day one.
            </p>

            {/* FIX #04: Process guarantees instead of inflated stats */}
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { val: "4hr", label: "Response SLA" },
                { val: "Fixed", label: "Price Quotes" },
                { val: "2×", label: "National SIH Winners" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: C.blueHover,
                  }}>
                    {val}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.textMuted, marginTop: 3, letterSpacing: "0.04em" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-animate" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {/* FIX #09 / C-03: Using actual team/coding images, not AI renders */}
            <div style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${C.border}`,
              height: "380px",
            }}>
              <img
                src={teamImage}
                alt="Adrix Core workspace"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(0,0,0,0.3))",
              }} />
              <div style={{
                position: "absolute", bottom: "16px", right: "16px",
                width: "72px", height: "72px",
                borderRadius: "10px", overflow: "hidden",
                border: `2px solid ${C.blue}`,
              }}>
                <img src={codingImage} alt="Code" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES SECTION (Audit C-01: 3-column grid replaces orbital diagram) ───
const SERVICES = [
  { icon: "🌐", name: "Web App Development", desc: "Full-stack web applications with React, Spring Boot, and modern architectures.", path: "/web-app-development", tags: ["React.js", "Spring Boot", "TypeScript"] },
  { icon: "📱", name: "Mobile App Development", desc: "Cross-platform apps with React Native and Flutter — iOS and Android.", path: "/mobile-app-development", tags: ["React Native", "Flutter", "iOS/Android"] },
  { icon: "🎨", name: "UI/UX Design", desc: "User-centered design systems crafted in Figma. Intuitive, polished interfaces.", path: "/ui-ux-design", tags: ["Figma", "Adobe XD", "Prototyping"] },
  { icon: "🧠", name: "AI Integration", desc: "Intelligent features powered by Claude API and LLMs — smart chatbots and automation.", path: "/ai-integration", tags: ["Claude API", "OpenAI", "LangChain"] },
  { icon: "🚀", name: "Landing Pages", desc: "High-converting landing pages optimized for speed, SEO, and conversion.", path: "/landing-pages", tags: ["Next.js", "Tailwind CSS", "SEO"] },
  { icon: "⚙️", name: "Maintenance Plans", desc: "24/7 monitoring, security patches, and performance optimization.", path: "/maintenance-plans", tags: ["24/7 Support", "Patches", "Backups"] },
];

function ServicesSection() {
  return (
    <section id="services" style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "80px 2rem 100px", 
      background: C.surface 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ OUR SERVICES
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: C.textPrimary,
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}>
            What We Build
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
            End-to-end digital services — from strategy to deployment.
          </p>
        </div>

        {/* FIX C-01: Clean 3-column grid — replaces orbital diagram */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -4 }}
              style={{
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: "12px",
                padding: "1.5rem",
                cursor: "pointer",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.blue;
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(37,99,235,0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: "#1E3A5F", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1rem",
                border: `1px solid ${C.border}`,
              }}>
                <span style={{ fontSize: "1.5rem" }}>{svc.icon}</span>
              </div>

              <h3 style={{
                fontFamily: "'Sora', sans-serif", fontSize: "1.05rem",
                fontWeight: 600, color: C.textPrimary, marginBottom: "0.5rem",
              }}>
                {svc.name}
              </h3>

              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
                color: C.textBody, lineHeight: 1.6, marginBottom: "1rem",
              }}>
                {svc.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                {svc.tags.map((tag) => (
                  <span key={tag} style={{
                    background: C.codeBg, color: C.cyan, fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem", fontWeight: 500, padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={svc.path} style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.825rem",
                color: C.blueHover, textDecoration: "none", fontWeight: 500,
                display: "flex", alignItems: "center", gap: "4px",
              }}>
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    image: ecommerceImg,
    label: "Web Development",
    title: "E-Commerce Platform",
    // FIX C-05: No fabricated metrics
    desc: "Custom storefront with product catalog, cart, and payment gateway.",
    liveUrl: "https://shopease-demo.com",
  },
  {
    image: financeImg,
    label: "Mobile App",
    title: "Finance Mobile App",
    desc: "Cross-platform personal finance tracker with real-time analytics.",
    liveUrl: "https://moneyflow-demo.com",
  },
  {
    image: aiImg,
    label: "AI Integration",
    title: "AI Analytics Dashboard",
    desc: "Claude API-powered insights dashboard for business intelligence.",
    liveUrl: "https://dataviz-demo.com",
  },
];

function Portfolio() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll(".port-item"), { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, stagger: 0.15, duration: 0.6,
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="portfolio" ref={ref} style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "80px 2rem 100px", 
      background: C.bg 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ PORTFOLIO
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700, color: C.textPrimary, lineHeight: 1.2, marginBottom: "0.75rem",
          }}>
            Featured Work
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "1rem" }}>
            Real projects. Real outcomes.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              className="port-item"
              whileHover={{ y: -6, boxShadow: `0 20px 50px rgba(37,99,235,0.12)` }}
              style={{
                borderRadius: 14, overflow: "hidden",
                border: `1px solid ${C.border}`, cursor: "pointer", opacity: 0,
                background: C.surface,
              }}
            >
              <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute", inset: 0, background: "rgba(0,0,0,0.82)",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexDirection: "column",
                  }}
                >
                  <motion.a
                    href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: C.blue, border: "none", padding: "0.7rem 1.75rem",
                      borderRadius: "8px", color: "#fff", fontFamily: "'Inter', sans-serif",
                      fontWeight: 600, fontSize: "0.875rem", cursor: "pointer",
                      textDecoration: "none", display: "inline-block",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Preview →
                  </motion.a>
                  {/* FIX CV-05: "Build Something Similar" CTA */}
                  <Link
                    to={`/contact?service=${encodeURIComponent(p.label)}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: "transparent", border: `1px solid ${C.blueHover}`,
                      padding: "0.7rem 1.75rem", borderRadius: "8px",
                      color: "#fff", fontFamily: "'Inter', sans-serif",
                      fontWeight: 600, fontSize: "0.875rem", cursor: "pointer",
                      textDecoration: "none", display: "inline-block",
                    }}
                  >
                    Build Something Similar
                  </Link>
                </motion.div>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif", color: C.blueHover, fontSize: "0.75rem",
                  letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem",
                }}>
                  {p.label}
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.05rem", fontWeight: 600, color: C.textPrimary, marginBottom: "0.4rem" }}>
                  {p.title}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: C.textBody, lineHeight: 1.5 }}>
                  {p.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, background: C.surfaceHover }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "transparent", border: `1px solid ${C.border}`, padding: "0.8rem 2rem",
                borderRadius: "8px", color: C.textPrimary, fontFamily: "'Inter', sans-serif",
                fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", transition: "background 0.2s",
              }}
            >
              View All Projects →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING SECTION ─────────────────────────────────────────────────────────
const PRICING_PLANS = [
  {
    name: "Static Website",
    tagline: "Perfect for portfolios & small businesses",
    price: "₹7,000 – ₹10,000",
    timeline: "5–7 Days",
    features: ["Up to 5 Pages", "Responsive Design", "Contact Form", "Basic SEO Setup", "Social Media Integration", "Google Analytics"],
    icon: "🌐",
    color: C.blueHover,
    popular: false,
  },
  {
    name: "Dynamic Website",
    tagline: "Ideal for startups & growing businesses",
    price: "₹14,000 – ₹17,000",
    timeline: "14–21 Days",
    features: ["Unlimited Pages", "Custom Design (Figma)", "CMS / Admin Panel", "User Authentication", "Database Integration", "Advanced SEO"],
    icon: "⚡",
    color: C.blue,
    popular: true,
  },
  {
    name: "E-Commerce Website",
    tagline: "Complete online store solution",
    price: "₹25,000+",
    timeline: "21–30 Days",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "User Accounts", "Inventory Management"],
    icon: "🛒",
    color: C.cyan,
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "80px 2rem 100px", 
      background: C.surface 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ PRICING
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700, color: C.textPrimary, lineHeight: 1.2, marginBottom: "0.75rem",
          }}>
            Transparent Pricing
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "1rem" }}>
            Fixed-price quotes always. No surprises.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{
                background: C.bg,
                border: `1px solid ${plan.popular ? plan.color : C.border}`,
                borderRadius: "14px",
                padding: "1.75rem",
                position: "relative",
                boxShadow: plan.popular ? `0 0 32px rgba(37,99,235,0.15)` : "none",
                transition: "border-color 0.2s",
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute", top: -13, right: 20,
                  background: C.blue, color: "#fff",
                  fontSize: "0.72rem", fontFamily: "'Inter', sans-serif",
                  fontWeight: 600, padding: "0.3rem 1rem", borderRadius: 20,
                  letterSpacing: "0.02em",
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "46px", height: "46px", borderRadius: "10px",
                  background: "#1E3A5F", display: "flex", alignItems: "center",
                  justifyContent: "center", border: `1px solid ${C.border}`,
                }}>
                  <span style={{ fontSize: "1.6rem" }}>{plan.icon}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.1rem", fontWeight: 600, color: C.textPrimary, marginBottom: "0.15rem" }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.textMuted }}>
                    {plan.tagline}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: C.textPrimary }}>
                  {plan.price}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.textMuted, marginLeft: "0.3rem" }}>/ project</span>
              </div>

              <div style={{
                display: "inline-block", background: C.codeBg, borderRadius: 20,
                padding: "0.2rem 0.75rem", marginBottom: "1.25rem",
              }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.cyan }}>
                  ⏱ {plan.timeline}
                </span>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                {plan.features.slice(0, 4).map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.45rem" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11 3L5 9L2 6" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: C.textBody }}>{feature}</span>
                  </div>
                ))}
                {plan.features.length > 4 && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.textMuted, marginTop: "0.3rem" }}>
                    +{plan.features.length - 4} more features
                  </p>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link to="/pricing" style={{ textDecoration: "none" }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%", background: plan.popular ? C.blue : "transparent",
                      border: `1px solid ${plan.popular ? C.blue : C.border}`,
                      padding: "0.7rem", borderRadius: "8px",
                      color: "#fff", fontFamily: "'Inter', sans-serif",
                      fontWeight: 600, fontSize: "0.875rem", cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    Get Exact Quote
                  </motion.button>
                </Link>
              </div>

              {/* FIX CV-04: Reassurance below CTA */}
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.75rem",
                color: C.textMuted, textAlign: "center", marginTop: "0.75rem",
              }}>
                No commitment required. Free 30-min discovery call.
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, background: C.surfaceHover }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "transparent", border: `1px solid ${C.border}`, padding: "0.8rem 2rem",
                borderRadius: "8px", color: C.textPrimary, fontFamily: "'Inter', sans-serif",
                fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", transition: "background 0.2s",
              }}
            >
              View All Pricing Plans →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── BLOG SECTION ─────────────────────────────────────────────────────────────
const BLOG_POSTS = [
  { id: 1, title: "The Future of Web Development in 2026", excerpt: "Explore emerging trends like AI-driven development, WebAssembly, and edge computing.", date: "Mar 15, 2026", readTime: "5 min read", category: "Trends", image: blogImg1 },
  { id: 2, title: "How to Choose the Right Tech Stack", excerpt: "A comprehensive guide to selecting the best technologies for your next project.", date: "Mar 10, 2026", readTime: "8 min read", category: "Development", image: blogImg2 },
  { id: 3, title: "AI Integration: A Game Changer for Businesses", excerpt: "How artificial intelligence is transforming industries and creating new opportunities.", date: "Mar 5, 2026", readTime: "6 min read", category: "AI", image: blogImg3 },
];

function Blog() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll(".blog-item"), { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, stagger: 0.12, duration: 0.6,
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="blog" ref={ref} style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "80px 2rem 100px", 
      background: C.bg 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ OUR BLOG
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: C.textPrimary, lineHeight: 1.2 }}>
            Latest Insights
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              className="blog-item"
              whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(37,99,235,0.1)` }}
              style={{
                opacity: 0, background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, overflow: "hidden", cursor: "pointer",
              }}
            >
              <div style={{ height: 200, overflow: "hidden" }}>
                <img src={post.image} alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "0.6rem" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: C.blueHover, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>{post.category}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: C.textMuted, fontSize: "0.75rem" }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.05rem", fontWeight: 600, color: C.textPrimary, marginBottom: "0.5rem", lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: C.textMuted, fontSize: "0.78rem" }}>⏱ {post.readTime}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: C.blueHover, fontSize: "0.85rem", fontWeight: 500 }}>
                    Read more →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, background: C.surfaceHover }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "transparent", border: `1px solid ${C.border}`, padding: "0.8rem 2rem",
                borderRadius: "8px", color: C.textPrimary, fontFamily: "'Inter', sans-serif",
                fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", transition: "background 0.2s",
              }}
            >
              View All Articles →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION (Fixes #07, #08) ─────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", msg: "" });
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll(".cin"), { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, stagger: 0.08, duration: 0.55,
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  const infos = [
    { icon: "📧", label: "Email", val: "adrixcoretech@gmail.com" },
    { icon: "📞", label: "Phone", val: "+91 74475 08006" },
    { icon: "📞", label: "Alternate", val: "+91 80808 22156" },
    { icon: "📍", label: "Location", val: "Navi Mumbai, India" },
    { icon: "⏱", label: "Response", val: "Within 4 hours" },
  ];

  return (
    <section id="contact" ref={ref} style={{ 
      position: "relative", 
      zIndex: 5, 
      padding: "80px 2rem 100px", 
      background: C.surface 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-block", 
            background: "#1E3A5F", 
            borderRadius: 20,
            padding: "0.3rem 1rem", 
            fontSize: "0.75rem", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500, 
            color: C.blueHover, 
            letterSpacing: "0.08em",
            textTransform: "uppercase", 
            marginBottom: "1rem",
          }}>
            ✦ GET IN TOUCH
          </div>
          {/* FIX #07: Specific, promise-driven headline */}
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700, color: C.textPrimary, lineHeight: 1.2, marginBottom: "0.75rem",
          }}>
            Tell Us About Your Project
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "1rem" }}>
            We respond within 4 hours — guaranteed.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {infos.map((info) => (
              <motion.div
                key={info.label}
                className="cin"
                whileHover={{ x: 6, borderColor: C.blue }}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: C.bg, border: `1px solid ${C.border}`,
                  borderRadius: 10, padding: "1rem 1.25rem",
                  opacity: 0, cursor: "default", transition: "border-color 0.2s",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{info.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: C.blueHover, fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.04em" }}>
                    {info.label}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "0.875rem", marginTop: 2 }}>
                    {info.val}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp option (Audit CV-06) */}
            <div style={{
              background: C.bg, border: `1px solid ${C.border}`,
              borderRadius: 10, padding: "1rem 1.25rem",
              marginTop: "0.5rem",
            }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: C.textMuted, marginBottom: "0.5rem" }}>
                For quick questions:
              </p>
              <a
                href="https://wa.me/917447508006"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#25D366", color: "#fff", padding: "0.55rem 1.1rem",
                  borderRadius: "8px", textDecoration: "none",
                  fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem",
                }}
              >
                💬 Message on WhatsApp
              </a>
            </div>
          </div>

          <div style={{
            background: C.bg, border: `1px solid ${C.border}`,
            borderRadius: 14, padding: "2rem",
          }}>
            {[
              { k: "name", ph: "Your Name", type: "text" },
              { k: "email", ph: "Your Email", type: "email" },
            ].map(({ k, ph, type }) => (
              <input
                key={k} type={type} placeholder={ph}
                value={form[k]} onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
                style={{
                  width: "100%", background: C.surface, border: `1px solid ${C.border}`,
                  borderRadius: "8px", padding: "0.85rem 1.1rem",
                  color: C.textPrimary, fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem", marginBottom: "1rem", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = C.blue)}
                onBlur={(e) => (e.target.style.borderColor = C.border)}
              />
            ))}

            {/* FIX #08: Budget field — optional, friendly label */}
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <input
                type="text"
                placeholder="Approximate Budget (Optional)"
                value={form.budget}
                onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                style={{
                  width: "100%", background: C.surface, border: `1px solid ${C.border}`,
                  borderRadius: "8px", padding: "0.85rem 1.1rem",
                  color: C.textPrimary, fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = C.blue)}
                onBlur={(e) => (e.target.style.borderColor = C.border)}
              />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: C.textMuted, marginTop: "0.3rem" }}>
                Not sure yet? No worries — just describe your project and we'll guide you.
              </p>
            </div>

            <textarea
              rows={5} placeholder="Tell us about your project..."
              value={form.msg} onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))}
              style={{
                width: "100%", background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: "8px", padding: "0.85rem 1.1rem",
                color: C.textPrimary, fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem", marginBottom: "1.25rem", outline: "none",
                resize: "vertical", boxSizing: "border-box", transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = C.blue)}
              onBlur={(e) => (e.target.style.borderColor = C.border)}
            />

            <motion.button
              whileHover={{ scale: 1.02, background: C.blueHover }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%", background: C.blue, border: "none",
                padding: "1rem", borderRadius: "8px", color: "#fff",
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: "0.95rem", cursor: "pointer", transition: "background 0.2s",
              }}
            >
              Send Message →
            </motion.button>

            {/* Form reassurance (Audit Doc4 #04) */}
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
              color: C.textMuted, textAlign: "center", marginTop: "0.75rem",
            }}>
              Takes less than 2 minutes. No spam. We respond within 4 hours.
            </p>
          </div>
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
      <Process />
      <About />
      <ServicesSection />
      <Portfolio />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}