'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

interface ShowcaseItem { category: string; tutorial: string; yours: string; }
interface Project { id: string; name: string; items: ShowcaseItem[]; }

const projects: Project[] = [
  {
    id: 'lendswift',
    name: 'LendSwift',
    items: [
      { category: 'Architecture', tutorial: 'Single JS file, no separation', yours: 'Three-tier: React + Express + PostgreSQL' },
      { category: 'Security', tutorial: 'No backend validation', yours: 'Prisma ORM + Zod + CORS whitelist + JWT' },
      { category: 'Form Performance', tutorial: '500ms+ re-renders with 50 fields', yours: '<16ms per keystroke (React Hook Form)' },
      { category: 'Scalability', tutorial: '0 production considerations', yours: 'Designed for 10K concurrent users' },
      { category: 'Deployment', tutorial: 'localhost only', yours: 'Vercel + Render + Supabase, automated CI/CD' },
      { category: 'Data Integrity', tutorial: 'Data lost on page refresh', yours: 'PostgreSQL with versioned Prisma migrations' },
    ],
  },
  {
    id: 'screener',
    name: 'Stock Screener',
    items: [
      { category: 'Data Rendering', tutorial: '5K rows = 2–3s browser freeze', yours: '5K rows in <200ms (TanStack Virtual)' },
      { category: 'API Integration', tutorial: 'One API, hardcoded schema', yours: '4 APIs normalised behind one WebSocket layer' },
      { category: 'Charting', tutorial: 'Chart.js library dump', yours: 'Custom Canvas chart + 5 technical indicators' },
      { category: 'Data Feed', tutorial: 'Static data on page load', yours: 'Live WebSocket — 10–20 updates per 500ms' },
      { category: 'Visual Quality', tutorial: 'Basic HTML table', yours: 'Three.js particles + Framer Motion @ 60fps' },
      { category: 'Code Structure', tutorial: '500+ line monolith component', yours: 'Modular, memoized components with code splitting' },
    ],
  },
  {
    id: 'navix',
    name: 'Navix AI',
    items: [
      { category: 'Feature Delivery', tutorial: '1 screen, hardcoded prompts', yours: '5 screens with 40% code reuse across all' },
      { category: 'AI Integration', tutorial: 'One API, display raw response', yours: 'Gemini + Groq routed intelligently by task type' },
      { category: 'Performance', tutorial: '3+ second initial load', yours: '<1s via font subsetting + lazy routes + Vercel edge' },
      { category: 'Deployment', tutorial: 'Manual SSH to server', yours: 'Fully automated GitHub Actions → Vercel CI/CD' },
      { category: 'Error Handling', tutorial: 'Crashes on API failure', yours: 'Graceful degradation + exponential retry logic' },
      { category: 'Type Safety', tutorial: 'Runtime JS errors', yours: 'TypeScript strict mode + Zod schemas end-to-end' },
    ],
  },
];

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const current = projects.find(p => p.id === activeProject)!;

  return (
    <section style={{ padding: '48px 0' }}>
      <h3 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Your Approach vs Tutorial Approach</h3>
      <p style={{ color: muted, marginBottom: '24px', fontSize: '14px', lineHeight: 1.6 }}>See exactly how production engineering differs from following a tutorial.</p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {projects.map(p => (
          <button
            key={p.id}
            onClick={() => setActiveProject(p.id)}
            style={{
              padding: '8px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', border: 'none', transition: 'all 0.2s',
              background: activeProject === p.id ? amber : '#1f1f1f',
              color: activeProject === p.id ? '#0a0a0a' : muted,
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={{ border: `1px solid ${border}`, borderRadius: '12px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr', background: '#111' }}>
          <div style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: muted, textTransform: 'uppercase', letterSpacing: '1px' }}>Category</div>
          <div style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1px' }}>Tutorial Approach</div>
          <div style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: amber, textTransform: 'uppercase', letterSpacing: '1px' }}>My Approach</div>
        </div>

        {current.items.map((item, i) => (
          <motion.div
            key={`${current.id}-${item.category}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr',
              borderTop: `1px solid ${border}`,
              background: i % 2 === 0 ? surface : '#111',
            }}
          >
            <div style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: '#fafaf9' }}>{item.category}</div>
            <div style={{ padding: '14px 16px', fontSize: '13px', color: '#a8a29e', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <X size={14} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{item.tutorial}</span>
            </div>
            <div style={{ padding: '14px 16px', fontSize: '13px', color: '#d6d3d1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <Check size={14} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{item.yours}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
