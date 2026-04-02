function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", v => setScrolled(v > 0.03));
    return unsub;
  }, [scrollYProgress]);

  const links = ["Home", "About", "Services", "Portfolio", "Pricing", "Blog", "Contact"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "1rem 3rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(2,4,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,229,255,0.08)" : "none",
        transition: "all 0.4s",
      }}
    >
      <div style={{ fontFamily: "'Orbitron',monospace", fontWeight: 900, fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }} onClick={() => scrollToSection("home")}>
        <img src={LOGO_SRC} alt="logo" style={{ width: 200, height: 100, objectFit: "contain" }} />
        {/* <span style={{ color: "#fff" }}>ADRIX</span>
        <span style={{ color: C.cyan }}>CORE</span> */}
      </div>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {links.map(l => (
          <motion.a
            key={l}
            onClick={() => scrollToSection(l)}
            whileHover={{ color: C.cyan }}
            style={{ color: "rgba(224,247,255,0.75)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.2s", cursor: "pointer" }}
          >
            {l}
          </motion.a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,229,255,0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("contact")}
        style={{ background: `linear-gradient(135deg,${C.cyan},${C.purple})`, border: "none", padding: "0.6rem 1.6rem", borderRadius: 50, color: "#fff", fontFamily: "'Orbitron',monospace", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em", cursor: "pointer" }}
      >
        Get Started
      </motion.button>
      {/* Progress bar */}
      <motion.div
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.cyan},${C.purple})`, transformOrigin: "0%", scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
}
