import type { Metadata } from "next";
import MobileNav from "../MobileNav";

export const metadata: Metadata = {
  title: "Insights — IntelliWorks",
  description: "Demo articles and video conversations about practical AI, people and European technology.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const articles = [
  { number: "01", type: "Point of view · 6 min", title: "Your AI strategy should start with human judgement", intro: "The strongest AI roadmaps begin with the decisions people need to make—not a catalogue of tools.", body: "Map the moments where better information or faster learning changes an outcome. Then give teams the context, guardrails and confidence to use AI well. Technology becomes valuable when it makes good judgement easier to act on." },
  { number: "02", type: "Field note · 4 min", title: "Sovereignty is a product decision", intro: "Digital independence is shaped in everyday architecture and procurement choices.", body: "Ownership is not isolation. It means knowing which capabilities are strategic, keeping meaningful choice in the stack and designing for portability from the start. Small decisions compound into long-term freedom to move." },
  { number: "03", type: "Practice · 5 min", title: "Build capability while you build the product", intro: "Transformation lasts when the client team learns through delivery, not after it.", body: "Pair experts across organisational boundaries, make reasoning visible and rotate ownership early. The product improves, and the organisation gains the confidence to keep improving it after the first launch." },
];

const episodes = [
  { number: "E01", length: "04:12", title: "What makes AI practical?", text: "A short conversation about moving from impressive demos to useful, measurable work." },
  { number: "E02", length: "06:40", title: "Europe’s technology moment", text: "Why digital sovereignty can be a source of product quality, trust and growth." },
  { number: "E03", length: "05:18", title: "Experts who leave teams stronger", text: "How collaborative delivery transfers judgement—not only documentation." },
];

export default function InsightsPage() {
  return (
    <main className="insights-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="IntelliWorks home"><span className="brand-mark">iw</span><span>IntelliWorks</span></a>
        <nav aria-label="Insights navigation"><a href="/#approach">Approach</a><a href="/people">People</a><a href="/insights" aria-current="page">Insights</a><a href="/portfolio">Portfolio</a></nav>
        <a className="header-cta" href="/contact">Start a conversation <Arrow /></a>
        <MobileNav />
      </header>

      <section className="insights-hero">
        <div className="eyebrow"><span /> Blog + vlog</div>
        <h1>Ideas worth<br /><em>moving on.</em></h1>
        <p>Clear thinking from the intersection of people, AI and European ambition. Demo editorial content for the new IntelliWorks platform.</p>
      </section>

      <section className="featured-insight">
        <div className="featured-visual"><span>New perspective</span><strong>EU<br />+ AI</strong><small>01 / 26</small></div>
        <div className="featured-copy">
          <div className="section-label">Featured article · 8 min</div>
          <h2>Europe doesn’t need to copy the future. It can design its own.</h2>
          <p>Technological independence is not about building everything alone. It is about retaining the ability to choose, adapt and create—on terms that reflect European strengths.</p>
          <details><summary>Read the demo article <Arrow /></summary><div><p>Europe’s opportunity sits between two unhelpful extremes: dependency on closed ecosystems and the belief that independence means isolation. A stronger path is selective sovereignty.</p><p>Organisations can decide which knowledge, data and platforms are strategic; use open standards where they expand choice; and collaborate across borders where shared capability makes everyone stronger. Sovereignty, approached well, becomes a design principle for better products and more resilient growth.</p></div></details>
        </div>
      </section>

      <section className="article-section">
        <div className="article-section-head"><div className="section-label">Latest writing</div><p>Illustrative articles for the site demo</p></div>
        <div className="article-grid">
          {articles.map((article) => <details className="article-card" key={article.number}><summary><span>{article.number}</span><small>{article.type}</small><h2>{article.title}</h2><p>{article.intro}</p><b>Open article +</b></summary><div className="article-body"><p>{article.body}</p><a href="/contact">Continue the conversation <Arrow /></a></div></details>)}
        </div>
      </section>

      <section className="vlog-section">
        <div className="vlog-head"><div className="section-label light">IntelliWorks on camera</div><h2>Watch the<br /><em>thinking unfold.</em></h2><p>Short demo conversations with experts, collaborators and European changemakers.</p></div>
        <div className="vlog-grid">
          {episodes.map((episode) => <details className="vlog-card" key={episode.number}><summary><div className="vlog-cover"><span>{episode.number}</span><b>▶</b><small>{episode.length}</small></div><h3>{episode.title}</h3><p>{episode.text}</p></summary><div className="vlog-transcript"><strong>Demo episode preview</strong><p>This placeholder demonstrates where the video player, episode description and transcript would live once original IntelliWorks recordings are ready.</p></div></details>)}
        </div>
      </section>

      <section className="insights-cta"><div className="kicker">Have a perspective to share?</div><h2>Let’s make the<br /><em>conversation useful.</em></h2><a href="/contact">Talk with IntelliWorks <Arrow /></a></section>
      <footer><a className="brand footer-brand" href="/"><span className="brand-mark">iw</span><span>IntelliWorks</span></a><p>Experts + AI for European growth.</p><div className="footer-links"><a href="/portfolio">Portfolio</a><a href="/contact">Contact</a></div></footer>
    </main>
  );
}
