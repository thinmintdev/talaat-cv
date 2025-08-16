"use client";

import React from "react";
import { TypingTitle } from "@/components/TypingTitle";

// Import all tech icons
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiSass, SiVuedotjs, SiAstro, 
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiSupabase, SiPrisma, SiGit, SiDocker, SiVercel, SiNetlify, 
  SiGithub, SiFigma, SiLinux, SiWordpress, SiPython, SiPhp, SiGraphql, SiPostman, SiFastapi, SiLaravel, 
  SiFirebase, SiAmazon
} from "react-icons/si";

interface Technology {
  name: string;
  icon: string;
}

interface SkillRow {
  id: string;
  label: string;
  direction: "normal" | "reverse";
  speed: number;
  technologies: readonly Technology[];
}

interface ProficiencyTech {
  name: string;
  level: number;
  description: string;
}

interface CombinedSkillsProps {
  slidingSkills: {
    title: string;
    description: string;
    rows: readonly SkillRow[];
  };
  platformProficiency: {
    title: string;
    subtitle: string;
    technologies: readonly ProficiencyTech[];
    accessibility: {
      proficiencySquare: string;
      noProficiency: string;
    };
  };
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiVuedotjs,
  SiAstro,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiFigma,
  SiLinux,
  SiWordpress,
  SiPython,
  SiPhp,
  SiGraphql,
  SiPostman,
  SiFastapi,
  SiLaravel,
  SiFirebase,
  SiAmazon,
};

function SlidingTechRow({ row }: { row: SkillRow }) {
  const animationKeyframes = `
    @keyframes scroll-${row.id} {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationKeyframes }} />
      <div className="overflow-hidden py-4">
        <div className="flex items-center gap-1 mb-2">
          <div className="w-2 h-2 bg-blue-600 rounded-sm flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            {row.label}
          </span>
        </div>
        <div className="relative">
          {/* Scrolling content */}
          <div
            className="flex gap-6 whitespace-nowrap"
            style={{
              animation: `scroll-${row.id} ${row.speed}s linear infinite`,
              animationDirection: row.direction === "reverse" ? "reverse" : "normal",
              animationPlayState: "running",
              willChange: "transform",
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...row.technologies, ...row.technologies].map((tech, index) => {
              const IconComponent = iconMap[tech.icon];
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm flex-shrink-0"
                >
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-gray-700" />
                  )}
                  <span className="text-sm font-medium text-gray-800">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </>
  );
}

function ProficiencyBar({ tech }: { tech: ProficiencyTech }) {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <span className="font-mono font-semibold text-gray-800 text-base block">
          {tech.name}
        </span>
        <span className="text-sm text-gray-600">{tech.description}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`w-6 h-3 ${
              i <= Math.ceil((tech.level / 5) * 10) - 1
                ? "bg-blue-600"
                : "bg-gray-200"
            }`}
            style={{ borderRadius: 2 }}
            role="img"
            aria-label={
              i <= Math.ceil((tech.level / 5) * 10) - 1
                ? "Proficiency square"
                : "No proficiency"
            }
          />
        ))}
      </div>
    </div>
  );
}

export function CombinedSkills({ slidingSkills, platformProficiency }: CombinedSkillsProps) {
  return (
    <section className="p-8 sm:p-12 md:p-16 lg:p-24">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Section Header */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
                <TypingTitle
                  text={platformProficiency.title}
                  speed={40}
                  delay={300}
                />
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                {platformProficiency.subtitle}
              </p>
            </div>

            {/* Combined Skills Content */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left Side: Sliding Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {slidingSkills.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mt-4 mb-2">
                    {slidingSkills.description}
                  </p>
                  <div className="w-[75px] h-[5px] mt-2 mb-5 rounded-full bg-blue-700" />
                  <div className="space-y-2">
                    {slidingSkills.rows.map((row) => (
                      <SlidingTechRow key={row.id} row={row} />
                    ))}
                  </div>
                </div>

                {/* Right Side: Platform Proficiency */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Proficiency
                  </h3>
                  <p className="text-gray-600 text-sm mt-4 mb-2">
                    Key technologies and expertise levels
                  </p>
                  <div className="w-[75px] h-[5px] mt-2 mb-5 rounded-full bg-blue-700" />
                  <div>
                    {platformProficiency.technologies.map((tech) => (
                      <ProficiencyBar 
                        key={tech.name} 
                        tech={tech} 
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}