"use client";

import { useEffect, useState } from "react";

const services = [
  "FULL STACK",
  "WEB DEVELOPER",
  "DESIGN & BRANDING",
  "WORDPRESS EXPERT",
  "SAAS DEVELOPMENT",
  "AI SOLUTIONS",
];

export const HomeHero = () => {
  const [showServices, setShowServices] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [devText, setDevText] = useState("");
  const defaultLineIndex = services.length - 1; // Last service by default

  const letters = ["t", "a", "l", "\n", "a", "a", "t"];
  const devLetters = [".D", "E", "V"];

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

      // Brief pause before typing .DEV
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Type .DEV letter by letter
      let currentDevText = "";
      for (let i = 0; i < devLetters.length; i++) {
        currentDevText += devLetters[i];
        setDevText(currentDevText);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      // Brief pause before showing final cursor
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Show final cursor and start services
      setShowFinalCursor(true);
      setShowServices(true);
    };

    typeText();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side - Name Animation */}
        <div className="lg:col-span-7 flex flex-col space-y-0">
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
                {/* .DEV in blue typing naturally 
                {devText && (
                  <span className="text-2xl md:text-[3rem] lg:text-[3rem] xl:text-[4rem] text-blue-600">{devText}</span>
                )} */}

                {/* Blue underline cursor - shows during typing */}
                {!showFinalCursor && (displayText || devText) && (
                  <div className="inline-block w-[0.35em] h-[0.05em] bg-blue-600 ml-[0.05em] align-bottom animate-pulse" />
                )}
                {/* Final blinking cursor under ".dev" */}
                {showFinalCursor && (
                  <div className="inline-block w-[0.35em] h-[0.05em] bg-blue-600 ml-[0.05em] align-bottom animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Services Dropdown */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:pl-12 relative">
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
                minHeight: "58px",
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
            className={`absolute w-32 h-1 bg-blue-600 transition-all duration-300 ease-out mt-2 lg:left-12 left-0 ${
              showServices ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `${(hoveredIndex !== null ? hoveredIndex : defaultLineIndex) * 58 + 40}px`,
              transitionDelay: showServices ? "400ms" : "0ms",
            }}
          />
        </div>
      </div>
    </div>
  );
};
