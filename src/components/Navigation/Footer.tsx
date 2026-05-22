'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1f1f1f',
      marginTop: '80px',
      padding: '48px 32px',
      background: '#0a0a0a',
    }}>
      <div style={{
        maxWidth: '80rem', margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
      }}>
        <p style={{ color: '#525252', fontSize: '13px' }}>
          © 2026 Tannu Yadav &nbsp;·&nbsp; VIT-AP CSE 2027
        </p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'ytannu1410@gmail.com', href: 'mailto:ytannu1410@gmail.com' },
            { label: 'github/tannu005', href: 'https://github.com/tannu005' },
            { label: 'linkedin/tannu-yadav', href: 'https://linkedin.com/in/tannu-yadav' },
          ].map(({ label, href }) => (
            <motion.a key={href} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
              style={{
                fontSize: '12px', color: '#78716c', textDecoration: 'none',
                letterSpacing: '0.5px', display: 'inline-block',
              }}
              whileHover={{ color: '#f59e0b' }}
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
