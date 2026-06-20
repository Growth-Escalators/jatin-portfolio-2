import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV, PROFILE } from "../data.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "nav-scrolled" : ""}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-pill">
          <a className="nav-logo" href="#home">
            <span className="nav-avatar" aria-hidden="true">
              JA
            </span>
            {PROFILE.logo}
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-resume" href={PROFILE.resume} target="_blank" rel="noopener noreferrer" download>
              <span aria-hidden="true" style={{ marginRight: 4 }}>↓</span> CV
            </a>
            <a
              className="nav-hire"
              href={PROFILE.cal}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nav-hire-dot" /> Book a Call
            </a>
          </div>

          <button
            className={`nav-burger ${open ? "open" : ""}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <div className={`mobile-sheet ${open ? "open" : ""}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          className="nav-hire"
          href={PROFILE.cal}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <span className="nav-hire-dot" /> Book a Call
        </a>
      </div>
    </>
  );
}
