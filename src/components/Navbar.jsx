import { useState, useEffect } from "react";
import { LogoIcon, MenuIcon, CloseIcon } from "../assets/svgs/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 300ms ease-in-out, border-color 300ms ease-in-out",
        background: scrolled ? "rgba(8,11,17,0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(30,45,64,0.8)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}
        >
          {/* Logo */}
          <a href="#" aria-label="NeuralFlow home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <LogoIcon />
            <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>
              Neural<span style={{ color: "var(--accent)" }}>Flow</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center" }} className="hidden md:flex">
            {["Features", "Pricing", "Docs", "Blog"].map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="hidden md:flex">
            <a href="#pricing" className="btn-ghost" style={{ padding: "9px 20px", fontSize: "0.88rem" }}>Sign In</a>
            <a href="#pricing" className="btn-primary" style={{ padding: "9px 20px", fontSize: "0.88rem" }}>Get Started →</a>
          </div>

          {/* Mobile menu toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer" }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          aria-hidden={!open}
          style={{
            overflow: "hidden",
            maxHeight: open ? "300px" : "0",
            transition: "max-height 350ms ease-in-out",
          }}
        >
          <ul style={{ listStyle: "none", paddingBottom: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Features", "Pricing", "Docs", "Blog"].map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="nav-link"
                  style={{ display: "block", padding: "10px 4px", fontSize: "1rem" }}>{l}</a>
              </li>
            ))}
            <li style={{ marginTop: 8 }}>
              <a href="#pricing" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get Started →</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
