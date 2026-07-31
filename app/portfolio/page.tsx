import type { Metadata } from "next";
import MobileNav from "../MobileNav";

export const metadata: Metadata = {
  title: "Portfolio — IntelliWorks",
  description: "Illustrative IntelliWorks portfolio cases across AI strategy, sovereign products and team capability.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const cases = [
  { number: "01", sector: "European logistics network", title: "From operational data to daily decisions", challenge: "Make fragmented planning information useful across a distributed operation.", approach: "A joint product team mapped critical decisions, prototyped an AI-assisted planning flow and built governance into the experience from day one.", result: "A concept that shows how teams can act faster while keeping people accountable for the final call.", color: "case-blue", mark: "FLOW" },
  { number: "02", sector: "Public-service platform", title: "Sovereignty designed into the service", challenge: "Create a trustworthy citizen experience without locking strategic capability into one supplier.", approach: "We shaped a modular platform concept around open interfaces, portable data and transparent automated decisions.", result: "A resilient service direction that keeps future choices open and puts public trust at the centre.", color: "case-lime", mark: "OPEN" },
  { number: "03", sector: "Industrial services group", title: "AI capability that scales through people", challenge: "Move beyond isolated experiments and make practical AI part of everyday improvement.", approach: "Cross-functional teams learned by building real use cases, supported by lightweight guardrails and an internal expert network.", result: "A repeatable model for learning, delivery and responsible adoption across markets.", color: "case-clay", mark: "GROW" },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="IntelliWorks home"><span className="brand-mark">iw</span><span>IntelliWorks</span></a>
        <nav aria-label="Portfolio navigation"><a href="/#approach">Approach</a><a href="/people">People</a><a href="/insights">Insights</a><a href="/portfolio" aria-current="page">Portfolio</a></nav>
        <a className="header-cta" href="/contact">Start a conversation <Arrow /></a>
        <MobileNav />
      </header>

      <section className="portfolio-hero">
        <div className="eyebrow"><span /> Illustrative portfolio</div>
        <h1>Work that leaves<br /><em>capability behind.</em></h1>
        <div className="portfolio-intro"><span>AI strategy · products · teams</span><p>Our best work creates two outcomes: progress you can see and strength that stays inside the organisation. These concept cases demonstrate how that portfolio could be presented.</p></div>
      </section>

      <section className="case-list" aria-label="Illustrative portfolio cases">
        {cases.map((item) => <article className="case-study" key={item.number}>
          <div className={`case-visual ${item.color}`}><span>{item.number}</span><strong>{item.mark}</strong><small>Concept case</small></div>
          <div className="case-content"><div className="section-label">{item.sector}</div><h2>{item.title}</h2><dl><div><dt>The challenge</dt><dd>{item.challenge}</dd></div><div><dt>Our approach</dt><dd>{item.approach}</dd></div><div><dt>Illustrative result</dt><dd>{item.result}</dd></div></dl><a href="/contact">Discuss a similar ambition <Arrow /></a></div>
        </article>)}
      </section>

      <section className="portfolio-principles"><div className="section-label light">What every engagement shares</div><div className="portfolio-principle-grid"><article><span>01</span><h3>People in the room</h3><p>Real users and internal experts shape the work from the start.</p></article><article><span>02</span><h3>Proof before scale</h3><p>We reduce risk by learning in small, meaningful increments.</p></article><article><span>03</span><h3>Ownership by design</h3><p>Knowledge, choices and capability remain with your organisation.</p></article></div></section>

      <section className="portfolio-cta"><div className="kicker">Your work could be next</div><h2>Show us where<br /><em>growth is stuck.</em></h2><a href="/contact">Start with a conversation <Arrow /></a></section>
      <footer><a className="brand footer-brand" href="/"><span className="brand-mark">iw</span><span>IntelliWorks</span></a><p>Experts + AI for European growth.</p><div className="footer-links"><a href="/insights">Insights</a><a href="/contact">Contact</a></div></footer>
    </main>
  );
}
