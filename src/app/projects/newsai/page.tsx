'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Network, Database, Flame } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function NewsAIPage() {
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
          AI Engine · Vector Search · 3D Graph
        </span>
        <h1 style={{
          fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1,
        }}>
          NewsAI
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          An AI-powered news analysis and vector search platform. It parses real-time RSS feeds, groups articles by semantic similarity, vectorizes their content using LangChain, and renders relationships inside an interactive 3D WebGL network graph.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://newsai-two.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> newsai-two.vercel.app
          </a>
          <a href="https://github.com/tannu005/newsai" target="_blank" rel="noopener noreferrer" style={{
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
        {['React', 'Three.js', 'React Three Fiber', 'Node.js', 'Express', 'LangChain', 'Google Gemini API', 'Inngest', 'Vector Search', 'RSS Feed Parsing', 'Event-driven Architecture'].map(t => (
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
          { value: '<200ms', label: 'Semantic Search' },
          { value: '10K+', label: 'Vector Nodes' },
          { value: '60 FPS', label: '3D WebGL Graph' },
          { value: '100%', label: 'Asynchronous Queues' },
          { value: 'Zero', label: 'Main Thread Block' },
          { value: 'RSS/JSON', label: 'Memory Storage' },
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
          Consuming news across multiple industries typically results in information overload. Traditional aggregators display titles in boring chronological lists, failing to highlight the semantic relationships between different articles (e.g., how a regulatory policy shift impacts chip manufacturing stocks). Furthermore, vectorizing hundreds of articles in real time is computationally expensive and blocks main application threads, resulting in laggy UIs and slow page responsiveness.
        </p>
      </motion.section>

      {/* Architecture & Visual Blocks */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Architecture & Core Workflow</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Database size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>LangChain RAG Pipeline</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Ingested articles are split using recursive character text splitters, converted into vector representations using Gemini Embeddings, and organized into an in-memory document corpus. This enables vector-similarity calculations and semantic Q&A queries.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Flame size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Inngest Event Processor</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Bypassed standard cron jobs. Designed step-by-step background workflows with Inngest. Feeds are fetched, scrubbed, parsed, and embedded in separate execution steps that retry automatically on network failures, preserving system reliability.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Network size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Interactive 3D WebGL Graph</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Used React Three Fiber to visualize articles as interactive nodes. Linked articles are joined by lines representing semantic similarity. Clicking a node opens a sidebar revealing the underlying AI analysis and related reports.
            </p>
          </div>

        </div>
      </motion.section>

      {/* Engineering Timeline */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Engineering Timeline</h2>
        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: `1px solid ${border}` }}>
          {[
            { week: 'Week 1', title: 'Data Ingestion & Feed Parser', detail: 'Built parsing routes inside an Express backend to aggregate headlines from multiple technology feeds. Cleaned incoming raw HTML and structured data into standard JSON schemas.' },
            { week: 'Week 2', title: 'Vector Pipeline with LangChain', detail: 'Integrated LangChain splitters and Gemini embeddings API. Created semantic indexing algorithms where search inputs are compared mathematically against the vectorized articles.' },
            { week: 'Week 3', title: 'Background Processing with Inngest', detail: 'Integrated Inngest serverless event processor. Offloaded the heavy parsing and vector embedding calls to Inngest handlers, reducing API gateway timeouts to 0%.' },
            { week: 'Week 4', title: 'Three.js Network Visualizer', detail: 'Created a 3D force-directed layout utilizing React Three Fiber. Optimized WebGL draws using instanced meshes, rendering 1,000+ coordinates smoothly at 60fps.' },
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
            { title: 'Serverless Queues', desc: 'Inngest proved that traditional Cron jobs are fragile. Event-driven queue execution prevents API rate limits and handles system retries automatically.' },
            { title: 'WebGL Optimization', desc: 'Learned that updating React state on 3D mouse hover destroys performance. Used direct refs and pointer events to maintain smooth 60fps rendering.' },
            { title: 'Vector Semantics', desc: 'Discovered the importance of text chunk sizing. Splitting text too finely removes contextual meaning, while huge blocks dilute specific details.' },
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
