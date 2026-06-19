import Reveal from "./Reveal.jsx";
import { INDUSTRIES } from "../data.js";

export default function Industries() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="section industries" id="industries">
      <div className="wrap">
        <Reveal className="kicker">// Industries</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Brands I've <span className="accent">scaled</span>.
        </Reveal>
      </div>

      <div className="ind-rail" aria-label="Client industries">
        <div className="ind-track">
          {row.map((name, i) => (
            <span className="ind-item" key={i}>
              {name}
              <i className="ind-star">✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
