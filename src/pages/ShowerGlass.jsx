import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function ShowerGlass() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-overlay" />

        <div className="fg-service-content">
          <span className="fg-eyebrow">
            FRAMELESS SHOWER ENCLOSURES
          </span>

          <h1>Modern Glass Designed Around Precision.</h1>

          <p>
            Custom frameless shower enclosures crafted to elevate modern
            residential spaces through clarity, balance, and architectural detail.
          </p>

          <a href="#contact" className="lux-btn lux-btn-primary">
            Request an Estimate
          </a>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-section-heading">
          <span className="fg-eyebrow">OVERVIEW</span>

          <h2>Clean Lines. Premium Finish.</h2>

          <p>
            Every enclosure is measured, fabricated, and installed with a focus
            on precision fitment, visual balance, and long-term durability.
          </p>
        </div>

        <div className="fg-service-grid">
          <article className="fg-service-card">
            <span>Frameless Systems</span>
            <p>
              Minimal hardware and clean architectural presentation for a modern luxury appearance.
            </p>
          </article>

          <article className="fg-service-card">
            <span>Custom Configurations</span>
            <p>
              Built-to-fit layouts tailored to your exact bathroom dimensions and design goals.
            </p>
          </article>

          <article className="fg-service-card">
            <span>Premium Hardware</span>
            <p>
              High-quality hinges, handles, and finishes selected for durability and refined aesthetics.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
