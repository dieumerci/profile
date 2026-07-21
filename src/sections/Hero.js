import React from 'react';
import { personalInfo, positioning, CV_URL } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { Button, Icon } from '../components/ui';

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="section-container">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              Available for work · {personalInfo.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {positioning.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground text-balance sm:text-7xl lg:text-8xl">
            Dieumerci Kazadi
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-balance sm:text-2xl">
            {positioning.statement}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#work" variant="primary" size="lg">
              View work
              <Icon name="arrow-right" size={16} />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in touch
            </Button>
            <Button href={CV_URL} download="kazadi_dieumerci_resume_2026.pdf" variant="ghost" size="lg">
              <Icon name="download" size={16} />
              Résumé
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-border pt-10">
            {personalInfo.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
