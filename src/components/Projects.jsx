import Reveal from "./Reveal.jsx";
import { PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <Reveal className="kicker">// Featured Work</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Projects that <span className="accent">delivered</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Real engagements, real numbers — growth, branding, funnels and stores built
          to perform.
        </Reveal>

        <div className="proj-list">
          {PROJECTS.map((p, i) => {
            const Tag = p.href ? "a" : "div";
            return (
              <Reveal key={p.name} delay={0.05 + i * 0.06}>
                <Tag
                  className="proj-row"
                  {...(p.href
                    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="proj-index">0{i + 1}</span>

                  <div className="proj-main">
                    <div className="proj-head">
                      <h3>{p.name}</h3>
                      <span className="proj-industry">{p.industry}</span>
                    </div>
                    <span className="proj-role">{p.role}</span>
                    <p className="proj-blurb">{p.blurb}</p>
                  </div>

                  <div className="proj-results">
                    {p.results.map((r) => (
                      <span key={r}>
                        <i>↗</i> {r}
                      </span>
                    ))}
                  </div>

                  <span className="proj-arrow" aria-hidden="true">
                    {p.href ? "↗" : "→"}
                  </span>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
