import { useReveal } from "../hooks/useReveal";
import { StarIcon } from "../assets/svgs/Icons";

const TESTIMONIALS = [
  {
    quote: "NeuralFlow cut our data pipeline setup from 3 weeks to 2 hours. The AI-assisted schema mapping is genuinely magical.",
    name: "Priya Sharma", role: "Head of Data, Groww",
    avatar: "PS", color: "#00D4FF",
  },
  {
    quote: "We process 4 billion events a day through NeuralFlow. The reliability and observability are unmatched at this scale.",
    name: "Ethan Müller", role: "CTO, FinDash GmbH",
    avatar: "EM", color: "#7C3AED",
  },
  {
    quote: "The Bento analytics dashboard alone is worth the subscription. Our ML team went from weekly to real-time insights.",
    name: "Anika Osei", role: "ML Platform Lead, Kuda",
    avatar: "AO", color: "#10B981",
  },
];

const LOGOS = [
  { name: "Groww",   w: 72 },
  { name: "FinDash", w: 80 },
  { name: "Kuda",    w: 58 },
  { name: "Axiom",   w: 68 },
  { name: "Veridian",w: 84 },
  { name: "Nexora",  w: 70 },
];

export default function SocialProof() {
  const sectionRef = useReveal();
  const logosRef   = useReveal();

  return (
    <section
      id="social-proof"
      aria-labelledby="social-heading"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Trusted by logos */}
        <div ref={logosRef} className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28 }}>
            Trusted by engineering teams at
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {LOGOS.map(l => (
              <div key={l.name} aria-label={l.name} style={{ opacity: 0.45, filter: "grayscale(1)", transition: "opacity 150ms ease-out, filter 150ms ease-out", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.filter = "grayscale(0)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "0.45"; e.currentTarget.style.filter = "grayscale(1)"; }}
              >
                <svg width={l.w} height="28" viewBox={`0 0 ${l.w} 28`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width={l.w} height="28" rx="4" fill="var(--border)"/>
                  <text x={l.w/2} y="18" textAnchor="middle" fill="var(--text)" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600">{l.name}</text>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div ref={sectionRef} className="reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Social Proof</span>
          <h2 id="social-heading" className="font-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Loved by data teams worldwide
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {TESTIMONIALS.map(t => (
            <blockquote
              key={t.name}
              className="card-base"
              style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }} aria-label="5 star rating">
                {[0,1,2,3,4].map(i => <StarIcon key={i}/>)}
              </div>

              <p style={{ color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic", flex: 1 }}>
                "{t.quote}"
              </p>

              <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: `${t.color}30`,
                  border: `2px solid ${t.color}50`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.78rem", fontWeight: 700, color: t.color,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <cite style={{ fontStyle: "normal", fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", display: "block" }}>
                    {t.name}
                  </cite>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
