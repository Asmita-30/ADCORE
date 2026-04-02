// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ParticleCanvas from "../components/ParticleCanvas";
// import ScanLines from "../components/ScanLines";
// import WhatsApp from "../components/WhatsApp";

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
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message) {
      alert("Please tell us about your project");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
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
    }, 1500);
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

      {/* Background Components */}
      <ParticleCanvas />
      <ScanLines />
      <Navbar />
      <WhatsApp />

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
                    Thanks for reaching out. We'll get back to you within 4 hours.
                  </p>
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
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.15)",
                          borderRadius: 12,
                          padding: "0.9rem 1.2rem",
                          color: "#e0f7ff",
                          fontSize: "1rem",
                          marginBottom: "1rem",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      >
                        <option value="">Select Project Type *</option>
                        <option value="static">Static Website</option>
                        <option value="dynamic">Dynamic Website</option>
                        <option value="ecommerce">E-Commerce Website</option>
                        <option value="webapp">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="ai">AI Integration</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                      <select
                        name="budget"
                        value={formData.budget}
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
                          cursor: "pointer"
                        }}
                      >
                        <option value="">Select Budget Range *</option>
                        <option value="7k-10k">₹7,000 - ₹10,000</option>
                        <option value="14k-17k">₹14,000 - ₹17,000</option>
                        <option value="25k+">₹25,000+</option>
                        <option value="custom">Custom / Not Sure</option>
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
                            cursor: "pointer"
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
                            cursor: "pointer"
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

      {/* Calendly Section */}
      <section id="calendly-section" style={{ padding: "60px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>
              ✦ BOOK A CALL
            </div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem", color: "#fff" }}>
              Prefer to Talk?
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "2rem" }}>
              Book a 30-minute discovery call. We'll discuss your project and answer any questions.
            </p>
            <div style={{
              background: "rgba(0,12,30,0.88)",
              border: `1px solid rgba(0,229,255,0.2)`,
              borderRadius: 24,
              padding: "2rem",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
              <p style={{ marginBottom: "1.5rem", color: "rgba(224,247,255,0.7)" }}>
                Select a time that works for you. We'll send a calendar invite with video call details.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(0,229,255,0.4)` }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://calendly.com/adrixcoretech", "_blank")}
                style={{
                  background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: 50,
                  color: "#fff",
                  fontFamily: "'Orbitron',monospace",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Book a Free Call →
              </motion.button>
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Contact;