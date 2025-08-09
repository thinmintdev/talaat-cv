export const HOMEPAGE_DATA = {
  // Hero Section
  hero: {
    greeting: "Hello! 👋",
    namePrefix: "I'm",
    description: "Your dynamic description will come from RESUME_DATA.about",
  },

  // About Me Section
  about: {
    title: "About Me",
    description: "Content will come from RESUME_DATA.summary",
  },

  // Projects Section
  projects: {
    title: "Projects",
    projectDescriptions: {
      "ContentMind AI": [
        "AI-powered content analysis platform for Fortune 500s",
        "Scalable microservices: 2M+ docs/month, 300ms avg response",
        "Advanced caching, 99.95% uptime, custom ML pipeline integration",
        "Reduced processing time by 75%, accuracy to 94%",
      ],
      "DesignSync Pro": [
        "Real-time design collaboration (WebRTC, 50+ users/session)",
        "Operational transformation for seamless conflict resolution",
        "Comprehensive version control with branching",
        "Increased team productivity by 60%, 40% faster delivery",
      ],
      "CryptoFlow Exchange": [
        "High-frequency crypto trading, 50K+ tx/sec",
        "Fault-tolerant microservices, real-time data streaming",
        "SOC2 Type II compliance, 99.99% uptime, zero security incidents",
        "$2.5B+ trading volume in first year",
      ],
      CloudOrchestra: [
        "Multi-cloud automation for AWS, Azure, GCP",
        "Intelligent cost optimization (avg 35% savings)",
        "Visual IaC generator (Terraform), 500+ workloads managed",
        "Automated DR, 99.97% service availability",
      ],
    },
  },

  // Experience Section
  experience: {
    title: "Experience",
  },

  // Platform Proficiency Section
  platformProficiency: {
    title: "Platform Proficiency",
    subtitle:
      "Key technologies, platforms, and tools used across major projects and roles.",
    technologies: [
      {
        name: "React/Next.js",
        level: 5,
        description: "Modern web apps, SSR, performance",
      },
      {
        name: "Node.js",
        level: 5,
        description: "APIs, microservices, backend",
      },
      {
        name: "TypeScript",
        level: 5,
        description: "Type safety, maintainability",
      },
      {
        name: "AWS",
        level: 5,
        description: "Cloud architecture, scaling",
      },
      {
        name: "Docker/K8s",
        level: 4,
        description: "Containers, orchestration, CI/CD",
      },
      {
        name: "WordPress",
        level: 5,
        description: "Themes, plugins, e-commerce",
      },
      {
        name: "SCSS/Tailwind",
        level: 4,
        description: "Modern CSS, utility-first, scalable UI",
      },
      {
        name: "Postgres/MySQL/Mongo",
        level: 4,
        description: "DBs, scaling, optimization",
      },
      {
        name: "SEO/Perf",
        level: 4,
        description: "Web Vitals, SEO, optimization",
      },
      {
        name: "PHP",
        level: 3,
        description: "Legacy, WordPress, APIs",
      },
      {
        name: "Git, CI, CD",
        level: 5,
        description: "Version control, automation, deploy",
      },
      {
        name: "Linux/Sysadmin",
        level: 4,
        description: "Server ops, automation, security",
      },
    ],
    accessibility: {
      proficiencySquare: "Proficiency square",
      noProficiency: "No proficiency",
    },
  },

  // Let's Talk Section
  letsTalk: {
    title: "Let's Talk",
    subtitle:
      "Ready to bring your project to life? I'm actively scheduling work with a typical 1-2 week timeline for new projects.",
    contact: {
      email: {
        title: "Email",
        username: "@thinmintdev", // This will be replaced with actual email from RESUME_DATA
      },
      github: {
        title: "GitHub",
        username: "@thinmintdev",
      },
    },
    availability: {
      title: "Current Availability",
      description:
        "I'm actively scheduling new projects with a typical 1-2 week timeline to get started. Whether you need a complete application build, system architecture, or ongoing development support, let's discuss how I can help bring your vision to life.",
    },
  },

  // Footer CTA Section
  footer: {
    title: "Let's Work Together",
    subtitle:
      "I'm always open to discussing new opportunities and interesting projects.",
    buttons: {
      viewCV: "View Full CV",
      readBlog: "Read Blog",
    },
  },

  // Accessibility labels
  accessibility: {
    externalLink: "External link",
    socialMediaLabels: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
} as const;
