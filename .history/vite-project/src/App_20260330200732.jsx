import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no Router here
import ParticleCanvas from "./components/ParticleCanvas";
import ScanLines from "./components/ScanLines";
import WhatsApp from "./components/WhatsApp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #020408; color: #e0f7ff; font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020408; }
        ::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.4); border-radius: 4px; }
        input, textarea, button { font-family: inherit; }
        @media (max-width: 900px) {
          nav div:nth-child(2) { display: none; }
        }
      `}</style>

      <ParticleCanvas />
      <ScanLines />
      <Navbar />

      <main style={{ position: "relative", zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;