'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Mail, ExternalLink, Link2 } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function AboutPage() {
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

      {/* Grid Layout: Text on Left, Photo & Interactive Doodles on Right */}
      <div className="about-hero-grid" style={{ marginBottom: '48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: amber }}>
            Full-Stack & Product Engineer
          </span>
          <h1 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1 }}>
            Tannu Yadav
          </h1>
          <p style={{ fontSize: '17px', color: '#a8a29e', maxWidth: '38rem', lineHeight: 1.7 }}>
            Frontend-leaning full-stack developer with production experience building and deploying web applications using React, Next.js, and TypeScript — from AI-driven product interfaces to real-time data pipelines backed by REST APIs and cloud infrastructure. Shipped a geospatial analysis platform during an industry internship at India Space Lab and independently built five deployed systems integrating Gemini, Groq, live market APIs, and custom firmware.
          </p>
        </motion.div>

        {/* Photo Container with SVG Interactive Doodles */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative', width: '260px', height: '260px', justifySelf: 'center' }}
        >
          {/* Photo frame */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            border: `2px solid ${amber}`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(245,158,11,0.1)`,
            transform: 'rotate(-2deg)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: 'pointer',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.04)';
              e.currentTarget.style.boxShadow = `0 35px 60px rgba(0,0,0,0.8), 0 0 45px rgba(245,158,11,0.2)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'rotate(-2deg) scale(1)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(245,158,11,0.1)`;
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tannu.jpg"
              alt="Tannu Yadav"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Doodle 1: Sparkle top-right */}
          <svg style={{ position: 'absolute', top: '-25px', right: '-15px', width: '36px', height: '36px', pointerEvents: 'none' }} viewBox="0 0 24 24" className="animate-sparkle">
            <path fill={amber} d="M12,0 L14.5,9.5 L24,12 L14.5,14.5 L12,24 L9.5,14.5 L0,12 L9.5,9.5 Z" />
          </svg>

          {/* Doodle 2: Sparkle bottom-left */}
          <svg style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '28px', height: '28px', pointerEvents: 'none', animationDelay: '0.6s' }} viewBox="0 0 24 24" className="animate-sparkle">
            <path fill={amber} d="M12,0 L14.5,9.5 L24,12 L14.5,14.5 L12,24 L9.5,14.5 L0,12 L9.5,9.5 Z" />
          </svg>

          {/* Doodle 3: Curvy arrow + handwritten note */}
          <div style={{ position: 'absolute', left: '-125px', top: '40px', width: '110px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', opacity: 0.85, pointerEvents: 'none' }} className="animate-wiggle">
            <span style={{ fontFamily: 'var(--font-space), monospace', fontSize: '11px', color: amber, transform: 'rotate(-5deg)', whiteSpace: 'nowrap', fontWeight: 600 }}>
              Ships code fast ⚡
            </span>
            <svg width="50" height="35" viewBox="0 0 50 35" fill="none" style={{ marginTop: '2px', transform: 'rotate(-8deg)' }}>
              <path d="M10,4 C25,6 38,2 42,26" stroke={amber} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
              <path d="M36,20 L42,26 L45,17" stroke={amber} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Doodle 4: Hand-drawn brace + "Design + Dev" */}
          <div style={{ position: 'absolute', right: '-110px', bottom: '40px', width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', opacity: 0.85, pointerEvents: 'none', animationDelay: '1.2s' }} className="animate-wiggle">
            <svg width="35" height="35" viewBox="0 0 40 40" fill="none" style={{ transform: 'scaleX(-1) rotate(10deg)' }}>
              <path d="M10,5 C25,5 20,20 35,20 C20,20 25,35 10,35" stroke={amber} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontFamily: 'var(--font-space), monospace', fontSize: '11px', color: amber, marginTop: '-15px', marginLeft: '32px', whiteSpace: 'nowrap', transform: 'rotate(5deg)', fontWeight: 600 }}>
              Design + Dev
            </span>
          </div>
        </motion.div>
      </div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* By the Numbers */}
      <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>By the Numbers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '16px' }}>
          {[
            { value: '6', label: 'Shipped Systems' },
            { value: '8+', label: 'Vulnerabilities Prevented' },
            { value: '<200ms', label: 'Fastest Data Filter' },
            { value: '8+', label: 'External APIs Integrated' },
            { value: '40%', label: 'Code Reuse (Navix)' },
            { value: '10K', label: 'Concurrent Users Designed' },
            { value: '0', label: 'SQL Injections' },
            { value: '4+', label: 'Live Deployments' },
          ].map(m => (
            <div key={m.label} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px 14px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '22px', fontWeight: 700, color: amber, margin: 0 }}>{m.value}</p>
              <p style={{ fontSize: '11px', color: muted, marginTop: '4px' }}>{m.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Technical Skills — In Context</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px' }}>
          {[
            { skill: 'React.js / Next.js', context: 'Built Stock Screener\'s virtual list layout; Navix\'s AI dashboard; and NewsAI\'s spatial 3D graph interface' },
            { skill: 'TypeScript', context: 'Type safety across Navix\'s screens — catching bugs at compile time, Zod schemas as source of truth' },
            { skill: 'Node.js + Express', context: 'LendSwift\'s secure API layer — CORS whitelist, rate limiting, JWT, server-side Zod validation' },
            { skill: 'PostgreSQL + Prisma ORM', context: 'LendSwift\'s database layer — zero injection risk, indexed queries, versioned migrations' },
            { skill: 'Tailwind CSS + Framer Motion', context: 'Delivered cinematic 60fps UIs maintaining hardware-accelerated rendering via code splitting' },
            { skill: 'Three.js / React Three Fiber', context: 'Created NewsAI\'s force-directed interactive 3D document graph rendering node networks' },
            { skill: 'OpenCV / Deep Learning DNN', context: 'Compiled ScreenGuard\'s real-time computer vision tracker estimating face distance and age' },
            { skill: 'Gemini API + Groq API', context: 'Intelligent LLM routing in Navix — Gemini for accuracy, Groq for speed, 35% token cost reduction' },
            { skill: 'GitHub Actions + Vercel', context: 'Zero-touch CI/CD pipeline — every push automatically linted, built, and deployed in under 60 seconds' },
            { skill: 'Python + NumPy + GeoPandas', context: 'India Space Lab — automated satellite imagery pipelines processing 200+ sq km of multispectral data' },
            { skill: 'ESP32 + MQTT + Arduino', context: 'IoT firmware and device-to-cloud telemetry coordinating with desktop display brightness APIs' },
            { skill: 'TanStack Virtual + Zustand', context: 'Stock Screener\'s state and rendering architecture — windowed rows, memoized filters' },
          ].map((s, i) => (
            <motion.div key={s.skill} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '18px 20px' }}>
              <h4 style={{ color: '#fafaf9', fontWeight: 600, fontSize: '13px', margin: '0 0 6px' }}>{s.skill}</h4>
              <p style={{ color: '#78716c', fontSize: '12px', lineHeight: 1.6, margin: 0 }}>{s.context}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Learning Journey */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Learning Journey</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { project: 'LendSwift', color: '#f59e0b', before: 'Knew React basics, no backend experience', after: 'Can design secure REST APIs with CORS, rate limiting, Prisma ORM, and three-tier architecture from scratch' },
            { project: 'Stock Screener', color: '#f97316', before: 'Knew basic React rendering, no performance engineering', after: 'Can optimize any React app to 60fps at scale using virtual scrolling, Canvas rendering, and memoization' },
            { project: 'Navix AI', color: '#a855f7', before: 'Never integrated an LLM API or set up CI/CD', after: 'Can integrate multiple AI providers intelligently and automate the entire deployment pipeline' },
            { project: 'NewsAI', color: '#ec4899', before: 'Knew database queries, no experience with vector indexing', after: 'Can orchestrate vector search (RAG) with LangChain and construct event-driven background queues via Inngest' },
            { project: 'ScreenGuard', color: '#3b82f6', before: 'Never integrated computer vision with hardware systems or OS APIs', after: 'Can compile ESP32 C++ firmware and coordinate OpenCV Age Net DNNs with Windows display brightness APIs' },
            { project: 'India Space Lab', color: '#22c55e', before: 'Zero knowledge of GIS, satellite imagery, or geospatial data', after: 'Comfortable with high-volume geospatial data, multispectral imagery, and Python data pipelines' },
          ].map((entry, i) => (
            <motion.div key={entry.project} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: surface, borderLeft: `3px solid ${entry.color}`, borderRadius: '0 12px 12px 0', padding: '20px 24px' }}>
              <h3 style={{ color: '#fafaf9', fontWeight: 600, margin: '0 0 12px', fontSize: '15px' }}>{entry.project}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 4px' }}>Before</p>
                  <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{entry.before}</p>
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 4px' }}>After</p>
                  <p style={{ color: '#fafaf9', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{entry.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Certifications</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Oracle Cloud Infrastructure Foundation Associate', 'AWS Academy Cloud Foundations & Architecting', 'VLSI Design Fundamentals'].map(c => (
            <span key={c} style={{ padding: '8px 16px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '8px', fontSize: '13px', color: amber, fontWeight: 500 }}>{c}</span>
          ))}
        </div>
      </motion.section>

      {/* Dedicated Education Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Education</h2>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <h3 style={{ color: '#fafaf9', fontWeight: 700, fontSize: '16px', margin: 0 }}>Vellore Institute of Technology (VIT-AP University)</h3>
              <p style={{ color: amber, fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>Bachelor of Technology (B.Tech.) in Computer Science & Engineering</p>
            </div>
            <span style={{ fontSize: '12px', color: muted, fontWeight: 500 }}>2023 — 2027 (Expected)</span>
          </div>
          <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, marginTop: '16px' }}>
            Focusing on software systems architecture, database management, and interactive computer graphics. Actively participating in IoT design challenges and building practical cross-disciplinary systems bridging web software, embedded controllers, and edge AI.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
            {['Software Architecture', 'Database Management', 'Data Structures & Algorithms', 'Embedded Systems', 'IoT Edge', 'Bhiwadi, Rajasthan'].map(t => (
              <span key={t} style={{ fontSize: '11px', color: muted, border: `1px solid ${border}`, borderRadius: '6px', padding: '3px 8px', background: 'rgba(255,255,255,0.02)' }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>Let&apos;s Connect</h2>
        <p style={{ color: '#a8a29e', marginBottom: '24px', maxWidth: '40rem', lineHeight: 1.7 }}>
          Actively seeking internship and full-time roles where I can apply systems-thinking to real engineering challenges. Response time: same day.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <a href="mailto:ytannu1410@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, transition: 'background 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}>
            <Mail size={14} /> ytannu1410@gmail.com
          </a>
          <a href="https://linkedin.com/in/tannu-yadav" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}>
            <Link2 size={14} /> linkedin/tannu-yadav
          </a>
          <a href="https://github.com/tannu005" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}>
            <ExternalLink size={14} /> github/tannu005
          </a>
        </div>
      </motion.section>
    </div>
  );
}
