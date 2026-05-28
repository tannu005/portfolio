'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Satellite, MapPin, BarChart3, BookOpen, ExternalLink } from 'lucide-react';
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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: amber }}>
          Internship · GIS · Data Science · Remote Sensing
        </span>
        <h1 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 700, color: '#fafaf9', margin: '12px 0 8px', letterSpacing: '-1.5px', lineHeight: 1 }}>
          India Space Lab
        </h1>
        <p style={{ fontSize: '15px', color: muted, marginBottom: '16px' }}>Geospatial Data Analyst Intern &nbsp;·&nbsp; Feb - Mar 2026</p>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          Built automated GIS and Remote Sensing pipelines in Python to process and classify 200+ sq km of satellite imagery across 5+ multispectral datasets. Delivered an interactive Streamlit dashboard enabling non-technical stakeholders to interpret satellite data without writing a single line of code.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://remote-sensing-gis-ftk4znsyyftydvmnng7iwh.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <Satellite size={13} /> View Dashboard
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

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* What I Built */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>What I Built</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
          {[
            {
              icon: Satellite,
              title: 'Satellite Imagery Pipelines',
              desc: 'Built automated GIS and Remote Sensing pipelines in Python. Processed and classified 200+ sq km of multispectral imagery across 5+ datasets. Extracted NDVI indices, band ratios, spectral signatures, and RGB composites for land-use analysis.',
            },
            {
              icon: BarChart3,
              title: 'Streamlit Dashboard',
              desc: 'Developed an interactive Streamlit dashboard displaying classified land-use maps, spectral overlays, and analytical charts. Non-technical stakeholders could interpret satellite data without running a single line of code.',
            },
            {
              icon: MapPin,
              title: 'GIS Data Processing',
              desc: 'Worked with coordinate reference systems, geospatial projections, and multi-band satellite imagery. Implemented NDVI land-use classification workflows using GeoPandas, GDAL, and Shapely.',
            },
            {
              icon: BookOpen,
              title: 'Parameterised Notebooks',
              desc: 'Packaged all analysis pipelines as reusable, parameterised Jupyter notebooks. Changing the input config - not rewriting code - is all that is needed to run on a new dataset or region.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}>
                <Icon size={28} color={amber} style={{ marginBottom: '14px' }} />
                <h3 style={{ color: '#fafaf9', fontWeight: 600, margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Why It Matters */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Why This Matters for Hiring Managers</h2>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '28px' }}>
          {[
            { label: 'Domain Learning Ability', desc: 'Jumped into geospatial systems with zero prior knowledge and delivered production pipelines within weeks. I can ramp on any new domain fast.' },
            { label: 'Data Science Breadth', desc: 'Comfortable with NumPy, Pandas, GeoPandas, and high-volume streaming data - not just web APIs.' },
            { label: 'Stakeholder Communication', desc: 'Built dashboards for non-technical users - proving I bridge the engineer-business gap, not just write backend code.' },
            { label: 'Reusability Mindset', desc: 'Parameterised notebooks mean any future analyst re-uses my work with a config change, not a copy-paste and pray.' },
          ].map((point, i) => (
            <div key={point.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: i < 3 ? '20px' : 0, paddingBottom: i < 3 ? '20px' : 0, borderBottom: i < 3 ? `1px solid ${border}` : 'none' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: amber, marginTop: '6px', flexShrink: 0 }} />
              <div>
                <span style={{ color: '#fafaf9', fontWeight: 600, fontSize: '14px' }}>{point.label}: </span>
                <span style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.7 }}>{point.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Skills Gained</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Python', 'NumPy', 'Pandas', 'GeoPandas', 'Rasterio', 'GDAL', 'Shapely', 'Streamlit', 'Jupyter', 'GIS', 'Remote Sensing', 'NDVI Analysis', 'Multispectral Imagery', 'Data Pipelines', 'Land-Use Classification'].map(s => (
            <span key={s} style={{ padding: '6px 14px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '999px', fontSize: '12px', color: amber, fontWeight: 500 }}>{s}</span>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
