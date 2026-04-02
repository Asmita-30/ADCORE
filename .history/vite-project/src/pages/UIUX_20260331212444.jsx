// src/pages/UIUX.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
};

function UIUX() {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );
  }, []);

  const features = [
    { icon: "🎨", title: "User Research", desc: "Deep dive into user behavior, needs, and pain points to inform design decisions" },
    { icon: "📱", title: "Wireframing", desc: "Low-fidelity layouts to establish information architecture and user flow" },
    { icon: "🎭", title: "Prototyping", desc: "Interactive prototypes to test concepts before development" },
    { icon: "🌈", title: "Visual Design", desc: "Stunning, brand-aligned interfaces with modern design trends" },
    { icon: "⚡", title: "Interaction Design", desc: "Smooth animations, micro-interactions, and intuitive gestures" },
    { icon: "📊", title: "Usability Testing", desc: "Validate designs with real users and iterate based on feedback" }
  ];

  const deliverables = [
    { name: "User Personas", icon: "👥", desc: "Detailed profiles representing your target users" },
    { name: "User Journey Maps", icon: "🗺️", desc: "Visual maps showing user experience across touchpoints" },
    { name: "Wireframes", icon: "📐", desc: "Structural layouts defining page hierarchy and components" },
    { name: "High-Fidelity Mockups", icon: "🎨", desc: "Pixel-perfect designs with exact colors, typography, and assets" },
    { name: "Clickable Prototypes", icon: "🖱️", desc: "Interactive prototypes for user testing and stakeholder approval" },
    { name: "Design Systems", icon: "🏗️", desc: "Component libraries for consistent, scalable design" },
    { name: "Style Guides", icon: "📘", desc: "Comprehensive documentation of design standards" },
    { name: "Handoff Files", icon: "📦", desc: "Organized Figma/Sketch files with developer notes" }
  ];

  const processSteps = [
    { step: "01", title: "Discover", desc: "Research, stakeholder interviews, and competitor analysis" },
    { step: "02", title: "Define", desc: "Synthesize insights into user personas and problem statements" },
    { step: "03", title: "Ideate", desc: "Brainstorm solutions, sketch concepts, and map user flows" },
    { step: "04", title: "Design", desc: "Create wireframes, visual designs, and interactive prototypes" },
    { step: "05", title: "Test", desc: "Conduct usability testing and iterate based on feedback" },
    { step: "06", title: "Deliver", desc: "Prepare handoff files and design documentation" }
  ];

  const tools = [
    { name: "Figma", icon: "🎨", color: "#F24E1E", desc: "Collaborative interface design" },
    { name: "Adobe XD", icon: "✨", color: "#FF61F6", desc: "UX/UI design and prototyping" },
    { name: "Sketch", icon: "✏️", color: "#F7B500", desc: "Vector-based design tool" },
    { name: "InVision", icon: "📱", color: "#FF3366", desc: "Prototyping and collaboration" },
    { name: "Miro", icon: "📋", color: "#FFD02F", desc: "Whiteboarding and workshops" },
    { name: "Zeplin", icon: "📦", color: "#F5C542", desc: "Design handoff and collaboration" }
  ];

  const packages = [
    {
      name: "Essential",
      price: "₹19,999",
      period: "per project",
      features: [
        "User Research & Analysis",
        "Wireframes (5-7 screens)",
        "High-Fidelity Mockups",
        "Interactive Prototype",
        "Basic Design System",
        "Design Handoff Files",
        "1 Round of Revisions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹49,999",
      period: "per project",
      features: [
        "Comprehensive User Research",
        "User Personas & Journey Maps",
        "Wireframes (10-15 screens)",
        "High-Fidelity Mockups",
        "Fully Interactive Prototype",
        "Complete Design System",
        "Usability Testing",
        "3 Rounds of Revisions",
        "Developer Handoff"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote based",
      features: [
        "Full Product Design",
        "Complex Design System",
        "Design Workshops",
        "Team Training",
        "Ongoing Design Support",
        "Unlimited Revisions",
        "Dedicated Designer",
        "SLA Agreement"
      ],
      popular: false
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in UI/UX Design services. Can you please share more details?", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .design-card {
          transition: all 0.3s ease;
        }
        .design-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
          box-shadow: 0 0 20px rgba(0,229,255,0.1);
        }
        .deliverable-card {
          transition: all 0.3s ease;
        }
        .deliverable-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
        }
        .package-card {
          transition: all 0.3s ease;
        }
        .package-card:hover {
          transform: translateY(-10px);
        }
        .feature-item {
          transition: all 0.2s ease;
        }
        .feature-item:hover {
          transform: translateX(5px);
        }
        .tool-card {
          transition: all 0.3s ease;
        }
        .tool-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "60vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: "linear-gradient(135deg, #020408, #050a15)",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(0,229,255,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 60%, rgba(109,92,255,0.06) 0%, transparent 50%)`,
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate">
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}
            >
              ✦ OUR SERVICES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              UI/UX <span style={{ color: C.cyan }}>Design</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Create beautiful, intuitive digital experiences that users love. 
              We blend aesthetics with functionality to design products that drive engagement and satisfaction.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(0,229,255,0.3)` }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
              >
                Start Your Design →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.cyan}`,
                  padding: "0.8rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
              >
                Chat on WhatsApp 💬
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ OUR APPROACH
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Human-Centered <span style={{ color: C.cyan }}>Design</span>
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
              We put users at the heart of every design decision to create meaningful experiences.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="feature-item"
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 20,
                  padding: "1.5rem",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ borderColor: C.cyan, y: -5 }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{feature.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{feature.title}</h3>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ WHAT YOU GET
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Design <span style={{ color: C.cyan }}>Deliverables</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {deliverables.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="deliverable-card"
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 16,
                  padding: "1.2rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 600, marginBottom: "0.3rem", color: "#fff" }}>{item.name}</h3>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.8rem" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ OUR TOOLS
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2rem", color: "#fff" }}>
              Industry-Leading <span style={{ color: C.cyan }}>Design Tools</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="tool-card"
                  style={{
                    background: "rgba(0,12,30,0.88)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    borderRadius: 16,
                    padding: "1rem 1.5rem",
                    textAlign: "center",
                    cursor: "default"
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.3rem" }}>{tool.icon}</div>
                  <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>{tool.name}</div>
                  <div style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem", marginTop: "0.2rem" }}>{tool.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ OUR PROCESS
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              How We Bring <span style={{ color: C.cyan }}>Your Vision</span> to Life
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 20,
                  padding: "1.5rem",
                  textAlign: "center"
                }}
              >
                <div style={{
                  width: 60,
                  height: 60,
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#fff"
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{step.title}</h3>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.85rem", lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      {/* <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ PRICING
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Choose Your <span style={{ color: C.cyan }}>Design Package</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="package-card"
                style={{
                  background: pkg.popular ? "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(109,92,255,0.1))" : "rgba(0,12,30,0.5)",
                  border: `1px solid ${pkg.popular ? C.cyan : "rgba(0,229,255,0.2)"}`,
                  borderRadius: 24,
                  padding: "2rem",
                  position: "relative",
                  textAlign: "center"
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: C.cyan,
                    color: C.dark,
                    padding: "0.2rem 1rem",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                    fontWeight: "bold"
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{pkg.name}</h3>
                <div style={{ marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2rem", fontWeight: "bold", color: C.cyan }}>{pkg.price}</span>
                  <span style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.8rem" }}> / {pkg.period}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0", textAlign: "left" }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(224,247,255,0.7)", fontSize: "0.85rem" }}>
                      <span style={{ color: C.cyan }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  style={{
                    width: "100%",
                    background: pkg.popular ? `linear-gradient(135deg, ${C.cyan}, ${C.purple})` : "transparent",
                    border: `1px solid ${C.cyan}`,
                    padding: "0.8rem",
                    borderRadius: 50,
                    color: "#fff",
                    fontFamily: "'Orbitron',monospace",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎨</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Ready to Create <span style={{ color: C.cyan }}>Beautiful Experiences</span>?
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>
              Let's bring your vision to life with stunning, user-centered design.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  border: "none",
                  padding: "1rem 2.5rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
              >
                Start a Design Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.cyan}`,
                  padding: "1rem 2.5rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
              >
                WhatsApp Us 💬
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default UIUX;