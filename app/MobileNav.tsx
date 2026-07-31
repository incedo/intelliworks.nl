export default function MobileNav() {
  return (
    <details className="mobile-nav">
      <summary aria-label="Open navigation">
        <span>Menu</span>
        <i aria-hidden="true" />
      </summary>
      <div className="mobile-nav-panel">
        <a href="/#approach">Approach <span>01</span></a>
        <a href="/#work">Services <span>02</span></a>
        <a href="/people">People <span>03</span></a>
        <a href="/insights">Insights <span>04</span></a>
        <a href="/portfolio">Portfolio <span>05</span></a>
        <a className="mobile-nav-cta" href="/contact">Start a conversation <span>↗</span></a>
      </div>
    </details>
  );
}
