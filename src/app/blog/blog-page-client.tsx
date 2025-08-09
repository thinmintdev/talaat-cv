"use client";

import type { allPosts } from ".contentlayer/generated";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogSidebar } from "@/components/blog-sidebar";
import { MobileSidebarToggle } from "@/components/mobile-sidebar-toggle";

interface BlogPageClientProps {
  posts: typeof allPosts;
}

export function BlogPageClient({ posts }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts;

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [posts, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Container with proper centering and padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 lg:py-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-gray-100">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Thoughts, ideas, and insights about software development,
              technology, and more.
            </p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
          {/* Main content - takes 3/4 on desktop */}
          <main className="lg:col-span-3 order-2 lg:order-1">
            {/* Search results indicator */}
            {searchQuery && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  {filteredPosts.length > 0
                    ? `Found ${filteredPosts.length} post${filteredPosts.length === 1 ? "" : "s"} matching "${searchQuery}"`
                    : `No posts found matching "${searchQuery}"`}
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="ml-2 underline hover:no-underline"
                  >
                    Clear search
                  </button>
                </p>
              </div>
            )}

            {/* Posts list */}
            <div className="space-y-8">
              {filteredPosts.length === 0 && !searchQuery && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No posts published yet. Check back soon!
                  </p>
                </div>
              )}

              {filteredPosts.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No posts found matching your search.
                  </p>
                </div>
              )}

              {filteredPosts.map((post) => {
                const { slug, publishedAt, title, summary, tags, readingTime } =
                  post;
                return (
                  <article
                    key={slug}
                    className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* Post meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <time dateTime={publishedAt}>
                        {new Date(publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {readingTime && (
                        <>
                          <span>•</span>
                          <span>{readingTime.text}</span>
                        </>
                      )}
                    </div>

                    {/* Post content */}
                    <div className="space-y-4">
                      <h2 className="text-xl lg:text-2xl font-bold tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {title}
                        </Link>
                      </h2>

                      {summary && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {summary}
                        </p>
                      )}

                      {/* Tags and Read more */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                        {tags && tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 3).map((tag) => (
                              <Link
                                key={tag}
                                href={`/blog?tag=${encodeURIComponent(tag)}`}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200 dark:hover:bg-primary-800 transition-colors"
                              >
                                {tag}
                              </Link>
                            ))}
                            {tags.length > 3 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                +{tags.length - 3} more
                              </span>
                            )}
                          </div>
                        )}

                        <Link
                          href={`/blog/${slug}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                          aria-label={`Read "${title}"`}
                        >
                          Read more
                          <svg
                            className="ml-1 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </main>

          {/* Sidebar - takes 1/4 on desktop, hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar posts={posts} onSearch={handleSearch} />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <MobileSidebarToggle posts={posts} onSearch={handleSearch} />
    </div>
  );
}
