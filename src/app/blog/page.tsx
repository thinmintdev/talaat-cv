import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import { BlogPageClient } from "./blog-page-client";
import { generateBlogStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, ideas, and insights about software development, technology, and more.",
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

  const blogStructuredData = generateBlogStructuredData();

  return (
    <>
      {/* Blog Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      <BlogPageClient posts={posts} />
    </>
  );
}
