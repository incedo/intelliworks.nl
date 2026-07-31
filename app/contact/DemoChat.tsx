"use client";

import { FormEvent, useState } from "react";

type Message = { role: "assistant" | "user"; text: string };

const suggestions = [
  "How can AI help us grow?",
  "Tell me about digital sovereignty",
  "I’d like to meet the team",
];

function demoReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("meet") || text.includes("call") || text.includes("contact") || text.includes("team")) {
    return "Great—tell us a little about your organisation in the form below, or email info@intelliworks.nl. A member of the IntelliWorks team will take it from there.";
  }
  if (text.includes("sovereign") || text.includes("europe") || text.includes("independent") || text.includes("privacy")) {
    return "We help European organisations build technology they can control: open where it should be, secure where it must be, and designed around European values and regulation.";
  }
  if (text.includes("product") || text.includes("design") || text.includes("build")) {
    return "IntelliWorks combines human-centred design, experienced product delivery and practical AI to create digital products people genuinely choose to use.";
  }
  if (text.includes("train") || text.includes("skill") || text.includes("people")) {
    return "We work alongside your people—not around them. That means building confidence, skills and new ways of working that remain inside your organisation.";
  }
  if (text.includes("ai") || text.includes("growth") || text.includes("strategy")) {
    return "We start with the growth challenge, not the technology. Together we identify valuable AI opportunities, create a practical roadmap and turn the strongest ideas into measurable progress.";
  }
  return "That sounds like a useful conversation. IntelliWorks brings experts and practical AI together to help European organisations grow. Share a little more, or use the contact form below to continue with the team.";
}

export default function DemoChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hello—I’m the IntelliWorks demo assistant. What would you like to move forward?" },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  function send(text: string) {
    const clean = text.trim().slice(0, 500);
    if (!clean || thinking) return;
    setMessages((current) => [...current, { role: "user", text: clean }]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", text: demoReply(clean) }]);
      setThinking(false);
    }, 550);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send(input);
  }

  return (
    <section className="demo-agent" aria-labelledby="demo-agent-title">
      <div className="demo-agent-intro">
        <div className="section-label">AI, with a human handover</div>
        <h2 id="demo-agent-title">Ask Intelli.</h2>
        <p>Explore how we think and work. When you’re ready, a real expert can continue the conversation.</p>
        <div className="demo-status"><span /> Demo assistant · no data is stored</div>
      </div>

      <div className="chat-window">
        <div className="chat-window-head">
          <div><span className="agent-avatar">iw</span><strong>Intelli</strong></div>
          <span>Online · demo</span>
        </div>
        <div className="chat-messages" aria-live="polite">
          {messages.map((message, index) => (
            <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
              {message.text}
            </div>
          ))}
          {thinking && <div className="chat-message assistant thinking" aria-label="Intelli is responding"><i /><i /><i /></div>}
        </div>
        <div className="chat-suggestions" aria-label="Suggested questions">
          {suggestions.map((suggestion) => (
            <button type="button" key={suggestion} onClick={() => send(suggestion)} disabled={thinking}>{suggestion}</button>
          ))}
        </div>
        <form className="chat-composer" onSubmit={submit}>
          <label className="sr-only" htmlFor="demo-chat-input">Ask Intelli a question</label>
          <input
            id="demo-chat-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about AI, growth or Europe…"
            maxLength={500}
          />
          <button type="submit" disabled={!input.trim() || thinking} aria-label="Send message">↗</button>
        </form>
      </div>
    </section>
  );
}
