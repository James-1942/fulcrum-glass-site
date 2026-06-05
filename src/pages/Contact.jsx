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
          <span className="fg-eyebrow">REQUEST AN ESTIMATE</span>
          <h1>Let’s Discuss Your Project.</h1>
          <p>
            From frameless shower glass and custom mirrors to window glass
            solutions and specialty applications, Fulcrum Glass provides
            precision-crafted residential glass installations.
          </p>
        </div>
      </section>

      <section className="fg-section fg-contact">
        <div className="fg-contact-layout">
          <div className="fg-contact-info">
            <span className="fg-eyebrow">CONTACT</span>
            <h2>Start with the details.</h2>
            <p>
              Share a few details about your space, service needs, and timeline.
              We’ll review the information and follow up to discuss the best
              glass solution for your project.
            </p>

            <div className="fg-contact-details">
              <div>
                <strong>Services</strong>
                <p>
                  Shower glass, mirrors, window glass, tabletops, and specialty
                  residential glass.
                </p>
              </div>

              <div>
                <strong>Veteran Owned</strong>
                <p>
                  Built on precision, accountability, and clean execution from
                  first measurement to final installation.
                </p>
              </div>
            </div>
          </div>

          <form
            className="fg-contact-form"
            action="https://formspree.io/f/xykvpozp"
            method="POST"
          >
            <input name="name" placeholder="Name" />
            <input name="phone" placeholder="Phone" />
            <input name="email" type="email" placeholder="Email" />

            <select name="service" defaultValue="">
              <option value="" disabled>
                Service Type
              </option>
              <option>Frameless Shower Enclosures</option>
              <option>Custom Mirrors</option>
              <option>Window & Glass Solutions</option>
              <option>Glass Tabletops</option>
              <option>Specialty Glass Applications</option>
            </select>

            <textarea name="message" placeholder="Project Details" rows="6" />

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
