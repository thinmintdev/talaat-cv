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
        Senior Full Stack Developer with 15+ years building scalable web
        applications and cloud-native solutions. Specialized in React ecosystem,
        Node.js backends, and AWS infrastructure with expertise in modern
        JavaScript frameworks, microservices architecture, and DevOps practices.
      </p>

      <p>
        Extensive WordPress development experience including custom themes,
        plugins, headless implementations, and enterprise multisite management.
        Proven track record delivering high-performance applications that drive
        business growth and enhance user experience.
      </p>

      <p>
        Led cross-functional teams and mentored developers in both agency and
        enterprise environments. Experienced in Agile methodologies, technical
        project management, and collaborating with stakeholders to deliver
        complex projects on time and within budget.
      </p>
    </>
  ),
  avatarUrl: "/images/profile.jpg",
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
      title: "ContentMind AI",
      techStack: [
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
      ],
      description:
        "Enterprise-grade content intelligence platform that revolutionized content workflows for Fortune 500 companies. Built scalable microservices architecture processing 2M+ documents monthly with AI-powered content analysis, automated categorization, and intelligent search capabilities. Implemented advanced caching strategies achieving 300ms average response times and 99.95% uptime. Platform reduced content processing time by 75% while increasing accuracy to 94% through custom ML pipeline integration.",
      link: {
        label: "View Demo",
        href: "#",
      },
    },
    {
      title: "DesignSync Pro",
      techStack: [
        "React",
        "Node.js",
        "WebRTC",
        "Socket.io",
        "MongoDB",
        "AWS",
        "Docker",
        "WebSockets",
      ],
      description:
        "Revolutionary design collaboration platform enabling real-time multi-user editing with conflict resolution algorithms. Engineered WebRTC-based peer-to-peer architecture supporting 50+ simultaneous collaborators per session. Implemented operational transformation algorithms for seamless conflict resolution and built comprehensive version control system with branching capabilities. Platform increased design team productivity by 60% and reduced project completion time by 40% across 200+ design teams.",
      link: {
        label: "designsync.pro",
        href: "#",
      },
    },
    {
      title: "CryptoFlow Exchange",
      techStack: [
        "Node.js",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Redis",
        "WebSockets",
        "Blockchain",
        "AWS",
      ],
      description:
        "High-frequency institutional cryptocurrency trading platform with advanced order matching engine processing 50,000+ transactions per second. Architected fault-tolerant microservices with real-time market data streaming, sophisticated risk management algorithms, and multi-signature wallet integration. Implemented comprehensive compliance framework meeting SOC2 Type II standards and achieved 99.99% uptime with zero security incidents. Platform facilitated $2.5B+ in trading volume within first year.",
      link: {
        label: "View Platform",
        href: "#",
      },
    },
    {
      title: "CloudOrchestra",
      techStack: [
        "Node.js",
        "React",
        "TypeScript",
        "Terraform",
        "Kubernetes",
        "Docker",
        "AWS",
        "Azure",
        "GCP",
      ],
      description:
        "Comprehensive multi-cloud infrastructure automation platform that simplified enterprise cloud management across AWS, Azure, and GCP. Built intelligent cost optimization engine reducing cloud spend by average 35% through automated resource rightsizing and spot instance management. Developed Infrastructure-as-Code generator creating Terraform configurations from visual drag-drop interface. Platform manages 500+ production workloads with automated disaster recovery and 24/7 monitoring, achieving 99.97% service availability.",
      link: {
        label: "cloudorchestra.io",
        href: "#",
      },
    },
  ],
} as const;
