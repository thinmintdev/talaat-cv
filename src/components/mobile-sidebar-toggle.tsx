"use client";

import type { allPosts } from ".contentlayer/generated";
import { Filter, X } from "lucide-react";
import { useState } from "react";
import { BlogSidebar } from "./blog-sidebar";

interface MobileSidebarToggleProps {
  posts: typeof allPosts;
  onSearch: (query: string) => void;
}

export function MobileSidebarToggle({
  posts,
  onSearch,
}: MobileSidebarToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Open sidebar"
      >
        <Filter className="h-5 w-5" />
      </button>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Blog Navigation
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Sidebar content */}
            <div className="p-6">
              <BlogSidebar
                posts={posts}
                onSearch={(query) => {
                  onSearch(query);
                  setIsOpen(false); // Close sidebar after search
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
