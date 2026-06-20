import Reveal from "./Reveal.jsx";
import { TRUST_STATS } from "../data.js";
import { TRUST_ICON } from "./Icons.jsx";

export default function TrustStrip() {
  return (
    <section className="trust-strip-section" aria-label="Track record at a glance">
      <div className="wrap">
        <div className="trust-strip">
          {TRUST_STATS.map((s, i) => {
            const Icon = TRUST_ICON[s.icon];
            return (
              <Reveal className="trust-item" key={s.label} delay={0.04 * i}>
                <span className="trust-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <div>
                  <strong>{s.strong}</strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
