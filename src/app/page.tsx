import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { HOMEPAGE_DATA } from "@/data/homepage-data";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
  description: RESUME_DATA.about,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="hero"
        className="relative isolate overflow-hidden bg-white py-24 md:h-screen"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/40 via-blue-50/20 to-white" />

        {/* Programming symbols pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="grid-pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
            <pattern
              id="programming-symbols"
              x="0"
              y="0"
              width="400"
              height="400"
              patternUnits="userSpaceOnUse"
            >
              <text
                x="50"
                y="50"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="24"
                transform="rotate(-15)"
              >
                &lt;/&gt;
              </text>
              <text
                x="150"
                y="100"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="20"
                transform="rotate(10)"
              >
                {}
              </text>
              <text
                x="250"
                y="80"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="18"
                transform="rotate(-5)"
              >
                =&gt;
              </text>
              <text
                x="100"
                y="200"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="22"
                transform="rotate(15)"
              >
                []
              </text>
              <text
                x="300"
                y="180"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="20"
                transform="rotate(-10)"
              >
                &lt;&gt;
              </text>
              <text
                x="200"
                y="250"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="24"
                transform="rotate(5)"
              >
                ()
              </text>
              <text
                x="50"
                y="320"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="18"
                transform="rotate(-8)"
              >
                ::
              </text>
              <text
                x="350"
                y="300"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="22"
                transform="rotate(12)"
              >
                ==
              </text>
              <text
                x="150"
                y="350"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="20"
                transform="rotate(-15)"
              >
                ++
              </text>
              <text
                x="250"
                y="370"
                fill="#1d4ed8"
                fontFamily="monospace"
                fontSize="24"
                transform="rotate(8)"
              >
                ;
              </text>
            </pattern>
          </defs>
          <rect
            fill="url(#programming-symbols)"
            width="100%"
            height="100%"
            opacity="0.2"
          />
          <rect
            fill="url(#grid-pattern)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>

        <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
          <div>
            <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 ">
              {HOMEPAGE_DATA.hero.greeting}
            </h2>
            <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 ">
              {HOMEPAGE_DATA.hero.namePrefix}{" "}
              <span className="text-blue-700">{RESUME_DATA.name}</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 ">
              {RESUME_DATA.about}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 ">
          {RESUME_DATA.contact.social.map((social) => {
            const IconComponent = {
              github: Github,
              linkedin: Linkedin,
              x: Twitter,
            }[social.icon as "github" | "linkedin" | "x"];

            if (!IconComponent) return null;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-colors duration-300 hover:text-blue-600"
              >
                <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </a>
            );
          })}
          <a
            href={`mailto:${RESUME_DATA.contact.email}`}
            aria-label="Email"
            className="transition-colors duration-300 hover:text-blue-600"
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="p-8 sm:p-12 md:p-16 lg:p-24">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                {HOMEPAGE_DATA.about.title}
              </h2>
              <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600">
                {RESUME_DATA.summary}
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  {RESUME_DATA.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-800 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {RESUME_DATA.projects.length > 0 && (
        <section id="projects" className="p-8 sm:p-12 md:p-16 lg:p-24">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                  {HOMEPAGE_DATA.projects.title}
                </h2>
                <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {RESUME_DATA.projects.map((project, index) => {
                    const hasLink = project.link?.href;
                    const Component = hasLink ? "a" : "div";
                    const linkProps = hasLink
                      ? {
                          href: project.link?.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {};

                    return (
                      <div key={project.title} className="group relative">
                        <Component
                          {...linkProps}
                          className={`block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${
                            hasLink
                              ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                              : ""
                          }`}
                        >
                          {hasLink && (
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700">
                              <svg
                                className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-label="External link"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 17L17 7M17 7H7M17 7V17"
                                />
                              </svg>
                            </div>
                          )}

                          <div className="space-y-4">
                            <div>
                              <span className="text-sm font-mono text-blue-700">
                                0{index + 1}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                                {project.title}
                              </h3>
                            </div>

                            <ul
                              className={`text-base sm:text-lg text-gray-600 leading-relaxed space-y-2 ${hasLink ? "pr-12 sm:pr-14 md:pr-16" : ""}`}
                            >
                              {(() => {
                                // Split description into concise bullet points for each project
                                const descMap =
                                  HOMEPAGE_DATA.projects.projectDescriptions;
                                const bullets: readonly string[] = descMap[
                                  project.title as keyof typeof descMap
                                ] || [project.description as string];
                                return bullets.map(
                                  (line: string, i: number) => (
                                    <li
                                      key={`${project.title}-bullet-${i}`}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="inline-block w-3 h-3 mt-2 rounded-sm bg-blue-600 flex-shrink-0" />
                                      <span>{line}</span>
                                    </li>
                                  )
                                );
                              })()}
                            </ul>

                            {project.techStack &&
                              project.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                                  {project.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                                        hasLink ? "group-hover:bg-gray-800" : ""
                                      }`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                          </div>
                        </Component>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {RESUME_DATA.work.length > 0 && (
        <section id="experience" className="p-8 sm:p-12 md:p-16 lg:p-24">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                  {HOMEPAGE_DATA.experience.title}
                </h2>
                <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {RESUME_DATA.work.map((job, _index) => (
                    <div
                      key={`${job.company}-${job.start}`}
                      className="group relative"
                    >
                      <div className="block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-300">
                        <div className="space-y-4">
                          <div>
                            <span className="text-sm font-mono text-blue-700">
                              {job.start} - {job.end || "Present"}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                              {job.title}
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 font-medium">
                              {job.company}
                            </p>
                          </div>

                          <div className="text-base sm:text-lg text-gray-600 leading-relaxed experience-content">
                            <style
                              dangerouslySetInnerHTML={{
                                __html: `
                                /* Unordered lists: custom blue square bullets */
                                .experience-content ul {
                                  margin-top: 8px !important;
                                  list-style: none !important;
                                  padding-left: 0 !important;
                                  display: flex !important;
                                  flex-direction: column !important;
                                  gap: 8px !important;
                                }
                                .experience-content ul li {
                                  display: flex !important;
                                  align-items: flex-start !important;
                                  gap: 8px !important;
                                  padding-left: 0 !important;
                                }
                                .experience-content ul li:before {
                                  content: '' !important;
                                  display: inline-block !important;
                                  width: 12px !important;
                                  height: 12px !important;
                                  margin-top: 8px !important;
                                  border-radius: 2px !important;
                                  background-color: rgb(37 99 235) !important;
                                  flex-shrink: 0 !important;
                                }

                                /* Ordered lists: keep native numbers, spacing */
                                .experience-content ol {
                                  margin-top: 8px !important;
                                  list-style: decimal !important;
                                  padding-left: 1.25rem !important; /* ~20px */
                                  display: block !important;
                                }
                                .experience-content ol li {
                                  display: list-item !important;
                                  align-items: initial !important;
                                  gap: 0 !important;
                                  padding-left: 0 !important;
                                }
                                .experience-content ol li:before {
                                  content: none !important;
                                }
                              `,
                              }}
                            />
                            {job.description}
                          </div>

                          {job.badges && job.badges.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                              {job.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience & Technologies Section */}
      <section id="technologies" className="p-8 sm:p-12 md:p-16 lg:p-24">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                {HOMEPAGE_DATA.platformProficiency.title}
              </h2>
              <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
              <p className="mt-4 text-gray-600 text-lg">
                {HOMEPAGE_DATA.platformProficiency.subtitle}
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Highlighted Technologies with Proficiency Bars */}
                {HOMEPAGE_DATA.platformProficiency.technologies.map((tech) => (
                  <div key={tech.name} className="mb-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-semibold text-gray-800 text-base min-w-[160px] max-w-[160px] truncate">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 flex-1 truncate">
                        {tech.description}
                      </span>
                    </div>
                          <div className="flex items-center gap-1 mt-2">
                            {Array.from({ length: 10 }, (_, idx) => idx + 1).map(
                              (i) => (
                                <div
                                  key={i}
                                  className={`inline-block w-5 h-5 border-2 ${
                                    i <= Math.ceil((tech.level / 5) * 10)
                                      ? "bg-blue-600 border-blue-600"
                                      : "bg-gray-200 border-gray-300"
                                  }`}
                                  style={{ borderRadius: 2 }}
                                  role="img"
                                  aria-label={
                                    i <= Math.ceil((tech.level / 5) * 10)
                                      ? HOMEPAGE_DATA.platformProficiency.accessibility
                                          .proficiencySquare
                                      : HOMEPAGE_DATA.platformProficiency.accessibility
                                          .noProficiency
                                  }
                                />
                              )
                            )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section id="contact" className="p-8 sm:p-12 md:p-16 lg:p-24 bg-gray-50">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                {HOMEPAGE_DATA.letsTalk.title}
              </h2>
              <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
              <p className="mt-4 text-gray-600 text-lg">
                {HOMEPAGE_DATA.letsTalk.subtitle}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Contact */}
                <div className="group relative">
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="block relative p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                          {HOMEPAGE_DATA.letsTalk.contact.email.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 break-all">
                          {RESUME_DATA.contact.email}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* GitHub Contact */}
                <div className="group relative">
                  <a
                    href={
                      RESUME_DATA.contact.social.find(
                        (social) => social.name === "GitHub"
                      )?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-300">
                        <Github className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                          {HOMEPAGE_DATA.letsTalk.contact.github.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600">
                          {HOMEPAGE_DATA.letsTalk.contact.github.username}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label={HOMEPAGE_DATA.accessibility.externalLink}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Timeline Info */}
                <div className="md:col-span-2 mt-4">
                  <div className="p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {HOMEPAGE_DATA.letsTalk.availability.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {HOMEPAGE_DATA.letsTalk.availability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="text-center py-12 border-t bg-gray-50">
        <h3 className="text-2xl font-semibold mb-4">
          {HOMEPAGE_DATA.footer.title}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {HOMEPAGE_DATA.footer.subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/cv"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {HOMEPAGE_DATA.footer.buttons.viewCV}
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {HOMEPAGE_DATA.footer.buttons.readBlog}
          </Link>
        </div>
      </div>
    </>
  );
}
