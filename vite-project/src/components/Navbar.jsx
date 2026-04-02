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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
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

  // Responsive styles
  const responsiveStyles = `
    @media (max-width: 1024px) {
      .navbar-padding {
        padding: 0.85rem 1.5rem !important;
      }
      .logo-img {
        width: 150px !important;
      }
      .nav-links {
        gap: 1.25rem !important;
      }
      .get-started-btn {
        padding: 0.5rem 1rem !important;
        font-size: 0.8rem !important;
      }
      .whatsapp-nav-btn {
        padding: 0.4rem 0.8rem !important;
        font-size: 0.8rem !important;
      }
    }
    
    @media (max-width: 900px) {
      .desktop-nav {
        display: none !important;
      }
      .mobile-menu-btn {
        display: flex !important;
      }
      .mobile-actions {
        display: flex !important;
        gap: 0.8rem !important;
        align-items: center !important;
      }
      .desktop-actions {
        display: none !important;
      }
      .navbar-padding {
        padding: 0.7rem 1rem !important;
      }
      .logo-img {
        width: 130px !important;
      }
    }
    
    @media (min-width: 901px) {
      .mobile-menu-btn {
        display: none !important;
      }
      .mobile-actions {
        display: none !important;
      }
      .desktop-nav {
        display: flex !important;
      }
      .desktop-actions {
        display: flex !important;
      }
    }
    
    @media (max-width: 480px) {
      .navbar-padding {
        padding: 0.6rem 0.8rem !important;
      }
      .logo-img {
        width: 110px !important;
      }
      .get-started-btn {
        padding: 0.4rem 0.8rem !important;
        font-size: 0.75rem !important;
      }
      .whatsapp-nav-btn {
        padding: 0.35rem 0.7rem !important;
        font-size: 0.75rem !important;
        gap: 0.3rem !important;
      }
      .mobile-menu-btn span {
        width: 20px !important;
        height: 2px !important;
      }
    }
    
    /* Mobile Menu Styles */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 320px;
      height: 100vh;
      background: #111827;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 5rem 1.5rem 2rem;
      gap: 1rem;
      transition: right 0.3s ease;
      z-index: 1001;
      box-shadow: -5px 0 25px rgba(0,0,0,0.3);
      border-left: 1px solid #1F2A3D;
      overflow-y: auto;
    }
    
    .mobile-menu.open {
      right: 0;
    }
    
    .mobile-menu .mobile-nav-link {
      width: 100%;
      color: #94A3B8;
      text-decoration: none;
      font-size: 1rem;
      font-family: 'Inter', sans-serif;
      transition: color 0.2s;
      padding: 0.5rem 0;
      display: block;
    }
    
    .mobile-menu .mobile-nav-link:hover,
    .mobile-menu .mobile-nav-link:active {
      color: #F0F4FF;
    }
    
    .mobile-menu .active {
      color: #3B82F6 !important;
    }
    
    .mobile-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .mobile-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    
    .mobile-dropdown-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer;
      padding: 0.5rem 0;
    }
    
    .mobile-dropdown-header .nav-link {
      flex: 1;
    }
    
    .mobile-dropdown-content {
      margin-top: 0.5rem;
      margin-left: 1rem;
      padding-left: 0.75rem;
      border-left: 2px solid #2563EB;
      display: block !important;
      width: 100%;
    }
    
    .mobile-dropdown-content a {
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      padding: 0.6rem 0 !important;
      text-decoration: none !important;
      width: 100% !important;
      color: #94A3B8 !important;
      transition: color 0.2s !important;
    }
    
    .mobile-dropdown-content a:hover {
      color: #F0F4FF !important;
    }
    
    .mobile-dropdown-content a div:first-child {
      font-size: 0.875rem !important;
      font-weight: 500 !important;
      margin-bottom: 0.2rem !important;
    }
    
    .mobile-service-desc {
      font-size: 0.7rem !important;
      color: #64748B !important;
      margin-top: 0.15rem !important;
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
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
        .whatsapp-nav-btn {
          background: transparent;
          border: 1px solid #1F2A3D;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: #25D366;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          text-decoration: none;
        }
        .whatsapp-nav-btn:hover {
          background: rgba(37, 211, 102, 0.1);
          border-color: #25D366;
        }
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .mobile-menu-btn:hover {
          background: rgba(255,255,255,0.05);
        }
        .mobile-menu-btn span {
          width: 22px;
          height: 2px;
          background: #F0F4FF;
          transition: 0.3s;
          border-radius: 2px;
        }
        .mobile-actions {
          display: none;
        }
      `}</style>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar-padding"
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
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <img
            src={logo}
            alt="Adrix Core"
            className="logo-img"
            style={{ width: "180px", height: "auto", objectFit: "contain", display: "block" }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
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

        {/* Desktop Actions */}
        <div className="desktop-actions" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href="https://wa.me/917447508006"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-nav-btn"
            style={{ textDecoration: "none" }}
          >
            💬 Chat
          </a>
          <Link to="/contact" style={{ textDecoration: "none", flexShrink: 0 }}>
            <button className="get-started-btn">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Actions (visible on small screens) */}
        <div className="mobile-actions">
          <a
            href="https://wa.me/917447508006"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-nav-btn"
            style={{ textDecoration: "none" }}
          >
            💬
          </a>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button className="get-started-btn">
              Start
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              color: C.textPrimary,
              cursor: "pointer",
              padding: "0.5rem",
              lineHeight: 1,
              zIndex: 1002
            }}
          >
            ✕
          </button>

          {/* Home Link */}
          <Link
            to="/"
            className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* About Link */}
          <Link
            to="/about"
            className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div style={{ width: "100%" }}>
            <div
              className="mobile-dropdown-header"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <Link
                to="/services"
                className={`mobile-nav-link ${isActive("/services") ? "active" : ""}`}
                onClick={(e) => e.stopPropagation()}
                style={{ flex: 1, padding: "0.5rem 0", margin: 0 }}
              >
                Services
              </Link>
              <span style={{ color: C.textMuted, fontSize: "1.2rem", padding: "0.5rem" }}>
                {isMobileServicesOpen ? "−" : "+"}
              </span>
            </div>
            
            {isMobileServicesOpen && (
              <div className="mobile-dropdown-content" style={{ display: "block" }}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "0.6rem 0",
                      textDecoration: "none",
                      width: "100%"
                    }}
                  >
                    <div style={{ fontSize: "0.875rem", fontWeight: 500, color: C.textBody }}>
                      {item.icon} {item.name}
                    </div>
                    <div className="mobile-service-desc" style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: "0.15rem" }}>
                      {item.description}
                    </div>
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem 0",
                    color: C.blueHover,
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    display: "block"
                  }}
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Link */}
          <Link
            to="/portfolio"
            className={`mobile-nav-link ${isActive("/portfolio") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>

          {/* Pricing Link */}
          <Link
            to="/pricing"
            className={`mobile-nav-link ${isActive("/pricing") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          {/* Blog Link */}
          <Link
            to="/blog"
            className={`mobile-nav-link ${isActive("/blog") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`mobile-nav-link ${isActive("/contact") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

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