import React from "react";
import { ArrowRight } from "lucide-react";
import "./App.css";
import FulcrumHeader from "./FulcrumHeader";
import "./index.css";

export default function App() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="lux-hero" id="home">
        <div className="lux-hero-copy">
          <p className="lux-eyebrow">PREMIUM RESIDENTIAL GLASS</p>

          <h1>
            Precision in
            <br />
            Every Pane.
          </h1>

          <div className="lux-rule" />

          <p className="lux-description">
            Crafted for spaces that value precision, permanence, and understated elegance.
          </p>

          <div className="lux-actions">
            <a href="#contact" className="lux-btn lux-btn-primary">
              Request an Estimate <ArrowRight size={18} strokeWidth={1.8} />
            </a>

            <a href="#services" className="lux-btn lux-btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

     <section className="lux-proof-strip">
  <div className="lux-proof-item">
    <span className="lux-proof-icon">
      <svg viewBox="0 0 64 64"><rect x="18" y="14" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"/><rect x="10" y="24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"/><rect x="26" y="24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
    </span>
    <span>QUALITY MATERIALS</span>
  </div>

  <div className="lux-proof-item">
    <span className="lux-proof-icon">
      <svg viewBox="0 0 64 64"><path d="M32 6 54 18v28L32 58 10 46V18L32 6Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M10 18 32 31 54 18M32 31v27" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
    </span>
    <span>EXPERT CRAFTSMANSHIP</span>
  </div>

  <div className="lux-proof-item">
    <span className="lux-proof-icon">
      <svg viewBox="0 0 64 64"><path d="M32 6 54 18v28L32 58 10 46V18L32 6Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M10 18 32 31 54 18M32 31 32 58M10 46 32 31 54 46" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
    </span>
    <span>TIMELESS DESIGN</span>
  </div>

  <div className="lux-proof-item">
    <span className="lux-proof-icon">
      <svg viewBox="0 0 64 64"><path d="M20 14h30l-8 36H12l8-36Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M20 14 12 50M50 14 42 50" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
    </span>
    <span>BUILT TO LAST</span>
  </div>
</section>
    </main>
  );
}
