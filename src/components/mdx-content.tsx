"use client";

import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";

// Custom MDX Components
const mdxComponents = {
  // Enhanced Image component
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8 overflow-hidden rounded-lg border bg-muted">
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={600}
        className="w-full h-auto object-cover"
        {...props}
      />
    </div>
  ),

  // Enhanced Link component
  a: ({ href, children, ...props }: any) => {
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
  pre: ({ children, ...props }: any) => (
    <pre
      className="overflow-x-auto p-4 rounded-lg bg-gray-900 text-gray-100 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // Inline code
  code: ({ children, ...props }: any) => (
    <code
      className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),

  // Enhanced headings with better spacing
  h1: ({ children, ...props }: any) => (
    <h1 className="text-3xl font-bold mb-6 mt-10 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8 first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl font-medium mb-3 mt-6 first:mt-0" {...props}>
      {children}
    </h3>
  ),

  // Enhanced lists
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside space-y-2 mb-6" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-6" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-muted-foreground leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Enhanced paragraphs
  p: ({ children, ...props }: any) => (
    <p className="mb-4 text-muted-foreground leading-relaxed" {...props}>
      {children}
    </p>
  ),

  // Blockquotes
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic bg-muted/50 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Tables
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border rounded-lg"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: any) => (
    <th
      className="border border-border p-3 bg-muted font-semibold text-left"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="border border-border p-3 text-muted-foreground" {...props}>
      {children}
    </td>
  ),

  // Horizontal rule
  hr: ({ ...props }: any) => <hr className="my-8 border-border" {...props} />,
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
