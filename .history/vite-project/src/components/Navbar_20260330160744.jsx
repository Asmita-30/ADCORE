// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Adrixcore-removebg-preview.png";

const C = {
  cyan: "#00e5ff",
  purple: "#6d5cff",
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.03));
    return unsub;
  }, [scrollYProgress]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Pricing", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (link) => {
    if (link.path === "/about") {
      return;
    }
    if (link.name !== "Home" && link.name !== "About") {
      scrollToSection(link.name);
    }
  };

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
        background: scrolled ? "rgba(2,4,8,0.88)" : "transparent",
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
          alt="Adrix Core Logo"
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
        <span style={{ color: "#fff" }}>ADRIX</span>
        <span style={{ color: C.cyan }}>CORE</span>
      </Link>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {links.map((link) => {
          if (link.path === "/about") {
            return (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? C.cyan : "rgba(224,247,255,0.75)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                onMouseLeave={(e) =>
                  (e.target.style.color = location.pathname === link.path ? C.cyan : "rgba(224,247,255,0.75)")
                }
              >
                {link.name}
              </Link>
            );
          }
          return (
            <motion.a
              key={link.name}
              onClick={() => handleClick(link)}
              whileHover={{ color: C.cyan }}
              style={{
                color: "rgba(224,247,255,0.75)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
            >
              {link.name}
            </motion.a>
          );
        })}
      </div>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,229,255,0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (location.pathname !== "/") {
            window.location.href = "/#contact";
          } else {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
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