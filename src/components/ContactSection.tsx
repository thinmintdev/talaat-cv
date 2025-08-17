import { Github, Mail } from "lucide-react";
import { TypingTitle } from "@/components/TypingTitle";
import { HOMEPAGE_DATA } from "@/data/homepage-data";
import { RESUME_DATA } from "@/data/resume-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`${HOMEPAGE_DATA.layout.sections.padding} ${HOMEPAGE_DATA.contact.configuration.sectionBackground}`}
    >
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


    </section>
  );
}