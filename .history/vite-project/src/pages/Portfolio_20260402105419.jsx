// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioHeroBg from "../assets/images/ai.png";

gsap.registerPlugin(ScrollTrigger);

// Import project images
import ecomImg from "../assets/images/ecommerce.png";
import financeImg from "../assets/images/finance-app.png";
import aiDashboardImg from "../assets/images/ai-analytics.png";
import healthcareImg from "../assets/images/coding.jpeg";

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

// Updated PROJECTS_DATA with live preview links
const PROJECTS_DATA = [
  {
    id: 1,
    name: "E-Commerce Platform",
    client: "Online Retail",
    category: "web",
    industry: "E-commerce",
    year: "2025",
    image: ecomImg,
    isRealProject: true,
    description: "Modern e-commerce platform with product catalog, cart, and secure checkout.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.wix.com/website-template/view/html/wh-1064?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3DEcommerce%2BShop&tpClick=view_button&esi=d86b1cb8-4b3e-42c5-ad3d-c568ff02e51a",
    features: [
      "Product catalog with search/filter",
      "Shopping cart and wishlist",
      "Secure payment gateway",
      "Order tracking",
      "Admin dashboard"
    ],
    results: [
      { label: "Live Demo", value: "View Project →", type: "link" }
    ]
  },
  {
    id: 2,
    name: "SA Infotechs",
    client: "IT Services Company",
    category: "web",
    industry: "IT Services",
    year: "2025",
    image: ecomImg,
    isRealProject: true,
    description: "Professional IT services and consulting company website.",
    techStack: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://sainfotechs.com/",
    features: [
      "Service showcase",
      "Client portfolio",
      "Contact forms",
      "Blog integration",
      "SEO optimized"
    ],
    results: [
      { label: "Live Website", value: "Visit Site →", type: "link" }
    ]
  },
  {
    id: 3,
    name: "Transport Management System",
    client: "Logistics Company",
    category: "web",
    industry: "Transport & Logistics",
    year: "2025",
    image: ecomImg,
    isRealProject: true,
    description: "Complete transport and logistics management platform.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Google Maps API"],
    liveUrl: "https://transport-ashy.vercel.app/",
    features: [
      "Real-time vehicle tracking",
      "Route optimization",
      "Delivery scheduling",
      "Driver management",
      "Analytics dashboard"
    ],
    results: [
      { label: "Live Demo", value: "View Demo →", type: "link" }
    ]
  },
  {
    id: 4,
    name: "Medical Healthcare Platform",
    client: "Healthcare Provider",
    category: "web",
    industry: "Healthcare",
    year: "2025",
    image: healthcareImg,
    isRealProject: true,
    description: "Modern medical clinic website with appointment booking system.",
    techStack: ["React", "Node.js", "MongoDB", "Twilio API"],
    liveUrl: "https://www.wix.com/website-template/view/html/wh-1055?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3DMedical%2BClinic&tpClick=view_button&esi=956494ef-fcb2-4c6e-90e0-cbd701c2f3e9",
    features: [
      "Online appointment booking",
      "Doctor profiles",
      "Patient portal",
      "Prescription management",
      "Telemedicine integration"
    ],
    results: [
      { label: "Live Demo", value: "View Template →", type: "link" }
    ]
  },
  {
    id: 5,
    name: "Personal Finance Management App",
    client: "FinTech Startup",
    category: "mobile",
    industry: "FinTech",
    year: "2025",
    image: financeImg,
    isRealProject: true,
    description: "Cross-platform mobile app for personal finance tracking and management.",
    techStack: ["React Native", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.jotform.com/app-templates/personal-finance-management-app",
    features: [
      "Expense tracking",
      "Budget planning",
      "Bill reminders",
      "Investment tracking",
      "Financial reports"
    ],
    results: [
      { label: "View App", value: "See Template →", type: "link" }
    ]
  },
  {
    id: 6,
    name: "AI Analytics Dashboard",
    client: "Data Analytics Company",
    category: "ai",
    industry: "SaaS",
    year: "2025",
    image: aiDashboardImg,
    isRealProject: true,
    description: "Intelligent analytics dashboard with AI-powered insights and visualizations.",
    techStack: ["React", "Python", "FastAPI", "Claude API", "D3.js"],
    liveUrl: "https://tailadmin.com/blog/best-analytics-dashboard",
    features: [
      "Real-time analytics",
      "AI-powered insights",
      "Customizable dashboards",
      "Data export",
      "Predictive analytics"
    ],
    results: [
      { label: "View Demo", value: "See Examples →", type: "link" }
    ]
  },
  {
    id: 7,
    name: "CRM Dashboard",
    client: "Business Solutions",
    category: "web",
    industry: "SaaS",
    year: "2025",
    image: aiDashboardImg,
    isRealProject: true,
    description: "Modern CRM dashboard for customer relationship management and sales tracking.",
    techStack: ["React", "Node.js", "PostgreSQL", "REST API"],
    liveUrl: "https://www.figma.com/design/A4RbFHnvGj2VTWn3jL6m0T/CRM-Dashboard--Community-?node-id=0-1&p=f&t=Nzkghov1aifiyZj5-0",
    features: [
      "Lead management",
      "Sales pipeline",
      "Customer profiles",
      "Activity tracking",
      "Reports & analytics"
    ],
    results: [
      { label: "View Design", value: "See Figma →", type: "link" }
    ]
  }
];

// Filter categories
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
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

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
        background: `linear-gradient(rgba(10, 15, 30, 0.82), rgba(10, 15, 30, 0.88)), url(${portfolioHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse 70% 40% at 50% 30%, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2, background: C.bg }}>
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

      {/* Filter Bar */}
      <section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2, background: C.bg }}>
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
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
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
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
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
                    
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
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
                    
                    {/* Live Preview Button Only */}
                    <motion.button
                      whileHover={{ scale: 1.02, background: C.blueHover }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      style={{
                        width: "100%",
                        background: C.blue,
                        border: "none",
                        padding: "0.7rem 1.2rem",
                        borderRadius: 8,
                        color: "#fff",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem"
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M11 5l3 3-3 3M5 5L2 8l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Preview
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
    </>
  );
}

export default Portfolio;