import { allProjects, type Project } from "contentlayer/generated";
import { RESUME_DATA } from "@/data/resume-data";

export interface GalleryImage {
  src: string;
  alt: string;
  filename: string;
  type: "image" | "video";
  category: string;
  isHero: boolean;
  order: number;
}

export interface ProjectLink {
  href: string;
  label: string;
  type: "demo" | "github" | "docs" | "internal";
}

export interface EnhancedProject {
  // Core data
  title: string;
  slug: string;
  category?: string;
  description: string[];
  techStack: string[];

  // Routing
  primaryLink: ProjectLink | null;
  allLinks: ProjectLink[];

  // Gallery
  gallery: GalleryImage[];
  thumbnail?: string;
  secondImage?: string;

  // Metadata
  featured: boolean;
  hasDetailPage: boolean;
  publishedAt: Date;
  tags: string[];

  // MDX content (if exists)
  content?: string;
  readingTime?: any;
  subtitle?: string;
}

// Main function to get all projects
export function getAllProjects(): EnhancedProject[] {
  // Get MDX projects
  const mdxProjects = allProjects.map(transformMDXProject);

  // Get legacy projects that don't have MDX equivalents
  const legacyProjects = RESUME_DATA.projects
    .filter(
      (legacyProject) =>
        !mdxProjects.some(
          (mdxProject) => slugify(legacyProject.title) === mdxProject.slug
        )
    )
    .map(transformLegacyProject);

  // Merge and sort by featured status and date
  return [...mdxProjects, ...legacyProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
}

// Get single project by slug
export function getProjectBySlug(slug: string): EnhancedProject | null {
  const mdxProject = allProjects.find((p) => p.projectSlug === slug);

  if (mdxProject) {
    return transformMDXProject(mdxProject);
  }

  // Fallback to legacy project
  const legacyProject = RESUME_DATA.projects.find(
    (p) => slugify(p.title) === slug
  );

  return legacyProject ? transformLegacyProject(legacyProject) : null;
}

// Check if project has detail page
export function hasDetailPage(slug: string): boolean {
  const mdxProject = allProjects.find((p) => p.projectSlug === slug);
  return mdxProject ? mdxProject.showDetailPage : false;
}

// Get featured projects
export function getFeaturedProjects(): EnhancedProject[] {
  return getAllProjects().filter((project) => project.featured);
}

// Get projects by category
export function getProjectsByCategory(category: string): EnhancedProject[] {
  return getAllProjects().filter(
    (project) => project.category?.toLowerCase() === category.toLowerCase()
  );
}

// Transform MDX project to enhanced format
function transformMDXProject(project: Project): EnhancedProject {
  return {
    title: project.title,
    slug: project.projectSlug,
    category: project.category,
    description: project.description,
    techStack: project.techStack,
    primaryLink: project.primaryLink,
    allLinks: project.links || [],
    gallery: project.galleryImages || [],
    thumbnail: project.galleryImages?.[0]?.src || project.thumbnail,
    secondImage: project.galleryImages?.[1]?.src || project.secondImage,
    featured: project.featured,
    hasDetailPage: project.showDetailPage,
    publishedAt: new Date(project.publishedAt),
    tags: project.tags || [],
    content: project.body?.code,
    readingTime: project.readingTime,
    subtitle: project.subtitle,
  };
}

// Transform legacy project to enhanced format
function transformLegacyProject(project: any): EnhancedProject {
  const slug = slugify(project.title);

  return {
    title: project.title,
    slug,
    description: Array.isArray(project.description)
      ? project.description
      : [project.description],
    techStack: project.techStack || [],
    primaryLink: project.link
      ? {
          href: project.link.href,
          label: project.link.label || "View Demo",
          type: "demo" as const,
        }
      : null,
    allLinks: project.link
      ? [
          {
            href: project.link.href,
            label: project.link.label || "View Demo",
            type: "demo" as const,
          },
        ]
      : [],
    gallery: [],
    thumbnail: project.thumbnail,
    secondImage: project.secondImage,
    featured: false,
    hasDetailPage: false,
    publishedAt: new Date(),
    tags: [],
  };
}

// Utility function to create URL-safe slugs
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Get all project slugs for static generation
export function getAllProjectSlugs(): string[] {
  return getAllProjects()
    .filter((project) => project.hasDetailPage)
    .map((project) => project.slug);
}

// Search projects by title or tech stack
export function searchProjects(query: string): EnhancedProject[] {
  const searchTerm = query.toLowerCase();

  return getAllProjects().filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchTerm)
      ) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      project.description.some((desc) =>
        desc.toLowerCase().includes(searchTerm)
      )
  );
}
