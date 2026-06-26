import { useEffect, useRef } from "react";
import { ArrowRight, LogoIcon } from "../assets/svgs/Icons";

const STATS = [
  { value: "10B+",  label: "Data events/day" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "3.2x",  label: "Faster pipelines" },
  { value: "200+",  label: "Integrations" },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-delay]");
    items.forEach(item => {
      const delay = parseInt(item.getAttribute("data-delay"), 10);
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="Hero section"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "15%", left: "10%",
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "orb 8s ease-in-out infinite",
        pointerEvents: "none",
      }}/>
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "10%", right: "8%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "orb 10s ease-in-out infinite reverse",
        pointerEvents: "none",
      }}/>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
        {/* Badge */}
        <div
          data-delay="60"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 400ms ease-out, transform 400ms ease-out", marginBottom: 24, display: "inline-block" }}
        >
          <span className="badge">
            <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", animation: "pulse2 2s ease-in-out infinite" }}/>
            Now in Public Beta — Join 2,400+ teams
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          data-delay="120"
          style={{
            opacity: 0, transform: "translateY(24px)",
            transition: "opacity 400ms ease-out, transform 400ms ease-out",
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          Automate Everything.<br/>
          <span className="gradient-text">Scale Intelligence.</span>
        </h1>

        {/* Subheadline */}
        <p
          data-delay="200"
          style={{
            opacity: 0, transform: "translateY(22px)",
            transition: "opacity 400ms ease-out, transform 400ms ease-out",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 620,
            margin: "0 auto 40px",
          }}
        >
          NeuralFlow is the AI-native data automation platform that orchestrates your pipelines,
          monitors your systems, and deploys intelligent workflows — all without writing infrastructure code.
        </p>

        {/* CTAs */}
        <div
          data-delay="280"
          style={{
            opacity: 0, transform: "translateY(20px)",
            transition: "opacity 400ms ease-out, transform 400ms ease-out",
            display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <a href="#pricing" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            Start Free Trial <ArrowRight />
          </a>
          <a href="#features" className="btn-ghost" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            Watch Demo
          </a>
        </div>

        {/* Stats row */}
        <div
          data-delay="360"
          style={{
            opacity: 0, transform: "translateY(20px)",
            transition: "opacity 400ms ease-out, transform 400ms ease-out",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 12,
          }}
        >
          {STATS.map(s => (
            <div key={s.label} className="stat-card">
              <div className="font-display" style={{ fontSize: "1.7rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-delay="440"
        aria-hidden="true"
        style={{
          opacity: 0,
          transition: "opacity 400ms ease-out",
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}
      >
        <span style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, var(--muted), transparent)" }}/>
      </div>
    </section>
  );
}
