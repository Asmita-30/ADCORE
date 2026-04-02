// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import images
import teamImage from "../assets/images/team.jpeg";
import aboutHeroBg from "../assets/images/about-hero-bg.jpg";
import codingImage from "../assets/images/coding.jpeg";

// ─── DESIGN SYSTEM (Consistent with Home page) ──────────────────────────────
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

function About() {
  const sectionRef = useRef();

  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll(".about-section");
    sections.forEach((section, index) => {
      gsap.fromTo(section.querySelectorAll(".animate-item"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <>
      {/* Hero Section - C-06: Specific mission-driven headline */}
    <section
  style={{
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "120px 2rem 80px",
    background: `linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.92)), url(${aboutHeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    overflow: "hidden",
  }}
>
  {/* Optional: Add an overlay gradient for better text readability */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
    }}
  />

  <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      style={{
        display: "inline-block",
        background: "rgba(30, 58, 95, 0.9)",
        backdropFilter: "blur(8px)",
        borderRadius: 20,
        padding: "0.3rem 1rem",
        fontSize: "0.75rem",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        color: C.blueHover,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}
    >
      ✦ ABOUT ADRIX CORE
    </motion.div>

    {/* C-06: Changed from "FROM IDEA TO IMPACT" to specific mission-driven statement */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 800,
        marginBottom: "1.5rem",
        color: C.textPrimary,
        lineHeight: 1.2,
      }}
    >
      Engineering-First.{" "}
      <span
        style={{
          background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Results-Driven.
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      style={{
        fontSize: "1.1rem",
        color: C.textLead,
        lineHeight: 1.6,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      Built by engineers. Trusted by founders. We build web, mobile, and AI
      solutions that are production-ready — not just good-looking demos.
    </motion.p>
  </div>
</section>

      {/* WHO WE ARE Section - C-07: Lead with SIH win */}
      <section
        ref={sectionRef}
        className="about-section"
        style={{
          padding: "80px 2rem",
          position: "relative",
          zIndex: 2,
          background: C.surface,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                className="animate-item"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: C.blueHover,
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                01 — WHO WE ARE
              </div>
              <h2
                className="animate-item"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  color: C.textPrimary,
                }}
              >
                About <span style={{ color: C.blue }}>Adrix Core</span>
              </h2>

              {/* C-07: Lead with SIH win as primary credibility anchor */}
              <p
                className="animate-item"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: C.textLead,
                  marginBottom: "1rem",
                }}
              >
                Adrix Core was founded by a two-time national Smart India Hackathon
                champion and Computer Engineering graduate. We exist at the
                intersection of engineering precision and design excellence —
                building digital products that are fast, scalable, and built to
                matter.
              </p>
              <p
                className="animate-item"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: C.textBody,
                  marginBottom: "1rem",
                }}
              >
                We started Adrix Core because too many businesses were settling for
                generic, slow, and forgettable digital products. We build the
                opposite.
              </p>

              {/* C-09: Replace inflated stats with process-proof stats */}
              <div
                className="animate-item"
                style={{
                  display: "flex",
                  gap: "2rem",
                  marginTop: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { val: "4hr", label: "Response SLA" },
                  { val: "Fixed", label: "Price Quotes" },
                  { val: "2×", label: "National SIH Winners" },
                  { val: "Free", label: "30-min Consultation" },
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        color: C.blueHover,
                      }}
                    >
                      {stat.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: C.textMuted,
                        marginTop: 3,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: `1px solid ${C.border}`,
                  height: 400,
                }}
              >
                <img
                  src={teamImage}
                  alt="Adrix Core Team"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section
        className="about-section"
        style={{
          padding: "80px 2rem",
          background: C.bg,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div
            className="animate-item"
            style={{
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
            }}
          >
            ✦ WHAT WE DO
          </div>
          <h2
            className="animate-item"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "3rem",
              color: C.textPrimary,
            }}
          >
            Our Core <span style={{ color: C.blue }}>Capabilities</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Web App Development",
                desc: "Custom web applications powered by React, Spring Boot, and TypeScript",
                icon: "🌐",
              },
              {
                title: "Mobile Applications",
                desc: "Cross-platform mobile apps built with React Native and Flutter",
                icon: "📱",
              },
              {
                title: "UI/UX Design",
                desc: "Design systems crafted in Figma with user-centered methodology",
                icon: "🎨",
              },
              {
                title: "AI Integration",
                desc: "Native AI features using LLMs, Claude API, and intelligent automation",
                icon: "🧠",
              },
              {
                title: "SaaS Development",
                desc: "End-to-end SaaS product development from idea to launch",
                icon: "🚀",
              },
              {
                title: "Product Strategy",
                desc: "Discovery, UX strategy, and product lifecycle management",
                icon: "⚡",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: C.blue }}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: C.textPrimary,
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: C.textBody,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES Section - C-08: Reduced to 3 core values */}
      <section
        className="about-section"
        style={{
          padding: "80px 2rem",
          background: C.surface,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div
            className="animate-item"
            style={{
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
            }}
          >
            ✦ WHAT WE STAND FOR
          </div>
          <h2
            className="animate-item"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              color: C.textPrimary,
            }}
          >
            Our <span style={{ color: C.blue }}>Core Values</span>
          </h2>
          <p
            className="animate-item"
            style={{
              color: C.textBody,
              marginBottom: "3rem",
            }}
          >
            The operating principles behind every decision we make
          </p>

          {/* C-08: Reduced to 3 core values maximum */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {[
              {
                title: "Engineering Excellence",
                desc: "Clean code. Documented systems. Scalable architecture. We write software we are proud to hand over — and that we would be proud to maintain.",
                icon: "⚙️",
              },
              {
                title: "Radical Transparency",
                desc: "Fixed pricing. Clear timelines. Weekly progress reports. No hidden fees, no scope surprises. Our clients always know exactly where their product stands.",
                icon: "🔍",
              },
              {
                title: "True Partnership",
                desc: "We succeed when our clients succeed. We treat engagements as the beginning of a long-term working relationship built on trust and accountability.",
                icon: "🤝",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: C.blue }}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  {value.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: C.textPrimary,
                    marginBottom: "0.8rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: C.textBody,
                    lineHeight: 1.5,
                  }}
                >
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 2rem",
          position: "relative",
          zIndex: 2,
          background: C.bg,
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "3rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                marginBottom: "1rem",
                color: C.textPrimary,
              }}
            >
              From Idea to{" "}
              <span style={{ color: C.blue }}>Impact</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: C.textBody,
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              We are Adrix Core. Let's build something that matters.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, background: C.blueHover }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: C.blue,
                  border: "none",
                  padding: "1rem 2.5rem",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                Start Your Project →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;