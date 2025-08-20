import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t print:hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Logo, Name and title */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <Image
              src="/images/at_logo svg.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                {RESUME_DATA.name}
              </h3>
              <p className="text-sm text-gray-600">{RESUME_DATA.about}</p>
            </div>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-4">
            {RESUME_DATA.contact.social.map((social) => {
              const IconComponent = {
                github: Github,
                linkedin: Linkedin,
                x: () => (
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="X (Twitter)"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              }[social.icon as "github" | "linkedin" | "x"];

              if (!IconComponent) return null;

              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent />
                </Link>
              );
            })}
            <Link
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} {RESUME_DATA.name} - thinmint.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
