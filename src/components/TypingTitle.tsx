"use client";

import { TypeAnimation } from "react-type-animation";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

interface TypingTitleProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  cursorClassName?: string;
}

export const TypingTitle = ({
  text,
  className = "",
  speed = 40,
  delay = 500,
  showCursor = true,
  cursorClassName = "typing-cursor bg-blue-700 h-1 w-4 ml-1 inline-block align-bottom",
}: TypingTitleProps) => {
  const { elementRef, isVisible } = useTypingAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={elementRef} className="relative">
      {isVisible ? (
        <>
          <TypeAnimation
            sequence={[delay, text]}
            wrapper="span"
            speed={speed as any}
            style={{
              fontSize: "inherit",
              display: "inline-block",
            }}
            cursor={false}
            repeat={0}
            className={className}
          />
          {showCursor && <span className={cursorClassName} />}
        </>
      ) : (
        <span className={`${className} opacity-0`}>{text}</span>
      )}
    </div>
  );
};
