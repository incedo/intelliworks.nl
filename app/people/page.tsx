import type { Metadata } from "next";
import MobileNav from "../MobileNav";

export const metadata: Metadata = {
  title: "People — IntelliWorks",
  description: "Meet a demo IntelliWorks team: experienced people collaborating across disciplines and across Europe.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const people = [
  { initials: "ER", name: "Elena Rossi", role: "Growth & AI lead", focus: "Strategy · responsible AI", tone: "blue" },
  { initials: "BW", name: "Bram de Wit", role: "Product & technology director", focus: "Products · platforms", tone: "lime" },
  { initials: "SM", name: "Sofia Marin", role: "Responsible AI advisor", focus: "Governance · Europe", tone: "clay" },
  { initials: "JB", name: "Jonas Beck", role: "Platform engineer", focus: "Cloud · sovereignty", tone: "ink" },
  { initials: "AO", name: "Amara Okafor", role: "Experience strategist", focus: "Research · service design", tone: "sky" },
  { initials: "LD", name: "Léa Dubois", role: "Capability coach", focus: "Teams · transformation", tone: "sand" },
];

export default function PeoplePage() {
  return (
    <main className="people-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="IntelliWorks home">
          <span className="brand-mark">iw</span><span>IntelliWorks</span>
        </a>
        <nav aria-label="People navigation">
          <a href="/#approach">Approach</a>
          <a href="/people" aria-current="page">People</a>
          <a href="/insights">Insights</a>
          <a href="/portfolio">Portfolio</a>
        </nav>
        <a className="header-cta" href="/contact">Start a conversation <Arrow /></a>
        <MobileNav />
      </header>

      <section className="people-hero">
        <div className="eyebrow"><span /> People make intelligence useful</div>
        <h1>Expertise is<br />a <em>team sport.</em></h1>
        <div className="people-hero-copy">
          <span>IntelliWorks + collaborators + your people</span>
          <p>
            We assemble experienced, multidisciplinary teams around the outcome—not
            a fixed org chart. One close-knit group, combining your context with our
            expertise and the right independent specialists.
          </p>
        </div>
      </section>

      <section className="people-image" role="img" aria-label="A multidisciplinary team collaborating around a computer screen">
        <div><span>One team</span><strong>Shared ambition.<br />Different perspectives.</strong></div>
      </section>

      <section className="people-roster" aria-labelledby="people-roster-title">
        <div className="people-roster-head">
          <div>
            <div className="section-label">Example team</div>
            <h2 id="people-roster-title">A demo of the<br />people behind the work.</h2>
          </div>
          <p>These are illustrative profiles for the site demo—not published employee biographies.</p>
        </div>
        <div className="people-grid">
          {people.map((person, index) => (
            <article className="person-card" key={person.name}>
              <div className={`person-portrait ${person.tone}`}>
                <span>{person.initials}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <span>{person.focus}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="collaboration-model">
        <div className="section-label light">How we come together</div>
        <h2>Built around the work.<br /><em>Connected by trust.</em></h2>
        <div className="collaboration-rows">
          <article><span>01</span><h3>IntelliWorks experts</h3><p>A steady core that owns direction, quality and momentum from first question to lasting result.</p></article>
          <article><span>02</span><h3>Independent specialists</h3><p>Trusted European experts join when their specific craft, sector experience or local perspective adds value.</p></article>
          <article><span>03</span><h3>Your people</h3><p>Your knowledge stays central. We build with your teams so capability and confidence remain inside the organisation.</p></article>
        </div>
      </section>

      <section className="people-cta">
        <div className="kicker">Put the right people around your ambition</div>
        <h2>Let’s build your<br /><em>growth team.</em></h2>
        <a href="/contact">Meet us in a conversation <Arrow /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="/"><span className="brand-mark">iw</span><span>IntelliWorks</span></a>
        <p>Experts + AI for European growth.</p>
        <div className="footer-links"><a href="/contact">Contact</a><a href="/">Home ↑</a></div>
      </footer>
    </main>
  );
}
