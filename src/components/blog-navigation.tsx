"use client";

import type { allPosts } from ".contentlayer/generated";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogNavigationProps {
  currentSlug: string;
  posts: typeof allPosts;
}

export function BlogNavigation({ currentSlug, posts }: BlogNavigationProps) {
  // Sort posts by publication date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const currentIndex = sortedPosts.findIndex(
    (post) => post.slug === currentSlug
  );

  if (currentIndex === -1) return null;

  const prevPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  if (!prevPost && !nextPost) return null;

  return (
    <nav className="flex items-center justify-between py-8 border-t border-gray-200">
      {/* Previous Post */}
      <div className="flex-1">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 max-w-sm"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </div>
            <div className="min-w-0">
              <div className="text-sm text-gray-500 mb-1">Previous</div>
              <div className="text-gray-900 font-medium truncate">
                {prevPost.title}
              </div>
            </div>
          </Link>
        ) : (
          <div /> // Empty div to maintain flex layout
        )}
      </div>

      {/* Next Post */}
      <div className="flex-1 flex justify-end">
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 max-w-sm"
          >
            <div className="min-w-0 text-right">
              <div className="text-sm text-gray-500 mb-1">Next</div>
              <div className="text-gray-900 font-medium truncate">
                {nextPost.title}
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-200">
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>
          </Link>
        ) : (
          <div /> // Empty div to maintain flex layout
        )}
      </div>
    </nav>
  );
}
