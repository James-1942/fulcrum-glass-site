import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function GlassTabletops() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">GLASS TABLETOPS</span>

          <h1>Custom Glass Surfaces Built to Fit.</h1>

          <p>
            Custom-cut glass tabletops and protective surfaces crafted for
            function, clarity, and refined presentation.
          </p>

          <a href="/#contact" className="lux-btn lux-btn-primary">
            Request an Estimate
          </a>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-section-heading">
          <span className="fg-eyebrow">OVERVIEW</span>

          <h2>Protection With a Premium Finish.</h2>

          <p>
            Glass tabletops provide a clean, durable surface while preserving
            the appearance of furniture, counters, desks, and custom-built pieces.
          </p>
        </div>

        <div className="fg-service-grid">
          <article className="fg-service-card">
            <span>Custom Cut Glass</span>
            <p>Measured and fabricated to fit tables, desks, counters, and specialty surfaces.</p>
          </article>

          <article className="fg-service-card">
            <span>Protective Surfaces</span>
            <p>Glass designed to protect furniture while maintaining a clean, elevated look.</p>
          </article>

          <article className="fg-service-card">
            <span>Polished Edges</span>
            <p>Finished edges and clean detailing for a refined residential presentation.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
