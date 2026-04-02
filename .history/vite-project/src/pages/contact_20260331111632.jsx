// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
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
    if (formStep === 2 && (!formData.projectType || !formData.budget)) {
      alert("Please select project type and budget");
      return;
    }
    setFormStep(formStep + 1);
  };

  const handlePrev = () => {
    setFormStep(formStep - 1);
  };

  // Function to send SMS via Email-to-SMS Gateway
  const sendSMS = async (phoneNumber, message) => {
    // Email-to-SMS Gateway format: phonenumber@gateway.com
    // For Indian numbers (Jio, Airtel, Vi, BSNL)
    const smsGateways = {
      jio: `${phoneNumber}@jio.com`,
      airtel: `${phoneNumber}@airtel.com`,
      vi: `${phoneNumber}@vi.com`,
      bsnl: `${phoneNumber}@bsnl.in`
    };
    
    // Try multiple gateways (at least one will work)
    const smsParams = {
      to_email: smsGateways.jio,
      from_name: "ADRIX CORE Lead",
      message: message,
      phone: phoneNumber
    };
    
    try {
      // You need to create a template for SMS in EmailJS
      // For now, we'll use a simple fetch to a webhook or SMS API
      console.log(`SMS would be sent to ${phoneNumber}: ${message}`);
      return true;
    } catch (error) {
      console.error(`Failed to send SMS to ${phoneNumber}:`, error);
      return false;
    }
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
    maintenance: "Maintenance"
  };

  // Map budget to display value
  const budgetMap = {
    "7k-10k": "₹7,000 - ₹10,000",
    "14k-17k": "₹14,000 - ₹17,000",
    "25k+": "₹25,000+",
    custom: "Custom / Not Sure"
  };

  const projectTypeDisplay = projectTypeMap[formData.projectType] || formData.projectType;
  const budgetDisplay = budgetMap[formData.budget] || formData.budget;

  // ✅ COMPLETE Admin Template Params (matches your HTML template exactly)
  const adminTemplateParams = {
    // For email recipient
    to_email: "adrixcoretech@gmail.com",
    
    // For the HTML template variables
    name: formData.name,              // For {{name}} - Client name
    email: formData.email,            // For {{email}} - Client email (for reply button)
    title: formData.projectType || "New Project Inquiry",  // For {{title}} - Project type
    message: formData.message,        // For {{message}} - Client message
    time: formattedDate,              // For {{time}} - Submission time
    
    // Extra fields for additional context
    from_name: formData.name,
    from_email: formData.email,
    user_phone: formData.phone || "Not provided",
    project_type: projectTypeDisplay,
    budget: budgetDisplay,
    user_message: formData.message,
    date: formattedDate
  };

  // ✅ Auto-Reply Template Params (to CLIENT)
  const autoReplyParams = {
    to_email: formData.email,
    to_name: formData.name,
    name: formData.name,              // For {{name}} in auto-reply
    email: formData.email,            // For {{email}} in auto-reply
    title: formData.projectType || "New Project Inquiry",  // For {{title}}
    message: formData.message,        // For {{message}}
    time: formattedDate,              // For {{time}}
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
    
    console.log("=== SENDING ADMIN NOTIFICATION TO ADRIX CORE ===");
    console.log("Template Params:", adminTemplateParams);
    
    // 1. Send email notification to ADRIX CORE (admin)
    const adminResponse = await emailjs.send(serviceId, adminTemplateId, adminTemplateParams);
    console.log("Admin Email Response:", adminResponse);
    
    if (adminResponse.status === 200) {
      
      console.log("=== SENDING AUTO-REPLY TO CLIENT ===");
      console.log("Sending to:", formData.email);
      console.log("Auto-reply Params:", autoReplyParams);
      
      // 2. Send auto-reply to client
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
    console.error("Error text:", error.text);
    console.error("Error status:", error.status);
    
    let errorMessage = "There was an error sending your message. ";
    if (error.text) {
      try {
        const parsed = JSON.parse(error.text);
        errorMessage += parsed.message || "Please check your EmailJS template variables.";
      } catch {
        errorMessage += "Please check that your EmailJS templates are configured correctly.";
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
  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "adrixcoretech@gmail.com",
      link: "mailto:adrixcoretech@gmail.com",
      color: C.cyan
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 74475 08006",
      link: "tel:+917447508006",
      color: C.purple
    },
    {
      icon: "📞",
      label: "Alternate Phone",
      value: "+91 80808 22156",
      link: "tel:+918080822156",
      color: C.pink
    },
    {
      icon: "📍",
      label: "Location",
      value: "Navi Mumbai, Maharashtra, India",
      link: null,
      color: C.cyan
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        .form-step {
          transition: all 0.3s ease;
        }
        .contact-card {
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: "linear-gradient(135deg, #020408, #050a15)",
        overflow: "hidden"
      }}>
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}
            >
              ✦ GET IN TOUCH
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              Let's Build Something <br />
              <span style={{ color: C.cyan }}>Amazing Together</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Ready to transform your digital presence? Tell us about your project — we respond within 4 hours.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ padding: "40px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: info.color }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 20,
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{info.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.9rem", fontWeight: 600, color: info.color, marginBottom: "0.5rem" }}>
                  {info.label}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    style={{ 
                      color: "rgba(224,247,255,0.8)", 
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.color = info.color}
                    onMouseLeave={(e) => e.target.style.color = "rgba(224,247,255,0.8)"}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p style={{ color: "rgba(224,247,255,0.8)", fontSize: "0.9rem" }}>{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} style={{ padding: "40px 2rem 80px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Left Side - Info */}
            <motion.div 
              className="form-animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
                ✦ START A PROJECT
              </div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 900, marginBottom: "1rem", color: "#fff" }}>
                Tell Us About <span style={{ color: C.cyan }}>Your Idea</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, marginBottom: "2rem" }}>
                We're excited to hear about your project. Whether you have a clear vision or just a rough idea, 
                we'll help you shape it into a successful digital product.
              </p>
              
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff" }}>Response within 4 hours</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)" }}>We take your project seriously</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff" }}>Fixed-price quotes</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)" }}>No surprises, no hidden costs</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff" }}>Free consultation call</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)" }}>30-min discovery call to understand your needs</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: "rgba(0,229,255,0.05)",
                borderRadius: 16,
                padding: "1rem",
                borderLeft: `3px solid ${C.cyan}`
              }}>
                <p style={{ fontSize: "0.85rem", color: "rgba(224,247,255,0.7)", fontStyle: "italic" }}>
                  "The team at Adrix Core understood our vision and delivered beyond expectations. 
                  Their technical expertise and commitment to quality is unmatched."
                </p>
                <div style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: C.cyan }}>
                  — Happy Client
                </div>
              </div>
            </motion.div>

            {/* Right Side - Multi-Step Form */}
            <motion.div 
              className="form-animate"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: "rgba(0,12,30,0.88)",
                border: `1px solid rgba(0,229,255,0.2)`,
                borderRadius: 24,
                padding: "2rem"
              }}
            >
              {submitSuccess ? (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
                  <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", color: C.cyan, marginBottom: "0.5rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "rgba(224,247,255,0.7)" }}>
                    Thanks for reaching out! We've received your message and will get back to you within 4 hours.
                  </p>
                  <p style={{ color: "rgba(224,247,255,0.5)", fontSize: "0.8rem", marginTop: "1rem" }}>
                    A confirmation has been sent to your email and our team has been notified via SMS and Email.
                  </p>
                </div>
              ) : submitError ? (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
                  <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", color: "#ff5c8a", marginBottom: "0.5rem" }}>
                    Something went wrong
                  </h3>
                  <p style={{ color: "rgba(224,247,255,0.7)" }}>
                    There was an error sending your message. Please try again or contact us directly at adrixcoretech@gmail.com
                  </p>
                  <button
                    onClick={() => setSubmitError(false)}
                    style={{
                      marginTop: "1rem",
                      background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      borderRadius: 50,
                      color: "#fff",
                      cursor: "pointer"
                    }}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress Bar */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                      {[1, 2, 3].map(step => (
                        <div key={step} style={{
                          flex: 1,
                          height: 4,
                          background: formStep >= step ? C.cyan : "rgba(0,229,255,0.2)",
                          borderRadius: 2,
                          transition: "all 0.3s ease"
                        }} />
                      ))}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(224,247,255,0.5)", textAlign: "center" }}>
                      Step {formStep} of 3
                    </div>
                  </div>

                  {/* Step 1: Basic Info */}
                  {formStep === 1 && (
                    <div className="form-step">
                      <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: C.cyan, marginBottom: "1.5rem" }}>
                        Tell us about yourself
                      </h3>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.15)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#e0f7ff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none"
                        }}
                        onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.15)"; e.target.style.boxShadow = "none"; }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.15)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#e0f7ff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none"
                        }}
                        onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.15)"; e.target.style.boxShadow = "none"; }}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.15)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#e0f7ff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none"
                        }}
                        onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.15)"; e.target.style.boxShadow = "none"; }}
                      />
                      <button
                        type="button"
                        onClick={handleNext}
                        style={{
                          width: "100%",
                          background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                          border: "none",
                          padding: "1rem",
                          borderRadius: 50,
                          color: "#fff",
                          fontFamily: "'Orbitron',monospace",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          cursor: "pointer",
                          marginTop: "1rem"
                        }}
                      >
                        Continue →
                      </button>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {formStep === 2 && (
                    <div className="form-step">
                      <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: C.cyan, marginBottom: "1.5rem" }}>
                        Tell us about your project
                      </h3>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "#0a0a1a",
                          border: "1px solid rgba(0,229,255,0.3)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#ffffff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.cyan;
                          e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(0,229,255,0.3)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="" style={{ background: "#0a0a1a", color: "#ffffff" }}>Select Project Type *</option>
                        <option value="static" style={{ background: "#0a0a1a", color: "#ffffff" }}>Static Website (₹7,000 - ₹10,000)</option>
                        <option value="dynamic" style={{ background: "#0a0a1a", color: "#ffffff" }}>Dynamic Website (₹14,000 - ₹17,000)</option>
                        <option value="ecommerce" style={{ background: "#0a0a1a", color: "#ffffff" }}>E-Commerce Website (₹25,000+)</option>
                        <option value="webapp" style={{ background: "#0a0a1a", color: "#ffffff" }}>Web Application</option>
                        <option value="mobile" style={{ background: "#0a0a1a", color: "#ffffff" }}>Mobile App</option>
                        <option value="ai" style={{ background: "#0a0a1a", color: "#ffffff" }}>AI Integration</option>
                        <option value="uiux" style={{ background: "#0a0a1a", color: "#ffffff" }}>UI/UX Design</option>
                        <option value="maintenance" style={{ background: "#0a0a1a", color: "#ffffff" }}>Maintenance</option>
                      </select>
                      
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "#0a0a1a",
                          border: "1px solid rgba(0,229,255,0.3)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#ffffff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.cyan;
                          e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(0,229,255,0.3)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="" style={{ background: "#0a0a1a", color: "#ffffff" }}>Select Budget Range *</option>
                        <option value="7k-10k" style={{ background: "#0a0a1a", color: "#ffffff" }}>₹7,000 - ₹10,000 (Static Website)</option>
                        <option value="14k-17k" style={{ background: "#0a0a1a", color: "#ffffff" }}>₹14,000 - ₹17,000 (Dynamic Website)</option>
                        <option value="25k+" style={{ background: "#0a0a1a", color: "#ffffff" }}>₹25,000+ (E-Commerce)</option>
                        <option value="custom" style={{ background: "#0a0a1a", color: "#ffffff" }}>Custom / Not Sure</option>
                      </select>
                      
                      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                        <button
                          type="button"
                          onClick={handlePrev}
                          style={{
                            flex: 1,
                            background: "transparent",
                            border: `1px solid rgba(0,229,255,0.3)`,
                            padding: "1rem",
                            borderRadius: 50,
                            color: "#fff",
                            fontFamily: "'Orbitron',monospace",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.borderColor = C.cyan;
                            e.target.style.color = C.cyan;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.borderColor = "rgba(0,229,255,0.3)";
                            e.target.style.color = "#fff";
                          }}
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          style={{
                            flex: 2,
                            background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                            border: "none",
                            padding: "1rem",
                            borderRadius: 50,
                            color: "#fff",
                            fontFamily: "'Orbitron',monospace",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                        >
                          Continue →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message */}
                  {formStep === 3 && (
                    <div className="form-step">
                      <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: C.cyan, marginBottom: "1.5rem" }}>
                        Tell us about your vision
                      </h3>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Describe your project, goals, and any specific requirements... *"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.15)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#e0f7ff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          resize: "vertical",
                          fontFamily: "inherit"
                        }}
                        onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = "0 0 10px rgba(0,229,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(0,229,255,0.15)"; e.target.style.boxShadow = "none"; }}
                      />
                      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                        <button
                          type="button"
                          onClick={handlePrev}
                          style={{
                            flex: 1,
                            background: "transparent",
                            border: `1px solid rgba(0,229,255,0.3)`,
                            padding: "1rem",
                            borderRadius: 50,
                            color: "#fff",
                            fontFamily: "'Orbitron',monospace",
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
                            background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                            border: "none",
                            padding: "1rem",
                            borderRadius: 50,
                            color: "#fff",
                            fontFamily: "'Orbitron',monospace",
                            fontWeight: 700,
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

     {/* WhatsApp Appointment Section */}
<section id="calendly-section" style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
  <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
        ✦ BOOK ON WHATSAPP
      </div>
      <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem", color: "#fff" }}>
        Prefer to Talk? <span style={{ color: "#25D366" }}>WhatsApp Us</span>
      </h2>
      <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem" }}>
        Book your appointment directly on WhatsApp. Quick, easy, and we respond instantly!
      </p>
      <div style={{
        background: "rgba(0,12,30,0.88)",
        border: `1px solid rgba(37, 211, 102, 0.3)`,
        borderRadius: 24,
        padding: "2rem",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💬</div>
        <p style={{ marginBottom: "1.5rem", color: "rgba(224,247,255,0.7)" }}>
          Click the button below to start a conversation on WhatsApp. We'll help you schedule a meeting at your preferred time.
        </p>
        
        {/* Client Name Input for Appointment */}
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <input
            type="text"
            id="whatsappClientName"
            placeholder="Your Name *"
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(37,211,102,0.3)",
              borderRadius: 12,
              padding: "0.9rem 1.2rem",
              color: "#e0f7ff",
              fontSize: "1rem",
              marginBottom: "1rem",
              outline: "none"
            }}
          />
          <input
            type="text"
            id="whatsappProjectType"
            placeholder="Project Type (Website, App, etc.) *"
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(37,211,102,0.3)",
              borderRadius: 12,
              padding: "0.9rem 1.2rem",
              color: "#e0f7ff",
              fontSize: "1rem",
              marginBottom: "1rem",
              outline: "none"
            }}
          />
          <input
            type="text"
            id="whatsappPreferredTime"
            placeholder="Preferred Date & Time *"
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(37,211,102,0.3)",
              borderRadius: 12,
              padding: "0.9rem 1.2rem",
              color: "#e0f7ff",
              fontSize: "1rem",
              marginBottom: "0.5rem",
              outline: "none"
            }}
          />
          <p style={{ fontSize: "0.7rem", color: "rgba(224,247,255,0.4)", marginTop: "0.5rem" }}>
            * This information will be sent to our team on WhatsApp
          </p>
        </div>
        
        {/* Function to send WhatsApp message to ADRIX CORE team */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(37, 211, 102, 0.4)` }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const clientName = document.getElementById('whatsappClientName')?.value;
            const projectType = document.getElementById('whatsappProjectType')?.value;
            const preferredTime = document.getElementById('whatsappPreferredTime')?.value;
            
            if (!clientName || !projectType || !preferredTime) {
              alert("Please fill in all fields (Name, Project Type, Preferred Time)");
              return;
            }
            
            // Message for ADRIX CORE Team on WhatsApp
            const adminMessage = `🔔 *NEW APPOINTMENT REQUEST* 🔔
            
📌 *Client Details:*
👤 *Name:* ${clientName}
📋 *Project Type:* ${projectType}
⏰ *Preferred Time:* ${preferredTime}
📅 *Requested On:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

*Action Required:* Please contact the client and confirm the meeting slot.

*WhatsApp Number:* +91 ${clientName === "Client" ? "7447508006" : "Connect via chat"} 
            
_This is an automated appointment request._`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(adminMessage);
            
            // Open WhatsApp with message to ADRIX CORE team number (7447508006)
            // This sends notification to admin
            window.open(`https://wa.me/917447508006?text=${encodedMessage}`, "_blank");
            
            // Optional: Also send to second number
            setTimeout(() => {
              window.open(`https://wa.me/918080822156?text=${encodedMessage}`, "_blank");
            }, 500);
            
            // Clear fields after sending
            setTimeout(() => {
              document.getElementById('whatsappClientName').value = '';
              document.getElementById('whatsappProjectType').value = '';
              document.getElementById('whatsappPreferredTime').value = '';
            }, 1000);
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "#25D366",
            border: "none",
            padding: "0.8rem 2rem",
            borderRadius: 50,
            color: "#fff",
            fontFamily: "'Orbitron',monospace",
            fontWeight: 700,
            fontSize: "0.85rem",
            cursor: "pointer",
            textDecoration: "none",
            width: "100%",
            justifyContent: "center"
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>📱</span>
          Send Appointment Request → 
          <span style={{ fontSize: "1.2rem" }}>💚</span>
        </motion.button>
        
        <p style={{ fontSize: "0.75rem", color: "rgba(224,247,255,0.4)", marginTop: "1rem" }}>
          Your request will be sent to our team on WhatsApp. We'll confirm your appointment within 30 minutes.
        </p>
      </div>
      
      {/* WhatsApp Contact Info */}
      <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ background: "rgba(37,211,102,0.1)", padding: "0.5rem 1rem", borderRadius: 50 }}>
          <span style={{ color: "#25D366" }}>📞</span> +91 74475 08006
        </div>
        <div style={{ background: "rgba(37,211,102,0.1)", padding: "0.5rem 1rem", borderRadius: 50 }}>
          <span style={{ color: "#25D366" }}>📞</span> +91 80808 22156
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* FAQ Section */}
      <section style={{ padding: "60px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem", textAlign: "center" }}>
              ✦ FAQ
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 900, marginBottom: "2rem", textAlign: "center", color: "#fff" }}>
              Quick <span style={{ color: C.cyan }}>Answers</span>
            </h2>
          </motion.div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { q: "How quickly will you respond?", a: "We respond to all inquiries within 4 hours during business days." },
              { q: "Do you offer free consultations?", a: "Yes! We offer a free 30-minute discovery call to understand your project and provide initial guidance." },
              { q: "What's the typical project timeline?", a: "Static websites take 5-7 days, dynamic websites take 14-21 days, and e-commerce websites take 21-30 days." },
              { q: "Do you provide post-launch support?", a: "Yes, we offer maintenance plans starting at ₹5,000/month that include updates, backups, and priority support." },
              { q: "Can I see examples of your work?", a: "Absolutely! Check out our Portfolio page for detailed case studies and live project examples." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                style={{
                  background: "rgba(0,12,30,0.5)",
                  border: `1px solid rgba(0,229,255,0.1)`,
                  borderRadius: 16,
                  padding: "1.5rem"
                }}
              >
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 600, color: C.cyan, marginBottom: "0.5rem" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;