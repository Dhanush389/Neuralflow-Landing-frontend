/**
 * App.jsx
 * -------
 * All major sections are SIBLING components — they are never nested
 * inside each other. This is the architectural guarantee that prevents
 * global re-renders: when Pricing updates its local currency/billing state,
 * React only reconciles the <Pricing /> subtree.
 */
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import BentoAccordion from "./components/BentoAccordion";
import Pricing     from "./components/Pricing";
import SocialProof from "./components/SocialProof";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <BentoAccordion />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
