import { Github, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PremiumHero } from "@/components/PremiumHero";
import { SlidingSkills } from "@/components/SlidingSkills";
import { TypingTitle } from "@/components/TypingTitle";
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
      <PremiumHero />

      {/* About Me Section */}
      <section id="about" className="p-8 sm:p-12 md:p-16 lg:p-24">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                <TypingTitle
                  text={HOMEPAGE_DATA.about.title}
                  speed={50}
                  delay={200}
                />
              </h2>
              <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
            </div>

            <div className="lg:col-span-8">
              <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600">
                {RESUME_DATA.summary}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Sliding Animation */}
      <SlidingSkills data={HOMEPAGE_DATA.slidingSkills} />

      {/* Projects Section */}
      {HOMEPAGE_DATA.projects.list.length > 0 && (
        <section id="projects" className="p-8 sm:p-12 md:p-16 lg:p-24">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                  <TypingTitle
                    text={HOMEPAGE_DATA.projects.title}
                    speed={55}
                    delay={250}
                  />
                </h2>
                <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
                <p className="mt-4 text-lg text-gray-600">
                  {HOMEPAGE_DATA.projects.description}
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {HOMEPAGE_DATA.projects.list.map((project, index) => {
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
                              {project.description.map((line, i) => (
                                <li
                                  key={`${project.title}-bullet-${i}`}
                                  className="flex items-start gap-2"
                                >
                                  <span className="inline-block w-3 h-3 mt-2 rounded-sm bg-blue-600 flex-shrink-0" />
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>

                            {project.techStack &&
                              project.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                                  {project.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#282836] text-gray-200 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium"
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

      {/* Experience Section - Hidden */}
      {/* {RESUME_DATA.work.length > 0 && (
        <section id="experience" className="p-8 sm:p-12 md:p-16 lg:p-24">
          ... Experience section content ...
        </section>
      )} */}

      {/* Services Section */}
      <section id="services" className="p-8 sm:p-12 md:p-16 lg:p-24 bg-white">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                <TypingTitle
                  text={HOMEPAGE_DATA.services.title}
                  speed={60}
                  delay={200}
                />
              </h2>
              <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700" />
              <p className="mt-4 text-gray-600 text-lg">
                {HOMEPAGE_DATA.services.subtitle}
              </p>
            </div>

            <div className="lg:col-span-8">
              {/* Services Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {HOMEPAGE_DATA.services.offerings.map((service) => (
                  <div key={service.title} className="group cursor-pointer">
                    <div className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:bg-blue-50/30">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <div className="w-7 h-7 text-white">
                            {service.icon === "code" && (
                              <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-label="Code development services"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            )}
                            {service.icon === "wordpress" && (
                              <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-label="WordPress development services"
                              >
                                <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.075.899 0 0 .584.075 1.2.105l1.784 4.904-2.51 7.566-4.175-12.47c.652-.03 1.235-.105 1.235-.105.583-.075.516-.93-.065-.899 0 0-1.756.135-2.88.135C4.78 6.06 4.622 6.06 4.444 6.06 6.605 3.344 9.584 1.5 12.999 1.5c2.906 0 5.547 1.08 7.555 2.85-.049-.003-.095-.009-.143-.009-1.06 0-1.81.93-1.81 1.927 0 .9.518 1.66 1.073 2.56.417.72.9 1.64.9 2.97 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014z" />
                              </svg>
                            )}
                            {service.icon === "analytics" && (
                              <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-label="Analytics and performance optimization services"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                              </svg>
                            )}
                            {service.icon === "support" && (
                              <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-label="Support and maintenance services"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                            {service.description}
                          </p>

                          {service.features && service.features.length > 0 && (
                            <ul className="mt-2 mb-4 space-y-2">
                              {service.features.map((feature, i) => (
                                <li
                                  key={`${service.title}-feature-${i}`}
                                  className="flex items-start gap-2"
                                >
                                  <span className="inline-block w-2.5 h-2.5 mt-1.5 rounded-sm bg-blue-600 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}

                            <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {service.technologies.slice(0, 2).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-[#282836] text-gray-200 rounded text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-blue-600">
                                {service.startingPrice}
                              </p>
                              <p className="text-xs text-gray-500">
                                {service.timeline}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Technologies Section */}
      <section id="technologies" className="p-8 sm:p-12 md:p-16 lg:p-24">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                <TypingTitle
                  text={HOMEPAGE_DATA.platformProficiency.title}
                  speed={40}
                  delay={300}
                />
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
                                ? HOMEPAGE_DATA.platformProficiency
                                    .accessibility.proficiencySquare
                                : HOMEPAGE_DATA.platformProficiency
                                    .accessibility.noProficiency
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

      {/* Contact & Services Section */}
      <section id="contact" className="p-8 sm:p-12 md:p-16 lg:p-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
              <TypingTitle
                text={HOMEPAGE_DATA.contact.title}
                speed={50}
                delay={200}
              />
            </h2>
            <div className="w-[75px] h-[5px] mx-auto rounded-full bg-blue-700 mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {HOMEPAGE_DATA.contact.subtitle}
            </p>
          </div>

          {/* Get in Touch */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                {HOMEPAGE_DATA.contact.consultation.description}
              </p>

              {/* Primary CTA - Schedule Consultation */}
              <a
                href={HOMEPAGE_DATA.contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 text-lg mb-4 w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Schedule consultation calendar"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {HOMEPAGE_DATA.contact.consultation.title}
              </a>

              {/* Alternative Contact */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-3">OR</p>
                <p className="text-sm text-gray-500 mb-3">Reach Out Directly</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {/* Email Button */}
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 border border-gray-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={
                      RESUME_DATA.contact.social.find(
                        (social) => social.name === "GitHub"
                      )?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 border border-gray-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Info */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex items-start justify-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Availability information"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {HOMEPAGE_DATA.contact.availability.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {HOMEPAGE_DATA.contact.availability.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="text-center py-12 border-t bg-white">
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
      </footer>
    </>
  );
}
