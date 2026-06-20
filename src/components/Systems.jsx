import Reveal from "./Reveal.jsx";
import { SYSTEMS } from "../data.js";
import { SYSTEM_ICON } from "./Icons.jsx";

export default function Systems() {
  return (
    <section className="section systems-section" id="systems">
      <div className="wrap">
        <Reveal className="kicker">// Beyond Media Buying</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Systems I've <span className="accent">built and shipped</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          I don't just run accounts. I build the tooling that makes the work scale —
          internal CRMs, reporting, lead-gen funnels, outbound engines.
        </Reveal>

        <div className="systems-grid">
          {SYSTEMS.map((s, i) => {
            const Icon = SYSTEM_ICON[s.icon];
            return (
              <Reveal className="system-card" key={s.title} delay={0.05 + i * 0.05}>
                <span className="system-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <span className="system-stack">{s.stack}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
