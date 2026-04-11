/**
 * Contact Page — Vaanya-style layout
 * let's connect heading (smaller), centered info inline (no card box),
 * then expandable accordions for Education, Experience, Skills, Achievements.
 */
import { motion } from 'framer-motion';
import { Mail, MapPin, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import Accordion from '../components/Accordion';

/* ── Experience ── */
const EXPERIENCE = [
  {
    role: 'Software and AI Development Intern ',
    org: 'Central Silk Board, Govt. of India',
    duration: 'Dec 2025 – Present',
    desc: 'Built a Flask dashboard for live camera feeds, grading results, and report printing. Also fine-tuned a YOLOv8 model for silk defect detection.',
  },
  {
    role: 'Student Trainee',
    org: 'eYantra, IIT Bombay',
    duration: 'Aug 2021 – Jan 2022',
    desc: 'Python game development training and competition. Won Top 8 in India + Best Narrative Award.',
  },
  {
    role: 'Member',
    org: 'Google Developer Group RVCE',
    duration: 'Nov 2025 - Present',
    desc: null,
  },
  {
    role: 'Junior Associate',
    org: 'Entrepreneurship Cell RVCE',
    duration: 'Nov 2025 - Present',
    desc: null,
  },
];

/* ── Education — most recent first ── */
const EDUCATION = [
  {
    degree: 'BE in Computer Science Engineering',
    institution: 'RV College of Engineering, Bengaluru',
    year: 'Expected 2029',
    score: null,
  },
  {
    degree: 'BS in Data Science and Applications',
    institution: 'IIT Madras',
    year: 'In Progress',
    score: null,
  },
  {
    degree: '12th Grade (Science)',
    institution: 'Narayana PU College',
    year: '2025',
    score: '93.16%',
  },
  {
    degree: '10th Grade',
    institution: 'BGS National Public School',
    year: '2023',
    score: '97%',
  },
];

/* ── Skills ── */
const SKILLS = [
  { category: 'Languages', items: ['Python', 'Java', 'HTML', 'CSS'] },
  { category: 'Frameworks & Tools', items: ['Git', 'PyTorch', 'React', 'Vite', 'Tailwind CSS', 'Figma', 'DaVinci Resolve'] },
  { category: 'AI / ML', items: ['Computer Vision', 'Large Language Models (LLMs)'] },
  { category: 'Interests', items: ['Competitive Programming', 'Quantum Computing'] },
];

/* ── Achievements ── */
const ACHIEVEMENTS = [
  { label: 'VISION 2047 Hackathon', detail: 'FlairX + GDG RVCE — Top 12 out of 80 teams' },
  { label: 'Winter Consulting Challenge', detail: 'IIT Guwahati — Certificate of Merit' },
  { label: 'Kaggle: Gotta Train Em All', detail: 'Participant' },
  { label: 'eYantra School Robotics Competition', detail: 'IIT Bombay — Top 8 in India, Best Narrative Award' },
  { label: 'Google Cloud Skills Boost', detail: 'Participant' },
  { label: 'Microsoft Generative AI Foundations (Upgrad)', detail: 'Certified' },
];

const SOCIALS = [
  { id: 'github-contact', href: 'https://github.com/SaamarthS', label: 'GitHub', Icon: GithubIcon },
  { id: 'linkedin-contact', href: 'https://www.linkedin.com/in/saamarth-s-0bba86332/', label: 'LinkedIn', Icon: LinkedinIcon },
  { id: 'instagram-contact', href: 'https://www.instagram.com/saamarth.s17/', label: 'Instagram', Icon: InstagramIcon },
];

export default function Contact() {
  return (
    <Layout>
      <div className="section site-container">

        {/* Heading — centred */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: '700',
              color: 'var(--blue)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              let&apos;s connect
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--blue)',
              opacity: 0.55,
              lineHeight: 1.7,
            }}>
              I&apos;m always open to new opportunities and collaborations.
            </p>
          </div>
        </FadeIn>

        {/* Contact info — inline, no card box, centered */}
        <FadeIn delay={0.07}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.4rem',
            marginBottom: '3.5rem',
          }}>
            {/* Email + Location on one row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="mailto:samsaamarth@gmail.com"
                id="contact-email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  color: 'var(--blue)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  opacity: 0.8,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                <Mail size={18} />
                samsaamarth@gmail.com
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--blue)', fontFamily: 'var(--font-body)', fontSize: '1.05rem', opacity: 0.7 }}>
                <MapPin size={18} />
                Bengaluru, India
              </div>
            </div>

            {/* Social icons row */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {SOCIALS.map(({ id, href, label, Icon }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>

            {/* Resume download button — centered, pill shaped like Vaanya */}
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 2.5rem',
                borderRadius: '999px',
                fontSize: '1rem',
              }}
            >
              <Download size={17} /> Download Resume
            </a>
          </div>
        </FadeIn>

        {/* Accordions — stacked, centred at fixed width */}
        <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Education */}
          <FadeIn delay={0.1}>
            <Accordion title="Education">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {EDUCATION.map((ed, i) => (
                  <div key={i} style={{ paddingLeft: '0.65rem', borderLeft: '2px solid var(--blue)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', fontWeight: '600', color: 'var(--blue)', marginBottom: '0.15rem' }}>
                      {ed.degree}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--blue)', opacity: 0.65, marginBottom: '0.15rem' }}>
                      {ed.institution}
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', opacity: 0.75, fontStyle: 'italic' }}>
                        {ed.year}
                      </p>
                      {ed.score && (
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', opacity: 0.6, fontWeight: '500' }}>
                          {ed.score}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

          {/* Experience */}
          <FadeIn delay={0.14}>
            <Accordion title="Experience">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {EXPERIENCE.map((item, i) => (
                  <div key={i} style={{ paddingLeft: '0.75rem', borderLeft: '2px solid var(--blue)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: '600', color: 'var(--blue)', marginBottom: '0.1rem' }}>
                      {item.role}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--blue)', opacity: 0.75, fontStyle: 'italic', marginBottom: item.desc ? '0.25rem' : 0 }}>
                      {item.org}
                      {item.duration && (
                        <span style={{ opacity: 0.6, fontStyle: 'normal', marginLeft: '0.5rem' }}>· {item.duration}</span>
                      )}
                    </p>
                    {item.desc && (
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--blue)', opacity: 0.65, lineHeight: 1.55 }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

          {/* Achievements */}
          <FadeIn delay={0.18}>
            <Accordion title="Achievements">
              <ul style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none' }}>
                {ACHIEVEMENTS.map((item, i) => (
                  <li key={i} style={{ borderLeft: '2px solid var(--blue)', paddingLeft: '0.65rem' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: '500', color: 'var(--blue)', marginBottom: '0.1rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', opacity: 0.65 }}>
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.22}>
            <Accordion title="Skills">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {SKILLS.map(group => (
                  <div key={group.category}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', opacity: 0.75, marginBottom: '0.5rem' }}>
                      {group.category}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {group.items.map(skill => (
                        <span key={skill} className="tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

        </div>
      </div>
    </Layout>
  );
}
