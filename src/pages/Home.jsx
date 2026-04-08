/**
 * Home Page — Hero (full-viewport, centre-aligned) + About section
 *
 * Hero layout (top→bottom, all centred):
 *   "hi, my name is" small text
 *   "Saamarth S" large Lora heading in blue
 *   Social icons row
 *   Bordered role card (Vaanya-style thin border, italic Lora)
 *   Experience & Achievements accordion
 *
 * About section: alternating image ↔ text, large blue text, Vaanya-style
 */
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import Accordion from '../components/Accordion';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';

/* ── Social links ── */
const SOCIALS = [
  { id: 'github', href: 'https://github.com/SaamarthS', label: 'GitHub', Icon: GithubIcon },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/saamarth-s-0bba86332/', label: 'LinkedIn', Icon: LinkedinIcon },
  { id: 'instagram', href: 'https://www.instagram.com/saamarth.s17/', label: 'Instagram', Icon: InstagramIcon },
];

/* ── Experience data ── */
const EXPERIENCE = [
  {
    role: 'Student Trainee',
    org: 'eYantra, IIT Bombay',
    duration: 'Aug 2021 – Jan 2022',
    desc: 'Python game development training and competition. Won Top 8 in India + Best Narrative Award.',
  },
  {
    role: 'Member',
    org: 'Google Developer Group RVCE',
    duration: null,
    desc: null,
  },
  {
    role: 'Junior Associate',
    org: 'Entrepreneurship Cell RVCE',
    duration: null,
    desc: null,
  },
];

export default function Home() {
  return (
    <Layout>
      {/* ──────────────── HERO ──────────────── */}
      <section
        style={{
          minHeight: 'calc(78vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 2rem 2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '640px',
            width: '100%',
            gap: 0,
          }}
        >
          {/* "hi, my name is" */}
          <FadeIn delay={0}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--blue)',
                letterSpacing: '0.04em',
                marginBottom: '1rem',
              }}
            >
              Hey! This is
            </p>
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.1}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                fontWeight: '700',
                color: 'var(--blue)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                marginBottom: '1.75rem',
              }}
            >
              Saamarth S
            </h1>
          </FadeIn>

          {/* Social icons */}
          <FadeIn delay={0.18}>
            <div
              style={{
                display: 'flex',
                gap: '0.65rem',
                justifyContent: 'center',
                marginBottom: '2rem',
              }}
            >
              {SOCIALS.map(({ id, href, label, Icon }) => (
                <motion.a
                  key={id}
                  id={`social-${id}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Vaanya-style bordered role card */}
          <FadeIn delay={0.26}>
            <div
              style={{
                border: '1.5px solid var(--blue)',
                borderRadius: '999px',
                padding: '0.85rem 2.6rem',
                marginBottom: '2.5rem',
                display: 'inline-block',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--blue)',
                  letterSpacing: '0.015em',
                }}
              >
                Computer Science Engineer
              </span>
            </div>
          </FadeIn>

          {/* Experience accordion — styled to match page colour scheme */}
          <FadeIn delay={0.34} style={{ width: '100%', maxWidth: '520px' }}>
            <Accordion title="Experience" heroStyle>
              <div
                style={{
                  paddingTop: '0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  textAlign: 'left',
                }}
              >
                {EXPERIENCE.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      paddingLeft: '0.75rem',
                      borderLeft: '2px solid var(--blue)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.1rem',
                      }}
                    >
                      {item.role}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        color: 'var(--blue)',
                        fontStyle: 'italic',
                        marginBottom: item.desc ? '0.25rem' : 0,
                      }}
                    >
                      {item.org}
                      {item.duration && (
                        <span
                          style={{ color: 'var(--text-secondary)', fontStyle: 'normal', marginLeft: '0.5rem' }}
                        >
                          · {item.duration}
                        </span>
                      )}
                    </p>
                    {item.desc && (
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
                        }}
                      >
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ──────────────── ABOUT ──────────────── */}
      <section
        style={{
          padding: '5rem 0',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="site-container">
          {/* Section label */}
          <FadeIn>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--blue)',
                marginBottom: '4rem',
              }}
            >
              about me
            </p>
          </FadeIn>

          {/* Row 1 — Photo left, Text right */}
          <AboutRow
            delay={0.05}
            photoFirst
            imgSrc="/photos/photo2.jpg"
            text={
              <>
                I&apos;m a Computer Science student at{' '}
                <strong>RV College of Engineering</strong>, currently diving deep into
                AI/ML projects, full stack development, and multidisciplinary projects.
                I love building new ideas and bringing them to life — there&apos;s
                nothing quite like seeing something go from a rough concept to a working
                product. Right now I&apos;m exploring{' '}
                <em>quantum computing and machine learning</em>, and figuring out how to
                bring it all together. Oh, and when I&apos;m not training models,
                I&apos;m training my voice 🎵
              </>
            }
          />

          {/* Row 2 — Text left, Photo right */}
          <AboutRow
            delay={0.08}
            photoFirst={false}
            imgSrc="/photos/photo1.jpg"
            text={
              <>
                Outside of tech, I&apos;m passionate about music — I sing and play
                guitar, and I&apos;m classically trained. I also love{' '}
                <strong>video editing, graphic design, and competitive programming</strong>
                . I believe the best engineers are the ones who bring creativity into
                everything they build. Whether it&apos;s a machine learning model or a
                melody, I&apos;m always trying to make something worth remembering. 🎸
              </>
            }
          />
        </div>
      </section>
    </Layout>
  );
}

/* ── About alternating row ── */
function AboutRow({ text, photoFirst, imgSrc, delay = 0 }) {
  const photoBlock = (
    <FadeIn delay={delay} style={{ flex: 1, minWidth: '240px', maxWidth: '380px' }}>
      <img src={imgSrc} alt="Saamarth S"
        style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/5' }} />
    </FadeIn>
  );

  const textBlock = (
    <FadeIn delay={delay + 0.06} style={{ flex: 1.4, minWidth: '260px' }}>
      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
          color: 'var(--blue)',
          lineHeight: 1.75,
          fontWeight: '400',
        }}
      >
        {text}
      </p>
    </FadeIn>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3.5rem',
        alignItems: 'center',
        marginBottom: '5rem',
        flexDirection: photoFirst ? 'row' : 'row-reverse',
      }}
    >
      {photoBlock}
      {textBlock}
    </div>
  );
}
