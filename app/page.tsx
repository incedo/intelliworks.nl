import FlowExplorer from "./FlowExplorer";
import MobileNav from "./MobileNav";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="IntelliWorks home">
          <span className="brand-mark">iw</span>
          <span>IntelliWorks</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#work">Services</a>
          <a href="/people">People</a>
          <a href="/insights">Insights</a>
          <a href="/portfolio">Portfolio</a>
        </nav>
        <a className="header-cta" href="/contact">
          Start a conversation <Arrow />
        </a>
        <MobileNav />
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Built in Europe · Ready for what’s next</div>
        <h1>Drive growth.<br /><em>Humanly intelligent.</em></h1>
        <div className="hero-bottom">
          <p>
            We bring experienced people and practical AI together to help
            European organisations grow—on technology they can truly own.
          </p>
          <a className="circle-link" href="#approach" aria-label="Explore our approach">↓</a>
        </div>
        <div className="hero-image" role="img" aria-label="A diverse team collaborating around a screen">
          <div className="image-note"><span>01</span> Expertise meets momentum</div>
        </div>
      </section>

      <section className="manifesto" id="approach">
        <div className="section-label">Our point of view</div>
        <div className="manifesto-copy">
          <h2>AI should amplify people.<br />Not replace their judgement.</h2>
          <p>
            The best growth comes from pairing deep human expertise with AI
            that is useful, responsible and grounded in the real world. We work
            beside your people, building capability that stays with you.
          </p>
          <a className="text-link" href="/people">Meet the people behind the work <Arrow /></a>
        </div>
      </section>

      <section className="services" id="work">
        <div className="services-head">
          <div>
            <div className="section-label light">How we drive growth</div>
            <h2>From ambition<br />to company-wide flow.</h2>
          </div>
          <p>Architecture, embedded engineering and a new operating model that improves the whole path from idea to market.</p>
        </div>
        <div className="service-grid">
          <details><summary><span className="service-number">01</span><div className="topic-visual visual-strategy" aria-hidden="true"><i /><i /><i /><i /><b>Value</b></div><h3>AI strategy<br />that moves</h3><p>Find the use cases that matter, align your teams and turn AI ambition into a practical roadmap.</p><span className="service-open">Explore <b>+</b></span></summary><div className="service-detail"><strong>Typical engagement</strong><p>Opportunity framing · portfolio choices · responsible-AI guardrails · delivery roadmap</p></div></details>
          <details><summary><span className="service-number">02</span><div className="topic-visual visual-architecture" aria-hidden="true"><i>Enterprise</i><i>Domain</i><i>Solution</i></div><h3>Architecture<br />from enterprise to solution</h3><p>A role-based capability that connects strategy, operating models, platforms and solution choices—without adding another silo.</p><span className="service-open">Explore <b>+</b></span></summary><div className="service-detail"><strong>Typical engagement</strong><p>Target architecture · decision principles · platform direction · solution runway</p></div></details>
          <details><summary><span className="service-number">03</span><div className="topic-visual visual-people people-build" role="img" aria-label="People collaborating closely around a digital product"><span>Close to the work</span></div><h3>Forward-deployed<br />engineering</h3><p>Engineers embedded close to the business, turning real opportunities into working products and shortening every learning loop.</p><span className="service-open">Explore <b>+</b></span></summary><div className="service-detail"><strong>Typical engagement</strong><p>Embedded discovery · rapid prototypes · production delivery · capability transfer</p></div></details>
          <details><summary><span className="service-number">04</span><div className="topic-visual visual-flow" aria-hidden="true"><i /><i /><i /><i /><i /><span>One connected system</span></div><h3>Company-wide<br />flow design</h3><p>Redesign the way strategy, architecture, development, security, governance and go-to-market move as one system.</p><span className="service-open">Explore <b>+</b></span></summary><div className="service-detail"><strong>Typical engagement</strong><p>Value-stream mapping · momentum analysis · AI workflow redesign · operating rhythm</p></div></details>
          <details><summary><span className="service-number">05</span><div className="topic-visual visual-people people-grow" role="img" aria-label="A diverse team learning and succeeding together"><span>Capability that stays</span></div><h3>Teams that<br />keep growing</h3><p>Upskill your people, embed new ways of working and make lasting capability your competitive edge.</p><span className="service-open">Explore <b>+</b></span></summary><div className="service-detail"><strong>Typical engagement</strong><p>Leadership coaching · hands-on enablement · communities of practice · playbooks</p></div></details>
        </div>
      </section>

      <section className="flow-model" aria-labelledby="flow-title">
        <div className="flow-model-head">
          <div className="section-label">A new way of work</div>
          <h2 id="flow-title">When development speeds up,<br /><em>momentum can spread.</em></h2>
          <p>
            AI is making software delivery dramatically faster. Product success now depends on
            whether the rest of the organisation can move with it: architecture, security,
            governance, adoption, operations and marketing.
          </p>
        </div>

        <FlowExplorer />

        <div className="flow-method">
          <div className="flow-method-intro">
            <span>Grow the whole system</span>
            <h3>Momentum<br />stage by stage.</h3>
          </div>
          <article><span>01</span><h4>See the whole flow</h4><p>Make work, wait time and decision ownership visible from idea to customer outcome.</p></article>
          <article><span>02</span><h4>Unlock the next opportunity</h4><p>Focus AI, process change and expert attention where the largest gain in flow is available now.</p></article>
          <article><span>03</span><h4>Compound momentum</h4><p>As one stage improves, strengthen the next. Turn continuous optimisation into the organisation’s shared operating rhythm.</p></article>
        </div>

        <div className="momentum-loop" aria-label="Continuous momentum cycle">
          <div><span>Continuous momentum</span><h3>A learning loop for the whole company.</h3></div>
          <ol><li><b>01</b><strong>Observe</strong><small>See flow clearly</small></li><li><b>02</b><strong>Choose</strong><small>Find the next gain</small></li><li><b>03</b><strong>Improve</strong><small>Redesign together</small></li><li><b>04</b><strong>Scale</strong><small>Share what works</small></li></ol>
        </div>
      </section>

      <section className="europe" id="europe">
        <div className="europe-photo" role="img" aria-label="Colleagues celebrating a successful collaboration" />
        <div className="europe-copy">
          <div className="section-label">A strong digital Europe</div>
          <h2>Own the<br /><em>technology.</em><br />Shape the future.</h2>
          <p>
            Europe has the talent, values and ingenuity to lead. We help
            organisations build sovereign capability: open where it should be,
            secure where it must be, and always under your control.
          </p>
          <div className="principles">
            <span>European by design</span>
            <span>Responsible by default</span>
            <span>Independent by choice</span>
          </div>
        </div>
      </section>

      <section className="closing">
        <span className="kicker">Your next move starts here</span>
        <h2>Let’s turn intelligence<br />into <em>momentum.</em></h2>
        <a href="/contact">Tell us where you want to grow <Arrow /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">iw</span><span>IntelliWorks</span></a>
        <p>Experts + AI for European growth.</p>
        <div className="footer-links"><a href="/contact">Contact</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
