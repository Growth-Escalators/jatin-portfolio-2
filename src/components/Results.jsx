import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HIGHLIGHTS } from "../data.js";

const EASE = [0.22, 1, 0.36, 1];

/* parse "187+", "₹8.9Cr+", "120%", "2.5x" → animate the numeric part */
function useCountUp(target, run) {
  const [val, setVal] = useState(0);
  const num = parseFloat(String(target).replace(/[^0-9.]/g, "")) || 0;
  const decimals = String(num).includes(".") ? 1 : 0;
  useEffect(() => {
    if (!run) return undefined;
    let raf;
    const start = performance.now();
    const dur = 1500;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setVal(num * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, num]);
  const shown = run ? val.toFixed(decimals) : "0";
  return String(target).replace(/[0-9.]+/, shown);
}

function StatItem({ stat, label, run, delay }) {
  const display = useCountUp(stat, run);
  return (
    <motion.div
      className="result-item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      <span className="result-num">{display}</span>
      <span className="result-label">{label}</span>
    </motion.div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="section results" id="results" ref={ref}>
      <div className="wrap">
        <p className="kicker kicker-light">// By the numbers</p>
        <h2 className="results-head">
          Results that <span className="accent">compound</span>.
        </h2>
        <div className="results-grid">
          {HIGHLIGHTS.map((h, i) => (
            <StatItem
              key={h.label}
              stat={h.stat}
              label={h.label}
              run={inView}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
