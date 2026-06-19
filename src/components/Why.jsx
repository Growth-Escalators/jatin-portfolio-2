import Reveal from "./Reveal.jsx";
import { WHY } from "../data.js";

export default function Why() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <Reveal className="kicker">// Why Work With Me</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          What I'm <span className="accent">actually doing</span> with your account.
        </Reveal>

        <div className="exp-grid why-grid">
          {WHY.map((w, i) => (
            <Reveal
              className={`exp-card${w.lead ? " exp-card-lead" : ""}`}
              key={w.title}
              delay={0.05 + (i % 3) * 0.08}
            >
              <span className="exp-n">{w.n}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
