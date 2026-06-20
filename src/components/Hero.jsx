import { motion } from "framer-motion";
import { PROFILE, PORTRAIT, HERO_STATS } from "../data.js";

const EASE = [0.22, 1, 0.36, 1];

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.15 + i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* animated ambient background */}
      <div className="hero-bgfx" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="grid-lines" />
      </div>

      <div className="hero-grid">
        {/* ---------- left column ---------- */}
        <div className="hero-copy">
          <motion.span
            className="badge"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="badge-dot" /> {PROFILE.availability}
          </motion.span>

          <h1 className="hero-title">
            <motion.span variants={rise} initial="hidden" animate="show" custom={1}>
              Media Buyer +
            </motion.span>
            <motion.span
              className="accent"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={2}
            >
              Creative Strategist<span className="dot">.</span>
            </motion.span>
          </h1>

          <motion.p
            className="hero-intro"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={6}
          >
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
            <a
              className="btn btn-outline"
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span aria-hidden="true">↓</span> Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={7}
          >
            {HERO_STATS.map((s, i) => (
              <span key={s.label} style={{ display: "contents" }}>
                <span>
                  <strong>{s.strong}</strong> {s.label}
                </span>
                {i < HERO_STATS.length - 1 && <span className="hero-stats-sep" />}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ---------- right column: framed portrait + floating card ---------- */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        >
          <span className="deco deco-dots deco-tl" aria-hidden="true" />
          <span className="deco deco-arc" aria-hidden="true" />
          <span className="deco deco-dots deco-br" aria-hidden="true" />

          <div className="portrait">
            <img src={PORTRAIT} alt={`${PROFILE.name} — ${PROFILE.role}`} />
          </div>

          {/* floating glass mini-card — proof point */}
          <motion.div
            className="float-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1 }}
          >
            <span className="float-spark">▲</span>
            <div>
              <strong>6×</strong>
              <em>revenue scale · 60 days</em>
            </div>
          </motion.div>

          <motion.div
            className="float-pill"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
          >
            <span className="float-pill-dot" /> Async · US & EU overlap
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
