import { TypingTitle } from "@/components/TypingTitle";
import { HOMEPAGE_DATA } from "@/data/homepage-data";

export function AboutSection() {
  return (
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
            <p className={HOMEPAGE_DATA.layout.typography.subtitle}>
              {HOMEPAGE_DATA.about.description}
            </p>
          </div>

          <div className={HOMEPAGE_DATA.layout.sections.contentColumn}>
            <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 space-y-4">
              {HOMEPAGE_DATA.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}