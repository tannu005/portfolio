'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ShieldCheck, ChevronRight } from 'lucide-react';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

interface Vuln {
  id: string;
  name: string;
  severity: 'Critical' | 'High' | 'Medium';
  attack: string;
  explanation: string;
  defense: string;
  code: string;
}

const vulns: Vuln[] = [
  {
    id: 'sql',
    name: 'SQL Injection',
    severity: 'Critical',
    attack: `'; DROP TABLE users; --`,
    explanation: 'Attacker embeds malicious SQL in a form field. Without parameterised queries, this can delete tables or exfiltrate every row of user data in one request.',
    defense: 'Prisma ORM generates parameterised queries automatically. It is physically impossible to inject SQL through Prisma — all values are escaped and bound at the driver level.',
    code: `// ❌ Unsafe raw SQL — injectable\ndb.query(\`SELECT * FROM users WHERE email = '\${email}'\`)\n\n// ✅ Prisma ORM — zero injection risk\nawait prisma.user.findUnique({ where: { email } })`,
  },
  {
    id: 'cors',
    name: 'CORS Exploitation',
    severity: 'High',
    attack: `fetch("https://api.lendswift.com/admin") from evil.com`,
    explanation: 'Without CORS restrictions, any website can make credentialed API requests to your backend on behalf of a logged-in user.',
    defense: 'Express CORS middleware enforces a strict allowlist. Only the production frontend domain is permitted. All other origins receive 403 before any business logic executes.',
    code: `// ✅ CORS whitelist enforcement\napp.use(cors({\n  origin: ['https://lendswift-loan-portal.vercel.app'],\n  methods: ['GET', 'POST', 'PUT'],\n  credentials: true\n}))`,
  },
  {
    id: 'db-access',
    name: 'Direct Database Access',
    severity: 'Critical',
    attack: 'Browser → PostgreSQL (skip the API entirely)',
    explanation: 'In monolithic architectures, connection strings can leak to the client. The frontend physically reaches the database.',
    defense: 'Three-tier architecture physically separates concerns. Browser → Express API → Prisma → PostgreSQL. The frontend has zero knowledge of DB credentials or schema.',
    code: `// Architecture enforces separation:\n// Browser → REST API → Express → Prisma → PostgreSQL\n//\n// The frontend CANNOT reach PostgreSQL directly.\n// DB credentials never leave the server environment.`,
  },
  {
    id: 'validation',
    name: 'Weak Input Validation',
    severity: 'High',
    attack: `POST /api/apply { annualIncome: -999999, name: "" }`,
    explanation: 'Client-side validation is trivially bypassed with curl or browser DevTools. Without server-side validation, garbage data enters the database.',
    defense: 'Zod schema validation runs on BOTH client (for UX) and server (for security). The exact same schema is shared between frontend and API — zero drift between the two.',
    code: `// ✅ Shared Zod schema — client + server\nconst loanSchema = z.object({\n  applicantName: z.string().min(2).max(100),\n  annualIncome: z.number().min(20000),\n  email: z.string().email(),\n  loanAmount: z.number().min(1000).max(500000),\n})`,
  },
  {
    id: 'unencrypted',
    name: 'Unencrypted Communication',
    severity: 'Medium',
    attack: 'Man-in-the-middle sniffing HTTP traffic for PII',
    explanation: 'HTTP traffic is plaintext. Anyone on the same network can intercept Social Security Numbers, income data, and personally identifiable information.',
    defense: 'HTTPS enforced at the infrastructure level. Vercel provides automatic SSL certificates. Supabase PostgreSQL connections use TLS encryption. HTTP requests redirect to HTTPS.',
    code: `// Infrastructure-level enforcement:\n// Frontend:  Vercel  → automatic HTTPS + HSTS\n// Backend:   Render  → HTTPS-only endpoints\n// Database:  Supabase → TLS encrypted connections\n// HTTP → HTTPS redirect enforced globally`,
  },
  {
    id: 'auth',
    name: 'Authentication Bypass',
    severity: 'High',
    attack: 'GET /admin/applications (no token)',
    explanation: 'Without route protection, sensitive admin endpoints are accessible to anyone who guesses the URL.',
    defense: 'Express middleware validates JWT tokens before any route handler executes. Admin routes additionally require role === "admin". Failed auth returns 401 — no information leakage.',
    code: `// ✅ Protected admin route\napp.get('/admin/applications',\n  authenticateToken,      // Verify JWT signature\n  requireRole('admin'),  // Check role claim\n  async (req, res) => {\n    const apps = await prisma.application.findMany();\n    res.json(apps);\n  }\n)`,
  },
];

const severityStyle: Record<string, { color: string; bg: string; border: string }> = {
  Critical: { color: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.25)' },
  High: { color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)' },
  Medium: { color: amber, bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
};

export function SecurityShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section style={{ padding: '48px 0' }}>
      <h3 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#fafaf9', margin: '0 0 8px' }}>Security Vulnerability Prevention</h3>
      <p style={{ color: muted, marginBottom: '32px', fontSize: '14px', lineHeight: 1.6 }}>
        6 vulnerability classes prevented natively through architecture and tooling choices. Click any card to see the attack vector and defense.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '12px' }}>
        {vulns.map((v, i) => {
          const isActive = activeId === v.id;
          const sev = severityStyle[v.severity];
          return (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setActiveId(isActive ? null : v.id)}
              style={{
                borderRadius: '12px',
                border: `1px solid ${isActive ? amber + '50' : border}`,
                background: isActive ? '#1c1c1c' : surface,
                cursor: 'pointer',
                transition: 'all 0.3s',
                gridColumn: isActive ? 'span 2' : 'span 1',
              }}
            >
              {/* Card header */}
              <div style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {isActive
                    ? <ShieldCheck size={20} color="#22c55e" />
                    : <ShieldAlert size={20} color="#ef4444" />}
                  <div>
                    <h4 style={{ color: '#fafaf9', fontWeight: 600, fontSize: '14px', margin: '0 0 6px' }}>{v.name}</h4>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: sev.color, background: sev.bg, border: `1px solid ${sev.border}`, borderRadius: '999px', padding: '2px 8px' }}>
                      {v.severity}
                    </span>
                  </div>
                </div>
                <ChevronRight size={14} color={muted} style={{ transform: isActive ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0, marginTop: '2px' }} />
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {/* Attack */}
                      <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '14px' }}>
                        <p style={{ fontSize: '10px', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 6px' }}>Attack Vector</p>
                        <code style={{ fontSize: '12px', color: '#fca5a5', fontFamily: 'monospace' }}>{v.attack}</code>
                      </div>
                      {/* Explanation */}
                      <div>
                        <p style={{ fontSize: '10px', fontWeight: 700, color: muted, textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 4px' }}>Vulnerability</p>
                        <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{v.explanation}</p>
                      </div>
                      {/* Defense */}
                      <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', padding: '14px' }}>
                        <p style={{ fontSize: '10px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 6px' }}>My Defense</p>
                        <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{v.defense}</p>
                      </div>
                      {/* Code */}
                      <div>
                        <p style={{ fontSize: '10px', fontWeight: 700, color: muted, textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px' }}>Implementation</p>
                        <pre style={{ background: '#111', border: `1px solid ${border}`, borderRadius: '8px', padding: '16px', fontSize: '12px', color: '#d6d3d1', fontFamily: 'monospace', overflowX: 'auto', whiteSpace: 'pre-wrap', margin: 0 }}>{v.code}</pre>
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
