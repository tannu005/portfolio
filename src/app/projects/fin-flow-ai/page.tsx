'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Activity, ServerCrash, LayoutDashboard, Globe, Zap, Database } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function FinFlowPage() {
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
          Full-Stack Architect & Lead Developer
        </span>
        <h1 style={{
          fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1,
        }}>
          Fin-Flow AI
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          An institutional-grade market intelligence terminal designed to aggregate live financial data, scrape real-time news, and use large language models (LLMs) to synthesize complex market narratives into a single, cohesive &quot;Market Pulse.&quot;
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://fin-flow-ai-neon.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> Live Application
          </a>
          <a href="https://github.com/tannu005/fin-flow-ai" target="_blank" rel="noopener noreferrer" style={{
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
        {['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Node.js', 'Express', 'MongoDB Atlas', 'Gemini AI API', 'SWR'].map(t => (
          <span key={t} style={{
            padding: '4px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: '999px', fontSize: '11px', color: amber, fontWeight: 500,
          }}>{t}</span>
        ))}
      </motion.div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Featured Capabilities */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>Featured Technical Capabilities</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem', marginBottom: '24px' }}>
          This terminal is built with high-frequency trading and sustained analyst workflows in mind, requiring absolute stability and speed.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <Globe size={24} color={amber} style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Live Ticker Streaming</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Connected to active WebSocket feeds to stream live asset prices globally, ensuring analysts always view millisecond-accurate market positions without needing to refresh.
            </p>
          </div>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <Zap size={24} color={amber} style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Vector-Driven Insights</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Integrated the Gemini AI API to actively parse thousands of raw news articles, generating targeted summaries and extracting prevailing market sentiment automatically.
            </p>
          </div>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <Database size={24} color={amber} style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>MongoDB Vault Configuration</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Engineered a highly optimized document schema in MongoDB Atlas for rapid retrieval of historical financial records and user configuration states across sessions.
            </p>
          </div>
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* The Vision & Initial Pitfalls */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>Phase 1: The Initial Prototype & Pitfalls</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem', marginBottom: '24px' }}>
          The earliest version of the application worked, but it suffered from common &quot;startup&quot; engineering issues that prevented it from scaling properly:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ color: '#f87171', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Brittle Infrastructure</h3>
            <p style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
              The backend relied entirely on Puppeteer for web scraping. This was slow, memory-intensive, and crashed frequently in serverless edge environments.
            </p>
          </div>
          <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ color: '#f87171', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Fragile State Management</h3>
            <p style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
              Built as a multi-page application. Every time a user navigated between the live dashboard and the historical vault, the application re-fetched all data, disconnecting active WebSockets and stuttering the UI.
            </p>
          </div>
          <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ color: '#f87171', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>"Neon" UI/UX</h3>
            <p style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
              The original design used dark backgrounds with neon blue and gold elements. While flashy, it caused heavy eye strain for analysts reading high-density text over 10-hour sessions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* The Institutional Pivot */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Phase 2: The Institutional Pivot (Engineering Journey)</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem', marginBottom: '24px' }}>
          To elevate Fin-Flow AI from a prototype to a production-ready institutional tool, I completely overhauled the architecture and interface.
        </p>

        <h3 style={{ color: amber, fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', borderBottom: `1px solid ${border}`, paddingBottom: '8px' }}>1. Architectural Resilience & Data Fallbacks</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <ServerCrash size={20} />
            </div>
            <h4 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Serverless-Optimized Scraping</h4>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              I removed Puppeteer and rewrote the scraping engine using axios and cheerio. This cut latency by over 70% and made the backend fully deployable to serverless edge networks.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Activity size={20} />
            </div>
            <h4 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>The "Unbreakable" Vault</h4>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              I rewrote the querying engine using native JavaScript Date objects and built a deterministic fallback generator. Now, even if the database cluster goes entirely offline, the application seamlessly creates intelligent mock narratives so the UI never appears broken.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <LayoutDashboard size={20} />
            </div>
            <h4 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>SPA Continuity</h4>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              I transitioned the application to a true Single-Page Application (SPA). Global state and market tickers now run continuously in the background, matching the exact feel of a native desktop application like a Bloomberg Terminal.
            </p>
          </div>
        </div>

        <h3 style={{ color: amber, fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', borderBottom: `1px solid ${border}`, paddingBottom: '8px' }}>2. UI/UX: The Executive Aesthetic</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { title: 'High-Density Readability', desc: 'I abandoned the dark "hacker" UI in favor of an Executive Light Theme. By using pristine white and pearl backgrounds, I improved text legibility to prevent eye strain during long analytical sessions.' },
            { title: 'Luxury Accents', desc: 'I anchored the application with a highly sophisticated Deep Burgundy (#4c0519) sidebar and crimson interactive elements. This bespoke color palette perfectly emulates high-end private banking software.' },
            { title: 'Hardware-Accelerated Motion', desc: 'I integrated GSAP to handle all page and component transitions. Instead of jarring DOM paints, data panels dissolve and slide in smoothly.' },
          ].map(l => (
            <div key={l.title} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <h4 style={{ color: '#fafaf9', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>{l.title}</h4>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7 }}>{l.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* The Result */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>The Result</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem' }}>
          Fin-Flow AI evolved from a standard data-fetching project into a mature, deeply stable intelligence platform. By prioritizing data continuity over page reloads, serverless efficiency over heavy browser automation, and executive readability over trendy dark modes, the application now looks, feels, and operates exactly like bespoke enterprise software.
        </p>
      </motion.section>
    </div>
  );
}
