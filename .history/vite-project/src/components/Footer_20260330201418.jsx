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
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Orbitron',monospace",
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      color: "#fff",
                    }}
                  >
                    ADRIX <span style={{ color: C.cyan }}>CORE</span>
                  </div>
                  <div
                    style={{
                      color: "rgba(224,247,255,0.4)",
                      fontSize: "0.7rem",
                      marginTop: 2,
                    }}
                  >
                    Web & App Development Studio
                  </div>
                </div>
              </div>
            </Link>
            <p
              style={{
                color: "rgba(224,247,255,0.5)",
                fontSize: "0.85rem",
                lineHeight: 1.5,
                marginTop: "1rem",
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
                color: C.cyan,
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
                        color: "rgba(224,247,255,0.6)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        transition: "color 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(224,247,255,0.6)")
                      }
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        color: "rgba(224,247,255,0.6)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(224,247,255,0.6)")
                      }
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
                color: C.cyan,
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
                      color: "rgba(224,247,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(224,247,255,0.6)")
                    }
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: C.cyan,
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
                    color: "rgba(224,247,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(224,247,255,0.6)")
                  }
                >
                  adrixcoretech@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📞</span>
                <a
                  href="tel:+917447508006"
                  style={{
                    color: "rgba(224,247,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(224,247,255,0.6)")
                  }
                >
                  +91 74475 08006
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📞</span>
                <a
                  href="tel:+918080822156"
                  style={{
                    color: "rgba(224,247,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.cyan)}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(224,247,255,0.6)")
                  }
                >
                  +91 80808 22156
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📍</span>
                <span
                  style={{
                    color: "rgba(224,247,255,0.6)",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  Navi Mumbai, Maharashtra, India
                </span>
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
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              color: "rgba(224,247,255,0.4)",
              fontSize: "0.75rem",
            }}
          >
            © 2026 Adrix Core. All rights reserved. Built with <span style={{ color: C.cyan }}>ADRIX CORE</span> , India.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#"
              style={{
                color: "rgba(224,247,255,0.4)",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.cyan)}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(224,247,255,0.4)")
              }
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              style={{
                color: "rgba(224,247,255,0.4)",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.cyan)}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(224,247,255,0.4)")
              }
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