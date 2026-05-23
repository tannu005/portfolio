'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ProjectVisual } from '@/components/Visuals/ProjectVisual';
import { ThreeBackground } from '@/components/Visuals/ThreeBackground';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SlideData {
  id: number;
  subtitle: string;
  title: [string, string];
  description: string;
  tags: string[];
  href: string;
  liveHref?: string;
  githubHref?: string;
  liveLabel?: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    subtitle: 'FinTech · Full-Stack · Security',
    title: ['Lend', 'Swift'],
    description:
      'Production-grade B2C lending platform. Three-tier architecture (React + Express + PostgreSQL) preventing 8 vulnerability classes. 50+ form fields with <16ms render. Designed for 10K concurrent users.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Zod', 'React Hook Form', 'Vercel'],
    href: '/projects/lendswift',
    liveHref: 'https://lendswift-loan-portal.vercel.app',
    githubHref: 'https://github.com/tannu005/lendswift',
    liveLabel: 'lendswift-loan-portal.vercel.app',
  },
  {
    id: 2,
    subtitle: 'Real-Time · Performance · 4 APIs',
    title: ['Stock', 'Screen'],
    description:
      'Production-grade real-time stock screener. 5,000 records filtered in <200ms via TanStack Virtual. Custom Canvas candlestick chart with 5 technical indicators. 4 API providers unified behind a single WebSocket layer at 60fps.',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Zustand', 'TanStack', 'Three.js', 'Canvas API', 'Framer Motion'],
    href: '/projects/stock-screener',
    liveHref: 'https://stock-screener-5tiy.vercel.app/',
    githubHref: 'https://github.com/tannu005',
    liveLabel: 'stock-screener-5tiy.vercel.app',
  },
  {
    id: 3,
    subtitle: 'AI Platform · CI/CD · Vercel',
    title: ['Navix', 'AI'],
    description:
      'Architected a 5-screen AI career platform. Gemini & Groq APIs routed independently — Gemini for CV generation, Groq for real-time chat. Reusable component library with 40% code reuse across all screens. Zero-touch CI/CD via GitHub Actions → Vercel.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Groq API', 'Vercel', 'CI/CD'],
    href: '/projects/navix',
    liveHref: 'https://navix-v2.vercel.app/',
    githubHref: 'https://github.com/tannu005',
    liveLabel: 'navix-v2.vercel.app',
  },
  {
    id: 4,
    subtitle: 'AI Engine · Vector Search · 3D Graph',
    title: ['News', 'AI'],
    description:
      'Full-stack AI news search and vector parsing platform. React/Vite/Three.js frontend, Express backend, LangChain, Google Gemini API, and Inngest background event processor. Visualizes interactive document nodes in a responsive 3D force-directed canvas graph.',
    tags: ['React', 'Three.js (R3F)', 'Node.js', 'Express', 'LangChain', 'Gemini API', 'Inngest', 'Vector Embedding'],
    href: '/projects/newsai',
    liveHref: 'https://newsai-two.vercel.app/',
    githubHref: 'https://github.com/tannu005/newsai',
    liveLabel: 'newsai-two.vercel.app',
  },
  {
    id: 5,
    subtitle: 'Internship · GIS · Data Science',
    title: ['India', 'Space Lab'],
    description:
      'Geospatial Data Analyst Intern (Feb–Mar 2026). Built automated GIS pipelines in Python processing 200+ sq km of satellite imagery across 5+ multispectral datasets. Streamlit dashboard for non-technical stakeholders. Parameterised Jupyter notebooks reducing setup from hours to a config change.',
    tags: ['Python', 'NumPy', 'GeoPandas', 'GDAL', 'Streamlit', 'Jupyter', 'GIS', 'Remote Sensing'],
    href: '/experience',
    liveHref: 'https://remote-sensing-gis-ftk4znsyyftydvmnng7iwh.streamlit.app/',
    liveLabel: 'streamlit.app',
  },
  {
    id: 6,
    subtitle: 'Edge AI · Computer Vision · IoT Hardware',
    title: ['Screen', 'Guard'],
    description:
      'Ergonomic vision-safety cyber-physical product. Integrates ESP32 hardware and C++ firmware with a Python OpenCV/Caffe Age Net DNN face detector. Automatically calculates user-to-screen distance and age, and dynamically controls Windows display brightness via WMI/DDC-CI.',
    tags: ['ESP32', 'Arduino IDE', 'C++', 'Python', 'OpenCV', 'Deep Learning (DNN)', 'WMI / DDC-CI', 'Ergonomics'],
    href: '/projects/screengard',
    liveHref: 'https://github.com/tannu005/screengard-iot-safety',
    githubHref: 'https://github.com/tannu005/screengard-iot-safety',
    liveLabel: 'View on GitHub',
  },
  {
    id: 7,
    subtitle: 'Full-Stack & Product Engineer',
    title: ["Let's", 'Connect'],
    description:
      'Looking for an engineer who ships production systems, thinks in trade-offs, and communicates clearly? I\'m actively seeking internship and full-time roles. Email: ytannu1410@gmail.com · GitHub: tannu005 · LinkedIn: tannu-yadav',
    tags: ['Open to Internships', 'Full-Time Roles', 'Remote OK', 'Bhiwadi, Rajasthan'],
    href: 'mailto:ytannu1410@gmail.com',
    liveHref: 'mailto:ytannu1410@gmail.com',
    githubHref: 'https://github.com/tannu005',
    liveLabel: 'Email Me',
  },
];

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const slideIdRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      gsap.set(stage, { autoAlpha: 1 });

      // Header reveal
      const headerTl = gsap.timeline({ delay: 0.4 });
      headerTl
        .from('.gsap-logo', { y: -40, opacity: 0, duration: 1.8, ease: 'power4' })
        .from('.gsap-nav a', { y: -20, opacity: 0, duration: 0.8, ease: 'power4', stagger: 0.08 }, 0.6);

      // Intro reveal
      const introTl = gsap.timeline({ delay: 0.8 });
      introTl
        .from('.intro__title', { y: 200, opacity: 0, ease: 'power4', duration: 2 })
        .from('.intro__badge', { opacity: 0, y: -16, duration: 1, ease: 'power3' }, 0.4)
        .from('.intro__txt', { x: -60, opacity: 0, ease: 'power4', duration: 2 }, 0.5)
        .from('.intro__metrics .intro__metric', { y: 30, opacity: 0, ease: 'power4', duration: 1.2, stagger: 0.08 }, 0.8)
        .from('.intro__cta', { y: 20, opacity: 0, duration: 1, ease: 'power3' }, 1.0)
        .from('.intro__img--1', { y: 60, opacity: 0, ease: 'power2', duration: 3 }, 0.6)
        .from('.intro__img--2', { y: -60, opacity: 0, ease: 'power2', duration: 3 }, 0.7);

      // Intro scroll-out parallax
      gsap.timeline({
        scrollTrigger: {
          trigger: '.intro',
          scrub: 1,
          start: 'top top',
          end: 'bottom top',
        },
      })
        .to('.intro__title', { x: 320, ease: 'power4.in', duration: 3 })
        .to('.intro__txt', { y: 100, ease: 'power4.in', duration: 3 }, 0)
        .to('.intro__img--1', { y: 100, ease: 'none', duration: 3 }, 0)
        .to('.intro__img--2', { y: -60, ease: 'none', duration: 3 }, 0);

      // Slide entrance animations
      document.querySelectorAll('.slide').forEach((slide) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: slide, start: '40% 50%' },
        });
        tl.from(slide.querySelectorAll('.line__inner'), {
          y: 200, duration: 2, ease: 'power4', stagger: 0.1,
        })
          .from(slide.querySelectorAll('.col__content-subtitle'), {
            y: 16, opacity: 0, duration: 1, ease: 'power4',
          }, 0)
          .from(slide.querySelectorAll('.col__content-txt'), {
            x: 100, y: 50, opacity: 0, duration: 2, ease: 'power4',
          }, 0.4)
          .from(slide.querySelectorAll('.slide-link'), {
            x: -100, y: 100, opacity: 0, duration: 2, ease: 'power4',
          }, 0.3)
          .from(slide.querySelectorAll('.slide-tags'), {
            y: 30, opacity: 0, duration: 1.5, ease: 'power4',
          }, 0.6)
          .from(slide.querySelectorAll('.slide-links-row'), {
            y: 20, opacity: 0, duration: 1.2, ease: 'power4',
          }, 0.8);
      });

      // Image & Visual parallax
      document.querySelectorAll('.slide').forEach((slide) => {
        gsap.fromTo(
          slide.querySelectorAll('.col__image-wrap'),
          { y: '-30vh' },
          {
            y: '30vh',
            ease: 'none',
            scrollTrigger: {
              trigger: slide,
              scrub: true,
              start: 'top bottom',
            },
          }
        );
        gsap.fromTo(
          slide.querySelectorAll('.col__visual-wrap'),
          { y: '-30vh' },
          {
            y: '30vh',
            ease: 'none',
            scrollTrigger: {
              trigger: slide,
              scrub: true,
              start: 'top bottom',
            },
          }
        );
      });

      // Footer
      gsap.from('.gsap-footer__link', {
        scrollTrigger: {
          trigger: '.gsap-footer',
          scrub: 2,
          start: '50% 100%',
          end: '0% 0%',
        },
        y: '20vh',
        ease: 'sine',
      });

      // Active nav highlighting
      document.querySelectorAll('.slide').forEach((slide) => {
        const slideId = slide.id.replace('slide-', '');
        const navLink = document.querySelector(`.gsap-nav a[data-slide="${slideId}"]`);
        
        ScrollTrigger.create({
          trigger: slide,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            if (navLink) {
              document.querySelectorAll('.gsap-nav a').forEach(a => a.classList.remove('nav-active'));
              navLink.classList.add('nav-active');
            }
          },
          onEnterBack: () => {
            if (navLink) {
              document.querySelectorAll('.gsap-nav a').forEach(a => a.classList.remove('nav-active'));
              navLink.classList.add('nav-active');
            }
          },
          onLeave: () => {
             if(navLink) navLink.classList.remove('nav-active');
          },
          onLeaveBack: () => {
             if(navLink) navLink.classList.remove('nav-active');
          }
        });
      });
    }, stage);

    // Scroll-link interactions
    document.querySelectorAll('.slide__scroll-link').forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        slideIdRef.current = index + 1;
        const targetId = link.getAttribute('data-target');
        if (targetId) {
          gsap.to(window, { duration: 2, scrollTo: { y: targetId }, ease: 'power2.inOut' });
        }
      });
      link.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = link.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        gsap.to(link, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
      });
    });

    // Slide link arrow hover
    document.querySelectorAll('.slide-link').forEach((sl) => {
      const line = sl.querySelector('.slide-link__line');
      sl.addEventListener('mouseover', () =>
        gsap.to(line, { x: 20, scaleX: 0.3, transformOrigin: 'right center', duration: 0.8, ease: 'power4' })
      );
      sl.addEventListener('mouseout', () =>
        gsap.to(line, { x: 0, scaleX: 1, transformOrigin: 'right center', duration: 0.8, ease: 'power4' })
      );
    });

    // Footer top
    const topLink = document.querySelector('.gsap-footer__link-top');
    if (topLink) {
      topLink.addEventListener('click', (e) => {
        e.preventDefault();
        slideIdRef.current = 0;
        gsap.to(window, { duration: 2, scrollTo: { y: '#slide-0' }, ease: 'power2.inOut' });
      });
      topLink.addEventListener('mouseover', () =>
        gsap.to('.gsap-footer__link-top-line', { scaleY: 3, transformOrigin: 'bottom center', duration: 0.6, ease: 'power4' })
      );
      topLink.addEventListener('mouseout', () =>
        gsap.to('.gsap-footer__link-top-line', { scaleY: 1, transformOrigin: 'bottom center', duration: 0.6, ease: 'power4' })
      );
    }

    // Keyboard nav
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (slideIdRef.current < slides.length) {
          slideIdRef.current++;
          gsap.to(window, { duration: 2, scrollTo: { y: '#slide-' + slideIdRef.current }, ease: 'power2.inOut' });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        slideIdRef.current = Math.max(0, slideIdRef.current - 1);
        gsap.to(window, { duration: 2, scrollTo: { y: '#slide-' + slideIdRef.current }, ease: 'power2.inOut' });
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      ctx.revert();
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <>
      {/* GSAP Fixed Header */}
      <header className="gsap-header">
        <Link href="/" className="gsap-logo">Tannu Yadav</Link>
        <nav className="gsap-nav">
          <Link href="/projects/lendswift" data-slide="1">LendSwift</Link>
          <Link href="/projects/stock-screener" data-slide="2">Screener</Link>
          <Link href="/projects/navix" data-slide="3">Navix</Link>
          <Link href="/projects/newsai" data-slide="4">NewsAI</Link>
          <Link href="/projects/screengard" data-slide="6">ScreenGuard</Link>
          <Link href="/experience" data-slide="5">Experience</Link>
          <Link href="/about">About</Link>
          <a href="https://github.com/tannu005" target="_blank" rel="noopener noreferrer">GitHub↗</a>
        </nav>
      </header>

      <div className="stage" ref={stageRef}>

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="intro slide--0" id="slide-0">
          <div className="intro__content">
            {/* Badge */}
            <p className="intro__badge" style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}>
              Product Engineer &nbsp;·&nbsp; Full-Stack Developer
            </p>

            <h1 className="intro__title">
              Product<br />Engineer
            </h1>

            <p className="intro__txt">
              <strong>Full-Stack Product Engineer.</strong> I ship production systems that handle real-world constraints — not tutorials. Six deployed projects. Eight vulnerability classes prevented. Five thousand records filtered in under 200 milliseconds.
            </p>

            <div className="intro__metrics">
              <span className="intro__metric">&lt;200ms Filtering</span>
              <span className="intro__metric">30× Faster Forms</span>
              <span className="intro__metric">10K Concurrent Users</span>
              <span className="intro__metric">0 SQL Injections</span>
              <span className="intro__metric">6 Shipped Systems</span>
            </div>

            {/* CTA row */}
            <div className="intro__cta" style={{ display: 'flex', gap: '16px', marginTop: '24px', marginRight: '1.5vw' }}>
              <a href="https://github.com/tannu005" target="_blank" rel="noopener noreferrer" style={{
                fontSize: '12px', color: 'var(--muted)', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                borderBottom: '1px solid var(--accent-border)', paddingBottom: '2px',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >GitHub↗</a>
              <a href="https://linkedin.com/in/tannu-yadav" target="_blank" rel="noopener noreferrer" style={{
                fontSize: '12px', color: 'var(--muted)', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                borderBottom: '1px solid var(--accent-border)', paddingBottom: '2px',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >LinkedIn↗</a>
              <a href="mailto:ytannu1410@gmail.com" style={{
                fontSize: '12px', color: 'var(--muted)', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                borderBottom: '1px solid var(--accent-border)', paddingBottom: '2px',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Email↗</a>
            </div>
          </div>

          {/* Parallax images */}
          {/* eslint-disable @next/next/no-img-element */}
          <div className="intro__images">
            <img
              className="intro__img intro__img--1"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Code editor"
            />
            <img
              className="intro__img intro__img--2"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Developer laptop"
            />
          </div>
        </section>

        {/* ── PROJECT / EXPERIENCE SLIDES ───────────────────── */}
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            className={`slide slide--${slide.id}`}
            id={`slide-${slide.id}`}
          >
            <ThreeBackground projectId={slide.id} />
            <div className="col col--1">
              <div className={`col__content col__content--${slide.id}`}>

                {/* Subtitle */}
                <p className="col__content-subtitle">{slide.subtitle}</p>

                {/* Giant title */}
                <h2 className="col__content-title">
                  <span className="line"><span className="line__inner">{slide.title[0]}</span></span>
                  <span className="line"><span className="line__inner">{slide.title[1]}</span></span>
                </h2>

                <div className="col__content-wrap">
                  <p className="col__content-txt">{slide.description}</p>
                  <Link href={slide.href} className="slide-link" aria-label={`View ${slide.title.join(' ')} details`}>
                    <div className="slide-link__circ"></div>
                    <div className="slide-link__line"></div>
                  </Link>
                </div>

                {/* Tags */}
                <div className="slide-tags">
                  {slide.tags.map(tag => (
                    <span key={tag} className="slide-tag">{tag}</span>
                  ))}
                </div>

                {/* Live / GitHub hyperlinks */}
                <div className="slide-links-row" style={{
                  display: 'flex', gap: '20px', marginTop: '16px',
                  alignItems: 'center',
                }}>
                  {slide.liveHref && (
                    <a
                      href={slide.liveHref}
                      target={slide.liveHref.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '11px', color: 'var(--accent)', textDecoration: 'none',
                        textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600,
                        display: 'flex', alignItems: 'center', gap: '6px',
                        transition: 'opacity 0.3s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: 'var(--green)', display: 'inline-block',
                      }}></span>
                      {slide.liveLabel ?? 'Live Demo'}
                    </a>
                  )}
                  {slide.githubHref && (
                    <a
                      href={slide.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '11px', color: 'var(--muted)', textDecoration: 'none',
                        textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500,
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                      GitHub↗
                    </a>
                  )}
                  <Link
                    href={slide.href}
                    style={{
                      fontSize: '11px', color: 'var(--muted)', textDecoration: 'none',
                      textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    Case Study→
                  </Link>
                </div>
              </div>

            </div>

            {/* Right column — interactive 3D visual */}
            <div className="col col--2">
              <div className="col__visual-wrap" style={{ position: 'absolute', left: 0, top: '-30vh', width: '100%', height: '160vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectVisual projectId={slide.id} />
              </div>
            </div>

            {/* Scroll-to-next block */}
            {index < slides.length - 1 && (
              <button
                data-target={`#slide-${slides[index + 1].id}`}
                className="slide__scroll-link"
                aria-label="Next slide"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <div className="scroll-box">
                  <ArrowDown size={18} color="var(--accent)" />
                </div>
              </button>
            )}
          </section>
        ))}

        {/* ── FOOTER ────────────────────────────────────────── */}
        <footer className="gsap-footer" id="slide-8">
          <a
            className="gsap-footer__link"
            href="mailto:ytannu1410@gmail.com"
          >
            Hire Me
          </a>

          <div className="gsap-footer__socials">
            <a href="mailto:ytannu1410@gmail.com">ytannu1410@gmail.com</a>
            <a href="https://github.com/tannu005" target="_blank" rel="noopener noreferrer">github/tannu005</a>
            <a href="https://linkedin.com/in/tannu-yadav" target="_blank" rel="noopener noreferrer">linkedin/tannu-yadav</a>
          </div>

          <a className="gsap-footer__link-top" href="#slide-0">
            Top
            <span className="gsap-footer__link-top-line"></span>
          </a>
          <p className="gsap-footer__copyright">
            © 2026 Tannu Yadav · 9928598184
          </p>
        </footer>
      </div>
    </>
  );
}
