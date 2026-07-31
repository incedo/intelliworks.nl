import type { Metadata } from "next";
import DemoChat from "./DemoChat";
import MobileNav from "../MobileNav";

export const metadata: Metadata = {
  title: "Contact — IntelliWorks",
  description: "Start a conversation with IntelliWorks about growth, AI and European technology.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header contact-header">
        <a className="brand" href="/" aria-label="IntelliWorks home">
          <span className="brand-mark">iw</span>
          <span>IntelliWorks</span>
        </a>
        <nav aria-label="Contact navigation">
          <a href="/#approach">Approach</a>
          <a href="/people">People</a>
          <a href="/insights">Insights</a>
          <a href="/portfolio">Portfolio</a>
        </nav>
        <a className="header-cta" href="/">Back to the site <Arrow /></a>
        <MobileNav />
      </header>

      <section className="contact-hero">
        <div className="eyebrow"><span /> Let’s talk about what’s next</div>
        <h1>Where do you<br />want to <em>grow?</em></h1>
        <p>
          Bring us the ambition, the difficult question or the half-formed idea.
          Our first conversation is about understanding where expertise and AI
          can create real momentum for your organisation.
        </p>
      </section>

      <DemoChat />

      <section className="contact-options" aria-label="Ways to contact IntelliWorks">
        <article>
          <span>01 · Write</span>
          <h2>Email us</h2>
          <p>For a direct introduction or to share a brief.</p>
          <a href="mailto:info@intelliworks.nl">info@intelliworks.nl <Arrow /></a>
        </article>
        <article>
          <span>02 · Call</span>
          <h2>Plan a call</h2>
          <p>Leave your number and a good time. We’ll call you back.</p>
          <a href="#message">Request a callback ↓</a>
        </article>
        <article>
          <span>03 · Meet</span>
          <h2>Across Europe</h2>
          <p>Based in the Netherlands, working with teams across Europe.</p>
          <a href="#message">Arrange a meeting ↓</a>
        </article>
      </section>

      <section className="contact-chat" id="message">
        <div className="chat-intro">
          <div className="section-label light">Start the conversation</div>
          <h2>Tell us what’s<br />on your mind.</h2>
          <p>Share a few details. Your message will open in your email app, ready to send securely to our team.</p>
        </div>
        <form
          action="mailto:info@intelliworks.nl?subject=Let%27s%20drive%20growth"
          method="post"
          encType="text/plain"
          className="contact-form"
        >
          <label>
            <span>Your name</span>
            <input type="text" name="Name" autoComplete="name" required placeholder="How should we address you?" />
          </label>
          <label>
            <span>Work email</span>
            <input type="email" name="Email" autoComplete="email" required placeholder="you@company.eu" />
          </label>
          <label>
            <span>Phone <small>optional</small></span>
            <input type="tel" name="Phone" autoComplete="tel" placeholder="For a callback" />
          </label>
          <label>
            <span>What would you like to move forward?</span>
            <textarea name="Message" rows={5} required placeholder="A challenge, ambition or idea…" />
          </label>
          <button type="submit">Continue in email <Arrow /></button>
          <p className="form-note">Prefer to write directly? <a href="mailto:info@intelliworks.nl">info@intelliworks.nl</a></p>
        </form>
      </section>

      <footer className="contact-footer">
        <a className="brand footer-brand" href="/"><span className="brand-mark">iw</span><span>IntelliWorks</span></a>
        <p>Experts + AI for European growth.</p>
        <div className="footer-links"><a href="mailto:info@intelliworks.nl">info@intelliworks.nl</a><a href="/">Home ↑</a></div>
      </footer>
    </main>
  );
}
