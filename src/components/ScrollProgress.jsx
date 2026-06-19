import { motion, useScroll, useSpring } from "framer-motion";

/* thin orange progress bar pinned to the top of the page */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
