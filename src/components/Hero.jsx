import { motion } from "framer-motion";
import { PROFILE, PORTRAIT } from "../data.js";

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
            <span className="badge-dot" /> Open to new projects
          </motion.span>

          <h1 className="hero-title">
            <motion.span variants={rise} initial="hidden" animate="show" custom={1}>
              Performance
            </motion.span>
            <motion.span
              className="accent"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={2}
            >
              Marketing
            </motion.span>
            <motion.span variants={rise} initial="hidden" animate="show" custom={3}>
              Strategist<span className="dot">.</span>
            </motion.span>
          </h1>

          <motion.p
            className="hero-intro"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            className="hero-chips"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={5}
          >
            {PROFILE.chips.map((c) => (
              <span className="chip" key={c}>
                <i className="chip-tick">✓</i> {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-cta"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={6}
          >
            <a className="btn btn-wa" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className="wa-icon" aria-hidden="true">✆</span> Chat on WhatsApp
            </a>
            <a className="btn btn-outline" href={`mailto:${PROFILE.email}`}>
              <span aria-hidden="true">▦</span> Book a Call
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={7}
          >
            <span>
              <strong>187+</strong> BRANDS
            </span>
            <span className="hero-stats-sep" />
            <span>
              <strong>₹8.9Cr+</strong> AD SPEND
            </span>
            <span className="hero-stats-sep" />
            <span>
              <strong>120%</strong> ROAS LIFT
            </span>
          </motion.div>
        </div>

        {/* ---------- right column: framed portrait ---------- */}
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
            <img src={PORTRAIT} alt={`${PROFILE.name} — ${PROFILE.roles.join(", ")}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
