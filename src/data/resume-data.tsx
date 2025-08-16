import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Alexander Talaat",
  initials: "AT",
  location: "Washington, D.C.",
  locationLink: "https://www.google.com/maps/place/Washington,+DC",
  about: "Full Stack Developer. WordPress Expert. IT Specialist.",
  summary: (
    <>
      <p>
        I'm a full-stack developer passionate about crafting modern web
        experiences. I've been working over 15 years to develop my skillset in
        web development & design.
      </p>

      <p>
        I specialize in building responsive frontends with React and Next.js,
        and scalable backends using Node.js. I integrate databases like
        PostgreSQL and MongoDB, and work with CMS platforms such as WordPress to
        deliver dynamic content solutions.
      </p>
      <br />
      <p>
        <b>My primary focus is always:</b> clean design aesthetics, intentional
        technology choices, performance, and delivering exceptional user
        experiences.
      </p>
    </>
  ),
  avatarUrl: "/headshot-crop.JPG",
  personalWebsiteUrl: "https://talaat.dev",
  contact: {
    email: "hello@talaat.dev",
    tel: "240-630-3871",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/thinmintdev",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alextalaat/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Montgomery College",
      degree: "Certificate Program in Cloud Computing & Networking Technology",
      start: "2020",
      end: "2021",
    },
    {
      school: "Udemy",
      degree: "Professional Certification in Full Stack Development",
      start: "2018",
      end: "2019",
    },
  ],
  work: [
    {
      company: "WideWeb",
      link: "",
      badges: [
        "React",
        "Node.js",
        "NextJS",
        "TailwindCSS",
        "AWS",
        "Docker",
        "TypeScript",
        "CI/CD",
      ],
      title: "Senior Full Stack Developer & Cloud Solutions Architect",
      start: "Jan 2017",
      end: null,
      description: (
        <>
          Lead technical architect designing and implementing enterprise-grade
          web applications and cloud infrastructure solutions, driving digital
          transformation initiatives for 25+ clients.
          <ul className="list-inside list-disc">
            <li>
              Architect and develop scalable React/Next.js applications with
              TypeScript, achieving 99.9% uptime and 35% improved performance
              through code splitting and optimized rendering
            </li>
            <li>
              Design and manage multi-tier AWS cloud infrastructure supporting
              500K+ monthly users, implementing auto-scaling, monitoring, and
              cost optimization strategies reducing infrastructure costs by 30%
            </li>
            <li>
              Spearhead enterprise SaaS platform integrations including
              Office365 and Microsoft Graph API, streamlining business
              operations for 15+ organizations and reducing manual workflows by
              60%
            </li>
            <li>
              Implement zero-trust security architecture with VPN solutions and
              network segmentation, achieving SOC 2 compliance and reducing
              security incidents by 85%
            </li>
            <li>
              Establish containerized microservices architecture using Docker
              and Kubernetes, implementing CI/CD pipelines that reduced
              deployment time from hours to minutes
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance",
      link: "",
      badges: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "JavaScript",
        "SEO",
        "Performance Optimization",
        "API Integration",
      ],
      title: "Senior WordPress Developer & E-commerce Specialist",
      start: "Jan 2019",
      end: "Dec 2021",
      description: (
        <>
          Delivered high-converting WordPress solutions for 30+ clients across
          diverse industries, specializing in custom e-commerce platforms and
          performance-driven web applications.
          <ul className="list-inside list-disc">
            <li>
              Engineered bespoke WordPress themes using modern PHP patterns and
              vanilla JavaScript, implementing responsive design principles that
              increased mobile engagement by 45%
            </li>
            <li>
              Architected enterprise WooCommerce solutions with multi-gateway
              payment processing, inventory management systems, and custom
              checkout flows, driving $2M+ in annual revenue for clients
            </li>
            <li>
              Developed 20+ custom WordPress plugins with RESTful API
              integrations including Stripe, PayPal, and CRM systems, reducing
              manual data entry by 70% and improving workflow automation
            </li>
            <li>
              Implemented technical SEO strategies and Core Web Vitals
              optimization achieving 95+ PageSpeed scores, 40% faster load
              times, and 25% increase in organic search rankings
            </li>
            <li>
              Executed complex website migrations and security hardening
              protocols including SSL implementation, malware scanning, and
              automated backups, achieving 99.9% uptime across all client sites
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "Python",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "WordPress",
    "WooCommerce",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "Linux",
    "GraphQL",
    "REST APIs",
    "Microservices",
    "CI/CD",
    "DevOps",
    "Cloud Architecture",
    "Performance Optimization",
    "SEO",
  ],
  projects: [
    {
      title: "Poll.it.com",
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
      description:
        "Real time polling platform with live updates and real-time results. Built with a modern tech stack including React, Node.js, and PostgreSQL. Scalable architecture supporting 100,000+ concurrent users. Features include advanced analytics dashboard, image polls, custom branding, user segmentation, and privacy controls.",
      link: {
        label: "View Demo",
        href: "https://poll.it.com",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
  ],
} as const;
