import { experience } from '../data/resumeData';

function hash7(seed) {
  let h = 2166136261;
  const s = String(seed);
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
}

/* Newest first. Hashes are stable so `git show` and the log agree. */
export function careerCommits() {
  const jobs = experience.map((job) => ({
    hash: hash7(`${job.company}:${job.startDate}`),
    date: job.period,
    subject: `${job.role} at ${job.company}`,
    body: job.summary,
    files: job.tech,
  }));

  jobs.push({
    hash: hash7('origin:campus-confessions'),
    date: 'College',
    subject: 'Anonymous confessions for campus',
    body: 'Built an anonymous confessions platform for the campus community.',
    files: ['A first product', 'People who actually used it'],
  });

  return jobs;
}

export function findCommit(query) {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return null;
  return careerCommits().find((c) => c.hash.startsWith(q) || c.subject.toLowerCase().includes(q)) || null;
}
