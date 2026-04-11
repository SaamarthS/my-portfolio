/**
 * Accordion — Polished expandable card, Vaanya-style
 *
 * All variants share:
 *   - border-radius 16px, 1.5px steel blue border
 *   - Subtle hover tint on the header
 *   - Smooth max-height transition (~300ms ease)
 *   - Animated chevron rotation
 *
 * Props:
 *   title       - string shown as the clickable header
 *   children    - content revealed on expand
 *   defaultOpen - boolean, open by default
 *   small       - boolean, use smaller typographic scale
 *   heroStyle   - boolean, italic Lora heading (hero page variant)
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false, small = false, heroStyle = false }) {
  const [open, setOpen] = useState(defaultOpen);

  const headerPadding = heroStyle ? '0.9rem 1.4rem' : small ? '0.85rem 1.1rem' : '2rem 2rem';
  const titleStyle = heroStyle
    ? {
        fontFamily: 'var(--font-heading)',
        fontStyle: 'italic',
        fontSize: '1rem',
        color: 'var(--blue)',
        letterSpacing: '0.01em',
      }
    : {
        fontFamily: 'var(--font-heading)',
        fontSize: small ? '0.85rem' : '1.35rem',
        fontWeight: '400',
        color: 'var(--text-primary)',
        letterSpacing: '0.01em',
      };

  return (
    <div
      style={{
        border: '1.5px solid var(--blue)',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'transparent',
        backdropFilter: 'blur(8px)',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: headerPadding,
          background: open ? 'rgba(44, 95, 138, 0.05)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          gap: '0.75rem',
          transition: 'background 0.2s ease',
          borderRadius: open ? '16px 16px 0 0' : '16px',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = 'rgba(44, 95, 138, 0.04)'; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = 'transparent'; }}
      >
        <span style={{ textAlign: 'left', ...titleStyle }}>{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ color: 'var(--blue)', flexShrink: 0, display: 'flex' }}
        >
          <ChevronDown size={small ? 15 : 20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: small ? '0 1.1rem 1rem' : '0.5rem 2rem 2rem',
                borderTop: '1px solid rgba(44, 95, 138, 0.18)',
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
