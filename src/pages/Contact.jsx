import React from "react";
import FulcrumHeader from "../FulcrumHeader";
import "../App.css";
import "./ServicePage.css";

export default function Contact() {
  return (
    <main className="site">
      <FulcrumHeader />

      <section className="fg-service-hero">
        <div className="fg-service-content">
          <span className="fg-eyebrow">CONTACT</span>

          <h1>Request an Estimate.</h1>

          <p>
            Tell us about your project and we’ll help bring the right glass
            solution into focus.
          </p>
        </div>
      </section>

      <section className="fg-section fg-contact">
        <form className="fg-contact-form">
          <input placeholder="Name" />
          <input placeholder="Phone" />
          <input placeholder="Email" />

          <select defaultValue="">
            <option value="" disabled>
              Service Type
            </option>
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
