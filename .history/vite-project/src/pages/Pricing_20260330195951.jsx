// src/pages/Pricing.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ParticleCanvas from "../components/ParticleCanvas";
// import ScanLines from "../components/ScanLines";
// import WhatsApp from "../components/WhatsApp";

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
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
    color: C.cyan,
    features: [
      { name: "Up to 5 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Contact Form", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Google Analytics", included: true },
      { name: "Custom Design", included: false, addon: true },
      { name: "CMS / Backend", included: false },
      { name: "E-commerce", included: false },
      { name: "AI Features", included: false },
      { name: "Priority Support", included: false }
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
    color: C.purple,
    features: [
      { name: "Unlimited Pages", included: true },
      { name: "Custom Design (Figma)", included: true },
      { name: "CMS / Admin Panel", included: true },
      { name: "User Authentication", included: true },
      { name: "Database Integration", included: true },
      { name: "Advanced SEO", included: true },
      { name: "Blog / News Section", included: true },
      { name: "Contact Forms", included: true },
      { name: "E-commerce", included: false, addon: true },
      { name: "AI Features", included: false, addon: true },
      { name: "Priority Support", included: true }
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
    color: C.pink,
    features: [
      { name: "Product Catalog", included: true },
      { name: "Shopping Cart", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Order Management", included: true },
      { name: "User Accounts", included: true },
      { name: "Inventory Management", included: true },
      { name: "Shipping Integration", included: true },
      { name: "Discount & Coupons", included: true },
      { name: "Custom Design", included: true },
      { name: "Advanced SEO", included: true },
      { name: "24/7 Support", included: true }
    ],
    timeline: "21–30 Days",
    bestFor: "Online stores, retail businesses, marketplaces"
  }
];

// Add-on Services
const ADDONS = [
  { name: "Custom Animations", price: "₹3,000", icon: "🎬" },
  { name: "AI Chatbot Integration", price: "₹5,000", icon: "🤖" },
  { name: "Advanced SEO Package", price: "₹4,000", icon: "📈" },
  { name: "Priority Support (6 months)", price: "₹5,000", icon: "⭐" },
  { name: "Social Media Integration", price: "₹2,000", icon: "📱" },
  { name: "Newsletter Setup", price: "₹1,500", icon: "📧" }
];

// FAQ Data
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
  const [selectedPlan, setSelectedPlan] = useState(null);
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        .pricing-card {
          transition: all 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-8px);
        }
        .popular-badge {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      {/* Background Components */}
      <ParticleCanvas />
      <ScanLines />
      <Navbar />
      <WhatsApp />

      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: "linear-gradient(135deg, #020408, #050a15)",
        overflow: "hidden"
      }}>
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}
            >
              ✦ TRANSPARENT PRICING
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              No Surprises. <br />
              <span style={{ color: C.cyan }}>Just Results.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Fixed-price packages. You know exactly what you're getting before we start. No hidden fees, no scope surprises.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
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
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid ${plan.popular ? plan.color : "rgba(0,229,255,0.2)"}`,
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: plan.popular ? `0 0 40px ${plan.color}20` : "none"
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: `linear-gradient(135deg, ${plan.color}, ${C.purple})`,
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
                  <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.5rem", fontWeight: 700, color: plan.color, marginBottom: "0.5rem" }}>
                    {plan.name}
                  </h2>
                  <p style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)", marginBottom: "1rem" }}>{plan.tagline}</p>
                  <div style={{ marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 900, color: "#fff" }}>
                      {plan.price}
                    </span>
                    {plan.priceRange.max && (
                      <span style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.5)" }}> / project</span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.6)", marginBottom: "1rem" }}>
                    Timeline: {plan.timeline}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: C.cyan, marginBottom: "1.5rem" }}>
                    Best for: {plan.bestFor}
                  </p>
                  
                  <div style={{ marginBottom: "1.5rem" }}>
                    {plan.features.slice(0, 6).map((feature, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        {feature.included ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 4L6 11L3 8" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        ) : feature.addon ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" stroke="#D4952A" strokeWidth="1.5" />
                            <path d="M8 5v3M8 11h.01" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12 4L4 12M4 4L12 12" stroke="rgba(224,247,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                        <span style={{ 
                          fontSize: "0.85rem", 
                          color: feature.included ? "rgba(224,247,255,0.8)" : feature.addon ? "#D4952A" : "rgba(224,247,255,0.4)" 
                        }}>
                          {feature.name}
                          {feature.addon && " (Add-on)"}
                        </span>
                      </div>
                    ))}
                    {plan.features.length > 6 && (
                      <p style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)", marginTop: "0.5rem" }}>
                        +{plan.features.length - 6} more features
                      </p>
                    )}
                  </div>
                  
                  <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${plan.color}40` }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openCalculator(plan.id)}
                      style={{
                        width: "100%",
                        background: `linear-gradient(135deg, ${plan.color}, ${C.purple})`,
                        border: "none",
                        padding: "0.8rem",
                        borderRadius: 50,
                        color: "#fff",
                        fontFamily: "'Orbitron',monospace",
                        fontWeight: 700,
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
                        border: `1px solid ${plan.color}`,
                        padding: "0.8rem",
                        borderRadius: 50,
                        color: "#fff",
                        fontFamily: "'Orbitron',monospace",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer"
                      }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>✦ ADD-ONS</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "1rem", color: "#fff" }}>
              Customize Your <span style={{ color: C.cyan }}>Package</span>
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "3rem" }}>
              Add these features to any package for an enhanced experience
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ y: -5 }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 16,
                  padding: "1rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{addon.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem", color: C.cyan }}>{addon.name}</h3>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.05), rgba(0,0,0,0.3))",
              border: `1px solid ${C.cyan}`,
              borderRadius: 20,
              padding: "2rem"
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>💰</div>
            <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", fontWeight: 700, color: C.cyan, marginBottom: "0.5rem" }}>
              100% Satisfaction Guarantee
            </h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6 }}>
              Not happy with the result? We'll revise until you're satisfied. If we can't meet your expectations, you get a full refund.
              No questions asked. That's our promise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem", textAlign: "center" }}>✦ FAQ</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "3rem", textAlign: "center", color: "#fff" }}>
              Frequently Asked <span style={{ color: C.cyan }}>Questions</span>
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
                  background: "rgba(0,12,30,0.5)",
                  border: `1px solid rgba(0,229,255,0.1)`,
                  borderRadius: 16,
                  padding: "1.5rem",
                  marginBottom: "1rem"
                }}
              >
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 600, color: C.cyan, marginBottom: "0.5rem" }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6 }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "60px 2rem 100px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(0,0,0,0.5))",
              border: `1px solid ${C.cyan}`,
              borderRadius: 30,
              padding: "3rem",
              backdropFilter: "blur(10px)"
            }}
          >
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: "1rem", color: "#fff" }}>
              Ready to Get <span style={{ color: C.cyan }}>Started?</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Tell us about your project — we respond within 4 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(0,229,255,0.4)` }}
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
                fontSize: "0.9rem",
                cursor: "pointer"
              }}
            >
              Start Your Project →
            </motion.button>
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
              background: "rgba(2,4,8,0.98)",
              border: `1px solid ${C.cyan}`,
              borderRadius: 24,
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
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "rgba(224,247,255,0.5)"
              }}
            >
              ×
            </button>

            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", fontWeight: 700, color: C.cyan, marginBottom: "1rem" }}>
              Get Your Exact Quote
            </h2>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                {[1, 2, 3].map(step => (
                  <div key={step} style={{
                    flex: 1,
                    height: 4,
                    background: calculatorStep >= step ? C.cyan : "rgba(0,229,255,0.2)",
                    borderRadius: 2
                  }} />
                ))}
              </div>

              {calculatorStep === 1 && (
                <div>
                  <h3 style={{ fontSize: "1rem", color: "#fff", marginBottom: "1rem" }}>Select your plan:</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {PRICING_PLANS.map(plan => (
                      <button
                        key={plan.id}
                        onClick={() => {
                          setCalculatorData({ ...calculatorData, planType: plan.id });
                          setCalculatorStep(2);
                        }}
                        style={{
                          background: calculatorData.planType === plan.id ? `linear-gradient(135deg, ${plan.color}, ${C.purple})` : "rgba(0,12,30,0.8)",
                          border: `1px solid ${calculatorData.planType === plan.id ? plan.color : "rgba(0,229,255,0.2)"}`,
                          borderRadius: 12,
                          padding: "1rem",
                          textAlign: "left",
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ fontWeight: 600, color: "#fff" }}>{plan.name}</div>
                        <div style={{ fontSize: "0.8rem", color: plan.color }}>{plan.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {calculatorStep === 2 && (
                <div>
                  <h3 style={{ fontSize: "1rem", color: "#fff", marginBottom: "1rem" }}>Select add-ons:</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {ADDONS.map(addon => (
                      <label key={addon.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
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
                          style={{ width: 18, height: 18, cursor: "pointer" }}
                        />
                        <span style={{ color: "rgba(224,247,255,0.8)" }}>{addon.name}</span>
                        <span style={{ color: C.cyan, fontSize: "0.8rem", marginLeft: "auto" }}>{addon.price}</span>
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={() => setCalculatorStep(3)}
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                      background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                      border: "none",
                      padding: "0.8rem",
                      borderRadius: 50,
                      color: "#fff",
                      cursor: "pointer"
                    }}
                  >
                    Continue →
                  </button>
                </div>
              )}

              {calculatorStep === 3 && (
                <div>
                  <h3 style={{ fontSize: "1rem", color: "#fff", marginBottom: "1rem" }}>Timeline:</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                    {["normal", "urgent"].map(timeline => (
                      <button
                        key={timeline}
                        onClick={() => setCalculatorData({ ...calculatorData, timeline })}
                        style={{
                          background: calculatorData.timeline === timeline ? `linear-gradient(135deg, ${C.cyan}, ${C.purple})` : "rgba(0,12,30,0.8)",
                          border: `1px solid ${calculatorData.timeline === timeline ? C.cyan : "rgba(0,229,255,0.2)"}`,
                          borderRadius: 12,
                          padding: "1rem",
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ fontWeight: 600, color: "#fff" }}>
                          {timeline === "normal" ? "Standard Timeline" : "Urgent (Priority)"}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.6)" }}>
                          {timeline === "normal" ? "Regular delivery schedule" : "+20% rush fee"}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div style={{
                    background: "rgba(0,229,255,0.1)",
                    borderRadius: 12,
                    padding: "1rem",
                    marginBottom: "1rem",
                    textAlign: "center"
                  }}>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.6)" }}>Estimated Price</div>
                    <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 700, color: C.cyan }}>
                      ₹{getEstimatedPrice().toLocaleString()}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>+ applicable taxes</div>
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
                      background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                      border: "none",
                      padding: "0.8rem",
                      borderRadius: 50,
                      color: "#fff",
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Pricing;