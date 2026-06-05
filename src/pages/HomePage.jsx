import React from "react";
import { ArrowRight } from "lucide-react";
import "../App.css";
import FulcrumHeader from "../FulcrumHeader";
import { Link } from "react-router-dom";
import showerImage from "../assets/showcase-shower-glass.png";
import mirrorImage from "../assets/showcase-custom-mirror.png";
import windowImage from "../assets/showcase-window-solutions.png";
import tabletopImage from "../assets/showcase-glass-tabletop.png";
import mirrorWallImage from "../assets/showcase-mirror-wall.png";
import specialtyImage from "../assets/showcase-specialty-glass.png";

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

<section className="fg-section">
  <div className="fg-section-heading">
    <span className="fg-eyebrow">SERVICES</span>
    <h2>Featured Services</h2>
    <p>
      Precision-crafted residential glass solutions designed for modern
      homes, luxury bathrooms, and architectural interiors.
    </p>
  </div>

  <div className="fg-service-grid">
    {[
      [
        "Frameless Shower Glass",
        "Custom frameless shower enclosures built for clean lines and timeless design.",
        "/services/shower-glass",
      ],
      [
        "Custom Mirrors",
        "Tailored mirror installations for bathrooms, entryways, gyms, and feature walls.",
        "/services/custom-mirrors",
      ],
      [
        "Window Glass Solutions",
        "Glass replacement and residential window solutions installed with precision.",
        "/services/window-glass-solutions",
      ],
    ].map(([title, text, path]) => (
      <article className="fg-service-card" key={title}>
        <Link to={path} className="fg-service-link">
          <span>{title}</span>
          <p>{text}</p>
        </Link>
      </article>
    ))}
  </div>

  <div style={{ marginTop: "40px" }}>
    <Link to="/services" className="lux-btn lux-btn-secondary">
      View All Services
    </Link>
  </div>
</section>

<section className="fg-section">
  <div className="fg-section-heading">
    <span className="fg-eyebrow">SHOWCASE</span>
    <h2>Selected Installations</h2>
    <p>
      A curated collection of residential glass installations designed
      around precision, clean lines, and refined craftsmanship.
    </p>
  </div>

  <div className="fg-showcase-grid">
    {[
      {
        image: showerImage,
        title: "Frameless Shower Glass"
      },
      {
        image: mirrorImage,
        title: "Custom Mirrors"
      },
      {
        image: windowImage,
        title: "Window Glass Solutions"
      }
    ].map((item) => (
      <div className="fg-showcase-card" key={item.title}>
        <div
          className="fg-showcase-image"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="fg-showcase-info">
          <h3>{item.title}</h3>
        </div>
      </div>
    ))}
  </div>

  <div style={{ marginTop: "40px" }}>
    <Link to="/showcase" className="lux-btn lux-btn-secondary">
      View Full Showcase
    </Link>
  </div>
</section>

<section className="fg-section fg-home-about">
  <div className="fg-about-card">
    <span className="fg-eyebrow">VETERAN OWNED</span>

    <h2>Built on Discipline. Defined by Craftsmanship.</h2>

    <p>
      Fulcrum Glass delivers custom residential glass installations with a focus
      on precision, accountability, and clean execution. Every project is handled
      with care, from first measurement to final installation.
    </p>

    <div className="fg-veteran-badge">
      <strong>Premium Residential Glass</strong>
      <p>
        Shower enclosures, mirrors, window glass, tabletops, and specialty glass
        solutions crafted for refined living spaces.
      </p>
    </div>

    <Link to="/about" className="lux-btn lux-btn-secondary">
      About Fulcrum Glass
    </Link>
  </div>
</section>

<section className="fg-section fg-home-cta">
  <div className="fg-section-heading">
    <span className="fg-eyebrow">ESTIMATE</span>
    <h2>Ready to Start Your Project?</h2>
    <p>
      Tell us about your space and we’ll help bring the right glass solution
      into focus.
    </p>

   <Link to="/contact" className="lux-btn lux-btn-primary">
  Request an Estimate
</Link>
  </div>
</section>
      </main>
  );
}
