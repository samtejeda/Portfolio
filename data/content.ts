// Single source of truth for all site copy. Edit here; components only render.
// Honesty rules: no invented metrics, users, clients or features. Vista Assessments is a
// real client with sensitive data, so describe that work in words only (no repos, no screenshots).

export const profile = {
  name: "Samuel Tejeda",
  legalName: "Joan Samuel Tejeda Valencia",
  title: "Software Developer",
  pitch:
    "Computer science graduate (Cum Laude, Cybersecurity minor) building AI-assisted and mobile tools for a psychoeducational evaluation practice. Backed by over a year of front-line IT support. Bilingual English/Spanish.",
  location: "Rhode Island · Open to relocation",
  languages: "English · Español",
  cvHref: "/Samuel_Tejeda_Valencia_CV.pdf",
  email: "samueltejedavalencia@gmail.com",
  github: "https://github.com/samtejeda",
  linkedin: "https://www.linkedin.com/in/joan-samuel-tejeda-5a8003302/",
  siteUrl: "https://samtejeda.vercel.app",
};

export const seo = {
  title: "Samuel Tejeda — Software Developer",
  description:
    "Software developer and CS graduate (Cum Laude, Cybersecurity minor) building AI-assisted and mobile tools for a psychoeducational evaluation practice. Over a year of front-line IT support. Bilingual English/Spanish.",
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  /** "primary" entries render large; "compact" entries render small. */
  emphasis: "primary" | "compact";
};

// Order matters: software development first, IT demoted below it.
export const experience: Experience[] = [
  {
    role: "Software Developer",
    org: "Vista Assessments",
    dates: "Jun 2026 – Present",
    emphasis: "primary",
    bullets: [
      "Built a working prototype of an offline-first mobile app that lets school counselors and psychologists record student behavior during classroom observations — customizable behavior tags, standard observation methods (frequency, duration, interval sampling), and CSV export.",
      "Developing an AI report writer that helps the psychologist turn session notes and test data into structured evaluation reports; it runs on the practice's own hardware so client data stays private, and flags missing information instead of inventing it.",
      "Designed both tools around student privacy (FERPA/HIPAA) with multi-factor login, access controls, and activity logging.",
      "Automated the practice's admin work by connecting Airtable to Google Drive, Docs, and Gmail — student folders, bilingual report templates, and parent/teacher questionnaires are created and sent automatically.",
    ],
  },
  {
    role: "IT Helpdesk Technician",
    org: "Rhode Island College",
    dates: "Feb 2025 – May 2026",
    emphasis: "compact",
    bullets: [
      "Resolved 50+ support tickets weekly across hardware, software, and account issues on Windows, macOS, and Linux.",
      "Managed user accounts and Microsoft 365 access; escalated complex cases to senior IT staff with organized handoff notes.",
    ],
  },
  {
    role: "Inventory & Operations Assistant",
    org: "Distribuidora Monte Peniel",
    dates: "Jun 2026 – Present",
    emphasis: "compact",
    bullets: [
      "Manage and organize inventory; pick, pack, and prepare customer orders; keep product records organized for restocking.",
    ],
  },
  {
    role: "Customer Service Representative",
    org: "Teleperformance Colombia",
    dates: "2020 – 2021",
    emphasis: "compact",
    bullets: [
      "High-volume customer support in English and Spanish, resolving system and reservation issues.",
    ],
  },
];

export type Project = {
  title: string;
  context: string; // e.g. "Vista Assessments"
  status?: string; // e.g. "In development"
  problem?: string;
  built: string;
  highlights?: string;
  tags: string[];
  /** Only set for public repos. Vista work never gets a link. */
  href?: string;
  hrefLabel?: string;
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    title: "AI Evaluation Report Writer",
    context: "Vista Assessments",
    status: "In development",
    problem:
      "School psychologists spend hours turning notes and test scores into long, structured evaluation reports.",
    built:
      "A multi-tenant web app where a small language model running on the practice's own hardware drafts each report section; the psychologist makes every clinical judgment, and the tool flags missing input instead of making things up.",
    highlights:
      "Privacy-first design: local AI, tenant isolation, audit log, versioned report text, required MFA.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Local AI (Ollama)"],
    size: "large",
  },
  {
    title: "Behavior Observation App (prototype)",
    context: "Vista Assessments",
    status: "Working prototype",
    problem:
      "Counselors record classroom behavior on paper, then re-enter it by hand.",
    built:
      "An offline-first mobile app with customizable behavior tags (each with its definition shown during tracking), four standard observation methods, local storage, and CSV export.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite"],
    size: "large",
  },
  {
    title: "Practice Automation Suite",
    context: "Vista Assessments",
    built:
      "Airtable-triggered automations that create Drive folders, generate English/Spanish report templates, send questionnaires via Gmail, track received forms, and file scored documents.",
    tags: ["Node.js", "Airtable", "Google Workspace APIs"],
    size: "small",
  },
  {
    title: "Church Learning Platform",
    context: "Personal project",
    status: "In progress",
    built:
      "A mobile-first learning platform (similar to Blackboard) for my church's Bible academy: video lectures with progress tracking, bilingual auto-graded exams, invitation-based enrollment. Built as a reusable template other organizations can self-host.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    // TODO: add the public repo URL once confirmed (href + hrefLabel: "View on GitHub").
    size: "large",
  },
];

export const education = [
  {
    degree: "B.A. Computer Science, Minor in Cybersecurity",
    school: "Rhode Island College",
    date: "May 2026",
    details: [
      "GPA 3.57",
      "Cum Laude",
      "NSA-designated Center of Academic Excellence in Cyber Defense program",
    ],
  },
  {
    degree: "A.A.",
    school: "Community College of Rhode Island",
    date: "May 2024",
    details: ["GPA 3.72", "Dean's List (2x)"],
  },
];

// Flat chips, no proficiency bars. Dev-first order.
export const skills = [
  "Web & Mobile Development",
  "Databases",
  "Workflow Automation",
  "AI Tools",
  "Microsoft 365",
  "Windows / macOS / Linux",
  "IT Support & Troubleshooting",
];
