import Reveal from "./Reveal.jsx";
import { PROFILE } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal className="kicker">// Contact</Reveal>
        <Reveal as="h2" className="contact-title" delay={0.05}>
          Let's build something <span className="accent">great</span>.
        </Reveal>
        <Reveal as="p" className="contact-lead" delay={0.1}>
          Whether you're looking to scale your brand, improve ROAS, build a
          high-converting store or create a predictable growth engine — I'd love to
          help.
        </Reveal>

        <Reveal className="contact-actions" delay={0.15}>
          <a className="btn btn-wa" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="wa-icon" aria-hidden="true">✆</span> Chat on WhatsApp
          </a>
          <a className="btn btn-dark" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </Reveal>

        <Reveal className="contact-meta" delay={0.2}>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={PROFILE.agency} target="_blank" rel="noopener noreferrer">
            Growth Escalators ↗
          </a>
          <span>{PROFILE.location}</span>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-logo">{PROFILE.logo}</span>
          <span>© 2026 {PROFILE.name} · Founder, Growth Escalators</span>
        </div>
      </footer>
    </section>
  );
}
