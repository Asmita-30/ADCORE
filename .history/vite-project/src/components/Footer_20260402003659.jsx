// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF, faInstagram, faYoutube, faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/Adrixcore-removebg-preview.png";
import footerBg from "../assets/images/"; // Add your footer background image

// Updated design system — professional dark (Vercel/Linear inspired)
const C = {
  blue: "#2563EB",
  blueHover: "#3B82F6",
  cyan: "#06B6D4",
  surface: "#111827",
  border: "#1F2A3D",
  textPrimary: "#F0F4FF",
  textBody: "#94A3B8",
  textMuted: "#64748B",
  bg: "#0A0F1E",
};

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesLinks = [
    { name: "Web App Development", path: "/web-app-development" },
    { name: "Mobile App Development", path: "/mobile-app-development" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "AI Integration", path: "/ai-integration" },
    { name: "Landing Pages", path: "/landing-pages" },
    { name: "Maintenance Plans", path: "/maintenance-plans" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: faFacebookF, url: "https://www.facebook.com/share/1YmNAmX1LW/", hoverColor: "#1877F2" },
    { name: "Instagram", icon: faInstagram, url: "https://www.instagram.com/adrixcoretech?igsh=MTk2MzN1eTgxZmppZw==", hoverColor: "#E4405F" },
    { name: "YouTube", icon: faYoutube, url: "https://youtube.com/@adrixcoretechnologies?si=iSBtpvaeZ_sTHOR3", hoverColor: "#FF0000" },
    { name: "LinkedIn", icon: faLinkedinIn, url: "https://www.linkedin.com/in/adrix-core-5606613bb?utm_source=share_via&utm_content=profile&utm_medium=member_android", hoverColor: "#0077B5" },
  ];

  const linkStyle = {
    color: C.textBody,
    textDecoration: "none",
    fontSize: "0.875rem",
    fontFamily: "'Inter', sans-serif",
    transition: "color 0.2s",
    lineHeight: "1.6",
  };

  const headingStyle = {
    fontFamily: "'Sora', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: C.textPrimary,
    marginBottom: "1.1rem",
    letterSpacing: "0.02em",
  };

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 5,
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        padding: "3.5rem 2rem 2rem",
        fontFamily: "'Inter', sans-serif",
        // Add background image
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Add overlay for better text readability
        position: "relative",
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(17, 24, 39, 0.92)", // C.surface with opacity
          zIndex: 1,
        }}
      />
      
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Column 1 — Logo + Single Tagline (Fix #06: one tagline only) */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
              <img
                src={logo}
                alt="Adrix Core Logo"
                style={{ width: 180, height: 120, objectFit: "contain" }}
              />
            </Link>
            {/* FIX #06: Single consolidated tagline */}
            <p style={{ color: C.textBody, fontSize: "0.875rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
              From Idea to Impact.
            </p>
            <p style={{ color: C.textMuted, fontSize: "0.8rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
              Engineering-first digital products built for founders and growing businesses.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 style={headingStyle}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: "0.45rem" }}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = C.textPrimary)}
                    onMouseLeave={(e) => (e.target.style.color = C.textBody)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 style={headingStyle}>Our Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {servicesLinks.map((service) => (
                <li key={service.name} style={{ marginBottom: "0.45rem" }}>
                  <Link
                    to={service.path}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = C.textPrimary)}
                    onMouseLeave={(e) => (e.target.style.color = C.textBody)}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Social */}
          <div>
            <h3 style={headingStyle}>Contact</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "0.875rem", color: C.blueHover, flexShrink: 0 }} />
                <a href="mailto:adrixcoretech@gmail.com" style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = C.textPrimary)}
                  onMouseLeave={(e) => (e.target.style.color = C.textBody)}>
                  adrixcoretech@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: "0.875rem", color: C.blueHover, flexShrink: 0 }} />
                <a href="tel:+917447508006" style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = C.textPrimary)}
                  onMouseLeave={(e) => (e.target.style.color = C.textBody)}>
                  +91 74475 08006
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: "0.875rem", color: C.blueHover, flexShrink: 0 }} />
                <a href="tel:+918080822156" style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = C.textPrimary)}
                  onMouseLeave={(e) => (e.target.style.color = C.textBody)}>
                  +91 80808 22156
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "0.875rem", color: C.blueHover, flexShrink: 0, marginTop: "3px" }} />
                <span style={{ ...linkStyle, cursor: "default" }}>Navi Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 style={{ ...headingStyle, fontSize: "0.8rem", color: C.textBody, marginBottom: "0.75rem" }}>Follow Us</h4>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(30, 41, 59, 0.9)",
                      border: `1px solid ${C.border}`,
                      color: C.textMuted,
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.hoverColor;
                      e.currentTarget.style.borderColor = social.hoverColor;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(30, 41, 59, 0.9)";
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.color = C.textMuted;
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} />
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
            gap: "0.75rem",
            paddingTop: "1.5rem",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <span style={{ color: C.textMuted, fontSize: "0.8rem" }}>
            © 2026 Adrix Core Technologies. All rights reserved. Built in India 🇮🇳
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ label: "Terms & Conditions", path: "/terms" }, { label: "Privacy Policy", path: "/privacy" }].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{ color: C.textMuted, textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = C.textPrimary)}
                onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;