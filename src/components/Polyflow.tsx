import { useState } from "react";

const layers = [
  {
    id: "problem",
    step: "The problem",
    title: "Under-resourced language",
    body: "Most speech AI ignores languages like Haitian Creole — so learners and educators lack usable pronunciation tools.",
  },
  {
    id: "work",
    step: "The work",
    title: "Collect → Normalize → Align → Evaluate",
    body: "Raw corpora become curated training data: 26,800+ examples and 60+ hours of personally recorded Haitian Creole speech.",
  },
  {
    id: "system",
    step: "The system",
    title: "Text + Speech + Models",
    body: "Production SaaS on FastAPI, Next.js, PostgreSQL, and Redis — powering NLP/speech pipelines and assessment.",
  },
  {
    id: "product",
    step: "The product",
    title: "Echo",
    body: "Interactive pronunciation and phrase practice for real situations — like parent-teacher conferences.",
  },
];

export function Polyflow() {
  const [openId, setOpenId] = useState("product");

  return (
    <section id="startup" className="polyflow" aria-labelledby="polyflow-heading">
      <div className="polyflow-panel">
        <div className="polyflow-top">
          <div>
            <p className="polyflow-kicker">Currently building</p>
            <h2 id="polyflow-heading">Polyflow</h2>
            <p className="polyflow-tagline">
              Speech infrastructure for languages AI has overlooked.
            </p>
            <p className="polyflow-desc">
              An early-stage AI speech platform focused on under-resourced languages —
              starting with Haitian Creole — combining dataset infrastructure, models,
              and product surfaces people can actually practice with. Built alongside
              the founder tooling and community research that keep it grounded.
            </p>
            <ul className="polyflow-facts">
              <li>1,000+ person waitlist with 42% organic referrals</li>
              <li>Validated through 8+ user interviews and early pilots</li>
              <li>Multilingual NLP and speech pipelines for LLM/ASR fine-tuning</li>
              <li>Echo: AI pronunciation coaching for real-world conversations</li>
            </ul>
            <p className="polyflow-stack">
              FastAPI · Next.js · PostgreSQL · Redis · speech datasets · ASR
            </p>
            <a
              className="btn btn-outline"
              href="https://polyflow-landing-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit polyflow-landing-three.vercel.app ↗
            </a>

            <div className="polyflow-ecosystem">
              <p className="polyflow-ecosystem-label">Built alongside Polyflow</p>
              <div className="polyflow-ecosystem-links">
                <a href="https://github.com/rebeccachery/founder-os" target="_blank" rel="noreferrer">
                  Founder OS ↗
                </a>
                <a href="https://github.com/rebeccachery/nyc_map" target="_blank" rel="noreferrer">
                  Haitian Educational Equity Map ↗
                </a>
              </div>
            </div>
          </div>

          <figure className="polyflow-figure">
            <div className="polyflow-device">
              <img
                src="/echo-interface.png"
                alt="Echo interface showing Haitian Creole phrase practice with phrase match feedback"
                loading="lazy"
                width={344}
                height={701}
              />
            </div>
            <figcaption>
              An educator practicing phrases for an upcoming parent-teacher conference with a Haitian parent.
            </figcaption>
          </figure>
        </div>

        <div className="polyflow-layers" role="list">
          {layers.map((layer) => {
            const expanded = openId === layer.id;
            return (
              <button
                key={layer.id}
                type="button"
                className="layer-card"
                role="listitem"
                aria-expanded={expanded}
                onClick={() => setOpenId(expanded ? "" : layer.id)}
              >
                <p className="layer-step">{layer.step}</p>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
