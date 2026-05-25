import React, { useState } from "react";
import "./FulcrumHeader.css";

export default function FulcrumHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fg-header-v2">
        <div className="fg-header-v2-inner">
          <a href="/" className="fg-brand-v2" aria-label="Fulcrum Glass home">
            <img src="/fulcrum-logo-exact-website.png" alt="Fulcrum Glass" />
          </a>

          <div className="fg-actions-v2">
            <a className="fg-header-cta-v2" href="#contact">
              Request Estimate
            </a>

            <button
              className={`fg-menu-button-v2 ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`fg-menu-panel-v2 ${menuOpen ? "is-open" : ""}`}>
        <div className="fg-menu-card-v2">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="fg-menu-cta-v2" href="#contact" onClick={closeMenu}>
            Request an Estimate
          </a>
        </div>
      </div>
    </>
  );
}
