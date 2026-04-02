// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Adrixcore-removebg-preview.png";

const C = {
  cyan: "#00e5ff",
  purple: "#6d5cff",
};

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", path: "/", scrollTo: "home" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const servicesLinks = [
    { name: "Web App Development", path: "/services" },
    { name: "Mobile App Development", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "AI Integration", path: "/services" },
    { name: "Landing Pages", path: "/services" },
    { name: "Maintenance Plans", path: "/services" }
  ];

  // Social Media Links
  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "https://www.facebook.com/share/1YmNAmX1LW/",
      color: "#1877F2"
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://www.instagram.com/adrixcoretech?igsh=MTk2MzN1eTgxZmppZw==",
      color: "#E4405F"
    },
    {
      name: "YouTube",
      icon: "▶️",
      url: "https://youtube.com/@adrixcoretechnologies?si=iSBtpvaeZ_sTHOR3",
      color: "#FF0000"
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      url: "https://www.linkedin.com/in/adrix-core-5606613bb?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      color: "#0077B5"
    }
  ];

  const handleLinkClick = (link) => {
    if (link.path === "/" && link.scrollTo) {
      scrollToSection(link.scrollTo);
    }
  };

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 5,
        background: "rgba(0,5,15,0.95)",
        borderTop: "1px solid rgba(0,229,255,0.08)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Column 1 - Logo & Tagline */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <img
                  src={logo}
                  alt="Adrix Core Logo"
                  style={{ width: 200, height: 150, objectFit: "contain" }}
                />
              </div>
            </Link>
            <p
              style={{
                color: "#ffffff",
                fontSize: "0.85rem",
                lineHeight: 1.5,
                marginTop: "1rem",
                opacity: 0.8,
              }}
            >
              Trusted digital solutions with proven results. Building the future of digital experiences.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: "0.5rem" }}>
                  {link.path === "/" ? (
                    <a
                      onClick={() => handleLinkClick(link)}
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        transition: "color 0.2s",
                        cursor: "pointer",
                        opacity: 0.7,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = C.cyan;
                        e.target.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#ffffff";
                        e.target.style.opacity = "0.7";
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        transition: "color 0.2s",
                        opacity: 0.7,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = C.cyan;
                        e.target.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#ffffff";
                        e.target.style.opacity = "0.7";
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              Our Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {servicesLinks.map((service) => (
                <li key={service.name} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to={service.path}
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                      opacity: 0.7,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = C.cyan;
                      e.target.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#ffffff";
                      e.target.style.opacity = "0.7";
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info with Social Icons */}
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              Contact
            </h3>
            <div style={{ marginBottom: "0.8rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📧</span>
                <a
                  href="mailto:adrixcoretech@gmail.com"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = C.cyan;
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.opacity = "0.7";
                  }}
                >
                  adrixcoretech@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📞</span>
                <a
                  href="tel:+917447508006"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = C.cyan;
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.opacity = "0.7";
                  }}
                >
                  +91 74475 08006
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📞</span>
                <a
                  href="tel:+918080822156"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = C.cyan;
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.opacity = "0.7";
                  }}
                >
                  +91 80808 22156
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📍</span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    opacity: 0.7,
                  }}
                >
                  Navi Mumbai, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social Icons Section */}
            <div>
              <h4
                style={{
                  fontFamily: "'Orbitron',monospace",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.8rem",
                  letterSpacing: "0.05em",
                  opacity: 0.8,
                }}
              >
                Follow Us
              </h4>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: "rgba(255,255,255,0.05)",
                      padding: "0.4rem 0.8rem",
                      borderRadius: 50,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(0,229,255,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = social.color;
                      e.target.style.borderColor = social.color;
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255,255,255,0.05)";
                      e.target.style.borderColor = "rgba(0,229,255,0.2)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>{social.icon}</span>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        opacity: 0.9,
                      }}
                    >
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "0.75rem",
              opacity: 0.6,
            }}
          >
            © 2026 Adrix Core. All rights reserved. Built with <span style={{ color: C.cyan }}>ADRIX CORE</span>, India.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "color 0.2s",
                opacity: 0.6,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = C.cyan;
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#ffffff";
                e.target.style.opacity = "0.6";
              }}
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "color 0.2s",
                opacity: 0.6,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = C.cyan;
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#ffffff";
                e.target.style.opacity = "0.6";
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;