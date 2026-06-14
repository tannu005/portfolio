'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, ShieldCheck, Database, Server, GitBranch, Terminal, AlertTriangle, Layers, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function DeployGuardPage() {
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
          Enterprise DevSecOps Platform
        </span>
        <h1 style={{
          fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1,
        }}>
          DeployGuard
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          An advanced, production-grade Salesforce CI/CD Pipeline Static Analysis and Compliance Engine. Parses deployment configurations to detect security vulnerabilities, metadata anomalies, hardcoded secrets, and destructive changes before they hit production.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://deploy-guard-gamma.vercel.app" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> Live Application
          </a>
          <a href="https://github.com/tannu005/DeployGuard" target="_blank" rel="noopener noreferrer" style={{
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
        {['Next.js', 'React', 'Node.js', 'Express', 'Redis', 'BullMQ', 'Neon PostgreSQL', 'Prisma', 'Stripe API', 'GitHub API'].map(t => (
          <span key={t} style={{
            padding: '4px 12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: '999px', fontSize: '11px', color: amber, fontWeight: 500,
          }}>{t}</span>
        ))}
      </motion.div>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Problem Statement */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>The Problem Statement</h2>
        <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '24px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <AlertTriangle size={24} color="#ef4444" />
            <h3 style={{ color: '#f87171', fontSize: '16px', fontWeight: 600, margin: 0 }}>Blind Deployments in Salesforce</h3>
          </div>
          <p style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
            Enterprise Salesforce environments handle millions of dollars in operations, but their deployment pipelines are notoriously fragile. A single junior developer can accidentally bypass test coverage requirements or push a destructive changes XML file that deletes critical production metadata. Traditional CI/CD tools just push code—they don't proactively analyze the abstract syntax and metadata integrity before executing the deployment, leading to catastrophic data loss and compliance violations.
          </p>
        </div>
      </motion.section>

      {/* Featured Capabilities */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '12px' }}>Enterprise Capabilities</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem', marginBottom: '24px' }}>
          Engineered to act as a high-performance DevSecOps checkpoint, preventing deployment failures and enforcing strict corporate compliance policies automatically.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <ShieldCheck size={24} color={amber} style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Salesforce-Specific Engine</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Performs deep Apex static analysis to enforce proper test levels (e.g., RunLocalTests) on production deployments. Verifies metadata integrity by scanning manifests for unvalidated settings and security exceptions.
            </p>
          </div>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <Terminal size={24} color={amber} style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Destructive Changes Safety</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Blocks CI/CD pipelines containing unauthorized destructiveChangesPre.xml or destructiveChangesPost.xml files, proactively defending against catastrophic production data loss.
            </p>
          </div>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <Database size={24} color={amber} style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Custom Compliance Rules</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Administrators can inject dynamic AST scanning evaluations in real-time, enforcing policies like blocking 'allow-failures: true' or scanning for unauthorized environment flags on specific branches.
            </p>
          </div>
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* System Architecture */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>System Architecture & Workflow</h2>
        <p style={{ color: '#a8a29e', lineHeight: 1.8, maxWidth: '52rem', marginBottom: '24px' }}>
          DeployGuard implements a scalable, decoupled architecture designed to process heavy AST parsing operations asynchronously without blocking the UI.
        </p>

        <h3 style={{ color: amber, fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', borderBottom: `1px solid ${border}`, paddingBottom: '8px' }}>Distributed Job Queueing</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Server size={20} />
            </div>
            <h4 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Redis & BullMQ Engine</h4>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Incoming GitHub repository scans are offloaded to an Express API Gateway which enqueues jobs into a high-performance Redis cache. Dedicated BullMQ background workers pick up the jobs, allowing the system to scale horizontally during massive deployment surges.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <GitBranch size={20} />
            </div>
            <h4 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>AST Parse & Validate</h4>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              The background workers fetch code via the GitHub REST API and parse configurations using an Abstract Syntax Tree (AST). This deep parsing ensures that superficial checks are bypassed in favor of absolute code integrity.
            </p>
          </div>
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Comparing Sections */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Comparing Architectures: Naive vs Engine</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: muted, fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Traditional CI Checks</h3>
            <ul style={{ color: '#a8a29e', fontSize: '14px', lineHeight: 1.8, margin: 0, paddingLeft: '16px' }}>
              <li>Regex-based search (highly prone to false positives/negatives)</li>
              <li>Runs synchronously, blocking the build agent for minutes</li>
              <li>Cannot understand context (e.g., if a file is destructive or just an update)</li>
              <li>Cannot enforce complex logic like 'If file X is changed, Test Y must be run'</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(245, 158, 11, 0.05)', border: `1px solid rgba(245, 158, 11, 0.3)`, borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: amber, fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>DeployGuard AST Engine</h3>
            <ul style={{ color: '#fafaf9', fontSize: '14px', lineHeight: 1.8, margin: 0, paddingLeft: '16px' }}>
              <li>Transforms code into an Abstract Syntax Tree for semantic understanding</li>
              <li>Asynchronous Redis/BullMQ processing leaves CI runners free</li>
              <li>Understands exact XML structures, diffs, and Salesforce metadata relationships</li>
              <li>Applies dynamic corporate compliance rules evaluated at runtime</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <hr style={{ border: 'none', borderTop: `1px solid ${border}`, margin: '48px 0' }} />

      {/* Unique Learning */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '20px' }}>Unique Learnings</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { icon: Layers, title: 'AST vs Regex Parsing', desc: 'Regex is completely insufficient for code security. I learned how to build parsers that convert code into Abstract Syntax Trees, allowing the engine to traverse nodes and understand context rather than just matching raw strings.' },
            { icon: Server, title: 'Decoupling Heavy Workloads', desc: 'Parsing thousands of files synchronously crashes Node.js threads. I mastered Redis and BullMQ to offload intense CPU-bound operations to background workers, keeping the API gateway blazingly fast.' },
            { icon: Target, title: 'Enterprise DevSecOps', desc: 'Understanding the gap between "code that works" and "code that complies". Built mechanisms for AI-assisted auto-remediation, helping developers fix vulnerabilities before Security teams even review them.' }
          ].map(l => {
            const Icon = l.icon;
            return (
              <div key={l.title} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '12px', padding: '20px' }}>
                <Icon size={24} color={amber} style={{ marginBottom: '12px' }} />
                <h4 style={{ color: '#fafaf9', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>{l.title}</h4>
                <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7 }}>{l.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Result */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <div style={{ background: 'linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(20,20,20,0.8))', border: `1px solid rgba(245, 158, 11, 0.3)`, borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: amber, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CheckCircle2 size={28} /> The Result
          </h2>
          <p style={{ color: '#fafaf9', fontSize: '16px', lineHeight: 1.8, maxWidth: '52rem' }}>
            DeployGuard successfully evolved into an enterprise-ready DevSecOps pipeline. By prioritizing Abstract Syntax Tree evaluation over naive regex scans, and decoupling the analysis engine with Redis/BullMQ, the platform can effortlessly parse massive monolithic repositories. It actively blocks dangerous destructive deployments and guides developers toward secure remediation—automating security compliance at scale.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
