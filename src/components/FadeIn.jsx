/**
 * FadeIn — Wraps children in a Framer Motion scroll-triggered fade+slide in
 *
 * Props:
 *   delay    - animation delay in seconds (default 0)
 *   y        - initial Y offset for slide-in (default 20px)
 *   children - content to animate
 *   className - optional additional class
 */
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, y = 20, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
