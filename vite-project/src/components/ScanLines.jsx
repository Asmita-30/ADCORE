// src/components/ScanLines.jsx
import React from "react";

export default function ScanLines() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9998,
        backgroundImage:
          "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,229,255,0.008) 2px,rgba(0,229,255,0.008) 4px)",
      }}
    />
  );
}