"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function SiteHeader() {
  const pathname = usePathname();

  const navigationLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 max-w-7xl">
        {/* Logo on the left */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <Image
            src="/images/at_logo svg.svg"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>

        {/* Navigation links on the right */}
        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {navigationLinks.map((link) => {
              const isCurrentPage = 
                (link.href === "/" && pathname === "/") ||
                (link.href === "/blog" && pathname?.startsWith("/blog")) ||
                (link.href === "/#contact" && pathname?.includes("#contact"));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    isCurrentPage
                      ? "text-foreground border-b-2 border-blue-600"
                      : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {pathname?.startsWith("/cv") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
              className="text-xs"
            >
              Print CV
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
