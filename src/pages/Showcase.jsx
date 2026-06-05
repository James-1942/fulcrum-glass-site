import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

import showerImage from "../assets/showcase-shower-glass.png";
import mirrorImage from "../assets/showcase-custom-mirror.png";
import windowImage from "../assets/showcase-window-solutions.png";
import tabletopImage from "../assets/showcase-glass-tabletop.png";
import mirrorWallImage from "../assets/showcase-mirror-wall.png";
import specialtyImage from "../assets/showcase-specialty-glass.png";

export default function Showcase() {
  const projects = [
    {
      title: "Frameless Shower Enclosure",
      category: "Shower Glass",
      image: showerImage
    },
    {
      title: "Custom Vanity Mirror",
      category: "Custom Mirrors",
      image: mirrorImage
    },
    {
      title: "Window Glass Replacement",
      category: "Window Solutions",
      image: windowImage
    },
    {
      title: "Glass Tabletop",
      category: "Tabletops",
      image: tabletopImage
    },
    {
      title: "Mirror Wall Installation",
      category: "Custom Mirrors",
      image: mirrorWallImage
    },
    {
      title: "Specialty Glass Detail",
      category: "Specialty Glass",
      image: specialtyImage
    }
  ];

  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">SHOWCASE</span>

          <h1>Selected Installations.</h1>

          <p>
            A curated collection of residential glass installations showcasing
            precision craftsmanship and refined design.
          </p>
        </div>
      </section>

      <section className="fg-section">
        <div className="fg-showcase-grid">
          {projects.map((project) => (
            <article className="fg-showcase-card" key={project.title}>
              <div
                className="fg-showcase-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="fg-showcase-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
