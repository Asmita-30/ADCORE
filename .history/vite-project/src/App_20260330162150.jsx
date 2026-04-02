import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About"; // 👈 create this file
import Services from "./pages/Services";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Services />} />
    </Routes>
  );
}

export default App;