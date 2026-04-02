// src/pages/LandingPages.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import landingPageHeroBg from "../assets/images/Landing-bg.png";

gsap.registerPlugin(ScrollTrigger);

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

function LandingPages() {
  const heroRef = useRef();
  const [activeFaq, setActiveFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );
  }, []);

  // C-11: Service-specific imagery and hero differentiation
  const features = [
    { icon: "⚡", title: "Fast Loading", desc: "Optimized for speed with lazy loading, code splitting, and modern architecture" },
    { icon: "📱", title: "Mobile Responsive", desc: "Perfect experience on desktop, tablet, and mobile devices" },
    { icon: "🎯", title: "Conversion Focused", desc: "Designed to guide visitors toward your desired action" },
    { icon: "🔍", title: "SEO Optimized", desc: "Built with search engine best practices for better visibility" },
    { icon: "🎨", title: "Custom Design", desc: "Unique, brand-aligned designs that stand out from competitors" },
    { icon: "📊", title: "Analytics Ready", desc: "Integrated with Google Analytics for tracking performance" }
  ];

  // C-12: Consistent icon styling
  const templates = [
    { name: "SaaS Landing", icon: "🚀", desc: "Perfect for software and subscription services", price: "₹7,999" },
    { name: "Product Launch", icon: "🎁", desc: "Ideal for new product releases and crowdfunding", price: "₹6,999" },
    { name: "Lead Generation", icon: "📝", desc: "Capture leads with optimized forms and CTAs", price: "₹5,999" },
    { name: "E-Commerce", icon: "🛍️", desc: "Showcase products with compelling visuals", price: "₹8,999" }
  ];

  const conversionStrategies = [
    { icon: "🎯", title: "Clear Value Proposition", desc: "Communicate your unique value in seconds" },
    { icon: "📝", title: "Compelling Headlines", desc: "Grab attention with powerful, benefit-driven copy" },
    { icon: "🖼️", title: "Visual Hierarchy", desc: "Guide users through the page naturally" },
    { icon: "✅", title: "Social Proof", desc: "Testimonials, reviews, and trust badges" }
  ];

  const processSteps = [
    { step: "01", title: "Strategy", desc: "Understand your goals, target audience, and key messaging" },
    { step: "02", title: "Design", desc: "Craft stunning visuals aligned with your brand" },
    { step: "03", title: "Development", desc: "Build responsive, high-performance page" },
    { step: "04", title: "Launch", desc: "Deploy and monitor performance" }
  ];

  // C-15: Condensed pricing preview on service page
  const pricingPreview = {
    startingPrice: "₹4,999",
    description: "Custom landing pages designed to convert visitors into customers",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimized",
      "Analytics Ready"
    ]
  };

  const faqs = [
    {
      question: "How long does it take to build a landing page?",
      answer: "Most landing pages are completed within 5-7 business days. Complex pages with custom animations may take 10-14 days."
    },
    {
      question: "Do I need to provide content and images?",
      answer: "We can work with your content, or we can help create copy and source images. We recommend providing brand guidelines and key messaging."
    },
    {
      question: "Will my landing page be mobile-friendly?",
      answer: "Absolutely. All our landing pages are fully responsive and optimized for desktop, tablet, and mobile devices."
    },
    {
      question: "Do you integrate with email marketing tools?",
      answer: "Yes, we integrate with Mailchimp, ConvertKit, ActiveCampaign, and other major email marketing platforms."
    },
    {
      question: "What about ongoing maintenance?",
      answer: "We offer maintenance packages starting at ₹2,500/month that include updates, security patches, and performance monitoring."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in Landing Page design services. Can you please share more details?", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Responsive styles
  const responsiveStyles = `
    @media (max-width: 1024px) {
      .hero-padding {
        padding: 100px 1.5rem 50px !important;
      }
      .section-padding {
        padding: 60px 1.5rem !important;
      }
      .features-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .templates-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.2rem !important;
      }
      .strategies-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.2rem !important;
      }
      .process-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .hero-title {
        font-size: clamp(2rem, 4vw, 2.5rem) !important;
      }
      .hero-subtitle {
        font-size: 1rem !important;
      }
      .section-title {
        font-size: 1.8rem !important;
      }
      .pricing-card {
        padding: 1.5rem !important;
        margin: 0 1rem !important;
      }
    }
    
    @media (max-width: 768px) {
      .hero-padding {
        padding: 80px 1rem 40px !important;
      }
      .section-padding {
        padding: 40px 1rem !important;
      }
      .features-grid, .templates-grid, .strategies-grid, .process-grid {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      .hero-title {
        font-size: clamp(1.5rem, 5vw, 1.8rem) !important;
      }
      .hero-subtitle {
        font-size: 0.9rem !important;
      }
      .section-title {
        font-size: 1.4rem !important;
      }
      .hero-buttons {
        flex-direction: column !important;
        width: 100% !important;
      }
      .hero-buttons button {
        width: 100% !important;
      }
      .feature-card, .template-card, .strategy-card, .process-card {
        padding: 1.2rem !important;
      }
      .feature-icon, .template-icon {
        font-size: 2rem !important;
      }
      .feature-title, .template-title, .strategy-title, .process-title {
        font-size: 1rem !important;
      }
      .pricing-features {
        flex-wrap: wrap !important;
        gap: 0.5rem !important;
      }
      .pricing-features > div {
        font-size: 0.7rem !important;
        padding: 0.2rem 0.6rem !important;
      }
      .faq-question {
        font-size: 0.9rem !important;
        padding: 1rem !important;
      }
      .faq-answer {
        padding: 0 1rem 1rem 1rem !important;
        font-size: 0.85rem !important;
      }
      .cta-title {
        font-size: 1.5rem !important;
      }
      .cta-buttons {
        flex-direction: column !important;
        gap: 0.8rem !important;
      }
      .cta-buttons button {
        width: 100% !important;
        padding: 0.8rem 1.5rem !important;
      }
      .hero-badge {
        font-size: 0.7rem !important;
      }
      .process-step-number {
        width: 45px !important;
        height: 45px !important;
        font-size: 1.2rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .hero-padding {
        padding: 70px 0.8rem 35px !important;
      }
      .section-padding {
        padding: 30px 0.8rem !important;
      }
      .hero-title {
        font-size: 1.4rem !important;
      }
      .hero-subtitle {
        font-size: 0.85rem !important;
      }
      .section-title {
        font-size: 1.2rem !important;
      }
      .feature-card, .template-card, .strategy-card, .process-card {
        padding: 1rem !important;
      }
      .pricing-card {
        padding: 1.2rem !important;
      }
      .template-price {
        font-size: 0.9rem !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      
      {/* Hero Section - C-11: Differentiated with landing page specific background */}
      <section ref={heroRef} className="hero-padding" style={{ 
        minHeight: "60vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: `linear-gradient(rgba(10, 15, 30, 0.78), rgba(10, 15, 30, 0.85)), url(${landingPageHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden"
      }}>
        {/* Landing page specific gradient pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(37,99,235,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 60%, rgba(6,182,212,0.06) 0%, transparent 50%),
                           repeating-linear-gradient(90deg, rgba(37,99,235,0.02) 0px, rgba(37,99,235,0.02) 1px, transparent 1px, transparent 40px)`,
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate">
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-badge"
              style={{
                display: "inline-block",
                background: "rgba(30, 58, 95, 0.8)",
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
              ✦ LANDING PAGES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-title"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: C.textPrimary,
                lineHeight: 1.2,
              }}
            >
              Convert Visitors into{" "}
              <span style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Customers
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-subtitle"
              style={{
                fontSize: "1.1rem",
                color: C.textLead,
                lineHeight: 1.6,
                maxWidth: 700,
                margin: "0 auto"
              }}
            >
              High-converting landing pages designed to capture leads, drive sales, and grow your business. 
              Custom designs optimized for maximum conversions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-buttons"
              style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              {/* C-13: Service-specific CTA */}
              <motion.button
                whileHover={{ scale: 1.05, background: C.blueHover }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{
                  background: C.blue,
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
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
                  border: `1px solid ${C.border}`,
                  padding: "0.8rem 2rem",
                  borderRadius: 8,
                  color: C.textPrimary,
                  fontFamily: "'Inter', sans-serif",
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

      {/* Features Section - C-12: Consistent icon styling */}
      <section className="section-padding" style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
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
              ✦ WHY CHOOSE US
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              High-Converting <span style={{ color: C.blue }}>Landing Pages</span>
            </h2>
            <p style={{ color: C.textBody, maxWidth: 600, margin: "0 auto" }}>
              Every element is designed with one goal in mind: conversions.
            </p>
          </motion.div>

          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="feature-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "1.5rem",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ borderColor: C.blue, y: -5 }}
              >
                <div className="feature-icon" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{feature.icon}</div>
                <h3 className="feature-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", color: C.textPrimary }}>{feature.title}</h3>
                <p style={{ color: C.textBody, fontSize: "0.9rem", lineHeight: 1.6 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section - C-12: Consistent styling */}
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
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
              ✦ POPULAR TEMPLATES
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Ready-to-Use <span style={{ color: C.blue }}>Designs</span>
            </h2>
          </motion.div>

          <div className="templates-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="template-card"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "1.2rem",
                  textAlign: "center"
                }}
                whileHover={{ borderColor: C.blue, y: -5 }}
              >
                <div className="template-icon" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{template.icon}</div>
                <h3 className="template-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.3rem", color: C.textPrimary }}>{template.name}</h3>
                <p style={{ color: C.textBody, fontSize: "0.75rem", marginBottom: "0.5rem" }}>{template.desc}</p>
                <div className="template-price" style={{ fontSize: "1rem", fontWeight: 700, color: C.blue }}>{template.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Strategies Section */}
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
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
              ✦ CONVERSION OPTIMIZATION
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Strategies That <span style={{ color: C.blue }}>Convert</span>
            </h2>
          </motion.div>

          <div className="strategies-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {conversionStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="strategy-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "1rem",
                  textAlign: "center"
                }}
                whileHover={{ borderColor: C.blue }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{strategy.icon}</div>
                <h3 className="strategy-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.2rem", color: C.textPrimary }}>{strategy.title}</h3>
                <p style={{ color: C.textBody, fontSize: "0.75rem" }}>{strategy.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Simplified to 4 steps */}
      <section className="section-padding" style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
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
              ✦ OUR PROCESS
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              How We Build <span style={{ color: C.blue }}>Your Page</span>
            </h2>
          </motion.div>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="process-card"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "1.5rem",
                  textAlign: "center"
                }}
              >
                <div className="process-step-number" style={{
                  width: 60,
                  height: 60,
                  background: C.blue,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff"
                }}>
                  {step.step}
                </div>
                <h3 className="process-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem", color: C.textPrimary }}>{step.title}</h3>
                <p style={{ color: C.textBody, fontSize: "0.85rem", lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C-15: Condensed Pricing Preview on Service Page */}
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.surface }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pricing-card"
            style={{
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "2rem",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎯</div>
            <p style={{ color: C.textBody, marginBottom: "1.5rem" }}>{pricingPreview.description}</p>
            
            <div className="pricing-features" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
              {pricingPreview.features.map((feature, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: C.surface, padding: "0.3rem 0.8rem", borderRadius: 20 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4 9L2 7" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: "0.75rem", color: C.textBody }}>{feature}</span>
                </div>
              ))}
            </div>
            
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.02, background: C.blueHover }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: C.blue,
                    border: "none",
                    padding: "0.7rem 1.5rem",
                    borderRadius: 8,
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer"
                  }}
                >
                  View Full Pricing →
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  padding: "0.7rem 1.5rem",
                  borderRadius: 8,
                  color: C.textPrimary,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Get Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Accordion style */}
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
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
              ✦ FAQ
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: C.textPrimary }}>
              Frequently Asked <span style={{ color: C.blue }}>Questions</span>
            </h2>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  marginBottom: "1rem",
                  overflow: "hidden"
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="faq-question"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.25rem 1.5rem",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1rem", fontWeight: 600, color: C.textPrimary, margin: 0 }}>
                    {faq.question}
                  </h3>
                  <span style={{ color: C.blue, fontSize: "1.2rem", transform: activeFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                    ▼
                  </span>
                </button>
                {activeFaq === i && (
                  <div className="faq-answer" style={{ padding: "0 1.5rem 1.25rem 1.5rem" }}>
                    <p style={{ fontSize: "0.9rem", color: C.textBody, lineHeight: 1.6, margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: C.surface }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h2 className="cta-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Ready to <span style={{ color: C.blue }}>Convert More Visitors</span>?
            </h2>
            <p style={{ color: C.textBody, marginBottom: "2rem", fontSize: "1rem" }}>
              Let's create a landing page that turns visitors into customers.
            </p>
            <div className="cta-buttons" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.05, background: C.blueHover }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{
                  background: C.blue,
                  border: "none",
                  padding: "1rem 2.5rem",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
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
                  border: `1px solid ${C.border}`,
                  padding: "1rem 2.5rem",
                  borderRadius: 8,
                  color: C.textPrimary,
                  fontFamily: "'Inter', sans-serif",
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