"use client";

import React from "react";
import { SkillBadge } from "./SkillBadge";
import styles from "./sliding-skills.module.css";

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

interface InfiniteSkillsRowProps {
  row: SkillsRowData;
  className?: string;
}

export const InfiniteSkillsRow: React.FC<InfiniteSkillsRowProps> = ({
  row,
  className = "",
}) => {
  // Duplicate technologies for seamless infinite scroll
  const duplicatedTechnologies = [...row.technologies, ...row.technologies];
  
  const animationDirection = row.direction === "normal" ? styles["scroll-normal"] : styles["scroll-reverse"];
  
  return (
    <div className={`${styles["scroll-container"]} ${className}`}>
      {/* Row Label */}
      <div className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
        {row.label}
      </div>
      
      {/* Scrolling Content */}
      <div
        className={`${styles["skill-row"]} ${animationDirection}`}
        style={{
          animationDuration: `${row.speed}s`,
        }}
      >
        {duplicatedTechnologies.map((technology, index) => (
          <SkillBadge
            key={`${technology.name}-${index}`}
            technology={technology}
          />
        ))}
      </div>
    </div>
  );
};