// src/pages/MaintenancePlans.jsx
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

// Service-specific gradient for hero (Maintenance)
const serviceGradient = {
  maintenance: "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)"
};

function MaintenancePlans() {
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
    { icon: "🔒", title: "Security Updates", desc: "Regular security patches and vulnerability fixes to keep your site safe" },
    { icon: "⚡", title: "Performance Optimization", desc: "Speed improvements, database optimization, and caching strategies" },
    { icon: "🔄", title: "Regular Backups", desc: "Automated daily backups with secure off-site storage" },
    { icon: "🐛", title: "Bug Fixes", desc: "Quick resolution of any issues or errors that arise" },
    { icon: "📊", title: "Analytics & Reports", desc: "Monthly performance reports and insights" },
    { icon: "💬", title: "Priority Support", desc: "Dedicated support with fast response times" }
  ];

  const plans = [
    {
      name: "Essential",
      price: "₹5,000",
      period: "month",
      features: [
        "Monthly Security Updates",
        "Weekly Backups",
        "Basic Performance Monitoring",
        "Email Support (24-48 hrs)",
        "Bug Fixes (3/month)",
        "Monthly Analytics Report",
        "Content Updates (2 hrs/month)"
      ],
      popular: false,
      icon: "🛡️"
    },
    {
      name: "Professional",
      price: "₹12,000",
      period: "month",
      features: [
        "Weekly Security Updates",
        "Daily Backups",
        "Advanced Performance Optimization",
        "Priority Email & WhatsApp Support",
        "Bug Fixes (Unlimited)",
        "Weekly Analytics Reports",
        "Content Updates (8 hrs/month)",
        "SEO Monitoring",
        "Uptime Monitoring (24/7)"
      ],
      popular: true,
      icon: "⚡"
    },
    {
      name: "Enterprise",
      price: "₹25,000",
      period: "month",
      features: [
        "Daily Security Updates",
        "Real-time Backups",
        "Full Performance Audit",
        "24/7 Phone & WhatsApp Support",
        "Bug Fixes (Unlimited)",
        "Real-time Analytics Dashboard",
        "Content Updates (Unlimited)",
        "Advanced SEO Optimization",
        "SLA Agreement (99.9% Uptime)",
        "Dedicated Account Manager",
        "Quarterly Strategy Call"
      ],
      popular: false,
      icon: "👑"
    }
  ];

  const addOns = [
    { name: "Additional Content Hours", price: "₹2,000", desc: "5 extra hours of content updates", icon: "📝" },
    { name: "SEO Optimization", price: "₹3,500", desc: "Monthly SEO audit and optimization", icon: "🔍" },
    { name: "E-commerce Support", price: "₹4,000", desc: "Product updates, inventory management", icon: "🛍️" },
    { name: "Speed Optimization", price: "₹3,000", desc: "Advanced performance tuning", icon: "⚡" },
    { name: "Security Hardening", price: "₹2,500", desc: "Advanced security monitoring", icon: "🔒" },
    { name: "Emergency Support", price: "₹1,500", desc: "24/7 emergency response", icon: "🚨" }
  ];

  const services = [
    { icon: "🔧", title: "Technical Maintenance", desc: "Core updates, plugin updates, compatibility fixes" },
    { icon: "📱", title: "Content Updates", desc: "Text changes, image updates, page additions" },
    { icon: "🔍", title: "SEO Maintenance", desc: "Keyword tracking, meta updates, ranking reports" },
    { icon: "📈", title: "Performance Monitoring", desc: "Speed tests, load time optimization, Core Web Vitals" },
    { icon: "🛡️", title: "Security Monitoring", desc: "Malware scans, firewall management, threat detection" },
    { icon: "💾", title: "Backup Management", desc: "Automated backups, restore testing, off-site storage" }
  ];

  // Service-specific pricing preview
  const pricingPreview = {
    startingPrice: "₹5,000",
    priceRange: "₹5,000 - ₹25,000/month",
    description: "Monthly subscription. Cancel anytime."
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in Website Maintenance Plans. Can you please share more details?", "_blank");
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
        
        .plan-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .plan-card:hover {
          transform: translateY(-4px);
        }
        .feature-item {
          transition: all 0.2s ease;
        }
        .feature-item:hover {
          transform: translateX(4px);
        }
        .addon-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .addon-card:hover {
          transform: translateY(-2px);
          border-color: ${COLORS.primaryAccent};
        }
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          transform: translateY(-2px);
          border-color: ${COLORS.primaryAccent};
        }
        .faq-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .faq-item:hover {
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
          backgroundImage: serviceGradient.maintenance,
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
              Website Care
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
              Maintenance <span style={{ color: COLORS.primaryAccent }}>Plans</span>
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
              Keep your website secure, fast, and up-to-date with our comprehensive maintenance plans. 
              Focus on your business while we handle the technical side.
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
                Start a Maintenance Plan →
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
              Why Maintenance
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "2rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Why Your Website Needs <span style={{ color: COLORS.primaryAccent }}>Regular Care</span>
            </h2>
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

      {/* Pricing Preview - Added to service page */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: COLORS.cardBg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: COLORS.primaryBg,
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
              <span style={{ fontSize: "1rem", color: COLORS.mutedText }}>/month</span>
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
                Start a Maintenance Plan
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
                  View All Plans →
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
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
              What's Included
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.8rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Comprehensive <span style={{ color: COLORS.primaryAccent }}>Services</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="service-card"
                style={{
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 16,
                  padding: "1rem",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ borderColor: COLORS.primaryAccent, y: -2 }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{service.icon}</div>
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1rem", 
                  fontWeight: 600, 
                  marginBottom: "0.3rem", 
                  color: COLORS.primaryText 
                }}>{service.title}</h3>
                <p style={{ color: COLORS.bodyText, fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section style={{ padding: "60px 2rem", background: COLORS.cardBg, position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
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
              Add-Ons
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.8rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Customize Your <span style={{ color: COLORS.primaryAccent }}>Plan</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="addon-card"
                style={{
                  background: COLORS.primaryBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 16,
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ borderColor: COLORS.primaryAccent, y: -2 }}
              >
                <div style={{ fontSize: "1.5rem" }}>{addon.icon}</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontFamily: "'Sora', sans-serif", 
                    fontSize: "0.9rem", 
                    fontWeight: 600, 
                    color: COLORS.primaryText 
                  }}>{addon.name}</h4>
                  <p style={{ color: COLORS.mutedText, fontSize: "0.7rem", fontFamily: "'Inter', sans-serif" }}>{addon.desc}</p>
                </div>
                <div style={{ color: COLORS.primaryAccent, fontWeight: 600, fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
              FAQ
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "1.8rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Frequently Asked <span style={{ color: COLORS.primaryAccent }}>Questions</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { q: "Why do I need a maintenance plan?", a: "Regular maintenance ensures your website stays secure, fast, and up-to-date. It prevents security breaches, fixes bugs before they become problems, and keeps your content fresh for visitors." },
              { q: "Can I upgrade or downgrade my plan?", a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle." },
              { q: "What happens if I need extra work?", a: "All plans include a set number of content update hours. If you need additional work, we offer add-on packs or you can upgrade to a higher tier plan." },
              { q: "Do you provide emergency support?", a: "Yes, all plans include priority support. Enterprise plan includes 24/7 emergency support with guaranteed response within 1 hour." },
              { q: "What platforms do you support?", a: "We support all platforms including WordPress, React, Node.js, Laravel, and custom-built websites." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="faq-item"
                style={{
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 16,
                  padding: "1.2rem",
                  transition: "all 0.3s ease"
                }}
              >
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1rem", 
                  fontWeight: 600, 
                  color: COLORS.primaryAccent, 
                  marginBottom: "0.5rem" 
                }}>{faq.q}</h3>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: COLORS.bodyText, 
                  lineHeight: 1.6,
                  fontFamily: "'Inter', sans-serif" 
                }}>{faq.a}</p>
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
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛡️</div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "2rem", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Ready to <span style={{ color: COLORS.primaryAccent }}>Protect Your Website</span>?
            </h2>
            <p style={{ color: COLORS.bodyText, marginBottom: "2rem", fontSize: "1rem", fontFamily: "'Inter', sans-serif" }}>
              Choose a maintenance plan today and enjoy peace of mind knowing your website is in safe hands.
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
                Start a Maintenance Plan
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

export default MaintenancePlans;