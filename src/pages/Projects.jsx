/**
 * Projects Page — Expandable accordion project cards
 * Each card shows: name, brief, tech stack tags, expandable description + GitHub link
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';

const PROJECTS = [
  {
    id: 'robo-rescue',
    name: 'Robo Rescue',
    year: '2021',
    brief: "A Python-based game built for the eYantra School Robotics Competition finale at IIT Bombay.",
    badge: 'Top 8 in India · Best Narrative Award',
    description:
      "A story-driven game where a student at IIT Bombay's eYantra lab must navigate the campus and repair their robot eYan. Built entirely in Python as part of the eYSRC competition — won Top 8 placement in India and the Best Narrative Award out of thousands of teams.",
    tech: ['Python'],
    github: 'https://github.com/SaamarthS/eYantra-IITB_FinalGame',
  },
  {
    id: 'findmyparking',
    name: 'FindMyParking',
    year: '2025',
    brief: "An Airbnb-style platform to solve Bengaluru's parking crisis by connecting drivers to available private parking spots.",
    badge: null,
    description:
      "A full-stack web app with a clean, modern UI that addresses real urban infrastructure problems in Bengaluru. Owners can list unused parking spaces; drivers can search, book, and pay — all in one place. Built with a focus on UX simplicity and real-world impact.",
    tech: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS'],
    github: 'https://github.com/SaamarthS/FindMyParking',
  },
  {
    id: 'cookmate-ai',
    name: 'Cookmate AI',
    year: 'ongoing',
    brief: 'A smart AI cooking assistant that generates recipes based on ingredients you have at home.',
    badge: null,
    description:
      "An intelligent cooking bot that tracks your groceries, monitors health and nutrition, generates personalised recipes based on what's in your kitchen, and reminds you to reorder when supplies run low. Combines LLMs with practical utility for everyday use.",
    tech: ['AI/ML', 'LLMs', 'Python'],
    github: 'https://github.com/SaamarthS/Cookmate-Ai',
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="section site-container">
        {/* Page header */}
        <FadeIn>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem' }}>
            selected work
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            projects
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '520px', lineHeight: 1.7 }}>
            Things I&apos;ve built, competed with, and tinkered on — ranging from competition games to real-world apps.
          </p>
        </FadeIn>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/* ── Project accordion card ── */
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      {/* Header button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        id={`project-toggle-${project.id}`}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', padding: '1.2rem 1.4rem',
          background: 'transparent', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: '1rem',
        }}
      >
        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1 }}>
          {/* Name + year + badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)' }}>
              {project.name}
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              {project.year}
            </span>
            {project.badge && (
              <span className="tag" style={{ fontSize: '0.7rem' }}>{project.badge}</span>
            )}
          </div>
          {/* Brief */}
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '400', lineHeight: 1.5 }}>
            {project.brief}
          </span>
        </div>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: 'var(--blue)', flexShrink: 0, display: 'flex', marginTop: '4px' }}
        >
          <ChevronDown size={17} />
        </motion.span>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.4rem 1.4rem', borderTop: '1px solid var(--border)' }}>
              {/* Description */}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginTop: '1rem', marginBottom: '1.2rem' }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {project.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`github-link-${project.id}`}
                  className="btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <GithubIcon size={15} />
                  View on GitHub
                </a>
                {/* Live demo — disabled until URL is available */}
                <span className="btn-disabled" title="Live demo coming soon" aria-disabled="true">
                  <ExternalLink size={15} />
                  Live Demo
                  <span style={{ fontSize: '0.7rem', background: 'rgba(0,76,228,0.08)', color: 'var(--blue)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                    soon
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
