// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import UIUX from "./pages/UIUX";
import AIIntegration from "./pages/AIIntegration";
import LandingPages from "./pages/LandingPages";
import MaintenancePlans from "./pages/MaintenancePlans";

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
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Policy />} />
          
          {/* Service Pages */}
          <Route path="/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/ui-ux-design" element={<UIUX />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
          <Route path="/landing-pages" element={<LandingPages />} />
          <Route path="/maintenance-plans" element={<MaintenancePlans />} />
        </Routes>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;