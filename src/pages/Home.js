import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { animate, utils } from 'animejs';
import { useInView } from 'react-intersection-observer';
import { personalInfo, skillGroups, CV_URL, PHOTO_URL } from '../data/resumeData';
import PageWrapper from '../components/PageWrapper';

/* ─── Animation Variants ────────────────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.2 },
  },
};

const line = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Tech Ticker ───────────────────────────────────────────── */
const allTech = skillGroups.flatMap((g) => g.skills);

function TechTicker() {
  const doubled = [...allTech, ...allTech];
  return (
    <div className="overflow-hidden border-y border-[#1E1E1E] bg-[#080808]" aria-hidden="true">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap py-3"
      >
        {doubled.map((tech, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-5 font-mono text-[11px] text-[#F5C518]/60">
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ background: 'rgba(245,197,24,0.3)' }}
            />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Animated Stat — anime.js v4 count-up ──────────────────── */
function Stat({ value, label, index }) {
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix       = value.replace(/[0-9]/g, '');

  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const elRef         = useRef(null);
  const ranRef        = useRef(false);

  useEffect(() => {
    if (!inView || ranRef.current || !elRef.current) return;
    ranRef.current = true;

    const obj = { val: 0 };
    animate(obj, {
      val:      numericValue,
      duration: 1400 + index * 120,
      ease:     'outExpo',
      onUpdate: () => {
        if (elRef.current) {
          elRef.current.textContent = `${utils.round(obj.val, 0)}${suffix}`;
        }
      },
    });
  }, [inView, numericValue, suffix, index]);

  return (
    <div ref={ref} className="flex items-baseline gap-2">
      <span ref={elRef} className="font-display text-2xl font-bold text-[#F5C518]">
        0{suffix}
      </span>
      <span className="font-mono text-xs text-[#555555] uppercase tracking-widest">{label}</span>
    </div>
  );
}

/* ─── CTA Button ────────────────────────────────────────────── */
function CTAButton({ to, href, children, primary = false, download = false }) {
  const cls = primary
    ? 'inline-flex items-center gap-2 px-6 py-3 bg-[#F5C518] text-[#080808] font-mono font-bold text-sm hover:bg-[#F9E07A] transition-all duration-200 active:scale-95'
    : 'inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-[#888888] font-mono text-sm hover:border-[#F5C518]/50 hover:text-[#F5C518] transition-all duration-200';

  if (href) return <a href={href} download={download} className={cls}>{children}</a>;
  return <Link to={to} className={cls}>{children}</Link>;
}

/* ─── Photo Frame ────────────────────────────────────────────── */
function PhotoFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center"
    >
      {/* Ambient gold glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,197,24,0.14) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="relative w-[280px] h-[340px] sm:w-[300px] sm:h-[370px]">
        {/* Thin gold corner brackets */}
        <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-[#F5C518]/70 z-20" />
        <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-[#F5C518]/70 z-20" />
        <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l border-[#F5C518]/70 z-20" />
        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-[#F5C518]/70 z-20" />

        {/* Outer frame */}
        <div className="absolute inset-0 border border-[#1E1E1E]" />

        {/* Image: desaturated + dimmed + gold tint overlay */}
        <div className="absolute inset-[6px] overflow-hidden scan-overlay bg-[#111111]">
          <img
            src={PHOTO_URL}
            alt="Dieumerci Kazadi"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'brightness(0.85) contrast(1.08) saturate(0.7)' }}
            loading="eager"
          />
          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent pointer-events-none" />
          {/* Gold tint — harmonises photo with yellow accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(245,197,24,0.08)', mixBlendMode: 'screen' }}
          />
        </div>

        {/* Side pulse dots */}
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.55, 0.15] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.28 }}
              className="w-1 h-1 rounded-full bg-[#F5C518]"
            />
          ))}
        </div>

        {/* Availability badge */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#080808] border border-[#1E1E1E] px-3 py-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-[#888888] tracking-widest uppercase">Available for work</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Three.js WebGL Hero Background ────────────────────────── */
function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let w = el.clientWidth;
    let h = el.clientHeight;
    let mouseX = 0;
    let mouseY = 0;
    let raf;

    // Renderer — alpha:true so CSS background shows through
    const renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 1000);
    camera.position.z = 9;

    // 1. Wireframe icosahedron — structural elegance
    const icoGeo = new THREE.IcosahedronGeometry(3.2, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0xF5C518, wireframe: true, transparent: true, opacity: 0.07 });
    const ico    = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(3, 0, -1);
    scene.add(ico);

    // 2. Rotating torus ring
    const torusGeo = new THREE.TorusGeometry(1.4, 0.008, 16, 120);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xF5C518, transparent: true, opacity: 0.2 });
    const torus    = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    torus.position.set(3.2, 0.4, 0);
    scene.add(torus);

    // 3. Outer orbit ring
    const ring2Geo = new THREE.TorusGeometry(4.4, 0.005, 8, 200);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xF5C518, transparent: true, opacity: 0.05 });
    const ring2    = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 5;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // 4. Scattered particles
    const count     = 280;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const ptMat   = new THREE.PointsMaterial({ color: 0xF5C518, size: 0.055, transparent: true, opacity: 0.4, sizeAttenuation: true });
    const pts     = new THREE.Points(ptGeo, ptMat);
    scene.add(pts);

    const clock = new THREE.Clock();

    const draw = () => {
      const t       = clock.getElapsedTime();
      ico.rotation.x    = t * 0.09;
      ico.rotation.y    = t * 0.13;
      torus.rotation.z  = t * 0.18;
      ring2.rotation.z  = -t * 0.06;
      pts.rotation.y    = t * 0.018;
      pts.rotation.x    = t * 0.008;

      // Smooth mouse parallax
      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onMouse  = (e) => { mouseX = (e.clientX / w - 0.5) * 2; mouseY = -(e.clientY / h - 0.5) * 2; };
    const onResize = () => {
      w = el.clientWidth; h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize',    onResize);

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
      [icoGeo, icoMat, torusGeo, torusMat, ring2Geo, ring2Mat, ptGeo, ptMat]
        .forEach((x) => x.dispose());
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize',    onResize);
    };
  }, []);

  return (
    <canvas
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ─── Home Page ─────────────────────────────────────────────── */
export default function Home() {
  return (
    <PageWrapper className="overflow-hidden">

      {/* ── Hero Section ── */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center bg-[#080808]">

        {/* Three.js WebGL full-screen background */}
        <ThreeBackground />

        {/* Radial top gold glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-center">

            {/* ── Text ── */}
            <motion.div
              className="lg:col-span-3 order-2 lg:order-1"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={line} className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-[#F5C518]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5C518]">Hello, I'm</span>
              </motion.div>

              <motion.div variants={line} className="mb-5">
                <h1 className="font-display leading-[0.93] font-extrabold">
                  <span className="block text-[52px] sm:text-[68px] lg:text-[76px] xl:text-[88px] text-white">
                    Dieumerci
                  </span>
                  <span className="block text-[52px] sm:text-[68px] lg:text-[76px] xl:text-[88px] text-gradient-gold">
                    Kazadi
                  </span>
                </h1>
              </motion.div>

              <motion.div variants={line} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[#888888] text-lg">
                  <span className="text-[#F5C518]/50">{'// '}</span>
                  Software Engineer
                </span>
              </motion.div>

              <motion.p
                variants={line}
                className="font-body text-[#888888] text-[15px] sm:text-base leading-relaxed max-w-xl mb-8"
              >
                Building{' '}
                <span className="text-[#CCCCCC]">secure, scalable systems</span> across fintech,
                civic tech, and enterprise. 6+ years shipping production software with{' '}
                <span className="text-[#CCCCCC]">Ruby, Python, and JavaScript</span> ecosystems.
              </motion.p>

              {/* Stats with anime.js count-up */}
              <motion.div
                variants={line}
                className="flex flex-wrap gap-6 sm:gap-10 mb-10 pb-8 border-b border-[#1E1E1E]/60"
              >
                {personalInfo.stats.map((s, i) => (
                  <Stat key={s.label} value={s.value} label={s.label} index={i} />
                ))}
              </motion.div>

              <motion.div variants={line} className="flex flex-wrap gap-3">
                <CTAButton to="/projects" primary>
                  View Projects
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CTAButton>
                <CTAButton to="/experience">Experience</CTAButton>
                <CTAButton href={CV_URL} download="kazadi_dieumerci_resume_2026.pdf">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download CV
                </CTAButton>
                <CTAButton to="/contact">Contact Me</CTAButton>
              </motion.div>
            </motion.div>

            {/* ── Photo ── */}
            <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <PhotoFrame />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          aria-hidden="true"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#2A2A2A]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-9 bg-gradient-to-b from-[#F5C518]/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Tech Ticker ── */}
      <TechTicker />

      {/* ── What I Do ── */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-3">What I Do</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white max-w-xl">
            Engineering depth across the full stack.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group border border-[#1E1E1E] bg-[#111111] p-6 cursor-default transition-all duration-300 hover:border-[#F5C518]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
              <div className="w-10 h-10 border border-[#1E1E1E] flex items-center justify-center mb-4 group-hover:border-[#F5C518]/40 transition-colors">
                <span className="font-mono text-[#F5C518] text-base">{s.icon}</span>
              </div>
              <h3 className="font-display font-semibold text-white text-sm mb-2">{s.title}</h3>
              <p className="font-body text-[#555555] text-[13px] leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-[#080808] border-y border-[#1E1E1E]">
        <div className="section-container py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Featured Work</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Products I&apos;ve built.</h2>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center gap-2 font-mono text-[12px] text-[#F5C518] hover:text-[#F9E07A] transition-colors">
              View all
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { name: 'Tendry',   cat: 'GovTech · Procurement',        desc: 'AI-powered tender and procurement copilot for businesses navigating complex government opportunities.',      path: '/projects' },
              { name: 'Reklyn',   cat: 'HealthTech · Revenue Recovery', desc: 'Denied claims intelligence platform helping healthcare providers recover lost insurance revenue.',           path: '/projects' },
              { name: 'Memoire',  cat: 'CareerTech · AI Workspace',     desc: 'Personal AI career coach — resume building, interview prep, salary analysis, and career planning.',        path: '/projects' },
              { name: 'Confy',    cat: 'Social · Expression',           desc: 'Anonymous thought-sharing platform designed for safe expression, venting, and community engagement.',      path: '/projects' },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group border border-[#1E1E1E] bg-[#111111] p-6 flex flex-col gap-4 hover:border-[#F5C518]/20 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#F5C518]/60">{p.cat}</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#2A2A2A] group-hover:text-[#F5C518] transition-colors">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                <p className="font-body text-[#555555] text-[13px] leading-relaxed flex-1">{p.desc}</p>
                <Link to={p.path} className="font-mono text-[11px] text-[#F5C518] hover:text-[#F9E07A] transition-colors mt-auto">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border border-[#1E1E1E] p-10 sm:p-14 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(245,197,24,0.06) 0%, transparent 60%)' }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Let's build something great.
              </h2>
              <p className="font-body text-[#555555] text-sm">
                Open to collaborations, full-time roles, and interesting engineering challenges.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <a href={CV_URL} download="kazadi_dieumerci_resume_2026.pdf" className="btn-ghost">Download CV</a>
            </div>
          </div>
        </motion.div>
      </section>

    </PageWrapper>
  );
}
