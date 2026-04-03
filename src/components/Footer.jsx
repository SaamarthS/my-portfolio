/**
 * Footer — Scrolling marquee banner only.
 * No credit line below — just the animated strip.
 */
import { motion } from 'framer-motion';

const MARQUEE_TEXT = 'eat • sleep • build • eat • sleep • build • eat • sleep • build • eat • sleep • build • ';

export default function Footer() {
  return (
    <footer style={{ marginTop: 'auto' }}>
      {/* Marquee strip */}
      <div className="marquee-wrapper">
        <motion.div
          className="marquee-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: 'linear',
          }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'var(--blue)',
            letterSpacing: '0.05em',
            gap: 0,
          }}
        >
          <span style={{ paddingRight: '2rem' }}>{MARQUEE_TEXT}</span>
          <span style={{ paddingRight: '2rem' }}>{MARQUEE_TEXT}</span>
          <span style={{ paddingRight: '2rem' }}>{MARQUEE_TEXT}</span>
          <span style={{ paddingRight: '2rem' }}>{MARQUEE_TEXT}</span>
        </motion.div>
      </div>
    </footer>
  );
}
