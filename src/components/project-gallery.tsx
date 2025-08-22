"use client";

import { ChevronLeft, ChevronRight, Play, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function ProjectGallery({ images, className }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  }, []);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      setSelectedIndex((current) => {
        if (current === null) return current;
        if (direction === "prev") {
          return current === 0 ? images.length - 1 : current - 1;
        }
        return current === images.length - 1 ? 0 : current + 1;
      });
    },
    [images.length]
  );

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  // Handle keyboard navigation (modal only)
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, closeModal, navigateImage]);

  if (images.length === 0) return null;

  // Group images by category for better organization
  const imagesByCategory = images.reduce(
    (acc, image, index) => {
      const category = image.category || "general";
      if (!acc[category]) acc[category] = [];
      acc[category].push({ ...image, originalIndex: index });
      return acc;
    },
    {} as Record<string, (GalleryImage & { originalIndex: number })[]>
  );

  const categoryOrder = ["interface", "demo", "mobile", "technical", "general"];
  const sortedCategories = categoryOrder.filter((cat) => imagesByCategory[cat]);

  return (
    <>
      <div className={cn("space-y-8", className)}>
        {sortedCategories.map((category) => (
          <div key={category}>
            {sortedCategories.length > 1 && (
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {category === "interface" ? "User Interface" : category}
              </h3>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imagesByCategory[category].map((image) => (
                <button
                  key={image.originalIndex}
                  type="button"
                  className="group relative overflow-hidden rounded-lg border bg-muted cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-left"
                  onClick={() => openModal(image.originalIndex)}
                  aria-label={`Open media ${image.alt}`}
                >
                  {image.type === "video" ? (
                    <div className="relative aspect-video">
                      <video
                        src={image.src}
                        className="w-full h-full object-cover"
                        muted={true}
                        loop={true}
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      >
                        <track kind="captions" label="No captions available" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill={true}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium truncate">
                      {image.alt}
                    </p>
                  </div>

                  {image.isHero && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-in fade-in duration-300"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-20 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {selectedIndex + 1} of {images.length}
          </div>

          {/* Main Image/Video */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            role="document"
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.stopPropagation();
                closeModal();
              }
            }}
          >
            {images[selectedIndex].type === "video" ? (
              <video
                src={images[selectedIndex].src}
                controls={true}
                autoPlay={true}
                className="max-w-full max-h-full rounded-lg shadow-2xl"
              >
                <track kind="captions" label="No captions available" />
              </video>
            ) : (
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                quality={95}
              />
            )}

            {/* Image Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="font-medium">{images[selectedIndex].alt}</p>
                <p className="text-sm text-gray-300 capitalize">
                  {images[selectedIndex].category}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg backdrop-blur-sm max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                  }}
                  className={cn(
                    "relative w-16 h-12 rounded overflow-hidden flex-shrink-0 border-2 transition-all",
                    selectedIndex === index
                      ? "border-white scale-110"
                      : "border-transparent hover:border-white/50"
                  )}
                >
                  {image.type === "video" ? (
                    <video
                      src={image.src}
                      className="w-full h-full object-cover"
                      muted={true}
                    />
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill={true}
                      className="object-cover"
                      sizes="64px"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
