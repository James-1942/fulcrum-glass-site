import React from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "./assets/hero-bathroom.png";

export default function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand">Fulcrum Glass</a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary">Request Estimate</a>
        </div>
      </header>

      <section className="hero">
        <img src={heroImage} alt="Luxury bathroom with frameless glass shower enclosure" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div>
            <p className="eyebrow">Premium Residential Glass</p>
            <h1>Precision in Every Pane</h1>
            <div className="rule" />
            <p className="hero-copy">
              Crafted for spaces that value precision, permanence, and understated elegance.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Request an Estimate <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </a>
              <a href="#services" className="btn btn-secondary">View Services</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">What We Do</p>
            <h2>Glass work with a refined finish.</h2>
          </div>

          <div className="service-grid">
            {[
              ["Frameless Shower Doors", "Custom shower glass systems measured, installed, and finished with precision."],
              ["Custom Mirrors", "Clean mirror installations for bathrooms, vanities, walls, and interior spaces."],
              ["Window Replacement", "Residential window glass replacement and installation with a clean professional finish."],
              ["Tabletops & Custom Glass", "Custom glass tops, panels, shelves, and specialty pieces built to fit your space."],
            ].map(([title, body]) => (
              <article className="card" key={title}>
                <CheckCircle2 className="card-icon" size={25} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section featured">
        <div className="container featured-inner">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2>Built for clean lines, clear views, and lasting impressions.</h2>
            <p>
              From frameless shower enclosures to mirrors and custom glass details, every project should feel measured, intentional, and finished correctly.
            </p>
          </div>

          <div className="work-grid">
            {["Frameless Showers", "Custom Mirrors", "Window Glass", "Tabletops"].map((item) => (
              <div className="work-tile" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about">
          <div>
            <p className="eyebrow">About Fulcrum Glass</p>
            <h2>A premium glass specialist for modern residential spaces.</h2>
          </div>

          <div className="about-copy">
            <p>
              Fulcrum Glass specializes in frameless shower doors, custom mirrors, window replacement, tabletops, and precision glass installations.
            </p>
            <p>
              The focus is simple: clean execution, accurate fit, professional communication, and a finished product that elevates the space without overcomplicating it.
            </p>
            <p className="strong">Veteran-owned. Detail-driven. Built on precision.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-card">
          <div className="contact-info">
            <p className="eyebrow">Start Your Project</p>
            <h2>Request an estimate.</h2>
            <p>
              Tell us what you need installed, replaced, or measured. Fulcrum Glass will follow up to review the project details.
            </p>

            <div className="contact-list">
              <div><Phone size={16} color="#1d3557" /> (267) 709-2590</div>
              <div><Mail size={16} color="#1d3557" /> info@fulcrumglass.com</div>
              <div><MapPin size={16} color="#1d3557" /> Philadelphia area and surrounding service areas</div>
            </div>
          </div>

          <form className="contact-form">
            <input placeholder="Name" />
            <input placeholder="Phone / Email" />
            <select defaultValue="">
              <option value="" disabled>Project Type</option>
              <option>Frameless Shower Door</option>
              <option>Custom Mirror</option>
              <option>Window Replacement</option>
              <option>Tabletop / Custom Glass</option>
            </select>
            <textarea placeholder="Project details" />
            <button className="btn" type="button">Submit Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
