import Reveal from "./Reveal.jsx";
import { TOOLS } from "../data.js";

export default function Stack() {
  return (
    <section className="section stack" id="tools">
      <div className="wrap">
        <Reveal className="kicker">// Tools of the Trade</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          The stack I <span className="accent">run growth on</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          The kit behind the work — paid media, attribution, storefront, automation.
        </Reveal>

        <div className="stack-grid">
          {TOOLS.map((s, i) => (
            <Reveal className="stack-chip" key={s.name} delay={0.03 * i}>
              <span className="stack-name">{s.name}</span>
              <span className="stack-cat">{s.cat}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
