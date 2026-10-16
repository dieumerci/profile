import { projects } from '../data/resumeData';

/* Each prompt maps to a product that actually exists in the résumé data. */
const BRIEFS = [
  {
    id: 'claims',
    prompt: 'Revenue stuck in denied claims',
    slug: 'reklyn',
  },
  {
    id: 'between',
    prompt: 'The days between therapy sessions',
    slug: 'tideover',
  },
  {
    id: 'trail',
    prompt: 'A parent needs research at 3am',
    slug: 'cairn',
  },
  {
    id: 'quiet',
    prompt: "Something you can't say out loud",
    slug: 'confy',
  },
];

export function shipSketches() {
  return BRIEFS.map((brief) => {
    const project = projects.find((p) => p.slug === brief.slug);
    if (!project) return null;
    return {
      id: brief.id,
      prompt: brief.prompt,
      name: project.name,
      tagline: project.tagline,
      status: project.status,
      highlight: project.highlight,
      tech: project.tech,
      website: project.website || null,
    };
  }).filter(Boolean);
}
