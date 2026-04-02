// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioHeroBg from "../assets/images/ai.png";

gsap.registerPlugin(ScrollTrigger);

// Import project images
import ecomReactImg from "../assets/images/E-commerce.png";
import saInfotechsImg from "../assets/images/mobile.png";
import transportImg from "../assets/images/Transport.jpeg";
import medicalImg from "../assets/images/mobile2.png";
import financeAppImg from "../assets/images/finance-app.png";
import aiDashboardImg from "../assets/images/ai-analytics.png";
import crmImg from "../assets/images/CRM.jpeg";
import bizcartImg from "../assets/images/CAB.jpeg";

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

// Updated PROJECTS_DATA with real projects and live preview links
const PROJECTS_DATA = [
  {
    id: 1,
    name: "E-Commerce React",
    client: "E-Commerce Platform",
    category: "web",
    industry: "E-commerce",
    year: "2025",
    image: ecomReactImg,
    isRealProject: true,
    description: "Modern e-commerce platform with product catalog, cart, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Razorpay", "Redux"],
    liveUrl: "https://www.wix.com/website-template/view/html/wh-1064?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3DEcommerce%2BShop&tpClick=view_button&esi=d86b1cb8-4b3e-42c5-ad3d-c568ff02e51a",
    challenge: "Client needed a scalable e-commerce solution with seamless payment integration and inventory management.",
    solution: "Built a full-featured React-based e-commerce platform with Razorpay integration, real-time inventory tracking, and admin dashboard.",
    features: [
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment gateway integration",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "User authentication and profiles"
    ],
    results: [
      { label: "Products Listed", value: "10,000+", type: "scale" },
      { label: "Payment Methods", value: "5+", type: "tech" },
      { label: "Monthly Orders", value: "500+", type: "scale" }
    ]
  },
  {
    id: 2,
    name: "SA Infotechs",
    client: "SA Infotechs",
    category: "web",
    industry: "IT Services",
    year: "2025",
    image: saInfotechsImg,
    isRealProject: true,
    description: "Corporate website for IT services company showcasing their offerings and client portfolio.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    liveUrl: "https://sainfotechs.com/",
    challenge: "Required a professional corporate presence with service showcase and client engagement features.",
    solution: "Developed a modern, responsive corporate website with service pages, portfolio showcase, and contact system.",
    features: [
      "Service catalog with detailed pages",
      "Portfolio showcase",
      "Client testimonial section",
      "Blog integration",
      "Contact form with email notifications",
      "SEO optimized structure"
    ],
    results: [
      { label: "Page Load Speed", value: "1.8s", type: "performance" },
      { label: "Mobile Responsive", value: "100%", type: "tech" },
      { label: "SEO Score", value: "92+", type: "performance" }
    ]
  },
  {
    id: 3,
    name: "Transport Management System",
    client: "Logistics Company",
    category: "web",
    industry: "Logistics",
    year: "2025",
    image: transportImg,
    isRealProject: true,
    description: "Complete transport management system for fleet tracking, route optimization, and shipment management.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Google Maps API"],
    liveUrl: "https://transport-ashy.vercel.app/",
    challenge: "Manual fleet management causing delays and inefficiencies in route planning.",
    solution: "Built a comprehensive transport management system with real-time tracking and automated route optimization.",
    features: [
      "Real-time fleet tracking",
      "Route optimization algorithms",
      "Shipment status tracking",
      "Driver assignment system",
      "Fuel consumption monitoring",
      "Analytics and reporting dashboard"
    ],
    results: [
      { label: "Route Efficiency", value: "35% improvement", type: "improvement" },
      { label: "Fuel Savings", value: "20%", type: "improvement" },
      { label: "Vehicles Tracked", value: "100+", type: "scale" }
    ]
  },
  {
    id: 4,
    name: "Medical Clinic Platform",
    client: "Healthcare Provider",
    category: "web",
    industry: "Healthcare",
    year: "2025",
    image: medicalImg,
    isRealProject: true,
    description: "Complete medical clinic management system with appointment booking and patient records.",
    techStack: ["React", "Node.js", "MongoDB", "Twilio API"],
    liveUrl: "https://www.wix.com/website-template/view/html/wh-1055?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3DMedical%2BClinic&tpClick=view_button&esi=956494ef-fcb2-4c6e-90e0-cbd701c2f3e9",
    challenge: "Clinic needed digitization of patient records and appointment management.",
    solution: "Developed a comprehensive healthcare platform with appointment scheduling, patient records, and telemedicine features.",
    features: [
      "Online appointment booking",
      "Patient record management",
      "Prescription generation",
      "Billing and payment system",
      "SMS appointment reminders",
      "Doctor dashboard"
    ],
    results: [
      { label: "Appointment Processing", value: "75% faster", type: "improvement" },
      { label: "Patient Records", value: "10,000+", type: "scale" },
      { label: "No-show Rate", value: "Reduced 40%", type: "improvement" }
    ]
  },
  {
    id: 5,
    name: "Personal Finance App",
    client: "FinTech Startup",
    category: "mobile",
    industry: "FinTech",
    year: "2025",
    image: financeAppImg,
    isRealProject: true,
    description: "Personal finance management app with expense tracking, budgeting, and investment insights.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Plaid API"],
    liveUrl: "https://www.jotform.com/app-templates/personal-finance-management-app",
    challenge: "Users needed an intuitive way to track expenses and manage budgets across multiple accounts.",
    solution: "Built a cross-platform mobile app with bank integration, expense categorization, and financial insights.",
    features: [
      "Expense tracking and categorization",
      "Budget planning and alerts",
      "Bank account integration",
      "Investment portfolio tracking",
      "Financial goal setting",
      "Monthly reports and insights"
    ],
    results: [
      { label: "Active Users", value: "25,000+", type: "scale" },
      { label: "Transactions Tracked", value: "1M+", type: "scale" },
      { label: "App Store Rating", value: "4.8", type: "rating" }
    ]
  },
  {
    id: 6,
    name: "AI Analytics Dashboard",
    client: "SaaS Company",
    category: "ai",
    industry: "SaaS",
    year: "2025",
    image: aiDashboardImg,
    isRealProject: true,
    description: "AI-powered analytics dashboard with natural language queries and predictive insights.",
    techStack: ["React", "Python", "FastAPI", "OpenAI API", "D3.js"],
    liveUrl: "https://tailadmin.com/blog/best-analytics-dashboard",
    challenge: "Business needed actionable insights from complex data without technical expertise.",
    solution: "Created an AI-powered dashboard allowing natural language queries and automated insight generation.",
    features: [
      "Natural language query interface",
      "Automated insight generation",
      "Predictive analytics",
      "Interactive data visualizations",
      "Custom report builder",
      "Real-time data updates"
    ],
    results: [
      { label: "Query Response", value: "< 2 seconds", type: "performance" },
      { label: "Data Sources", value: "15+", type: "tech" },
      { label: "User Satisfaction", value: "94%", type: "rating" }
    ]
  },
  {
    id: 7,
    name: "CRM Dashboard",
    client: "Sales Organization",
    category: "web",
    industry: "CRM",
    year: "2025",
    image: crmImg,
    isRealProject: true,
    description: "Comprehensive CRM dashboard for lead management, sales tracking, and customer engagement.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
    liveUrl: "https://www.figma.com/design/A4RbFHnvGj2VTWn3jL6m0T/CRM-Dashboard--Community-?node-id=0-1&p=f&t=Nzkghov1aifiyZj5-0",
    challenge: "Sales team needed centralized platform for lead tracking and pipeline management.",
    solution: "Built a feature-rich CRM dashboard with lead scoring, pipeline visualization, and team collaboration tools.",
    features: [
      "Lead and contact management",
      "Sales pipeline visualization",
      "Task and activity tracking",
      "Email integration",
      "Reporting and analytics",
      "Team collaboration tools"
    ],
    results: [
      { label: "Sales Efficiency", value: "45% increase", type: "improvement" },
      { label: "Leads Managed", value: "50,000+", type: "scale" },
      { label: "Team Members", value: "200+", type: "scale" }
    ]
  },
  {
    id: 8,
    name: "BizCart Cabs",
    client: "BizCart",
    category: "web",
    industry: "Transportation",
    year: "2025",
    image: bizcartImg,
    isRealProject: true,
    description: "Complete cab booking and fleet management platform with real-time tracking.",
    techStack: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Google Maps API"],
    liveUrl: "https://bizcartcabs.com/index.html",
    challenge: "Cab service needed online booking system with real-time driver tracking.",
    solution: "Developed a complete cab booking platform with user app, driver app, and admin dashboard.",
    features: [
      "Real-time ride booking",
      "Driver tracking and assignment",
      "Fare calculation and payment",
      "Ride history and receipts",
      "Driver management system",
      "Admin analytics dashboard"
    ],
    results: [
      { label: "Booking Time", value: "< 30 seconds", type: "performance" },
      { label: "Active Drivers", value: "500+", type: "scale" },
      { label: "Daily Rides", value: "1,000+", type: "scale" }
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

  const openLivePreview = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        
        .portfolio-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .portfolio-item:hover {
          transform: translateY(-4px);
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-padding {
            padding: 100px 1rem 60px !important;
          }
          .section-padding {
            padding: 40px 1rem !important;
          }
          .filter-buttons {
            gap: 0.5rem !important;
          }
          .filter-button {
            padding: 0.4rem 1rem !important;
            font-size: 0.75rem !important;
          }
          .search-input {
            padding: 1rem 1.5rem !important;
            font-size: 0.875rem !important;
          }
          .modal-content {
            margin: 60px 1rem 40px 1rem !important;
            padding: 1.5rem !important;
          }
          .modal-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .modal-image {
            height: 200px !important;
          }
          .cta-padding {
            padding: 2rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .portfolio-item h3 {
            font-size: 1rem !important;
          }
          .portfolio-item p {
            font-size: 0.8rem !important;
          }
          .portfolio-item .tech-tag {
            font-size: 0.6rem !important;
          }
          .portfolio-item button {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.7rem !important;
          }
          .results-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-padding {
            padding: 110px 1.5rem 70px !important;
          }
          .section-padding {
            padding: 60px 1.5rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-padding {
            padding: 120px 2rem 80px !important;
          }
          .section-padding {
            padding: 80px 2rem !important;
          }
        }
        
        @media (min-width: 1025px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${C.bg};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${C.blue};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${C.blueHover};
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-padding" style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: `linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.92)), url(${portfolioHeroBg})`,
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
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2, padding: "0 1rem" }}>
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
                fontSize: "clamp(0.7rem, 3vw, 0.75rem)",
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
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
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
                fontSize: "clamp(0.9rem, 4vw, 1.1rem)",
                color: C.textLead,
                lineHeight: 1.6,
                maxWidth: 700,
                margin: "0 auto",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              We solve real business problems with technology. Here's how we've helped organizations scale, automate, and grow.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Search Bar */}
      <section className="section-padding" style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              className="search-input"
              placeholder="Search projects by name, client, industry, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 60,
                padding: "clamp(0.8rem, 3vw, 1.2rem) 5rem clamp(0.8rem, 3vw, 1.2rem) clamp(1rem, 4vw, 2rem)",
                color: C.textPrimary,
                fontSize: "clamp(0.875rem, 3vw, 1rem)",
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
              <span style={{ fontSize: "clamp(0.7rem, 3vw, 0.75rem)", color: C.textMuted }}>
                Found {filteredProjects.length} project(s) matching "{searchQuery}"
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Filter Bar */}
      <section className="section-padding" style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="filter-buttons" style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                className="filter-button"
                onClick={() => setActiveFilter(cat.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "clamp(0.4rem, 2vw, 0.6rem) clamp(1rem, 3vw, 1.2rem)",
                  borderRadius: 40,
                  background: activeFilter === cat.id ? C.blue : "transparent",
                  border: `1px solid ${activeFilter === cat.id ? C.blue : C.border}`,
                  color: activeFilter === cat.id ? "#fff" : C.textBody,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.75rem, 3vw, 0.875rem)",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
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
      <section className="section-padding" style={{ padding: "60px 2rem", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem" }}>
              <p style={{ color: C.textMuted }}>No projects found matching your search.</p>
            </div>
          ) : (
            <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="portfolio-item"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 16,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ height: "clamp(180px, 30vw, 220px)", overflow: "hidden", position: "relative" }}>
                    <img 
                      src={project.image} 
                      alt={project.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <div style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      background: "rgba(0,0,0,0.7)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 12,
                      fontSize: "clamp(0.6rem, 2vw, 0.65rem)",
                      color: C.cyan,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {project.year}
                    </div>
                  </div>
                  <div style={{ padding: "clamp(1rem, 4vw, 1.5rem)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.3rem" }}>
                      <span style={{ fontSize: "clamp(0.65rem, 2vw, 0.7rem)", color: C.blueHover, textTransform: "uppercase", letterSpacing: "0.05em" }}>{project.industry}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(0.9rem, 4vw, 1.1rem)", fontWeight: 600, marginBottom: "0.5rem", color: C.textPrimary }}>{project.name}</h3>
                    <p style={{ fontSize: "clamp(0.75rem, 3vw, 0.85rem)", color: C.textBody, marginBottom: "1rem", lineHeight: 1.5 }}>{project.description}</p>
                    
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="tech-tag" style={{
                          background: C.codeBg,
                          padding: "0.2rem 0.6rem",
                          borderRadius: 12,
                          fontSize: "clamp(0.55rem, 2vw, 0.65rem)",
                          color: C.cyan,
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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
                          padding: "clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1.2rem)",
                          borderRadius: 8,
                          color: "#fff",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
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
                          openLivePreview(project.liveUrl);
                        }}
                        style={{
                          background: "transparent",
                          border: `1px solid ${C.border}`,
                          padding: "clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1.2rem)",
                          borderRadius: 8,
                          color: C.textPrimary,
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
                          cursor: "pointer"
                        }}
                      >
                        Live Preview →
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
      <section className="section-padding" style={{ padding: "60px 2rem 100px", position: "relative", zIndex: 2, background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-padding"
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "clamp(1.5rem, 5vw, 3rem)"
            }}
          >
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.3rem, 5vw, 2rem)", fontWeight: 700, marginBottom: "1rem", color: C.textPrimary }}>
              Ready to Build Your <span style={{ color: C.blue }}>Success Story?</span>
            </h2>
            <p style={{ fontSize: "clamp(0.875rem, 3vw, 1rem)", color: C.textBody, marginBottom: "2rem", lineHeight: 1.6 }}>
              Let's discuss your project and see how we can help you achieve similar results.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02, background: C.blueHover }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: C.blue,
                  border: "none",
                  padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 5vw, 2.5rem)",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.8rem, 3vw, 0.9rem)",
                  cursor: "pointer"
                }}
              >
                Start Your Project →
              </motion.button>
            </Link>
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
          background: "rgba(10, 15, 30, 0.95)",
          backdropFilter: "blur(8px)",
          zIndex: 2000,
          overflowY: "auto",
          padding: "clamp(1rem, 5vw, 2rem)"
        }} onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="modal-content"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "clamp(1.5rem, 5vw, 2rem)",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: C.surface,
                border: `1px solid ${C.border}`,
                width: "clamp(32px, 5vw, 40px)",
                height: "clamp(32px, 5vw, 40px)",
                borderRadius: "50%",
                fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                cursor: "pointer",
                color: C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = C.blue;
                e.target.style.color = C.blue;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = C.border;
                e.target.style.color = C.textMuted;
              }}
            >
              ×
            </button>

            <div style={{ marginBottom: "2rem" }}>
              <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.3rem, 5vw, 1.8rem)", fontWeight: 700, marginTop: "0.5rem", color: C.textPrimary }}>{selectedProject.name}</h1>
                  <p style={{ color: C.textBody, marginTop: "0.5rem", lineHeight: 1.6, fontSize: "clamp(0.85rem, 3vw, 1rem)" }}>{selectedProject.description}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)", color: C.textMuted }}>Client</div>
                  <div style={{ fontSize: "clamp(0.85rem, 3vw, 1rem)", fontWeight: 600, color: C.textPrimary }}>{selectedProject.client}</div>
                  <div style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)", color: C.blue }}>{selectedProject.year}</div>
                </div>
              </div>
            </div>

            <div className="modal-image" style={{
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: "2rem",
              border: `1px solid ${C.border}`,
              height: "clamp(200px, 40vw, 300px)"
            }}>
              <img src={selectedProject.image} alt={selectedProject.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div className="results-grid" style={{
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
                <span style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.7rem)", color: C.textMuted }}>Industry</span>
                <div style={{ color: C.textPrimary, fontWeight: 500, fontSize: "clamp(0.85rem, 3vw, 1rem)" }}>{selectedProject.industry}</div>
              </div>
              <div>
                <span style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.7rem)", color: C.textMuted }}>Technology Stack</span>
                <div style={{ color: C.textPrimary, fontWeight: 500, fontSize: "clamp(0.85rem, 3vw, 1rem)" }}>{selectedProject.techStack.join(", ")}</div>
              </div>
            </div>

            {selectedProject.challenge && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1rem, 4vw, 1.2rem)", color: C.blue, marginBottom: "1rem" }}>The Challenge</h2>
                <p style={{ fontSize: "clamp(0.85rem, 3vw, 1rem)", color: C.textBody, lineHeight: 1.6 }}>{selectedProject.challenge}</p>
              </div>
            )}

            {selectedProject.solution && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1rem, 4vw, 1.2rem)", color: C.blue, marginBottom: "1rem" }}>Our Solution</h2>
                <p style={{ fontSize: "clamp(0.85rem, 3vw, 1rem)", color: C.textBody, lineHeight: 1.6 }}>{selectedProject.solution}</p>
              </div>
            )}

            {selectedProject.features && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1rem, 4vw, 1.2rem)", color: C.blue, marginBottom: "1rem" }}>Key Features</h2>
                <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "0.8rem" }}>
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem", background: C.surface, borderRadius: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" fill={C.blue} fillOpacity="0.2" stroke={C.blue} strokeWidth="1" />
                        <path d="M6 8l2 2 3-4" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span style={{ fontSize: "clamp(0.8rem, 3vw, 0.85rem)", color: C.textBody }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.results && (
              <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1rem, 4vw, 1.2rem)", color: C.blue, marginBottom: "1rem" }}>Results</h2>
                <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  {selectedProject.results.map((result, i) => (
                    <div key={i} style={{ background: C.surface, borderRadius: 12, padding: "1rem", textAlign: "center", border: `1px solid ${C.border}` }}>
                      <div style={{ fontSize: "clamp(0.85rem, 3vw, 1rem)", fontWeight: 700, color: C.blue }}>{result.value}</div>
                      <div style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.7rem)", color: C.textMuted }}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: C.blue,
                    border: "none",
                    padding: "clamp(0.6rem, 2vw, 0.8rem) clamp(1.2rem, 4vw, 2rem)",
                    borderRadius: 8,
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(0.75rem, 3vw, 0.85rem)",
                    cursor: "pointer"
                  }}
                >
                  Start Your Project →
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openLivePreview(selectedProject.liveUrl)}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  padding: "clamp(0.6rem, 2vw, 0.8rem) clamp(1.2rem, 4vw, 2rem)",
                  borderRadius: 8,
                  color: C.textPrimary,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.75rem, 3vw, 0.85rem)",
                  cursor: "pointer"
                }}
              >
                Live Preview →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  padding: "clamp(0.6rem, 2vw, 0.8rem) clamp(1.2rem, 4vw, 2rem)",
                  borderRadius: 8,
                  color: C.textMuted,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(0.75rem, 3vw, 0.85rem)",
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