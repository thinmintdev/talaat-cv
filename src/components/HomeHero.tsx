"use client";

import { useEffect, useState } from "react";

const services = [
  "WEB DEVELOPMENT",
  "DESIGN & BRANDING",
  "CUSTOM WORDPRESS",
  "CLOUD PLATFORMS",
  "MANAGED SERVICES",
  "AI SOLUTIONS",
  "WEB & DATA HOSTING",
  "CONTINUED SUPPORT"
];

export const HomeHero = () => {
  const [showServices, setShowServices] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const defaultLineIndex = services.length - 1; // Last service by default

  const letters = ["t", "a", "l", "\n", "a", "a", "t"];

  useEffect(() => {
    const typeText = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let currentText = "";

      // Type each letter individually
      for (let i = 0; i < letters.length; i++) {
        currentText += letters[i];
        setDisplayText(currentText);
        await new Promise((resolve) => setTimeout(resolve, 300)); // Constant 300ms between letters
      }

      // Brief pause before showing .DEV
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Show .DEV
      setShowDev(true);

      // Brief pause before showing final cursor
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Show final cursor and start services
      setShowFinalCursor(true);
      setShowServices(true);
    };

    typeText();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Name Animation */}
        <div className="flex flex-col space-y-0">
          <div className="overflow-hidden">
            <div className="text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-black text-gray-900 leading-none tracking-tight relative">
              <div
                style={{
                  whiteSpace: "pre-line",
                  lineHeight: "0.8",
                }}
                className="font-black relative inline-block"
              >
                {displayText}
                {/* .DEV in blue inline with "at" */}
                {showDev && (
                  <span className="text-2xl md:text-[3rem] lg:text-[3rem] xl:text-[4rem] text-blue-600">.DEV</span>
                )}
                {/* Blue underline cursor */}
                {!showFinalCursor && displayText && (
                  <div className="inline-block w-[0.4em] h-[0.05em] bg-blue-600 ml-[0.05em] align-bottom animate-pulse" />
                )}
              </div>
              {/* Final blinking cursor under ".dev" */}
              {showFinalCursor && (
                <div className="absolute bottom-0 w-[0.4em] h-[0.05em] bg-blue-600 animate-pulse" style={{ left: 'calc(100% - 0.51em)' }} />
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Services Dropdown */}
        <div className="flex flex-col justify-center lg:pl-8 relative">
          {services.map((service, index) => (
            <div
              key={service}
              className={`transform transition-all duration-700 ease-out relative ${
                showServices
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: showServices ? `${index * 150}ms` : "0ms",
                minHeight: "48px",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition-colors duration-300 cursor-pointer relative z-10">
                {service}
              </div>
            </div>
          ))}

          {/* Interactive blue line that follows hover */}
          <div
            className={`absolute w-32 h-1 bg-blue-600 transition-all duration-300 ease-out mt-1 lg:left-8 left-0 ${
              showServices ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `${(hoveredIndex !== null ? hoveredIndex : defaultLineIndex) * 48 + 40}px`,
              transitionDelay: showServices ? "400ms" : "0ms",
            }}
          />
        </div>
      </div>
    </div>
  );
};
