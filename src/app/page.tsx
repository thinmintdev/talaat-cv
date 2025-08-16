import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { CombinedSkills } from "@/components/CombinedSkills";
import { ContactSection } from "@/components/ContactSection";
import { HomeHero } from "@/components/HomeHero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StructuredData } from "@/components/StructuredData";
import { HOMEPAGE_DATA } from "@/data/homepage-data";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
  description: RESUME_DATA.about,
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData />

      {/* Hero Section */}
      <HomeHero />

      {/* About Me Section */}
      <AboutSection />

      {/* Skills Section - Combined */}
      <CombinedSkills 
        slidingSkills={HOMEPAGE_DATA.slidingSkills}
        platformProficiency={HOMEPAGE_DATA.platformProficiency}
      />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact & Services Section */}
      <ContactSection />
    </>
  );
}
