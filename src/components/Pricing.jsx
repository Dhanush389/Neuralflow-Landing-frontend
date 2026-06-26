import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { TIER_MATRIX, CURRENCY_CONFIG, computePrice } from "../data/pricing";
import { CheckIcon, ArrowRight } from "../assets/svgs/Icons";

/* ─────────────────────────────────────────────────────────────
   PriceDisplay
   Renders only the price string for one tier.
   Because currency + isAnnual are props that flow into THIS
   subtree only, React's reconciler touches ONLY these text
   nodes — the parent layout blocks (hero, features, footer)
   are never in the same render tree and will never reflow.
───────────────────────────────────────────────────────────── */
function PriceDisplay({ tierKey, currency, isAnnual, color }) {
  const { amount, symbol, perLabel } = computePrice(tierKey, currency, isAnnual);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, margin: "20px 0 4px" }}>
      <span className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700, color, lineHeight: 1.5 }}>
        {symbol}
      </span>
      <span className="font-display" style={{ fontSize: "2.6rem", fontWeight: 700, color, lineHeight: 1 }}>
        {amount}
      </span>
      <span style={{ fontSize: "0.8rem", color: "var(--muted)", paddingBottom: 6 }}>
        {perLabel}
      </span>
    </div>
  );
}

/* ── Isolated billing toggle ── */
function BillingToggle({ isAnnual, onToggle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: "0.88rem", color: isAnnual ? "var(--muted)" : "var(--text)", transition: "color 150ms ease-out" }}>
        Monthly
      </span>
      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={onToggle}
        className={`toggle-track${isAnnual ? " on" : ""}`}
      >
        <div className="toggle-thumb" />
      </button>
      <span style={{ fontSize: "0.88rem", color: isAnnual ? "var(--text)" : "var(--muted)", transition: "color 150ms ease-out" }}>
        Annual
      </span>
      {isAnnual && (
        <span style={{
          fontSize: "0.72rem", fontWeight: 700, color: "var(--green)",
          background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)",
          borderRadius: 20, padding: "2px 8px",
        }}>
          SAVE 20%
        </span>
      )}
    </div>
  );
}

/* ── Isolated currency selector ── */
function CurrencySelector({ value, onChange }) {
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Select currency"
        style={{
          appearance: "none",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--text)",
          borderRadius: 8,
          padding: "8px 36px 8px 14px",
          fontSize: "0.88rem",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          cursor: "pointer",
          transition: "border-color 150ms ease-out",
        }}
      >
        {Object.keys(CURRENCY_CONFIG).map(k => (
          <option key={k} value={k}>
            {CURRENCY_CONFIG[k].symbol} {k}
          </option>
        ))}
      </select>
      <span aria-hidden="true" style={{
        position: "absolute", right: 10, top: "50%",
        transform: "translateY(-50%)", pointerEvents: "none", color: "var(--muted)",
      }}>▾</span>
    </div>
  );
}

/* ── Individual pricing card ── */
function PricingCard({ tier, currency, isAnnual }) {
  return (
    <article
      aria-label={`${tier.name} pricing plan`}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "32px 28px",
        background: tier.highlight ? "var(--surface)" : "var(--card)",
        border: `1px solid ${tier.highlight ? tier.color + "60" : "var(--border)"}`,
        boxShadow: tier.highlight ? `0 0 40px ${tier.color}20` : "none",
        display: "flex", flexDirection: "column",
      }}
    >
      {tier.highlight && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: `linear-gradient(90deg, ${tier.color}, #7C3AED)`,
          color: "#fff", fontSize: "0.72rem", fontWeight: 700,
          padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.06em",
        }}>
          MOST POPULAR
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
          {tier.name}
        </h3>
        <span style={{
          width: 10, height: 10, borderRadius: "50%",
          background: tier.color, boxShadow: `0 0 12px ${tier.color}`,
        }} />
      </div>

      {/* Price — only this node updates on currency/billing change */}
      <PriceDisplay tierKey={tier.id} currency={currency} isAnnual={isAnnual} color={tier.color} />

      <div style={{ height: 1, background: "var(--border)", margin: "16px 0 20px" }} />

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 28 }}>
        {tier.features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{ flexShrink: 0, marginTop: 1 }}><CheckIcon /></span>
            <span style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={tier.highlight ? "btn-primary" : "btn-ghost"}
        style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem" }}
        aria-label={`${tier.cta} for ${tier.name} plan`}
      >
        {tier.cta} <ArrowRight />
      </a>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Pricing (parent)
   State (currency + isAnnual) lives HERE and is scoped to
   this component tree. Hero, Features, Social Proof, Footer
   are SIBLINGS in App.jsx — they are NEVER inside this
   component and will NEVER re-render when state changes here.
───────────────────────────────────────────────────────────── */
export default function Pricing() {
  const sectionRef            = useReveal();
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ padding: "100px 24px", background: "var(--surface)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={sectionRef} className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Pricing</span>
          <h2 id="pricing-heading" className="font-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", marginBottom: 32 }}>
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Controls — state updates stay within this section */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <BillingToggle isAnnual={isAnnual} onToggle={() => setIsAnnual(a => !a)} />
            <CurrencySelector value={currency} onChange={setCurrency} />
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "start",
        }}>
          {Object.values(TIER_MATRIX).map(tier => (
            <PricingCard
              key={tier.id}
              tier={tier}
              currency={currency}
              isAnnual={isAnnual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
