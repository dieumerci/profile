import React, { useEffect } from 'react';
import Reveal from '../components/Reveal';
import Terminal from '../components/Terminal';
import Sequencer from '../components/Sequencer';
import { SectionHeading } from '../components/ui';

function focusShell() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('play')?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  });
  document.getElementById('shell-input')?.focus();
}

export default function Play() {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== '`' || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      const tag = el?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || el?.isContentEditable) return;
      e.preventDefault();
      focusShell();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="play" className="border-t border-border py-20 sm:py-28" aria-label="Interactive extras">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="On this page"
            title="A shell, then five notes."
            subtitle="The shell moves through this page. The grid only plays notes that agree with each other. Press ` to focus the shell."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-14" aria-label="Interactive shell">
            <Terminal />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14">
            <Sequencer />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
