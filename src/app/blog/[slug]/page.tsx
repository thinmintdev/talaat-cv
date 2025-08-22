import { allPosts } from "contentlayer/generated";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogNavigation } from "@/components/blog-navigation";
import { BlogShare } from "@/components/blog-share";
import { CopyCodeToggle } from "@/components/copy-code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateArticleStructuredData } from "@/lib/structured-data";
import styles from "./blog-styles.module.css";
import { MDXContent } from "./mdx-content";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostFromParams(slug);

  if (!post) {
    return {};
  }

  const publishedTime = new Date(post.publishedAt);
  const modifiedTime = new Date(); // Could be from post.updatedAt if available

  return {
    title: `${post.title} | Alexander Talaat`,
    description: post.summary,
    keywords: [
      ...post.tags,
      "web development",
      "software engineering",
      "react",
      "next.js",
      "typescript",
      "tutorial",
      "blog",
    ],
    authors: [{ name: "Alexander Talaat" }],
    creator: "Alexander Talaat",
    publisher: "Alexander Talaat",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: publishedTime.toISOString(),
      modifiedTime: modifiedTime.toISOString(),
      authors: ["Alexander Talaat"],
      tags: post.tags,
      section: "Technology",
      siteName: "Alexander Talaat - Developer Blog",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      creator: "@your_twitter", // Update with actual Twitter handle
    },
    alternates: {
      canonical: `https://talaat.dev/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostFromParams(slug);

  if (!post) {
    notFound();
  }

  // const MDXContent = useMDXComponent(post.body.code);
  const articleStructuredData = generateArticleStructuredData(post);

  return (
    <>
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog */}
          <div className="mb-8 flex items-center justify-between">
            <Button variant="ghost" asChild={true}>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <CopyCodeToggle />
          </div>

          {/* Article header */}
          <article>
            <header className="mb-8">
              <div className="mb-4">
                <time className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {post.readingTime.text}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight mb-2">
                {post.title}
              </h1>
              <div className="w-[75px] h-[5px] mb-4 rounded-full bg-blue-700" />

              <p className="text-xl text-muted-foreground mb-6">
                {post.summary}
              </p>

              {post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Article content */}
            <MDXContent
              code={post.body.code}
              className={`prose prose-lg max-w-none prose-code:bg-gray-100 ${styles.prose}`}
            />
          </article>

          {/* Share Section */}
          <BlogShare
            title={post.title}
            url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://talaat.dev"}/blog/${post.slug}`}
          />

          {/* Navigation */}
          <BlogNavigation currentSlug={post.slug} posts={allPosts} />

          {/*          <BlogNavigation
            currentSlug={post.slug}
            posts={allPosts.filter((post) => !post.draft)}
tton variant="ghost" asChild={true}>
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
