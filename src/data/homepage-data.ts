import { SiShadcnui } from "react-icons/si"

export const HOMEPAGE_DATA = {
  // About Me Section
  about: {
    title: "About Me",
    description: "Content will come from RESUME_DATA.summary",
  },

  // Skills Section - Sliding Animation
  slidingSkills: {
    title: "Skills",
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
    list: [
      {
        title: "Poll.it.com",
        category: "Application",
        techStack: [
          "React",
          "Node.js",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "Supabase",
          "TailwindCSS",
          "Socket.io",
        ],
        description: [
          "Fast, easy community polling platform",
          "Live updates, real-time results & chat",
          "Advanced analytics dashboard for user insights",
          "Image polls, custom branding, user segmentation & privacy controls",
        ],
        link: {
          label: "View Demo",
          href: "https://poll.it.com",
        },
      },
      {
        title: "Developer Portfolio",
        category: "Portfolio & Blog",
        techStack: [
          "React",
          "Node.js",
          "Next.js",
          "TypeScript",
          "Contentlayer",
          "TailwindCSS",
          "MDX",
          "Shadcnui"
        ],
        description: [
          "Fast & Lightweight portfolio and blog",
          "Contentlayer & MDX support for rich content",
          "SEO Optimization, Accessibility, and Performance",
          "Premium feeling animations and transitions",
        ],
        link: {
          label: "View Demo",
          href: "https://talaat.dev",
        },
      },
      {
        title: "GitCV",
        category: "AI SaaS",
        techStack: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "GitHub API",
          "PostgreSQL",
          "Supabase",
          "TailwindCSS",
        ],
        description: [
          "AI‑assisted SaaS that connects to your GitHub account",
          "Automatically generates and updates a Portfolio, Blog, and CV/Resume",
          "Continuously syncs from repos, commits, and activity",
          "Includes premium templates and helpful analytics",
        ],
        link: {
          label: "Coming Soon",
          href: "",
        },
      },
    ],
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
        name: "Astro",
        level: 4,
        description: "Static site generation, partial hydration",
      },
      {
        name: "Graphic Design",
        level: 4,
        description: "Visual design, branding, UI/UX",
      },
      {
        name: "Node.js",
        level: 4,
        description: "APIs, microservices, backend",
      },
      {
        name: "TypeScript",
        level: 4,
        description: "Type safety, maintainability",
      },
      {
        name: "WordPress",
        level: 5,
        description: "Themes, plugins, fixes, e-commerce",
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
        "I'm actively scheduling new projects with a typical 1-2 week timeline to get started. Let's discuss how I can help bring your vision to life.",
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
