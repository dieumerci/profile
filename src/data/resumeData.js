/* ─────────────────────────────────────────────────────────────────
   RESUME DATA — Source of Truth
   All portfolio content is derived from Dieumerci Kazadi's resume.
   Icons reference names in src/components/ui/Icon.js.
───────────────────────────────────────────────────────────────── */

export const personalInfo = {
  name: 'Dieumerci Kazadi',
  firstName: 'Dieumerci',
  lastName: 'Kazadi',
  title: 'Software Engineer',
  location: 'Johannesburg, South Africa',
  tagline: 'Building secure, scalable systems that matter.',
  email: 'dieumercikaz@gmail.com',
  summary:
    'Software engineer with 8+ years of experience building web and mobile applications. My journey started in 2017 across fintech, startups, civic tech, and enterprise — always focused on secure, scalable systems and clean, maintainable code. I value collaboration, continuous learning, and leveraging modern tools including AI to ship things that genuinely work.',
  aboutExtended: [
    'I started writing code in college, where I built an anonymous confessions platform for the campus community — my first taste of what it means to build something people actually use.',
    'Since then I\'ve worked across five organizations: a global VAT tech company, a media analytics firm, a civic technology non-profit, an AI-driven CX platform, and a cloud-based fintech on Salesforce. Each environment taught me something different about engineering in the real world.',
    'Today I specialize in backend systems, API design, data pipelines, and infrastructure — with a focus on security and correctness. I enjoy working in Ruby, Python, Elixir, and JavaScript, and I\'m deeply comfortable in cloud environments like AWS.',
    'Outside of engineering, I\'m curious about AI applications, procurement technology, healthcare infrastructure, and building tools that reduce complexity for the people using them.',
  ],
  stats: [
    { value: '8+', label: 'Years Shipping' },
    { value: '4', label: 'Products Built' },
    { value: '5', label: 'Industries Served' },
  ],
  strengths: [
    {
      title: 'Backend Architecture',
      description:
        'Designing APIs, data models, and service boundaries that stay clean as systems grow.',
      icon: 'server',
    },
    {
      title: 'Security & Reliability',
      description:
        'Integrating security tooling, writing validated systems, and handling production with care.',
      icon: 'shield',
    },
    {
      title: 'Data Pipelines',
      description:
        'Building ETL workflows, orchestration with Airflow, and RESTful data services for civic and analytics domains.',
      icon: 'database',
    },
    {
      title: 'Cross-Domain Depth',
      description:
        'Fintech, civic tech, media analytics, VAT compliance, AI-driven CX — each domain has sharpened a different edge.',
      icon: 'layers',
    },
  ],
};

/* ─── Hero Positioning ────────────────────────────────────────── */
export const positioning = {
  eyebrow: 'Software Engineer · AI-Powered Products',
  statement:
    'I design and ship intelligent software — AI-powered products, SaaS platforms, and systems built to scale.',
  intro:
    'Eight years of production engineering across fintech, civic tech, and enterprise — now channeled into building AI-driven products like Tendry, Reklyn, and Memoire, from architecture to launch.',
};

/* ─── AI & Innovation ─────────────────────────────────────────── */
export const aiFocus = {
  eyebrow: 'AI & Innovation',
  title: 'Software that thinks with you.',
  statement:
    'I build intelligent software systems that combine clean engineering, thoughtful design, and AI-powered workflows to create products that feel useful, modern, and alive.',
  points: [
    {
      title: 'AI-Native Products',
      description:
        'Tendry, Reklyn, and Memoire are built around LLM-powered workflows — requirement extraction, denial analysis, and career coaching embedded in the product core, not bolted on.',
      icon: 'sparkles',
    },
    {
      title: 'Production-Grade Foundations',
      description:
        'Intelligence is only useful on rails: secure backends, clean APIs, data pipelines, and cloud infrastructure that keep AI features fast, safe, and reliable.',
      icon: 'shield',
    },
    {
      title: 'Human-Centered Automation',
      description:
        'From government procurement to healthcare revenue, I use AI to reduce complexity for the people doing the work — not to add another layer of it.',
      icon: 'zap',
    },
  ],
};

/* ─── Work Experience ─────────────────────────────────────────── */
export const experience = [
  {
    id: 1,
    company: 'nCino',
    role: 'Software Engineer',
    location: 'Johannesburg, South Africa',
    period: 'May 2024 — Present',
    startDate: '2024-05',
    endDate: null,
    domain: 'Fintech · Cloud Banking',
    tone: 'primary',
    summary:
      'Cloud-based fintech platform built on Salesforce for digital banking and lending. Focus area: security, infrastructure, and production financial software.',
    responsibilities: [
      'Develop and maintain production financial software using Ruby on Rails on a Salesforce-integrated platform.',
      'Integrate and manage security tooling including Semgrep and Orca for vulnerability scanning and cloud security posture.',
      'Containerize services with Docker and contribute to AWS infrastructure management.',
      'Collaborate cross-functionally using structured Git workflows, code reviews, and CI/CD pipelines.',
    ],
    tech: ['Ruby', 'Ruby on Rails', 'Docker', 'AWS', 'Semgrep', 'Orca', 'Salesforce', 'Git'],
  },
  {
    id: 2,
    company: 'Helm Africa',
    role: 'Software Engineer',
    location: 'Johannesburg, South Africa',
    period: 'Dec 2022 — Apr 2024',
    startDate: '2022-12',
    endDate: '2024-04',
    domain: 'AI · Customer Experience · Enterprise',
    tone: 'accent',
    summary:
      'AI-driven customer experience and automation platforms for enterprise clients in banking, telecom, and retail. Backend services, integrations, and AI messaging workflows.',
    responsibilities: [
      'Built and maintained backend services using Elixir/Phoenix, Python, and Django for enterprise CX clients.',
      'Collaborated with cross-functional teams to translate CX requirements into technical implementations.',
      'Developed AI-driven messaging workflows and automation pipelines for high-volume communication systems.',
      'Designed and maintained RESTful APIs consumed by enterprise client frontends and third-party integrations.',
      'Integrated monitoring and logging systems using Grafana and Loki for observability across services.',
    ],
    tech: ['Elixir', 'Phoenix', 'Python', 'Django', 'REST APIs', 'Grafana', 'Loki', 'PostgreSQL'],
  },
  {
    id: 3,
    company: 'Open Cities Lab',
    role: 'Software Engineer',
    location: 'Johannesburg, South Africa',
    period: 'Dec 2020 — Nov 2022',
    startDate: '2020-12',
    endDate: '2022-11',
    domain: 'Civic Tech · Open Data · Government',
    tone: 'primary',
    summary:
      'Civic tech non-profit building open data platforms in partnership with African governments. Data pipelines, REST APIs, and open data infrastructure.',
    responsibilities: [
      'Developed data pipeline workflows using Apache Airflow to ingest, transform, and publish civic datasets.',
      'Built REST APIs to expose urban and civic data consumed by government agencies and public applications.',
      'Managed and contributed to AWS infrastructure for scalable data hosting.',
      'Customized CKAN-based open data platforms to support African government data portals.',
      'Wrote Python backend services to process and validate large-volume public datasets.',
    ],
    tech: ['Python', 'Apache Airflow', 'AWS', 'REST APIs', 'CKAN', 'PostgreSQL', 'Docker'],
  },
  {
    id: 4,
    company: 'Ornico Group',
    role: 'Software Engineer',
    location: 'Johannesburg, South Africa',
    period: 'Oct 2019 — Nov 2020',
    startDate: '2019-10',
    endDate: '2020-11',
    domain: 'Media Analytics · Brand Intelligence',
    tone: 'accent',
    summary:
      'Brand intelligence and media analytics company. Backend systems, media monitoring pipelines, and web scraping infrastructure.',
    responsibilities: [
      'Built and maintained features for a media monitoring platform tracking brand mentions across channels.',
      'Maintained legacy systems written in Django and Ruby on Rails, improving stability and performance.',
      'Developed web scraping pipelines using Selenium and Ruby to collect media data at scale.',
      'Designed RESTful APIs to surface analytics data to internal dashboards and external clients.',
      'Built internal automation tooling to reduce manual reporting overhead.',
    ],
    tech: ['Ruby', 'Ruby on Rails', 'Django', 'Python', 'Selenium', 'REST APIs', 'MySQL'],
  },
  {
    id: 5,
    company: 'VATGlobal',
    role: 'Junior Software Engineer',
    location: 'Johannesburg, South Africa',
    period: 'Oct 2017 — Sep 2019',
    startDate: '2017-10',
    endDate: '2019-09',
    domain: 'FinTech · Tax Compliance · Global',
    tone: 'primary',
    summary:
      'Global VAT technology company specializing in indirect tax compliance and reclamation. Backend systems and multi-jurisdiction data platforms.',
    responsibilities: [
      'Developed Python backend services handling multi-jurisdiction VAT compliance logic.',
      'Built systems to manage complex indirect tax data across international regulatory frameworks.',
      'Wrote automated test suites and validation frameworks to ensure data accuracy across jurisdictions.',
      'Integrated external data sources and financial APIs into the core compliance platform.',
      'Contributed to quality control pipelines ensuring data integrity for client-facing outputs.',
    ],
    tech: ['Python', 'SQL', 'PostgreSQL', 'REST APIs', 'TDD', 'Automated Testing'],
  },
];

/* ─── Education ───────────────────────────────────────────────── */
export const education = [
  {
    id: 1,
    institution: 'Pearson Institute',
    location: 'Midrand, South Africa',
    degree: 'BSc (Honours) in Computer Science',
    period: 'Graduated January 2024',
    level: 'Honours Degree',
    description:
      'Honours-level program deepening expertise in advanced algorithms, software engineering theory, research methodology, and computer science fundamentals.',
  },
  {
    id: 2,
    institution: 'Pearson Institute',
    location: 'Midrand, South Africa',
    degree: 'BSc in Computer Science',
    period: 'Graduated December 2015',
    level: 'Bachelor\'s Degree',
    description:
      'Foundational degree covering programming, data structures, systems architecture, mathematics, and software development principles.',
  },
];

/* ─── Skills — grouped by engineering domain ──────────────────── */
export const skillGroups = [
  {
    category: 'Backend Engineering',
    icon: 'server',
    blurb: 'APIs, services, and domain logic that stay clean as systems grow.',
    skills: ['Ruby on Rails', 'Django', 'Flask', 'Phoenix', 'Elixir', 'Ruby', 'Python'],
  },
  {
    category: 'Frontend & APIs',
    icon: 'layout',
    blurb: 'Product interfaces and the API contracts behind them.',
    skills: ['React.js', 'JavaScript', 'REST', 'GraphQL'],
  },
  {
    category: 'AI & Automation',
    icon: 'sparkles',
    blurb: 'LLM-powered features, orchestration, and workflow automation.',
    skills: ['AI/LLM APIs', 'Apache Airflow', 'Selenium', 'Sidekiq', 'Automation Pipelines'],
  },
  {
    category: 'Databases & Data',
    icon: 'database',
    blurb: 'Modeling, storing, and moving data with correctness in mind.',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    blurb: 'Infrastructure, containers, and pipelines that ship reliably.',
    skills: ['AWS', 'Google Cloud', 'Amazon S3', 'Docker', 'Git Actions', 'Jenkins'],
  },
  {
    category: 'Practice & Tooling',
    icon: 'wrench',
    blurb: 'The discipline and day-to-day toolchain behind delivery.',
    skills: ['TDD', 'Agile', 'Git', 'GitHub', 'Jira', 'Trello', 'Postman'],
  },
];

export const primarySkills = [
  'Ruby on Rails',
  'Python',
  'JavaScript',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Elixir',
  'Django',
];

/* ─── Projects ────────────────────────────────────────────────── */
export const projects = [
  {
    id: 1,
    name: 'Tendry',
    slug: 'tendry',
    category: 'GovTech · Procurement Intelligence',
    tagline: 'AI-powered tender and procurement copilot.',
    status: 'Product',
    badges: ['AI-Powered', 'SaaS'],
    icon: 'briefcase',
    gradient:
      'linear-gradient(135deg, hsl(252 92% 72% / 0.28) 0%, hsl(187 90% 61% / 0.10) 100%)',
    problem:
      'Applying for government tenders is complex, document-heavy, and inaccessible for most small and medium-sized businesses. Compliance requirements are buried in long documents, and missing a single item can disqualify an entire application.',
    solution:
      'Tendry is an AI-powered procurement copilot designed to make tender applications accessible and manageable. It helps businesses discover relevant opportunities, extract and understand requirements, identify compliance gaps, and draft stronger, faster responses.',
    features: [
      'Tender discovery and opportunity matching based on business profile',
      'AI-assisted requirement extraction from complex tender documents',
      'Compliance gap analysis — flags missing documents or criteria',
      'Response drafting assistance guided by tender requirements',
      'Document management and workflow organization',
      'Audit trail and submission tracking',
    ],
    role: 'Product builder — system design, backend architecture, AI integration, and product direction.',
    tech: ['Python', 'Ruby on Rails', 'PostgreSQL', 'AWS', 'AI/LLM APIs', 'REST APIs', 'Docker'],
    highlight: 'Procurement intelligence that turns complexity into clarity.',
  },
  {
    id: 2,
    name: 'Reklyn',
    slug: 'reklyn',
    category: 'HealthTech · Revenue Recovery',
    tagline: 'Denied claims intelligence and revenue recovery for healthcare.',
    status: 'Product',
    badges: ['AI-Powered', 'SaaS'],
    icon: 'shield',
    gradient:
      'linear-gradient(135deg, hsl(187 90% 61% / 0.24) 0%, hsl(252 92% 72% / 0.10) 100%)',
    problem:
      'Healthcare providers lose significant revenue to denied and underpaid insurance claims every year. Identifying which claims to prioritize, understanding denial reasons, and managing resubmissions manually is inefficient, error-prone, and expensive.',
    solution:
      'Reklyn is an insurance claim recovery platform that helps clinics and healthcare organizations identify denied or underpaid claims, understand why they were rejected, prioritize the highest-value recovery opportunities, and support structured resubmission and appeal workflows.',
    features: [
      'Claim intake and centralized denial tracking',
      'AI-assisted denial reason analysis and categorization',
      'Smart prioritization — surface highest-ROI recovery opportunities first',
      'Guided resubmission and appeal workflow support',
      'Financial impact visibility and recovery reporting',
      'Integration support for common healthcare billing systems',
    ],
    role: 'Product builder — system architecture, data modeling, AI-assisted analysis layer, and core platform development.',
    tech: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'AI/LLM APIs', 'AWS', 'Docker'],
    highlight: 'Every denied claim is revenue waiting to be recovered.',
  },
  {
    id: 3,
    name: 'Memoire',
    slug: 'memoire',
    category: 'CareerTech · AI Workspace',
    tagline:
      'Your personal AI career coach — resume, interviews, salary, and career planning in one intelligent workspace.',
    status: 'Product',
    badges: ['AI-Powered', 'SaaS'],
    icon: 'sparkles',
    gradient:
      'linear-gradient(135deg, hsl(252 92% 72% / 0.26) 0%, hsl(320 85% 70% / 0.10) 100%)',
    problem:
      'Job seekers juggle a scattered set of disconnected tools to write resumes, prepare for interviews, research salary benchmarks, and map their career path. None of these tools are personalized, connected, or intelligent — leaving people to figure it out alone at every stage.',
    solution:
      'Memoire is an AI-powered career platform that acts as a personal career coach — not just a template generator. It thinks with you: improving your resume, training you for interviews with AI-generated questions, analyzing salary expectations against real market data, and guiding your career decisions through an intelligent planning workspace.',
    features: [
      'AI resume builder that improves and tailors content — not just formats it',
      'Interview prep with AI-generated questions, smart follow-ups, and session notes',
      'Salary analyzer with market benchmarks to set informed expectations',
      'Career planner for mapping paths, goals, and progression strategies',
      'Document management for all career assets in one place',
      'AI Coach available across every workflow for personalized guidance',
    ],
    role: 'Product builder — full-stack development, AI integration, product design, and career feature architecture.',
    tech: ['Python', 'React.js', 'PostgreSQL', 'AWS', 'AI/LLM APIs', 'REST APIs', 'Docker'],
    highlight: 'A career coach that thinks with you, not just a tool that formats for you.',
  },
  {
    id: 4,
    name: 'Confy',
    slug: 'confy',
    category: 'Consumer · Anonymous Confessions',
    tagline:
      'Say the thing you can\'t say out loud — anonymously, and only for as long as you want it to exist.',
    status: 'Pre-Launch',
    badges: ['Mobile App', 'Pre-Launch'],
    icon: 'send',
    website: 'https://www.confy.ink',
    gradient:
      'linear-gradient(135deg, hsl(320 85% 70% / 0.22) 0%, hsl(187 90% 61% / 0.10) 100%)',
    problem:
      'Most social apps make you perform, and the reason people can\'t say the hard thing — the job they hate, the grief nobody around them knows about, the relationship they\'re pretending is fine — is that their name is attached to it, permanently and searchably.',
    solution:
      'Confy is an anonymous confessions app for iOS and Android. You write the thing you can\'t say out loud and meet it with a reaction or a reply — or simply see it and know you\'re not the only one. It\'s built on four commitments enforced in code: anonymous by default with no email stored, ephemeral by choice with author-set expiries, grouped by theme rather than identity, and no follow graph or vanity metrics to farm. It ships in eight languages, with South African languages — isiZulu, isiXhosa, Afrikaans — treated as first-class.',
    features: [
      'Anonymous by default — no email required, and your handle is never derived from your identity',
      'Ephemeral by choice — every post carries an author-chosen expiry and is truly deleted when it lapses, not just hidden',
      'Echoes — an on-device aggregate of how people feel ("47 people felt lonely this week"), so no individual is ever surfaced',
      'The Void — notes saved only on your device in local SQLite, never uploaded to anyone',
      'Themes and private Circles — topic-based rooms and invite-only groups, never tied to a school or employer',
      'Privacy and safety by design — mute topics, block, report, on-device moderation, and localized crisis resources',
    ],
    role: 'Founder and builder — product direction, Flutter app architecture, Firestore data modeling, and the privacy, moderation, and localization systems.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Firebase Auth', 'App Check', 'SQLite'],
    highlight: 'No name. No follower count. No permanent record.',
  },
];

/* ─── AI Console Demos ────────────────────────────────────────────
   Scenarios for the AI Lab terminal. Every line is grounded in a
   real shipped feature (see projects[].features) — dramatized for
   the terminal format, never invented. ─────────────────────────── */
export const aiDemos = [
  {
    id: 'tendry',
    label: 'Tendry',
    intro: 'procurement copilot — tender analysis',
    command: 'tendry analyze tender-notice.pdf',
    lines: [
      { type: 'run', text: 'reading tender document…' },
      { type: 'ok', text: 'requirements extracted and structured' },
      { type: 'warn', text: 'compliance gap — missing documents flagged' },
      { type: 'next', text: 'drafting guided response…' },
    ],
  },
  {
    id: 'reklyn',
    label: 'Reklyn',
    intro: 'claims intelligence — revenue recovery',
    command: 'reklyn triage --denied-claims',
    lines: [
      { type: 'run', text: 'analyzing denial reasons…' },
      { type: 'ok', text: 'denials categorized by root cause' },
      { type: 'ok', text: 'highest-value recoveries ranked first' },
      { type: 'next', text: 'building appeal workflow…' },
    ],
  },
  {
    id: 'memoire',
    label: 'Memoire',
    intro: 'ai career coach — interview prep',
    command: 'memoire coach --interview-prep',
    lines: [
      { type: 'run', text: 'tailoring questions to profile…' },
      { type: 'ok', text: 'questions generated with smart follow-ups' },
      { type: 'ok', text: 'salary expectations benchmarked' },
      { type: 'next', text: 'updating career plan…' },
    ],
  },
];

/* ─── Social Links ────────────────────────────────────────────── */
export const socialLinks = [
  {
    label: 'GitHub',
    value: 'github.com/dieumercikaz',
    href: 'https://github.com/dieumercikaz',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dieumercikaz',
    href: 'https://linkedin.com/in/dieumercikaz',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    value: 'dieumercikaz@gmail.com',
    href: 'mailto:dieumercikaz@gmail.com',
    icon: 'mail',
  },
];

/* ─── Navigation ──────────────────────────────────────────────── */
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const CV_URL = `${process.env.PUBLIC_URL}/kazadi_dieumerci_resume_2026.pdf`;
export const PHOTO_URL = `${process.env.PUBLIC_URL}/images/me.jpg`;
