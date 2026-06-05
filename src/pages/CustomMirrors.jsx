import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function CustomMirrors() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">CUSTOM MIRRORS</span>

          <h1>Reflection Designed With Intention.</h1>

          <p>
            Tailored mirror installations created for bathrooms, entryways,
            gyms, and feature spaces where proportion, clarity, and finish matter.
          </p>

          <a href="/#contact" className="lux-btn lux-btn-primary">
            Request an Estimate
          </a>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-section-heading">
          <span className="fg-eyebrow">OVERVIEW</span>

          <h2>Custom Fit. Clean Presentation.</h2>

          <p>
            From functional bathroom mirrors to statement feature walls,
            every mirror is measured and installed to complement the room’s design.
          </p>
        </div>

        <div className="fg-service-grid">
          <article className="fg-service-card">
            <span>Bathroom Mirrors</span>
            <p>
              Clean, polished mirror installations designed around vanities and
              finished spaces.
            </p>
          </article>

          <article className="fg-service-card">
            <span>Feature Mirrors</span>
            <p>
              Large-format mirrors for entryways, gyms, accent walls,
              and specialty spaces.
            </p>
          </article>

          <article className="fg-service-card">
            <span>Precision Installation</span>
            <p>
              Measured, aligned, and installed with attention to fit,
              spacing, and finish.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
