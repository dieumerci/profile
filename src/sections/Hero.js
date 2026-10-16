import React from 'react';
import { personalInfo, positioning, CV_URL } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { Button, Eyebrow, Icon } from '../components/ui';

function Strength({ item }) {
  return (
    <li>
      <div className="flex items-center gap-2.5">
        <Icon name={item.icon} size={18} className="text-foreground" />
        <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
    </li>
  );
}

export default function Hero() {
  const details = [
    { label: 'Role', value: personalInfo.title },
    { label: 'Based in', value: personalInfo.location },
    { label: 'Focus', value: 'Backend · AI · Cloud' },
  ];
  const withFocus = personalInfo.strengths.filter(
    (s) => s.title === 'Backend Architecture' || s.title === 'Security & Reliability',
  );
  const withCopy = personalInfo.strengths.filter(
    (s) => s.title === 'Data Pipelines' || s.title === 'Cross-Domain Depth',
  );

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
            <Button href="#play" variant="ghost" size="lg">
              Open the shell
            </Button>
          </div>
        </Reveal>

        <div id="about" className="mt-20 scroll-mt-28 border-t border-border pt-14">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <Reveal>
                <Eyebrow index="01">About</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <dl className="mt-8 max-w-sm space-y-3 border-t border-border pt-8">
                  {details.map((d) => (
                    <div key={d.label} className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </dt>
                      <dd className="text-right text-sm text-foreground">{d.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                  {withFocus.map((s) => (
                    <Strength key={s.title} item={s} />
                  ))}
                </ul>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <p className="text-xl leading-relaxed text-foreground text-balance sm:text-2xl">
                  {personalInfo.summary}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                  {withCopy.map((s) => (
                    <Strength key={s.title} item={s} />
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
