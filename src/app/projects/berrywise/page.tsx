'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Users, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function BerrywisePage() {
  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '4rem 2rem', color: '#fafaf9' }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <motion.span
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: muted, fontSize: '13px', marginBottom: '3rem' }}
          whileHover={{ color: amber }}
          transition={{ duration: 0.2 }}
        >
          <ArrowLeft size={14} /> Back Home
        </motion.span>
      </Link>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: amber }}>
          AI Recruitment · WebSockets · Full-Stack
        </span>
        <h1 style={{
          fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1,
        }}>
          Berrywise ATS
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          An AI-powered recruitment pipeline and applicant tracking system. It uses advanced text processing to parse resumes, evaluates candidates in real time via multi-factor scorecards, enables live collaboration with Socket.IO, and supports custom SMTP configurations.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://recruitment-pipeline-nagl.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> Live Application
          </a>
          <a href="https://github.com/tannu005/recruitment-pipeline" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: 'transparent', color: amber, border: `1px solid ${amber}`,
            borderRadius: '999px', textDecoration: 'none', fontSize: '13px', fontWeight: 700,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <ExternalLink size={13} /> GitHub
          </a>
        </div>
      </motion.div>

      {/* Tech tags */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '28px 0 0' }}>
        {['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Socket.IO', 'TailwindCSS', 'Framer Motion', 'Recharts'].map(t => (
          <span key={t} style={{
            padding: '4px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: '999px', fontSize: '11px', color: amber, fontWeight: 500,
          }}>{t}</span>
        ))}
      </motion.div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Metrics Row */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '16px', marginBottom: '48px' }}>
        {[
          { value: 'AI', label: 'Multi-Factor Scoring' },
          { value: '100%', label: 'Strict Document Checks' },
          { value: 'Local', label: 'Secure SQLite Auth' },
          { value: '<50ms', label: 'WebSocket Updates' },
          { value: 'Ethereal', label: 'Mail Sandbox Testing' },
          { value: 'Drag', label: 'Batch Processing' },
        ].map(m => (
          <div key={m.label} style={{
            background: surface, border: `1px solid ${border}`, borderRadius: '12px',
            padding: '20px 16px', textAlign: 'center',
          }}>
            <p style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '24px', fontWeight: 700, color: amber, margin: 0 }}>{m.value}</p>
            <p style={{ fontSize: '11px', color: muted, marginTop: '4px' }}>{m.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Problem */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>The Problem</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem' }}>
          While modern recruiters rely heavily on Applicant Tracking Systems (ATS), legacy platforms are universally despised for their clunky interfaces, black-box AI rejections, and rigid workflows. Existing solutions often fail to handle edge-case documents elegantly, leading to broken pipelines. Furthermore, setting up custom SMTP pipelines for personalized communication inside these monolithic systems requires IT support. Berrywise ATS solves this by providing a hyper-transparent, heuristically-validated ingestion pipeline, dynamic user-controlled mail mapping, and beautiful, interactive scorecarding that tells recruiters <i>why</i> a candidate is a fit, rather than just spitting out an arbitrary percentage.
        </p>
      </motion.section>

      {/* Architecture & Visual Blocks */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Architecture & Core Workflow</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Users size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>AI Resume Scorecarding</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Generates qualitative fit summaries across Technical Skills, Experience, Culture Fit, and Risk Assessment. Visualizes candidate fits using interactive Recharts radar graphs.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <ShieldCheck size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Heuristic Document Validation</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Strictly prevents non-resume files (like cooking recipes or academic calendars) from cluttering the database by scanning for professional contact heuristics before processing.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Mail size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Dynamic SMTP Engine</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Dual-mode email delivery utilizing Nodemailer. Instantly shifts between real authenticated SMTP servers and the Ethereal sandbox for clickable localhost testing previews.
            </p>
          </div>

        </div>
      </motion.section>

      {/* Engineering Timeline */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Engineering Timeline</h2>
        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: `1px solid ${border}` }}>
          {[
            { week: 'Week 1', title: 'Data Ingestion & Strict Validation', detail: 'Built PDF/DOCX parsing APIs with Multer and Mammoth. Implemented strong validation heuristics to automatically discard irrelevant documents before they hit the database.' },
            { week: 'Week 2', title: 'AI Scoring & Recharts Visualization', detail: 'Developed an AI engine to score parsed texts against four competency pillars. Visualized the outputs using responsive SVG radar charts.' },
            { week: 'Week 3', title: 'Dynamic Mail Integration', detail: 'Integrated Nodemailer with dynamic SMTP injection mapping. Designed a secure local SQLite layer to persist credentials securely without leaking them in transit.' },
            { week: 'Week 4', title: 'Real-Time WebSockets & Glassmorphism', detail: 'Wired up Socket.IO for instant notification updates when evaluations conclude. Polished the UI using a premium glassmorphic design system and fluid Framer Motion animations.' },
          ].map((e, i) => (
            <motion.div key={e.week} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ marginBottom: '28px', paddingLeft: '24px', position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '-24px', top: '4px',
                width: '8px', height: '8px', borderRadius: '50%', background: amber,
              }} />
              <p style={{ fontSize: '10px', color: muted, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>{e.week}</p>
              <h4 style={{ color: '#fafaf9', fontWeight: 600, margin: '0 0 6px' }}>{e.title}</h4>
              <p style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.7 }}>{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* My Approach vs Tutorial Approach */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>My Approach vs. Tutorial Approach</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ color: '#f87171', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>The "Tutorial" ATS</h3>
            <ul style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li>Basic CRUD app where recruiters manually read uploaded PDFs.</li>
              <li>Fake "loading" spinners while waiting for a basic database insert.</li>
              <li>Hardcoded email addresses in a `.env` file that only work for the developer.</li>
              <li>Crashes if a user uploads a corrupted file or an image instead of a document.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.2)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ color: '#34d399', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>The Berrywise Approach</h3>
            <ul style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li>Automated AI text extraction with intelligent heuristic document validation.</li>
              <li>Real-time WebSocket events replacing loading spinners.</li>
              <li>Dynamic SQLite-backed SMTP configurations per recruiter session.</li>
              <li>Graceful error handling that intercepts invalid files before the database layer.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* The Market Edge */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>The Market Edge: Why Choose Berrywise?</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem' }}>
          Enterprise ATS platforms are notoriously frustrating. They often operate as a "black box" where resumes go in and automated rejections come out with zero context. Berrywise fixes this by prioritizing transparency. Instead of hiding behind an arbitrary score, it generates a multi-factor competency radar graph that breaks down exactly why a candidate scored high or low across technical skills, culture fit, and experience. Paired with a fast, modern interface and sub-50ms real-time interactions, it turns a clunky administrative chore into a smooth, data-driven workflow.
        </p>
      </motion.section>

      {/* Lessons */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Lessons Learned</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { title: 'Unstructured Data', desc: 'Parsing raw PDFs is incredibly chaotic. Building strict heuristics is critical to prevent garbage data from destroying the AI context window.' },
            { title: 'Socket Architecture', desc: 'Real-time WebSocket events drastically improve UX by eliminating the need to poll the server while a document is being parsed and scored.' },
            { title: 'Local Persistence', desc: 'Using SQLite for local credential storage ensures the platform remains secure and recruiter credentials never leak into public state.' },
          ].map(l => (
            <div key={l.title} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <h4 style={{ color: amber, fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>{l.title}</h4>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7 }}>{l.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
