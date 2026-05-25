import "./FulcrumHeader.css";

export default function FulcrumHeader() {
  return (
    <header className="fg-header">
      <div className="fg-header-inner">
        <a href="/" className="fg-brand" aria-label="Fulcrum Glass home">
          <img src="/fulcrum-logo-exact-website.png" alt="Fulcrum Glass" />
        </a>

        <div className="fg-actions">
          <a className="fg-header-cta" href="#contact">
            Request Estimate
          </a>

          <button className="fg-menu-button" aria-label="Open menu" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
