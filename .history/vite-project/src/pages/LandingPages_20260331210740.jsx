// src/pages/LandingPages.jsx
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

function LandingPages() {
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
    { icon: "⚡", title: "Fast Loading", desc: "Optimized for speed with lazy loading, code splitting, and modern architecture" },
    { icon: "📱", title: "Mobile Responsive", desc: "Perfect experience on desktop, tablet, and mobile devices" },
    { icon: "🎯", title: "Conversion Focused", desc: "Designed to guide visitors toward your desired action" },
    { icon: "🔍", title: "SEO Optimized", desc: "Built with search engine best practices for better visibility" },
    { icon: "🎨", title: "Custom Design", desc: "Unique, brand-aligned designs that stand out from competitors" },
    { icon: "📊", title: "Analytics Ready", desc: "Integrated with Google Analytics for tracking performance" }
  ];

  const templates = [
    { name: "SaaS Landing", icon: "🚀", desc: "Perfect for software and subscription services", price: "₹7,999" },
    { name: "Product Launch", icon: "🎁", desc: "Ideal for new product releases and crowdfunding", price: "₹6,999" },
    { name: "Lead Generation", icon: "📝", desc: "Capture leads with optimized forms and CTAs", price: "₹5,999" },
    { name: "E-Commerce", icon: "🛍️", desc: "Showcase products with compelling visuals", price: "₹8,999" },
    { name: "Event/Webinar", icon: "🎤", desc: "Promote events and drive registrations", price: "₹5,999" },
    { name: "Portfolio", icon: "🎨", desc: "Showcase your work and attract clients", price: "₹4,999" },
    { name: "App Download", icon: "📱", desc: "Drive app installs with dedicated landing pages", price: "₹7,999" },
    { name: "Coming Soon", icon: "⏳", desc: "Build anticipation for upcoming launches", price: "₹3,999" }
  ];

  const conversionStrategies = [
    { icon: "🎯", title: "Clear Value Proposition", desc: "Communicate your unique value in seconds" },
    { icon: "📝", title: "Compelling Headlines", desc: "Grab attention with powerful, benefit-driven copy" },
    { icon: "🖼️", title: "Visual Hierarchy", desc: "Guide users through the page naturally" },
    { icon: "✅", title: "Social Proof", desc: "Testimonials, reviews, and trust badges" },
    { icon: "🔴", title: "Urgency Triggers", desc: "Limited time offers and scarcity elements" },
    { icon: "🎨", title: "CTA Optimization", desc: "Strategically placed, action-oriented buttons" }
  ];

  const processSteps = [
    { step: "01", title: "Strategy", desc: "Understand your goals, target audience, and key messaging" },
    { step: "02", title: "Wireframing", desc: "Create layout structure and user flow" },
    { step: "03", title: "Design", desc: "Craft stunning visuals aligned with your brand" },
    { step: "04", title: "Development", desc: "Build responsive, high-performance page" },
    { step: "05", title: "Testing", desc: "A/B test elements and optimize for conversions" },
    { step: "06", title: "Launch", desc: "Deploy and monitor performance" }
  ];

  const packages = [
    {
      name: "Essential",
      price: "₹7,999",
      period: "one-time",
      features: [
        "1 Custom Landing Page",
        "Mobile Responsive Design",
        "Contact/Opt-in Form",
        "Google Analytics Setup",
        "SEO Optimization",
        "1 Round of Revisions",
        "7 Days Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹14,999",
      period: "one-time",
      features: [
        "1-3 Custom Pages",
        "Advanced Animations",
        "A/B Testing Setup",
        "Social Media Integration",
        "Email Marketing Integration",
        "3 Rounds of Revisions",
        "30 Days Support",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote based",
      features: [
        "Multiple Landing Pages",
        "Full Funnel Strategy",
        "Custom Development",
        "Advanced Analytics",
        "CRM Integration",
        "Unlimited Revisions",
        "Priority Support",
        "Ongoing Optimization"
      ],
      popular: false
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in Landing Page design services. Can you please share more details?", "_blank");
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
        
        .landing-card {
          transition: all 0.3s ease;
        }
        .landing-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
          box-shadow: 0 0 20px rgba(0,229,255,0.1);
        }
        .template-card {
          transition: all 0.3s ease;
        }
        .template-card:hover {
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
        .strategy-card {
          transition: all 0.3s ease;
        }
        .strategy-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
        }
        .template-price {
          font-weight: bold;
          color: #00e5ff;
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
              Landing <span style={{ color: C.cyan }}>Pages</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              High-converting landing pages designed to capture leads, drive sales, and grow your business. 
              Custom designs optimized for maximum conversions.
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
                Get Your Landing Page →
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
              High-Converting <span style={{ color: C.cyan }}>Landing Pages</span>
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
              Every element is designed with one goal in mind: conversions.
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

      {/* Templates Section */}
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
              ✦ POPULAR TEMPLATES
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Ready-to-Use <span style={{ color: C.cyan }}>Designs</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="template-card"
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 16,
                  padding: "1.2rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{template.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 600, marginBottom: "0.3rem", color: "#fff" }}>{template.name}</h3>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.75rem", marginBottom: "0.5rem" }}>{template.desc}</p>
                <div className="template-price" style={{ fontSize: "1rem", fontWeight: "bold" }}>{template.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Strategies Section */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ CONVERSION OPTIMIZATION
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Strategies That <span style={{ color: C.cyan }}>Convert</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {conversionStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="strategy-card"
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 16,
                  padding: "1rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{strategy.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.2rem", color: "#fff" }}>{strategy.title}</h3>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.75rem" }}>{strategy.desc}</p>
              </motion.div>
            ))}
          </div>
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
              How We Build <span style={{ color: C.cyan }}>Your Page</span>
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
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
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
      <section style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Ready to <span style={{ color: C.cyan }}>Convert More Visitors</span>?
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>
              Let's create a landing page that turns visitors into customers.
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
                Get Your Landing Page
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

export default LandingPages;