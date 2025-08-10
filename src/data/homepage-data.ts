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

  // Skills Section - Sliding Animation
  slidingSkills: {
    title: "Skills & Technologies",
    description: "Technologies I work with daily",
    rows: [
      {
        id: "frontend",
        label: "Frontend",
        direction: "normal" as const,
        speed: 30,
        technologies: [
          { name: "React", icon: "SiReact" },
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "TypeScript", icon: "SiTypescript" },
          { name: "JavaScript", icon: "SiJavascript" },
          { name: "HTML5", icon: "SiHtml5" },
          { name: "CSS3", icon: "SiCss3" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "SASS", icon: "SiSass" },
          { name: "Vue.js", icon: "SiVuedotjs" },
          { name: "Astro", icon: "SiAstro" },
        ],
      },
      {
        id: "backend",
        label: "Backend",
        direction: "reverse" as const,
        speed: 35,
        technologies: [
          { name: "Node.js", icon: "SiNodedotjs" },
          { name: "Python", icon: "SiPython" },
          { name: "PHP", icon: "SiPhp" },
          { name: "GraphQL", icon: "SiGraphql" },
          { name: "REST API", icon: "SiPostman" },
          { name: "Express.js", icon: "SiExpress" },
          { name: "FastAPI", icon: "SiFastapi" },
          { name: "Laravel", icon: "SiLaravel" },
          { name: "Supabase", icon: "SiSupabase" },
          { name: "Firebase", icon: "SiFirebase" },
        ],
      },
      {
        id: "technologies",
        label: "Technologies",
        direction: "normal" as const,
        speed: 40,
        technologies: [
          { name: "Docker", icon: "SiDocker" },
          { name: "AWS", icon: "SiAmazonaws" },
          { name: "Git", icon: "SiGit" },
          { name: "Linux", icon: "SiLinux" },
          { name: "Vercel", icon: "SiVercel" },
          { name: "PostgreSQL", icon: "SiPostgresql" },
          { name: "MySQL", icon: "SiMysql" },
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "Redis", icon: "SiRedis" },
          { name: "Nginx", icon: "SiNginx" },
          { name: "Ubuntu", icon: "SiUbuntu" },
          { name: "VS Code", icon: "SiVisualstudiocode" },
          { name: "WordPress", icon: "SiWordpress" },
          { name: "Apache", icon: "SiApache" },
        ],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Projects",
    description: "What I'm working on.",
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

  // Experience Section (Hidden for now)
  // experience: {
  //   title: "Experience",
  // },

  // Services Section
  services: {
    title: "Services",
    subtitle: "Comprehensive solutions for your digital needs",
    offerings: [
      {
        icon: "code",
        title: "Full-Stack Development",
        description:
          "End-to-end web applications built with modern technologies and best practices",
        features: [
          "React/Next.js Applications",
          "Node.js & Python APIs",
          "Database Architecture",
          "Cloud Infrastructure",
        ],
        technologies: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "AWS",
          "PostgreSQL",
        ],
        timeline: "2-8 weeks",
        startingPrice: "$5,000",
      },
      {
        icon: "wordpress",
        title: "WordPress Solutions",
        description:
          "Custom WordPress development from themes to headless implementations",
        features: [
          "Custom Theme Development",
          "Plugin Development",
          "WooCommerce Solutions",
          "Headless WordPress",
        ],
        technologies: [
          "WordPress",
          "PHP",
          "WooCommerce",
          "REST API",
          "GraphQL",
        ],
        timeline: "1-4 weeks",
        startingPrice: "$2,500",
      },
      {
        icon: "analytics",
        title: "Performance Optimization",
        description:
          "Speed up your existing applications with proven optimization techniques",
        features: [
          "Core Web Vitals Improvement",
          "Database Query Optimization",
          "Caching Implementation",
          "SEO Enhancement",
        ],
        technologies: [
          "Lighthouse",
          "GTmetrix",
          "Redis",
          "CDN",
          "Image Optimization",
        ],
        timeline: "1-2 weeks",
        startingPrice: "$1,500",
      },
      {
        icon: "support",
        title: "Consulting & Support",
        description:
          "Expert guidance and ongoing technical support for your development projects. We fix hacked sites, optimize performance, and ensure security best practices.",
        features: [
          "Technical Architecture Review",
          "Code Auditing & Review",
          "Team Training & Mentoring",
          "Ongoing Maintenance",
        ],
        technologies: ["Code Review", "Documentation", "Training", "Support"],
        timeline: "Ongoing",
        startingPrice: "$150/hour",
      },
    ],
  },

  // Platform Proficiency Section
  platformProficiency: {
    title: "Experience",
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
        name: "Cloud Computing/AWS",
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
        description: "Themes, plugins, fixes,e-commerce",
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
        description: "Web Vitals, SEO, Keyword optimization",
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
        name: "Linux VPS/Sysadmin",
        level: 4,
        description: "Server ops, automation, security, Web Hosting",
      },
    ],
    accessibility: {
      proficiencySquare: "Proficiency square",
      noProficiency: "No proficiency",
    },
  },

  // Contact & Services Section
  contact: {
    title: "Let's Work Together",
    subtitle:
      "Ready to bring your project to life? I specialize in building scalable web applications and cloud solutions.",
    calendlyUrl: "https://calendly.com/thinmint/new-meeting", // Replace with your actual Calendly URL
    consultation: {
      title: "Schedule Free Consultation",
      description:
        "30-minute discovery call to discuss your project needs and timeline",
    },
    services: [
      {
        title: "Web Development",
        description:
          "Modern web applications with React, Next.js, Node.js, and cloud infrastructure",
        features: [
          "React/Next.js Applications",
          "API Development",
          "Database Design",
          "Cloud Deployment",
        ],
      },
      {
        title: "WordPress Solutions",
        description:
          "Custom plugin and theme development, as well as headless WordPress environments",
        features: [
          "Custom Themes & Plugins",
          "WooCommerce Development",
          "Performance Optimization",
          "Headless CMS",
        ],
      },
      {
        title: "Cloud Architecture",
        description:
          "Scalable AWS infrastructure, DevOps, and performance optimization",
        features: [
          "AWS Infrastructure",
          "CI/CD Pipelines",
          "Performance Optimization",
          "Security Implementation",
        ],
      },
    ],
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
