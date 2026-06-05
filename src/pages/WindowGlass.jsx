import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function WindowGlass() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">WINDOW & GLASS SOLUTIONS</span>

          <h1>Residential Window Work With Precision.</h1>

          <p>
            Glass replacement, new construction windows, and full residential
            window solutions installed with clean execution and attention to detail.
          </p>

          <a href="/#contact" className="lux-btn lux-btn-primary">
            Request an Estimate
          </a>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-section-heading">
          <span className="fg-eyebrow">OVERVIEW</span>

          <h2>Glass Replacement. Full Window Solutions.</h2>

          <p>
            From replacing failed or damaged glass to installing full replacement
            and new construction windows, each project is handled with precision,
            care, and proper fitment.
          </p>
        </div>

        <div className="fg-service-grid">
          <article className="fg-service-card">
            <span>Glass Replacement</span>
            <p>Replacement glass for damaged, fogged, cracked, or failed residential window units.</p>
          </article>

          <article className="fg-service-card">
            <span>Replacement Windows</span>
            <p>Full residential window replacement options designed for clean fit and improved performance.</p>
          </article>

          <article className="fg-service-card">
            <span>New Construction Windows</span>
            <p>Window installation for new construction and renovation projects requiring accurate placement and finish.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
