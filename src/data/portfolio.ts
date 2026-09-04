export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  website: string
  resumeUrl: string
}

export interface Stat {
  label: string
  value: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface Project {
  name: string
  bullets: string[]
}

export interface Role {
  company: string
  companyLocation: string
  title: string
  period: string
  current?: boolean
  projects: Project[]
}

export interface EducationEntry {
  school: string
  location: string
  degree: string
  period: string
}

export const profile: Profile = {
  name: 'Dinesh Kumar Penikalapati',
  title: 'Senior Frontend Developer',
  tagline: 'React & TypeScript specialist — 7+ years shipping enterprise platforms across Healthcare & BFS.',
  location: 'Hyderabad, Telangana, India',
  email: 'dineshpenikalapati@gmail.com',
  phone: '+91 8790351056',
  linkedin: 'https://www.linkedin.com/in/dineshpenikalapati/',
  github: 'https://github.com/dckumar24',
  website: 'https://dineshpenikalapati.in/',
  resumeUrl: '/DineshKumarPenikalapatiResume04092026.pdf',
}

export const stats: Stat[] = [
  { label: 'Years experience', value: '7+' },
  { label: 'Companies', value: '3' },
  { label: 'Test coverage driven', value: '90%' },
  { label: 'Architecture', value: 'Nx / Micro-FE' },
]

export const about = [
  "I build enterprise-scale UI systems — the kind with heavy state, real compliance constraints, and teams depending on the pieces being right. Most of that work has sat at the intersection of healthcare and banking platforms, where a broken form isn't just a bug, it's a workflow someone relies on.",
  "Day to day that means React, TypeScript, and the plumbing around them: monorepo and micro-frontend architecture, CI/CD pipelines I own end-to-end, and test suites built to actually catch regressions, not just hit a number.",
  "I also lean hard into AI-assisted development — Claude Code and Copilot are part of my default workflow, with a structured plan-then-review discipline before code gets written. It's changed how much I can ship without changing how carefully it gets reviewed.",
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frameworks & Technologies',
    items: ['React JS', 'Redux', 'Zustand', 'Tailwind CSS'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'SCSS', 'CSS', 'HTML'],
  },
  {
    title: 'Testing',
    items: ['Vitest', 'Jest', 'React Testing Library'],
  },
  {
    title: 'AI Development Tools',
    items: ['Claude Code', 'GitHub Copilot Agents'],
  },
  {
    title: 'DevOps & CI/CD',
    items: ['GitHub Actions', 'Build/Release Automation', 'JFrog Artifactory'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'Webpack', 'Vite', 'Nx Monorepo', 'pnpm', 'Postman', 'Chrome DevTools', 'Lighthouse', 'Axe', 'Biome', 'Omnibug'],
  },
]

export const experience: Role[] = [
  {
    company: 'Infosys',
    companyLocation: 'Bangalore, India',
    title: 'Senior Frontend Developer – Consultant, Healthcare',
    period: 'Aug 2025 – Present',
    current: true,
    projects: [
      {
        name: 'Pharmacy Drug Management System',
        bullets: [
          'Serving as offshore frontend team lead for a large-scale enterprise pharmacy platform supporting drug dispensing, inventory management, and prescription workflows, coordinating an Agile/Scrum team of 4–5 engineers.',
          'Built drug search and compound medication management features with type-ahead suggestions and advanced search capabilities using React 19, TypeScript, Zustand, and custom React hooks within an Nx monorepo architecture.',
          'Published a Drug Search Provider package to JFrog Artifactory, enabling cross-team reuse and reducing code duplication.',
          'Improved application reliability and performance through Vite + Nx optimizations, raising unit/integration test coverage to 90% using Vitest and RTL.',
          'Own end-to-end CI/CD pipeline deployment for the team using GitHub Actions, managing build, test, and release workflows.',
          'Integrated an in-house analytics layer to capture and report feature-level usage, giving stakeholders visibility into adoption trends.',
          'Drive AI-assisted development using Claude Code for the majority of implementation work, applying a structured review-and-plan-before-edit workflow across the team.',
        ],
      },
    ],
  },
  {
    company: 'Cognizant',
    companyLocation: 'Hyderabad, India',
    title: 'Frontend Developer – Associate, BFS',
    period: 'Jan 2022 – Aug 2025',
    projects: [
      {
        name: 'Notification Center',
        bullets: [
          'Developed the Notification Center UI using React JS, Context API, and SASS as part of a micro-frontend architecture.',
          'Built a single interface aggregating product-level notifications with filtering, bulk edit, delete, and mark-as-read.',
          'Integrated GraphQL APIs for efficient data fetching/mutation, and AEM content for multilingual support.',
          'Integrated analytics services for customer insight and decision-making, with Jest/RTL unit test coverage.',
        ],
      },
      {
        name: 'Alert Widget',
        bullets: [
          'Built a dynamic, modular Alert Widget using React JS and Webpack Module Federation for easy cross-application integration.',
          'Leveraged prop-driven design from the consuming application to conditionally render UI and CTA behavior per product.',
        ],
      },
      {
        name: 'Alert Management Dashboard',
        bullets: [
          'Created a feature-rich dashboard using React JS, Context API, and Webpack for managing alert preferences (email, SMS, push).',
          'Used React Router for seamless navigation across product alert management pages.',
        ],
      },
    ],
  },
  {
    company: 'Tata Consultancy Services',
    companyLocation: 'Hyderabad, India',
    title: 'Frontend Developer – System Engineer, TCS Interactive',
    period: 'Sep 2019 – Jan 2022',
    projects: [
      {
        name: 'Learning Module Trends',
        bullets: [
          'Developed the UI for learning module trends using React JS, JavaScript, and CSS.',
          'Integrated trend data from API endpoints, visualized with Chart.js.',
          'Consumed data across components using the Context API.',
        ],
      },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'JNTUH College of Engineering Sultanpur',
    location: 'Sanga Reddy, Telangana, India',
    degree: 'Bachelor of Technology in Electronics and Communications Engineering',
    period: 'Aug 2015 – May 2019',
  },
]
