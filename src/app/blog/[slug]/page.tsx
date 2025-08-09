import { allPosts } from ".contentlayer/generated";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { BlogNavigation } from "@/components/blog-navigation";
import { BlogShare } from "@/components/blog-share";
import { CopyCode, CopyCodeToggle } from "@/components/copy-code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PostPageProps {
  params: {
    slug: string;
  };
}

function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostFromParams(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const MDXComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold tracking-tight mb-6" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-semibold mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 space-y-2 blog-ul" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 blog-ol" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
    // Check if this li is inside a ul or ol by looking at the parent context
    // We'll use CSS classes to handle this instead
    return (
      <li className="leading-7" {...props}>
        {children}
      </li>
    );
  },
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-100 text-gray-900 rounded px-1 py-0.5 text-sm font-mono !text-gray-900"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <CopyCode
      className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4"
      {...props}
    >
      {children}
    </CopyCode>
  ),
  a: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" {...props}>
      {children}
    </strong>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-300" {...props} />
  ),
};

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams(params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Blog post styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Unordered lists: custom blue square bullets */
            .blog-ul {
              list-style: none !important;
              padding-left: 0 !important;
            }
            .blog-ul li {
              display: flex !important;
              align-items: flex-start !important;
              gap: 8px !important;
              list-style: none !important;
            }
            .blog-ul li:before {
              content: '' !important;
              display: inline-block !important;
              width: 8px !important;
              height: 8px !important;
              margin-top: 10px !important;
              background-color: rgb(37 99 235) !important;
              flex-shrink: 0 !important;
            }
            
            /* Ordered lists: keep native numbers */
            .blog-ol li {
              display: list-item !important;
            }
            .blog-ol li:before {
              content: none !important;
            }
          `,
          }}
        />

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

            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">{post.summary}</p>

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
          <div className="prose prose-lg max-w-none prose-code:text-gray-900 prose-code:bg-gray-100">
            <MDXContent components={MDXComponents} />
          </div>
        </article>

        {/* Share Section */}
        <BlogShare
          title={post.title}
          url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://talaat.dev"}/blog/${post.slug}`}
        />

        {/* Navigation */}
        <BlogNavigation currentSlug={post.slug} posts={allPosts} />

        {/* Footer */}
        <footer className="pt-8 border-t">
          <div className="flex justify-center">
            <Button variant="ghost" asChild={true}>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
