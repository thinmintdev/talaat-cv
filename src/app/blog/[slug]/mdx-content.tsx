"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import { CopyCode } from "@/components/copy-code";

const MDXComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <div className="mt-8 first:mt-0">
      <h1 className="text-4xl font-bold tracking-tight mb-2" {...props}>
        {children}
      </h1>
      <div className="w-[75px] h-[5px] mb-6 rounded-full bg-blue-700" />
    </div>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-2" {...props}>
        {children}
      </h2>
      <div className="w-[60px] h-[4px] mb-4 rounded-full bg-blue-700" />
    </div>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-1" {...props}>
        {children}
      </h3>
      <div className="w-[50px] h-[3px] mb-3 rounded-full bg-blue-700" />
    </div>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <div className="mt-4">
      <h4 className="text-xl font-semibold mb-1" {...props}>
        {children}
      </h4>
      <div className="w-[40px] h-[3px] mb-2 rounded-full bg-blue-700" />
    </div>
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
      className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono !text-gray-900"
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

interface MDXContentProps {
  code: string;
  className?: string;
}

export function MDXContent({ code, className }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return (
    <div className={className}>
      <Component components={MDXComponents} />
    </div>
  );
}
