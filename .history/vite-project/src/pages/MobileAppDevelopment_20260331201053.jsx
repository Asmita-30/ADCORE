// src/pages/MobileAppDevelopment.jsx
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

function MobileAppDevelopment() {
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
    { icon: "📱", title: "Native iOS & Android", desc: "Build high-performance apps with Swift, Kotlin, and Java for optimal user experience" },
    { icon: "⚛️", title: "Cross-Platform", desc: "React Native and Flutter development for cost-effective solutions across platforms" },
    { icon: "🔒", title: "Enterprise Security", desc: "Bank-grade encryption, secure authentication, and data protection" },
    { icon: "⚡", title: "Offline Support", desc: "Apps that work seamlessly even without internet connectivity" },
    { icon: "🎨", title: "Modern UI/UX", desc: "Beautiful, intuitive interfaces that users love to interact with" },
    { icon: "🔄", title: "App Store Optimization", desc: "ASO strategies to boost visibility and downloads on app stores" }
  ];

  const appTypes = [
    { name: "E-Commerce Apps", icon: "🛍️", desc: "Online shopping, payment integration, product catalog" },
    { name: "Social Media Apps", icon: "💬", desc: "Messaging, feeds, stories, live streaming" },
    { name: "On-Demand Apps", icon: "🚗", desc: "Uber-like, food delivery, service booking" },
    { name: "Healthcare Apps", icon: "🏥", desc: "Telemedicine, appointment booking, health tracking" },
    { name: "Fintech Apps", icon: "💰", desc: "Digital wallets, banking, investment platforms" },
    { name: "EdTech Apps", icon: "📚", desc: "Online courses, live classes, quizzes" },
    { name: "Enterprise Apps", icon: "🏢", desc: "Internal tools, CRM, employee management" },
    { name: "IoT Apps", icon: "🔌", desc: "Smart home, device control, real-time monitoring" }
  ];

  const techStack = [
    { name: "React Native", icon: "⚛️", color: "#61DAFB", platform: "Cross-Platform" },
    { name: "Flutter", icon: "🦋", color: "#02569B", platform: "Cross-Platform" },
    { name: "Swift", icon: "🍎", color: "#FA7343", platform: "iOS" },
    { name: "Kotlin", icon: "📱", color: "#7F52FF", platform: "Android" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28", platform: "Backend" },
    { name: "Node.js", icon: "🟢", color: "#68A063", platform: "Backend" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Ideation", desc: "Understand your target audience, define features, and create product roadmap" },
    { step: "02", title: "UI/UX Design", desc: "Create wireframes, interactive prototypes, and visually stunning designs" },
    { step: "03", title: "Development", desc: "Agile development with regular sprints and transparent progress tracking" },
    { step: "04", title: "Testing & QA", desc: "Rigorous testing on real devices, performance optimization, and bug fixes" },
    { step: "05", title: "App Store Submission", desc: "Prepare assets, write descriptions, and submit to Apple App Store & Google Play" },
    { step: "06", title: "Post-Launch Support", desc: "Monitor performance, release updates, and provide ongoing maintenance" }
  ];

  const packages = [
    {
      name: "MVP Launch",
      price: "₹79,999",
      period: "one-time",
      features: [
        "iOS & Android App",
        "Core Features (5-7 screens)",
        "User Authentication",
        "Database Integration",
        "Basic UI/UX Design",
        "App Store Submission",
        "1 Month Free Support"
      ],
      popular: false
    },
    {
      name: "Business Growth",
      price: "₹1,49,999",
      period: "one-time",
      features: [
        "iOS & Android App",
        "Advanced Features (10+ screens)",
        "Payment Integration",
        "Push Notifications",
        "Social Login",
        "Analytics Dashboard",
        "3 Months Free Support",
        "App Store Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote based",
      features: [
        "Custom Enterprise Solution",
        "Scalable Architecture",
        "AI/ML Integration",
        "Real-time Features",
        "24/7 Priority Support",
        "Dedicated Team",
        "SLA Agreement",
        "Custom Training"
      ],
      popular: false
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/917447508006?text=Hello! I'm interested in Mobile App Development services. Can you please share more details?", "_blank");
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
        .app-type-card {
          transition: all 0.3s ease;
        }
        .app-type-card:hover {
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
              Mobile App <span style={{ color: C.cyan }}>Development</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Create powerful mobile experiences that engage users and drive business growth. 
              iOS, Android, and cross-platform solutions tailored to your needs.
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
              What Makes Our <span style={{ color: C.cyan }}>Mobile Apps</span> Stand Out
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
              We build apps that users love and businesses trust.
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

      {/* App Types Section */}
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
              ✦ WHAT WE BUILD
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Mobile Apps For <span style={{ color: C.cyan }}>Every Industry</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {appTypes.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="app-type-card"
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: 16,
                  padding: "1.2rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{app.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 600, marginBottom: "0.3rem", color: "#fff" }}>{app.name}</h3>
                <p style={{ color: "rgba(224,247,255,0.6)", fontSize: "0.8rem" }}>{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
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
                  <span style={{ color: C.cyan, fontSize: "0.7rem", marginLeft: "0.3rem" }}>{tech.platform}</span>
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
              How We Build Your <span style={{ color: C.cyan }}>App</span>
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
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📱</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Ready to Launch Your <span style={{ color: C.cyan }}>Mobile App</span>?
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>
              Let's turn your app idea into reality. Get a free consultation today.
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

export default MobileAppDevelopment;