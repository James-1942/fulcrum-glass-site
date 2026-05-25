import React, { useState } from "react";
import "./FulcrumHeader.css";

export default function FulcrumHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fg-topbar">
        <div className="fg-topbar-inner">
          <a href="/" className="fg-logo-lockup" aria-label="Fulcrum Glass home">
            <img src="/fulcrum-logo-exact-website.png" alt="" className="fg-mark" />

            <span className="fg-logo-divider" />

            <span className="fg-wordmark">FULCRUM GLASS</span>
          </a>

          <div className="fg-topbar-actions">
            <a href="#contact" className="fg-outline-cta">
              REQUEST AN ESTIMATE
            </a>

            <button
              type="button"
              className={`fg-hamburger ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`fg-menu-drawer ${menuOpen ? "is-open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
