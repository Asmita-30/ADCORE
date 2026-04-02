// src/pages/WebAppDevelopment.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Professional color palette from audit
const COLORS = {
  primaryBg: "#0A0F1E",
  cardBg: "#111827",
  hoverBg: "#1E293B",
  primaryText: "#F0F4FF",
  leadText: "#CBD5E1",
  bodyText: "#94A3B8",
  mutedText: "#64748B",
  primaryAccent: "#2563EB",
  accentHover: "#3B82F6",
  secondaryAccent: "#06B6D4",
  borderDefault: "#1F2A3D",
  borderHover: "#2D3F5F",
  success: "#10B981",
  warning: "#D97706",
  whatsapp: "#25D366"
};

// Service-specific gradient for hero
const serviceGradient = {
  webapp: "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)"
};

function WebAppDevelopment() {
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
    { icon: "⚡", title: "High Performance", desc: "Optimized for speed with lazy loading, code splitting, and modern architecture" },
    { icon: "📱", title: "Responsive Design", desc: "Perfect experience on desktop, tablet, and mobile devices" },
    { icon: "🔒", title: "Secure Architecture", desc: "Built with security best practices, HTTPS, and data encryption" },
    { icon: "🚀", title: "Scalable", desc: "Grows with your business, handles thousands of concurrent users" },
    { icon: "🎨", title: "Modern UI/UX", desc: "Beautiful interfaces with smooth animations and intuitive navigation" },
    { icon: "🔧", title: "Easy Maintenance", desc: "Clean code structure for easy updates and feature additions" }
  ];

  // Tech stack with logos (using emoji as placeholder for actual logos)
  const techStack = [
    { name: "React.js", logo: "⚛️", color: "#61DAFB" },
    { name: "Next.js", logo: "▲", color: "#ffffff" },
    { name: "Node.js", logo: "🟢", color: "#68A063" },
    { name: "Spring Boot", logo: "🌱", color: "#6DB33F" },
    { name: "PostgreSQL", logo: "🐘", color: "#336791" },
    { name: "MongoDB", logo: "🍃", color: "#4DB33D" },
    { name: "Tailwind CSS", logo: "🌊", color: "#38B2AC" },
    { name: "TypeScript", logo: "📘", color: "#3178C6" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "We understand your business goals, target audience, and technical requirements" },
    { step: "02", title: "Design", desc: "Create wireframes and interactive prototypes with your feedback" },
    { step: "03", title: "Development", desc: "Agile development with regular demos and transparent progress tracking" },
    { step: "04", title: "Testing", desc: "Comprehensive QA including unit tests, integration tests, and user acceptance" },
    { step: "05", title: "Launch", desc: "Deployment with zero downtime and post-launch monitoring" },
    { step: "06", title: "Support", desc: "Ongoing maintenance, updates, and dedicated support" }
  ];

  // Service-specific pricing preview
  const pricingPreview = {
    startingPrice: "₹7,000",
    priceRange: "₹7,000 - ₹25,000+",
    description: "Fixed-price quotes. No surprises."
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in Web App Development services. Can you please share more details?", "_blank");
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        
        .tech-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tech-card:hover {
          transform: translateY(-2px);
          border-color: ${COLORS.primaryAccent};
        }
        .feature-item {
          transition: all 0.2s ease;
        }
        .feature-item:hover {
          transform: translateX(4px);
        }
        .process-step {
          transition: all 0.3s ease;
        }
        .process-step:hover {
          transform: translateY(-4px);
          border-color: ${COLORS.primaryAccent};
        }
      `}</style>

      {/* Hero Section - Service-specific styling */}
      <section ref={heroRef} style={{ 
        minHeight: "60vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: COLORS.primaryBg,
        overflow: "hidden"
      }}>
        {/* Service-specific gradient background */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: serviceGradient.webapp,
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate">
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "0.75rem", 
                letterSpacing: "0.2em", 
                color: COLORS.primaryAccent, 
                marginBottom: "1rem",
                textTransform: "uppercase"
              }}
            >
              Web Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: COLORS.primaryText,
                lineHeight: "1.2"
              }}
            >
              Web App <span style={{ color: COLORS.primaryAccent }}>Development</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ 
                fontSize: "1.125rem", 
                color: COLORS.bodyText, 
                lineHeight: 1.6, 
                maxWidth: 700, 
                margin: "0 auto",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Build powerful, scalable web applications that drive business growth. 
              From MVP to enterprise solutions, we bring your ideas to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              {/* Service-specific CTA button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                style={{
                  background: COLORS.primaryAccent,
                  border: "none",
                  padding: "0.9rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => e.target.style.background = COLORS.accentHover}
                onMouseLeave={(e) => e.target.style.background = COLORS.primaryAccent}
              >
                Get a Web App Quote →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                style={{
                  background: "transparent",
                  border: `1px solid ${COLORS.borderDefault}`,
                  padding: "0.9rem 2rem",
                  borderRadius: 50,
                  color: COLORS.primaryText,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = COLORS.primaryAccent;
                  e.target.style.color = COLORS.primaryAccent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = COLORS.borderDefault;
                  e.target.style.color = COLORS.primaryText;
                }}
              >
                Chat on WhatsApp 💬
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.7rem", 
              letterSpacing: "0.2em", 
              color: COLORS.primaryAccent, 
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              Why Choose Us
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "2rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              What Makes Our <span style={{ color: COLORS.primaryAccent }}>Web Apps</span> Stand Out
            </h2>
            <p style={{ color: COLORS.bodyText, maxWidth: 600, margin: "0 auto", fontFamily: "'Inter', sans-serif" }}>
              We combine cutting-edge technology with user-centric design to deliver exceptional results.
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
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 20,
                  padding: "1.5rem",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ borderColor: COLORS.primaryAccent, y: -4 }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{feature.icon}</div>
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.2rem", 
                  fontWeight: 600, 
                  marginBottom: "0.5rem", 
                  color: COLORS.primaryText 
                }}>{feature.title}</h3>
                <p style={{ color: COLORS.bodyText, fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - With logos */}
      <section style={{ padding: "60px 2rem", background: COLORS.cardBg, position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.7rem", 
              letterSpacing: "0.2em", 
              color: COLORS.primaryAccent, 
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              Technology Stack
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.8rem", 
              fontWeight: 700, 
              marginBottom: "2rem", 
              color: COLORS.primaryText 
            }}>
              Modern Tech <span style={{ color: COLORS.primaryAccent }}>Stack</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="tech-card"
                  style={{
                    background: COLORS.primaryBg,
                    border: `1px solid ${COLORS.borderDefault}`,
                    borderRadius: 50,
                    padding: "0.6rem 1.25rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    cursor: "default"
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{tech.logo}</span>
                  <span style={{ color: COLORS.primaryText, fontSize: "0.85rem", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview - Added to service page */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.borderDefault}`,
              borderRadius: 24,
              padding: "2rem"
            }}
          >
            <div style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.7rem", 
              letterSpacing: "0.2em", 
              color: COLORS.primaryAccent, 
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              Investment
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "2rem", 
              fontWeight: 700, 
              marginBottom: "0.5rem", 
              color: COLORS.primaryText 
            }}>
              {pricingPreview.startingPrice}
              <span style={{ fontSize: "1rem", color: COLORS.mutedText }}>+</span>
            </h2>
            <p style={{ color: COLORS.bodyText, marginBottom: "1rem", fontFamily: "'Inter', sans-serif" }}>
              {pricingPreview.priceRange} • {pricingPreview.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                style={{
                  background: COLORS.primaryAccent,
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer"
                }}
              >
                Get a Web App Quote
              </motion.button>
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "transparent",
                    border: `1px solid ${COLORS.borderDefault}`,
                    padding: "0.75rem 1.5rem",
                    borderRadius: 50,
                    color: COLORS.primaryText,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    cursor: "pointer"
                  }}
                >
                  View Full Pricing →
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.7rem", 
              letterSpacing: "0.2em", 
              color: COLORS.primaryAccent, 
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              Our Process
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.8rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              How We <span style={{ color: COLORS.primaryAccent }}>Work</span>
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
                className="process-step"
                style={{
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 20,
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ borderColor: COLORS.primaryAccent, y: -4 }}
              >
                <div style={{
                  width: 60,
                  height: 60,
                  background: COLORS.primaryAccent,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#fff",
                  fontFamily: "'Sora', sans-serif"
                }}>
                  {step.step}
                </div>
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.1rem", 
                  fontWeight: 600, 
                  marginBottom: "0.5rem", 
                  color: COLORS.primaryText 
                }}>{step.title}</h3>
                <p style={{ color: COLORS.bodyText, fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.cardBg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "2rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Ready to Build Your <span style={{ color: COLORS.primaryAccent }}>Web App</span>?
            </h2>
            <p style={{ color: COLORS.bodyText, marginBottom: "2rem", fontSize: "1rem", fontFamily: "'Inter', sans-serif" }}>
              Let's discuss your project requirements and turn your idea into reality.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                style={{
                  background: COLORS.primaryAccent,
                  border: "none",
                  padding: "1rem 2.5rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
              >
                Get a Web App Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                style={{
                  background: "transparent",
                  border: `1px solid ${COLORS.borderDefault}`,
                  padding: "1rem 2.5rem",
                  borderRadius: 50,
                  color: COLORS.primaryText,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = COLORS.primaryAccent;
                  e.target.style.color = COLORS.primaryAccent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = COLORS.borderDefault;
                  e.target.style.color = COLORS.primaryText;
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

export default WebAppDevelopment;