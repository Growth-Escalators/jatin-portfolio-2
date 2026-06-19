import Reveal from "./Reveal.jsx";
import { PROCESS } from "../data.js";

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <Reveal className="kicker">// Process</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          How we <span className="accent">work together</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          A clear, proven path from "where's the growth?" to a system that scales on
          its own.
        </Reveal>

        <div className="proc-line">
          {PROCESS.map((p, i) => (
            <Reveal className="proc-step" key={p.n} delay={0.05 + i * 0.08}>
              <span className="proc-n">{p.n}</span>
              <span className="proc-node" aria-hidden="true" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
