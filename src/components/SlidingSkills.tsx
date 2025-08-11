"use client";

import type React from "react";
import { InfiniteSkillsRow } from "./InfiniteSkillsRow";
import { TypingTitle } from "./TypingTitle";

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
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
              <TypingTitle text={data.title} speed={45} delay={300} />
            </h2>
            <p className="mt-4 text-lg text-gray-600">{data.description}</p>
          </div>

          <div className="lg:col-span-8">
            {/* Sliding Skills Rows */}
            <div className="space-y-8 lg:space-y-12">
              {data.rows.map((row) => (
                <InfiniteSkillsRow key={row.id} row={row} className="w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
