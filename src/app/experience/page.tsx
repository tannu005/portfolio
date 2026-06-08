'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Briefcase, Code, Database, Globe, Activity, ShieldCheck, Zap, Monitor, MapPin, Satellite, BarChart3, BookOpen } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function ExperiencePage() {
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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '48px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: amber }}>
          Career Timeline
        </span>
        <h1 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 700, color: '#fafaf9', margin: '12px 0 8px', letterSpacing: '-1.5px', lineHeight: 1 }}>
          Professional Experience
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7 }}>
          A timeline of my professional journey across full-stack development, high-performance financial engineering, and data science.
        </p>
      </motion.div>

      <div style={{ position: 'relative', borderLeft: `2px solid ${border}`, paddingLeft: '32px', marginLeft: '16px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
        
        {/* Codaphics */}
        <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ position: 'absolute', left: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: surface, border: `4px solid ${amber}` }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Codaphics</h2>
              <p style={{ fontSize: '15px', color: muted, margin: 0 }}>Full Stack Web Development Intern &nbsp;·&nbsp; May 2026 - Present (6 Months)</p>
            </div>
            <a href="https://codaphics.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none', fontSize: '12px', fontWeight: 500, transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }} onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}>
              <Globe size={13} /> codaphics.com
            </a>
          </div>
          
          <p style={{ color: '#a8a29e', lineHeight: 1.7, marginBottom: '24px' }}>
            Contributing to the design, development, and maintenance of responsive websites and highly scalable web applications, collaborating tightly with the core engineering team.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '16px' }}>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <Monitor size={20} color={amber} style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>Frontend Systems</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>Building optimized, responsive user interfaces using HTML, CSS, JavaScript, and React.js.</p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <Database size={20} color={amber} style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>Backend Infrastructure</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>Developing APIs and integrating databases and server-side technologies for scalable data flow.</p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <Zap size={20} color={amber} style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>Performance Optimization</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>Debugging complex application states and optimizing client-side rendering for improved Core Web Vitals.</p>
            </div>
          </div>
        </motion.section>

        {/* Zetheta Algorithms */}
        <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ position: 'absolute', left: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: surface, border: `4px solid ${amber}` }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Zetheta Algorithms</h2>
              <p style={{ fontSize: '15px', color: muted, margin: 0 }}>Front End Developer (BFSI Sector) &nbsp;·&nbsp; Apr 2026 - May 2026</p>
            </div>
            <a href="https://www.zetheta.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none', fontSize: '12px', fontWeight: 500, transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }} onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}>
              <Globe size={13} /> zetheta.com
            </a>
          </div>
          
          <p style={{ color: '#a8a29e', lineHeight: 1.7, marginBottom: '24px' }}>
            Architected, optimized, and deployed an independent suite of production-grade financial applications. Delivered 4 major core product systems in 15-day sprint cycles each.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}>
              <Code size={24} color={amber} style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Abstracted Canvas & Layout Engines</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Built a premium interactive editor with a 50-step circular history buffer (Undo/Redo with Immer) and dynamic layout dragging via @dnd-kit/sortable. Configured a spatial grid utility running above 55 FPS with serialized state persistence optimized under 50KB.
              </p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}>
              <Activity size={24} color={amber} style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Low-Latency Performance & Streaming</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Engineered a simulation layer pushing real-time streams via custom hook memoization and stale-data indicators. Built a custom HTML5 Canvas dashboard displaying 5 technical indicators concurrently across a synchronized 60fps UI thread.
              </p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}>
              <BarChart3 size={24} color={amber} style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Math Modeling & Algorithmic Validation</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Coded industry-standard calculation engines tracking compound projection curves, SIP models, and loan thresholds—fully validated using Vitest. Optimized sorting across 5,000+ asset records executing in under 200ms using TanStack Virtual.
              </p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}>
              <ShieldCheck size={24} color={amber} style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Enterprise Security & Architecture</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Hardened Node.js/Express architectures against OWASP Top 10 via Helmet, rate-limiting, and HPP protection. Engineered a 50+ field multi-step onboarding wizard with real-time Zod schema validation and Prisma ORM reducing render latency to under 16ms.
              </p>
            </div>
          </div>
          
          <div style={{ padding: '16px', background: 'rgba(245,158,11,0.05)', borderRadius: '12px', border: '1px solid rgba(245,158,11,0.2)' }}>
            <span style={{ color: '#fafaf9', fontWeight: 600, fontSize: '13px' }}>Tech Stack: </span>
            <span style={{ color: '#a8a29e', fontSize: '13px' }}>React 19, Next.js 14, Vite 8, TypeScript (Strict), Zustand 5, TailwindCSS v4, Prisma, PostgreSQL, Express, Node.js, TipTap 3, Framer Motion, Vitest.</span>
          </div>
        </motion.section>

        {/* Remote Sensing */}
        <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ position: 'absolute', left: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: surface, border: `4px solid ${amber}` }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Remote Sensing</h2>
              <p style={{ fontSize: '15px', color: muted, margin: 0 }}>Geospatial Data Analyst Intern &nbsp;·&nbsp; Feb 2026 - Mar 2026</p>
            </div>
            <a href="https://remote-sensing-gis-ftk4znsyyftydvmnng7iwh.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: `1px solid ${border}`, color: '#a8a29e', borderRadius: '999px', textDecoration: 'none', fontSize: '12px', fontWeight: 500, transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.color = amber; }} onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = '#a8a29e'; }}>
              <Satellite size={13} /> Dashboard
            </a>
          </div>
          
          <p style={{ color: '#a8a29e', lineHeight: 1.7, marginBottom: '24px' }}>
            Built automated GIS and Remote Sensing pipelines in Python to process and classify 200+ sq km of satellite imagery across 5+ multispectral datasets.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '16px' }}>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <MapPin size={20} color={amber} style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>Satellite Imagery Pipelines</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>Processed 200+ sq km of multispectral imagery. Extracted NDVI indices, spectral signatures, and RGB composites for land-use analysis using GeoPandas and GDAL.</p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <BarChart3 size={20} color={amber} style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>Streamlit Dashboard</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>Developed an interactive dashboard displaying classified land-use maps and spectral overlays for non-technical stakeholders.</p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
              <BookOpen size={20} color={amber} style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>Parameterised Notebooks</h3>
              <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>Packaged analysis pipelines as reusable Jupyter notebooks, replacing code rewrites with simple configuration changes.</p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
