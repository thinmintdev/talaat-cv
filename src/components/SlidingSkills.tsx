"use client";

import React from "react";
import { TypingTitle } from "./TypingTitle";
import { InfiniteSkillsRow } from "./InfiniteSkillsRow";

interface Technology {
  readonly name: string;
  readonly icon: string;
}

interface SkillsRowData {
  readonly id: string;
  readonly label: string;
  readonly direction: "normal" | "reverse";
  readonly speed: number;
  readonly technologies: readonly Technology[];
}

interface SlidingSkillsData {
  readonly title: string;
  readonly description: string;
  readonly rows: readonly SkillsRowData[];
}

interface SlidingSkillsProps {
  data: SlidingSkillsData;
  className?: string;
}

export const SlidingSkills: React.FC<SlidingSkillsProps> = ({
  data,
  className = "",
}) => {
  return (
    <section
      id="skills"
      className={`p-8 sm:p-12 md:p-16 lg:p-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            <TypingTitle
              text={data.title}
              speed={45}
              delay={300}
            />
          </h2>
          <div className="w-[75px] h-[5px] mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Sliding Skills Rows */}
        <div className="space-y-8 lg:space-y-12">
          {data.rows.map((row) => (
            <InfiniteSkillsRow
              key={row.id}
              row={row}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};