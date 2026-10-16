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
    'The work has been in fintech, civic data, and healthcare. I care about security, clear boundaries, and code another engineer can change.',
  stats: [
    { value: '8+', label: 'Years Shipping' },
    { value: '9', label: 'Products Built' },
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
        'Fintech, civic data, media, tax, and healthcare, held to the same standard.',
      icon: 'layers',
    },
  ],
};

/* ─── Hero Positioning ────────────────────────────────────────── */
export const positioning = {
  eyebrow: 'Software Engineer',
  statement:
    'I design and ship production systems — backends, data, and AI that belongs in the product, not beside it.',
  intro:
    'Eight years of production engineering across fintech, civic tech, and enterprise — now channeled into building AI-driven products like Reklyn, Tideover, and Oravia, from architecture to launch.',
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
        'Reklyn, Tideover, and Oravia are built around LLM-powered workflows — denial analysis, between-session support, and personalized astrology guidance embedded in the product core, not bolted on.',
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
    company: 'VAT Global',
    span: 2,
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
    name: 'Reklyn',
    slug: 'reklyn',
    category: 'HealthTech · Revenue Recovery',
    tagline: 'Denied claims intelligence and revenue recovery for healthcare.',
    status: 'Product',
    badges: ['AI-Powered', 'SaaS'],
    icon: 'shield',
    website: 'https://reklyn.com/',
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
      'Demo booking and sandbox provisioning that powers the self-serve demos across Reklyn Intake and Reklyn Prevent',
    ],
    role: 'Product builder — system architecture, data modeling, AI-assisted analysis layer, and core platform development.',
    tech: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'AI/LLM APIs', 'AWS', 'Docker'],
    highlight: 'Every denied claim is revenue waiting to be recovered.',
  },
  {
    id: 2,
    name: 'Reklyn Intake',
    slug: 'reklyn-intake',
    category: 'HealthTech · Claims Intake',
    tagline: 'The intake front door for denied-claims recovery.',
    status: 'Product',
    badges: ['AI-Powered', 'SaaS'],
    icon: 'layers',
    website: 'https://reklynintake.com',
    gradient:
      'linear-gradient(135deg, hsl(187 90% 61% / 0.20) 0%, hsl(252 92% 72% / 0.12) 100%)',
    problem:
      'Recovering denied revenue starts with getting claims into one place in a usable shape. When intake is manual or scattered across billing exports and spreadsheets, denials go untracked and recovery work never starts.',
    solution:
      'Reklyn Intake is the application that turns incoming claim paperwork into structured recovery cases for the Reklyn platform. It is the entry point of the product: classification, recovery scoring, appeals, and outcomes all depend on the data captured here.',
    features: [
      'Structured claim intake for denied and underpaid claims',
      'Consistent, clean data ready for denial reason analysis',
      'Hands claims straight into the Reklyn recovery workflow',
    ],
    role: 'Product builder — system architecture, data modeling, and core platform development.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
    highlight: 'Better intake means more revenue recovered.',
  },
  {
    id: 3,
    name: 'Reklyn Prevent',
    slug: 'reklyn-prevent',
    category: 'HealthTech · Denial Prevention',
    tagline: 'Catch a medical-scheme denial before the claim is submitted.',
    status: 'In Development',
    badges: ['AI-Powered', 'SaaS'],
    icon: 'zap',
    gradient:
      'linear-gradient(135deg, hsl(187 90% 61% / 0.22) 0%, hsl(252 92% 72% / 0.12) 100%)',
    problem:
      'Most denial work happens after the money is already lost. Practices submit claims with missing authorizations, wrong codes, absent documents, or duplicates, then spend weeks recovering revenue they could have kept.',
    solution:
      'Reklyn Prevent is the third Reklyn app, beside Reklyn Intake and Reklyn. A practice enters or imports a claim draft; Prevent checks it against a versioned rule set and says what a scheme is likely to refuse, how likely, and how to fix it. It is advice, not a gate: it never submits a claim and blocks nothing unless a practice opts a rule into blocking. Denials seen by Reklyn feed back in, so recurring ones propose new rules.',
    features: [
      'Claim entry by hand or CSV import, with a clear draft-to-released lifecycle',
      'Platform rules covering coding, authorization, documents, filing windows, and duplicates, each finding with a reason and a fix',
      'Per-practice rule settings (off, advisory, or blocking), with overrides that need a reason and a role',
      'Learning loop that proposes new rules from denials Reklyn classifies, approved by an admin',
      'Agentic self-serve demo: a guide that walks a prospect through a private sandbox practice, explains each step, answers questions, and can act for them on a yes',
      'Book-a-demo front door, with spam protection and rate limits, that never loses a lead',
      'Tenant isolation, optional two-factor sign-in, and an append-only audit trail',
    ],
    role: 'Product builder — architecture, rules engine, multi-tenant data model, the demo system, and the React front end.',
    tech: ['Ruby on Rails', 'React', 'Inertia', 'Tailwind CSS', 'PostgreSQL', 'AI/LLM APIs'],
    highlight: 'Problems fixed before submission, not recovered after denial.',
  },
  {
    id: 4,
    name: 'Tideover',
    slug: 'tideover',
    category: 'HealthTech · Mental Wellbeing',
    tagline: 'A quiet companion for the days between therapy sessions.',
    status: 'Live',
    badges: ['Mobile App', 'AI-Powered'],
    icon: 'sparkles',
    website: 'https://tideover.care',
    gradient:
      'linear-gradient(135deg, hsl(187 90% 61% / 0.22) 0%, hsl(252 92% 72% / 0.10) 100%)',
    problem:
      'Support during therapy is structured and scheduled, but hard moments rarely follow the calendar. The days between sessions can feel unsupported, and people need something gentle to lean on without it pretending to be therapy.',
    solution:
      'Tideover is an AI-powered companion app for people in therapy. It offers check-ins and support between sessions, and is explicitly positioned as a supplement to professional care, never a replacement for therapy or crisis intervention. It is available on iOS and Android in more than ten languages.',
    features: [
      'AI companion for supportive, between-session conversations',
      'Diary cards for tracking wellbeing over time',
      'Clear crisis resources and emergency guidance built in',
      'Available on iOS and Android',
      'Multi-language support across 10+ languages',
      'Privacy-conscious design with honest limits on what it is for',
    ],
    role: 'Product builder — product design, AI integration, and mobile app development.',
    tech: ['AI/LLM APIs', 'iOS', 'Android', 'REST APIs'],
    highlight: 'Support that stays with you between sessions.',
  },
  {
    id: 5,
    name: 'Oravia',
    slug: 'oravia',
    category: 'Consumer · AI Astrology',
    tagline: 'A living daily companion built on your real birth chart.',
    status: 'Live',
    badges: ['AI-Powered', 'Consumer App'],
    icon: 'zap',
    website: 'https://oraviaapp.com/',
    gradient:
      'linear-gradient(135deg, hsl(252 92% 72% / 0.26) 0%, hsl(320 85% 70% / 0.10) 100%)',
    problem:
      'Most horoscopes are written for a sun sign and shared by millions of people, so they rarely feel personal. Real astrology starts from your actual birth chart.',
    solution:
      'Oravia is an astrology app that builds everything from your real birth chart. It delivers personalized daily horoscopes, transit tracking, and compatibility readings, with an AI astrologer named Luna to talk things through.',
    features: [
      'Personalization from your actual birth chart',
      'Daily horoscopes generated for you',
      'Transit tracking',
      'Compatibility readings',
      'Luna, an AI astrologer you can ask questions',
      'Daily sayings and insights',
    ],
    role: 'Product builder — product design, AI integration, and app development.',
    tech: ['AI/LLM APIs', 'REST APIs'],
    highlight: 'Astrology that starts from your chart, not your sun sign.',
  },
  {
    id: 6,
    name: 'Cairn',
    slug: 'cairn',
    category: 'HealthTech · Caregiver Toolkit',
    tagline: 'A calmer place for family caregivers to navigate the unknown, together.',
    status: 'In Development',
    badges: ['Web + Mobile', 'AI-First'],
    icon: 'map-pin',
    gradient:
      'linear-gradient(135deg, hsl(252 92% 72% / 0.24) 0%, hsl(187 90% 61% / 0.10) 100%)',
    problem:
      'Families caring for someone with a rare or chronic condition work in scraps of time. What helped one family rarely reaches the next, and the research that could help is written for specialists, not for a parent at 3am.',
    solution:
      'Cairn is named for the stack of stones a stranger leaves on a trail so the next person can find the path. The mobile app is an AI-first toolkit for family caregivers, and the web platform publishes research rewritten so a parent can use it, only after carer reviewers confirm it is understandable. Both run on one shared backend.',
    features: [
      'Mobile: a journey log, a dual-mode assistant (Understand and Support), a rare-disease finder, and moderated community rooms',
      'Mobile: care for the carer, with their own health and wellbeing tracked alongside, plus advocacy letters, appointment prep, and document ingestion',
      'Web: a public record of published research findings, written in plain language',
      'Web: a studio where verified researchers write and publish',
      'Web: a review console where carer reviewers mark what they could not follow',
      'Ten languages on mobile, including right-to-left Arabic, with night mode derived from the clock',
      'Privacy enforced in the database: no family can read another family’s log',
    ],
    role: 'Product builder — full-stack across the Flutter app, the Next.js web platform, and the shared Supabase backend.',
    tech: ['Flutter', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'AI/LLM APIs'],
    highlight: 'Research a parent can use, published only when parents say it worked.',
  },
  {
    id: 7,
    name: 'Ovxa',
    slug: 'ovxa',
    category: 'HealthTech · Women’s Health',
    tagline: 'Track less, understand more.',
    status: 'In Development',
    badges: ['Mobile App', 'AI-Powered'],
    icon: 'sparkles',
    gradient:
      'linear-gradient(135deg, hsl(320 85% 70% / 0.22) 0%, hsl(252 92% 72% / 0.10) 100%)',
    problem:
      'Menstrual-health tracking apps often reward daily perfection, and the data rarely helps in the room with a clinician. People end up with logs they cannot interpret and appointments they are not prepared for.',
    solution:
      'Ovxa is the patient-facing half of a connected care loop. It turns everyday observations into private, understandable patterns and gentle self-care goals, and helps people arrive at an appointment prepared. The patient controls what is logged and shared, and nothing in it diagnoses.',
    features: [
      'Cycle, symptom, mood, pain, sleep, medication, and lifestyle logging, including conversational entry with a review-and-confirm step',
      'Confidence-aware period estimates and explainable multi-cycle trend summaries',
      'Optional weekly challenges and private progression, never public or competitive',
      'Patient-built clinician report with a symptom timeline, questions, and PDF export',
      'Appointment requests, reminders, and secure messaging within a consented care relationship',
      'Privacy by default: sharing, AI processing, and notifications are explicit opt-ins',
    ],
    role: 'Product builder — product design, Flutter app architecture, AI integration, and the shared Supabase backend.',
    tech: ['Flutter', 'Supabase', 'PostgreSQL', 'AI/LLM APIs'],
    highlight: 'Private patterns, gentle goals, and a prepared visit.',
  },
  {
    id: 8,
    name: 'Ovclyn',
    slug: 'ovclyn',
    category: 'HealthTech · Clinician Portal',
    tagline: 'A calm, consent-led workspace for more informed care.',
    status: 'In Development',
    badges: ['Web App', 'AI-Assisted'],
    icon: 'briefcase',
    gradient:
      'linear-gradient(135deg, hsl(187 90% 61% / 0.20) 0%, hsl(320 85% 70% / 0.10) 100%)',
    problem:
      'Clinicians get patient history in fragments, with little time to prepare. Patient health data is also highly sensitive, so a clinician should see only what the patient has agreed to share, and nothing more.',
    solution:
      'Ovclyn is the clinician web portal for Ovxa. Verified clinicians, nurses, receptionists, and practice administrators prepare, consult, document, and follow up inside a consent-led workspace, seeing only the scope their role and the patient’s consent allow. AI drafts summaries and notes for the clinician to review, and the clinician stays in charge.',
    features: [
      'Availability management, an appointment calendar, and a patient chart',
      'AI-drafted visit summaries and notes that a clinician reviews before anything is saved',
      'Care plans, follow-up tasks, and clinician-approved PDF reports',
      'Role-based access for clinicians, nurses, receptionists, and administrators',
      'Consent-scoped data: no access outside an active care relationship',
      'Audit trails, and no patient-style gamification in the clinical workspace',
    ],
    role: 'Product builder — architecture, Next.js portal, role and consent model, and the shared Supabase backend.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'AI/LLM APIs'],
    highlight: 'One care loop, seen from the clinician’s side.',
  },
  {
    id: 9,
    name: 'Confy',
    slug: 'confy',
    category: 'Consumer · Anonymous Confessions',
    tagline:
      'Say the thing you can\'t say out loud — anonymously, and only for as long as you want it to exist.',
    status: 'Pre-Launch',
    badges: ['Mobile App', 'Pre-Launch'],
    icon: 'send',
    website: 'https://confy.ink/en',
    gradient:
      'linear-gradient(135deg, hsl(320 85% 70% / 0.22) 0%, hsl(187 90% 61% / 0.10) 100%)',
    problem:
      'Most social apps make you perform, and the reason people can\'t say the hard thing — the job they hate, the grief nobody around them knows about, the relationship they\'re pretending is fine — is that their name is attached to it, permanently and searchably.',
    solution:
      'Confy is an anonymous confessions app for iOS and Android. You write the thing you can\'t say out loud and meet it with a reaction or a reply — or simply see it and know you\'re not the only one. It\'s built on four commitments enforced in code: anonymous by default with no email stored, ephemeral by choice with author-set expiries, grouped by theme rather than identity, and no follow graph or vanity metrics to farm. It ships in eight languages, with South African languages — isiZulu, isiXhosa, Afrikaans — treated as first-class. A built-in advertiser portal lets businesses run honest, privacy-respecting campaigns that keep the app free without turning readers into a product.',
    features: [
      'Anonymous by default — no email required, and your handle is never derived from your identity',
      'Ephemeral by choice — every post carries an author-chosen expiry and is truly deleted when it lapses, not just hidden',
      'Echoes — an on-device aggregate of how people feel ("47 people felt lonely this week"), so no individual is ever surfaced',
      'The Void — notes saved only on your device in local SQLite, never uploaded to anyone',
      'Themes and private Circles — topic-based rooms and invite-only groups, never tied to a school or employer',
      '"Just venting" posts that invite reactions only, and "Ask the room" anonymous polls with two to four options',
      'Five reactions — Felt that, Relate, Hug, Strong, and Same — instead of public like counts',
      'Advertiser portal — clearly labelled "Sponsored" cards kept apart from confessions, matched by room, language, and city rather than by a profile of the reader, with human review of every ad and aggregate-only reporting',
      'Reader controls over ads — hide in one tap, see why it was shown, and report it; ads never appear beside crisis or self-harm content',
      'Privacy and safety by design — mute topics, block, report, on-device moderation, localized crisis resources, and controls for discoverability, replies, screenshots, analytics, export, and deletion',
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
