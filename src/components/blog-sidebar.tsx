import type { allPosts } from ".contentlayer/generated";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { BlogSearch } from "./blog-search";

interface BlogSidebarProps {
  posts: typeof allPosts;
  onSearch: (query: string) => void;
}

export function BlogSidebar({ posts, onSearch }: BlogSidebarProps) {
  // Get unique categories/tags from posts
  const allTags = posts.flatMap((post) => post.tags || []);
  const categoryCount = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const sortedCategories = Object.entries(categoryCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10); // Show top 10 categories

  // Get 5 most recent posts
  const recentPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Search Posts
          </h3>
          <div className="w-[50px] h-[3px] mt-1 rounded-full bg-blue-700" />
        </div>
        <BlogSearch onSearch={onSearch} />
      </div>

      {/* Categories */}
      {sortedCategories.length > 0 && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Categories
            </h3>
            <div className="w-[50px] h-[3px] mt-1 rounded-full bg-blue-700" />
          </div>
          <div className="space-y-2">
            {sortedCategories.map(([category, count]) => (
              <Link
                key={category}
                href={`/blog?tag=${encodeURIComponent(category)}`}
                className="flex items-center justify-between px-3 py-2 text-sm rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="capitalize">{category}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full dark:bg-gray-700 dark:text-gray-400">
                  {count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Recent Posts
            </h3>
            <div className="w-[50px] h-[3px] mt-1 rounded-full bg-blue-700" />
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block space-y-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 leading-tight">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <time dateTime={post.publishedAt}>
                      {formatDistanceToNow(new Date(post.publishedAt), {
                        addSuffix: true,
                      })}
                    </time>
                    {post.readingTime && (
                      <>
                        <span>•</span>
                        <span>{post.readingTime.text}</span>
                      </>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* All Posts Link */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/blog"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          View All Posts ({posts.length})
        </Link>
      </div>
    </aside>
  );
}
