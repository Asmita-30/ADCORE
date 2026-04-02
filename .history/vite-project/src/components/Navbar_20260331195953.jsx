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
  { name: "Web App Development", path: "/services#web", icon: "🌐", description: "React, Spring Boot" },
  { name: "Mobile App Development", path: "/services#mobile", icon: "📱", description: "React Native" },
  { name: "UI/UX Design", path: "/services#design", icon: "🎨", description: "Figma" },
  { name: "AI Integration", path: "/services#ai", icon: "🧠", description: "Claude API, LLMs" },
  { name: "Landing Pages", path: "/services#landing", icon: "🚀", description: "High-Converting" },
  { name: "Maintenance Plans", path: "/services#maintenance", icon: "⚙️", description: "24/7 Support" },
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
                style={{ position: "relative", display: "inline-block" }}
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
                    display: "inline-block",
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
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "0",
                        width: "200px",
                        background: "rgba(5, 10, 20, 0.98)",
                        backdropFilter: "blur(20px)",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 229, 255, 0.15)",
                        boxShadow: "0 15px 30px -10px rgba(0,0,0,0.5)",
                        overflow: "hidden",
                        zIndex: 1001,
                      }}
                    >
                      {serviceItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.path}
                          onClick={(e) => handleServiceClick(e, item.path)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          whileHover={{
                            x: 8,
                            background: "linear-gradient(90deg, rgba(0, 229, 255, 0.12), rgba(0, 229, 255, 0.02))",
                            borderLeftColor: C.cyan,
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "0.7rem 1rem",
                            textDecoration: "none",
                            transition: "all 0.25s ease",
                            borderLeft: `3px solid transparent`,
                            cursor: "pointer",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.2rem",
                              width: "28px",
                              textAlign: "center",
                              transition: "transform 0.2s ease",
                            }}
                            className="service-icon"
                          >
                            {item.icon}
                          </span>
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontFamily: "'Orbitron',monospace",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                color: "#fff",
                                letterSpacing: "0.3px",
                                marginBottom: "2px",
                              }}
                            >
                              {item.name}
                            </div>
                            <div
                              style={{
                                fontSize: "0.6rem",
                                color: "rgba(224, 247, 255, 0.55)",
                                lineHeight: "1.3",
                              }}
                            >
                              {item.description}
                            </div>
                          </div>
                          <span
                            style={{
                              color: C.cyan,
                              fontSize: "0.7rem",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                            }}
                            className="arrow-icon"
                          >
                            →
                          </span>
                        </motion.a>
                      ))}
                      <div
                        style={{
                          borderTop: "1px solid rgba(0, 229, 255, 0.1)",
                          padding: "0.6rem 1rem",
                          background: "rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <Link
                          to="/services"
                          onClick={() => setIsServicesOpen(false)}
                          style={{
                            fontSize: "0.7rem",
                            color: C.cyan,
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontFamily: "'Orbitron',monospace",
                            letterSpacing: "0.5px",
                            transition: "gap 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.gap = "8px";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.gap = "4px";
                          }}
                        >
                          <span>View All Services</span>
                          <span style={{ fontSize: "0.8rem" }}>→</span>
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