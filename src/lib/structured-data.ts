import { RESUME_DATA } from "@/data/resume-data";
import type { Post } from "contentlayer/generated";

export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    alternateName: RESUME_DATA.initials,
    description: RESUME_DATA.about,
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.avatarUrl,
    sameAs: RESUME_DATA.contact.social.map((social) => social.url),
    address: {
      "@type": "Place",
      name: RESUME_DATA.location,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: RESUME_DATA.contact.email,
      telephone: RESUME_DATA.contact.tel,
      contactType: "personal",
    },
    jobTitle: "Full Stack Engineer",
    worksFor:
      RESUME_DATA.work.length > 0
        ? {
            "@type": "Organization",
            name: RESUME_DATA.work[0].company,
            url: RESUME_DATA.work[0].link,
          }
        : undefined,
    alumniOf: RESUME_DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school,
    })),
    hasOccupation: RESUME_DATA.work.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: RESUME_DATA.location,
      },
      occupationalCategory: "Software Engineering",
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Professional software engineer",
      },
    })),
    knowsAbout: RESUME_DATA.skills,
  };
}

export function generateWebPageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    url: RESUME_DATA.personalWebsiteUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: `${RESUME_DATA.name}'s Professional Resume`,
      url: RESUME_DATA.personalWebsiteUrl,
    },
    about: {
      "@type": "Person",
      name: RESUME_DATA.name,
    },
    mainEntity: generatePersonStructuredData(),
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: generatePersonStructuredData(),
    about: generatePersonStructuredData(),
    name: `${RESUME_DATA.name} - Professional Resume`,
    description: `Professional resume and portfolio of ${RESUME_DATA.name}, ${RESUME_DATA.about}`,
    url: RESUME_DATA.personalWebsiteUrl,
  };
}

export function generateArticleStructuredData(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    image: `${RESUME_DATA.personalWebsiteUrl}/opengraph-image`, // Default OG image
    author: {
      "@type": "Person",
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
      sameAs: RESUME_DATA.contact.social.map(social => social.url),
    },
    publisher: {
      "@type": "Person",
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt, // Use publishedAt since updatedAt doesn't exist
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${RESUME_DATA.personalWebsiteUrl}/blog/${post.slug}`,
    },
    articleSection: "Technology",
    keywords: post.tags.join(", "),
    wordCount: 1000, // Estimate - could be calculated from post content
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: `${RESUME_DATA.name}'s Developer Blog`,
      url: `${RESUME_DATA.personalWebsiteUrl}/blog`,
    },
  };
}

export function generateBlogStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${RESUME_DATA.name}'s Developer Blog`,
    description: "Thoughts, ideas, and insights about software development, technology, and more.",
    url: `${RESUME_DATA.personalWebsiteUrl}/blog`,
    author: {
      "@type": "Person",
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
    },
    publisher: {
      "@type": "Person", 
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
    },
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: `${RESUME_DATA.name} - Full Stack Developer`,
      url: RESUME_DATA.personalWebsiteUrl,
    },
  };
}

export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${RESUME_DATA.name} - Full Stack Development Services`,
    description: RESUME_DATA.about,
    url: RESUME_DATA.personalWebsiteUrl,
    telephone: RESUME_DATA.contact.tel,
    email: RESUME_DATA.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Washington",
      addressRegion: "DC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9072,
      longitude: -77.0369,
    },
    serviceArea: {
      "@type": "Place",
      name: "Washington DC Metro Area",
    },
    priceRange: "$$$",
    openingHours: "Mo-Fr 09:00-17:00",
    paymentAccepted: ["Cash", "Credit Card", "Electronic Payment"],
    currenciesAccepted: "USD",
    hasOfferCatalog: {
      "@type": "OfferCatalog", 
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Web Development",
            description: "Complete web application development using React, Next.js, Node.js"
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "WordPress Development",
            description: "Custom WordPress themes, plugins, and e-commerce solutions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Performance Optimization",
            description: "Website speed optimization and technical SEO improvements"
          }
        }
      ]
    },
    sameAs: RESUME_DATA.contact.social.map(social => social.url),
  };
}
