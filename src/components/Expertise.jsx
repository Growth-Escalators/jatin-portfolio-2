import Reveal from "./Reveal.jsx";
import { EXPERTISE } from "../data.js";

export default function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="wrap">
        <Reveal className="kicker">// Expertise</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          What I do <span className="accent">best</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Marketing first, tech as the multiplier — every system I build exists to
          fill your pipeline and scale your revenue.
        </Reveal>

        <div className="exp-grid">
          {EXPERTISE.map((e, i) => (
            <Reveal className="exp-card" key={e.title} delay={0.05 + (i % 3) * 0.08}>
              <span className="exp-n">{e.n}</span>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
