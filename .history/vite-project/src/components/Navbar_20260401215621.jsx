// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Adrixcore-removebg-preview.png";

const C = {
  blue: "#2563EB",
  blueHover: "#3B82F6",
  blueDark: "#1D4ED8",
  cyan: "#06B6D4",
  surface: "#111827",
  border: "#1F2A3D",
  textPrimary: "#F0F4FF",
  textMuted: "#94A3B8",
  bg: "#0A0F1E",
};

const serviceItems = [
  { name: "Web App Development", path: "/web-app-development", icon: "🌐", description: "React, Spring Boot" },
  { name: "Mobile App Development", path: "/mobile-app-development", icon: "📱", description: "React Native, Flutter" },
  { name: "UI/UX Design", path: "/ui-ux-design", icon: "🎨", description: "Figma, Adobe XD" },
  { name: "AI Integration", path: "/ai-integration", icon: "🧠", description: "OpenAI, Claude API" },
  { name: "Landing Pages", path: "/landing-pages", icon: "🚀", description: "High-Converting" },
  { name: "Maintenance Plans", path: "/maintenance-plans", icon: "⚙️", description: "24/7 Support" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.03));
    return unsub;
  }, [scrollYProgress]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      setHoveredItem(null);
    }, 150);
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
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
    <>
      <style>{`
        .nav-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-link:hover, .nav-link.active {
          color: #F0F4FF;
        }
        .nav-link.active {
          color: #3B82F6;
        }
        .dropdown-item:hover .service-name {
          color: #3B82F6;
        }
        .get-started-btn {
          background: #2563EB;
          border: none;
          padding: 0.55rem 1.4rem;
          border-radius: 8px;
          color: #F0F4FF;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .get-started-btn:hover {
          background: #3B82F6;
        }
      `}</style>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0.85rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "none",
          transition: "all 0.35s",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logo}
            alt="Adrix Core"
            style={{ width: 180, height: 80, objectFit: "contain" }}
          />
        </Link>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
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
                    className={`nav-link${isActive(link.path) ? " active" : ""}`}
                    style={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    {link.name}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.5, marginTop: 1 }}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 10px)",
                          left: "0",
                          width: "260px",
                          background: C.surface,
                          borderRadius: "10px",
                          border: `1px solid ${C.border}`,
                          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                          overflow: "hidden",
                          zIndex: 1001,
                        }}
                      >
                        {serviceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="dropdown-item"
                            onClick={() => setIsServicesOpen(false)}
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "0.7rem 1rem",
                              textDecoration: "none",
                              transition: "background 0.2s",
                              background: hoveredItem === item.name ? "#1E293B" : "transparent",
                              cursor: "pointer",
                            }}
                          >
                            <span style={{ fontSize: "1.2rem", width: "28px", textAlign: "center" }}>
                              {item.icon}
                            </span>
                            <div>
                              <div
                                className="service-name"
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "0.825rem",
                                  fontWeight: 600,
                                  color: hoveredItem === item.name ? C.blueHover : C.textPrimary,
                                  marginBottom: "2px",
                                  transition: "color 0.2s",
                                }}
                              >
                                {item.name}
                              </div>
                              <div style={{ fontSize: "0.72rem", color: C.textMuted, lineHeight: "1.3" }}>
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}

                        <div style={{
                          height: "1px",
                          background: C.border,
                          margin: "0 0.75rem",
                        }} />

                        <div style={{ padding: "0.6rem 1rem" }}>
                          <Link
                            to="/services"
                            onClick={() => setIsServicesOpen(false)}
                            style={{
                              fontSize: "0.775rem",
                              color: C.blueHover,
                              textDecoration: "none",
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 500,
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              transition: "gap 0.2s",
                            }}
                          >
                            View All Services
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
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
                className={`nav-link${isActive(link.path) ? " active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button — Sticky, Always Visible */}
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>

        {/* Scroll Progress Bar */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${C.blue}, ${C.cyan})`,
            transformOrigin: "0%",
            scaleX: scrollYProgress,
          }}
        />
      </motion.nav>
    </>
  );
}

export default Navbar;
