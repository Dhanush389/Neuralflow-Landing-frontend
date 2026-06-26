import { useState, useEffect, useRef, useCallback } from "react";
import { useReveal } from "../hooks/useReveal";
import { FEATURES } from "../data/features";
import { PipelineIcon, AIIcon, MeshIcon, MonitorIcon, ShieldIcon, ChevronDown } from "../assets/svgs/Icons";
import { ChevronDown as CD } from "../assets/svgs/Icons";

const ICON_MAP = {
  pipeline: PipelineIcon,
  ai:       AIIcon,
  mesh:     MeshIcon,
  monitor:  MonitorIcon,
  shield:   ShieldIcon,
};

const MOBILE_BP = 768;

function isMobile() { return window.innerWidth < MOBILE_BP; }

export default function BentoAccordion() {
  const sectionRef = useReveal();
  // -1 means nothing active
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mobile, setMobile]           = useState(isMobile());
  // Track the "last hovered/active desktop index" for context lock
  const hoverIndexRef = useRef(-1);

  // Handle resize — context lock: transfer hover state to accordion open state
  useEffect(() => {
    let raf;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nowMobile = isMobile();
        setMobile(prev => {
          if (!prev && nowMobile) {
            // Transitioning desktop → mobile: transfer active index
            if (hoverIndexRef.current >= 0) {
              setActiveIndex(hoverIndexRef.current);
            }
          }
          if (prev && !nowMobile) {
            // Transitioning mobile → desktop: reset accordion state
            setActiveIndex(-1);
          }
          return nowMobile;
        });
      });
    };
    window.addEventListener("resize", handler, { passive: true });
    return () => { window.removeEventListener("resize", handler); cancelAnimationFrame(raf); };
  }, []);

  const handleBentoEnter = useCallback((id) => {
    hoverIndexRef.current = id;
    setActiveIndex(id);
  }, []);

  const handleBentoLeave = useCallback(() => {
    setActiveIndex(-1);
    // Keep hoverIndexRef so resize can read it
  }, []);

  const handleAccordionToggle = useCallback((id) => {
    setActiveIndex(prev => (prev === id ? -1 : id));
    hoverIndexRef.current = id;
  }, []);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div ref={sectionRef} className="reveal" style={{ marginBottom: 56, textAlign: "center" }}>
        <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Features</span>
        <h2 id="features-heading" className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Built for every layer of your stack
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
          From raw data ingestion to intelligent inference — NeuralFlow handles the entire lifecycle.
        </p>
      </div>

      {/* ── Desktop Bento Grid ── */}
      {!mobile && (
        <div
          className="bento-grid"
          role="list"
          aria-label="Feature showcase"
        >
          {FEATURES.map((f) => {
            const Icon = ICON_MAP[f.icon];
            const isActive = activeIndex === f.id;
            return (
              <article
                key={f.id}
                role="listitem"
                className={`bento-node ${f.span}`}
                aria-label={f.title}
                onMouseEnter={() => handleBentoEnter(f.id)}
                onMouseLeave={handleBentoLeave}
                style={{ outline: "none" }}
                tabIndex={0}
                onFocus={() => handleBentoEnter(f.id)}
                onBlur={handleBentoLeave}
              >
                {/* Glow overlay */}
                <div aria-hidden="true" style={{
                  position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none",
                  background: isActive ? `radial-gradient(circle at 30% 30%, ${f.color}14, transparent 70%)` : "transparent",
                  transition: "background 200ms ease-out",
                }}/>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 12,
                    background: `${f.color}18`,
                    border: `1px solid ${f.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "transform 200ms ease-out",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}>
                    <Icon color={f.color}/>
                  </div>
                  <span style={{
                    fontSize: "0.75rem", fontWeight: 600, color: f.color,
                    background: `${f.color}18`, border: `1px solid ${f.color}30`,
                    borderRadius: 20, padding: "4px 12px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    {f.stat}
                  </span>
                </div>

                <p className="font-display" style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                  {f.subtitle}
                </p>
                <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10, color: "var(--text)" }}>
                  {f.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {f.description}
                </p>
              </article>
            );
          })}
        </div>
      )}

      {/* ── Mobile Accordion ── */}
      {mobile && (
        <div role="list" aria-label="Feature showcase">
          {FEATURES.map((f) => {
            const Icon = ICON_MAP[f.icon];
            const isOpen = activeIndex === f.id;
            const panelId = `accordion-panel-${f.id}`;
            const triggerId = `accordion-trigger-${f.id}`;
            return (
              <article
                key={f.id}
                role="listitem"
                style={{
                  marginBottom: 10,
                  borderRadius: 14,
                  border: `1px solid ${isOpen ? f.color + "60" : "var(--border)"}`,
                  background: "var(--card)",
                  overflow: "hidden",
                  transition: "border-color 200ms ease-out",
                }}
              >
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleAccordionToggle(f.id)}
                  style={{
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 14, padding: "18px 20px",
                    textAlign: "left",
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: `${f.color}18`, border: `1px solid ${f.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "transform 200ms ease-out",
                    transform: isOpen ? "scale(1.06)" : "scale(1)",
                  }}>
                    <Icon color={f.color}/>
                  </div>
                  <span className="font-display" style={{ flex: 1, fontWeight: 600, fontSize: "1rem", color: "var(--text)" }}>
                    {f.title}
                  </span>
                  <span style={{
                    color: "var(--muted)", flexShrink: 0,
                    transition: "transform 300ms ease-in-out",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    display: "flex", alignItems: "center",
                  }}>
                    <ChevronDown />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`accordion-body${isOpen ? " open" : ""}`}
                >
                  <div className="accordion-inner">
                    <div style={{ padding: "0 20px 20px 78px" }}>
                      <p style={{ fontSize: "0.75rem", color: f.color, fontWeight: 600, marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {f.stat}
                      </p>
                      <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
