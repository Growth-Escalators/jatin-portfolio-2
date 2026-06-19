import Reveal from "./Reveal.jsx";
import { METHOD } from "../data.js";

export default function Method() {
  return (
    <section className="section method" id="method">
      <div className="wrap">
        <Reveal className="kicker">// How I Work</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          The <span className="accent">Escalator Method</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Five stages. Built so spend actually compounds, not leaks.
        </Reveal>

        <div className="method-line">
          {METHOD.map((s, i) => (
            <Reveal className="method-step" key={s.n} delay={0.05 + i * 0.06}>
              <span className="method-n">{s.n}</span>
              <span className="method-node" aria-hidden="true" />
              <div className="method-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="exp-tags">
                  {s.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="method-close" delay={0.1}>
          This is why I don't run accounts for 60 days and disappear. The system is
          built to <span className="accent">scale — and to hold</span>.
        </Reveal>
      </div>
    </section>
  );
}
