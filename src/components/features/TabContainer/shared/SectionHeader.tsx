import type { ReactNode } from "react";

interface SectionHeaderProps {
  name?: string;
  description?: string;
  descriptionMarkup?: ReactNode | ((showSpoilers?: boolean) => ReactNode);
  showSpoilers?: boolean;
}

export function SectionHeader({ name, description, descriptionMarkup, showSpoilers }: SectionHeaderProps) {
  if (!name && !description && !descriptionMarkup) {
    return null;
  }

  return (
    <div className="bg-gray-800/30 border-2 border-gray-600/30 rounded-t-lg px-4 py-3 border-b-0">
      {name && <h2 className="text-xl font-bold text-blue-200">{name}</h2>}
      {description && description.trim() && <p className="text-sm text-gray-300 mt-1">{description}</p>}
      {descriptionMarkup && (
        <div className="text-sm text-gray-300 mt-1">
          {typeof descriptionMarkup === "function" ? descriptionMarkup(showSpoilers) : descriptionMarkup}
        </div>
      )}
    </div>
  );
}
