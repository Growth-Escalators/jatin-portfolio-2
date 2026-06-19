import Reveal from "./Reveal.jsx";
import { CASE_STUDIES, MINI_CASES } from "../data.js";

export default function CaseStudies() {
  return (
    <section className="section case-studies" id="case-studies">
      <div className="wrap">
        <Reveal className="kicker">// Case Studies</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          The work, <span className="accent">in detail</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Two recent engagements — Problem, what I did, result. No vanity numbers.
        </Reveal>

        <div className="case-deep">
          {CASE_STUDIES.map((c, i) => (
            <Reveal className="case-card" key={i} delay={0.05 + i * 0.06}>
              <div className="case-head">
                <h3>{c.name}</h3>
                <span className="proj-industry">{c.industry}</span>
              </div>
              <span className="proj-role">{c.role}</span>

              <div className="case-body">
                <div className="case-block">
                  <span className="case-block-label">Problem</span>
                  <p>{c.problem}</p>
                </div>
                <div className="case-block">
                  <span className="case-block-label">What I did</span>
                  <p>{c.action}</p>
                </div>
                <div className="case-block case-block-result">
                  <span className="case-block-label">Result</span>
                  <p>{c.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="case-more-label" delay={0.1}>
          More work
        </Reveal>

        <div className="mini-grid">
          {MINI_CASES.map((m, i) => (
            <Reveal className="mini-card" key={`${m.name}-${i}`} delay={0.04 * i}>
              <div className="mini-card-top">
                <span className="proj-industry">{m.industry}</span>
              </div>
              <h4>{m.name}</h4>
              <p>{m.note}</p>
              <span className="mini-more">See more →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
