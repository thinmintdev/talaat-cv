"use client";

import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectLink {
  href: string;
  label?: string;
}

interface ExpandableProjectCardProps {
  title: string;
  category?: string;
  description: readonly string[];
  techStack?: readonly string[];
  link?: ProjectLink | null;
  thumbnail?: string;
  secondImage?: string;
}

export function ExpandableProjectCard({
  title,
  category,
  description,
  techStack,
  link,
  thumbnail,
  secondImage,
}: ExpandableProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Create image array from available images
  const images = [thumbnail, secondImage].filter(Boolean) as string[];
  const hasMultipleImages = images.length > 1;
  const hasLink = link?.href;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isExpanded) return;

      if (e.key === "Escape") {
        setIsExpanded(false);
      } else if (e.key === "ArrowLeft" && hasMultipleImages) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight" && hasMultipleImages) {
        setCurrentImageIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isExpanded, hasMultipleImages, images.length]);

  const handleImageNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent expansion if external link was clicked
    if ((e.target as HTMLElement).closest("a[href]")) {
      return;
    }
    setIsExpanded(true);
  };

  return (
    <>
      {/* Card Trigger */}
      <button
        type="button"
        className="group relative w-full text-left cursor-pointer transition-all duration-300 hover:-translate-y-1"
        onClick={handleCardClick}
        aria-label={`Expand ${title} project details`}
      >
        <div className="block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gray-300">
          {hasLink && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full text-gray-900 transition-all duration-300 bg-[#FFE3DD] group-hover:bg-brandSecondary hover:scale-110 z-10"
              aria-label={`Visit ${title} project`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}

          <div className="flex gap-4 sm:gap-6">
            {(thumbnail || secondImage) && (
              <div className="flex-shrink-0">
                <div className="flex flex-col gap-3">
                  {thumbnail && (
                    <div className="w-32 sm:w-36 md:w-[150px] aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 150px"
                      />
                    </div>
                  )}
                  {secondImage && (
                    <div className="w-32 sm:w-36 md:w-[150px] aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src={secondImage}
                        alt={`${title} second image`}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 150px"
                      />
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
                {description.slice(0, 2).map((line) => (
                  <li
                    key={`${title}-bullet-${line.slice(0, 30)}`}
                    className="flex items-start gap-2"
                  >
                    <span className="inline-block w-3 h-3 mt-2 rounded-sm bg-blue-600 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
                {description.length > 2 && (
                  <li className="text-blue-600 font-medium text-sm mt-2">
                    Click to view more details...
                  </li>
                )}
              </ul>

              {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  {techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm text-gray-900"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {tech}
                    </span>
                  ))}
                  {techStack.length > 4 && (
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg shadow-sm text-sm text-blue-700 font-medium">
                      +{techStack.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsExpanded(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setIsExpanded(false);
          }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Modal Content - Made Larger */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.stopPropagation();
                setIsExpanded(false);
              }
            }}
            role="document"
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Gallery - Larger */}
              {images.length > 0 && (
                <div className="lg:w-3/5 relative bg-gray-50 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
                  <div className="relative w-full h-full flex items-center justify-center p-6">
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${title} - Image ${currentImageIndex + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-all duration-300"
                      quality={95}
                    />

                    {/* Image Navigation */}
                    {hasMultipleImages && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleImageNavigation("prev")}
                          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleImageNavigation("next")}
                          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Image Dots Indicator */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                          {images.map((img) => {
                            const idx = images.indexOf(img);
                            return (
                              <button
                                key={`image-dot-${img}`}
                                type="button"
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                  idx === currentImageIndex
                                    ? "bg-white scale-125 shadow-lg"
                                    : "bg-white/60 hover:bg-white/80"
                                }`}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Content - Reorganized Layout */}
              <div
                className={`${images.length > 0 ? "lg:w-2/5" : "w-full"} relative flex flex-col`}
              >
                <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Category & Title */}
                    <div>
                      {category && (
                        <span className="inline-block px-4 py-2 bg-[#d4e6ff] text-gray-900 rounded-lg text-sm font-medium mb-4">
                          {category}
                        </span>
                      )}
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {title}
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <ul className="space-y-4">
                        {description.map((line) => (
                          <li
                            key={`${title}-detail-${line.slice(0, 30)}`}
                            className="flex items-start gap-3"
                          >
                            <span className="inline-block w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed text-lg">
                              {line}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies/Tools Tags */}
                    {techStack && techStack.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                          Tools & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {techStack.map((tech) => (
                            <span
                              key={tech}
                              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-900 hover:from-gray-100 hover:to-gray-200 transition-all duration-200"
                            >
                              <span className="w-2 h-2 rounded-full bg-blue-600" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Demo Button - Bottom Right */}
                {hasLink && (
                  <div className="p-6 lg:p-8 pt-0 flex justify-end">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-blue-200 focus:outline-none"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {link.label || "View Demo"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
