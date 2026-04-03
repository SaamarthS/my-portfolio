/**
 * Layout — Wraps every page with Navbar + page content + Footer
 * Also handles per-page Framer Motion entry animation.
 */
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -8 },
};

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ paddingTop: '64px', flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
