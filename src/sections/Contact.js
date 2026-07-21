import React from 'react';
import { personalInfo, socialLinks, CV_URL } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { Eyebrow, Icon } from '../components/ui';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-36">
      <div className="section-container">
        <Reveal>
          <Eyebrow index="05">Contact</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Let&apos;s build something together.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether it&apos;s a full-time role, a collaboration, or an ambitious product idea — if it
            involves shipping intelligent software, I&apos;d love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="link-underline font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {personalInfo.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
            {socialLinks
              .filter((s) => !s.href.startsWith('mailto:'))
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon name={s.icon} size={18} />
                  <span className="text-sm">{s.value}</span>
                  <Icon
                    name="arrow-up-right"
                    size={14}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
            <a
              href={CV_URL}
              download="kazadi_dieumerci_resume_2026.pdf"
              className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon name="download" size={18} />
              <span className="text-sm">Résumé (PDF)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
