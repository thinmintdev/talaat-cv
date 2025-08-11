import { SiShadcnui } from "react-icons/si"

export const HOMEPAGE_DATA = {
  // Hero Animation Section
  hero: {
    services: [
      "FULL STACK",
      "WEB DEVELOPER", 
      "DESIGN & BRANDING",
      "WORDPRESS EXPERT",
      "SAAS DEVELOPMENT",
      "AI SOLUTIONS",
    ],
    nameLetters: ["t", "a", "l", "\n", "a", "a", "t"],
    devLetters: [".D", "E", "V"],
    timing: {
      initialDelay: 1000,
      letterDelay: 300,
      devPauseDelay: 200,
      finalCursorDelay: 200,
      serviceStaggerDelay: 150,
      lineTransitionDelay: 400,
    },
    layout: {
      gridCols: 12,
      nameSpan: 7,
      servicesSpan: 5,
      gap: 8,
      servicesPadding: 12,
      minHeight: 58,
      lineHeight: "0.8",
    },
    styles: {
      cursorWidth: "0.35em",
      cursorHeight: "0.05em",
      lineWidth: 32,
      lineHeight: 1,
    },
  },

  // Layout Configuration
  layout: {
    sections: {
      padding: "p-8 sm:p-12 md:p-16 lg:p-24",
      containerGrid: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start",
      titleColumn: "lg:col-span-4",
      contentColumn: "lg:col-span-8",
    },
    typography: {
      sectionTitle: "text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900",
      underline: "w-[75px] h-[5px] mt-2 rounded-full bg-blue-700",
      subtitle: "mt-4 text-gray-600 text-lg",
    },
    components: {
      typingTitle: {
        about: { speed: 50, delay: 200 },
        projects: { speed: 55, delay: 250 },
        services: { speed: 60, delay: 200 },
        technologies: { speed: 40, delay: 300 },
        contact: { speed: 50, delay: 200 },
      },
    },
  },

  // About Me Section
  about: {
    title: "About",
    paragraphs: [
      "I'm a full-stack developer passionate about crafting modern web experiences. I've been working over 15 years to develop my skillset in web development & design.",
      "I specialize in building responsive frontends with React and Next.js, and scalable backends using Node.js. I integrate databases like PostgreSQL and MongoDB, and work with CMS platforms such as WordPress to deliver dynamic content solutions.",
      "My focus: clean design aesthetics, intentional technology choices, performance, and delivering exceptional user experiences."
    ],
  },

  // Skills Section - Sliding Animation
  slidingSkills: {
    title: "Stack",
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
          "Web applications / experiences built with modern technologies.",
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
          "Custom WordPress development from themes to headless implementations.",
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
        icon: "MdDesignServices",
        title: "Graphic Design",
        description:
          "Professional design services for brand identity and user experience.",
        features: [
          "Company Branding & Style Guide",
          "Custom CMS Theme Design",
          "Print & Promotional Materials",
          "UI/UX Design, Admin Interfaces",
        ],
        technologies: [
          "Figma",
          "UI/UX",
          "Brand Guidelines",
          "UI/UX",
        ],
        timeline: "1-3 weeks",
        startingPrice: "$2,000",
      },
      {
        icon: "support",
        title: "Continued Support",
        description:
          "Expert ongoing technical support, maintenance  & updates.",
        features: [
          "Technical Architecture Review",
          "Fix Hacked WordPress / Sites",
          "Cloud Service Administration",
          "Ongoing Updates & Maintenance",
        ],
        technologies: ["Updates", "Support", "Training", "Support"],
        timeline: "Continued",
        startingPrice: "$TBD/hour",
      },
    ],
  },

  // Platform Proficiency Section
  platformProficiency: {
    title: "Skills",
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

  // Contact Section
  contact: {
    title: "Let's Work Together", 
    subtitle: "Ready to bring your project online?",
    consultation: {
      title: "Schedule Free Consultation",
      description: "30-minute discovery call to discuss your project needs.",
      buttonText: "Let's Chat",
    },
    availability: {
      title: "Accepting", 
      description: "I'm scheduling new projects with a typical 1-2 week timeline to get started. Let's discuss yours today.",
    },
    configuration: {
      calendlyUrl: "https://calendly.com/thinmint/new-meeting",
      sectionBackground: "bg-gray-50",
      cardBackground: "bg-white",
      cardStyles: "rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto",
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
