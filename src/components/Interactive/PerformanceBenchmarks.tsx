'use client';

import { motion } from 'framer-motion';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

const benchmarks = [
  {
    label: 'Form Rendering',
    before: 500,
    after: 16,
    unit: 'ms',
    improvement: '30× faster',
    context: 'React Hook Form (uncontrolled) vs Redux controlled components',
    color: amber,
  },
  {
    label: 'Stock Filtering (5,000 rows)',
    before: 2500,
    after: 200,
    unit: 'ms',
    improvement: '12.5× faster',
    context: 'TanStack Virtual windowed rendering + memoized multi-criteria filter',
    color: '#f97316',
  },
  {
    label: 'Database Queries',
    before: 250,
    after: 45,
    unit: 'ms',
    improvement: '5.5× faster',
    context: 'Indexed Prisma ORM vs unindexed raw SQL',
    color: '#a855f7',
  },
  {
    label: 'API Response Time (P50)',
    before: 180,
    after: 45,
    unit: 'ms',
    improvement: '4× faster',
    context: 'Optimised Express middleware pipeline + connection pooling',
    color: '#22c55e',
  },
];

export function PerformanceBenchmarks() {
  return (
    <section style={{ padding: '48px 0' }}>
      <h3 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Performance Benchmarks</h3>
      <p style={{ color: muted, marginBottom: '32px', fontSize: '14px', lineHeight: 1.6 }}>
        Quantified improvements across the full stack. Not subjective — measured.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {benchmarks.map((b, i) => {
          const afterPct = Math.max((b.after / b.before) * 100, 4);
          return (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <h4 style={{ color: '#fafaf9', fontWeight: 600, margin: 0, fontSize: '14px' }}>{b.label}</h4>
                <span style={{ color: b.color, fontWeight: 700, fontSize: '13px' }}>{b.improvement}</span>
              </div>

              {/* Before bar */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', color: muted }}>Traditional Approach</span>
                  <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 600 }}>{b.before}{b.unit}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#1f1f1f', borderRadius: '999px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08 + 0.2, ease: 'easeOut' }}
                    style={{ height: '100%', background: '#ef4444', borderRadius: '999px', opacity: 0.7 }}
                  />
                </div>
              </div>

              {/* After bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', color: muted }}>My Engineered Approach</span>
                  <span style={{ fontSize: '11px', color: b.color, fontWeight: 600 }}>{b.after}{b.unit}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#1f1f1f', borderRadius: '999px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${afterPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08 + 0.4, ease: 'easeOut' }}
                    style={{ height: '100%', background: b.color, borderRadius: '999px' }}
                  />
                </div>
              </div>

              <p style={{ color: muted, fontSize: '11px', marginTop: '12px', fontStyle: 'italic', margin: '12px 0 0' }}>{b.context}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
