import Reveal from "./Reveal.jsx";
import { PROFILE } from "../data.js";

/* modern bento grid — quick "who I am" snapshot */
export default function Snapshot() {
  return (
    <section className="section snapshot" id="snapshot">
      <div className="wrap">
        <Reveal className="kicker">// Snapshot</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          A founder who <span className="accent">ships growth</span>.
        </Reveal>

        <div className="bento">
          <Reveal className="bento-cell bento-lead" delay={0.05}>
            <span className="bento-tag">Who I am</span>
            <p>
              I'm <strong>Jatin Agrawal</strong> — Founder of Growth Escalators. I help
              eCommerce, healthcare and SaaS brands turn marketing into a predictable,
              compounding revenue engine.
            </p>
            <div className="bento-roles">
              {PROFILE.roles.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="bento-cell bento-exp" delay={0.1}>
            <span className="bento-num">3+</span>
            <span className="bento-label">Years scaling brands</span>
          </Reveal>

          <Reveal className="bento-cell bento-spend" delay={0.15}>
            <span className="bento-num">₹8.9Cr+</span>
            <span className="bento-label">Ad spend managed profitably</span>
            <div className="bento-bars" aria-hidden="true">
              {[40, 58, 50, 72, 64, 88, 100].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </Reveal>

          <Reveal className="bento-cell bento-loc" delay={0.2}>
            <span className="bento-tag">Based in</span>
            <span className="bento-big">Jaipur, India</span>
            <span className="bento-sub">Working with brands worldwide 🌍</span>
          </Reveal>

          <Reveal className="bento-cell bento-now" delay={0.25}>
            <span className="bento-live">
              <i /> Available now
            </span>
            <p>Taking on a limited number of new growth partners this quarter.</p>
            <a href="#contact" className="bento-link">
              Start a project →
            </a>
          </Reveal>

          <Reveal className="bento-cell bento-social" delay={0.3}>
            <span className="bento-tag">Connect</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={PROFILE.agency} target="_blank" rel="noopener noreferrer">
              Growth Escalators ↗
            </a>
            <a href={`mailto:${PROFILE.email}`}>Email ↗</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
