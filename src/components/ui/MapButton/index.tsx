import { useState } from "react";
import { Button, Modal } from "@/components/ui";
import { cn } from "@/utils";

interface MapButtonProps {
  mapLink?: string;
  disabled?: boolean;
  titleName?: string;
  children?: React.ReactNode;
  className?: string;
}

const mapButtonStyles = {
  base: "flex-1 min-w-[48px] py-2 rounded font-semibold transition-all duration-200 text-xs border",
  enabled:
    "bg-gray-700/30 text-gray-400 border-gray-600/30 hover:border-gray-500/50 hover:text-gray-300 cursor-pointer",
  disabled: "bg-gray-700/30 text-gray-600 border-gray-600/30 opacity-50 cursor-not-allowed",
  inline:
    "inline-flex items-center px-2 py-1 bg-gray-700/30 text-gray-400 border border-gray-600/30 hover:border-gray-500/50 hover:text-gray-300 rounded text-xs font-semibold transition-all duration-200 cursor-pointer",
} as const;

export function MapButton({ mapLink, disabled, titleName, children, className }: MapButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    if (mapLink) {
      setIsLoading(true);
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsLoading(true);
  };

  const isEnabled = mapLink && !disabled;
  const isInlineStyle = !!children;

  const getEmbedMapLink = (mapLink: string): string => {
    if (!mapLink?.includes("mapgenie")) return mapLink;
    return `${mapLink}${mapLink?.includes("?") ? "&" : "?"}embed=light`;
  };

  if (!mapLink) {
    return null;
  }

  return (
    <>
      <Button
        className={cn(
          isInlineStyle ? mapButtonStyles.inline : mapButtonStyles.base,
          !isInlineStyle && (isEnabled ? mapButtonStyles.enabled : mapButtonStyles.disabled),
          className
        )}
        onClick={handleClick}
        disabled={!isEnabled}
        tabIndex={isEnabled ? 0 : -1}
        aria-label={isEnabled ? "Open map location" : "Map location not available"}
      >
        {children || "Map"}
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleClose} title={titleName ? `🗺️ ${titleName}` : "🗺️"}>
        <div className="flex justify-end px-2">
          <a
            href={getEmbedMapLink(mapLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xs text-gray-500 hover:text-blue-400 transition-colors underline decoration-dotted"
            onClick={e => e.stopPropagation()}
          >
            Open this in a new tab ↗
          </a>
        </div>

        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/95 rounded-lg border-2 border-gray-700/50">
              <div className="animate-shimmer bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] text-gray-400 px-6 py-3 rounded">
                Loading map...
              </div>
            </div>
          )}
          <iframe
            src={getEmbedMapLink(mapLink)}
            className="w-full h-[50vh] rounded-lg border-2 border-gray-700/50 shadow-lg"
            title="Map Location"
            sandbox="allow-scripts allow-same-origin"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </Modal>
    </>
  );
}
