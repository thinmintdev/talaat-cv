import { ExpandableProjectCard } from "@/components/ExpandableProjectCard";
import { TypingTitle } from "@/components/TypingTitle";
import { HOMEPAGE_DATA } from "@/data/homepage-data";
import { getAllProjects } from "@/lib/projects";

export function ProjectsSection() {
  // Get projects from new data layer (combines MDX + legacy)
  const projects = getAllProjects();

  return (
    <section id="projects" className={HOMEPAGE_DATA.layout.sections.padding}>
      <div>
        <div className={HOMEPAGE_DATA.layout.sections.containerGrid}>
          <div className={HOMEPAGE_DATA.layout.sections.titleColumn}>
            <h2 className={HOMEPAGE_DATA.layout.typography.sectionTitle}>
              <TypingTitle
                text={HOMEPAGE_DATA.projects.title}
                speed={
                  HOMEPAGE_DATA.layout.components.typingTitle.projects.speed
                }
                delay={
                  HOMEPAGE_DATA.layout.components.typingTitle.projects.delay
                }
              />
            </h2>
            <p className={HOMEPAGE_DATA.layout.typography.subtitle}>
              {HOMEPAGE_DATA.projects.description}
            </p>
          </div>

          <div className={HOMEPAGE_DATA.layout.sections.contentColumn}>
            <div className="space-y-8">
              {projects.map((project) => (
                <ExpandableProjectCard
                  key={project.slug}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  techStack={project.techStack}
                  link={project.primaryLink}
                  thumbnail={project.thumbnail}
                  secondImage={project.secondImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
