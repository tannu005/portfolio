'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GitBranch, Terminal, ShieldAlert, CheckCircle2 } from 'lucide-react';

export function DeployGuardVisual() {
  const brandBlue = '#3b82f6';
  const brandRed = '#ef4444';
  const brandGreen = '#22c55e';

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
      
      {/* Background Pipeline Grids */}
      <div style={{
        position: 'absolute', inset: 0, 
        backgroundSize: '50px 50px',
        backgroundImage: 'linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px)',
        transform: 'rotateX(60deg) translateY(-100px) translateZ(-200px)',
        transformStyle: 'preserve-3d',
      }}>
        {/* Animated Scanning Grid */}
        <motion.div
          animate={{ y: ['0%', '100%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ width: '100%', height: '2px', background: brandBlue, boxShadow: `0 0 20px ${brandBlue}` }}
        />
      </div>

      <div style={{ position: 'relative', transform: 'translateZ(20px)', width: '600px', height: '400px' }}>
        
        {/* Central Shield / Engine */}
        <motion.div 
          style={{ position: 'absolute', left: '50%', top: '50%', x: '-50%', y: '-50%', transformStyle: 'preserve-3d' }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Rotating Rings */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', x: '-50%', y: '-50%', width: '200px', height: '200px', borderRadius: '50%', border: `1px dashed ${brandBlue}`, opacity: 0.3 }} />
          <motion.div 
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', left: '50%', top: '50%', x: '-50%', y: '-50%', width: '150px', height: '150px', borderRadius: '50%', border: `2px solid ${brandBlue}`, opacity: 0.2 }} 
          />
          <div style={{ background: 'rgba(20,20,20,0.8)', border: `1px solid ${brandBlue}`, padding: '24px', borderRadius: '50%', boxShadow: `0 0 30px rgba(59,130,246,0.4)`, backdropFilter: 'blur(8px)', transform: 'translateZ(30px)' }}>
            <Shield size={48} color={brandBlue} strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Incoming Commits / AST Nodes */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: '10%', top: '40%', background: 'rgba(20,20,20,0.9)', padding: '12px 16px', borderRadius: '8px', border: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-space), monospace', fontSize: '11px', color: 'var(--muted)', transform: 'translateZ(40px)' }}
        >
          <GitBranch size={16} color={brandBlue} />
          <span>feat/deploy-rules</span>
        </motion.div>

        <motion.div
          initial={{ x: -100, y: -80, opacity: 0 }}
          animate={{ x: 50, y: -30, opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 1 }}
          style={{ position: 'absolute', left: '10%', top: '40%', background: 'rgba(20,20,20,0.9)', padding: '12px 16px', borderRadius: '8px', border: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-space), monospace', fontSize: '11px', color: 'var(--muted)', transform: 'translateZ(20px)' }}
        >
          <Terminal size={16} color={brandBlue} />
          <span>package.xml</span>
        </motion.div>

        {/* Outgoing Results */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 1, 0], x: 50, y: -50 }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          style={{ position: 'absolute', right: '30%', top: '20%', background: 'rgba(239, 68, 68, 0.1)', padding: '8px 12px', borderRadius: '8px', border: `1px solid ${brandRed}`, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-space), monospace', fontSize: '10px', color: brandRed, transform: 'translateZ(50px)' }}
        >
          <ShieldAlert size={14} />
          Destructive Changes Detected
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 1, 0], x: 80, y: 30 }}
          transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
          style={{ position: 'absolute', right: '25%', top: '55%', background: 'rgba(34, 197, 94, 0.1)', padding: '8px 12px', borderRadius: '8px', border: `1px solid ${brandGreen}`, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-space), monospace', fontSize: '10px', color: brandGreen, transform: 'translateZ(60px)' }}
        >
          <CheckCircle2 size={14} />
          AST Integrity Passed
        </motion.div>

      </div>
    </div>
  );
}
