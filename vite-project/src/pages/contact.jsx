// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';

import contactHeroBg from "../assets/images/contact-bg.png"; // Add your image to assets/images/

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
  error: "#EF4444",
  whatsapp: "#25D366"
};

function Contact() {
  const heroRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("LWo3G_PHm7tNXvw3r");
  }, []);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Form animations
    gsap.fromTo(formRef.current.querySelectorAll(".form-animate"), 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: formRef.current, start: "top 80%" } }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (formStep === 1 && (!formData.name || !formData.email)) {
      alert("Please fill in your name and email");
      return;
    }
    setFormStep(formStep + 1);
  };

  const handlePrev = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message) {
      alert("Please tell us about your project");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(false);

    // Get current date and time in IST
    const now = new Date();
    const formattedDate = now.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Map project type to display value
    const projectTypeMap = {
      static: "Static Website (₹7,000 - ₹10,000)",
      dynamic: "Dynamic Website (₹14,000 - ₹17,000)",
      ecommerce: "E-Commerce Website (₹25,000+)",
      webapp: "Web Application",
      mobile: "Mobile App",
      ai: "AI Integration",
      uiux: "UI/UX Design",
      maintenance: "Maintenance",
      unsure: "Not sure yet / Need advice"
    };

    // Map budget to display value
    const budgetMap = {
      "7k-10k": "₹7,000 - ₹10,000",
      "14k-17k": "₹14,000 - ₹17,000",
      "25k+": "₹25,000+",
      custom: "Custom / Not Sure",
      "not-sure": "Not decided yet"
    };

    const projectTypeDisplay = projectTypeMap[formData.projectType] || formData.projectType;
    const budgetDisplay = budgetMap[formData.budget] || formData.budget || "Not specified";

    // Admin Template Params
    const adminTemplateParams = {
      to_email: "adrixcoretech@gmail.com",
      name: formData.name,
      email: formData.email,
      title: formData.projectType || "New Project Inquiry",
      message: formData.message,
      time: formattedDate,
      from_name: formData.name,
      from_email: formData.email,
      user_phone: formData.phone || "Not provided",
      project_type: projectTypeDisplay,
      budget: budgetDisplay,
      user_message: formData.message,
      date: formattedDate
    };

    // Auto-Reply Template Params
    const autoReplyParams = {
      to_email: formData.email,
      to_name: formData.name,
      name: formData.name,
      email: formData.email,
      title: formData.projectType || "New Project Inquiry",
      message: formData.message,
      time: formattedDate,
      from_name: "ADRIX CORE",
      from_email: "adrixcoretech@gmail.com",
      client_name: formData.name,
      client_email: formData.email,
      project_type: projectTypeDisplay,
      budget: budgetDisplay,
      date: formattedDate
    };

    try {
      const serviceId = "service_ozdijes";
      const adminTemplateId = "template_ewwsopp";
      const autoReplyTemplateId = "template_cqwbt4h";
      
      console.log("=== SENDING ADMIN NOTIFICATION ===");
      
      // Send email notification to ADRIX CORE
      const adminResponse = await emailjs.send(serviceId, adminTemplateId, adminTemplateParams);
      console.log("Admin Email Response:", adminResponse);
      
      if (adminResponse.status === 200) {
        console.log("=== SENDING AUTO-REPLY TO CLIENT ===");
        
        // Send auto-reply to client
        const autoReplyResponse = await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams);
        console.log("Auto-reply Response:", autoReplyResponse);
        
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: ""
        });
        setFormStep(1);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(`Admin notification failed with status: ${adminResponse.status}`);
      }
      
    } catch (error) {
      console.error("=== ERROR SENDING EMAIL ===");
      console.error("Error details:", error);
      
      let errorMessage = "There was an error sending your message. ";
      if (error.text) {
        try {
          const parsed = JSON.parse(error.text);
          errorMessage += parsed.message || "Please check your EmailJS template configuration.";
        } catch {
          errorMessage += "Please try again or contact us directly at adrixcoretech@gmail.com";
        }
      } else {
        errorMessage += "Please try again or contact us directly at adrixcoretech@gmail.com";
      }
      
      alert(errorMessage);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "adrixcoretech@gmail.com",
    link: "mailto:adrixcoretech@gmail.com",
    color: COLORS.primaryAccent,
    isSingleValue: true
  },
  {
    icon: "📞",
    label: "Phone",
    values: [
      { value: "+91 74475 08006", link: "tel:+917447508006" },
      { value: "+91 80808 22156", link: "tel:+918080822156" }
    ],
    color: COLORS.secondaryAccent,
    isMultipleValues: true
  },
  {
    icon: "💬",
    label: "WhatsApp",
    values: [
      { value: "+91 74475 08006", link: "https://wa.me/917447508006" },
      { value: "+91 80808 22156", link: "https://wa.me/918080822156" }
    ],
    color: COLORS.whatsapp,
    isMultipleValues: true
  },
  {
    icon: "📍",
    label: "Location",
    value: "Navi Mumbai, Maharashtra, India",
    link: null,
    color: COLORS.primaryAccent,
    isSingleValue: true
  }
];


  // Responsive styles
  const responsiveStyles = `
    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      .hero-padding {
        padding: 100px 1.5rem 50px !important;
      }
      .section-padding {
        padding: 40px 1.5rem !important;
      }
      .contact-cards {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1rem !important;
      }
      .whatsapp-cta {
        flex-direction: column !important;
        text-align: center !important;
        padding: 1.2rem 1.5rem !important;
      }
      .whatsapp-cta-content {
        flex-direction: column !important;
        text-align: center !important;
      }
      .form-container {
        padding: 1.5rem !important;
      }
      .form-title {
        font-size: 1rem !important;
      }
    }
    
    @media (max-width: 768px) {
      .hero-padding {
        padding: 80px 1rem 40px !important;
      }
      .section-padding {
        padding: 30px 1rem !important;
      }
      .contact-cards {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      .hero-title {
        font-size: clamp(1.5rem, 5vw, 2rem) !important;
      }
      .hero-subtitle {
        font-size: 0.9rem !important;
      }
      .hero-badge {
        font-size: 0.7rem !important;
      }
      .info-title {
        font-size: 1.3rem !important;
      }
      .info-text {
        font-size: 0.9rem !important;
      }
      .form-step-title {
        font-size: 0.9rem !important;
      }
      .form-input, .form-select, .form-textarea {
        padding: 0.7rem 1rem !important;
        font-size: 0.9rem !important;
      }
      .form-buttons {
        flex-direction: column !important;
        gap: 0.8rem !important;
      }
      .form-buttons button {
        width: 100% !important;
      }
      .calendly-card {
        padding: 1rem !important;
      }
      .calendly-title {
        font-size: 0.9rem !important;
      }
      .contact-card {
        padding: 1rem !important;
      }
      .contact-card-icon {
        font-size: 2rem !important;
      }
      .contact-card-label {
        font-size: 0.75rem !important;
      }
      .contact-card-value {
        font-size: 0.8rem !important;
      }
      .progress-steps {
        gap: 0.3rem !important;
      }
      .step-number {
        font-size: 0.7rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .hero-padding {
        padding: 70px 0.8rem 35px !important;
      }
      .section-padding {
        padding: 25px 0.8rem !important;
      }
      .hero-title {
        font-size: 1.4rem !important;
      }
      .hero-subtitle {
        font-size: 0.85rem !important;
      }
      .info-title {
        font-size: 1.1rem !important;
      }
      .info-text {
        font-size: 0.85rem !important;
      }
      .form-container {
        padding: 1.2rem !important;
      }
      .form-input, .form-select, .form-textarea {
        padding: 0.6rem 0.8rem !important;
        font-size: 0.85rem !important;
      }
      .calendly-card {
        padding: 0.8rem !important;
      }
      .calendly-button {
        padding: 0.6rem 1rem !important;
        font-size: 0.8rem !important;
      }
      .whatsapp-cta {
        padding: 1rem !important;
      }
      .whatsapp-cta-icon {
        font-size: 1.8rem !important;
      }
      .whatsapp-cta-title {
        font-size: 1rem !important;
      }
      .whatsapp-cta-text {
        font-size: 0.75rem !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        
        .form-step {
          transition: all 0.3s ease;
        }
        
        .contact-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .contact-card:hover {
          transform: translateY(-4px);
          border-color: ${COLORS.primaryAccent};
        }
        
        input, select, textarea {
          transition: all 0.2s ease;
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

      <section ref={heroRef} className="hero-padding" style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: `linear-gradient(rgba(10, 15, 30, 0.82), rgba(10, 15, 30, 0.88)), url(${contactHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden"
      }}>
        {/* Optional: Add a subtle gradient overlay for depth */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse 70% 40% at 50% 30%, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-badge"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "0.75rem", 
                letterSpacing: "0.2em", 
                color: COLORS.primaryAccent, 
                marginBottom: "1rem",
                textTransform: "uppercase",
                display: "inline-block",
                background: "rgba(30, 58, 95, 0.7)",
                backdropFilter: "blur(8px)",
                padding: "0.3rem 1rem",
                borderRadius: "20px"
              }}
            >
              Start Your Project
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-title"
              style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "clamp(2rem, 5vw, 3.5rem)", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: COLORS.primaryText,
                lineHeight: "1.2"
              }}
            >
              Tell Us About Your Project —<br />
              <span style={{ color: COLORS.primaryAccent }}>We Respond Within 4 Hours</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-subtitle"
              style={{ 
                fontSize: "1.125rem", 
                color: COLORS.bodyText, 
                lineHeight: 1.6, 
                maxWidth: 700, 
                margin: "0 auto",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Ready to transform your digital presence? Fill out the form below or book a free 30-minute strategy call directly.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* WhatsApp CTA - Moved above contact form */}
      <section className="section-padding" style={{ padding: "40px 2rem 20px", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="whatsapp-cta"
            style={{
              background: `linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.05))`,
              border: `1px solid ${COLORS.whatsapp}`,
              borderRadius: 20,
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            <div className="whatsapp-cta-content" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="whatsapp-cta-icon" style={{ fontSize: "2rem" }}>💬</div>
              <div>
                <h3 className="whatsapp-cta-title" style={{ 
                  fontFamily: "'Sora', sans-serif", 
                  fontSize: "1.1rem", 
                  fontWeight: 600, 
                  color: COLORS.primaryText,
                  marginBottom: "0.25rem"
                }}>
                  Prefer instant communication?
                </h3>
                <p className="whatsapp-cta-text" style={{ fontSize: "0.85rem", color: COLORS.bodyText }}>
                  Chat with us on WhatsApp — we respond in under 1 hour
                </p>
              </div>
            </div>
            <motion.a
              href="https://wa.me/917447508006?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20ADRIX%20CORE.%20Can%20we%20discuss%20my%20requirements%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: COLORS.whatsapp,
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: 50,
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <span>📱</span> Chat on WhatsApp →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}

<section className="section-padding" style={{ padding: "20px 2rem", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <div className="contact-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.label}
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, borderColor: info.color }}
          style={{
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.borderDefault}`,
            borderRadius: 20,
            padding: "1.5rem",
            textAlign: "center",
            transition: "all 0.3s ease"
          }}
        >
          <div className="contact-card-icon" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{info.icon}</div>
          <h3 className="contact-card-label" style={{ 
            fontFamily: "'Sora', sans-serif", 
            fontSize: "0.85rem", 
            fontWeight: 600, 
            color: info.color, 
            marginBottom: "0.75rem" 
          }}>
            {info.label}
          </h3>
          
          {info.isMultipleValues ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {info.values.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link} 
                  target={info.label === "WhatsApp" ? "_blank" : undefined}
                  rel={info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="contact-card-value"
                  style={{ 
                    color: COLORS.bodyText, 
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                    display: "block",
                    wordBreak: "break-word"
                  }}
                  onMouseEnter={(e) => e.target.style.color = info.color}
                  onMouseLeave={(e) => e.target.style.color = COLORS.bodyText}
                >
                  {item.value}
                </a>
              ))}
            </div>
          ) : info.link ? (
            <a 
              href={info.link} 
              target={info.label === "WhatsApp" ? "_blank" : undefined}
              rel={info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="contact-card-value"
              style={{ 
                color: COLORS.bodyText, 
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.2s",
                display: "block",
                wordBreak: "break-word"
              }}
              onMouseEnter={(e) => e.target.style.color = info.color}
              onMouseLeave={(e) => e.target.style.color = COLORS.bodyText}
            >
              {info.value}
            </a>
          ) : (
            <p className="contact-card-value" style={{ color: COLORS.bodyText, fontSize: "0.875rem" }}>{info.value}</p>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Main Contact Section with Calendly */}
      <section ref={formRef} className="section-padding" style={{ padding: "40px 2rem 80px", position: "relative", zIndex: 2, background: COLORS.primaryBg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Left Side - Info */}
            <motion.div 
              className="form-animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "0.7rem", 
                letterSpacing: "0.2em", 
                color: COLORS.primaryAccent, 
                marginBottom: "1rem",
                textTransform: "uppercase"
              }}>
                How We Work
              </div>
              <h2 className="info-title" style={{ 
                fontFamily: "'Sora', sans-serif", 
                fontSize: "1.8rem", 
                fontWeight: 700, 
                marginBottom: "1rem", 
                color: COLORS.primaryText 
              }}>
                Tell Us About <span style={{ color: COLORS.primaryAccent }}>Your Idea</span>
              </h2>
              <p className="info-text" style={{ 
                fontSize: "1rem", 
                color: COLORS.bodyText, 
                lineHeight: 1.6, 
                marginBottom: "2rem",
                fontFamily: "'Inter', sans-serif"
              }}>
                We're excited to hear about your project. Whether you have a clear vision or just a rough idea, 
                we'll help you shape it into a successful digital product.
              </p>
              
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: "50%", 
                    background: COLORS.primaryAccent, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: COLORS.primaryText, fontFamily: "'Inter', sans-serif" }}>
                      Response within 4 hours
                    </div>
                    <div style={{ fontSize: "0.8rem", color: COLORS.mutedText }}>
                      We take your project seriously
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: "50%", 
                    background: COLORS.primaryAccent, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: COLORS.primaryText, fontFamily: "'Inter', sans-serif" }}>
                      Fixed-price quotes
                    </div>
                    <div style={{ fontSize: "0.8rem", color: COLORS.mutedText }}>
                      No surprises, no hidden costs
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: "50%", 
                    background: COLORS.primaryAccent, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}>
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: COLORS.primaryText, fontFamily: "'Inter', sans-serif" }}>
                      Free consultation call
                    </div>
                    <div style={{ fontSize: "0.8rem", color: COLORS.mutedText }}>
                      30-min discovery call to understand your needs
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Embed - Added as alternative to form */}
              <div className="calendly-card" style={{
                background: COLORS.cardBg,
                borderRadius: 16,
                padding: "1.5rem",
                border: `1px solid ${COLORS.borderDefault}`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>📅</span>
                  <h3 className="calendly-title" style={{ 
                    fontFamily: "'Sora', sans-serif", 
                    fontSize: "1rem", 
                    fontWeight: 600, 
                    color: COLORS.primaryText 
                  }}>
                    Book a Free 30-Minute Strategy Call
                  </h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: COLORS.bodyText, marginBottom: "1rem" }}>
                  Prefer to talk directly? Schedule a call with our team. No commitment, just a conversation.
                </p>
                <motion.a
                  href="https://calendly.com/adrixcore/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="calendly-button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: COLORS.primaryAccent,
                    border: "none",
                    padding: "0.75rem 1.5rem",
                    borderRadius: 50,
                    color: COLORS.primaryText,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    width: "100%",
                    justifyContent: "center"
                  }}
                >
                  <span>📆</span> Book Your Free Call →
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Multi-Step Form */}
           <motion.div 
  className="form-animate form-container"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  style={{
    background: COLORS.cardBg,
    border: `1px solid ${COLORS.borderDefault}`,
    borderRadius: 24,
    padding: "2rem"
  }}
>
              {submitSuccess ? (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
                  <h3 style={{ 
                    fontFamily: "'Sora', sans-serif", 
                    fontSize: "1.3rem", 
                    color: COLORS.success, 
                    marginBottom: "0.5rem" 
                  }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: COLORS.bodyText }}>
                    Thanks for reaching out! We've received your message and will get back to you within 4 hours.
                  </p>
                  <p style={{ color: COLORS.mutedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                    A confirmation has been sent to your email.
                  </p>
                </div>
              ) : submitError ? (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
                  <h3 style={{ 
                    fontFamily: "'Sora', sans-serif", 
                    fontSize: "1.3rem", 
                    color: COLORS.error, 
                    marginBottom: "0.5rem" 
                  }}>
                    Something went wrong
                  </h3>
                  <p style={{ color: COLORS.bodyText }}>
                    There was an error sending your message. Please try again or contact us directly.
                  </p>
                  <button
                    onClick={() => setSubmitError(false)}
                    style={{
                      marginTop: "1rem",
                      background: COLORS.primaryAccent,
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      borderRadius: 50,
                      color: "#fff",
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress Bar */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div className="progress-steps" style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                      {[1, 2, 3].map(step => (
                        <div key={step} style={{
                          flex: 1,
                          height: 4,
                          background: formStep >= step ? COLORS.primaryAccent : COLORS.borderDefault,
                          borderRadius: 2,
                          transition: "all 0.3s ease"
                        }} />
                      ))}
                    </div>
                    <div className="step-number" style={{ fontSize: "0.75rem", color: COLORS.mutedText, textAlign: "center" }}>
                      Step {formStep} of 3
                    </div>
                  </div>

                  {/* Step 1: Basic Info - Name & Email only (Phone optional) */}
                  {formStep === 1 && (
                    <div className="form-step">
                      <h3 className="form-step-title" style={{ 
                        fontFamily: "'Sora', sans-serif", 
                        fontSize: "1rem", 
                        color: COLORS.primaryAccent, 
                        marginBottom: "1.5rem" 
                      }}>
                        Tell us about yourself
                      </h3>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                          width: "100%",
                          background: COLORS.primaryBg,
                          border: `1px solid ${COLORS.borderDefault}`,
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: COLORS.primaryText,
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          fontFamily: "'Inter', sans-serif"
                        }}
                        onFocus={e => { e.target.style.borderColor = COLORS.primaryAccent; }}
                        onBlur={e => { e.target.style.borderColor = COLORS.borderDefault; }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                          width: "100%",
                          background: COLORS.primaryBg,
                          border: `1px solid ${COLORS.borderDefault}`,
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: COLORS.primaryText,
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          fontFamily: "'Inter', sans-serif"
                        }}
                        onFocus={e => { e.target.style.borderColor = COLORS.primaryAccent; }}
                        onBlur={e => { e.target.style.borderColor = COLORS.borderDefault; }}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                          width: "100%",
                          background: COLORS.primaryBg,
                          border: `1px solid ${COLORS.borderDefault}`,
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: COLORS.primaryText,
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          fontFamily: "'Inter', sans-serif"
                        }}
                        onFocus={e => { e.target.style.borderColor = COLORS.primaryAccent; }}
                        onBlur={e => { e.target.style.borderColor = COLORS.borderDefault; }}
                      />
                      <div style={{ fontSize: "0.7rem", color: COLORS.mutedText, marginBottom: "1rem", textAlign: "center" }}>
                        Takes less than 2 minutes. No spam. We respond within 4 hours.
                      </div>
                      <button
                        type="button"
                        onClick={handleNext}
                        style={{
                          width: "100%",
                          background: COLORS.primaryAccent,
                          border: "none",
                          padding: "1rem",
                          borderRadius: 50,
                          color: "#fff",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          cursor: "pointer"
                        }}
                        onMouseEnter={(e) => e.target.style.background = COLORS.accentHover}
                        onMouseLeave={(e) => e.target.style.background = COLORS.primaryAccent}
                      >
                        Continue →
                      </button>
                    </div>
                  )}

                  {/* Step 2: Project Details - Includes budget (optional) */}
                  {formStep === 2 && (
                    <div className="form-step">
                      <h3 className="form-step-title" style={{ 
                        fontFamily: "'Sora', sans-serif", 
                        fontSize: "1rem", 
                        color: COLORS.primaryAccent, 
                        marginBottom: "1.5rem" 
                      }}>
                        Tell us about your project
                      </h3>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-select"
                        style={{
                          width: "100%",
                          background: COLORS.primaryBg,
                          border: `1px solid ${COLORS.borderDefault}`,
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: COLORS.primaryText,
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          cursor: "pointer",
                          fontFamily: "'Inter', sans-serif"
                        }}
                        onFocus={(e) => e.target.style.borderColor = COLORS.primaryAccent}
                        onBlur={(e) => e.target.style.borderColor = COLORS.borderDefault}
                      >
                        <option value="" style={{ background: COLORS.primaryBg }}>Select Project Type *</option>
                        <option value="static" style={{ background: COLORS.primaryBg }}>Static Website (₹7,000 - ₹10,000)</option>
                        <option value="dynamic" style={{ background: COLORS.primaryBg }}>Dynamic Website (₹14,000 - ₹17,000)</option>
                        <option value="ecommerce" style={{ background: COLORS.primaryBg }}>E-Commerce Website (₹25,000+)</option>
                        <option value="webapp" style={{ background: COLORS.primaryBg }}>Web Application</option>
                        <option value="mobile" style={{ background: COLORS.primaryBg }}>Mobile App</option>
                        <option value="ai" style={{ background: COLORS.primaryBg }}>AI Integration</option>
                        <option value="uiux" style={{ background: COLORS.primaryBg }}>UI/UX Design</option>
                        <option value="maintenance" style={{ background: COLORS.primaryBg }}>Maintenance</option>
                        <option value="unsure" style={{ background: COLORS.primaryBg }}>Not sure yet / I need advice</option>
                      </select>
                      
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-select"
                        style={{
                          width: "100%",
                          background: COLORS.primaryBg,
                          border: `1px solid ${COLORS.borderDefault}`,
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: COLORS.primaryText,
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          cursor: "pointer",
                          fontFamily: "'Inter', sans-serif"
                        }}
                        onFocus={(e) => e.target.style.borderColor = COLORS.primaryAccent}
                        onBlur={(e) => e.target.style.borderColor = COLORS.borderDefault}
                      >
                        <option value="" style={{ background: COLORS.primaryBg }}>Approximate Budget (Optional)</option>
                        <option value="7k-10k" style={{ background: COLORS.primaryBg }}>₹7,000 - ₹10,000 (Static Website)</option>
                        <option value="14k-17k" style={{ background: COLORS.primaryBg }}>₹14,000 - ₹17,000 (Dynamic Website)</option>
                        <option value="25k+" style={{ background: COLORS.primaryBg }}>₹25,000+ (E-Commerce)</option>
                        <option value="custom" style={{ background: COLORS.primaryBg }}>Custom / Not Sure</option>
                        <option value="not-sure" style={{ background: COLORS.primaryBg }}>Not decided yet</option>
                      </select>
                      
                      <div style={{ fontSize: "0.7rem", color: COLORS.mutedText, marginBottom: "1rem" }}>
                        Helps us prepare better. You can skip if not sure.
                      </div>
                      
                      <div className="form-buttons" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                        <button
                          type="button"
                          onClick={handlePrev}
                          style={{
                            flex: 1,
                            background: "transparent",
                            border: `1px solid ${COLORS.borderDefault}`,
                            padding: "1rem",
                            borderRadius: 50,
                            color: COLORS.primaryText,
                            fontFamily: "'Inter', sans-serif",
                            cursor: "pointer",
                            transition: "all 0.2s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.borderColor = COLORS.primaryAccent;
                            e.target.style.color = COLORS.primaryAccent;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.borderColor = COLORS.borderDefault;
                            e.target.style.color = COLORS.primaryText;
                          }}
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          style={{
                            flex: 2,
                            background: COLORS.primaryAccent,
                            border: "none",
                            padding: "1rem",
                            borderRadius: 50,
                            color: "#fff",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            cursor: "pointer"
                          }}
                          onMouseEnter={(e) => e.target.style.background = COLORS.accentHover}
                          onMouseLeave={(e) => e.target.style.background = COLORS.primaryAccent}
                        >
                          Continue →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message */}
                  {formStep === 3 && (
                    <div className="form-step">
                      <h3 className="form-step-title" style={{ 
                        fontFamily: "'Sora', sans-serif", 
                        fontSize: "1rem", 
                        color: COLORS.primaryAccent, 
                        marginBottom: "1.5rem" 
                      }}>
                        Tell us about your vision
                      </h3>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Describe your project, goals, and any specific requirements... *"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        style={{
                          width: "100%",
                          background: COLORS.primaryBg,
                          border: `1px solid ${COLORS.borderDefault}`,
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: COLORS.primaryText,
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          resize: "vertical",
                          fontFamily: "'Inter', sans-serif"
                        }}
                        onFocus={e => { e.target.style.borderColor = COLORS.primaryAccent; }}
                        onBlur={e => { e.target.style.borderColor = COLORS.borderDefault; }}
                      />
                      <div className="form-buttons" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                        <button
                          type="button"
                          onClick={handlePrev}
                          style={{
                            flex: 1,
                            background: "transparent",
                            border: `1px solid ${COLORS.borderDefault}`,
                            padding: "1rem",
                            borderRadius: 50,
                            color: COLORS.primaryText,
                            fontFamily: "'Inter', sans-serif",
                            cursor: "pointer"
                          }}
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            flex: 2,
                            background: COLORS.primaryAccent,
                            border: "none",
                            padding: "1rem",
                            borderRadius: 50,
                            color: "#fff",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            opacity: isSubmitting ? 0.7 : 1
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message →"}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;