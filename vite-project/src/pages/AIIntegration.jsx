// src/pages/AIIntegration.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aiHeroBg from "../assets/images/ai.png"; // Add your image to assets/images/

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

function AIIntegration() {
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
    { icon: "🤖", title: "Custom AI Models", desc: "Build and train custom AI models tailored to your specific business needs and data" },
    { icon: "💬", title: "Chatbots & Virtual Assistants", desc: "Intelligent conversational AI for customer support, lead generation, and user engagement" },
    { icon: "📊", title: "Predictive Analytics", desc: "Forecast trends, customer behavior, and business outcomes with machine learning" },
    { icon: "👁️", title: "Computer Vision", desc: "Image recognition, object detection, and visual search capabilities" },
    { icon: "📝", title: "NLP & Text Analysis", desc: "Sentiment analysis, text summarization, and language processing" },
    { icon: "🎯", title: "Recommendation Engines", desc: "Personalized content, product, and service recommendations" }
  ];

  const useCases = [
    { name: "Customer Support", icon: "💬", desc: "AI-powered chatbots that handle 80% of support queries automatically" },
    { name: "Sales & Marketing", icon: "📈", desc: "Lead scoring, personalized campaigns, and sales forecasting" },
    { name: "Healthcare", icon: "🏥", desc: "Medical image analysis, patient diagnosis assistance, drug discovery" },
    { name: "Finance", icon: "💰", desc: "Fraud detection, risk assessment, algorithmic trading" },
    { name: "E-Commerce", icon: "🛍️", desc: "Product recommendations, dynamic pricing, inventory optimization" },
    { name: "Manufacturing", icon: "🏭", desc: "Predictive maintenance, quality control, supply chain optimization" }
  ];

  // C-14: Tech stack with recognizable logos and better visual weight
  const techStack = [
    { name: "OpenAI GPT", icon: "🧠", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg", color: "#10A37F", desc: "Advanced language models" },
    { name: "TensorFlow", icon: "🔷", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00", desc: "ML framework" },
    { name: "PyTorch", icon: "🔥", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "#EE4C2C", desc: "Deep learning" },
    { name: "LangChain", icon: "⛓️", color: "#1C3C3C", desc: "LLM framework" },
    { name: "Hugging Face", icon: "🤗", color: "#FFD21E", desc: "Model hub" },
    { name: "Claude API", icon: "🔮", color: "#7C3AED", desc: "Anthropic AI" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Identify business problems that AI can solve and define success metrics" },
    { step: "02", title: "Data Preparation", desc: "Collect, clean, and prepare data for model training" },
    { step: "03", title: "Model Selection", desc: "Choose the right AI models and algorithms for your use case" },
    { step: "04", title: "Development", desc: "Build, train, and fine-tune AI models on your data" },
    { step: "05", title: "Integration", desc: "Seamlessly integrate AI into your existing systems" },
    { step: "06", title: "Monitoring", desc: "Track performance, retrain models, and continuously improve" }
  ];

  // C-15: Condensed pricing preview on service page
  const pricingPreview = {
    startingPrice: "₹49,999",
    description: "Custom AI solutions tailored to your business needs",
    features: [
      "AI Consultation & Roadmap",
      "Custom Model Development",
      "API Integration",
      "30 Days Support"
    ]
  };

  const benefits = [
    { icon: "⚡", title: "80% Faster", desc: "Automate repetitive tasks and speed up workflows" },
    { icon: "📈", title: "40% Revenue Growth", desc: "Personalized recommendations and targeted campaigns" },
    { icon: "💰", title: "60% Cost Reduction", desc: "Automate customer support and operational processes" },
    { icon: "🎯", title: "95% Accuracy", desc: "Make data-driven decisions with high-precision insights" }
  ];

  const faqs = [
    {
      question: "How long does it take to implement AI?",
      answer: "Timeline varies based on complexity. Simple chatbot integrations take 2-3 weeks, while custom model development takes 6-12 weeks. We'll provide a detailed timeline after discovery."
    },
    {
      question: "Do I need to provide my own data?",
      answer: "Yes, we work with your data to build custom models. We can help you collect, clean, and prepare data if needed. For initial demos, we can work with sample data."
    },
    {
      question: "What kind of AI models do you build?",
      answer: "We build a wide range including: LLM-powered chatbots, computer vision systems, predictive analytics, recommendation engines, NLP solutions, and custom machine learning models."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages that include model monitoring, retraining, performance optimization, and 24/7 support for critical AI systems."
    },
    {
      question: "Can AI integrate with my existing systems?",
      answer: "Absolutely. We build REST APIs and use webhooks to seamlessly integrate AI capabilities into your existing applications, CRMs, and workflows."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in AI Integration services. Can you please share more details?", "_blank");
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
        padding: 50px 1.5rem !important;
      }
      .grid-2col {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .grid-3col {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .grid-4col {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .process-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .tech-stack {
        gap: 0.8rem !important;
      }
      .tech-item {
        min-width: 100px !important;
        padding: 0.8rem 1rem !important;
      }
      .benefits-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .faq-padding {
        padding: 50px 1.5rem !important;
      }
      .cta-padding {
        padding: 60px 1.5rem !important;
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
        padding: 90px 1rem 40px !important;
      }
      .section-padding {
        padding: 40px 1rem !important;
      }
      .grid-2col, .grid-3col, .grid-4col, .process-grid, .benefits-grid {
        grid-template-columns: 1fr !important;
        gap: 1.2rem !important;
      }
      .hero-title {
        font-size: clamp(1.8rem, 5vw, 2rem) !important;
      }
      .hero-subtitle {
        font-size: 0.95rem !important;
      }
      .section-title {
        font-size: 1.5rem !important;
      }
      .hero-buttons {
        flex-direction: column !important;
        width: 100% !important;
      }
      .hero-buttons button {
        width: 100% !important;
      }
      .tech-stack {
        gap: 0.6rem !important;
      }
      .tech-item {
        min-width: calc(50% - 0.6rem) !important;
        padding: 0.8rem !important;
      }
      .tech-item div:first-child {
        font-size: 1.5rem !important;
      }
      .tech-item div:nth-child(2) {
        font-size: 0.8rem !important;
      }
      .feature-card, .use-case-card, .process-card, .benefit-card {
        padding: 1.2rem !important;
      }
      .feature-icon, .use-case-icon {
        font-size: 2rem !important;
      }
      .feature-title, .use-case-title, .process-title {
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
    }
    
    @media (max-width: 480px) {
      .hero-padding {
        padding: 80px 0.8rem 35px !important;
      }
      .section-padding {
        padding: 35px 0.8rem !important;
      }
      .hero-title {
        font-size: 1.6rem !important;
      }
      .hero-subtitle {
        font-size: 0.85rem !important;
      }
      .section-title {
        font-size: 1.3rem !important;
      }
      .tech-item {
        min-width: 100% !important;
      }
      .feature-card, .use-case-card, .process-card, .benefit-card {
        padding: 1rem !important;
      }
      .process-step-number {
        width: 45px !important;
        height: 45px !important;
        font-size: 1.2rem !important;
      }
      .pricing-card {
        padding: 1.2rem !important;
      }
      .pricing-price {
        font-size: 1.8rem !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      
      {/* Hero Section - C-11: Differentiated with AI-specific background */}
      <section ref={heroRef} className="hero-padding" style={{ 
        minHeight: "60vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: `linear-gradient(rgba(10, 15, 30, 0.78), rgba(10, 15, 30, 0.85)), url(${aiHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden"
      }}>
        {/* AI-specific gradient pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(6,182,212,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 60%, rgba(37,99,235,0.06) 0%, transparent 50%),
                           repeating-linear-gradient(45deg, rgba(6,182,212,0.02) 0px, rgba(6,182,212,0.02) 2px, transparent 2px, transparent 8px)`,
          pointerEvents: "none",
          opacity: 0.8
        }} />
        
        {/* Optional: Add a radial gradient for better text readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse 70% 40% at 50% 30%, rgba(6,182,212,0.08) 0%, transparent 70%)",
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
                background: "rgba(30, 58, 95, 0.7)",
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
              ✦ AI INTEGRATION
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
              Supercharge Your Business{" "}
              <span style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                with AI
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
              Transform your business with cutting-edge artificial intelligence. 
              From intelligent chatbots to predictive analytics, we help you harness the power of AI.
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
                Explore AI Integration →
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

      {/* Benefits Section */}
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
              ✦ BUSINESS IMPACT
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Real Results with <span style={{ color: C.blue }}>AI</span>
            </h2>
          </motion.div>

          <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="benefit-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "1.5rem",
                  textAlign: "center"
                }}
                whileHover={{ borderColor: C.blue, y: -5 }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{benefit.icon}</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: C.blue, marginBottom: "0.3rem" }}>{benefit.title}</div>
                <p style={{ color: C.textBody, fontSize: "0.85rem" }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - C-12: Consistent icon styling */}
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
              ✦ AI CAPABILITIES
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              What We Can <span style={{ color: C.blue }}>Build</span>
            </h2>
          </motion.div>

          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="feature-card"
                style={{
                  background: C.surface,
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

      {/* Use Cases Section */}
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
              ✦ INDUSTRY APPLICATIONS
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              AI Across <span style={{ color: C.blue }}>Industries</span>
            </h2>
          </motion.div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {useCases.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="use-case-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "1.2rem",
                  textAlign: "center"
                }}
                whileHover={{ borderColor: C.blue }}
              >
                <div className="use-case-icon" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 className="use-case-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.3rem", color: C.textPrimary }}>{item.name}</h3>
                <p style={{ color: C.textBody, fontSize: "0.8rem" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C-14: Tech Stack Section with better visual weight */}
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              ✦ AI TECHNOLOGY
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "2rem", color: C.textPrimary }}>
              Cutting-Edge <span style={{ color: C.blue }}>AI Stack</span>
            </h2>
            <div className="tech-stack" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="tech-item"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    padding: "1rem 1.5rem",
                    textAlign: "center",
                    minWidth: "120px"
                  }}
                  whileHover={{ borderColor: C.blue, y: -2 }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.3rem" }}>{tech.icon}</div>
                  <div style={{ color: C.textPrimary, fontSize: "0.9rem", fontWeight: 600 }}>{tech.name}</div>
                  <div style={{ color: C.textMuted, fontSize: "0.7rem", marginTop: "0.2rem" }}>{tech.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              ✦ OUR PROCESS
            </div>
            <h2 className="section-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              How We <span style={{ color: C.blue }}>Build AI Solutions</span>
            </h2>
          </motion.div>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="process-card"
                style={{
                  background: C.bg,
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
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pricing-card"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "2rem",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💰</div>
            <p style={{ color: C.textBody, marginBottom: "1.5rem" }}>{pricingPreview.description}</p>
            
            <div className="pricing-features" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
              {pricingPreview.features.map((feature, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: C.bg, padding: "0.3rem 0.8rem", borderRadius: 20 }}>
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
      <section className="faq-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.surface }}>
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
                  background: C.bg,
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
      <section className="cta-padding" style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤖</div>
            <h2 className="cta-title" style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Ready to <span style={{ color: C.blue }}>Transform Your Business</span> with AI?
            </h2>
            <p style={{ color: C.textBody, marginBottom: "2rem", fontSize: "1rem" }}>
              Let's discuss how artificial intelligence can solve your business challenges.
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
                Start Your AI Project
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

export default AIIntegration;