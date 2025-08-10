"use client";

import React from "react";
import * as SiIcons from "react-icons/si";
import { FaQuestion } from "react-icons/fa";

interface TechIconProps {
  iconName: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  iconName,
  size = 20,
  className = "",
}) => {
  // Get the icon component from react-icons/si
  const IconComponent = (SiIcons as any)[iconName];
  
  // Fallback to question mark if icon not found
  const Icon = IconComponent || FaQuestion;
  
  return (
    <Icon 
      size={size} 
      className={`text-blue-600 ${className}`}
      aria-label={`${iconName} icon`}
    />
  );
};