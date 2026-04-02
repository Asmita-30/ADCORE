// src/pages/Services.jsx
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

// Import images (you can replace these with your actual images)
import webDevImg from "../assets/images/E-commerce.png";
import mobileAppImg from "../assets/images/mobile.png";
import uiuxImg from "../assets/images/mobile2.png";
import aiImg from "../assets/images/team.jpeg";
import landingImg from "../assets/images/coding.jpeg";
import maintenanceImg from "../assets/images/vision.jpeg";

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
};

// Services Data
const SERVICES_DATA = [
  {
    id: 1,
    name: "Web App Development",
    category: "web",
    icon: "🌐",
    color: C.cyan,
    image: webDevImg,
    description: "Custom web applications built with modern technologies. We build scalable, secure, and high-performance web apps tailored to your business needs.",
    longDescription: "From SaaS platforms to enterprise portals, we build web applications that handle real-world scale. Our web apps are built with React, TypeScript, and Spring Boot — ensuring your application is fast, maintainable, and ready to grow with your business.",
    included: [
      "Full-stack development with React & Spring Boot",
      "Responsive design for all devices",
      "Secure authentication & authorization",
      "Database design & optimization",
      "API development & integration",
      "Performance optimization & SEO",
      "Deployment & CI/CD setup",
      "Comprehensive documentation"
    ],
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Docker"],
    timeline: "30–60 days",
    startingPrice: "₹60,000",
    features: [
      { name: "Custom UI/UX Design", included: true },
      { name: "User Authentication", included: true },
      { name: "Admin Dashboard", included: true },
      { name: "Payment Integration", included: true, addon: true },
      { name: "AI Features", included: false, addon: true },
      { name: "24/7 Support", included: true }
    ]
  },
  {
    id: 2,
    name: "Mobile App Development",
    category: "mobile",
    icon: "📱",
    color: C.purple,
    image: mobileAppImg,
    description: "Cross-platform mobile apps for iOS and Android using React Native. Reach both platforms with a single codebase.",
    longDescription: "We build beautiful, high-performance mobile applications that work seamlessly on both iOS and Android. Using React Native, we deliver native-like experiences with the efficiency of a single codebase.",
    included: [
      "Cross-platform development (iOS & Android)",
      "Push notifications",
      "Offline mode support",
      "App store deployment",
      "Analytics integration",
      "Crash reporting",
      "User authentication",
      "In-app purchases"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Redux", "Firebase", "Node.js"],
    timeline: "45–90 days",
    startingPrice: "₹90,000",
    features: [
      { name: "iOS & Android Support", included: true },
      { name: "Push Notifications", included: true },
      { name: "Offline Mode", included: true },
      { name: "In-App Purchases", included: false, addon: true },
      { name: "Biometric Auth", included: false, addon: true },
      { name: "App Store Submission", included: true }
    ]
  },
  {
    id: 3,
    name: "UI/UX Design",
    category: "design",
    icon: "🎨",
    color: C.pink,
    image: uiuxImg,
    description: "User-centered design that converts. We create intuitive interfaces that users love and that drive business results.",
    longDescription: "Great products start with great design. Our design process puts users first — creating experiences that are intuitive, accessible, and beautiful. We design in Figma and deliver complete design systems.",
    included: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "High-fidelity mockups",
      "Interactive prototypes",
      "Design system creation",
      "Usability testing",
      "Developer handoff"
    ],
    techStack: ["Figma", "Adobe XD", "Miro", "Hotjar", "UsabilityHub"],
    timeline: "14–30 days",
    startingPrice: "₹35,000",
    features: [
      { name: "User Research", included: true },
      { name: "Wireframing", included: true },
      { name: "High-Fidelity Design", included: true },
      { name: "Interactive Prototype", included: true },
      { name: "Design System", included: true, addon: true },
      { name: "Usability Testing", included: false, addon: true }
    ]
  },
  {
    id: 4,
    name: "AI Integration",
    category: "ai",
    icon: "🧠",
    color: C.cyan,
    image: aiImg,
    description: "Intelligent features powered by AI. From chatbots to predictive analytics — we integrate AI into your products.",
    longDescription: "We build AI-native products that give you a competitive edge. Using Claude API, GPT models, and custom machine learning, we add intelligent features that automate workflows and enhance user experiences.",
    included: [
      "AI chatbot integration",
      "LLM-powered features",
      "Intelligent search",
      "Content generation",
      "Data analysis & insights",
      "Predictive analytics",
      "AI model training",
      "API integration"
    ],
    techStack: ["Claude API", "OpenAI", "LangChain", "Python", "FastAPI", "Supabase"],
    timeline: "30–60 days",
    startingPrice: "₹75,000",
    features: [
      { name: "AI Chatbot", included: true },
      { name: "Content Generation", included: true },
      { name: "Data Analysis", included: true },
      { name: "Custom AI Model", included: false, addon: true },
      { name: "Predictive Analytics", included: false, addon: true },
      { name: "Voice Integration", included: false, addon: true }
    ]
  },
  {
    id: 5,
    name: "Landing Pages",
    category: "web",
    icon: "🚀",
    color: C.purple,
    image: landingImg,
    description: "High-converting landing pages that sell. Fast, beautiful, and optimized for conversions.",
    longDescription: "Your landing page is often the first impression potential customers have of your business. We build landing pages that load fast, look beautiful, and are optimized to convert visitors into customers.",
    included: [
      "Custom design in Figma",
      "Mobile-responsive layout",
      "SEO optimization",
      "Analytics setup",
      "A/B testing ready",
      "Contact form integration",
      "Fast loading (90+ Lighthouse)",
      "Deployment assistance"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    timeline: "7–14 days",
    startingPrice: "₹25,000",
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "SEO Optimized", included: true },
      { name: "A/B Testing Ready", included: true },
      { name: "Email Integration", included: true },
      { name: "Animation Effects", included: false, addon: true }
    ]
  },
  {
    id: 6,
    name: "Maintenance Plans",
    category: "maintenance",
    icon: "⚙️",
    color: C.pink,
    image: maintenanceImg,
    description: "Keep your product running smoothly. 24/7 monitoring, updates, and support.",
    longDescription: "Launching is just the beginning. Our maintenance plans ensure your product stays secure, up-to-date, and performing at its best. We handle everything so you can focus on growing your business.",
    included: [
      "24/7 monitoring & alerts",
      "Security updates & patches",
      "Bug fixes & troubleshooting",
      "Performance optimization",
      "Backup & disaster recovery",
      "Monthly analytics reports",
      "Priority support",
      "Feature enhancements"
    ],
    techStack: ["Sentry", "Datadog", "AWS", "Cloudflare", "GitHub Actions"],
    timeline: "Ongoing",
    startingPrice: "₹15,000/month",
    features: [
      { name: "24/7 Monitoring", included: true },
      { name: "Security Updates", included: true },
      { name: "Bug Fixes", included: true },
      { name: "Priority Support", included: true },
      { name: "New Features", included: false, addon: true },
      { name: "Monthly Reports", included: true }
    ]
  }
];

function Services() {
  const heroRef = useRef();
  const sectionRef = useRef();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Service cards animations
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: ".services-grid", start: "top 80%" } }
    );

    // Process steps animations
    gsap.fromTo(".process-step", 
      { opacity: 0, x: -40 }, 
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, scrollTrigger: { trigger: ".process-section", start: "top 80%" } }
    );
  }, []);

  const filteredServices = activeFilter === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeFilter);

  const filters = [
    { id: "all", label: "All Services" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" },
    { id: "ai", label: "AI Integration" }
  ];

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
        .gradient-text {
          background: linear-gradient(135deg, #fff 40%, #00e5ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .service-card {
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
        }
      `}</style>

      {/* Background Components */}
      {/* <ParticleCanvas />
      <ScanLines />
      <Navbar />
      <WhatsApp /> */}

      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "60vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 80px",
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
              ✦ WHAT WE BUILD
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              "Your Success Is the Product We're Building." <br />
              <span style={{ color: C.cyan }}>Digital Products</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              From idea to live product — we build fast, scalable, and beautifully crafted digital solutions. 
              Powered by Java, React, and AI.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: 50,
                  background: activeFilter === filter.id ? `linear-gradient(135deg, ${C.cyan}, ${C.purple})` : "rgba(0,12,30,0.88)",
                  border: `1px solid ${activeFilter === filter.id ? C.cyan : "rgba(0,229,255,0.2)"}`,
                  color: activeFilter === filter.id ? "#fff" : "rgba(224,247,255,0.7)",
                  fontFamily: "'Orbitron',monospace",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(service)}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                  <img 
                    src={service.image} 
                    alt={service.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                    onError={(e) => { e.target.src = "https://placehold.co/600x400/0a0a2a/00e5ff?text=" + service.name; }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${service.color}20, transparent)`
                  }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2rem" }}>{service.icon}</span>
                    <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", fontWeight: 700, color: service.color }}>{service.name}</h3>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.5, marginBottom: "1rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                    {service.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} style={{
                        background: "rgba(0,229,255,0.1)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 12,
                        fontSize: "0.7rem",
                        color: C.cyan
                      }}>
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 3 && (
                      <span style={{
                        background: "rgba(0,229,255,0.1)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 12,
                        fontSize: "0.7rem",
                        color: "rgba(224,247,255,0.6)"
                      }}>
                        +{service.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                    <div>
                      <span style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Starting from</span>
                      <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: C.cyan }}>{service.startingPrice}</div>
                    </div>
                    <span style={{ color: C.cyan, fontSize: "0.8rem" }}>Learn more →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section" style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>✦ OUR PROCESS</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "3rem", color: "#fff" }}>
              How We <span style={{ color: C.cyan }}>Build</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { step: "01", title: "Discovery & Scoping", desc: "30-min call → requirements document → fixed-price proposal within 24hrs", icon: "🔍", color: C.cyan },
              { step: "02", title: "Design & Prototype", desc: "Figma wireframes → high-fidelity mockups → client sign-off before development", icon: "🎨", color: C.purple },
              { step: "03", title: "Development & Testing", desc: "Sprint-based build → weekly updates → testing in staging environment", icon: "⚙️", color: C.pink },
              { step: "04", title: "Launch & Support", desc: "Production deployment → handover documentation → maintenance plan onboarding", icon: "🚀", color: C.cyan }
            ].map((step, i) => (
              <motion.div
                key={step.step}
                className="process-step"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid ${step.color}`,
                  borderRadius: 20,
                  padding: "2rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{step.icon}</div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 700, color: step.color, marginBottom: "0.5rem" }}>{step.step}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{step.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.5 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>✦ TECHNOLOGIES WE MASTER</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "3rem", color: "#fff" }}>
              Modern <span style={{ color: C.cyan }}>Tech Stack</span>
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "React Native", "AWS", "Docker", "Figma", "Next.js", "Tailwind CSS", "Claude API"].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 40,
                  padding: "0.6rem 1.2rem",
                  fontSize: "0.85rem",
                  color: "rgba(224,247,255,0.8)",
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 500
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
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
              Ready to Build <span style={{ color: C.cyan }}>Something Great?</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Tell us about your project — we respond within 4 hours.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(0,229,255,0.4)` }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
              >
                Start a Project →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: C.cyan }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/portfolio"}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.cyan}`,
                  padding: "1rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
              >
                Browse Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal (when clicking on service card) */}
      {selectedService && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.9)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backdropFilter: "blur(10px)",
          cursor: "pointer"
        }} onClick={() => setSelectedService(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              maxWidth: 800,
              maxHeight: "90vh",
              overflowY: "auto",
              background: "rgba(2,4,8,0.95)",
              border: `1px solid ${selectedService.color}`,
              borderRadius: 24,
              padding: "2rem",
              cursor: "default"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "3rem" }}>{selectedService.icon}</span>
                <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 700, color: selectedService.color }}>{selectedService.name}</h2>
              </div>
              <button onClick={() => setSelectedService(null)} style={{ background: "none", border: "none", fontSize: "2rem", cursor: "pointer", color: "rgba(224,247,255,0.5)" }}>×</button>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.8)", marginBottom: "1.5rem", lineHeight: 1.6 }}>{selectedService.longDescription}</p>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: C.cyan, marginBottom: "1rem" }}>What's Included</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                {selectedService.included.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 4L6 11L3 8" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontSize: "0.85rem", color: "rgba(224,247,255,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: C.cyan, marginBottom: "1rem" }}>Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {selectedService.techStack.map((tech, i) => (
                  <span key={i} style={{ background: "rgba(0,229,255,0.1)", padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.8rem", color: C.cyan }}>{tech}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderTop: "1px solid rgba(0,229,255,0.1)", borderBottom: "1px solid rgba(0,229,255,0.1)", marginBottom: "1.5rem" }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Typical Timeline</div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: selectedService.color }}>{selectedService.timeline}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Starting From</div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: selectedService.color }}>{selectedService.startingPrice}</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              style={{
                width: "100%",
                background: `linear-gradient(135deg, ${selectedService.color}, ${C.purple})`,
                border: "none",
                padding: "1rem",
                borderRadius: 50,
                color: "#fff",
                fontFamily: "'Orbitron',monospace",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer"
              }}
            >
              Get a Quote for This Service →
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}

export default Services;