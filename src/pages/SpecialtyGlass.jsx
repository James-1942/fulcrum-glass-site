import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function SpecialtyGlass() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">SPECIALTY GLASS APPLICATIONS</span>

          <h1>Custom Glasswork for Unique Spaces.</h1>

          <p>
            Architectural and custom glass solutions for shelving, partitions,
            cabinet glass, and specialty residential projects.
          </p>

          <a href="/#contact" className="lux-btn lux-btn-primary">
            Request an Estimate
          </a>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-section-heading">
          <span className="fg-eyebrow">OVERVIEW</span>

          <h2>Designed Around the Project.</h2>

          <p>
            Some glasswork does not fit a standard category. Specialty
            applications are built around the space, the design intent, and the
            level of finish required.
          </p>
        </div>

        <div className="fg-service-grid">
          <article className="fg-service-card">
            <span>Glass Shelving</span>
            <p>Clean, custom shelving solutions for residential displays and finished interiors.</p>
          </article>

          <article className="fg-service-card">
            <span>Cabinet Glass</span>
            <p>Replacement and custom glass for cabinet doors, built-ins, and interior details.</p>
          </article>

          <article className="fg-service-card">
            <span>Custom Applications</span>
            <p>Specialty residential glasswork tailored to the needs of the project.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
