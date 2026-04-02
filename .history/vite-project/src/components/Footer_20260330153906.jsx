// src/components/Footer.jsx
import React from "react";

const C = {
  cyan: "#00e5ff",
};

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = ["Home", "About", "Services", "Portfolio", "Pricing", "Blog", "Contact"];

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 5,
        background: "rgba(0,5,15,0.95)",
        borderTop: "1px solid rgba(0,229,255,0.08)",
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Orbitron',monospace",
              fontSize: "1.2rem",
              fontWeight: 900,
            }}
          >
            ADRIX <span style={{ color: C.cyan }}>CORE</span>
          </div>
          <div
            style={{
              color: "rgba(224,247,255,0.4)",
              fontSize: "0.8rem",
              marginTop: 6,
            }}
          >
            Building the future of digital experiences
          </div>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {links.map((l) => (
            <a
              key={l}
              onClick={() => scrollToSection(l)}
              style={{
                color: "rgba(224,247,255,0.5)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.cyan)}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(224,247,255,0.5)")
              }
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          color: "rgba(224,247,255,0.3)",
          fontSize: "0.78rem",
        }}
      >
        © 2026 Adrix Core. All rights reserved. Built with ❤️ in Mumbai, India.
      </div>
    </footer>
  );
}

export default Footer;