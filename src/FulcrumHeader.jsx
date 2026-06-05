import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FulcrumHeader.css";

export default function FulcrumHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fg-topbar">
        <div className="fg-topbar-inner">
         <Link to="/" className="fg-logo-lockup" aria-label="Fulcrum Glass home">
            <img src="/fulcrum-mark-only.png" alt="Fulcrum Glass" className="fg-mark" />

            <span className="fg-logo-divider" />

            <span className="fg-wordmark">FULCRUM GLASS</span>
          </Link>

          <div className="fg-topbar-actions">
          <Link to="/contact" className="fg-outline-cta">
            REQUEST AN ESTIMATE
          </Link>

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
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/showcase" onClick={closeMenu}>Showcase</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}
