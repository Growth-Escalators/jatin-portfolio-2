import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* fade-up on scroll into view */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}
