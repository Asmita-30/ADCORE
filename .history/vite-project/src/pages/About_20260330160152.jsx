// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import images
import missionImg from "../assets/images/mission.png";
import visionImg from "../assets/images/vision.jpeg";
import valuesImg from "../assets/images/coding.jpeg";
import teamImg from "../assets/images/team.jpeg";

// Import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleCanvas from "../components/ParticleCanvas";
import ScanLines from "../components/ScanLines";
import WhatsApp from "../components/WhatsApp";

const C = {
  cyan: "#00e5ff",
  blue: "#007bff",
  purple: "#6d5cff",
  pink: "#ff5c8a",
  dark: "#020408",
  dark2: "#050a15",
};

function About() {
  const sectionRef = useRef();
  const heroRef = useRef();
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
    const sections = ["who-we-are", "vision", "mission", "values", "roadmap"];
    sections.forEach((section, index) => {
      gsap.fromTo(`#${section} .section-content`, 
        { opacity: 0, y: 60 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, scrollTrigger: { trigger: `#${section}`, start: "top 75%" } }
      );
      gsap.fromTo(`#${section} .section-image`, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 0.8, delay: index * 0.1 + 0.2, scrollTrigger: { trigger: `#${section}`, start: "top 75%" } }
      );
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        .gradient-text {
          background: linear-gradient(135deg, #fff 40%, #00e5ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-border {
          transition: all 0.3s ease;
        }
        .glow-border:hover {
          box-shadow: 0 0 30px rgba(0,229,255,0.2);
          border-color: #00e5ff;
        }
      `}</style>

      {/* Background Components */}
      <ParticleCanvas />
      <ScanLines />
      <Navbar />
      <WhatsApp />

      {/* Hero Section */}
      <section ref={heroRef} style={{ 
        minHeight: "60vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        padding: "120px 2rem 80px",
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
              ✦ ABOUT ADRIX CORE
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}
            >
              Engineering Precision <br />
              <span style={{ color: C.cyan }}>Meets Design Excellence</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: "1.1rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}
            >
              We exist at the intersection of engineering precision and design excellence — building digital products that are fast, scalable, and built to matter.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* WHO WE ARE Section */}
      <section id="who-we-are" style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <motion.div className="section-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>01 — WHO WE ARE</div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}>
                About <span style={{ color: C.cyan }}>Adrix Core</span>
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.8)", marginBottom: "1rem" }}>
                Adrix Core is a full-stack technology and innovation studio headquartered in Mumbai, India. We exist at the intersection of engineering precision and design excellence — building digital products that are fast, scalable, and built to matter.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.7)", marginBottom: "1rem" }}>
                Founded by a two-time national Smart India Hackathon champion and Computer Engineering graduate, Adrix Core was created to solve a real market failure: too many businesses were settling for generic, slow, and forgettable digital products. We build the opposite.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                <div style={{ background: "rgba(0,229,255,0.1)", padding: "0.5rem 1rem", borderRadius: 8, border: `1px solid ${C.cyan}` }}>
                  <span style={{ color: C.cyan, fontWeight: 700 }}>200+</span> Projects Delivered
                </div>
                <div style={{ background: "rgba(0,229,255,0.1)", padding: "0.5rem 1rem", borderRadius: 8, border: `1px solid ${C.cyan}` }}>
                  <span style={{ color: C.cyan, fontWeight: 700 }}>98%</span> Client Satisfaction
                </div>
                <div style={{ background: "rgba(0,229,255,0.1)", padding: "0.5rem 1rem", borderRadius: 8, border: `1px solid ${C.cyan}` }}>
                  <span style={{ color: C.cyan, fontWeight: 700 }}>24/7</span> Support
                </div>
              </div>
            </motion.div>
            <motion.div className="section-image" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ 
                borderRadius: 20, 
                overflow: "hidden", 
                border: `1px solid ${C.cyan}`,
                boxShadow: `0 0 40px rgba(0,229,255,0.2)`,
                height: 400
              }}>
                <img 
                  src={teamImg} 
                  alt="Adrix Core Team" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "https://placehold.co/600x400/0a0a2a/00e5ff?text=Team+Photo"; }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>✦ WHAT WE DO</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "3rem", color: "#fff" }}>
              Our Core <span style={{ color: C.cyan }}>Capabilities</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Web App Development", desc: "Custom web applications powered by Java, Spring Boot, React, and TypeScript", icon: "🌐" },
              { title: "Mobile Applications", desc: "Cross-platform mobile apps built with React Native and Expo", icon: "📱" },
              { title: "UI/UX Design", desc: "Design systems crafted in Figma with user-centered methodology", icon: "🎨" },
              { title: "AI Integration", desc: "Native AI features using LLMs, Claude API, and intelligent automation", icon: "🧠" },
              { title: "SaaS Development", desc: "End-to-end SaaS product development from idea to launch", icon: "🚀" },
              { title: "Product Strategy", desc: "Discovery, UX strategy, and product lifecycle management", icon: "⚡" }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, borderColor: C.cyan }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 20,
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: C.cyan, marginBottom: "0.8rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION Section */}
      <section id="vision" style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <motion.div className="section-image" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ 
                borderRadius: 20, 
                overflow: "hidden", 
                border: `1px solid ${C.cyan}`,
                boxShadow: `0 0 40px rgba(0,229,255,0.2)`,
                height: 350
              }}>
                <img 
                  src={visionImg} 
                  alt="Vision" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "https://placehold.co/600x400/0a0a2a/00e5ff?text=Vision+Image"; }}
                />
              </div>
            </motion.div>
            <motion.div className="section-content" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>02 — WHERE WE ARE GOING</div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}>
                Our <span style={{ color: C.cyan }}>Vision</span>
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.8)", marginBottom: "1rem" }}>
                To become the most trusted digital product studio in South Asia — a studio where the most ambitious startups and enterprises come when they need to build something that scales globally, performs flawlessly, and looks like nothing else on the market.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.7)" }}>
                Within five years, Adrix Core will evolve from a client services studio into a hybrid agency and product company — launching our own SaaS tools, scaling a portfolio of proprietary digital products, and contributing open-source infrastructure that the developer community depends on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION Section */}
      <section id="mission" style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <motion.div className="section-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>03 — WHAT DRIVES US</div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "1.5rem", color: "#fff" }}>
                Our <span style={{ color: C.cyan }}>Mission</span>
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.8)", marginBottom: "1rem" }}>
                Our mission is to transform business ideas into high-performance digital products — built with engineering precision, designed with intention, and delivered with the speed and reliability that modern businesses demand.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(224,247,255,0.7)" }}>
                We build fast. We build clean. We build for scale. And we build to last. We measure our success not by the number of projects we ship, but by the outcomes those projects create for the businesses that trusted us to build them.
              </p>
            </motion.div>
            <motion.div className="section-image" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ 
                borderRadius: 20, 
                overflow: "hidden", 
                border: `1px solid ${C.cyan}`,
                boxShadow: `0 0 40px rgba(0,229,255,0.2)`,
                height: 350
              }}>
                <img 
                  src={missionImg} 
                  alt="Mission" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "https://placehold.co/600x400/0a0a2a/00e5ff?text=Mission+Image"; }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES Section */}
      <section id="values" style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>05 — WHAT WE STAND FOR</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, marginBottom: "1rem", color: "#fff" }}>
              Our <span style={{ color: C.cyan }}>Core Values</span>
            </h2>
            <p style={{ color: "rgba(224,247,255,0.6)", marginBottom: "3rem" }}>The operating principles behind every decision we make</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {[
              { title: "Innovation", desc: "We build for what the market needs next, not what worked three years ago. Every product integrates AI and modern tools to give our clients a genuine competitive edge.", icon: "💡" },
              { title: "Engineering Excellence", desc: "Clean code. Documented systems. Scalable architecture. We write software we are proud to hand over — and that we would be proud to maintain.", icon: "⚙️" },
              { title: "Radical Transparency", desc: "Fixed pricing. Clear timelines. Weekly progress reports. No hidden fees, no scope surprises. Our clients always know exactly where their product stands.", icon: "🔍" },
              { title: "True Partnership", desc: "We succeed when our clients succeed. We treat engagements as the beginning of a long-term working relationship built on trust and accountability.", icon: "🤝" },
              { title: "Speed Without Compromise", desc: "We move fast because we respect our clients' time and capital. But speed is never an excuse for mediocrity. We deliver rapidly and correctly.", icon: "⚡" },
              { title: "Lasting Impact", desc: "Every product we build creates measurable change. We measure our work not by lines of code, but by the outcomes it creates.", icon: "🎯" }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: C.cyan }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid rgba(0,229,255,0.2)`,
                  borderRadius: 20,
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{value.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 700, color: C.cyan, marginBottom: "0.8rem" }}>{value.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(224,247,255,0.7)", lineHeight: 1.5 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES IMAGE Section */}
      <section style={{ padding: "0 2rem 80px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              borderRadius: 20, 
              overflow: "hidden", 
              border: `1px solid ${C.cyan}`,
              boxShadow: `0 0 40px rgba(0,229,255,0.2)`,
              height: 400
            }}
          >
            <img 
              src={valuesImg} 
              alt="Values" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => { e.target.src = "https://placehold.co/1200x400/0a0a2a/00e5ff?text=Values+Image"; }}
            />
          </motion.div>
        </div>
      </section>

      {/* ROADMAP Section */}
      <section id="roadmap" style={{ padding: "80px 2rem", background: "rgba(0,5,15,0.3)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: C.cyan, marginBottom: "1rem" }}>04 — THE ROAD AHEAD</div>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff" }}>
              Our Growth <span style={{ color: C.cyan }}>Roadmap</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { phase: "Phase 1", title: "Establish Market Presence", timeline: "0–6 Months", milestones: ["Launch website with 3D hero", "AI-powered lead qualification", "5 signed clients", "3 published case studies"], color: C.cyan },
              { phase: "Phase 2", title: "Deepen Capabilities", timeline: "6–18 Months", milestones: ["AI product development", "Launch proprietary SaaS tools", "Scale mobile practice", "Grow team to 8+ engineers"], color: C.purple },
              { phase: "Phase 3", title: "Scale and Expand", timeline: "18–36 Months", milestones: ["International client acquisition", "Enterprise-grade engagements", "Portfolio of owned products", "INR 25 lakh+ monthly revenue"], color: C.pink }
            ].map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                style={{
                  background: "rgba(0,12,30,0.88)",
                  border: `1px solid ${phase.color}`,
                  borderRadius: 20,
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", top: 10, right: 10, fontSize: "3rem", opacity: 0.1 }}>📈</div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.7rem", color: phase.color, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{phase.phase}</div>
                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>
                  {phase.title}
                </h3>
                <div style={{ color: phase.color, fontSize: "0.8rem", marginBottom: "1rem" }}>{phase.timeline}</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {phase.milestones.map((m, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", fontSize: "0.85rem", color: "rgba(224,247,255,0.7)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="4" fill={phase.color} />
                      </svg>
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(0,0,0,0.5))",
              border: `1px solid ${C.cyan}`,
              borderRadius: 30,
              padding: "3rem",
              backdropFilter: "blur(10px)"
            }}
          >
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: "1rem", color: "#fff" }}>
              From Idea to <span style={{ color: C.cyan }}>Impact</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(224,247,255,0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
              We are Adrix Core. Let's build something that matters.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(0,229,255,0.4)` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                border: "none",
                padding: "1rem 2.5rem",
                borderRadius: 50,
                color: "#fff",
                fontFamily: "'Orbitron',monospace",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer"
              }}
            >
              Start Your Project →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default About;