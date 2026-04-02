// src/pages/Services.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import servicesHeroBg from "../assets/images/services-hero-bg.jpeg"

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

// Import images (you can replace these with your actual images)
import webDevImg from "../assets/images/E-commerce.png";
import mobileAppImg from "../assets/images/mobile.png";
import uiuxImg from "../assets/images/mobile2.png";
import aiImg from "../assets/images/team.jpeg";
import landingImg from "../assets/images/coding.jpeg";
import maintenanceImg from "../assets/images/vision.jpeg";

// Services Data with consistent icons
const SERVICES_DATA = [
  {
    id: 1,
    name: "Web App Development",
    category: "web",
    icon: "🌐",
    accentColor: COLORS.primaryAccent,
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
    techStack: [
      { name: "React", logo: "⚛️" },
      { name: "TypeScript", logo: "📘" },
      { name: "Spring Boot", logo: "🌱" },
      { name: "PostgreSQL", logo: "🐘" },
      { name: "Tailwind CSS", logo: "🌊" },
      { name: "Docker", logo: "🐳" }
    ],
    timeline: "30–60 days",
    startingPrice: "₹60,000",
    ctaText: "Get a Web App Quote",
    link: "/services/web-app-development"
  },
  {
    id: 2,
    name: "Mobile App Development",
    category: "mobile",
    icon: "📱",
    accentColor: COLORS.secondaryAccent,
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
    techStack: [
      { name: "React Native", logo: "⚛️" },
      { name: "Expo", logo: "📱" },
      { name: "TypeScript", logo: "📘" },
      { name: "Redux", logo: "🔄" },
      { name: "Firebase", logo: "🔥" },
      { name: "Node.js", logo: "🟢" }
    ],
    timeline: "45–90 days",
    startingPrice: "₹90,000",
    ctaText: "Plan Your Mobile App",
    link: "/services/mobile-app-development"
  },
  {
    id: 3,
    name: "UI/UX Design",
    category: "design",
    icon: "🎨",
    accentColor: COLORS.primaryAccent,
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
    techStack: [
      { name: "Figma", logo: "🎨" },
      { name: "Adobe XD", logo: "✨" },
      { name: "Miro", logo: "📋" },
      { name: "Hotjar", logo: "🔥" },
      { name: "UsabilityHub", logo: "🔍" }
    ],
    timeline: "14–30 days",
    startingPrice: "₹35,000",
    ctaText: "Book a Design Review",
    link: "/services/ui-ux-design"
  },
  {
    id: 4,
    name: "AI Integration",
    category: "ai",
    icon: "🧠",
    accentColor: COLORS.secondaryAccent,
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
    techStack: [
      { name: "Claude API", logo: "🧠" },
      { name: "OpenAI", logo: "🤖" },
      { name: "LangChain", logo: "⛓️" },
      { name: "Python", logo: "🐍" },
      { name: "FastAPI", logo: "⚡" },
      { name: "Supabase", logo: "🔥" }
    ],
    timeline: "30–60 days",
    startingPrice: "₹75,000",
    ctaText: "Explore AI Integration",
    link: "/services/ai-integration"
  },
  {
    id: 5,
    name: "Landing Pages",
    category: "web",
    icon: "🚀",
    accentColor: COLORS.primaryAccent,
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
    techStack: [
      { name: "Next.js", logo: "▲" },
      { name: "Tailwind CSS", logo: "🌊" },
      { name: "Framer Motion", logo: "🎬" },
      { name: "TypeScript", logo: "📘" }
    ],
    timeline: "7–14 days",
    startingPrice: "₹25,000",
    ctaText: "Launch Your Page",
    link: "/services/landing-pages"
  },
  {
    id: 6,
    name: "Maintenance Plans",
    category: "maintenance",
    icon: "🛡️",
    accentColor: COLORS.success,
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
    techStack: [
      { name: "Sentry", logo: "🐛" },
      { name: "Datadog", logo: "🐕" },
      { name: "AWS", logo: "☁️" },
      { name: "Cloudflare", logo: "🌩️" },
      { name: "GitHub Actions", logo: "⚡" }
    ],
    timeline: "Ongoing",
    startingPrice: "₹15,000/month",
    ctaText: "Start a Maintenance Plan",
    link: "/services/maintenance"
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          transform: translateY(-4px);
        }
        .process-step {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .process-step:hover {
          transform: translateY(-4px);
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${COLORS.primaryBg};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${COLORS.primaryAccent};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.accentHover};
        }
      `}</style>

      {/* Hero Section */}
  
<section ref={heroRef} style={{ 
  minHeight: "60vh", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center",
  position: "relative",
  padding: "120px 2rem 80px",
  background: `linear-gradient(rgba(10, 15, 30, 0.82), rgba(10, 15, 30, 0.88)), url(${servicesHeroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  overflow: "hidden"
}}>
  {/* Optional: Add a subtle overlay gradient for depth */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)",
    }}
  />
  
  <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
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
          textTransform: "uppercase",
          display: "inline-block",
          background: "rgba(30, 58, 95, 0.8)",
          backdropFilter: "blur(8px)",
          padding: "0.3rem 1rem",
          borderRadius: "20px"
        }}
      >
        What We Build
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
        Expert Digital <span style={{ color: COLORS.primaryAccent }}>Solutions</span>
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
        From web apps to AI integration — we build products that solve real business problems.
        Choose your service and let's create something exceptional together.
      </motion.p>
    </div>
  </motion.div>
</section>

{/* Filter Bar */}
<section style={{ padding: "2rem 2rem 0", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            padding: "0.6rem 1.5rem",
            borderRadius: 40,
            background: activeFilter === filter.id ? COLORS.primaryAccent : "transparent",
            border: `1px solid ${activeFilter === filter.id ? COLORS.primaryAccent : COLORS.borderDefault}`,
            color: activeFilter === filter.id ? COLORS.primaryText : COLORS.bodyText,
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  </div>
</section>

      {/* Services Grid */}
      <section ref={sectionRef} style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
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
                whileHover={{ y: -4 }}
                onClick={() => setSelectedService(service)}
                style={{
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.borderDefault}`,
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
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onError={(e) => { e.target.src = "https://placehold.co/600x400/111827/3B82F6?text=" + service.name; }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${service.accentColor}20, transparent)`
                  }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2rem" }}>{service.icon}</span>
                    <h3 style={{ 
                      fontFamily: "'Sora', sans-serif", 
                      fontSize: "1.2rem", 
                      fontWeight: 600, 
                      color: service.accentColor 
                    }}>{service.name}</h3>
                  </div>
                  <p style={{ 
                    fontSize: "0.875rem", 
                    color: COLORS.bodyText, 
                    lineHeight: 1.5, 
                    marginBottom: "1rem",
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                    {service.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} style={{
                        background: `rgba(37, 99, 235, 0.1)`,
                        padding: "0.2rem 0.6rem",
                        borderRadius: 12,
                        fontSize: "0.7rem",
                        color: COLORS.secondaryAccent,
                        fontFamily: "'Inter', sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}>
                        <span>{tech.logo}</span> {tech.name}
                      </span>
                    ))}
                    {service.techStack.length > 3 && (
                      <span style={{
                        background: `rgba(37, 99, 235, 0.1)`,
                        padding: "0.2rem 0.6rem",
                        borderRadius: 12,
                        fontSize: "0.7rem",
                        color: COLORS.mutedText
                      }}>
                        +{service.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                    <div>
                      <span style={{ fontSize: "0.7rem", color: COLORS.mutedText }}>Starting from</span>
                      <div style={{ 
                        fontFamily: "'Sora', sans-serif", 
                        fontSize: "1.1rem", 
                        fontWeight: 600, 
                        color: service.accentColor 
                      }}>{service.startingPrice}</div>
                    </div>
                    <span style={{ color: COLORS.primaryAccent, fontSize: "0.8rem", fontWeight: 500 }}>Learn more →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section" style={{ padding: "80px 2rem", background: COLORS.cardBg, position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.7rem", 
              letterSpacing: "0.2em", 
              color: COLORS.primaryAccent, 
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              Our Process
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)", 
              fontWeight: 700, 
              marginBottom: "3rem", 
              color: COLORS.primaryText 
            }}>
              How We <span style={{ color: COLORS.primaryAccent }}>Build</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { step: "01", title: "Discovery & Scoping", desc: "30-min call → requirements document → fixed-price proposal within 24hrs", icon: "🔍", color: COLORS.primaryAccent },
              { step: "02", title: "Design & Prototype", desc: "Figma wireframes → high-fidelity mockups → client sign-off before development", icon: "🎨", color: COLORS.secondaryAccent },
              { step: "03", title: "Development & Testing", desc: "Sprint-based build → weekly updates → testing in staging environment", icon: "⚙️", color: COLORS.primaryAccent },
              { step: "04", title: "Launch & Support", desc: "Production deployment → handover documentation → maintenance plan onboarding", icon: "🚀", color: COLORS.success }
            ].map((step, i) => (
              <motion.div
                key={step.step}
                className="process-step"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4 }}
                style={{
                  background: COLORS.primaryBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 20,
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{step.icon}</div>
                <div style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "2rem", 
                  fontWeight: 700, 
                  color: step.color, 
                  marginBottom: "0.5rem" 
                }}>{step.step}</div>
                <h3 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.1rem", 
                  fontWeight: 600, 
                  marginBottom: "0.5rem", 
                  color: COLORS.primaryText 
                }}>{step.title}</h3>
                <p style={{ 
                  fontSize: "0.85rem", 
                  color: COLORS.bodyText, 
                  lineHeight: 1.5,
                  fontFamily: "'Inter', sans-serif"
                }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase - With logos */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.7rem", 
              letterSpacing: "0.2em", 
              color: COLORS.primaryAccent, 
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              Technologies We Master
            </div>
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)", 
              fontWeight: 700, 
              marginBottom: "3rem", 
              color: COLORS.primaryText 
            }}>
              Modern <span style={{ color: COLORS.primaryAccent }}>Tech Stack</span>
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {[
              { name: "Java", logo: "☕" },
              { name: "Spring Boot", logo: "🌱" },
              { name: "Node.js", logo: "🟢" },
              { name: "Express.js", logo: "🚂" },
              { name: "React", logo: "⚛️" },
              { name: "Next.js", logo: "▲" },
              { name: "TypeScript", logo: "📘" },
              { name: "Tailwind CSS", logo: "🌊" },
              { name: "PostgreSQL", logo: "🐘" },
              { name: "MongoDB", logo: "🍃" },
              { name: "Firebase", logo: "🔥" },
              { name: "Docker", logo: "🐳" },
              { name: "AWS", logo: "☁️" },
              { name: "Figma", logo: "🎨" },
              { name: "Framer Motion", logo: "🎬" },
              { name: "GSAP", logo: "✨" },
              { name: "OpenAI", logo: "🤖" },
              { name: "Python", logo: "🐍" }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.borderDefault}`,
                  borderRadius: 40,
                  padding: "0.6rem 1.2rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  color: COLORS.primaryText,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  transition: "all 0.2s ease"
                }}
              >
                <span style={{ fontSize: "1rem" }}>{tech.logo}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2, background: COLORS.cardBg }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: COLORS.primaryBg,
              border: `1px solid ${COLORS.borderDefault}`,
              borderRadius: 30,
              padding: "3rem"
            }}
          >
            <h2 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontSize: "clamp(1.5rem, 3vw, 2rem)", 
              fontWeight: 700, 
              marginBottom: "1rem", 
              color: COLORS.primaryText 
            }}>
              Ready to Build <span style={{ color: COLORS.primaryAccent }}>Something Great</span>?
            </h2>
            <p style={{ 
              fontSize: "1rem", 
              color: COLORS.bodyText, 
              marginBottom: "2rem", 
              lineHeight: 1.6,
              fontFamily: "'Inter', sans-serif"
            }}>
              Tell us about your project — we respond within 4 hours.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                style={{
                  background: COLORS.primaryAccent,
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
              >
                Start a Project →
              </motion.button>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "transparent",
                    border: `1px solid ${COLORS.borderDefault}`,
                    padding: "1rem 2rem",
                    borderRadius: 50,
                    color: COLORS.primaryText,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    cursor: "pointer"
                  }}
                >
                  Browse Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(10, 15, 30, 0.95)",
          backdropFilter: "blur(8px)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          cursor: "pointer"
        }} onClick={() => setSelectedService(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              maxWidth: 800,
              maxHeight: "90vh",
              overflowY: "auto",
              background: COLORS.primaryBg,
              border: `1px solid ${selectedService.accentColor}`,
              borderRadius: 24,
              padding: "2rem",
              cursor: "default"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "3rem" }}>{selectedService.icon}</span>
                <h2 style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.8rem", 
                  fontWeight: 700, 
                  color: selectedService.accentColor 
                }}>{selectedService.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedService(null)} 
                style={{ 
                  background: "none", 
                  border: "none", 
                  fontSize: "2rem", 
                  cursor: "pointer", 
                  color: COLORS.mutedText,
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = COLORS.primaryAccent}
                onMouseLeave={(e) => e.target.style.color = COLORS.mutedText}
              >
                ×
              </button>
            </div>
            <p style={{ 
              fontSize: "1rem", 
              color: COLORS.bodyText, 
              marginBottom: "1.5rem", 
              lineHeight: 1.6,
              fontFamily: "'Inter', sans-serif"
            }}>{selectedService.longDescription}</p>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "1rem", 
                color: COLORS.primaryAccent, 
                marginBottom: "1rem" 
              }}>What's Included</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                {selectedService.included.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 4L6 11L3 8" stroke={COLORS.success} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontSize: "0.85rem", color: COLORS.bodyText, fontFamily: "'Inter', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "1rem", 
                color: COLORS.primaryAccent, 
                marginBottom: "1rem" 
              }}>Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {selectedService.techStack.map((tech, i) => (
                  <span key={i} style={{ 
                    background: `rgba(37, 99, 235, 0.1)`, 
                    padding: "0.3rem 0.8rem", 
                    borderRadius: 20, 
                    fontSize: "0.8rem", 
                    color: COLORS.secondaryAccent,
                    fontFamily: "'Inter', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}>
                    <span>{tech.logo}</span> {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              padding: "1rem 0", 
              borderTop: `1px solid ${COLORS.borderDefault}`, 
              borderBottom: `1px solid ${COLORS.borderDefault}`, 
              marginBottom: "1.5rem" 
            }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: COLORS.mutedText }}>Typical Timeline</div>
                <div style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.1rem", 
                  fontWeight: 600, 
                  color: selectedService.accentColor 
                }}>{selectedService.timeline}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: COLORS.mutedText }}>Starting From</div>
                <div style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.1rem", 
                  fontWeight: 600, 
                  color: selectedService.accentColor 
                }}>{selectedService.startingPrice}</div>
              </div>
            </div>

            <Link to={selectedService.link}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  background: selectedService.accentColor,
                  border: "none",
                  padding: "1rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer"
                }}
              >
                {selectedService.ctaText} →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Services;