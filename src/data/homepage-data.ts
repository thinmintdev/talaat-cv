export const HOMEPAGE_DATA = {
  // Layout Configuration - Shared across all sections
  layout: {
    sections: {
      padding: "p-8 sm:p-12 md:p-16 lg:p-24",
      containerGrid:
        "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start",
      titleColumn: "lg:col-span-4",
      contentColumn: "lg:col-span-8",
    },
    typography: {
      sectionTitle:
        "text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900",
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

  // 1. Hero Animation Section
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
    devLetters: [".", "D", "E", "V"],
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

  // 2. About Me Section
  about: {
    title: "About",
    paragraphs: [
      "I'm a full-stack developer passionate about crafting modern web experiences and applications. With over 15 years of experience, I've honed my skills in web development and design and adapted to the changing landscape and technologies.",
      "I specialize in building responsive frontends with React and Next.js, and scalable backends using Node.js. I integrate databases like PostgreSQL and MongoDB, and work with CMS platforms such as WordPress to deliver dynamic content solutions.",
      "My Focus: Clean code and design aesthetics. Thoughtful technology choices. Delivering exceptional user experiences.",
    ],
  },

  // 3. Skills Section - Sliding Animation and Platform Proficiency
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
          { name: "AWS", icon: "SiAmazon" },
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

  platformProficiency: {
    title: "Skills",
    subtitle:
      "Key technologies, platforms, and tools used across major projects and roles.",
    technologies: [
      {
        name: "Frontend Development",
        level: 4,
        description: "React, NextJS, TypeScript",
      },
      {
        name: "SCSS/Tailwind",
        level: 4,
        description: "Responsive, utility-first, scalable UI",
      },
      {
        name: "Backend Development",
        level: 3.5,
        description: "Node.js, Express, MongoDB, PHP",
      },
      {
        name: "WordPress",
        level: 4.5,
        description: "Themes, plugins, fixes, e-commerce",
      },
    ],
    accessibility: {
      proficiencySquare: "Proficiency square",
      noProficiency: "No proficiency",
    },
  },

  // 4. Projects Section
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
          "FREE:Fast, easy community polling platform",
          "Live updates, real-time results & chat",
          "Advanced analytics dashboard for user insights",
          "Image polls, custom branding, user segmentation & privacy controls",
        ],
        link: {
          label: "Tryy FREE Today!",
          href: "https://poll.it.com",
        },
        thumbnail: "/images/projects/poll-it/poll_logo.svg",
        secondImage: "/images/projects/poll-it/Wispr_Flow_5z8Gzd8m0w.png",
      },
      {
        title: "thinmint - web  agency",
        category: "Portfolio & Blog",
        techStack: [
          "React",
          "Node.js",
          "Next.js",
          "TypeScript",
          "Contentlayer",
          "TailwindCSS",
          "MDX",
          "Shadcnui",
        ],
        description: [
          "Fast & Lightweight landing & blog",
          "Contentlayer & MDX support for rich content",
          "SEO Optimization, Accessibility, and Performance",
          "Premium feeling animations and transitions",
        ],
        link: {
          label: "View Demo",
          href: "https://thinmint.dev",
        },
        thumbnail: "/images/projects/portfolio/brave_PpoNs0EZdI.png",
        secondImage: "/images/projects/portfolio/thinmint.svg",
      },
      {
        title: "GitCV",
        category: "AI SaaS, In Development",
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
        thumbnail: "/images/projects/gitcv/00001.png",
        secondImage: undefined,
      },
    ],
  },

  // 5. Services Section
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
        startingPrice: "Pricing On Request",
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
        startingPrice: "Pricing On Request",
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
        technologies: ["Figma", "UI/UX", "Adobe", "Canva"],
        timeline: "1-3 weeks",
        startingPrice: "Pricing On Request",
      },
      {
        icon: "support",
        title: "IT Support",
        description:
          "Expert ongoing technical support, maintenance  & updates.",
        features: [
          "Technical Architecture Review",
          "Fix Hacked WordPress / Sites",
          "Cloud Service Administration",
          "Maintain Performance & Security Standards",
        ],
        technologies: ["Support", "Training", "Maintenance"],
        timeline: "Continued",
        startingPrice: "Pricing On Request",
      },
    ],
  },

  // 6. Contact Section
  contact: {
    title: "Let's Work Together",
    subtitle: "Ready to bring your project online?",
    consultation: {
      title: "Schedule Free Consultation",
      description: "30-minute discovery call to discuss your project needs.",
      buttonText: "Let's Chat",
    },
    availability: {
      title: "Accepting Projects",
      description:
        "Any Size, Complexity or Budget Considered.  For best results please be descriptive, Include examples if posible and outline important features.  I'll reply within 24 hours.",
    },
    configuration: {
      calendlyUrl: "https://calendly.com/thinmint/new-meeting",
      sectionBackground: "bg-gray-50",
      cardBackground: "bg-white",
      cardStyles:
        "rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto",
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
