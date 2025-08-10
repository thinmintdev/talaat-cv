"use client";

import type { allPosts } from ".contentlayer/generated";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { BlogSidebar } from "@/components/blog-sidebar";
import { MobileSidebarToggle } from "@/components/mobile-sidebar-toggle";
import { BlogPagination } from "@/components/BlogPagination";

interface BlogPageClientProps {
  posts: typeof allPosts;
}

const POSTS_PER_PAGE = 6;

export function BlogPageClient({ posts }: BlogPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get URL parameters
  const urlSearchQuery = searchParams.get("search") || "";
  const urlTag = searchParams.get("tag") || "";
  const urlPage = parseInt(searchParams.get("page") || "1");

  // Local state
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [selectedTag, setSelectedTag] = useState(urlTag);
  const [currentPage, setCurrentPage] = useState(urlPage);

  // Update state when URL changes
  useEffect(() => {
    setSearchQuery(urlSearchQuery);
    setSelectedTag(urlTag);
    setCurrentPage(urlPage);
  }, [urlSearchQuery, urlTag, urlPage]);

  // Update URL when filters change
  const updateURL = (newSearch: string, newTag: string, newPage: number) => {
    const params = new URLSearchParams();
    
    if (newSearch) params.set("search", newSearch);
    if (newTag) params.set("tag", newTag);
    if (newPage > 1) params.set("page", newPage.toString());
    
    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    
    router.replace(url, { scroll: false });
  };

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags?.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter((post) =>
        post.tags?.some((tag) =>
          tag.toLowerCase() === selectedTag.toLowerCase()
        )
      );
    }

    return filtered;
  }, [posts, searchQuery, selectedTag]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  
  const paginatedPosts = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, validCurrentPage]);

  // Handler functions
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    updateURL(query, selectedTag, 1);
  };

  const handleTagSelect = (tag: string) => {
    const newTag = selectedTag === tag ? "" : tag;
    setSelectedTag(newTag);
    setCurrentPage(1);
    updateURL(searchQuery, newTag, 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL(searchQuery, selectedTag, page);
    // Smooth scroll to top of blog section
    const blogSection = document.getElementById("blog-content");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
    setCurrentPage(1);
    router.replace(pathname, { scroll: false });
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
            <div className="w-[75px] h-[5px] mt-2 rounded-full bg-blue-700 mx-auto lg:mx-0" />
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
            {/* Active filters indicator */}
            {(searchQuery || selectedTag) && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                <div className="flex flex-wrap items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                  <span>Active filters:</span>
                  {searchQuery && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                      <span>Search: "{searchQuery}"</span>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          updateURL("", selectedTag, 1);
                        }}
                        className="ml-1 hover:text-blue-900 dark:hover:text-blue-100"
                        aria-label="Clear search"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  {selectedTag && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-800/50 rounded-full">
                      <span>Tag: {selectedTag}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTag("");
                          updateURL(searchQuery, "", 1);
                        }}
                        className="ml-1 hover:text-blue-900 dark:hover:text-blue-100"
                        aria-label="Clear tag filter"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="ml-2 underline hover:no-underline"
                  >
                    Clear all
                  </button>
                </div>
                <p className="mt-2 text-sm">
                  Showing {paginatedPosts.length} of {filteredPosts.length} posts
                  {totalPages > 1 && ` (page ${validCurrentPage} of ${totalPages})`}
                </p>
              </div>
            )}

            {/* Posts list */}
            <div id="blog-content" className="space-y-8">
              {filteredPosts.length === 0 && !searchQuery && !selectedTag && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No posts published yet. Check back soon!
                  </p>
                </div>
              )}

              {filteredPosts.length === 0 && (searchQuery || selectedTag) && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No posts found matching your filters.
                  </p>
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="mt-4 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {paginatedPosts.map((post) => {
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
                              <button
                                key={tag}
                                type="button"
                                onClick={() => handleTagSelect(tag)}
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                  selectedTag === tag
                                    ? "bg-blue-600 text-white"
                                    : "bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200 dark:hover:bg-primary-800"
                                }`}
                              >
                                {tag}
                              </button>
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <BlogPagination
                  currentPage={validCurrentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </main>

          {/* Sidebar - takes 1/4 on desktop, hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar 
                posts={posts} 
                onSearch={handleSearch}
                selectedTag={selectedTag}
                onTagSelect={handleTagSelect}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <MobileSidebarToggle 
        posts={posts} 
        onSearch={handleSearch}
        selectedTag={selectedTag}
        onTagSelect={handleTagSelect}
      />
    </div>
  );
}
