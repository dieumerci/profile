import React from 'react';
import { personalInfo } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { Eyebrow, Icon } from '../components/ui';

export default function About() {
  const details = [
    { label: 'Role', value: personalInfo.title },
    { label: 'Based in', value: personalInfo.location },
    { label: 'Focus', value: 'Backend · AI · Cloud' },
    { label: 'Experience', value: '8+ years' },
  ];

  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading + details */}
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="01">About</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground text-balance sm:text-4xl">
                Building software that feels useful, modern, and alive.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-10 space-y-3 border-t border-border pt-8">
                {details.map((d) => (
                  <div key={d.label} className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="text-right text-sm text-foreground">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right — narrative + strengths */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-xl leading-relaxed text-foreground text-balance sm:text-2xl">
                {personalInfo.summary}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {personalInfo.aboutExtended.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="leading-relaxed text-muted-foreground">{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <ul className="mt-12 grid gap-x-10 gap-y-8 border-t border-border pt-10 sm:grid-cols-2">
                {personalInfo.strengths.map((s) => (
                  <li key={s.title}>
                    <div className="flex items-center gap-2.5">
                      <Icon name={s.icon} size={18} className="text-foreground" />
                      <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
