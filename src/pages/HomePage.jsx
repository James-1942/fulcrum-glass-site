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

      <section id="services" className="fg-section fg-services">
  <div className="fg-section-heading">
    <span className="fg-eyebrow">SERVICES</span>
    <h2>Architectural Glass Services</h2>
    <p>
      Precision-crafted residential glass solutions designed to elevate modern
      spaces through clarity, balance, and detail.
    </p>
  </div>

  <div className="fg-service-grid">
  {[
    ["Frameless Shower Enclosures", "Custom frameless shower systems built for clean lines, durability, and modern residential design.", "/services/shower-glass"],
    ["Custom Mirrors", "Tailored mirror installations designed to complement bathrooms, gyms, entryways, and feature spaces.", "/services/custom-mirrors"],
    ["Window & Glass Solutions", "Glass replacement, new construction windows, and residential window solutions installed with precision and care.", "/services/window-glass-solutions"],
    ["Glass Tabletops", "Custom-cut glass tabletops and protective surfaces crafted for both function and presentation.", "/services/glass-tabletops"],
    ["Specialty Glass Applications", "Architectural and custom glass solutions for shelving, partitions, cabinet glass, and unique residential projects.", "/services/specialty-glass"]
  ].map(([title, text, path]) => (
    <article className="fg-service-card" key={title}>
      <Link to={path} className="fg-service-link">
        <span>{title}</span>
        <p>{text}</p>
      </Link>
    </article>
  ))}
</div>
</section>

<section id="Showcase" className="fg-section fg-showcase">
  <div className="fg-section-heading">
    <span className="fg-eyebrow">SHOWCASE</span>
    <h2>Selected Installations</h2>
    <p>
      A curated look at residential glass installations designed around
      precision, clean lines, and refined craftsmanship.
    </p>
  </div>

  <div className="fg-showcase-grid">
{[
  [
    "Frameless Shower Enclosure",
    "Shower Glass",
    "Clean frameless lines with a refined architectural finish.",
    showerImage
  ],
  [
    "Custom Vanity Mirror",
    "Custom Mirrors",
    "Tailored mirror work designed to complement finished interiors.",
    mirrorImage
  ],
  [
    "Window Glass Replacement",
    "Window Solutions",
    "Residential glass replacement completed with precision and care.",
    windowImage
  ],
  [
    "Glass Tabletop",
    "Tabletops",
    "Custom-cut protective glass with polished presentation.",
    tabletopImage
  ],
  [
    "Mirror Wall Installation",
    "Custom Mirrors",
    "Large-format mirror installation for a clean expanded feel.",
    mirrorWallImage
  ],
  [
    "Specialty Glass Detail",
    "Specialty Glass",
    "Custom glass applications built around unique residential spaces.",
    specialtyImage
  ]
].map(([title, category, text, image]) => (
  <article className="fg-showcase-card" key={title}>
    <div
      className="fg-showcase-image"
      style={{ backgroundImage: `url(${image})` }}
    />

    <div className="fg-showcase-info">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </article>
))}
  </div>
</section>

<section id="about" className="fg-section fg-about">
  <div className="fg-about-card">
    <span className="fg-eyebrow">ABOUT</span>
    <h2>Craftsmanship Without Compromise</h2>
    <p>
      Fulcrum Glass was built around precision, clean execution, and attention
      to detail. Every installation is approached with a focus on balance,
      longevity, and refined residential craftsmanship.
    </p>

    <div className="fg-veteran-badge">
      <strong>Veteran Owned & Operated</strong>
      <p>
        Built on discipline, precision, and accountability — values carried into
        every installation and every detail.
      </p>
    </div>
  </div>
</section>

<section id="contact" className="fg-section fg-contact">
  <div className="fg-section-heading">
    <span className="fg-eyebrow">ESTIMATE</span>
    <h2>Request an Estimate</h2>
    <p>Tell us about your project and we’ll help bring the right glass solution into focus.</p>
  </div>

  <form className="fg-contact-form">
    <input placeholder="Name" />
    <input placeholder="Phone" />
    <input placeholder="Email" />
    <select defaultValue="">
      <option value="" disabled>Service Type</option>
      <option>Frameless Shower Enclosures</option>
      <option>Custom Mirrors</option>
      <option>Window & Glass Solutions</option>
      <option>Glass Tabletops</option>
      <option>Specialty Glass Applications</option>
    </select>
    <textarea placeholder="Project Details" rows="5" />
    <button type="button">Submit Request</button>
  </form>
</section>
      
    </main>
  );
}
