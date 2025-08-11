"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { RESUME_DATA } from "@/data/resume-data";

export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative isolate overflow-hidden bg-white py-24 md:h-screen"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/40 via-blue-50/20 to-white" />

      {/* Programming symbols pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
          <pattern
            id="programming-symbols"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="50"
              y="50"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="24"
              transform="rotate(-15)"
            >
              &lt;/&gt;
            </text>
            <text
              x="150"
              y="100"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="20"
              transform="rotate(10)"
            >
              {}
            </text>
            <text
              x="250"
              y="80"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="18"
              transform="rotate(-5)"
            >
              =&gt;
            </text>
            <text
              x="100"
              y="200"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="22"
              transform="rotate(15)"
            >
              []
            </text>
            <text
              x="300"
              y="180"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="20"
              transform="rotate(-10)"
            >
              &lt;&gt;
            </text>
            <text
              x="200"
              y="250"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="24"
              transform="rotate(5)"
            >
              ()
            </text>
            <text
              x="50"
              y="320"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="18"
              transform="rotate(-8)"
            >
              ::
            </text>
            <text
              x="350"
              y="300"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="22"
              transform="rotate(12)"
            >
              ==
            </text>
            <text
              x="150"
              y="350"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="20"
              transform="rotate(-15)"
            >
              ++
            </text>
            <text
              x="250"
              y="370"
              fill="#1d4ed8"
              fontFamily="monospace"
              fontSize="24"
              transform="rotate(8)"
            >
              ;
            </text>
          </pattern>
        </defs>
        <rect
          fill="url(#programming-symbols)"
          width="100%"
          height="100%"
          opacity="0.2"
        />
        <rect
          fill="url(#grid-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 ">
            Hello! 👋
          </h2>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h1 className="text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 min-h-[1.2em] relative">
              I'm{" "}
              <span className="text-blue-700">
                <TypeAnimation
                  sequence={[
                    500, // Initial delay
                    "Alexander Talaat",
                    2000, // Final pause
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{
                    fontSize: "inherit",
                    display: "inline-block",
                  }}
                  cursor={false}
                  repeat={0}
                />
                {/* Custom blue underline cursor */}
                <span className="typing-cursor bg-blue-700 h-1 w-4 ml-1 inline-block align-bottom" />
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600">
              <TypeAnimation
                sequence={[
                  3000, // Wait for name animation to complete
                  "Full Stack Developer. WordPress Expert. IT Specialist.",
                  2000, // Final pause
                ]}
                wrapper="span"
                speed={35}
                style={{
                  fontSize: "inherit",
                  display: "inline-block",
                }}
                cursor={false}
                repeat={0}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 ">
        {RESUME_DATA.contact.social.map((social) => {
          const IconComponent = {
            github: Github,
            linkedin: Linkedin,
            x: Twitter,
          }[social.icon as "github" | "linkedin" | "x"];

          if (!IconComponent) return null;

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="transition-colors duration-300 hover:text-blue-600"
            >
              <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </a>
          );
        })}
        <a
          href={`mailto:${RESUME_DATA.contact.email}`}
          aria-label="Email"
          className="transition-colors duration-300 hover:text-blue-600"
        >
          <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
        </a>
      </div>
    </div>
  );
};
