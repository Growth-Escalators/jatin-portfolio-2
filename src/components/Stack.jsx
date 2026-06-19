import Reveal from "./Reveal.jsx";
import { STACK } from "../data.js";

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="wrap">
        <Reveal className="kicker">// Stack</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          The tools I <span className="accent">run growth on</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          A battle-tested stack across paid media, retention, analytics and automation.
        </Reveal>

        <div className="stack-grid">
          {STACK.map((s, i) => (
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
