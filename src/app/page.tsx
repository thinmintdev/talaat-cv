import { Github, Mail } from "lucide-react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { SlidingSkills } from "@/components/SlidingSkills";
import { TypingTitle } from "@/components/TypingTitle";
import { HOMEPAGE_DATA } from "@/data/homepage-data";
import { RESUME_DATA } from "@/data/resume-data";
import { generatePersonStructuredData, generateLocalBusinessStructuredData } from "@/lib/structured-data";


export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
  description: RESUME_DATA.about,
};

export default function HomePage() {
  const personStructuredData = generatePersonStructuredData();
  const businessStructuredData = generateLocalBusinessStructuredData();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessStructuredData),
        }}
      />
      
      {/* Hero Section */}
      <HomeHero />

      {/* About Me Section */}
      <section id="about" className={HOMEPAGE_DATA.layout.sections.padding}>
        <div>
          <div className={HOMEPAGE_DATA.layout.sections.containerGrid}>
            <div className={HOMEPAGE_DATA.layout.sections.titleColumn}>
              <h2 className={HOMEPAGE_DATA.layout.typography.sectionTitle}>
                <TypingTitle
                  text={HOMEPAGE_DATA.about.title}
                  speed={HOMEPAGE_DATA.layout.components.typingTitle.about.speed}
                  delay={HOMEPAGE_DATA.layout.components.typingTitle.about.delay}
                />
              </h2>
            </div>

            <div className={HOMEPAGE_DATA.layout.sections.contentColumn}>
              <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 space-y-4">
                {HOMEPAGE_DATA.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Sliding Animation */}
      <SlidingSkills data={HOMEPAGE_DATA.slidingSkills} />

      {/* Projects Section */}
      {HOMEPAGE_DATA.projects.list.length > 0 && (
        <section id="projects" className={HOMEPAGE_DATA.layout.sections.padding}>
          <div>
            <div className={HOMEPAGE_DATA.layout.sections.containerGrid}>
              <div className={HOMEPAGE_DATA.layout.sections.titleColumn}>
                <h2 className={HOMEPAGE_DATA.layout.typography.sectionTitle}>
                  <TypingTitle
                    text={HOMEPAGE_DATA.projects.title}
                    speed={HOMEPAGE_DATA.layout.components.typingTitle.projects.speed}
                    delay={HOMEPAGE_DATA.layout.components.typingTitle.projects.delay}
                  />
                </h2>
                <p className={HOMEPAGE_DATA.layout.typography.subtitle}>
                  {HOMEPAGE_DATA.projects.description}
                </p>
              </div>

              <div className={HOMEPAGE_DATA.layout.sections.contentColumn}>
                <div className="space-y-8">
                  {HOMEPAGE_DATA.projects.list.map((project) => {
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
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full text-gray-900 transition-all duration-300 bg-[#FFE3DD] group-hover:bg-brandSecondary">
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
                            <div className="flex items-center gap-2 flex-wrap">
                              {project.category && (
                                <span className="px-2.5 py-0.5 bg-[#d4e6ff] text-gray-900 rounded-md text-xs font-medium">
                                  {project.category}
                                </span>
                              )}
                              <h3 className="text-xl sm:text-2xl pb-2 font-bold text-gray-900 mt-1">
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
                                      className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm text-gray-900"
                                    >
                                      {/* Optional: simple dot to hint icon alignment */}
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
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
                      {/* Header with Icon, Title, and Description */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <div className="w-8 h-8 text-white">
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
                            {service.icon === "MdDesignServices" && (
                              <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                role="img"
                                aria-label="Design services"
                              >
                                <path d="M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.57985 6.31211 4.05763 6.70313 4.63948L6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.69552 7.02282 8.52959 6.29615 9.02452C6.48733 9.1848 6.65672 9.38248 6.80225 9.61803C7.27801 10.388 7.5 11.5645 7.5 13.2549C7.5 14.967 7.27003 17.023 6.89541 18.6644C6.70914 19.4806 6.47843 20.2335 6.20272 20.7994C6.06598 21.08 5.89948 21.3541 5.69217 21.5685C5.48714 21.7804 5.17035 22.0049 4.75 22.0049C4.32965 22.0049 4.01286 21.7804 3.80783 21.5685C3.60052 21.3541 3.43402 21.08 3.29728 20.7994C3.02157 20.2335 2.79086 19.4806 2.60459 18.6644C2.22997 17.023 2 14.967 2 13.2549C2 11.5645 2.22199 10.388 2.69775 9.61803C2.84328 9.38248 3.01267 9.1848 3.20385 9.02452C2.47718 8.52959 2 7.69552 2 6.75001C2 6.38181 2.00034 5.74889 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403Z" fill="currentColor"/>
                                <path d="M9.99994 14.917C9.46162 14.8267 8.94761 14.6647 8.46806 14.4412C8.48904 14.0349 8.49994 13.637 8.49994 13.2549C8.49994 12.8491 8.48793 12.461 8.46151 12.0915C8.90465 12.4558 9.4275 12.7266 9.99994 12.874V10.5C9.99994 9.67157 10.6715 9 11.4999 9H14.9999C14.9999 6.79086 13.2091 5 10.9999 5C10.0146 5 9.11251 5.35626 8.4154 5.94699C8.24173 5.13337 7.83957 4.53662 7.58275 4.15554L7.54248 4.09572C8.51976 3.40549 9.7125 3 10.9999 3C14.3136 3 16.9999 5.68629 16.9999 9H20.4999C21.3284 9 21.9999 9.67157 21.9999 10.5V19.5C21.9999 20.3284 21.3284 21 20.4999 21H11.4999C10.6715 21 9.99994 20.3284 9.99994 19.5V14.917ZM11.9999 14.917V19H19.9999V11H16.6585C15.9423 13.0265 14.1683 14.5533 11.9999 14.917ZM14.4648 11H11.9999V12.874C13.0508 12.6035 13.9345 11.9168 14.4648 11Z" fill="currentColor"/>
                              </svg>
                            )}
                            {service.icon === "support" && (
                              <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                role="img"
                                aria-label="Support and maintenance services"
                              >
                                <path 
                                  d="M22 7.99995H20M20 7.99995H19C17 6.00173 14 3.99974 12 5.99995M20 7.99995V15.9999M12 5.99995L8.99956 9.00158C8.9202 9.08097 8.88052 9.12066 8.84859 9.1558C8.15499 9.91889 8.15528 11.0842 8.84927 11.847C8.88121 11.8821 8.92098 11.9218 9.00031 12.0011C9.07967 12.0804 9.11936 12.1201 9.15449 12.152C9.91743 12.8453 11.0824 12.8452 11.8451 12.1516C11.8802 12.1197 11.9199 12.08 11.9992 12.0007L12.9996 11.0003M12 5.99995C10 3.99974 7 6.0018 5 8.00001H4M2 8.00001H4M4 8.00001V15.9999M20 15.9999V18.9999H22M20 15.9999H17.1716M15 12.9999L16.5 14.4999C16.5796 14.5796 16.6195 14.6194 16.6515 14.6547C17.3449 15.4175 17.3449 16.5824 16.6515 17.3452C16.6195 17.3805 16.5796 17.4203 16.5 17.4999C16.4204 17.5795 16.3805 17.6194 16.3453 17.6515C15.5824 18.3449 14.4176 18.3449 13.6547 17.6515C13.6195 17.6194 13.5796 17.5795 13.5 17.4999L13 16.9999C12.4548 17.5452 12.1821 17.8178 11.888 17.9636C11.3285 18.2408 10.6715 18.2408 10.112 17.9636C9.81788 17.8178 9.54525 17.5452 9 16.9999C8.31085 17.9188 6.89563 17.7912 6.38197 16.7639L6 15.9999H4M4 15.9999V18.9999H2" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl mt-[-5px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Features List - Full Width */}
                      {service.features && service.features.length > 0 && (
                        <ul className="mb-4 space-y-2">
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

                      {/* Tags and Pricing - Full Width */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {service.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm text-gray-900"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-brandSecondary">
                            {service.startingPrice}
                          </p>
                          <p className="text-xs text-gray-500">
                            {service.timeline}
                          </p>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                <TypingTitle
                  text={HOMEPAGE_DATA.platformProficiency.title}
                  speed={40}
                  delay={300}
                />
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                {HOMEPAGE_DATA.platformProficiency.subtitle}
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Highlighted Technologies with Proficiency Bars */}
                {HOMEPAGE_DATA.platformProficiency.technologies.map((tech) => (
                  <div key={tech.name} className="mb-4">
                    <div className="mb-1">
                      <span className="font-mono font-semibold text-gray-800 text-base block">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 block truncate">
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
      <section id="contact" className={`${HOMEPAGE_DATA.layout.sections.padding} ${HOMEPAGE_DATA.contact.configuration.sectionBackground}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
              <TypingTitle
                text={HOMEPAGE_DATA.contact.title}
                speed={HOMEPAGE_DATA.layout.components.typingTitle.contact.speed}
                delay={HOMEPAGE_DATA.layout.components.typingTitle.contact.delay}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {HOMEPAGE_DATA.contact.subtitle}
            </p>
          </div>

          {/* Get in Touch */}
          <div className="text-center mb-16">
            <div className={HOMEPAGE_DATA.contact.configuration.cardStyles}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {HOMEPAGE_DATA.contact.consultation.buttonText}
              </h3>
              <p className="text-gray-600 mb-6">
                {HOMEPAGE_DATA.contact.consultation.description}
              </p>

              {/* Primary CTA - Schedule Consultation */}
              <a
                href={HOMEPAGE_DATA.contact.configuration.calendlyUrl}
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

      {/* Simple Footer 
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
      </footer>*/}
    </>
  );
}
