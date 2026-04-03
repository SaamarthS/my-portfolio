/**
 * Accordion — Reusable expandable/collapsible content block
 * Uses Framer Motion for smooth height animation.
 *
 * Props:
 *   title       - string shown as the clickable header
 *   children    - content revealed on expand
 *   defaultOpen - boolean, open by default
 *   small       - boolean, use smaller typographic scale
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false, small = false, heroStyle = false }) {
  const [open, setOpen] = useState(defaultOpen);

  // heroStyle: blue border, Lora italic title — matches the hero page card aesthetic
  if (heroStyle) {
    return (
      <div
        style={{
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'transparent',
          backdropFilter: 'blur(8px)',
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
            padding: '0.9rem 1.4rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            gap: '0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--blue)',
              letterSpacing: '0.01em',
            }}
          >
            {title}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ color: 'var(--blue)', flexShrink: 0, display: 'flex' }}
          >
            <ChevronDown size={15} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  padding: '0 1.4rem 1.1rem',
                  borderTop: '1px solid var(--border)',
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

  return (
    <div
      className="card"
      style={{ overflow: 'hidden' }}
    >
      {/* Header / Toggle */}
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: small ? '0.85rem 1.1rem' : '1.1rem 1.4rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: small ? '0.85rem' : '0.95rem',
          fontWeight: '500',
          color: 'var(--text-primary)',
          textAlign: 'left',
          gap: '0.75rem',
        }}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: 'var(--blue)', flexShrink: 0, display: 'flex' }}
        >
          <ChevronDown size={small ? 15 : 17} />
        </motion.span>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: small ? '0 1.1rem 1rem' : '0 1.4rem 1.2rem',
                borderTop: '1px solid var(--border)',
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
