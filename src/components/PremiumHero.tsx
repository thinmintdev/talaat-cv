"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const services = [
  "IT CONSULTING",
  "MANAGED SERVICES",
  "WORDPRESS EXPERT",
  "CLOUD SAAS",
  "MANAGED SERVICES",
];

export const PremiumHero = () => {
  const [showServices, setShowServices] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const defaultLineIndex = services.length - 1; // Last service by default

  useEffect(() => {
    // Start showing services after the name animation completes
    const servicesTimer = setTimeout(() => {
      setShowServices(true);
    }, 3500); // Delay to sync with typing animation

    // Show .DEV after the typing animation completes
    const devTimer = setTimeout(() => {
      setShowDev(true);
    }, 4200); // Delay to show .DEV after name completes

    return () => {
      clearTimeout(servicesTimer);
      clearTimeout(devTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Name Animation */}
        <div className="flex flex-col space-y-0">
          <div className="overflow-hidden">
            <div className="text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black text-gray-900 leading-none tracking-tight relative">
              <TypeAnimation
                sequence={[
                  1000, // Initial delay
                  "ta",
                  800,
                  "ta\nla",
                  800,
                  "ta\nla\nat",
                  2000, // Hold final state
                ]}
                wrapper="div"
                speed={30}
                style={{
                  whiteSpace: "pre-line",
                  lineHeight: "0.8",
                }}
                cursor={false}
                repeat={0}
                className="font-black relative inline-block"
              />
              {/* .DEV suffix inline with "at" */}
              <span
                className={`text-blue-600 transition-all duration-500 ease-out inline-block ${
                  showDev ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{
                  fontSize: "0.35em",
                  verticalAlign: "baseline",
                  marginLeft: "0.1em",
                }}
              >
                .DEV
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Services Dropdown */}
        <div className="flex flex-col justify-center lg:pl-8 relative">
          {services.map((service, index) => (
            <div
              key={`${service}-${index}`}
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
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition-colors duration-300 cursor-pointer relative z-10">
                {service}
              </div>
            </div>
          ))}

          {/* Interactive blue line that follows hover */}
          <div
            className={`absolute w-32 h-1 bg-blue-600 transition-all duration-300 ease-out lg:left-8 left-0 ${
              showServices ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `${(hoveredIndex !== null ? hoveredIndex : defaultLineIndex) * 48 + 40}px`,
              transitionDelay: showServices ? "800ms" : "0ms",
            }}
          />
        </div>
      </div>
    </div>
  );
};
