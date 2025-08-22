import { ArrowLeft, ExternalLink, FileText, Github, Globe } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import { ProjectGallery } from "@/components/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasDetailPage) {
    return {};
  }

  const description = Array.isArray(project.description)
    ? project.description.join(" ")
    : project.description;

  return {
    title: `${project.title} | Alexander Talaat`,
    description: description,
    keywords: [
      ...project.techStack,
      ...project.tags,
      "web development",
      "software engineering",
      "project showcase",
    ],
    authors: [{ name: "Alexander Talaat" }],
    creator: "Alexander Talaat",
    openGraph: {
      title: project.title,
      description: description,
      type: "article",
      publishedTime: project.publishedAt.toISOString(),
      authors: ["Alexander Talaat"],
      tags: [...project.techStack, ...project.tags],
      siteName: "Alexander Talaat - Portfolio",
      locale: "en_US",
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail,
              width: 1200,
              height: 630,
              alt: `${project.title} project preview`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: description,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
    alternates: {
      canonical: `https://talaat.dev/projects/${project.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Redirect if project doesn't exist or doesn't have detail page
  if (!project || !project.hasDetailPage) {
    notFound();
  }

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "demo":
        return <Globe className="w-4 h-4" />;
      case "docs":
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Button variant="ghost" asChild={true}>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <article>
          <header className="mb-8">
            <div className="mb-6">
              {project.category && (
                <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                  {project.category}
                </Badge>
              )}
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-xl text-muted-foreground mb-4">
                  {project.subtitle}
                </p>
              )}
              <div className="w-[75px] h-[5px] mb-6 rounded-full bg-blue-700" />
            </div>

            {/* Project Description */}
            <div className="mb-6">
              {project.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground mb-3 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tech Stack */}
            {project.techStack.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            {project.allLinks.length > 0 && (
              <div className="flex gap-4 mb-8 flex-wrap">
                {project.allLinks.map((link, index) => (
                  <Button
                    key={index}
                    asChild={true}
                    variant={link.type === "demo" ? "default" : "outline"}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {getLinkIcon(link.type)}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            )}

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="mb-8">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <ProjectGallery images={project.gallery} />
            </div>
          )}

          {/* MDX Content */}
          {project.content && (
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-pre:bg-muted">
              <MDXContent code={project.content} />
            </div>
          )}

          {/* Reading Time */}
          {project.readingTime && (
            <div className="text-sm text-muted-foreground mt-8 pt-8 border-t">
              <span>Reading time: {project.readingTime.text}</span>
              <span className="mx-2">•</span>
              <span>Published: {project.publishedAt.toLocaleDateString()}</span>
            </div>
          )}
        </article>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t mt-12">
          <div className="flex justify-between items-center">
            <Button variant="ghost" asChild={true}>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            {project.primaryLink && (
              <Button asChild={true}>
                <a
                  href={project.primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {getLinkIcon(project.primaryLink.type)}
                  {project.primaryLink.label}
                </a>
              </Button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
