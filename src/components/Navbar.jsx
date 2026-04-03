/**
 * Navbar — Fixed top navigation with SS logo, nav links, dark mode toggle,
 * and a responsive hamburger menu for mobile.
 */
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { dark, toggleDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { to: '/', label: 'about', end: true },
    { to: '/projects', label: 'projects' },
    { to: '/contact', label: 'contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link to="/" id="nav-logo" aria-label="Home">
            <motion.span
              whileHover={{ scale: 1.05 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'var(--blue)',
                letterSpacing: '-0.01em',
                display: 'block',
              }}
            >
              SS
            </motion.span>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                id={`nav-link-${link.label}`}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}

            <motion.button
              id="dark-mode-toggle"
              onClick={toggleDark}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                background: 'transparent',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={16} />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile buttons */}
          <div className="mobile-nav-buttons" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <motion.button
              onClick={toggleDark}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              style={{
                background: 'transparent',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
              }}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
            <motion.button
              id="hamburger-menu"
              onClick={() => setMenuOpen(prev => !prev)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
              style={{
                background: 'transparent',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
              }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', background: 'var(--nav-bg)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem 1.5rem', gap: '1rem' }}>
                {navLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                    style={{ fontSize: '1rem' }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav-buttons { display: none !important; }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-buttons { display: flex !important; }
        }
      `}</style>
    </>
  );
}
