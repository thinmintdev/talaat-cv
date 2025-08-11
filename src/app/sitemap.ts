import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import { RESUME_DATA } from "@/data/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = RESUME_DATA.personalWebsiteUrl;

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPosts = allPosts
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...mainPages, ...blogPosts];
}
