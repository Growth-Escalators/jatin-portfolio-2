import Reveal from "./Reveal.jsx";
import { TRACK_RECORD } from "../data.js";

export default function TrackRecord() {
  return (
    <section className="section track-record" id="track-record">
      <div className="wrap">
        <Reveal className="kicker">● The Track Record</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Brands I've <span className="accent">scaled and kept</span>.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          I don't take accounts to run them for 60 days and disappear. Here's who
          I've scaled — and held.
        </Reveal>

        <div className="exp-grid">
          {TRACK_RECORD.map((b, i) => (
            <Reveal
              className={`exp-card track-card${b.international ? " track-card-intl" : ""}`}
              key={b.name}
              delay={0.05 + (i % 3) * 0.08}
            >
              <div className="track-head">
                <span className="exp-n">0{i + 1}</span>
                {b.international && (
                  <span className="track-intl-tag">International · {b.location}</span>
                )}
              </div>
              <h3>{b.name}</h3>
              <p className="track-niche">{b.niche}</p>
              <p className="track-held">
                <i>↗</i> Held {b.held}
              </p>
              <p className="track-result">{b.result}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
