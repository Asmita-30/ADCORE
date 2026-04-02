// src/pages/Privacy.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
};

// Sections Data
const sections = [
  {
    id: 1,
    title: "Introduction",
    icon: "◎",
    content: `Welcome to Adrix Core. We are a technology agency based in India, specialising in Web Development, Mobile Application Development, UI/UX Design, AI Solutions, and SaaS Development. Our mission is to transform ideas into impactful digital products that drive measurable business growth for our clients.

This Privacy Policy has been prepared to inform you — our website visitors, prospective clients, and project partners — about how Adrix Core collects, uses, stores, and protects the personal information you share with us when you visit our website, submit inquiries, or engage with our services.

By accessing or using our website, submitting any contact or inquiry form, or communicating with us through any digital channel, you acknowledge that you have read, understood, and agreed to the terms set forth in this Privacy Policy. If you do not agree with this Policy, please refrain from using our website or submitting personal information.

This Policy applies to all information collected through our official website, contact forms, WhatsApp communication channels, email correspondence, and any other interactions you have with Adrix Core.`,
  },
  {
    id: 2,
    title: "Information We Collect",
    icon: "◈",
    content: "We collect only the information necessary to provide our services, respond to your inquiries, and improve your experience on our website. The categories of information we collect are as follows:",
    subsections: [
      {
        title: "2.1 Personal Identification Information",
        content: "When you fill out a contact form, project inquiry form, or consultation booking form on our website, we may collect:",
        list: [
          "Full name",
          "Email address",
          "Phone number",
          "Company or business name",
          "Designation or job title (if provided)",
        ],
      },
      {
        title: "2.2 Project and Business Information",
        content: "To understand your requirements and provide an accurate service proposal, we may collect:",
        list: [
          "Details of the project or service you are enquiring about",
          "Your business goals, timeline preferences, and approximate budget range",
          "Technical requirements, feature preferences, or design references submitted voluntarily",
          "Any attachments or documents you choose to share with us",
        ],
      },
      {
        title: "2.3 Communication Data",
        content: "If you contact us via WhatsApp, email, or any messaging tool linked on our website, we retain records of those communications, including your name, contact details, and the content of your messages, for the purpose of responding to you and maintaining accurate project records.",
      },
      {
        title: "2.4 Website Usage and Analytics Data",
        content: "We automatically collect certain non-personally identifiable information when you visit our website, including:",
        list: [
          "IP address and approximate geographic location",
          "Browser type, version, and operating system",
          "Pages visited, time spent on each page, and navigation patterns",
          "Referring URL (the website that directed you to ours)",
          "Device type and screen resolution",
        ],
        listFooter: "This data is collected through analytics tools and is used solely to understand website performance and visitor behaviour.",
      },
      {
        title: "2.5 Cookies and Browser Data",
        content: "Our website uses cookies and similar tracking technologies to enhance your browsing experience. Please refer to Section 5 of this Policy for a detailed explanation of our cookie usage.",
      },
    ],
  },
  {
    id: 3,
    title: "How We Use Your Information",
    icon: "⬡",
    content: "Adrix Core uses the information we collect strictly for legitimate business purposes. We do not use your information for any purpose not described in this Policy without your explicit consent. The specific purposes for which we use your information include:",
    list: [
      "To respond to your inquiries, questions, and service requests in a timely and accurate manner",
      "To discuss the scope, requirements, and feasibility of your proposed project",
      "To prepare and deliver service proposals, quotations, and project timelines",
      "To schedule and facilitate consultation calls or discovery meetings via tools such as Calendly",
      "To manage ongoing client relationships and project communications",
      "To improve the functionality, design, and content of our website based on usage analytics",
      "To monitor and analyse website traffic patterns and optimise user experience",
      "To send you relevant updates, newsletters, or promotional communications, strictly where you have provided your explicit consent",
      "To comply with applicable legal obligations and resolve any disputes that may arise",
    ],
    listFooter: "We will never use your personal information for automated profiling, unsolicited marketing, or any purpose that conflicts with the reason for which it was originally collected.",
  },
  {
    id: 4,
    title: "Data Sharing Policy",
    icon: "↔",
    content: "Adrix Core is committed to protecting the privacy of your personal data. We do not sell, trade, rent, or otherwise transfer your personal information to any third party for commercial gain.\n\nHowever, in order to deliver our services effectively and maintain our website infrastructure, we may share limited and necessary information with trusted third-party service providers, subject to strict confidentiality obligations. These providers include:",
    list: [
      "Website hosting and cloud infrastructure providers responsible for the secure operation of our website and servers",
      "Email service platforms used to manage and route client communication and inquiry responses",
      "Analytics service providers, such as Google Analytics, that help us understand website usage patterns",
      "Calendar and scheduling tools, such as Calendly, used to facilitate consultation bookings",
      "Project management and collaboration platforms used internally by our team",
    ],
    listFooter: "All third-party service providers engaged by Adrix Core are required to handle your data securely, use it only for the purposes for which it was shared, and comply with applicable data protection laws.\n\nWe may also disclose your information when required to do so by law, court order, government authority, or where necessary to protect the rights, property, or safety of Adrix Core, our clients, or others.",
  },
  {
    id: 5,
    title: "Cookies Policy",
    icon: "⬙",
    content: "Cookies are small text files that are stored on your device when you visit a website. They allow the website to remember your preferences and activity over time, enabling a more personalised and efficient browsing experience.\n\nOur website uses the following categories of cookies:",
    subsections: [
      {
        title: "5.1 Strictly Necessary Cookies",
        content: "These cookies are essential for the basic operation of our website. They enable core functionality such as page navigation, form submission, and security features. These cookies cannot be disabled without affecting the usability of the website.",
      },
      {
        title: "5.2 Analytics and Performance Cookies",
        content: "We use analytics cookies, including those provided by Google Analytics, to collect aggregated and anonymised data about how visitors interact with our website. This information includes pages visited, time on site, and traffic sources. No personally identifiable information is collected through these cookies.",
      },
      {
        title: "5.3 Preference and Functionality Cookies",
        content: "These cookies allow our website to remember your preferences — such as language settings or previously visited sections — to provide you with a more tailored experience on return visits.",
      },
      {
        title: "5.4 Managing Cookies",
        content: "You may choose to disable or delete cookies at any time through your browser settings. Please note that disabling certain cookies may impact the functionality of our website. For more information on managing cookies, please refer to your browser's help documentation.",
      },
    ],
  },
  {
    id: 6,
    title: "Data Security",
    icon: "⊛",
    content: "Adrix Core takes the security of your personal information seriously and implements reasonable and appropriate technical, administrative, and organisational measures to protect your data from unauthorised access, disclosure, alteration, loss, or destruction.\n\nOur security measures include, but are not limited to:",
    list: [
      "Use of HTTPS encryption across our website to protect data transmitted between your browser and our servers",
      "Restricted access to personal data, limited only to authorised team members who require it to fulfil their responsibilities",
      "Use of reputable third-party hosting and cloud platforms with robust security certifications and infrastructure",
      "Regular review and updating of our internal data handling procedures",
    ],
    listFooter: "While we strive to employ commercially acceptable means of protecting your personal information, please be aware that no method of transmission over the internet or electronic storage is entirely infallible. We cannot guarantee absolute security; however, we are committed to promptly addressing any breach or vulnerability should one arise.\n\nIn the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify affected individuals and relevant authorities in accordance with applicable legal requirements.",
  },
  {
    id: 7,
    title: "Third-Party Services",
    icon: "⊞",
    content: "Our website integrates with a number of third-party tools and services to enhance functionality, communication, and performance. These integrations are governed by their respective privacy policies, which we encourage you to review:",
    subsections: [
      {
        title: "7.1 Google Analytics",
        content: "We use Google Analytics to track and report on website traffic and user behaviour. Google Analytics collects information such as how often users visit our site, what pages they visit, and other websites they visited prior to arriving at ours. Google uses this data to provide us with aggregated reports on website usage.",
      },
      {
        title: "7.2 WhatsApp",
        content: "We offer WhatsApp as a direct communication channel for client inquiries. Any communication conducted via WhatsApp is subject to Meta's Privacy Policy. We retain WhatsApp correspondence solely for the purpose of client communication and project follow-up.",
      },
      {
        title: "7.3 Calendly and Scheduling Tools",
        content: "We use Calendly or similar scheduling platforms to facilitate the booking of discovery calls and consultation sessions. When you book an appointment through these tools, you may be required to provide your name, email address, and other scheduling preferences.",
      },
      {
        title: "7.4 Hosting Providers",
        content: "Our website and associated infrastructure are hosted on reputable cloud platforms. These providers store and process data on our behalf and are bound by strict data processing agreements and applicable data protection regulations.\n\nWe are not responsible for the privacy practices of third-party services and encourage users to review the relevant privacy policies of any external platform they interact with.",
      },
    ],
  },
  {
    id: 8,
    title: "Your Rights",
    icon: "✦",
    content: "As an individual whose personal data we process, you are entitled to certain rights with respect to your information. Adrix Core is committed to honouring these rights in a timely and transparent manner:",
    subsections: [
      {
        title: "8.1 Right to Access",
        content: "You have the right to request a copy of the personal information we hold about you, along with information about how it is being used and with whom it has been shared.",
      },
      {
        title: "8.2 Right to Correction",
        content: "If any personal information we hold about you is inaccurate, incomplete, or outdated, you have the right to request that we correct or update it.",
      },
      {
        title: "8.3 Right to Deletion",
        content: "You may request the deletion of your personal information from our records, subject to certain legal obligations that may require us to retain specific data for a defined period.",
      },
      {
        title: "8.4 Right to Withdraw Consent",
        content: "Where we process your personal information on the basis of your consent — for example, for marketing communications — you have the right to withdraw that consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.",
      },
      {
        title: "8.5 Right to Object",
        content: "You have the right to object to the processing of your personal information for direct marketing purposes or where processing is based on our legitimate interests.\n\nTo exercise any of the above rights, please contact us using the details provided in Section 9 of this Policy. We will respond to all valid requests within a reasonable timeframe, and in any event within 30 days of receipt.",
      },
    ],
  },
  {
    id: 9,
    title: "Contact Information",
    icon: "◎",
    isContact: true,
  },
  {
    id: 10,
    title: "Updates to This Privacy Policy",
    icon: "↺",
    content: `Adrix Core reserves the right to update, modify, or revise this Privacy Policy at any time to reflect changes in our business practices, legal obligations, or applicable regulations. Any revisions will take effect immediately upon publication of the updated Policy on our website.

The 'Last Updated' date displayed at the top of this document will be revised each time a material change is made to the Policy. We encourage you to review this page periodically to remain informed about how we are protecting your information.

Where changes are significant and materially affect the way we handle your personal data, we will make reasonable efforts to notify you directly — for example, by sending an email notification or displaying a prominent notice on our website.

Your continued use of our website or services following the publication of any updated Privacy Policy constitutes your acceptance of those changes.`,
  },
];

const contactDetails = [
  { label: "Company Name", value: "Adrix Core" },
  { label: "Business Type", value: "Technology & Software Development Agency" },
  { label: "Location", value: "Navi Mumbai, Maharashtra, India" },
  { label: "Email", value: "adrixcoretech@gmail.com", isEmail: true },
  { label: "Phone", value: "+91 74475 08006", isPhone: true },
  { label: "Alternate Phone", value: "+91 80808 22156", isPhone: true },
  { label: "Website", value: "www.adrixcore.com", isLink: true },
];

function Privacy() {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .privacy-content h2 {
          color: #00e5ff;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Orbitron', monospace;
          font-size: 1.5rem;
        }
        .privacy-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: rgba(224,247,255,0.8);
        }
        
        .pp-section {
          background: rgba(0,12,30,0.5);
          border: 1px solid rgba(0,229,255,0.1);
          border-radius: 16px;
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .pp-section:hover {
          border-color: rgba(0,229,255,0.3);
        }
        .pp-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.5rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .pp-section-header:hover {
          background: rgba(0,229,255,0.03);
        }
        .pp-section-icon {
          font-size: 1.2rem;
          color: #00e5ff;
          width: 30px;
        }
        .pp-section-num {
          font-family: 'Orbitron', monospace;
          font-size: 0.8rem;
          color: rgba(0,229,255,0.5);
          min-width: 35px;
        }
        .pp-section-title {
          font-family: 'Orbitron', monospace;
          font-weight: 600;
          font-size: 1rem;
          color: #ffffff;
          flex: 1;
        }
        .pp-chevron {
          color: rgba(0,229,255,0.5);
          transition: transform 0.3s;
          font-size: 0.8rem;
        }
        .pp-section.open .pp-chevron {
          transform: rotate(180deg);
          color: #00e5ff;
        }
        .pp-section-body {
          padding: 0 1.5rem 1.5rem 4rem;
          border-top: 1px solid rgba(0,229,255,0.1);
        }
        .pp-body-text {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(224,247,255,0.7);
          margin-bottom: 1rem;
          white-space: pre-line;
        }
        .pp-list {
          list-style: none;
          margin: 0.8rem 0;
        }
        .pp-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(224,247,255,0.7);
          margin-bottom: 0.5rem;
        }
        .pp-list li::before {
          content: "▹";
          color: #00e5ff;
          font-size: 0.8rem;
        }
        .pp-subsection {
          margin-bottom: 1.2rem;
        }
        .pp-subsection-title {
          font-family: 'Orbitron', monospace;
          font-size: 0.85rem;
          font-weight: 600;
          color: #00e5ff;
          margin-bottom: 0.5rem;
        }
        .pp-subsection-text {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(224,247,255,0.7);
          white-space: pre-line;
        }
        .pp-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        .pp-contact-item {
          background: rgba(0,229,255,0.05);
          border: 1px solid rgba(0,229,255,0.1);
          border-radius: 12px;
          padding: 1rem;
        }
        .pp-contact-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(0,229,255,0.6);
          margin-bottom: 0.3rem;
        }
        .pp-contact-value {
          font-size: 0.9rem;
          color: rgba(224,247,255,0.9);
        }
        .pp-contact-value a {
          color: #00e5ff;
          text-decoration: none;
        }
        .pp-contact-value a:hover {
          text-decoration: underline;
        }
        .pp-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #00e5ff, #6d5cff);
          z-index: 1000;
          transition: width 0.1s linear;
        }
        @media (max-width: 768px) {
          .pp-section-body {
            padding: 0 1rem 1rem 1rem;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div 
        className="pp-progress" 
        style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      />

      {/* Hero Section with Image */}
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
        {/* Background decorative gradients */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(0,229,255,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 60%, rgba(109,92,255,0.06) 0%, transparent 50%)`,
          pointerEvents: "none"
        }} />
        
        <motion.div style={{ opacity, scale }} className="hero-animate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}
            >
              ✦ PRIVACY & PROTECTION
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              Privacy <span style={{ color: C.cyan }}>Policy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1rem", color: "rgba(224,247,255,0.6)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              Effective Date: March 31, 2026 &nbsp;|&nbsp; Last Updated: March 31, 2026
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "40px 2rem 80px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {sections.map((s) => {
            const isOpen = openSections.has(s.id);
            return (
              <div key={s.id} className={`pp-section ${isOpen ? "open" : ""}`}>
                <div className="pp-section-header" onClick={() => toggleSection(s.id)}>
                  <span className="pp-section-icon">{s.icon}</span>
                  <span className="pp-section-num">{String(s.id).padStart(2, "0")}</span>
                  <span className="pp-section-title">{s.title}</span>
                  <span className="pp-chevron">▼</span>
                </div>

                {isOpen && (
                  <div className="pp-section-body">
                    {s.isContact ? (
                      <div className="pp-contact-grid">
                        {contactDetails.map((c, i) => (
                          <div className="pp-contact-item" key={i}>
                            <div className="pp-contact-label">{c.label}</div>
                            <div className="pp-contact-value">
                              {c.isEmail ? (
                                <a href={`mailto:${c.value}`}>{c.value}</a>
                              ) : c.isPhone ? (
                                <a href={`tel:${c.value.replace(/\s/g, "")}`}>{c.value}</a>
                              ) : c.isLink ? (
                                <a href={`https://${c.value}`} target="_blank" rel="noopener noreferrer">{c.value}</a>
                              ) : (
                                c.value
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {s.content && <p className="pp-body-text">{s.content}</p>}
                        
                        {s.subsections && s.subsections.map((sub, i) => (
                          <div className="pp-subsection" key={i}>
                            <div className="pp-subsection-title">{sub.title}</div>
                            {sub.content && <p className="pp-subsection-text">{sub.content}</p>}
                            {sub.list && (
                              <ul className="pp-list">
                                {sub.list.map((item, j) => <li key={j}>{item}</li>)}
                              </ul>
                            )}
                            {sub.listFooter && <p className="pp-subsection-text">{sub.listFooter}</p>}
                          </div>
                        ))}

                        {s.list && (
                          <ul className="pp-list">
                            {s.list.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        )}
                        {s.listFooter && <p className="pp-body-text">{s.listFooter}</p>}
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Privacy;