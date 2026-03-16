/* ─────────────────────────────────────────────────────────────────
   RESUME DATA — Source of Truth
   All portfolio content is derived from Dieumerci Kazadi's resume.
───────────────────────────────────────────────────────────────── */

export const personalInfo = {
  name: 'Dieumerci Kazadi',
  firstName: 'Dieumerci',
  lastName: 'Kazadi',
  title: 'Software Engineer',
  tagline: 'Building secure, scalable systems that matter.',
  email: 'dieumercikaz@gmail.com',
  summary:
    'Software engineer with 6+ years of experience building web and mobile applications. My journey started in 2018 across fintech, startups, civic tech, and enterprise — always focused on secure, scalable systems and clean, maintainable code. I value collaboration, continuous learning, and leveraging modern tools including AI to ship things that genuinely work.',
  aboutExtended: [
    'I started writing code in college, where I built an anonymous confessions platform for the campus community — my first taste of what it means to build something people actually use.',
    'Since then I\'ve worked across five organizations: a global VAT tech company, a media analytics firm, a civic technology non-profit, an AI-driven CX platform, and a cloud-based fintech on Salesforce. Each environment taught me something different about engineering in the real world.',
    'Today I specialize in backend systems, API design, data pipelines, and infrastructure — with a focus on security and correctness. I enjoy working in Ruby, Python, Elixir, and JavaScript, and I\'m deeply comfortable in cloud environments like AWS.',
    'Outside of engineering, I\'m curious about AI applications, procurement technology, healthcare infrastructure, and building tools that reduce complexity for the people using them.',
  ],
  stats: [
    { value: '6+', label: 'Years Shipping' },
    { value: '4', label: 'Products Built' },
  ],
  strengths: [
    {
      title: 'Backend Architecture',
      description:
        'Designing APIs, data models, and service boundaries that stay clean as systems grow.',
      icon: '⬡',
    },
    {
      title: 'Security & Reliability',
      description:
        'Integrating security tooling, writing validated systems, and handling production with care.',
      icon: '◈',
    },
    {
      title: 'Data Pipelines',
      description:
        'Building ETL workflows, orchestration with Airflow, and RESTful data services for civic and analytics domains.',
      icon: '◫',
    },
    {
      title: 'Cross-Domain Depth',
      description:
        'Fintech, civic tech, media analytics, VAT compliance, AI-driven CX — each domain has sharpened a different edge.',
      icon: '◻',
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
    summary:
      'Cloud-based fintech platform built on Salesforce for digital banking and lending. Focus area: security, infrastructure, and production financial software.',
    responsibilities: [
      'Develop and maintain production financial software using Ruby on Rails on a Salesforce-integrated platform.',
      'Integrate and manage security tooling including Semgrep and Orca for vulnerability scanning and cloud security posture.',
      'Containerize services with Docker and contribute to AWS infrastructure management.',
      'Collaborate cross-functionally using structured Git workflows, code reviews, and CI/CD pipelines.',
    ],
    tech: ['Ruby', 'Ruby on Rails', 'Docker', 'AWS', 'Semgrep', 'Orca', 'Salesforce', 'Git'],
    color: '#F5C518',
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
    color: '#F5C518',
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
    color: '#F5C518',
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
    color: '#F5C518',
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
    color: '#F5C518',
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

/* ─── Skills ──────────────────────────────────────────────────── */
export const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Ruby', 'Python', 'JavaScript', 'SQL', 'Elixir'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '◈',
    skills: ['Ruby on Rails', 'Django', 'Flask', 'Phoenix', 'React.js'],
  },
  {
    category: 'Databases',
    icon: '⬡',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '◫',
    skills: ['AWS', 'Google Cloud', 'Amazon S3', 'Docker', 'Git Actions', 'Jenkins'],
  },
  {
    category: 'APIs & Protocols',
    icon: '⟶',
    skills: ['REST', 'GraphQL', 'TDD', 'Agile'],
  },
  {
    category: 'Tools & Workflow',
    icon: '◻',
    skills: ['Git', 'GitHub', 'Jira', 'Trello', 'Postman', 'Sidekiq'],
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
    accentColor: '#F5C518',
  },
  {
    id: 2,
    name: 'Reklyn',
    slug: 'reklyn',
    category: 'HealthTech · Revenue Recovery',
    tagline: 'Denied claims intelligence and revenue recovery for healthcare.',
    status: 'Product',
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
    accentColor: '#F5C518',
  },
  {
    id: 3,
    name: 'Memoire',
    slug: 'memoire',
    category: 'CareerTech · AI Workspace',
    tagline: 'Your personal AI career coach — resume, interviews, salary, and career planning in one intelligent workspace.',
    status: 'Product',
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
    accentColor: '#F5C518',
  },
  {
    id: 4,
    name: 'Confy',
    slug: 'confy',
    category: 'Social · Anonymous Expression',
    tagline: 'A safe space to share, vent, and be heard — anonymously.',
    status: 'Product',
    problem:
      'People often have thoughts, frustrations, and experiences they need to express — but social media\'s identity-tied nature creates pressure and fear of judgment. There\'s no simple, safe space to just say what you feel.',
    solution:
      'Confy is an anonymous thought-sharing and venting platform designed around emotional expression and community comfort. Users can post thoughts, share experiences, vent freely, and engage with content in a low-pressure, judgment-free environment.',
    features: [
      'Fully anonymous posting — no identity, no judgment',
      'Expressive content feed with community engagement',
      'Reactions and lightweight interactions on posts',
      'Safe and moderated community environment',
      'Simple, distraction-free posting experience',
      'Topic tagging and content discovery',
    ],
    role: 'Founder and builder — full-stack development, product design, and community feature architecture.',
    tech: ['Ruby on Rails', 'React.js', 'PostgreSQL', 'Redis', 'Sidekiq', 'AWS', 'Docker'],
    highlight: 'Expression without identity. Comfort without judgment.',
    accentColor: '#F5C518',
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
