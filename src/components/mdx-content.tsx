"use client";

import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// Custom MDX Components
type ImgProps = ComponentPropsWithoutRef<"img">;
type AnchorProps = {
  href?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"a">;
type PreProps = ComponentPropsWithoutRef<"pre"> & { children?: ReactNode };
type CodeProps = ComponentPropsWithoutRef<"code"> & { children?: ReactNode };
type HeadingProps = ComponentPropsWithoutRef<"h1"> & { children?: ReactNode };
type ListProps = ComponentPropsWithoutRef<"ul"> & { children?: ReactNode };
type OrderedListProps = ComponentPropsWithoutRef<"ol"> & {
  children?: ReactNode;
};
type LiProps = ComponentPropsWithoutRef<"li"> & { children?: ReactNode };
type PProps = ComponentPropsWithoutRef<"p"> & { children?: ReactNode };
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
  children?: ReactNode;
};
type TableProps = ComponentPropsWithoutRef<"table"> & { children?: ReactNode };
type ThProps = ComponentPropsWithoutRef<"th"> & { children?: ReactNode };
type TdProps = ComponentPropsWithoutRef<"td"> & { children?: ReactNode };
type HrProps = ComponentPropsWithoutRef<"hr">;

const mdxComponents = {
  // Enhanced Image component
  img: ({ src, alt, width, height, ...props }: ImgProps) => {
    if (!src) return null;

    return (
      <div className="my-8 overflow-hidden rounded-lg border bg-muted">
        <Image
          src={src}
          alt={alt || ""}
          width={typeof width === "number" ? width : 800}
          height={typeof height === "number" ? height : 600}
          className="w-full h-auto object-cover"
          {...props}
        />
      </div>
    );
  },

  // Enhanced Link component
  a: ({ href, children, ...props }: AnchorProps) => {
    const isExternal = href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline font-medium"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href || "#"}
        className="text-blue-600 hover:text-blue-800 underline font-medium"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Enhanced code blocks
  pre: ({ children, ...props }: PreProps) => (
    <pre
      className="overflow-x-auto p-4 rounded-lg bg-gray-900 text-gray-100 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // Inline code
  code: ({ children, ...props }: CodeProps) => (
    <code
      className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),

  // Enhanced headings with better spacing
  h1: ({ children, ...props }: HeadingProps) => (
    <h1 className="text-3xl font-bold mb-6 mt-10 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8 first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3 className="text-xl font-medium mb-3 mt-6 first:mt-0" {...props}>
      {children}
    </h3>
  ),

  // Enhanced lists
  ul: ({ children, ...props }: ListProps) => (
    <ul className="list-disc list-inside space-y-2 mb-6" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: OrderedListProps) => (
    <ol className="list-decimal list-inside space-y-2 mb-6" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: LiProps) => (
    <li className="text-muted-foreground leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Enhanced paragraphs
  p: ({ children, ...props }: PProps) => (
    <p className="mb-4 text-muted-foreground leading-relaxed" {...props}>
      {children}
    </p>
  ),

  // Blockquotes
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic bg-muted/50 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Tables
  table: ({ children, ...props }: TableProps) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border rounded-lg"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: ThProps) => (
    <th
      className="border border-border p-3 bg-muted font-semibold text-left"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: TdProps) => (
    <td className="border border-border p-3 text-muted-foreground" {...props}>
      {children}
    </td>
  ),

  // Horizontal rule
  hr: ({ ...props }: HrProps) => (
    <hr className="my-8 border-border" {...props} />
  ),
};

interface MDXContentProps {
  code: string;
  className?: string;
}

export function MDXContent({ code, className = "" }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div className={className}>
      <Component components={mdxComponents} />
    </div>
  );
}
