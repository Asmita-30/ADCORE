// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import REAL project images (replace with actual screenshots)
// import pmasImg from "../assets/images/port-management.png"; // PMAS real screenshot
import jansahayakImg from "../assets/images//team.jpeg"; // Jan Sahayak real screenshot
import ecomImg from "../assets/images/ecommerce.png";
import financeImg from "../assets/images/finance-app.png";
import aiDashboardImg from "../assets/images/ai-analytics.png";
import healthcareImg from "../assets/images/healthcare.png";

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

// C-17: Use real project names - PMAS as the lead project
const PROJECTS_DATA = [
  {
    id: 1,
    name: "Port Management Automation System",
    client: "Maharashtra Maritime Board",
    category: "web",
    industry: "Civic Tech",
    year: "2025",
    image: pmasImg,
    isRealProject: true,
    description: "End-to-end digitization of port operations — from vessel tracking to clearance approvals.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker", "WebSocket"],
    liveUrl: "#", // Add actual URL if available
    challenge: "The Maharashtra Maritime Board was managing port operations using manual processes and disconnected systems. Vessel tracking, cargo documentation, and clearance approvals took 3-5 days, causing delays in port operations.",
    solution: "Built a unified Port Management Automation System (PMAS) that digitized all port operations. The system includes real-time vessel tracking, automated cargo documentation, digital clearance workflows, and a unified dashboard.",
    architecture: "Microservices architecture with React frontend, Spring Boot backend, PostgreSQL database. Real-time vessel tracking uses WebSocket connections.",
    features: [
      "Real-time vessel tracking and ETA predictions",
      "Automated cargo documentation and clearance",
      "Digital approval workflows with notifications",
      "Unified dashboard for all stakeholders",
      "Analytics and operational reports"
    ],
    // C-18: Replace unverifiable metrics with real deliverables
    results: [
      { label: "Processing Time Reduction", value: "3-5 days → 4-6 hours", type: "improvement" },
      { label: "Modules Delivered", value: "12", type: "tech" },
      { label: "Concurrent Users Supported", value: "500+", type: "tech" },
      { label: "Tech Stack", value: "React + Spring Boot + PostgreSQL", type: "stack" }
    ]
  },
  {
    id: 2,
    name: "Jan Sahayak Citizen Portal",
    client: "Government Initiative",
    category: "web",
    industry: "Civic Tech",
    year: "2025",
    image: jansahayakImg,
    isRealProject: true,
    description: "Digital citizen service portal for government scheme applications and tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    challenge: "Citizens had to visit government offices multiple times for scheme applications. No digital tracking system existed.",
    solution: "Built a comprehensive citizen portal allowing online applications, document uploads, and real-time application tracking.",
    architecture: "MERN stack with JWT authentication and role-based access control.",
    features: [
      "Online application submission",
      "Document upload and verification",
      "Real-time application tracking",
      "SMS/Email notifications",
      "Admin dashboard for processing"
    ],
    results: [
      { label: "Application Processing", value: "15 days → 5 days", type: "improvement" },
      { label: "Modules Delivered", value: "8", type: "tech" },
      { label: "Digital Forms", value: "25+", type: "tech" }
    ]
  },
  // C-17: Mark concept/sample projects clearly
  {
    id: 3,
    name: "ShopEase (Sample Project)",
    client: "Sample / Portfolio",
    category: "web",
    industry: "E-commerce",
    year: "2026",
    image: ecomImg,
    isRealProject: false,
    isSample: true,
    description: "Sample e-commerce platform demonstrating product catalog, cart, and payment integration.",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Razorpay"],
    liveUrl: "#",
    sampleNote: "This is a concept project demonstrating our capabilities. For real e-commerce projects, contact us.",
    features: [
      "Product catalog with search/filter",
      "Shopping cart and wishlist",
      "Payment gateway integration",
      "Order tracking",
      "Admin dashboard"
    ],
    results: [
      { label: "Sample Project", value: "Concept Demonstration", type: "note" }
    ]
  },
  {
    id: 4,
    name: "MoneyFlow (Sample Project)",
    client: "Sample / Portfolio",
    category: "mobile",
    industry: "FinTech",
    year: "2026",
    image: financeImg,
    isRealProject: false,
    isSample: true,
    description: "Sample fintech mobile app demonstrating secure transactions and portfolio tracking.",
    techStack: ["React Native", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    sampleNote: "This is a concept project demonstrating our capabilities. For real fintech projects, contact us.",
    features: [
      "Biometric authentication",
      "Real-time portfolio tracking",
      "Payment integration",
      "Push notifications",
      "Transaction history"
    ],
    results: [
      { label: "Sample Project", value: "Concept Demonstration", type: "note" }
    ]
  },
  {
    id: 5,
    name: "DataViz AI (Sample Project)",
    client: "Sample / Portfolio",
    category: "ai",
    industry: "SaaS",
    year: "2026",
    image: aiDashboardImg,
    isRealProject: false,
    isSample: true,
    description: "Sample AI analytics dashboard demonstrating natural language queries and insights.",
    techStack: ["React", "Python", "FastAPI", "Claude API"],
    liveUrl: "#",
    sampleNote: "This is a concept project demonstrating our capabilities. For real AI integration projects, contact us.",
    features: [
      "Natural language queries",
      "Automated insights generation",
      "Interactive dashboards",
      "Data export",
      "Real-time updates"
    ],
    results: [
      { label: "Sample Project", value: "Concept Demonstration", type: "note" }
    ]
  }
];

// C-20: Reduce filter categories to 4 meaningful categories
const CATEGORIES = [
  { id: "all", label: "All", icon: "🎯" },
  { id: "web", label: "Web Apps", icon: "🌐" },
  { id: "mobile", label: "Mobile Apps", icon: "📱" },
  { id: "ai", label: "AI Integration", icon: "🧠" }
];

function Portfolio() {
  const heroRef = useRef();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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
  }, []);

  const getFilteredProjects = () => {
    let projects = activeFilter === "all" 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === activeFilter);
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(project => 
        project.name.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.industry.toLowerCase().includes(query) ||
        project.techStack.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
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
              ✦ OUR WORK
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
              Every Project is a{" "}
              <span style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Case Study
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
              We solve real business problems with technology. Here's how we've helped organizations scale, automate, and grow.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Search Bar */}
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search projects by name, client, industry, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 60,
                padding: "1.2rem 5rem 1.2rem 2rem",
                color: C.textPrimary,
                fontSize: "1rem",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = C.blue;
                e.target.style.boxShadow = `0 0 0 2px ${C.blue}20`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = C.border;
                e.target.style.boxShadow = "none";
              }}
            />
            <svg style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", color: C.textMuted }} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          {searchQuery && (
            <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
              <span style={{ fontSize: "0.75rem", color: C.textMuted }}>
                Found {filteredProjects.length} project(s) matching "{searchQuery}"
              </span>
            </div>
          )}
        </div>
      </section>

      {/* C-20: Filter Bar - Reduced to 4 categories */}
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
                  background: activeFilter === cat.id ? C.blue : "transparent",
                  border: `1px solid ${activeFilter === cat.id ? C.blue : C.border}`,
                  color: activeFilter === cat.id ? "#fff" : C.textBody,
                  fontFamily: "'Inter', sans-serif",
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
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem" }}>
              <p style={{ color: C.textMuted }}>No projects found matching your search.</p>
            </div>
          ) : (
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
              {filteredProjects.map((project, index) => (
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
                    background: C.surface,
                    border: `1px solid ${project.isRealProject ? C.blue : C.border}`,
                    borderRadius: 16,
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
                    />
                    {/* C-16: Add sample project badge for concept work */}
                    {project.isSample && (
                      <div style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "#D97706",
                        padding: "0.2rem 0.8rem",
                        borderRadius: 20,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#fff"
                      }}>
                        Sample Project
                      </div>
                    )}
                    {project.isRealProject && (
                      <div style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: C.blue,
                        padding: "0.2rem 0.8rem",
                        borderRadius: 20,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#fff"
                      }}>
                        Real Project
                      </div>
                    )}
                    <div style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      background: "rgba(0,0,0,0.7)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 12,
                      fontSize: "0.65rem",
                      color: C.cyan
                    }}>
                      {project.year}
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.7rem", color: C.blueHover, textTransform: "uppercase", letterSpacing: "0.05em" }}>{project.industry}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem", color: C.textPrimary }}>{project.name}</h3>
                    <p style={{ fontSize: "0.85rem", color: C.textBody, marginBottom: "1rem" }}>{project.description}</p>
                    
                    {/* C-18: Show real technical details instead of inflated metrics */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} style={{
                          background: C.codeBg,
                          padding: "0.2rem 0.6rem",
                          borderRadius: 12,
                          fontSize: "0.65rem",
                          color: C.cyan
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        style={{
                          background: C.blue,
                          border: "none",
                          padding: "0.5rem 1.2rem",
                          borderRadius: 8,
                          color: "#fff",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          cursor: "pointer"
                        }}
                      >
                        View Case Study →
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                        style={{
                          background: "transparent",
                          border: `1px solid ${C.border}`,
                          padding: "0.5rem 1.2rem",
                          borderRadius: 8,
                          color: C.textPrimary,
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          cursor: "pointer"
                        }}
                      >
                        Build Similar
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "3rem"
            }}
          >
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Ready to Build Your <span style={{ color: C.blue }}>Success Story?</span>
            </h2>
            <p style={{ fontSize: "1rem", color: C.textBody, marginBottom: "2rem", lineHeight: 1.6 }}>
              Let's discuss your project and see how we can help you achieve similar results.
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

      {/* Project Modal (Case Study Deep Page) - C-19: Build real case study view */}
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
          padding: "2rem"
        }} onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              maxWidth: 900,
              margin: "0 auto",
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
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
                background: C.surface,
                border: `1px solid ${C.border}`,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            {/* Header */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  {selectedProject.isSample && (
                    <span style={{
                      display: "inline-block",
                      background: "#D97706",
                      padding: "0.2rem 0.8rem",
                      borderRadius: 20,
                      fontSize: "0.7rem",
                      color: "#fff",
                      marginBottom: "0.5rem"
                    }}>
                      Sample Project
                    </span>
                  )}
                  {selectedProject.isRealProject && (
                    <span style={{
                      display: "inline-block",
                      background: C.blue,
                      padding: "0.2rem 0.8rem",
                      borderRadius: 20,
                      fontSize: "0.7rem",
                      color: "#fff",
                      marginBottom: "0.5rem"
                    }}>
                      Real Project
                    </span>
                  )}
                  <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.8rem", fontWeight: 700, marginTop: "0.5rem", color: C.textPrimary }}>{selectedProject.name}</h1>
                  <p style={{ color: C.textBody, marginTop: "0.5rem" }}>{selectedProject.description}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.8rem", color: C.textMuted }}>Client</div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, color: C.textPrimary }}>{selectedProject.client}</div>
                  <div style={{ fontSize: "0.8rem", color: C.blue }}>{selectedProject.year}</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div style={{
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: "2rem",
              border: `1px solid ${C.border}`
            }}>
              <img src={selectedProject.image} alt={selectedProject.name} style={{ width: "100%", height: "auto" }} />
            </div>

            {/* Sample Project Note */}
            {selectedProject.sampleNote && (
              <div style={{
                background: "rgba(217, 119, 6, 0.1)",
                borderRadius: 12,
                padding: "1rem",
                marginBottom: "2rem",
                borderLeft: `3px solid #D97706`
              }}>
                <p style={{ fontSize: "0.9rem", color: "#D97706" }}>📌 {selectedProject.sampleNote}</p>
              </div>
            )}

            {/* Tech Stack Panel */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
              background: C.surface,
              borderRadius: 12,
              padding: "1.5rem",
              marginBottom: "2rem",
              border: `1px solid ${C.border}`
            }}>
              <div>
                <span style={{ fontSize: "0.7rem", color: C.textMuted }}>Industry</span>
                <div style={{ color: C.textPrimary }}>{selectedProject.industry}</div>
              </div>
              <div>
                <span style={{ fontSize: "0.7rem", color: C.textMuted }}>Technology Stack</span>
                <div style={{ color: C.textPrimary }}>{selectedProject.techStack.join(", ")}</div>
              </div>
              <div>
                <span style={{ fontSize: "0.7rem", color: C.textMuted }}>Timeline</span>
                <div style={{ color: C.textPrimary }}>3-4 months</div>
              </div>
            </div>

            {/* Challenge & Solution */}
            {selectedProject.challenge && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", color: C.blue, marginBottom: "1rem" }}>The Challenge</h2>
                <p style={{ fontSize: "1rem", color: C.textBody, lineHeight: 1.6 }}>{selectedProject.challenge}</p>
              </div>
            )}

            {selectedProject.solution && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", color: C.blue, marginBottom: "1rem" }}>Our Solution</h2>
                <p style={{ fontSize: "1rem", color: C.textBody, lineHeight: 1.6 }}>{selectedProject.solution}</p>
              </div>
            )}

            {/* Key Features */}
            {selectedProject.features && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", color: C.blue, marginBottom: "1rem" }}>Key Features</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "0.8rem" }}>
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem", background: C.surface, borderRadius: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" fill={C.blue} fillOpacity="0.2" stroke={C.blue} strokeWidth="1" />
                        <path d="M6 8l2 2 3-4" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span style={{ fontSize: "0.85rem", color: C.textBody }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {selectedProject.results && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", color: C.blue, marginBottom: "1rem" }}>Results</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  {selectedProject.results.map((result, i) => (
                    <div key={i} style={{ background: C.surface, borderRadius: 12, padding: "1rem", textAlign: "center", border: `1px solid ${C.border}` }}>
                      <div style={{ fontSize: "1.2rem", fontWeight: 700, color: C.blue }}>{result.value}</div>
                      <div style={{ fontSize: "0.75rem", color: C.textMuted }}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: C.blue,
                    border: "none",
                    padding: "0.8rem 2rem",
                    borderRadius: 8,
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer"
                  }}
                >
                  Start Your Project →
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  padding: "0.8rem 2rem",
                  borderRadius: 8,
                  color: C.textPrimary,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Portfolio;