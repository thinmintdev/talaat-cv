"use client";

import { useEffect, useState } from "react";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

interface TypingTitleProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export const TypingTitle = ({
  text,
  className = "",
  speed = 150,
  delay = 500,
  showCursor = false,
}: TypingTitleProps) => {
  const { elementRef, isVisible } = useTypingAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [displayText, setDisplayText] = useState("");
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    if (!isVisible || hasStartedTyping) return;

    setHasStartedTyping(true);

    const typeText = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, delay));

      let currentText = "";

      // Type each letter individually
      for (let i = 0; i < text.length; i++) {
        currentText += text[i];
        setDisplayText(currentText);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      // Brief pause before showing final cursor
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Always show final cursor after typing is complete
      setShowFinalCursor(true);
    };

    typeText();
  }, [isVisible, text, speed, delay, hasStartedTyping]);

  return (
    <div ref={elementRef} className="relative">
      {isVisible ? (
        <div className="relative inline-block">
          <span className={className}>{displayText}</span>
          {/* Blue vertical cursor while typing */}
          {displayText && displayText.length < text.length && (
            <div className="inline-block w-[0.15em] h-[1em] bg-blue-700 ml-[0.05em] align-bottom animate-pulse" />
          )}
          {/* Final blinking vertical cursor */}
          {showFinalCursor && (
            <div className="inline-block w-[0.15em] h-[1em] bg-blue-700 ml-[0.05em] align-bottom animate-pulse" />
          )}
        </div>
      ) : (
        <span className={`${className} opacity-0`}>{text}</span>
      )}
    </div>
  );
};
