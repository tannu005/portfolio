'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Database, Network, 
  Map, Scan, Activity, Zap
} from 'lucide-react';

import { BerrywiseVisual } from './BerrywiseVisual';

const amber = '#f59e0b';
const darkSurface = 'rgba(20, 20, 20, 0.8)';
const border = 'rgba(245, 158, 11, 0.2)';

export function ProjectVisual({ projectId }: { projectId: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent', // Make transparent to see 3D background
    position: 'relative',
    overflow: 'hidden',
    perspective: 1200,
  };

  const innerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d' as const,
    rotateX,
    rotateY
  };

  // 100: BerrywiseVisual
  if (projectId === 100) {
    return (
      <div style={containerStyle}>
        <BerrywiseVisual />
      </div>
    );
  }

  // 1: LendSwift
  if (projectId === 1) {
    return (
      <div style={containerStyle} className="visual-lendswift" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        <motion.div 
          className="vault-core"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ width: '400px', height: '400px', borderRadius: '50%', border: `1px dashed ${amber}`, position: 'absolute', opacity: 0.2 }}
        />
        <motion.div 
          className="vault-core-inner"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: '280px', height: '280px', borderRadius: '50%', border: `1px solid ${amber}`, position: 'absolute', opacity: 0.15 }}
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ 
            background: darkSurface, border: `1px solid ${border}`, borderRadius: '24px',
            padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.1)',
            zIndex: 10, backdropFilter: 'blur(10px)',
            transform: 'translateZ(50px)'
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0px rgba(245,158,11,0)', '0 0 30px rgba(245,158,11,0.4)', '0 0 0px rgba(245,158,11,0)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ padding: '24px', background: 'rgba(245,158,11,0.1)', borderRadius: '50%', marginBottom: '20px' }}
          >
            <ShieldCheck size={48} color={amber} strokeWidth={1.5} />
          </motion.div>
          <div style={{ fontFamily: 'var(--font-space), monospace', fontSize: '14px', color: amber, letterSpacing: '2px', textAlign: 'center' }}>
            ZERO<br/>VULNERABILITIES
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
            <Database size={16} color="var(--muted)" />
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>PostgreSQL Secure Enclave</span>
          </div>
        </motion.div>
        </motion.div>
      </div>
    );
  }

  // 2: Stock Screener
  if (projectId === 2) {
    return (
      <div style={containerStyle} className="visual-screener" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        {/* Animated Grid Background */}
        <div style={{
          position: 'absolute', inset: 0, 
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        }} />
        
        <motion.div 
          style={{ width: '80%', height: '50%', position: 'relative', transform: 'translateZ(30px)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        >
          {/* Mock Candlesticks */}
          {[40, 60, 30, 80, 50, 70, 45, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
              style={{
                position: 'absolute', bottom: 0, left: `${i * 12 + 5}%`,
                width: '6%', background: i % 2 === 0 ? 'var(--green)' : 'var(--red)',
                opacity: 0.8, borderRadius: '4px 4px 0 0'
              }}
            >
              <div style={{ position: 'absolute', left: '50%', top: '-20%', height: '140%', width: '1px', background: 'rgba(255,255,255,0.2)', transform: 'translateX(-50%)' }} />
            </motion.div>
          ))}
          {/* Animated Trend Line */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
            <motion.path
              d="M 20,200 L 100,150 L 200,220 L 300,100 L 400,130 L 500,50"
              fill="none"
              stroke={amber}
              strokeWidth={3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              style={{ filter: 'drop-shadow(0 0 12px rgba(245,158,11,0.6))' }}
            />
          </svg>
        </motion.div>

        <div style={{ position: 'absolute', top: '10%', right: '10%', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '999px', border: `1px solid rgba(255,255,255,0.1)`, transform: 'translateZ(60px)' }}>
          <Activity size={14} color="var(--green)" />
          <span style={{ fontSize: '11px', color: 'var(--green)', fontFamily: 'var(--font-space), monospace', fontWeight: 600 }}>&lt;200ms LATENCY</span>
        </div>
        </motion.div>
      </div>
    );
  }

  // 3: Navix AI (Neural Router)
  if (projectId === 3) {
    return (
      <div style={containerStyle} className="visual-navix" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        <svg style={{ position: 'absolute', width: '400px', height: '400px', overflow: 'visible' }}>
          <motion.path d="M 200,200 L 50,50" stroke="var(--border)" strokeWidth={2} strokeDasharray="4 4" />
          <motion.path d="M 200,200 L 350,50" stroke="var(--border)" strokeWidth={2} strokeDasharray="4 4" />
          
          {/* Data Packets */}
          <motion.circle r={4} fill="var(--violet)"
            animate={{ cx: [200, 50], cy: [200, 50], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle r={4} fill={amber}
            animate={{ cx: [200, 350], cy: [200, 50], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </svg>

        {/* Nodes */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateZ(40px)', zIndex: 10 }}>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
            <Network size={56} color="var(--light)" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4))' }} />
          </motion.div>
        </div>

        {/* Node Labels */}
        <div style={{ position: 'absolute', top: '25%', left: '20%', transform: 'translate(-50%, -50%) translateZ(20px)' }}>
          <div style={{ background: 'var(--surface)', padding: '10px 20px', borderRadius: '12px', border: '1px solid var(--violet)', color: 'var(--violet)', fontFamily: 'var(--font-space), monospace', fontSize: '12px', fontWeight: 700, boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}>
            Gemini
          </div>
        </div>
        <div style={{ position: 'absolute', top: '25%', right: '20%', transform: 'translate(50%, -50%) translateZ(60px)' }}>
          <div style={{ background: 'var(--surface)', padding: '10px 20px', borderRadius: '12px', border: `1px solid ${amber}`, color: amber, fontFamily: 'var(--font-space), monospace', fontSize: '12px', fontWeight: 700, boxShadow: '0 0 20px rgba(245,158,11,0.2)' }}>
            Groq Llama-3
          </div>
        </div>
        </motion.div>
      </div>
    );
  }

  // 4: NewsAI
  if (projectId === 4) {
    return (
      <div style={containerStyle} className="visual-newsai" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        {/* Floating Vector Nodes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, (Math.sin(i * 12) * 50), 0],
              y: [0, (Math.cos(i * 12) * 50), 0],
            }}
            transition={{ duration: 10 + (Math.sin(i) * 0.5 + 0.5) * 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: `${((Math.sin(i * 1234) * 0.5 + 0.5) * 80 + 10).toFixed(2)}%`,
              left: `${((Math.cos(i * 4321) * 0.5 + 0.5) * 80 + 10).toFixed(2)}%`,
              width: `${((Math.sin(i * 321) * 0.5 + 0.5) * 6 + 2).toFixed(2)}px`,
              height: `${((Math.sin(i * 321) * 0.5 + 0.5) * 6 + 2).toFixed(2)}px`,
              background: i % 3 === 0 ? amber : 'rgba(255,255,255,0.3)',
              borderRadius: '50%',
              boxShadow: i % 3 === 0 ? '0 0 10px rgba(245,158,11,0.8)' : 'none',
              transform: `translateZ(${i * 5}px)`
            }}
          />
        ))}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 10, transform: 'translateZ(50px)' }}
        >
          <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Database size={48} color={amber} strokeWidth={1} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '-20px', fontFamily: 'var(--font-space), monospace', fontSize: '11px', color: amber, letterSpacing: '2px' }}>
            VECTOR EMBEDDING
          </div>
        </motion.div>
        </motion.div>
      </div>
    );
  }

  // 5: India Space Lab (GIS)
  if (projectId === 5) {
    return (
      <div style={containerStyle} className="visual-gis" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        {/* Topographic Lines Abstract */}
        <motion.div
          animate={{ rotateX: [60, 65, 60], rotateZ: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ width: '600px', height: '600px', position: 'absolute', perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', inset: `${i * 30}px`, border: `1px solid rgba(34, 197, 94, ${0.1 + (0.05 * i)})`, borderRadius: '40% 60% 50% 45%',
              transform: `translateZ(${i * 20}px)`,
            }} />
          ))}
        </motion.div>

        {/* Scanner Line */}
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: 'var(--green)', opacity: 0.5, boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)', transform: 'translateZ(10px)' }}
        />

        <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', background: 'rgba(20,20,20,0.6)', padding: '24px 32px', borderRadius: '16px', border: '1px solid rgba(34, 197, 94, 0.2)', backdropFilter: 'blur(8px)', transform: 'translateZ(40px)' }}>
          <Map size={40} color="var(--green)" strokeWidth={1.5} />
          <div style={{ fontFamily: 'var(--font-space), monospace', fontSize: '12px', color: 'var(--green)', letterSpacing: '1px' }}>
            GEOSPATIAL ANALYSIS
          </div>
        </div>
        </motion.div>
      </div>
    );
  }

  // 6: ScreenGuard
  if (projectId === 6) {
    return (
      <div style={containerStyle} className="visual-screenguard" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: `1px dashed ${amber}`, transform: 'translateZ(10px)' }}
        />
        <motion.div
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', border: `1px solid ${amber}`, transform: 'translateZ(-10px)' }}
        />

        <div style={{ position: 'relative', width: '160px', height: '160px', transform: 'translateZ(50px)' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <Scan size={160} color={amber} strokeWidth={1} style={{ opacity: 0.4 }} />
          </motion.div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={32} color={amber} />
          </div>
        </div>
        
        <div style={{ position: 'absolute', bottom: '15%', display: 'flex', gap: '24px', fontFamily: 'var(--font-space), monospace', fontSize: '11px', color: 'var(--muted)', transform: 'translateZ(80px)' }}>
          <div>DISTANCE: <span style={{ color: amber }}>65cm</span></div>
          <div>AGE CLASS: <span style={{ color: amber }}>ADULT</span></div>
        </div>
        </motion.div>
      </div>
    );
  }

  // 7: Let's Connect
  if (projectId === 7) {
    return (
      <div style={containerStyle} className="visual-connect" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={innerStyle}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '12px', width: '340px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', transform: 'translateZ(30px)' }}
        >
          {/* Terminal Header */}
          <div style={{ background: '#222', padding: '10px 16px', display: 'flex', gap: '8px', borderBottom: '1px solid #333' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--red)' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)' }} />
          </div>
          
          {/* Terminal Body */}
          <div style={{ padding: '24px', fontFamily: 'var(--font-space), monospace', fontSize: '13px', color: 'var(--light)', lineHeight: 1.6 }}>
            <div><span style={{ color: 'var(--green)' }}>visitor@web</span><span style={{ color: 'var(--muted)' }}>:</span><span style={{ color: '#3b82f6' }}>~</span>$ ./contact.sh</div>
            <div style={{ marginTop: '12px' }}>Executing connection sequence...</div>
            <div style={{ marginTop: '8px', color: 'var(--muted)' }}>{'>'} Status: Looking for roles</div>
            <div style={{ marginTop: '8px' }}>
              <span style={{ color: amber }}>$</span> <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>_</motion.span>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    );
  }

  // Fallback
  return <div style={containerStyle}></div>;
}
