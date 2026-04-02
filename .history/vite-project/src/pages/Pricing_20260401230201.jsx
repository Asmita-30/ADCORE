// src/pages/Pricing.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

// Pricing Plans Data
const PRICING_PLANS = [
  {
    id: "static",
    name: "Static Website",
    tagline: "Perfect for portfolios & small businesses",
    price: "₹7,000 – ₹10,000",
    priceRange: { min: 7000, max: 10000 },
    popular: false,
    icon: "🌐",
    color: C.blueHover,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "Social Media Integration",
      "Google Analytics"
    ],
    additionalFeatures: [
      "Custom Design (Add-on)",
      "CMS / Backend (Add-on)"
    ],
    timeline: "5–7 Days",
    bestFor: "Small businesses, portfolios, landing pages"
  },
  {
    id: "dynamic",
    name: "Dynamic Website",
    tagline: "Ideal for startups & growing businesses",
    price: "₹14,000 – ₹17,000",
    priceRange: { min: 14000, max: 17000 },
    popular: true,
    icon: "⚡",
    color: C.blue,
    features: [
      "Unlimited Pages",
      "Custom Design (Figma)",
      "CMS / Admin Panel",
      "User Authentication",
      "Database Integration",
      "Advanced SEO"
    ],
    additionalFeatures: [
      "E-commerce (Add-on)",
      "AI Features (Add-on)"
    ],
    timeline: "14–21 Days",
    bestFor: "Startups, blogs, membership sites, service platforms"
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    tagline: "Complete online store solution",
    price: "₹25,000+",
    priceRange: { min: 25000, max: null },
    popular: false,
    icon: "🛒",
    color: C.cyan,
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Gateway",
      "Order Management",
      "User Accounts",
      "Inventory Management"
    ],
    additionalFeatures: [
      "Shipping Integration",
      "Discount & Coupons"
    ],
    timeline: "21–30 Days",
    bestFor: "Online stores, retail businesses, marketplaces"
  }
];

// Add-on Services - Consolidated below pricing cards
const ADDONS = [
  { name: "Custom Animations", price: "₹3,000", icon: "🎬", desc: "Unique motion design & interactions" },
  { name: "AI Chatbot Integration", price: "₹5,000", icon: "🤖", desc: "Intelligent customer support" },
  { name: "Advanced SEO Package", price: "₹4,000", icon: "📈", desc: "Complete search optimization" },
  { name: "Priority Support (6 months)", price: "₹5,000", icon: "⭐", desc: "24/7 priority response" }
];

// FAQ Data - Consolidated into accordion below add-ons
const FAQS = [
  {
    question: "What's included in the price?",
    answer: "All our packages include design, development, testing, and deployment. You get a fully functional website ready to launch. Domain and hosting costs are separate."
  },
  {
    question: "Do I need to pay upfront?",
    answer: "We require 50% advance payment to start the project, and the remaining 50% before final delivery. This ensures commitment from both sides."
  },
  {
    question: "How long does it take?",
    answer: "Static websites take 5-7 days, dynamic websites take 14-21 days, and e-commerce websites take 21-30 days, depending on complexity and feature requirements."
  },
  {
    question: "Do you provide hosting?",
    answer: "We can help you set up hosting on your preferred provider (AWS, DigitalOcean, Netlify, Vercel). Hosting costs are separate and billed directly by the provider."
  },
  {
    question: "Can I add features later?",
    answer: "Absolutely! We build scalable websites that can be extended with additional features as your business grows. Contact us for custom quotes."
  },
  {
    question: "What about maintenance?",
    answer: "We offer maintenance plans starting at ₹5,000/month that include updates, backups, security patches, and priority support."
  }
];

function Pricing() {
  const heroRef = useRef();
  const [activeFaq, setActiveFaq] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorStep, setCalculatorStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState({
    planType: "",
    features: [],
    timeline: ""
  });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Pricing cards animations
    gsap.fromTo(".pricing-card", 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, scrollTrigger: { trigger: ".pricing-grid", start: "top 80%" } }
    );

    // FAQ animations
    gsap.fromTo(".faq-item", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, scrollTrigger: { trigger: ".faq-section", start: "top 80%" } }
    );
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getEstimatedPrice = () => {
    let basePrice = 0;
    if (calculatorData.planType === "static") basePrice = 8500;
    else if (calculatorData.planType === "dynamic") basePrice = 15500;
    else if (calculatorData.planType === "ecommerce") basePrice = 25000;
    
    const addonCost = calculatorData.features.length * 2000;
    const timelineMultiplier = calculatorData.timeline === "urgent" ? 1.2 : 1;
    
    return Math.round((basePrice + addonCost) * timelineMultiplier);
  };

  const openCalculator = (planId) => {
    setCalculatorData({ ...calculatorData, planType: planId });
    setShowCalculator(true);
    setCalculatorStep(1);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section - Removed full-screen quote section, integrated into header */}
      <section ref={heroRef} style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: C.bg,
        overflow: "hidden"
      }}>
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
              ✦ TRANSPARENT PRICING
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: C.textPrimary,
                lineHeight: 1.2,
              }}
            >
              No Surprises.{" "}
              <span style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Just Results.
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
                margin: "0 auto"
              }}
            >
              Fixed-price packages. You know exactly what you're getting before we start. 
              No hidden fees, no scope surprises.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="pricing-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                style={{
                  background: C.bg,
                  border: `1px solid ${plan.popular ? plan.color : C.border}`,
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: plan.popular ? `0 0 32px ${plan.color}20` : "none"
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: C.blue,
                    padding: "0.3rem 1rem",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#fff"
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ padding: "2rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{plan.icon}</div>
                  <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: plan.color, marginBottom: "0.5rem" }}>
                    {plan.name}
                  </h2>
                  <p style={{ fontSize: "0.8rem", color: C.textMuted, marginBottom: "1rem" }}>{plan.tagline}</p>
                  <div style={{ marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, color: C.textPrimary }}>
                      {plan.price}
                    </span>
                    {plan.priceRange.max && (
                      <span style={{ fontSize: "0.9rem", color: C.textMuted }}> / project</span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: C.textMuted, marginBottom: "1rem" }}>
                    ⏱ {plan.timeline}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: C.blue, marginBottom: "1.5rem" }}>
                    Best for: {plan.bestFor}
                  </p>
                  
                  <div style={{ marginBottom: "1.5rem" }}>
                    {plan.features.map((feature, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13 4L6 11L3 8" stroke={plan.color} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span style={{ fontSize: "0.85rem", color: C.textBody }}>{feature}</span>
                      </div>
                    ))}
                    {plan.additionalFeatures && plan.additionalFeatures.map((feature, i) => (
                      <div key={`addon-${i}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#D97706" strokeWidth="1.5" />
                          <path d="M8 5v3M8 11h.01" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span style={{ fontSize: "0.85rem", color: "#D97706" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
                    <motion.button
                      whileHover={{ scale: 1.02, background: C.blueHover }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openCalculator(plan.id)}
                      style={{
                        width: "100%",
                        background: plan.popular ? C.blue : "transparent",
                        border: `1px solid ${plan.popular ? C.blue : C.border}`,
                        padding: "0.8rem",
                        borderRadius: 8,
                        color: plan.popular ? "#fff" : C.textPrimary,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        cursor: "pointer"
                      }}
                    >
                      Get Exact Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={scrollToContact}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: `1px solid ${C.border}`,
                        padding: "0.8rem",
                        borderRadius: 8,
                        color: C.textPrimary,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        cursor: "pointer"
                      }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                  
                  {/* CV-04: Reassurance below CTA */}
                  <p style={{
                    fontSize: "0.7rem",
                    color: C.textMuted,
                    textAlign: "center",
                    marginTop: "0.75rem"
                  }}>
                    No commitment required. Free 30-min discovery call.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section - Consolidated below pricing cards */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
              ✦ ADD-ONS
            </div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Customize Your <span style={{ color: C.blue }}>Package</span>
            </h2>
            <p style={{ color: C.textBody, marginBottom: "3rem" }}>
              Add these features to any package for an enhanced experience
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ y: -5 }}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "1.5rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{addon.icon}</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: C.textPrimary }}>{addon.name}</h3>
                <p style={{ fontSize: "0.75rem", color: C.textMuted, marginBottom: "0.5rem" }}>{addon.desc}</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: C.blue }}>{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee - Integrated into pricing section */}
      <section style={{ padding: "0 2rem 60px", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: "2rem"
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>💰</div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: C.blue, marginBottom: "0.5rem" }}>
              100% Satisfaction Guarantee
            </h3>
            <p style={{ fontSize: "0.9rem", color: C.textBody, lineHeight: 1.6 }}>
              Not happy with the result? We'll revise until you're satisfied. If we can't meet your expectations, you get a full refund.
              No questions asked. That's our promise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Accordion style, integrated below add-ons */}
      <section className="faq-section" style={{ padding: "60px 2rem", background: C.surface, position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              width: "fit-content"
            }}>
              ✦ FAQ
            </div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 700, marginBottom: "3rem", textAlign: "center", color: C.textPrimary }}>
              Frequently Asked <span style={{ color: C.blue }}>Questions</span>
            </h2>
          </motion.div>
          <div>
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  marginBottom: "1rem",
                  overflow: "hidden"
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
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
                  <div style={{ padding: "0 1.5rem 1.25rem 1.5rem" }}>
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
      <section style={{ padding: "60px 2rem 100px", position: "relative", zIndex: 2, background: C.bg }}>
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
              padding: "3rem"
            }}
          >
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Ready to Get <span style={{ color: C.blue }}>Started?</span>
            </h2>
            <p style={{ fontSize: "1rem", color: C.textBody, marginBottom: "2rem", lineHeight: 1.6 }}>
              Tell us about your project — we respond within 4 hours.
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
                  cursor: "pointer"
                }}
              >
                Start Your Project →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator Modal */}
      {showCalculator && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.95)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backdropFilter: "blur(10px)"
        }} onClick={() => setShowCalculator(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              maxWidth: 500,
              width: "100%",
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "2rem",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCalculator(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: C.surface,
                border: `1px solid ${C.border}`,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                fontSize: "1.2rem",
                cursor: "pointer",
                color: C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: C.blue, marginBottom: "1rem" }}>
              Get Your Exact Quote
            </h2>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {[1, 2, 3].map(step => (
                  <div key={step} style={{
                    flex: 1,
                    height: 4,
                    background: calculatorStep >= step ? C.blue : C.border,
                    borderRadius: 2
                  }} />
                ))}
              </div>

              {calculatorStep === 1 && (
                <div>
                  <h3 style={{ fontSize: "1rem", color: C.textPrimary, marginBottom: "1rem" }}>Select your plan:</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {PRICING_PLANS.map(plan => (
                      <button
                        key={plan.id}
                        onClick={() => {
                          setCalculatorData({ ...calculatorData, planType: plan.id });
                          setCalculatorStep(2);
                        }}
                        style={{
                          background: calculatorData.planType === plan.id ? C.surface : "transparent",
                          border: `1px solid ${calculatorData.planType === plan.id ? C.blue : C.border}`,
                          borderRadius: 12,
                          padding: "1rem",
                          textAlign: "left",
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ fontWeight: 600, color: C.textPrimary }}>{plan.name}</div>
                        <div style={{ fontSize: "0.8rem", color: C.blue }}>{plan.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {calculatorStep === 2 && (
                <div>
                  <h3 style={{ fontSize: "1rem", color: C.textPrimary, marginBottom: "1rem" }}>Select add-ons:</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {ADDONS.map(addon => (
                      <label key={addon.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setCalculatorData({
                                ...calculatorData,
                                features: [...calculatorData.features, addon.name]
                              });
                            } else {
                              setCalculatorData({
                                ...calculatorData,
                                features: calculatorData.features.filter(f => f !== addon.name)
                              });
                            }
                          }}
                          style={{ width: 18, height: 18, cursor: "pointer", accentColor: C.blue }}
                        />
                        <span style={{ color: C.textBody, flex: 1 }}>{addon.name}</span>
                        <span style={{ color: C.blue, fontSize: "0.8rem" }}>{addon.price}</span>
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={() => setCalculatorStep(3)}
                    style={{
                      width: "100%",
                      marginTop: "1.5rem",
                      background: C.blue,
                      border: "none",
                      padding: "0.8rem",
                      borderRadius: 8,
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Continue →
                  </button>
                </div>
              )}

              {calculatorStep === 3 && (
                <div>
                  <h3 style={{ fontSize: "1rem", color: C.textPrimary, marginBottom: "1rem" }}>Timeline:</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {[
                      { id: "normal", label: "Standard Timeline", desc: "Regular delivery schedule" },
                      { id: "urgent", label: "Urgent (Priority)", desc: "+20% rush fee" }
                    ].map(timeline => (
                      <button
                        key={timeline.id}
                        onClick={() => setCalculatorData({ ...calculatorData, timeline: timeline.id })}
                        style={{
                          background: calculatorData.timeline === timeline.id ? C.surface : "transparent",
                          border: `1px solid ${calculatorData.timeline === timeline.id ? C.blue : C.border}`,
                          borderRadius: 12,
                          padding: "1rem",
                          cursor: "pointer",
                          textAlign: "left"
                        }}
                      >
                        <div style={{ fontWeight: 600, color: C.textPrimary }}>{timeline.label}</div>
                        <div style={{ fontSize: "0.8rem", color: C.textMuted }}>{timeline.desc}</div>
                      </button>
                    ))}
                  </div>
                  
                  <div style={{
                    background: C.surface,
                    borderRadius: 12,
                    padding: "1rem",
                    marginBottom: "1.5rem",
                    textAlign: "center"
                  }}>
                    <div style={{ fontSize: "0.8rem", color: C.textMuted }}>Estimated Price</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, color: C.blue }}>
                      ₹{getEstimatedPrice().toLocaleString()}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: C.textMuted }}>+ applicable taxes</div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowCalculator(false);
                      scrollToContact();
                    }}
                    style={{
                      width: "100%",
                      background: C.blue,
                      border: "none",
                      padding: "0.8rem",
                      borderRadius: 8,
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Get Exact Quote →
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Pricing;