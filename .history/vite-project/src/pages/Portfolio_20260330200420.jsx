// src/pages/Portfolio.jsx
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

// Import images (replace with your actual images)
import ecomImg from "../assets/images/E-commerce.png";
import financeImg from "../assets/images/fincinncetrack.png";
import aiDashboardImg from "../assets/images/mobile.png";
import portManagementImg from "../assets/images/mission.png";
import healthcareImg from "../assets/images/mobile2.png";
import edtechImg from "../assets/images/vision.jpeg";

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
};

// Portfolio Projects Data
const PROJECTS_DATA = [
  {
    id: 1,
    name: "Port Management Automation System",
    client: "Maharashtra Maritime Board",
    category: "civic-tech",
    industry: "Civic Tech",
    year: "2025",
    image: portManagementImg,
    outcome: "Reduced processing time by 70%",
    outcomeMetric: "+70% efficiency",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    liveUrl: "https://pmas.gov.in",
    challenge: "The Maharashtra Maritime Board was managing port operations using manual processes and disconnected systems. Vessel tracking, cargo documentation, and clearance approvals took 3-5 days, causing delays in port operations and revenue loss for stakeholders.",
    solution: "We built a unified Port Management Automation System (PMAS) that digitized all port operations. The system includes real-time vessel tracking, automated cargo documentation, digital clearance workflows, and a unified dashboard for port authorities.",
    architecture: "The system uses a microservices architecture with React frontend, Spring Boot backend, and PostgreSQL database. Real-time vessel tracking uses WebSocket connections. The system handles 500+ concurrent users during peak hours.",
    features: [
      { name: "Real-time Vessel Tracking", desc: "Track vessel location, status, and estimated arrival times in real-time" },
      { name: "Automated Cargo Documentation", desc: "Digital submission and approval of cargo manifests and clearance documents" },
      { name: "Digital Clearance Workflows", desc: "Multi-stage approval workflows with automated notifications" },
      { name: "Unified Dashboard", desc: "Single dashboard for port authorities, agents, and stakeholders" },
      { name: "Analytics & Reports", desc: "Generate operational reports and performance metrics automatically" }
    ],
    results: [
      { label: "Processing Time Reduction", value: "70%", before: "3-5 days", after: "4-6 hours" },
      { label: "User Concurrent Capacity", value: "500+", before: "50", after: "500+" },
      { label: "Document Processing", value: "95%", before: "Manual", after: "Automated" }
    ],
    testimonial: {
      quote: "Adlynco Studio transformed our port operations. The system has reduced processing time from days to hours. The team's technical expertise and understanding of our needs was exceptional.",
      name: "Captain Rajesh Sharma",
      role: "Port Director",
      company: "Maharashtra Maritime Board",
      photo: null
    }
  },
  {
    id: 2,
    name: "FinTech Mobile App",
    client: "MoneyFlow Finance",
    category: "mobile",
    industry: "FinTech",
    year: "2026",
    image: financeImg,
    outcome: "50,000+ downloads in first month",
    outcomeMetric: "50K+ downloads",
    techStack: ["React Native", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://moneyflow.app",
    challenge: "A growing FinTech startup needed a mobile app that could handle secure financial transactions, provide real-time portfolio tracking, and offer a seamless user experience across both iOS and Android platforms.",
    solution: "We developed a cross-platform mobile app using React Native that provides secure authentication, real-time portfolio tracking, investment recommendations, and seamless payment integration.",
    architecture: "React Native frontend with Node.js backend, MongoDB database, and Stripe for payment processing. JWT authentication with biometric login support.",
    features: [
      { name: "Secure Authentication", desc: "Biometric login (fingerprint/face ID) with JWT token management" },
      { name: "Real-time Portfolio Tracking", desc: "Live updates on investments, gains/losses, and market trends" },
      { name: "Investment Recommendations", desc: "AI-powered personalized investment suggestions" },
      { name: "Payment Integration", desc: "Seamless UPI and card payments via Stripe" },
      { name: "Push Notifications", desc: "Real-time alerts for transactions and market updates" }
    ],
    results: [
      { label: "Downloads (First Month)", value: "50,000+", before: "0", after: "50,000+" },
      { label: "User Retention (30-day)", value: "65%", before: "N/A", after: "65%" },
      { label: "Transaction Success Rate", value: "99.8%", before: "95%", after: "99.8%" }
    ],
    testimonial: {
      quote: "The team at Adlynco delivered beyond our expectations. The app is fast, secure, and users love it. We've seen 50,000 downloads in the first month and 65% retention rate.",
      name: "Priya Mehta",
      role: "CEO",
      company: "MoneyFlow Finance",
      photo: null
    }
  },
  {
    id: 3,
    name: "AI Analytics Dashboard",
    client: "DataViz Solutions",
    category: "ai",
    industry: "SaaS",
    year: "2025",
    image: aiDashboardImg,
    outcome: "Increased client reporting efficiency by 85%",
    outcomeMetric: "+85% efficiency",
    techStack: ["React", "Python", "FastAPI", "Claude API", "Supabase"],
    liveUrl: "https://dataviz.ai",
    challenge: "DataViz needed an AI-powered analytics dashboard that could process large datasets, generate actionable insights, and provide natural language query capabilities for non-technical users.",
    solution: "Built an AI-powered analytics platform with Claude API integration for natural language queries. Users can ask questions in plain English and get instant data visualizations and insights.",
    architecture: "React frontend with Python FastAPI backend. Claude API for natural language processing. Supabase for data storage and real-time updates.",
    features: [
      { name: "Natural Language Queries", desc: "Ask questions in plain English, get instant insights" },
      { name: "Automated Insights", desc: "AI generates actionable insights from your data" },
      { name: "Interactive Dashboards", desc: "Customizable dashboards with drag-and-drop widgets" },
      { name: "Data Export", desc: "Export insights as PDF, CSV, or PowerPoint" },
      { name: "Real-time Updates", desc: "Live data streaming and automatic report generation" }
    ],
    results: [
      { label: "Reporting Efficiency", value: "85%", before: "Manual", after: "85% faster" },
      { label: "User Adoption Rate", value: "92%", before: "60%", after: "92%" },
      { label: "Query Response Time", value: "<2s", before: "30s+", after: "<2s" }
    ],
    testimonial: {
      quote: "The AI dashboard has transformed how our clients interact with data. The natural language query feature is revolutionary - our non-technical users love it.",
      name: "Ankit Desai",
      role: "CTO",
      company: "DataViz Solutions",
      photo: null
    }
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    client: "ShopEase Retail",
    category: "web",
    industry: "E-commerce",
    year: "2025",
    image: ecomImg,
    outcome: "300% increase in sales in 6 months",
    outcomeMetric: "+300% sales",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Razorpay"],
    liveUrl: "https://shopease.com",
    challenge: "An established retail brand wanted to take their business online with a scalable e-commerce platform that could handle high traffic during sales events.",
    solution: "Built a full-featured e-commerce platform with product catalog, cart management, payment integration, order tracking, and admin dashboard.",
    architecture: "Next.js frontend with SSR for SEO, Spring Boot microservices backend, PostgreSQL database, and Razorpay payment gateway.",
    features: [
      { name: "Product Catalog", desc: "Advanced search, filtering, and product recommendations" },
      { name: "Shopping Cart", desc: "Persistent cart with wishlist functionality" },
      { name: "Payment Integration", desc: "Seamless payments with Razorpay and UPI" },
      { name: "Order Tracking", desc: "Real-time order status updates" },
      { name: "Admin Dashboard", desc: "Inventory management, order processing, analytics" }
    ],
    results: [
      { label: "Sales Increase", value: "300%", before: "0", after: "+300% in 6 months" },
      { label: "Peak Concurrent Users", value: "10,000+", before: "0", after: "10,000+" },
      { label: "Page Load Time", value: "1.2s", before: "N/A", after: "1.2s" }
    ],
    testimonial: {
      quote: "Our online sales exceeded all expectations. The platform handled 10,000 concurrent users during our festival sale without any downtime.",
      name: "Rahul Gupta",
      role: "Founder",
      company: "ShopEase Retail",
      photo: null
    }
  },
  {
    id: 5,
    name: "Healthcare Management System",
    client: "CareWell Hospitals",
    category: "web",
    industry: "Healthcare",
    year: "2025",
    image: healthcareImg,
    outcome: "Reduced patient wait time by 60%",
    outcomeMetric: "-60% wait time",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Redis"],
    liveUrl: "https://carewell.com",
    challenge: "A multi-specialty hospital chain needed a digital system to manage patient records, appointments, billing, and doctor schedules across multiple locations.",
    solution: "Built a comprehensive healthcare management system with patient registration, appointment scheduling, electronic medical records (EMR), billing, and multi-location support.",
    architecture: "React frontend with Spring Boot backend, PostgreSQL database with encryption for patient data, Redis for caching, and Role-based access control.",
    features: [
      { name: "Patient Registration", desc: "Digital patient records with medical history" },
      { name: "Appointment Scheduling", desc: "Online booking with doctor availability" },
      { name: "Electronic Medical Records", desc: "Secure EMR with encryption and audit trails" },
      { name: "Billing & Insurance", desc: "Automated billing and insurance claims" },
      { name: "Multi-location Support", desc: "Centralized management across locations" }
    ],
    results: [
      { label: "Patient Wait Time", value: "60%", before: "45 min", after: "18 min" },
      { label: "Staff Productivity", value: "40%", before: "Manual", after: "+40% efficiency" },
      { label: "Patient Satisfaction", value: "95%", before: "78%", after: "95%" }
    ],
    testimonial: {
      quote: "The system has revolutionized our operations. Patient wait times are down by 60%, and our staff can focus more on patient care rather than paperwork.",
      name: "Dr. Sunita Reddy",
      role: "Medical Director",
      company: "CareWell Hospitals",
      photo: null
    }
  },
  {
    id: 6,
    name: "EdTech Learning Platform",
    client: "LearnSphere",
    category: "web",
    industry: "EdTech",
    year: "2026",
    image: edtechImg,
    outcome: "100,000+ students enrolled",
    outcomeMetric: "100K+ students",
    techStack: ["React", "Node.js", "MongoDB", "AWS", "WebRTC"],
    liveUrl: "https://learnsphere.com",
    challenge: "An education startup needed a scalable online learning platform with video streaming, live classes, assessments, and progress tracking.",
    solution: "Built a comprehensive learning platform with course management, video streaming, live classes (WebRTC), quizzes, assignments, and progress tracking.",
    architecture: "React frontend with Node.js backend, MongoDB for content storage, AWS for video hosting, WebRTC for live classes.",
    features: [
      { name: "Course Management", desc: "Create and manage courses with modules and lessons" },
      { name: "Video Streaming", desc: "High-quality video streaming with progress tracking" },
      { name: "Live Classes", desc: "Interactive live classes with WebRTC" },
      { name: "Assessments", desc: "Quizzes, assignments, and automated grading" },
      { name: "Progress Tracking", desc: "Student progress dashboards and certificates" }
    ],
    results: [
      { label: "Student Enrollment", value: "100,000+", before: "0", after: "100,000+" },
      { label: "Course Completion Rate", value: "78%", before: "N/A", after: "78%" },
      { label: "Platform Uptime", value: "99.9%", before: "N/A", after: "99.9%" }
    ],
    testimonial: {
      quote: "LearnSphere has grown faster than we imagined. The platform is rock solid, and our students love the learning experience.",
      name: "Neha Sharma",
      role: "Founder",
      company: "LearnSphere",
      photo: null
    }
  }
];

// Category Filters
const CATEGORIES = [
  { id: "all", label: "All", icon: "🎯" },
  { id: "web", label: "Web Apps", icon: "🌐" },
  { id: "mobile", label: "Mobile Apps", icon: "📱" },
  { id: "ai", label: "AI Integration", icon: "🧠" },
  { id: "civic-tech", label: "Civic Tech", icon: "🏛️" },
  { id: "saas", label: "SaaS", icon: "☁️" }
];

function Portfolio() {
  const heroRef = useRef();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Portfolio grid animations
    gsap.fromTo(".portfolio-item", 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, scrollTrigger: { trigger: ".portfolio-grid", start: "top 80%" } }
    );

    // Show personalization prompt after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPrompt = localStorage.getItem("portfolio_personalization_seen");
      if (!hasSeenPrompt) {
        setShowPersonalization(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeFilter === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  // Personalized sorting based on industry
  const getPersonalizedProjects = () => {
    if (!selectedIndustry) return filteredProjects;
    
    // Sort projects: matching industry first
    return [...filteredProjects].sort((a, b) => {
      const aMatch = a.industry.toLowerCase() === selectedIndustry.toLowerCase();
      const bMatch = b.industry.toLowerCase() === selectedIndustry.toLowerCase();
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  };

  const displayedProjects = getPersonalizedProjects();

  const handlePersonalization = (industry) => {
    setSelectedIndustry(industry);
    setShowPersonalization(false);
    localStorage.setItem("portfolio_personalization_seen", "true");
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
        .portfolio-item {
          transition: all 0.3s ease;
        }
        .portfolio-item:hover {
          transform: translateY(-8px);
        }
        .project-overlay {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Background Components */}
      {/* <ParticleCanvas />
      <ScanLines />
      <Navbar />
      <WhatsApp /> */}

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
              ✦ OUR WORK
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              Every Project is a <br />
              <span style={{ color: C.cyan }}>Case Study</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              We solve real business problems with technology. Here's how we've helped businesses like yours scale, automate, and grow.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Personalization Prompt */}
      {showPersonalization && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            background: "rgba(0,12,30,0.95)",
            border: `1px solid ${C.cyan}`,
            borderRadius: 16,
            padding: "1rem 1.5rem",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <span style={{ color: "rgba(224,247,255,0.8)" }}>What industry are you in?</span>
          {["Healthcare", "EdTech", "E-commerce", "SaaS", "FinTech"].map(industry => (
            <button
              key={industry}
              onClick={() => handlePersonalization(industry)}
              style={{
                background: "rgba(0,229,255,0.1)",
                border: `1px solid rgba(0,229,255,0.3)`,
                borderRadius: 20,
                padding: "0.3rem 1rem",
                fontSize: "0.8rem",
                color: C.cyan,
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => e.target.style.background = "rgba(0,229,255,0.2)"}
              onMouseLeave={e => e.target.style.background = "rgba(0,229,255,0.1)"}
            >
              {industry}
            </button>
          ))}
          <button
            onClick={() => setShowPersonalization(false)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(224,247,255,0.5)",
              cursor: "pointer",
              fontSize: "1.2rem"
            }}
          >
            ×
          </button>
        </motion.div>
      )}

      {/* Filter Bar */}
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: 50,
                  background: activeFilter === cat.id ? `linear-gradient(135deg, ${C.cyan}, ${C.purple})` : "rgba(0,12,30,0.88)",
                  border: `1px solid ${activeFilter === cat.id ? C.cyan : "rgba(0,229,255,0.2)"}`,
                  color: activeFilter === cat.id ? "#fff" : "rgba(224,247,255,0.7)",
                  fontFamily: "'Orbitron',monospace",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
          {selectedIndustry && (
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <span style={{ fontSize: "0.8rem", color: C.cyan }}>
                Showing projects relevant to {selectedIndustry}
                <button
                  onClick={() => setSelectedIndustry("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(224,247,255,0.5)",
                    cursor: "pointer",
                    marginLeft: "0.5rem"
                  }}
                >
                  Clear
                </button>
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="portfolio-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                  <img 
                    src={project.image} 
                    alt={project.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onError={(e) => { e.target.src = "https://placehold.co/600x400/0a0a2a/00e5ff?text=" + project.name; }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${C.cyan}20, transparent)`,
                    opacity: 0.6
                  }} />
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                    padding: "0.3rem 0.8rem",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#fff"
                  }}>
                    {project.outcomeMetric}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.7rem", color: C.cyan, textTransform: "uppercase", letterSpacing: "0.05em" }}>{project.industry}</span>
                    <span style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>{project.year}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{project.name}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(224,247,255,0.7)", marginBottom: "1rem" }}>{project.outcome}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} style={{
                        background: "rgba(0,229,255,0.1)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 12,
                        fontSize: "0.65rem",
                        color: C.cyan
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span style={{
                        background: "rgba(0,229,255,0.1)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 12,
                        fontSize: "0.65rem",
                        color: "rgba(224,247,255,0.6)"
                      }}>
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: C.cyan, fontSize: "0.8rem", fontWeight: 600 }}>View Case Study →</span>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.7rem", textDecoration: "none" }}>
                        Live Project →
                      </a>
                    )}
                  </div>
                </div>
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
              Ready to Build Your <span style={{ color: C.cyan }}>Success Story?</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Let's discuss your project and see how we can help you achieve similar results.
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

      {/* Project Modal (Case Study Deep Page) */}
      {selectedProject && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.95)",
          zIndex: 2000,
          overflowY: "auto",
          padding: "2rem",
          backdropFilter: "blur(10px)"
        }} onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              background: "rgba(2,4,8,0.98)",
              border: `1px solid ${C.cyan}`,
              borderRadius: 24,
              padding: "2rem",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(0,229,255,0.1)",
                border: "none",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "rgba(224,247,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            {/* Hero Section */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <span style={{ fontSize: "0.7rem", color: C.cyan, textTransform: "uppercase", letterSpacing: "0.05em" }}>{selectedProject.industry}</span>
                  <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem", color: "#fff" }}>{selectedProject.name}</h1>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)" }}>Client</div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{selectedProject.client}</div>
                  <div style={{ fontSize: "0.8rem", color: C.cyan }}>{selectedProject.year}</div>
                </div>
              </div>
              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: C.cyan, fontSize: "0.8rem", textDecoration: "none" }}>
                  Visit Live Project →
                </a>
              )}
            </div>

            {/* Hero Image */}
            <div style={{
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: "2rem",
              border: `1px solid ${C.cyan}20`
            }}>
              <img src={selectedProject.image} alt={selectedProject.name} style={{ width: "100%", height: "auto" }} />
            </div>

            {/* Context Panel */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
              background: "rgba(0,12,30,0.5)",
              borderRadius: 16,
              padding: "1.5rem",
              marginBottom: "2rem",
              border: `1px solid ${C.cyan}20`
            }}>
              <div><span style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Industry</span><div style={{ color: "#fff" }}>{selectedProject.industry}</div></div>
              <div><span style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Technology</span><div style={{ color: "#fff" }}>{selectedProject.techStack.join(", ")}</div></div>
              <div><span style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Timeline</span><div style={{ color: "#fff" }}>3-4 months</div></div>
              <div><span style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>Outcome</span><div style={{ color: C.cyan }}>{selectedProject.outcomeMetric}</div></div>
            </div>

            {/* Challenge & Solution */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", color: C.cyan, marginBottom: "1rem" }}>The Challenge</h2>
              <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.8)", lineHeight: 1.6 }}>{selectedProject.challenge}</p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", color: C.cyan, marginBottom: "1rem" }}>Our Solution</h2>
              <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.8)", lineHeight: 1.6 }}>{selectedProject.solution}</p>
            </div>

            {/* Architecture */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", color: C.cyan, marginBottom: "1rem" }}>Architecture</h2>
              <p style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6 }}>{selectedProject.architecture}</p>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", color: C.cyan, marginBottom: "1rem" }}>Key Features</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
                {selectedProject.features.map((feature, i) => (
                  <div key={i} style={{ background: "rgba(0,12,30,0.5)", borderRadius: 12, padding: "1rem", border: `1px solid ${C.cyan}20` }}>
                    <div style={{ fontWeight: 600, color: C.cyan, marginBottom: "0.5rem" }}>{feature.name}</div>
                    <p style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.7)" }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", color: C.cyan, marginBottom: "1rem" }}>Results</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {selectedProject.results.map((result, i) => (
                  <div key={i} style={{ background: "rgba(0,229,255,0.05)", borderRadius: 12, padding: "1rem", textAlign: "center", border: `1px solid ${C.cyan}30` }}>
                    <div style={{ fontSize: "2rem", fontWeight: 700, color: C.cyan }}>{result.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.7)" }}>{result.label}</div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.5)" }}>{result.before} → {result.after}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div style={{
              background: `linear-gradient(135deg, ${C.cyan}10, transparent)`,
              borderRadius: 16,
              padding: "1.5rem",
              marginBottom: "2rem",
              borderLeft: `3px solid ${C.cyan}`
            }}>
              <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.9)", fontStyle: "italic", marginBottom: "1rem" }}>"{selectedProject.testimonial.quote}"</p>
              <div>
                <div style={{ fontWeight: 600, color: "#fff" }}>{selectedProject.testimonial.name}</div>
                <div style={{ fontSize: "0.8rem", color: C.cyan }}>{selectedProject.testimonial.role}, {selectedProject.testimonial.company}</div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                style={{
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Start Your Project →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.cyan}`,
                  padding: "0.8rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                See Next Case Study
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Portfolio;