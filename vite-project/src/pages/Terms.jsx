// src/pages/Terms.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── DESIGN SYSTEM (Consistent with Home page) ──────────────────────────────
const C = {
  blue: "#2563EB",
  blueHover: "#3B82F6",
  blueDark: "#1D4ED8",
  cyan: "#06B6D4",
  surface: "#111827",
  surfaceHover: "#1E293B",
  border: "#1F2A3D",
  textPrimary: "#F0F4FF",
  textLead: "#CBD5E1",
  textBody: "#94A3B8",
  textMuted: "#64748B",
  bg: "#0A0F1E",
  codeBg: "#0F172A",
};

// Sections Data
const sections = [
  {
    id: 1,
    title: "Acceptance of Terms",
    icon: "✦",
    content: `These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client", "User", or "You") and Adrix Core ("Company", "We", "Us", or "Our"), a technology agency registered and operating in India, specialising in Web Development, Mobile Application Development, UI/UX Design, AI Solutions, and SaaS Development.

By accessing our website, submitting an inquiry, engaging our services, or entering into a project agreement with Adrix Core, you confirm that you have read, understood, and unconditionally agreed to be bound by these Terms and all applicable laws and regulations.

If you are entering into these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. If you do not agree with any part of these Terms, you must not use our website or engage our services.

Adrix Core reserves the right to update, amend, or replace these Terms at any time. The most current version will always be published on our website. Continued use of our services following any such update constitutes acceptance of the revised Terms.`,
  },
  {
    id: 2,
    title: "Services Offered",
    icon: "◈",
    content: `Adrix Core provides the following professional technology services to individuals, startups, and businesses:`,
    list: [
      "Custom Website Design and Development",
      "Mobile Application Development (iOS, Android, and Cross-Platform)",
      "UI/UX Design and Prototyping",
      "Artificial Intelligence (AI) Integration and Chatbot Development",
      "Software as a Service (SaaS) Product Development",
      "E-Commerce Website Development",
      "Website Maintenance, Support, and Performance Optimisation",
      "Digital Consultation and Technical Advisory Services",
    ],
    listFooter: "The specific scope of services to be delivered will be defined in a separate Project Agreement, Statement of Work (SOW), or Service Proposal mutually agreed upon by both parties prior to commencement of any work.",
  },
  {
    id: 3,
    title: "Project Engagement & Agreement",
    icon: "⬡",
    subsections: [
      {
        title: "3.1 Discovery and Proposal",
        content: "Prior to commencing any project, Adrix Core will conduct a discovery consultation to understand your requirements. Following this, we will provide a written project proposal outlining the scope of work, deliverables, timeline, and pricing. The project commences only upon your written acceptance of the proposal and receipt of the agreed initial payment.",
      },
      {
        title: "3.2 Scope of Work",
        content: "The agreed scope of work is documented in the project proposal or Statement of Work. Any requests for features, pages, screens, or functionalities beyond the agreed scope will be treated as change requests and may be subject to additional charges and revised timelines.",
      },
      {
        title: "3.3 Client Responsibilities",
        content: "The Client agrees to provide all necessary materials, content, assets, credentials, and feedback required for project completion in a timely manner. Delays caused by the Client's failure to provide required inputs may result in revised project timelines and additional costs.",
      },
      {
        title: "3.4 Project Timelines",
        content: "Project timelines are estimated based on the agreed scope and are provided in good faith. Adrix Core will make every reasonable effort to meet agreed deadlines. However, timelines may be subject to revision in the event of scope changes, delayed client feedback, or circumstances beyond our control.",
      },
    ],
  },
  {
    id: 4,
    title: "Payment Terms",
    icon: "◇",
    subsections: [
      {
        title: "4.1 Payment Structure",
        content: "Unless otherwise agreed, the standard payment structure is: 50% of the total project fee is payable upfront before commencement of any work. Remaining 50% is payable upon project completion, prior to final delivery or deployment.",
      },
      {
        title: "4.2 Invoicing",
        content: "All invoices issued by Adrix Core are payable within seven (7) business days of the invoice date. Invoices will be issued in Indian Rupees (INR) for domestic clients.",
      },
      {
        title: "4.3 Late Payments",
        content: "In the event of non-payment or delayed payment, Adrix Core reserves the right to suspend work on the project until outstanding amounts are settled. Interest may be charged on overdue amounts.",
      },
      {
        title: "4.4 Non-Refundable Advance",
        content: "The initial advance payment is non-refundable once work has commenced. In the event of Client-initiated project cancellation after commencement, the advance payment will be forfeited.",
      },
      {
        title: "4.5 Taxes",
        content: "All fees quoted are exclusive of applicable taxes. Goods and Services Tax (GST) and any other applicable statutory levies will be charged as required by Indian law.",
      },
    ],
  },
  {
    id: 5,
    title: "Intellectual Property Rights",
    icon: "❖",
    subsections: [
      {
        title: "5.1 Ownership Upon Full Payment",
        content: "Upon receipt of full and final payment, Adrix Core assigns to the Client all intellectual property rights in the custom deliverables created specifically for that project.",
      },
      {
        title: "5.2 Retention of Rights Prior to Full Payment",
        content: "Until full payment has been received, Adrix Core retains all intellectual property rights in all work product, deliverables, code, and designs produced in connection with the project.",
      },
      {
        title: "5.3 Third-Party Components",
        content: "Our deliverables may incorporate third-party open-source libraries, frameworks, fonts, stock assets, or software components. Such components remain subject to their respective third-party licences.",
      },
      {
        title: "5.4 Portfolio Rights",
        content: "Unless the Client explicitly requests confidentiality in writing, Adrix Core reserves the right to feature completed projects in its portfolio, website, and marketing materials.",
      },
    ],
  },
  {
    id: 6,
    title: "Confidentiality",
    icon: "◉",
    content: `Both parties acknowledge that in the course of a project engagement, they may have access to confidential information belonging to the other party. Each party agrees to maintain the strict confidentiality of all such information, to use it solely for the purposes of fulfilling obligations under the project agreement, and not to disclose it to any third party without prior written consent.

This obligation of confidentiality shall survive the termination or completion of any project engagement and shall remain in effect for a period of three (3) years thereafter.`,
  },
  {
    id: 7,
    title: "Revisions & Post-Launch Support",
    icon: "↺",
    subsections: [
      {
        title: "7.1 Revisions During Development",
        content: "Each project proposal specifies the number of revision rounds included within the quoted fee. A 'revision round' is defined as a consolidated set of feedback submitted in a single communication.",
      },
      {
        title: "7.2 Additional Revisions",
        content: "Revision requests that exceed the agreed number of rounds, or that constitute changes to the agreed scope, will be quoted separately and charged at our prevailing hourly rate.",
      },
      {
        title: "7.3 Post-Launch Support",
        content: "Adrix Core provides a complimentary bug-fix support period of thirty (30) days following the official launch or delivery of a project.",
      },
      {
        title: "7.4 Ongoing Maintenance",
        content: "Beyond the complimentary support period, ongoing maintenance, updates, and support services are available under a separate Monthly Maintenance Retainer agreement.",
      },
    ],
  },
  {
    id: 8,
    title: "Warranties & Disclaimers",
    icon: "⊛",
    subsections: [
      {
        title: "8.1 Our Warranties",
        content: "Adrix Core warrants that all services will be performed with reasonable skill, care, and professionalism, in accordance with industry best practices.",
      },
      {
        title: "8.2 No Guarantee of Specific Outcomes",
        content: "Adrix Core makes no warranty that the delivery of any website, application, or digital product will result in specific business outcomes, revenue growth, or increased traffic.",
      },
      {
        title: "8.3 Third-Party Platforms",
        content: "Adrix Core is not responsible for the performance, availability, pricing, or policy changes of third-party platforms, services, or APIs.",
      },
    ],
  },
  {
    id: 9,
    title: "Limitation of Liability",
    icon: "⊘",
    content: `To the maximum extent permitted by applicable law, Adrix Core's total liability to the Client for any claim arising out of or relating to a project engagement shall not exceed the total fees paid by the Client to Adrix Core in connection with that specific project.

In no event shall Adrix Core be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of revenue, loss of data, or business interruption.`,
  },
  {
    id: 10,
    title: "Termination",
    icon: "⊗",
    subsections: [
      {
        title: "10.1 Termination by Client",
        content: "The Client may terminate a project engagement by providing written notice. The Client shall remain liable for payment of all fees for work completed up to the date of termination.",
      },
      {
        title: "10.2 Termination by Adrix Core",
        content: "Adrix Core reserves the right to terminate a project engagement in the event of material breach, non-payment, or abusive conduct.",
      },
      {
        title: "10.3 Effect of Termination",
        content: "Upon termination, each party shall promptly return or destroy confidential information belonging to the other party. Adrix Core will deliver all completed work product subject to receipt of all outstanding payments.",
      },
    ],
  },
  {
    id: 11,
    title: "Governing Law",
    icon: "⚖",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.`,
  },
  {
    id: 12,
    title: "Contact Information",
    icon: "◎",
    isContact: true,
  },
];

const contactDetails = [
  { label: "Company Name", value: "Adrix Core" },
  { label: "Email", value: "adrixcoretech@gmail.com", isEmail: true },
  { label: "Phone", value: "+91 74475 08006", isPhone: true },
  { label: "Alternate Phone", value: "+91 80808 22156", isPhone: true },
  { label: "Location", value: "Navi Mumbai, Maharashtra, India" },
  { label: "Website", value: "www.adrixcore.com", isLink: true },
];

function Terms() {
  const heroRef = useRef();
  const [openSections, setOpenSections] = useState(new Set([1]));
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current.querySelectorAll(".hero-animate"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Section animations
    gsap.fromTo(".tnc-section", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, scrollTrigger: { trigger: ".tnc-container", start: "top 80%" } }
    );
  }, []);

  const toggleSection = (id) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "50vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 60px",
        background: C.bg,
        overflow: "hidden"
      }}>
        {/* Background decorative gradient */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(37,99,235,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 60%, rgba(6,182,212,0.06) 0%, transparent 50%)`,
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-block",
                background: "#1E3A5F",
                borderRadius: 20,
                padding: "0.3rem 1rem",
                fontSize: "0.75rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: C.blueHover,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              ✦ LEGAL AGREEMENT
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: C.textPrimary,
                lineHeight: 1.2,
              }}
            >
              Terms &{" "}
              <span style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Conditions
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: "1rem",
                color: C.textBody,
                lineHeight: 1.6,
                maxWidth: 700,
                margin: "0 auto"
              }}
            >
              Effective Date: March 31, 2026 &nbsp;|&nbsp; Last Updated: March 31, 2026
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="tnc-container" style={{ padding: "40px 2rem 80px", position: "relative", zIndex: 2, background: C.surface }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {sections.map((s) => {
            const isOpen = openSections.has(s.id);
            return (
              <motion.div 
                key={s.id} 
                className={`tnc-section ${isOpen ? "open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: s.id * 0.03, duration: 0.4 }}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  marginBottom: "1rem",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <div 
                  className="tnc-section-header" 
                  onClick={() => toggleSection(s.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.2rem 1.5rem",
                    cursor: "pointer",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.surfaceHover }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
                >
                  <span style={{ fontSize: "1.2rem", color: C.blue, width: "30px" }}>{s.icon}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: C.textMuted,
                    minWidth: "35px"
                  }}>{String(s.id).padStart(2, "0")}</span>
                  <span style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: C.textPrimary,
                    flex: 1
                  }}>{s.title}</span>
                  <span style={{
                    color: C.textMuted,
                    transition: "transform 0.3s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    fontSize: "0.8rem"
                  }}>▼</span>
                </div>

                {isOpen && (
                  <div style={{
                    padding: "0 1.5rem 1.5rem 4rem",
                    borderTop: `1px solid ${C.border}`
                  }}>
                    {s.isContact ? (
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "1rem"
                      }}>
                        {contactDetails.map((c, i) => (
                          <div key={i} style={{
                            background: C.surface,
                            border: `1px solid ${C.border}`,
                            borderRadius: 12,
                            padding: "1rem"
                          }}>
                            <div style={{
                              fontSize: "0.7rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: C.textMuted,
                              marginBottom: "0.3rem"
                            }}>{c.label}</div>
                            <div style={{
                              fontSize: "0.9rem",
                              color: C.textBody
                            }}>
                              {c.isEmail ? (
                                <a href={`mailto:${c.value}`} style={{ color: C.blue, textDecoration: "none" }}>{c.value}</a>
                              ) : c.isPhone ? (
                                <a href={`tel:${c.value.replace(/\s/g, "")}`} style={{ color: C.blue, textDecoration: "none" }}>{c.value}</a>
                              ) : c.isLink ? (
                                <a href={`https://${c.value}`} target="_blank" rel="noopener noreferrer" style={{ color: C.blue, textDecoration: "none" }}>{c.value}</a>
                              ) : (
                                c.value
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {s.content && (
                          <p style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                            color: C.textBody,
                            marginBottom: "1rem",
                            whiteSpace: "pre-line"
                          }}>{s.content}</p>
                        )}
                        {s.list && (
                          <ul style={{
                            listStyle: "none",
                            margin: "0.8rem 0",
                            padding: 0
                          }}>
                            {s.list.map((item, i) => (
                              <li key={i} style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.6rem",
                                fontSize: "0.9rem",
                                lineHeight: 1.6,
                                color: C.textBody,
                                marginBottom: "0.5rem"
                              }}>
                                <span style={{ color: C.blue, fontSize: "0.8rem" }}>▹</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {s.listFooter && (
                          <p style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                            color: C.textBody,
                            marginBottom: "1rem"
                          }}>{s.listFooter}</p>
                        )}
                        {s.subsections && s.subsections.map((sub, i) => (
                          <div key={i} style={{ marginBottom: "1.2rem" }}>
                            <div style={{
                              fontFamily: "'Sora', sans-serif",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              color: C.blue,
                              marginBottom: "0.5rem"
                            }}>{sub.title}</div>
                            <p style={{
                              fontSize: "0.9rem",
                              lineHeight: 1.7,
                              color: C.textBody
                            }}>{sub.content}</p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Terms;