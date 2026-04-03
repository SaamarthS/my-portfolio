/**
 * App.jsx — Root component
 * Sets up React Router with page transitions via Framer Motion's AnimatePresence.
 * ThemeProvider wraps everything so dark mode is globally available.
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

/* 
  AnimatedRoutes lives inside BrowserRouter so useLocation() works.
  AnimatePresence needs `mode="wait"` for clean page-exit-then-enter transitions.
*/
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
