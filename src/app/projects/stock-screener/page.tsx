'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PerformanceBenchmarks } from '@/components/Interactive/PerformanceBenchmarks';
import { ProjectShowcase } from '@/components/Interactive/ProjectShowcase';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function StockScreenerPage() {
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
          Real-Time · Performance · 4 APIs · 60fps
        </span>
        <h1 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1 }}>
          Stock Screener
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          Production-grade real-time market screener. 5,000 records in &lt;200ms via TanStack Virtual&apos;s windowed row rendering. Custom Canvas candlestick chart with 5 technical indicators (SMA20/50/200, Bollinger Bands, Volume). 4 API providers — Finnhub, Alpha Vantage, Polygon, IEX Cloud — unified behind a single WebSocket layer pushing 10–20 price updates every 500ms.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://stock-screener-5tiy.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s'
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> stock-screener-5tiy.vercel.app
          </a>
          <a href="https://github.com/tannu005" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 500, transition: 'all 0.3s', background: 'transparent'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}
          >
            GitHub↗
          </a>
          <a href="/projects/stock-screener#benchmarks" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 500, transition: 'all 0.3s', background: 'transparent'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}
          >
            See Benchmarks ↓
          </a>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '28px 0 0' }}>
        {['Next.js 14', 'React 18', 'TypeScript', 'Zustand', 'TanStack Virtual', 'Three.js', 'Canvas API', 'Framer Motion', 'Tailwind CSS', 'Finnhub', 'Alpha Vantage', 'Polygon', 'IEX Cloud'].map(t => (
          <span key={t} style={{ padding: '4px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '999px', fontSize: '11px', color: amber, fontWeight: 500 }}>{t}</span>
        ))}
      </motion.div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Metrics */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '16px', marginBottom: '48px' }}>
        {[
          { value: '<200ms', label: '5K Row Filter' },
          { value: '60fps', label: 'Rendering' },
          { value: '4', label: 'API Providers' },
          { value: '5', label: 'Chart Indicators' },
          { value: '12.5×', label: 'Speed Improvement' },
          { value: '500ms', label: 'Update Interval' },
        ].map(m => (
          <div key={m.label} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px 16px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '24px', fontWeight: 700, color: amber, margin: 0 }}>{m.value}</p>
            <p style={{ fontSize: '11px', color: muted, marginTop: '4px' }}>{m.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Problem */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>The Problem</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem' }}>
          Traders spend 10+ minutes filtering stocks through bloated, slow interfaces. Most tutorial stock screeners use static mock data, a basic chart library, and collapse at real-world data volume. I needed to build a system that handles live feeds from multiple providers, renders 5,000 rows without a single dropped frame, and delivers a cinematic 60fps trading floor experience — with the architectural depth to prove engineering maturity.
        </p>
      </motion.section>

      {/* Performance Benchmarks */}
      <div id="benchmarks">
        <PerformanceBenchmarks />
      </div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* API Abstraction Diagram */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '8px' }}>Real-Time API Abstraction Layer</h2>
        <p style={{ color: '#a8a29e', marginBottom: '28px', lineHeight: 1.7, maxWidth: '52rem' }}>
          Four financial data providers each speak a different schema. I built a normalisation layer so the UI never knows which provider is active — swap Finnhub for Polygon without touching a single component.
        </p>

        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '16px', padding: '32px' }}>
          {/* User */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'inline-block', padding: '10px 24px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px' }}>
              <p style={{ color: amber, fontWeight: 600, margin: 0, fontSize: '14px' }}>User — Search / Filter Request</p>
            </div>
          </div>
          <div style={{ width: '1px', height: '32px', background: border, margin: '0 auto 24px' }} />
          {/* Abstraction layer */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'inline-block', padding: '10px 24px', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px' }}>
              <p style={{ color: '#f97316', fontWeight: 600, margin: 0, fontSize: '14px' }}>Unified WebSocket Abstraction Layer</p>
              <p style={{ color: muted, fontSize: '11px', margin: '4px 0 0' }}>Schema normalisation · Rate-limit management · Backpressure handling · rAF batching</p>
            </div>
          </div>
          <div style={{ width: '1px', height: '32px', background: border, margin: '0 auto 24px' }} />
          {/* 4 providers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '24px' }}>
            {[
              { name: 'Finnhub', role: 'Real-time price feed' },
              { name: 'Alpha Vantage', role: 'Fundamentals & OHLCV' },
              { name: 'Polygon', role: 'Historical data' },
              { name: 'IEX Cloud', role: 'Intraday quotes' },
            ].map(api => (
              <div key={api.name} style={{ background: '#1c1c1c', border: `1px solid ${border}`, borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                <p style={{ color: '#fafaf9', fontWeight: 600, fontSize: '13px', margin: '0 0 4px' }}>{api.name}</p>
                <p style={{ color: muted, fontSize: '11px', margin: 0 }}>{api.role}</p>
              </div>
            ))}
          </div>
          <div style={{ width: '1px', height: '32px', background: border, margin: '0 auto 24px' }} />
          {/* Result */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '10px 24px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', fontWeight: 600, margin: 0, fontSize: '14px' }}>UI renders at 60fps — provider-agnostic</p>
            </div>
          </div>
        </div>
        <p style={{ color: muted, fontSize: '12px', marginTop: '12px', fontStyle: 'italic' }}>
          Engineering lesson: Normalisation cost 2 days. It saved 2 days per additional provider. Worth it every time.
        </p>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Project Showcase */}
      <ProjectShowcase />

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Technical Challenges */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Technical Challenges Solved</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { title: 'DOM Bottleneck', desc: 'Rendering 5,000 DOM nodes froze the browser for 2–3s. TanStack Virtual renders only the ~20 visible rows — 99.6% fewer DOM nodes.' },
            { title: 'WebSocket Backpressure', desc: '10–20 updates per 500ms overwhelmed the main thread. Throttled streams with requestAnimationFrame batching — zero jank.' },
            { title: 'Canvas Chart Performance', desc: 'Custom Canvas chart instead of Chart.js. Hardware-accelerated rendering holds 60fps with 5 simultaneous technical indicators.' },
            { title: 'Multi-Criteria Filtering', desc: 'Filtering 5,000 objects across 10 criteria simultaneously. useMemo multi-pass reduction — only re-executes when its own dependency changes.' },
          ].map(c => (
            <div key={c.title} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <h4 style={{ color: amber, fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>{c.title}</h4>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
