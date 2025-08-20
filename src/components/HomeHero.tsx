"use client";

import { useEffect, useState } from "react";
import { HOMEPAGE_DATA } from "@/data/homepage-data";

export const HomeHero = () => {
  const [showServices, setShowServices] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [devText, setDevText] = useState("");

  const { hero } = HOMEPAGE_DATA;
  const { services, nameLetters, devLetters, timing, layout, styles } = hero;
  const defaultLineIndex = services.length - 1;

  useEffect(() => {
    const typeText = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, timing.initialDelay));

      let currentText = "";

      // Type each letter individually
      for (let i = 0; i < nameLetters.length; i++) {
        currentText += nameLetters[i];
        setDisplayText(currentText);
        await new Promise((resolve) => setTimeout(resolve, timing.letterDelay));
      }

      // Brief pause before typing .DEV
      await new Promise((resolve) => setTimeout(resolve, timing.devPauseDelay));

      // Type .DEV letter by letter
      let currentDevText = "";
      for (let i = 0; i < devLetters.length; i++) {
        currentDevText += devLetters[i];
        setDevText(currentDevText);
        await new Promise((resolve) => setTimeout(resolve, timing.letterDelay));
      }

      // Brief pause after .dev typing completes
      await new Promise((resolve) =>
        setTimeout(resolve, timing.finalCursorDelay)
      );

      // Show final cursor and start services animation
      setShowFinalCursor(true);
      
      // Additional delay before services start loading
      await new Promise((resolve) =>
        setTimeout(resolve, 300)
      );
      
      setShowServices(true);
    };

    typeText();
  }, [nameLetters, devLetters, timing]);

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
                  lineHeight: layout.lineHeight,
                }}
                className="font-black relative inline-block"
              >
                <span>
                  {displayText}
                </span>

                {/* Blue underline cursor - shows during main name typing */}
                {!showFinalCursor && displayText && !devText && (
                  <div
                    className="inline-block bg-blue-600 ml-[0.05em] align-bottom animate-pulse"
                    style={{
                      width: styles.cursorWidth,
                      height: styles.cursorHeight,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* .DEV text on its own line below the main name */}
          <div className="mt-2 lg:mt-4">
            {devText && (
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-600 relative">
                {devText}
                {/* Blue cursor - shows while typing or at rest after DEV */}
                {devText && (devText.length < devLetters.length || showFinalCursor) && (
                  <div
                    className="inline-block bg-blue-600 ml-[0.05em] align-bottom animate-pulse"
                    style={{
                      width: "0.35em",
                      height: "0.05em",
                    }}
                  />
                )}
              </span>
            )}
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
                transitionDelay: showServices
                  ? `${index * timing.serviceStaggerDelay}ms`
                  : "0ms",
                minHeight: `${layout.minHeight}px`,
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
            className={`absolute bg-blue-600 transition-all duration-300 ease-out mt-3 lg:left-12 left-0 ${
              showServices ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: `${styles.lineWidth}px`,
              height: `${styles.lineHeight * 4}px`,
              top: `${(hoveredIndex !== null ? hoveredIndex : defaultLineIndex) * layout.minHeight + 40}px`,
              transitionDelay: showServices
                ? `${timing.lineTransitionDelay}ms`
                : "0ms",
            }}
          />
        </div>
      </div>
    </div>
  );
};
