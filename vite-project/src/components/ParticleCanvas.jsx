// src/components/ParticleCanvas.jsx
import React, { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const ref = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class P {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.4 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.op = Math.random() * 0.5 + 0.1;
        this.col = Math.random() > 0.5 ? "0,229,255" : "124,58,237";
        this.ph = Math.random() * Math.PI * 2;
      }
      tick() {
        this.x += this.vx; this.y += this.vy; this.ph += 0.015;
        const dx = this.x - mouse.current.x, dy = this.y - mouse.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) { this.x += dx / d * 0.6; this.y += dy / d * 0.6; }
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        const op = this.op * (0.6 + 0.4 * Math.sin(this.ph));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.col},${op})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 200; i++) particles.push(new P());

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0,229,255,0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 70) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 70) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${0.12 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.8);
      g.addColorStop(0, "rgba(0,20,50,0.95)");
      g.addColorStop(1, "rgba(2,4,8,0.99)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      drawGrid();
      particles.forEach(p => { p.tick(); p.draw(); });
      drawLines();
      if (mouse.current.x > 0) {
        const mg = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 180);
        mg.addColorStop(0, "rgba(0,229,255,0.06)");
        mg.addColorStop(1, "transparent");
        ctx.fillStyle = mg;
        ctx.fillRect(0, 0, W, H);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onMouse = e => { mouse.current.x = e.clientX; mouse.current.y = e.clientY; };
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", inset: 0, width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none",
      }}
    />
  );
}