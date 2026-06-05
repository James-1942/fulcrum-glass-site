import React from "react";
import { Link } from "react-router-dom";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function Services() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">SERVICES</span>
          <h1>Architectural Glass Services.</h1>
          <p>
            Premium residential glass solutions designed around precision,
            clean execution, and refined detail.
          </p>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-service-grid">
          {[
            [
              "Frameless Shower Enclosures",
              "Custom frameless shower systems built for clean lines, durability, and modern residential design.",
              "/services/shower-glass"
            ],
            [
              "Custom Mirrors",
              "Tailored mirror installations designed to complement bathrooms, gyms, entryways, and feature spaces.",
              "/services/custom-mirrors"
            ],
            [
              "Window & Glass Solutions",
              "Glass replacement, new construction windows, and residential window solutions installed with precision and care.",
              "/services/window-glass-solutions"
            ],
            [
              "Glass Tabletops",
              "Custom-cut glass tabletops and protective surfaces crafted for both function and presentation.",
              "/services/glass-tabletops"
            ],
            [
              "Specialty Glass Applications",
              "Architectural and custom glass solutions for shelving, partitions, cabinet glass, and unique residential projects.",
              "/services/specialty-glass"
            ]
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
    </main>
  );
}
