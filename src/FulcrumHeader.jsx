import "./FulcrumHeader.css";

export default function FulcrumHeader() {
  return (
    <header className="fg-header">
      <div className="fg-header-inner">
        <a href="/" className="fg-brand" aria-label="Fulcrum Glass home">
           <img src="/fulcrum-logo-exact-website.png" alt="Fulcrum Glass" />
        </a>

        <nav className="fg-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="fg-header-cta" href="#contact">
          Request Estimate
        </a>
      </div>
    </header>
  );
}
