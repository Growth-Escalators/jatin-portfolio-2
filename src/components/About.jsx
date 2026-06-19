import Reveal from "./Reveal.jsx";
import { HIGHLIGHTS } from "../data.js";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <Reveal className="kicker">// About</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Growth systems that <span className="accent">scale revenue</span>.
        </Reveal>
        <Reveal as="p" className="about-lead" delay={0.1}>
          Over the last 3+ years I've worked with 187+ brands across eCommerce,
          healthcare, SaaS and consumer products. My focus is simple: build growth
          systems that increase revenue, improve customer acquisition and maximize
          marketing ROI.
        </Reveal>

        <div className="about-stats">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal className="about-stat" key={h.label} delay={0.1 + i * 0.07}>
              <span className="about-stat-num">{h.stat}</span>
              <span className="about-stat-label">{h.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
