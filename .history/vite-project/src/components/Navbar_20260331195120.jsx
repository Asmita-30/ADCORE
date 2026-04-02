// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Adrixcore-removebg-preview.png";

const C = {
  cyan: "#00e5ff",
  purple: "#6d5cff",
  darkBg: "rgba(2,4,8,0.88)",
};

// Service items for dropdown
const serviceItems = [
  { name: "Web App Development", path: "/services#web", icon: "🌐", description: "React, Spring Boot, Scalable Apps" },
  { name: "Mobile App Development", path: "/services#mobile", icon: "📱", description: "React Native, iOS & Android" },
  { name: "UI/UX Design", path: "/services#design", icon: "🎨", description: "Figma, User-Centered Design" },
  { name: "AI Integration", path: "/services#ai", icon: "🧠", description: "Claude API, LLMs, Automation" },
  { name: "Landing Pages", path: "/services#landing", icon: "🚀", description: "High-Converting, Fast, SEO" },
  { name: "Maintenance Plans", path: "/services#maintenance", icon: "⚙️", description: "24/7 Support, Updates" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.03));
    return unsub;
  }, [scrollYProgress]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleServiceClick = (e, path) => {
    e.preventDefault();
    setIsServicesOpen(false);
    // If on home page and trying to go to services section with hash
    if (location.pathname === "/" && path.includes("#")) {
      const sectionId = path.split("#")[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element not found, navigate to services page
        window.location.href = path;
      }
    } else {
      window.location.href = path;
    }
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/services") return location.pathname === "/services";
    return location.pathname === path;
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? C.darkBg : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,229,255,0.08)" : "none",
        transition: "all 0.4s",
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "'Orbitron',monospace",
          fontWeight: 900,
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
      </Link>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {links.map((link) => {
          if (link.hasDropdown) {
            return (
              <div
                key={link.name}
                ref={dropdownRef}
                style={{ position: "relative" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  style={{
                    color: isActive(link.path) ? C.cyan : "rgba(224,247,255,0.75)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                  onMouseLeave={(e) =>
                    (e.target.style.color = isActive(link.path)
                      ? C.cyan
                      : "rgba(224,247,255,0.75)")
                  }
                >
                  {link.name}
                </Link>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 12px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: "280px",
                        background: "rgba(2,8,18,0.95)",
                        backdropFilter: "blur(16px)",
                        borderRadius: "16px",
                        border: "1px solid rgba(0,229,255,0.2)",
                        boxShadow: "0 20px 35px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.1)",
                        overflow: "hidden",
                        zIndex: 1001,
                      }}
                    >
                      <div style={{ padding: "0.75rem 0" }}>
                        {serviceItems.map((item, idx) => (
                          <motion.a
                            key={item.name}
                            href={item.path}
                            onClick={(e) => handleServiceClick(e, item.path)}
                            whileHover={{ x: 4, backgroundColor: "rgba(0,229,255,0.08)" }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "0.75rem 1.25rem",
                              textDecoration: "none",
                              transition: "all 0.2s",
                              borderLeft: `3px solid transparent`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderLeftColor = C.cyan;
                              e.currentTarget.querySelector(".service-icon").style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderLeftColor = "transparent";
                              e.currentTarget.querySelector(".service-icon").style.transform = "scale(1)";
                            }}
                          >
                            <span
                              className="service-icon"
                              style={{
                                fontSize: "1.5rem",
                                transition: "transform 0.2s ease",
                                width: "32px",
                                textAlign: "center",
                              }}
                            >
                              {item.icon}
                            </span>
                            <div>
                              <div
                                style={{
                                  fontFamily: "'Orbitron',monospace",
                                  fontSize: "0.85rem",
                                  fontWeight: 600,
                                  color: "#fff",
                                  letterSpacing: "0.02em",
                                }}
                              >
                                {item.name}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.7rem",
                                  color: "rgba(224,247,255,0.55)",
                                  marginTop: "2px",
                                }}
                              >
                                {item.description}
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                      <div
                        style={{
                          borderTop: "1px solid rgba(0,229,255,0.1)",
                          padding: "0.75rem 1.25rem",
                          background: "rgba(0,0,0,0.3)",
                        }}
                      >
                        <Link
                          to="/services"
                          onClick={() => setIsServicesOpen(false)}
                          style={{
                            fontSize: "0.75rem",
                            color: C.cyan,
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "'Orbitron',monospace",
                            letterSpacing: "0.5px",
                          }}
                        >
                          View All Services
                          <span>→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                if (link.name === "Contact" && location.pathname === "/") {
                  scrollToSection("contact");
                }
              }}
              style={{
                color: isActive(link.path) ? C.cyan : "rgba(224,247,255,0.75)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.cyan)}
              onMouseLeave={(e) =>
                (e.target.style.color = isActive(link.path) ? C.cyan : "rgba(224,247,255,0.75)")
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,229,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: `linear-gradient(135deg,${C.cyan},${C.purple})`,
            border: "none",
            padding: "0.6rem 1.6rem",
            borderRadius: 50,
            color: "#fff",
            fontFamily: "'Orbitron',monospace",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}
        >
          Get Started
        </motion.button>
      </Link>

      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg,${C.cyan},${C.purple})`,
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      />
    </motion.nav>
  );
}

export default Navbar;