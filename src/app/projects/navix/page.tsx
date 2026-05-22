'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Zap, Repeat, GitBranch, Cpu } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function NavixPage() {
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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: amber }}>
          AI Platform · CI/CD · Vercel · Next.js
        </span>
        <h1 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1 }}>
          Navix AI
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          Architected a 5-screen AI-driven career development platform. Gemini API powers CV generation and skill gap analysis; Groq API drives the real-time AI chat — each feature isolated behind its own API route. Reusable component library cut per-screen development time by 40%. Zero-touch deployments via GitHub Actions → Vercel CI/CD pipeline.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://navix-v2.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> navix-v2.vercel.app
          </a>
          <a href="https://github.com/tannu005" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 500, transition: 'all 0.3s', background: 'transparent',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}
          >
            <ExternalLink size={13} /> github/tannu005
          </a>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '28px 0 0' }}>
        {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Zustand', 'Gemini API', 'Groq API', 'GitHub Actions', 'Vercel', 'Netlify', 'CI/CD'].map(t => (
          <span key={t} style={{ padding: '4px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '999px', fontSize: '11px', color: amber, fontWeight: 500 }}>{t}</span>
        ))}
      </motion.div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Metrics */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '16px', marginBottom: '48px' }}>
        {[
          { value: '5', label: 'Screens Built' },
          { value: '40%', label: 'Code Reuse' },
          { value: '<1s', label: 'Initial Load' },
          { value: '2', label: 'LLM Providers' },
          { value: '0', label: 'Manual Deploys' },
          { value: '35%', label: 'Token Cost Saved' },
        ].map(m => (
          <div key={m.label} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px 16px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '24px', fontWeight: 700, color: amber, margin: 0 }}>{m.value}</p>
            <p style={{ fontSize: '11px', color: muted, marginTop: '4px' }}>{m.label}</p>
          </div>
        ))}
      </motion.div>

      {/* LLM Routing */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '8px' }}>Intelligent LLM API Routing</h2>
        <p style={{ color: '#a8a29e', marginBottom: '24px', lineHeight: 1.7, maxWidth: '52rem' }}>
          Not all tasks need the same AI. Routing by task type — accuracy vs speed — optimised token costs by 35% and cut chat latency from ~2s to ~200ms.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
          <div style={{ background: surface, border: '1px solid rgba(245,158,11,0.3)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Cpu size={20} color={amber} />
              <h3 style={{ color: '#fafaf9', fontWeight: 600, margin: 0 }}>Gemini API</h3>
            </div>
            <p style={{ fontSize: '13px', color: amber, marginBottom: '10px' }}>CV generation · Skill gap analysis · Role exploration</p>
            <ul style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.8, margin: 0, paddingLeft: '16px' }}>
              <li>Higher accuracy & nuance</li>
              <li>Better structured JSON output</li>
              <li>~2–3s response (acceptable for generation)</li>
            </ul>
          </div>
          <div style={{ background: surface, border: '1px solid rgba(249,115,22,0.3)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Zap size={20} color="#f97316" />
              <h3 style={{ color: '#fafaf9', fontWeight: 600, margin: 0 }}>Groq API</h3>
            </div>
            <p style={{ fontSize: '13px', color: '#f97316', marginBottom: '10px' }}>AI chat assistant · Quick suggestions · Real-time Q&A</p>
            <ul style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.8, margin: 0, paddingLeft: '16px' }}>
              <li>Blazing fast (~200ms responses)</li>
              <li>Lower token cost</li>
              <li>Ideal for interactive back-and-forth</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Component Library */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '8px' }}>Reusable Component Library — 40% Code Reuse</h2>
        <p style={{ color: '#a8a29e', marginBottom: '24px', lineHeight: 1.7, maxWidth: '52rem' }}>
          Instead of building 5 screens from scratch, I built a shared component library first. Every screen uses the same primitives, so adding a new screen takes hours, not days.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px' }}>
          {[
            { icon: Repeat, label: 'Form Inputs', desc: 'Shared across all 5 screens' },
            { icon: Cpu, label: 'AI Response Renderer', desc: 'Streaming markdown support' },
            { icon: GitBranch, label: 'Layout Primitives', desc: 'Consistent page structure' },
            { icon: Zap, label: 'Loading States', desc: 'Skeleton + progress bars' },
          ].map(c => {
            const Icon = c.icon;
            return (
              <div key={c.label} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <Icon size={28} color={amber} style={{ marginBottom: '12px' }} />
                <h4 style={{ color: '#fafaf9', fontWeight: 600, fontSize: '13px', margin: '0 0 6px' }}>{c.label}</h4>
                <p style={{ color: muted, fontSize: '12px', margin: 0 }}>{c.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* CI/CD Pipeline */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '8px' }}>CI/CD Pipeline — Zero-Touch Deployments</h2>
        <p style={{ color: '#a8a29e', marginBottom: '24px', lineHeight: 1.7, maxWidth: '52rem' }}>
          Every push to main is automatically linted, type-checked, built, and deployed. Deployment time: from &quot;whenever I remember to SSH&quot; to under 60 seconds, automatically.
        </p>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '28px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', minWidth: '480px' }}>
            {[
              { step: '01', label: 'git push main', detail: 'Developer commits' },
              { step: '02', label: 'GitHub Actions', detail: 'Lint + Type-check' },
              { step: '03', label: 'Build', detail: 'Next.js static export' },
              { step: '04', label: 'Deploy', detail: 'Vercel edge in <60s' },
            ].map((s, i) => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: amber, fontWeight: 700, fontSize: '13px', margin: '0 auto' }}>{s.step}</div>
                  <p style={{ color: '#fafaf9', fontWeight: 600, fontSize: '12px', margin: '8px 0 2px' }}>{s.label}</p>
                  <p style={{ color: muted, fontSize: '11px', margin: 0 }}>{s.detail}</p>
                </div>
                {i < 3 && <div style={{ flex: 1, height: '1px', background: border }} />}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lessons */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Lessons Learned</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { title: 'API Provider Trade-offs', desc: 'No single LLM is best for everything. Routing by task type (accuracy vs speed) cut costs 35% and halved chat latency.' },
            { title: 'Component-First Thinking', desc: 'Building the component library first — before any screen — meant each new screen was assembled, not built.' },
            { title: 'Automated Deployment', desc: 'CI/CD isn\'t a luxury. Manual deploys are error-prone and mentally draining. Automate everything from day one.' },
            { title: 'Token Cost Engineering', desc: 'Prompt engineering and response caching reduced API token spend. Real-world AI apps must consider unit economics.' },
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
