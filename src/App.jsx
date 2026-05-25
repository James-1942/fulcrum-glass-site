import React from "react";
import { ArrowRight } from "lucide-react";
import "./App.css";
import FulcrumHeader from "./FulcrumHeader";

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
            Crafted for spaces that value precision, permanence, and
            understated elegance.
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
          <span className="lux-proof-icon">▧</span>
          <span>QUALITY MATERIALS</span>
        </div>

        <div className="lux-proof-item">
          <span className="lux-proof-icon">◇</span>
          <span>EXPERT CRAFTSMANSHIP</span>
        </div>

        <div className="lux-proof-item">
          <span className="lux-proof-icon">□</span>
          <span>TIMELESS DESIGN</span>
        </div>

        <div className="lux-proof-item">
          <span className="lux-proof-icon">▱</span>
          <span>BUILT TO LAST</span>
        </div>
      </section>
    </main>
  );
}
