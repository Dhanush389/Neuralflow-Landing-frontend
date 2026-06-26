import { LogoIcon } from "../assets/svgs/Icons";

const LINKS = {
  Product:  ["Features", "Pricing", "Changelog", "Roadmap"],
  Developers: ["Docs", "API Reference", "SDKs", "Status"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal:   ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "64px 24px 36px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr repeat(4, 1fr)",
          gap: 40,
          marginBottom: 48,
          flexWrap: "wrap",
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a href="#" aria-label="NeuralFlow home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <LogoIcon/>
              <span className="font-display" style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)" }}>
                Neural<span style={{ color: "var(--accent)" }}>Flow</span>
              </span>
            </a>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: 240 }}>
              The AI-native data automation platform for modern engineering teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h3 className="font-display" style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                {heading}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="nav-link" style={{ fontSize: "0.88rem" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
            © 2025 NeuralFlow, Inc. All rights reserved.
          </p>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
            Built with ♥ for the modern data stack
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
