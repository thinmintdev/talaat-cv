"use client";

import { Check, Link2, Linkedin, Share2, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BlogShareProps {
  title: string;
  url: string;
}

export function BlogShare({ title, url }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title: title,
    url: url,
    twitterText: `Check out this article: ${title}`,
    linkedinText: `I found this article interesting: ${title}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.twitterText)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, "_blank", "width=600,height=400");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          url: url,
        });
      } catch (err) {
        console.error("Error sharing: ", err);
      }
    }
  };

  return (
    <div className="py-8 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Share this article
          </h3>
          <p className="text-sm text-gray-600">
            Found this helpful? Share it with others!
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Native Share (mobile) */}
          {typeof navigator !== "undefined" && navigator.share && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNativeShare}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </Button>
          )}

          {/* Twitter */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleTwitterShare}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50"
            title="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
            <span className="hidden sm:inline">Twitter</span>
          </Button>

          {/* LinkedIn */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLinkedInShare}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50"
            title="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>

          {/* Copy Link */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyLink}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            title={copied ? "Link copied!" : "Copy link"}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="hidden sm:inline text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
