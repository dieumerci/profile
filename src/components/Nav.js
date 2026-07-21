import React, { useState, useEffect, useRef } from 'react';
import { SECTIONS } from '../lib/sections';
import { CV_URL } from '../data/resumeData';
import { Button, Icon } from './ui';

/*
 * Minimal top navigation. Transparent at the top, gains a hairline border
 * and a solid backdrop on scroll. Scroll-spy (IntersectionObserver, not rAF)
 * marks the active section. A thin progress line sits at the very top.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    const first = menuRef.current?.querySelector('a');
    first?.focus();
    const toggle = toggleRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      {/* Scroll progress line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-transparent" aria-hidden="true">
        <div
          className="h-full origin-left bg-foreground"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              Dieumerci Kazadi<span className="text-subtle-foreground">.</span>
            </a>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Sections">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={active === s.id ? 'true' : undefined}
                  className={`text-sm transition-colors duration-200 ${
                    active === s.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={CV_URL}
                download="kazadi_dieumerci_resume_2026.pdf"
                className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:items-center sm:gap-1.5"
              >
                <Icon name="download" size={15} />
                Résumé
              </a>
              <Button href="#contact" variant="primary" size="md" className="hidden sm:inline-flex">
                Get in touch
              </Button>

              <button
                ref={toggleRef}
                onClick={() => setOpen(!open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <Icon name={open ? 'x' : 'menu'} size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-foreground/10 lg:hidden"
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            className="fixed left-0 right-0 top-16 z-40 border-b border-border bg-background lg:hidden"
          >
            <nav className="section-container flex flex-col py-4" aria-label="Mobile navigation">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === s.id ? 'true' : undefined}
                  className={`flex items-center gap-4 border-b border-border py-4 text-base last:border-0 ${
                    active === s.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  <span className="font-mono text-xs text-subtle-foreground" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.label}
                </a>
              ))}
              <div className="pt-5">
                <Button
                  href={CV_URL}
                  download="kazadi_dieumerci_resume_2026.pdf"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <Icon name="download" size={16} />
                  Download Résumé
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
