'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Lightbulb, Scale, CheckCircle2 } from 'lucide-react';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

interface Option { name: string; pros: string; cons: string; }
interface Decision {
  id: string;
  title: string;
  context: string;
  options: Option[];
  decision: string;
  rationale: string;
  outcome: string;
  lesson: string;
}

const decisions: Decision[] = [
  {
    id: 'arch',
    title: 'Three-Tier Architecture vs Full-Stack Monolith',
    context: 'Building a lending platform handling sensitive financial PII. Needed security isolation, independent scaling, and the ability to work on frontend and backend separately without touching the same codebase.',
    options: [
      { name: 'Full-Stack Monolith (Next.js SSR)', pros: 'Fast initial dev, single deployment, less infrastructure', cons: 'Couples frontend to backend, no security isolation, scales as one unbreakable unit' },
      { name: '✓ Three-Tier (React + Express + PostgreSQL)', pros: 'Security isolation — frontend physically cannot reach DB, independent scaling per layer, clear separation of concerns', cons: 'More complex setup, longer initial dev time, more infrastructure to manage' },
      { name: 'Serverless (Lambda + API Gateway)', pros: 'Auto-scaling, pay-per-use, no server management', cons: 'Cold start latency, vendor lock-in, debugging difficulty in distributed systems' },
    ],
    decision: '✓ Three-Tier (React + Express + PostgreSQL)',
    rationale: 'For a financial application, security isolation was non-negotiable. The browser physically cannot breach the database. APIs are versioned independently. Each layer scales based on its own load profile — front end on Vercel CDN, API on Render, DB on Supabase.',
    outcome: 'Zero SQL injection vulnerabilities. Frontend scales independently from API. System handles 10K concurrent users without architectural changes.',
    lesson: 'Architecture decisions ripple through every line of code. The extra setup cost paid for itself in the first week of integration testing.',
  },
  {
    id: 'forms',
    title: 'React Hook Form + Zod vs Redux for Form State',
    context: 'LendSwift has an 8-step loan application form with 50+ inter-dependent fields. Each keystroke in a controlled component triggers a full React render tree traversal.',
    options: [
      { name: 'Redux + Redux Form', pros: 'Centralised state, powerful devtools, industry-standard', cons: 'Massive boilerplate, overkill for form state, 500ms+ renders at scale with 50+ fields' },
      { name: '✓ React Hook Form + Zod', pros: 'Minimal re-renders via uncontrolled inputs, purpose-built for forms, Zod schema doubles as TypeScript type', cons: 'Smaller community than Redux, less familiar to some teams' },
      { name: 'Formik + Yup', pros: 'Popular, well-documented, Yup schema validation', cons: 'Still uses controlled inputs under the hood — performance degrades with many fields' },
    ],
    decision: '✓ React Hook Form + Zod',
    rationale: 'React Hook Form stores values in the DOM (uncontrolled), not in React state. Typing into field #50 does NOT re-render fields 1–49. Zod provides compile-time type inference — the validation schema IS the TypeScript type, eliminating an entire class of runtime bugs.',
    outcome: '50+ field form renders in <16ms per keystroke. 40% less code than equivalent Redux setup. Zero lag across all 8 steps.',
    lesson: '"Full-stack" means knowing when NOT to use Redux. The right tool isn\'t always the most popular one.',
  },
  {
    id: 'orm',
    title: 'Prisma ORM vs Raw SQL Queries',
    context: 'The API layer processes sensitive loan application data. Raw SQL is prone to injection attacks and typos. Schema changes require manual migration scripts that are easy to forget.',
    options: [
      { name: 'Raw SQL with pg driver', pros: 'Full control, no abstraction overhead, maximum query flexibility', cons: 'SQL injection risk if any string interpolation exists, manual migrations, no type safety on query results' },
      { name: '✓ Prisma ORM', pros: 'Parameterised queries auto-generated (zero injection risk), TypeScript client with autocomplete per table/column, versioned migrations', cons: 'Abstraction overhead, generated code can be opaque, learning curve' },
      { name: 'Knex.js Query Builder', pros: 'Flexible, SQL-like syntax, migration support', cons: 'Still possible to write unsafe queries, less type safety than Prisma, no auto-generated client' },
    ],
    decision: '✓ Prisma ORM',
    rationale: 'For a financial app, SQL injection is existential. Prisma generates parameterised queries automatically — it is physically impossible to inject SQL. The generated TypeScript client provides autocomplete for every table and column, and migrations are versioned and reversible.',
    outcome: 'Zero SQL injection vulnerabilities. Indexed query execution: <50ms. No data loss incidents across all migrations.',
    lesson: 'Security is a layer cake. Prisma covers the DB layer. Zod covers the API layer. React Hook Form covers the client layer. No single point of failure.',
  },
];

export function DecisionJournal() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section style={{ padding: '48px 0' }}>
      <h3 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Decision Journal</h3>
      <p style={{ color: muted, marginBottom: '32px', fontSize: '14px', lineHeight: 1.6 }}>
        I don&apos;t just code. I evaluate trade-offs, make deliberate choices, and document outcomes. Click any decision to see the full reasoning.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {decisions.map((d, index) => {
          const isOpen = openId === d.id;
          return (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{ border: `1px solid ${isOpen ? amber + '40' : border}`, borderRadius: '12px', overflow: 'hidden', background: surface }}
            >
              {/* Accordion header */}
              <button
                onClick={() => setOpenId(isOpen ? null : d.id)}
                style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: amber, fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>
                    {index + 1}
                  </div>
                  <h4 style={{ color: '#fafaf9', fontWeight: 600, margin: 0, fontSize: '14px' }}>{d.title}</h4>
                </div>
                <ChevronDown size={16} color={muted} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                      {/* Context */}
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <Target size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <p style={{ fontSize: '10px', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 4px' }}>Context</p>
                          <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{d.context}</p>
                        </div>
                      </div>

                      {/* Options */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                          <Scale size={14} color={amber} />
                          <p style={{ fontSize: '10px', fontWeight: 700, color: amber, textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>Options Evaluated</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '10px' }}>
                          {d.options.map(o => {
                            const isChosen = o.name === d.decision;
                            return (
                              <div key={o.name} style={{ borderRadius: '8px', padding: '14px', border: `1px solid ${isChosen ? amber + '50' : border}`, background: isChosen ? 'rgba(245,158,11,0.06)' : '#1a1a1a' }}>
                                <p style={{ color: isChosen ? amber : '#fafaf9', fontWeight: 600, fontSize: '12px', margin: '0 0 8px' }}>{o.name}</p>
                                <p style={{ color: '#22c55e', fontSize: '11px', margin: '0 0 4px' }}>+ {o.pros}</p>
                                <p style={{ color: '#ef4444', fontSize: '11px', margin: 0 }}>− {o.cons}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Rationale */}
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <Lightbulb size={16} color={amber} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <p style={{ fontSize: '10px', fontWeight: 700, color: amber, textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 4px' }}>Rationale</p>
                          <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{d.rationale}</p>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <CheckCircle2 size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <p style={{ fontSize: '10px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 4px' }}>Outcome</p>
                          <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{d.outcome}</p>
                        </div>
                      </div>

                      {/* Lesson */}
                      <div style={{ borderLeft: `2px solid #a855f7`, paddingLeft: '16px', background: 'rgba(168,85,247,0.04)', borderRadius: '0 8px 8px 0', padding: '14px 14px 14px 18px' }}>
                        <p style={{ fontSize: '10px', fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 6px' }}>Lesson Learned</p>
                        <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>&ldquo;{d.lesson}&rdquo;</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
