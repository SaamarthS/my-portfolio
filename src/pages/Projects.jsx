/**
 * Projects Page — Vaanya-style layout
 * Each card: name, brief description, tech tags always visible.
 * Chevron expands full description + GitHub/Demo links.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';

const PROJECTS = [
  {
    id: 'silk-quality',
    name: 'Central Silk Board — AI Quality Grading System',
    year: 'Dec 2024 – Present',
    brief: 'Automated silk quality inspection system deployed on a conveyor line at CSB facilities — uses YOLOv8 defect detection and a custom brightness deviation algorithm to produce composite quality grades.',
    badge: 'Industry Collaboration · CSB, Govt. of India',
    description:
      'Collaborating with the Central Silk Board, Government of India, on an automated silk quality inspection system deployed on a conveyor line. The system uses a Jetson Nano and camera setup to capture silk panels in real time, running YOLOv8 for surface defect detection and a custom brightness deviation algorithm to evaluate thread evenness across the panel. Final output is a composite quality grade covering cleanness, neatness, and evenness.\n\nMy contributions: (1) Built the Flask-based internal dashboard used by CSB employees to view grading results, inspect historical panel data, and generate printable quality report sheets. (2) Currently fine-tuning the YOLOv8 model to improve defect detection accuracy on silk panel imagery.',
    tech: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'Jetson Nano'],
    github: null,
    demo: null,
    teamProject: true,
  },
  {
    id: 'grindguard',
    name: 'GrindGuard — Answer to Unlock',
    year: '2025',
    brief: 'A productivity web app that gamifies studying — students prove their learning through quizzes before unlocking rewards like break time or social media access.',
    badge: 'Samsung Hackathon',
    description:
      "Students shouldn't earn breaks for just spending time — they should earn them by proving they learned something. GrindGuard is a quiz-gated productivity platform where you set up a study session, take a short quiz when you're done, and only unlock your reward (break time, social media, etc.) if you pass.\n\nBuilt as part of a team of 4+ for the Samsung Hackathon. Features a login system, a dashboard with four core sections (Start Session, Quiz, Rewards, Progress), quiz-based learning verification, and a profile editor. The full workflow: Start Session → Quiz → Reward → Progress.",
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'OpenClaw'],
    github: 'https://github.com/samarthprabhu2007-art/SAMSUNG-HACKATHON-',
    demo: 'https://samsung-hackathon-bice.vercel.app/',
    demoVideo: 'https://drive.google.com/file/d/1YwucDdUoMkjgEECS_AgHrgoVXK5ZeSt-/view?usp=sharing',
    teamProject: false,
  },
  {
    id: 'findmyparking',
    name: 'FindMyParking',
    year: 'Jan 2026',
    brief: "An Airbnb-style platform to solve Bengaluru's parking crisis by connecting drivers to available private parking spots.",
    badge: null,
    description:
      "A full-stack web app with a clean, modern UI that addresses real urban infrastructure problems in Bengaluru. Owners can list unused parking spaces; drivers can search, book, and pay — all in one place. Built with a focus on UX simplicity and real-world impact.",
    tech: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS'],
    github: 'https://github.com/SaamarthS/FindMyParking',
    demo: 'https://findmyparking.lovable.app/',
  },
  {
    id: 'cookmate-ai',
    name: 'Cookmate AI',
    year: 'Dec 2025',
    brief: 'A smart AI cooking assistant that generates recipes based on ingredients you have at home.',
    badge: null,
    description:
      "An intelligent cooking bot that tracks your groceries, monitors health and nutrition, generates personalised recipes based on what's in your kitchen, and reminds you to reorder when supplies run low. Combines LLMs with practical utility for everyday use.",
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/SaamarthS/Cookmate-Ai',
  },
  {
    id: 'robo-rescue',
    name: 'Robo Rescue',
    year: 'Jan 2022',
    brief: "A Python-based game built for the eYantra School Robotics Competition finale at IIT Bombay.",
    badge: 'Top 8 in India · Best Narrative Award',
    description:
      "A story-driven game where a student at IIT Bombay's eYantra lab must navigate the campus and repair their robot eYan. Built entirely in Python as part of the eYSRC competition — won Top 8 placement in India and the Best Narrative Award out of thousands of teams.",
    tech: ['Python'],
    github: 'https://github.com/SaamarthS/eYantra-IITB_FinalGame',
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="section site-container">
        {/* Page header — centred */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: '700',
              color: 'var(--blue)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}>
              projects
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--blue)',
              opacity: 0.55,
              lineHeight: 1.7,
            }}>
              Things I&apos;ve built, competed, and tinkered on.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={0.06 + i * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/* ── Project card: full clickable header, always-visible name+brief+tags ── */
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      style={{ overflow: 'hidden', background: 'transparent' }}
    >
      {/* Entire top section is the clickable toggle */}
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        id={`project-toggle-${project.id}`}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          padding: '1.75rem 2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(44,95,138,0.025)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        {/* Name + year + badge + chevron row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: '400',
              color: 'var(--blue)',
              lineHeight: 1.2,
            }}>
              {project.name}
            </span>
            {project.badge && (
              <span className="tag" style={{ fontSize: '0.72rem' }}>{project.badge}</span>
            )}
          </div>
          {/* Chevron */}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ color: 'var(--blue)', flexShrink: 0, display: 'flex', marginTop: '4px' }}
          >
            <ChevronDown size={20} />
          </motion.span>
        </div>

        {/* Brief — always visible */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.92rem',
          color: 'var(--blue)',
          opacity: 0.7,
          lineHeight: 1.65,
          marginBottom: '1rem',
        }}>
          {project.brief}
        </p>

        {/* Tech tags — always visible */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </button>

      {/* Expandable full description + links */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid rgba(44,95,138,0.18)' }}>
              {/* Full description */}
              {project.description.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.91rem',
                  color: 'var(--blue)',
                  opacity: 0.75,
                  lineHeight: 1.8,
                  marginTop: '1.1rem',
                  marginBottom: i < project.description.split('\n\n').length - 1 ? '0.75rem' : '1.25rem',
                }}>
                  {para}
                </p>
              ))}

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {project.github && (
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
                )}
                {project.github && (project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                ) : (
                  <span className="btn-disabled" title="Live demo coming soon" aria-disabled="true">
                    <ExternalLink size={15} />
                    Live Demo
                    <span style={{ fontSize: '0.7rem', background: 'rgba(44,95,138,0.08)', color: 'var(--blue)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                      soon
                    </span>
                  </span>
                ))}
                {project.demoVideo && (
                  <a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`demo-video-${project.id}`}
                    className="btn-outline"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <ExternalLink size={15} />
                    Watch Demo
                  </a>
                )}
                {project.teamProject && (
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--blue)',
                    opacity: 0.6,
                    fontStyle: 'italic',
                    alignSelf: 'center',
                  }}>
                    Private / Industry collaboration — no public repo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
