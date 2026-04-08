/**
 * Contact Page — Contact info, resume button, social links,
 * and expandable accordions for Education and Skills.
 */
import { motion } from 'framer-motion';
import { Mail, MapPin, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import Accordion from '../components/Accordion';

/* ── Education — most recent first ── */
const EDUCATION = [
  {
    degree: 'BE in Computer Science Engineering',
    institution: 'RV College of Engineering, Bengaluru',
    year: 'Expected 2029',
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
        {/* Heading */}
        <FadeIn>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem' }}>
            get in touch
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            let&apos;s connect
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '480px', lineHeight: 1.7 }}>
            I&apos;m always open to new opportunities and collaborations — feel free to reach out!
          </p>
        </FadeIn>

        {/* Contact card */}
        <FadeIn delay={0.08}>
          <div className="card" style={{ padding: '1.75rem 2rem', marginBottom: '2.5rem', maxWidth: '520px' }}>
            {/* Email */}
            <a
              href="mailto:samsaamarth@gmail.com"
              id="contact-email"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', textDecoration: 'none' }}
            >
              <span style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,76,228,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>
                <Mail size={16} />
              </span>
              <span
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-primary)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                samsaamarth@gmail.com
              </span>
            </a>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,76,228,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>
                <MapPin size={16} />
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Bengaluru, India
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {SOCIALS.map(({ id, href, label, Icon }) => (
                <motion.a key={id} id={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon" whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>


            <a href="/resume.pdf" download className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={15} /> Download Resume
            </a>
          </div>
        </FadeIn>

        {/* Accordions — grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>

          {/* Education */}
          <FadeIn delay={0.1}>
            <Accordion title="Education">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {EDUCATION.map((ed, i) => (
                  <div key={i} style={{ paddingLeft: '0.65rem', borderLeft: '2px solid var(--blue)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      {ed.degree}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                      {ed.institution}
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--blue)', fontStyle: 'italic' }}>
                        {ed.year}
                      </p>
                      {ed.score && (
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                          {ed.score}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>

          {/* Achievements */}
          <FadeIn delay={0.14}>
            <Accordion title="Achievements">
              <ul style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none' }}>
                {ACHIEVEMENTS.map((item, i) => (
                  <li key={i} style={{ borderLeft: '2px solid var(--blue)', paddingLeft: '0.65rem' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '0.1rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.18}>
            <Accordion title="Skills">
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {SKILLS.map(group => (
                  <div key={group.category}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.5rem' }}>
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
