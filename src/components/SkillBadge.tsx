"use client";

import React from "react";
import { TechIcon } from "./TechIcon";

interface Technology {
  readonly name: string;
  readonly icon: string;
}

interface SkillBadgeProps {
  technology: Technology;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  technology,
  className = "",
}) => {
  return (
    <div
      className={`
        flex items-center gap-2 px-4 py-2 
        bg-white border border-gray-200 rounded-lg
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-gray-50
        whitespace-nowrap flex-shrink-0
        ${className}
      `}
    >
      <TechIcon 
        iconName={technology.icon} 
        size={20}
      />
      <span className="text-sm font-medium text-gray-900">
        {technology.name}
      </span>
    </div>
  );
};