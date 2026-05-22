'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Back */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <motion.span
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#a8a29e', fontSize: '13px',
              fontWeight: 500, letterSpacing: '0.5px',
            }}
            whileHover={{ color: '#f59e0b' }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft size={14} />
            Tannu Yadav
          </motion.span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {[
            { label: 'LendSwift', href: '/projects/lendswift' },
            { label: 'Screener', href: '/projects/stock-screener' },
            { label: 'Navix', href: '/projects/navix' },
            { label: 'NewsAI', href: '/projects/newsai' },
            { label: 'ScreenGuard', href: '/projects/screengard' },
            { label: 'Experience', href: '/experience' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{ textDecoration: 'none' }}>
              <motion.span
                style={{
                  fontSize: '12px', color: '#78716c',
                  textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500,
                  display: 'inline-block',
                }}
                whileHover={{ color: '#f59e0b' }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.span>
            </Link>
          ))}
          <a href="mailto:ytannu1410@gmail.com" style={{
            fontSize: '12px', color: '#0a0a0a', background: '#f59e0b',
            padding: '6px 16px', borderRadius: '999px', textDecoration: 'none',
            fontWeight: 600, letterSpacing: '0.5px', transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = '#f59e0b')}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
