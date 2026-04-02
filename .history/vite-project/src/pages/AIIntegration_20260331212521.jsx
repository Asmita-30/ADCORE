// src/pages/AIIntegration.jsx
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

function AIIntegration() {
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
    { name: "Manufacturing", icon: "🏭", desc: "Predictive maintenance, quality control, supply chain optimization" },
    { name: "Education", icon: "📚", desc: "Personalized learning paths, automated grading, student engagement" },
    { name: "HR & Recruitment", icon: "👥", desc: "Resume screening, candidate matching, employee retention prediction" }
  ];

  const techStack = [
    { name: "OpenAI GPT", icon: "🧠", color: "#10A37F", desc: "Advanced language models" },
    { name: "TensorFlow", icon: "🔷", color: "#FF6F00", desc: "Machine learning framework" },
    { name: "PyTorch", icon: "🔥", color: "#EE4C2C", desc: "Deep learning framework" },
    { name: "LangChain", icon: "⛓️", color: "#1C3C3C", desc: "LLM application framework" },
    { name: "Hugging Face", icon: "🤗", color: "#FFD21E", desc: "Model hub & transformers" },
    { name: "LlamaIndex", icon: "🦙", color: "#4B8BBE", desc: "Data framework for LLMs" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Identify business problems that AI can solve and define success metrics" },
    { step: "02", title: "Data Preparation", desc: "Collect, clean, and prepare data for model training" },
    { step: "03", title: "Model Selection", desc: "Choose the right AI models and algorithms for your use case" },
    { step: "04", title: "Development", desc: "Build, train, and fine-tune AI models on your data" },
    { step: "05", title: "Integration", desc: "Seamlessly integrate AI into your existing systems and workflows" },
    { step: "06", title: "Monitoring", desc: "Track performance, retrain models, and continuously improve" }
  ];

  const packages = [
    {
      name: "AI Starter",
      price: "₹49,999",
      period: "per project",
      features: [
        "AI Consultation & Roadmap",
        "Pre-trained Model Integration",
        "Basic Chatbot/Assistant",
        "API Integration",
        "1 AI Feature Implementation",
        "30 Days Post-Launch Support",
        "Basic Documentation"
      ],
      popular: false
    },
    {
      name: "AI Pro",
      price: "₹1,49,999",
      period: "per project",
      features: [
        "Custom AI Model Development",
        "Advanced NLP/CV Solutions",
        "Predictive Analytics",
        "Multi-Model Integration",
        "Custom API Development",
        "3 Months Support",
        "Comprehensive Documentation",
        "Team Training"
      ],
      popular: true
    },
    {
      name: "AI Enterprise",
      price: "Custom",
      period: "quote based",
      features: [
        "Full-Scale AI Transformation",
        "Multiple Custom Models",
        "MLOps Infrastructure",
        "Real-time Processing",
        "24/7 Priority Support",
        "Dedicated AI Team",
        "SLA Agreement",
        "Continuous Model Optimization"
      ],
      popular: false
    }
  ];

  const benefits = [
    { icon: "⚡", title: "80% Faster", desc: "Automate repetitive tasks and speed up workflows" },
    { icon: "📈", title: "40% Revenue Growth", desc: "Personalized recommendations and targeted campaigns" },
    { icon: "💰", title: "60% Cost Reduction", desc: "Automate customer support and operational processes" },
    { icon: "🎯", title: "95% Accuracy", desc: "Make data-driven decisions with high-precision insights" }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in AI Integration services. Can you please share more details?", "_blank");
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
        
        .ai-card {
          transition: all 0.3s ease;
        }
        .ai-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
          box-shadow: 0 0 20px rgba(0,229,255,0.1);
        }
        .usecase-card {
          transition: all 0.3s ease;
        }
        .usecase-card:hover {
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
        .tech-card {
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
        }
        .benefit-card {
          transition: all 0.3s ease;
        }
        .benefit-card:hover {
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
              AI <span style={{ color: C.cyan }}>Integration</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Transform your business with cutting-edge artificial intelligence. 
              From chatbots to predictive analytics, we help you harness the power of AI.
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
                Start Your AI Journey →
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

      {/* Benefits Section */}
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
              ✦ BUSINESS IMPACT
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Real Results with <span style={{ color: C.cyan }}>AI</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="benefit-card"
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 20,
                  padding: "1.5rem",
                  textAlign: "center"
                }}
                whileHover={{ borderColor: C.cyan, y: -5 }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{benefit.icon}</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: C.cyan, marginBottom: "0.3rem" }}>{benefit.title}</div>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.85rem" }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              ✦ AI CAPABILITIES
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              What We Can <span style={{ color: C.cyan }}>Build</span>
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

      {/* Use Cases Section */}
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
              ✦ INDUSTRY APPLICATIONS
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              AI Across <span style={{ color: C.cyan }}>Industries</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {useCases.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="usecase-card"
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
              ✦ AI TECHNOLOGY
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2rem", color: "#fff" }}>
              Cutting-Edge <span style={{ color: C.cyan }}>AI Stack</span>
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
                    borderRadius: 16,
                    padding: "1rem 1.5rem",
                    textAlign: "center",
                    cursor: "default"
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.3rem" }}>{tech.icon}</div>
                  <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>{tech.name}</div>
                  <div style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem", marginTop: "0.2rem" }}>{tech.desc}</div>
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
        How We <span style={{ color: C.cyan }}>Build AI Solutions</span>
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
      {/* <section style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
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
              Choose Your <span style={{ color: C.cyan }}>AI Package</span>
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
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤖</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Ready to <span style={{ color: C.cyan }}>Transform Your Business</span> with AI?
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>
              Let's discuss how artificial intelligence can solve your business challenges.
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
                Start Your AI Project
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

export default AIIntegration;