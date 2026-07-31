"use client";

import { useState } from "react";

const stages = [
  { number: "01", name: "Direction", label: "Value + priorities", detail: "Clarify the customer outcome, product bet and decision rights before accelerating activity.", move: "Use AI to strengthen evidence and scenario thinking—not to automate strategic accountability." },
  { number: "02", name: "Architecture", label: "Enterprise → solution", detail: "Translate enterprise direction into practical solution boundaries, platform choices and evolutionary guardrails.", move: "Keep architecture close to product delivery so decisions travel at the speed of learning." },
  { number: "03", name: "Development", label: "AI accelerated", detail: "Coding, testing and prototyping are moving faster. Development is no longer automatically the slowest part of delivery.", move: "Use forward-deployed engineers to shorten the loop between business opportunity and production software.", state: "accelerated" },
  { number: "04", name: "Security", label: "Next momentum opportunity", detail: "When engineering speeds up, security assurance becomes an opportunity to make trusted releases move just as fluently.", move: "Move threat modelling, policy checks and evidence creation into the product workflow from the beginning.", state: "opportunity" },
  { number: "05", name: "Governance", label: "Next momentum opportunity", detail: "Clear ownership, risk classification and timely decisions can preserve every gain created by faster development.", move: "Turn governance into clear guardrails, named decision owners and lightweight evidence that travels with the work.", state: "opportunity" },
  { number: "06", name: "Go-to-market", label: "Adoption + marketing", detail: "Faster delivery creates the opportunity to bring positioning, enablement, operations and customer adoption into the same rhythm.", move: "Bring marketing and change expertise into the product team early, using AI to accelerate insight and content workflows.", state: "opportunity" },
];

export default function FlowExplorer() {
  const [active, setActive] = useState(2);
  const selected = stages[active];

  return (
    <div className="flow-explorer">
      <div className="delivery-flow" aria-label="Explore the company-wide product delivery flow">
        {stages.map((stage, index) => (
          <button
            type="button"
            key={stage.name}
            className={`${stage.state ?? ""} ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
          >
            <span>{stage.number}</span><strong>{stage.name}</strong><small>{stage.label}</small>
          </button>
        ))}
      </div>
      <div className="flow-insight" aria-live="polite">
        <div><span>Selected stage · {selected.number}</span><h3>{selected.name}</h3></div>
        <p>{selected.detail}</p>
        <p><strong>IntelliWorks move</strong>{selected.move}</p>
      </div>
    </div>
  );
}
