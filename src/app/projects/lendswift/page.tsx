'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ArchitectureDiagram } from '@/components/Interactive/ArchitectureDiagram';
import { DecisionJournal } from '@/components/Interactive/DecisionJournal';
import { SecurityShowcase } from '@/components/Interactive/SecurityShowcase';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function LendSwiftPage() {
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
          FinTech · Full-Stack · Security
        </span>
        <h1 style={{
          fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1,
        }}>
          LendSwift
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          A production-grade B2C lending platform. Three-tier architecture (React + Express + PostgreSQL) preventing 8 web vulnerability classes. 50+ form fields at &lt;16ms. Designed for 10K concurrent users.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://lendswift-loan-portal.vercel.app" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> lendswift-loan-portal.vercel.app
          </a>
          <a href="https://github.com/tannu005/lendswift" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 500, transition: 'all 0.3s', background: 'transparent',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}
          >
            <ExternalLink size={13} /> github/tannu005/lendswift
          </a>
        </div>
      </motion.div>

      {/* Tech tags */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '28px 0 0' }}>
        {['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Zod', 'React Hook Form', 'JWT', 'Vercel', 'Render', 'Supabase'].map(t => (
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
          { value: '<16ms', label: 'Form Render' },
          { value: '50+', label: 'Form Fields' },
          { value: '10K', label: 'Concurrent Users' },
          { value: '8', label: 'Vulnerabilities Prevented' },
          { value: '0', label: 'SQL Injections' },
          { value: '90%', label: 'Payload Reduction' },
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
          Loan application platforms are notoriously slow, insecure, and impossible to scale. Tutorial-grade apps use a single JavaScript file with no backend validation — data lost on refresh, zero security, and 500ms+ render times. I needed to build a financial-grade system handling sensitive PII securely, validating across 50+ fields without lag, and architected to scale to real-world traffic.
        </p>
      </motion.section>

      {/* Architecture Diagram */}
      <ArchitectureDiagram />

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Decision Journal */}
      <DecisionJournal />

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Security Showcase */}
      <SecurityShowcase />

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Engineering Timeline */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Engineering Journal</h2>
        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: `1px solid ${border}` }}>
          {[
            { week: 'Week 1–2', title: 'Form State Architecture', detail: 'Pivoted from Redux (overkill) to React Hook Form + Zod. Result: zero lag across all 8 steps, 40% less code, compile-time type safety on the schema.' },
            { week: 'Week 3', title: 'E-Signature & Asset Pipeline', detail: 'Canvas → PNG → client-side compress → append to form state. Reduced payload from 500KB to 50KB — a 90% reduction. No server upload needed.' },
            { week: 'Week 4–5', title: 'API Security Hardening', detail: 'Added CORS whitelist, server-side Zod validation, JWT-protected routes, and rate limiting. Browser DevTools exploits blocked at every layer.' },
            { week: 'Week 6', title: 'Database Query Optimization', detail: 'Indexed Prisma queries, added connection pooling via Supabase. Admin dashboard loads 100+ rows with live sort/filter in <50ms.' },
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

      {/* Lessons */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Lessons Learned</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { title: 'Secure API Design', desc: 'Can now design secure REST APIs from scratch with CORS, rate limiting, and input validation at every layer.' },
            { title: 'Enterprise Forms', desc: 'Can build enterprise forms handling 100+ fields with zero performance degradation using uncontrolled component patterns.' },
            { title: 'Production Infrastructure', desc: 'Production isn\'t localhost. Infrastructure decisions directly impact security and user experience.' },
            { title: 'Schema Versioning', desc: 'Prisma\'s migration system prevented data loss. Schema versioning is essential for any evolving application.' },
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
