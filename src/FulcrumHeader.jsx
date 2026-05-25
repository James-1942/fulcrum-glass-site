import React, { useState } from "react";
import "./FulcrumHeader.css";

export default function FulcrumHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fg-header-lux">
        <div className="fg-header-inner-lux">

          <a href="/" className="fg-brand-lux">
            <img
              src="/fulcrum-logo-exact-website.png"
              alt="Fulcrum Glass"
            />

            <div className="fg-brand-divider"></div>

            <div className="fg-brand-text">
              <span>FULCRUM GLASS</span>
            </div>
          </a>

          <div className="fg-header-actions">

            <a href="#contact" className="fg-estimate-btn">
              REQUEST AN ESTIMATE
            </a>

            <button
              className={`fg-menu-btn ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </header>

      <div className={`fg-slide-menu ${menuOpen ? "show" : ""}`}>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}
