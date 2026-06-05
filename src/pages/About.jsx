import React from "react";
import { Link } from "react-router-dom";
import { Shield, Ruler, Gem, Home } from "lucide-react";
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
          <span className="fg-eyebrow">OUR APPROACH</span>

          <h2>Built on Discipline. Defined by Craftsmanship.</h2>

          <p>
            Fulcrum Glass was founded on the belief that exceptional glass work
            comes from precision, accountability, and attention to detail. Every
            project is approached with care, from the first measurement to the
            final installation.
          </p>
        </div>

        <div className="fg-approach-grid">
          {[
            {
              icon: <Shield />,
              title: "Veteran Owned",
              text: "Discipline. Integrity. Execution.",
            },
            {
              icon: <Ruler />,
              title: "Precision",
              text: "Measured to fit. Built to last.",
            },
            {
              icon: <Gem />,
              title: "Premium Quality",
              text: "Top-tier materials. Flawless results.",
            },
            {
              icon: <Home />,
              title: "Residential Specialists",
              text: "Focused on custom residential glass installations.",
            },
          ].map((item) => (
            <article className="fg-approach-card" key={item.title}>
              <div className="fg-approach-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="fg-about-card fg-about-cta">
          <span className="fg-eyebrow">PREMIUM RESIDENTIAL GLASS</span>

          <h2>Glasswork That Elevates the Space.</h2>

          <p>
            From frameless shower enclosures and custom mirrors to window glass,
            tabletops, and specialty applications, Fulcrum Glass brings refined
            execution to residential spaces.
          </p>

          <Link to="/contact" className="lux-btn lux-btn-primary">
            Request an Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
