// src/pages/WebAppDevelopment.jsx
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

  const techStack = [
    { name: "React.js", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#ffffff" },
    { name: "Node.js", icon: "🟢", color: "#68A063" },
    { name: "Spring Boot", icon: "🌱", color: "#6DB33F" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "MongoDB", icon: "🍃", color: "#4DB33D" },
    { name: "Tailwind CSS", icon: "🌊", color: "#38B2AC" },
    { name: "TypeScript", icon: "📘", color: "#3178C6" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "We understand your business goals, target audience, and technical requirements" },
    { step: "02", title: "Design", desc: "Create wireframes and interactive prototypes with your feedback" },
    { step: "03", title: "Development", desc: "Agile development with regular demos and transparent progress tracking" },
    { step: "04", title: "Testing", desc: "Comprehensive QA including unit tests, integration tests, and user acceptance" },
    { step: "05", title: "Launch", desc: "Deployment with zero downtime and post-launch monitoring" },
    { step: "06", title: "Support", desc: "Ongoing maintenance, updates, and dedicated support" }
  ];

  const packages = [
    {
      name: "Startup",
      price: "₹49,999",
      period: "one-time",
      features: [
        "Custom Web Application",
        "Up to 10 Pages/Screens",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
        "3 Months Support",
        "Basic SEO Setup"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "₹99,999",
      period: "one-time",
      features: [
        "Advanced Web Application",
        "Unlimited Pages/Screens",
        "API Development",
        "Role-Based Access",
        "Real-time Features",
        "6 Months Support",
        "Advanced SEO",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote based",
      features: [
        "Custom Enterprise Solution",
        "Microservices Architecture",
        "AI/ML Integration",
        "High Availability Setup",
        "24/7 Priority Support",
        "SLA Agreement",
        "Dedicated Team",
        "Custom Training"
      ],
      popular: false
    }
  ];

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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .tech-card {
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
          box-shadow: 0 0 20px rgba(0,229,255,0.1);
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
              Web App <span style={{ color: C.cyan }}>Development</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
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
                Start Your Project →
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
              ✦ WHY CHOOSE US
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              What Makes Our <span style={{ color: C.cyan }}>Web Apps</span> Stand Out
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
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

      {/* Tech Stack Section */}
      <section style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ TECHNOLOGY
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2rem", color: "#fff" }}>
              Modern Tech <span style={{ color: C.cyan }}>Stack</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="tech-card"
                  style={{
                    background: "rgba(0,12,30,0.88)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    borderRadius: 50,
                    padding: "0.6rem 1.5rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    cursor: "default"
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{tech.icon}</span>
                  <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500 }}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              ✦ OUR PROCESS
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              How We <span style={{ color: C.cyan }}>Work</span>
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
              ✦ PRICING
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Choose Your <span style={{ color: C.cyan }}>Package</span>
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
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Ready to Build Your <span style={{ color: C.cyan }}>Web App</span>?
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>
              Let's discuss your project requirements and turn your idea into reality.
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
                Start a Project
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

export default WebAppDevelopment;