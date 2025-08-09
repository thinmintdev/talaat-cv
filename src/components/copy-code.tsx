"use client";

import { Check, Copy, Settings } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface CopyCodeProps {
  children: React.ReactNode;
  className?: string;
}

// Global state for copy code visibility
let copyCodeEnabled = true;

export function CopyCode({ children, className = "" }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);
  const [isEnabled, setIsEnabled] = useState(copyCodeEnabled);

  useEffect(() => {
    // Listen for global toggle events
    const handleToggle = (event: CustomEvent) => {
      setIsEnabled(event.detail.enabled);
      copyCodeEnabled = event.detail.enabled;
    };

    window.addEventListener("copy-code-toggle", handleToggle as EventListener);
    return () =>
      window.removeEventListener(
        "copy-code-toggle",
        handleToggle as EventListener
      );
  }, []);

  const copyToClipboard = async () => {
    try {
      // Extract text content from the code block
      const textContent = extractTextContent(children);
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Helper function to extract text content from React nodes
  const extractTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") {
      return node;
    }
    if (typeof node === "number") {
      return node.toString();
    }
    if (React.isValidElement(node)) {
      return extractTextContent(node.props.children);
    }
    if (Array.isArray(node)) {
      return node.map(extractTextContent).join("");
    }
    return "";
  };

  if (!isEnabled) {
    return <pre className={className}>{children}</pre>;
  }

  return (
    <div className="relative group">
      <pre className={className}>{children}</pre>

      <Button
        variant="ghost"
        size="sm"
        onClick={copyToClipboard}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 h-8 w-8 p-0"
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}

// Global toggle component
export function CopyCodeToggle() {
  const [isEnabled, setIsEnabled] = useState(copyCodeEnabled);

  const toggleCopyCode = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    copyCodeEnabled = newState;

    // Dispatch custom event to update all CopyCode components
    window.dispatchEvent(
      new CustomEvent("copy-code-toggle", {
        detail: { enabled: newState },
      })
    );
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleCopyCode}
      className={`flex items-center gap-2 ${isEnabled ? "text-blue-600" : "text-gray-500"}`}
      title="Toggle copy code buttons on code blocks"
    >
      <Settings className="h-4 w-4" />
      Copy Code {isEnabled ? "On" : "Off"}
    </Button>
  );
}
