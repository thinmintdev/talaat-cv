"use client";

import Image from "next/image";

interface ProjectLink {
  href: string;
  label?: string;
}

interface ProjectCardProps {
  title: string;
  category?: string;
  description: readonly string[];
  techStack?: readonly string[];
  link?: ProjectLink;
  thumbnail?: string;
  secondImage?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  techStack,
  link,
  thumbnail,
  secondImage,
}: ProjectCardProps) {
  const hasLink = link?.href;

  return (
    <div className="group relative">
      <div className="block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1">
        {hasLink && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full text-gray-900 transition-all duration-300 bg-[#FFE3DD] group-hover:bg-brandSecondary hover:scale-110 z-10"
            aria-label={`Visit ${title} project`}
          >
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
          </a>
        )}

        <div className="flex gap-4 sm:gap-6">
          {(thumbnail || secondImage) && (
            <div className="flex-shrink-0">
              <div className="flex flex-col gap-3">
                {thumbnail && (
                  <div className="w-32 sm:w-36 md:w-[150px] aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 p-3">
                    {thumbnail.endsWith('.svg') ? (
                      <img
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <Image
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 150px"
                      />
                    )}
                  </div>
                )}
                {secondImage && (
                  <div className="w-32 sm:w-36 md:w-[150px] aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 p-3">
                    {secondImage.endsWith('.svg') ? (
                      <img
                        src={secondImage}
                        alt={`${title} second image`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <Image
                        src={secondImage}
                        alt={`${title} second image`}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 150px"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              {category && (
                <span className="px-2.5 py-0.5 bg-[#d4e6ff] text-gray-900 rounded-md text-xs font-medium">
                  {category}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl pb-2 font-bold text-gray-900 mt-1">
                {title}
              </h3>
            </div>

            <ul
              className={`text-base sm:text-lg text-gray-600 leading-relaxed space-y-2 ${hasLink ? "pr-12 sm:pr-14 md:pr-16" : ""}`}
            >
              {description.map((line, i) => (
                <li
                  key={`${title}-bullet-${i}`}
                  className="flex items-start gap-2"
                >
                  <span className="inline-block w-3 h-3 mt-2 rounded-sm bg-blue-600 flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm text-gray-900"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
