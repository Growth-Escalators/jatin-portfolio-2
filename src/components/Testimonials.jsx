import Reveal from "./Reveal.jsx";
import { TESTIMONIALS } from "../data.js";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="wrap">
        <Reveal className="kicker">// Reviews</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          What clients <span className="accent">say</span>.
        </Reveal>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal className="testi-card" key={t.name} delay={0.05 + i * 0.07}>
              <span className="testi-mark">"</span>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-who">
                <span className="testi-avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
