import Reveal from "./Reveal.jsx";
import { PROFILE, NAV } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal className="kicker">// Contact</Reveal>
        <Reveal as="h2" className="contact-title" delay={0.05}>
          Let's see if I can <span className="accent">move your revenue</span>.
        </Reveal>
        <Reveal as="p" className="contact-lead" delay={0.1}>
          Bring me your account, your numbers, and the bottleneck you can't crack.
          I usually respond within 24 hours.
        </Reveal>

        <Reveal className="contact-actions" delay={0.15}>
          <a
            className="btn btn-dark"
            href={PROFILE.cal}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">▦</span> Book a Call
          </a>
          <a
            className="btn btn-wa"
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="wa-icon" aria-hidden="true">✆</span> Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal className="contact-meta" delay={0.2}>
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <span>{PROFILE.location}</span>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-logo">{PROFILE.logo}</span>
          <nav className="footer-nav" aria-label="Footer">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <span>© 2026 {PROFILE.name}</span>
        </div>
      </footer>
    </section>
  );
}
