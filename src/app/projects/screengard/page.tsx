'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Eye, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';

const amber = '#f59e0b';
const surface = '#141414';
const border = '#1f1f1f';
const muted = '#78716c';

export default function ScreenGuardPage() {
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
          Edge AI · Computer Vision · IoT Hardware
        </span>
        <h1 style={{
          fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontWeight: 700, color: '#fafaf9', margin: '12px 0 16px', letterSpacing: '-1.5px', lineHeight: 1,
        }}>
          ScreenGuard
        </h1>
        <p style={{ fontSize: '18px', color: '#a8a29e', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '24px' }}>
          An ergonomic eye-safety system designed to combat digital eye strain. It uses a custom-built ESP32 distance sensor node alongside a Python OpenCV DNN computer vision pipeline to track screen proximity, classify user age, and dynamically regulate Windows monitor brightness via DDC-CI.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://github.com/tannu005/screengard-iot-safety" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
            background: amber, color: '#0a0a0a', borderRadius: '999px', textDecoration: 'none',
            fontSize: '13px', fontWeight: 700, transition: 'background 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fbbf24')}
            onMouseLeave={e => (e.currentTarget.style.background = amber)}
          >
            <ExternalLink size={13} /> github.com/tannu005/screengard-iot-safety
          </a>
        </div>
      </motion.div>

      {/* Tech tags */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '28px 0 0' }}>
        {['ESP32', 'C++', 'Arduino IDE', 'Python', 'OpenCV', 'Caffe ResNet-10 SSD', 'WMI (Windows APIs)', 'DDC-CI Protocol', 'Ultrasonic Sensors', 'Hardware-Software Co-Design'].map(t => (
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
          { value: 'ResNet-10', label: 'SSD DNN Tracker' },
          { value: '95%+', label: 'Distance Precision' },
          { value: '<35ms', label: 'Inference Latency' },
          { value: 'WMI', label: 'Windows API Core' },
          { value: 'ESP32', label: 'Microcontroller Edge' },
          { value: 'DDC-CI', label: 'Monitor Regulation' },
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
          Computer vision syndrome affects up to 90% of office workers. While standard tools like f.lux shift color temperatures dynamically, they operate blindly - they have no concept of user positioning, distance, or age (children need different exposure thresholds than adults). We set out to build a cyber-physical system capable of real-time physical posture/distance evaluation and automatic environmental adjustment.
        </p>
      </motion.section>

      {/* Design Showcase */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Technical Architecture</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Cpu size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>ESP32 IoT Edge</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Wrote C++ firmware using Arduino IDE for an ESP32 node paired with an HC-SR04 ultrasonic sensor. Telemetry is polled and pushed over serial/WiFi to maintain a physical safety buffer of 50-60 centimeters.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <Eye size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Python OpenCV DNN</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              Runs a secondary computer vision validator. Utilizing OpenCV&apos;s deep neural net module (SSD ResNet-10 model), it tracks user coordinates from the webcam and classifies age groups using a pre-trained Caffe classifier.
            </p>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, padding: '24px', borderRadius: '16px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', color: amber, marginBottom: '16px' }}>
              <ShieldCheck size={20} />
            </div>
            <h3 style={{ color: '#fafaf9', fontSize: '15px', fontWeight: 600, margin: '0 0 10px' }}>Display Control Engine</h3>
            <p style={{ color: '#a8a29e', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
              A python background daemon maps sensory feeds to display APIs. If the user moves too close ({'<'}50cm) or leaves, the script uses Windows WMI and DDC-CI display drivers to automatically dim screen brightness to protect eyes.
            </p>
          </div>

        </div>
      </motion.section>

      {/* Engineering Timeline */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-space),sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fafaf9', marginBottom: '24px' }}>Engineering Timeline</h2>
        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: `1px solid ${border}` }}>
          {[
            { week: 'Week 1', title: 'ESP32 Distance Firmware', detail: 'Programmed the ESP32 chip using Arduino. Optimized signal-to-noise ratio in ultrasonic distance measurements using a simple rolling-average filter in C++.' },
            { week: 'Week 2', title: 'Python Computer Vision Pipeline', detail: 'Created the Python daemon loading Caffe ResNet-10 weights. Achieved low model inference times (under 35ms) by downscaling input camera frames while preserving facial detection bounds.' },
            { week: 'Week 3', title: 'WMI & DDC-CI Windows Integration', detail: 'Researched native Windows APIs. Wrote system binding libraries to write commands directly to connected display buses, regulating backlights without external drivers.' },
            { week: 'Week 4', title: 'Safety Logic Calibration & Testing', detail: 'Integrated the sensors and vision logic into a central loop. Tested reaction delays and edge states (e.g. user temporarily turning away vs completely leaving the desk).' },
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
            { title: 'Threading in OpenCV', desc: 'Webcam feed frames block Python\'s main GIL thread. Resolved this by separating frame captures and model inferences into independent subprocesses.' },
            { title: 'Monitor Control Standards', desc: 'Found that WMI adjustments only work on built-in laptop displays. Extended the tool to support external desktop monitors using native DDC-CI commands.' },
            { title: 'Sensor Co-Design', desc: 'Microcontrollers provide fast, low-power telemetry but lack visual verification. Combining hardware with computer vision created a highly robust validation loop.' },
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
