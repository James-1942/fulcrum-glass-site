import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function About() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">ABOUT FULCRUM GLASS</span>

          <h1>Craftsmanship Without Compromise.</h1>

          <p>
            Premium residential glasswork built around precision, clean
            execution, and lasting attention to detail.
          </p>
        </div>
      </section>

      <section className="fg-section fg-about">
        <div className="fg-about-card">
          <span className="fg-eyebrow">OUR STANDARD</span>

          <h2>Precision in Every Detail.</h2>

          <p>
            Fulcrum Glass was built around careful workmanship, accurate
            installation, and refined residential presentation. Every project is
            approached with a focus on balance, durability, and clean execution.
          </p>

          <div className="fg-veteran-badge">
            <strong>Veteran Owned & Operated</strong>
            <p>
              Built on discipline, precision, and accountability — values carried
              into every installation and every detail.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
