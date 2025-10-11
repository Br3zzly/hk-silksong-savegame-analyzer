import type { ReactNode } from "react";

import { CATEGORIES, isItemUnlockedInPlayerSave } from "../parsers/dictionary";
import type { TabRenderProps } from "./types";
import { formatPercent } from "./utils";

const CATEGORY_NAME = "Ancestral Arts";

export function AncestralArtsTab({ parsedJson, decrypted }: TabRenderProps) {
  if (!decrypted || !parsedJson) {
    return <div className="text-white text-center">Load a save file to view mask shard data.</div>;
  }

  const ancestralArtCategory = CATEGORIES.find(cat => cat.name === CATEGORY_NAME);
  const ancestralArts = ancestralArtCategory?.items ?? [];

  return (
    <div className="text-white">
      <div className="max-w-3xl mx-auto">
        <table className="w-full table-auto border-collapse divide-y divide-gray-600">
          <thead>
            <tr className="text-left">
              <th className="px-2 py-1 w-[56px]" />
              <th className="px-2 py-1 w-[56px] text-center" />
              <th className="px-2 py-1 min-w-[120px] max-w-[220px]">Name</th>
              <th className="px-2 py-1 min-w-[140px] max-w-[260px]">Location</th>
              <th className="px-2 py-1 w-[48px]">Act</th>
              <th className="px-2 py-1 w-[64px]" />
            </tr>
          </thead>
          <tbody>
            {ancestralArts.map((item, index) => {
              const { unlocked } = isItemUnlockedInPlayerSave(item.parsingInfo, parsedJson);
              return (
                <tr key={index} className="border-b border-gray-700 last:border-b-0">
                  <td className="px-2 py-1 text-center w-[56px] align-middle">
                    <span className={unlocked ? "text-green-400" : "text-red-400"}>{unlocked ? "[x]" : "[ ]"}</span>
                  </td>
                  <td className="px-2 py-1 text-center w-[56px] align-middle">
                    <span className="text-xs text-blue-200 mt-1 font-normal">
                      {item.completionPercent ? `+${item.completionPercent}%` : ""}
                    </span>
                  </td>
                  <td className="px-2 py-1 min-w-[120px] max-w-[220px] truncate">{item.name}</td>
                   <td className={`px-2 py-1 relative min-w-[140px] max-w-[260px] break-words whitespace-pre-line 
                      ${!unlocked ? "blur-sm hover:blur-none transition duration-100" : ""}`}>
                    {item.location}
                  </td>
                  <td className={`px-2 py-1 w-[48px] text-center ${!unlocked ? "blur-sm hover:blur-none transition duration-100" : ""}`}>{item.whichAct}</td>
                  <td className="px-2 py-1 w-[64px] text-center">
                    <button
                      className={`flex-1 min-w-[48px] py-2 rounded font-semibold transition-colors text-xs ${
                        item.mapLink
                          ? "bg-[#24344d] text-white hover:bg-blue-600"
                          : "bg-[#24344d] text-blue-200 opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => {
                        if (item.mapLink) window.open(item.mapLink, "_blank", "noopener");
                      }}
                      disabled={!item.mapLink}
                      tabIndex={item.mapLink ? 0 : -1}
                    >
                      Map
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function getAncestralArtsExtra({ parsedJson, decrypted }: { parsedJson: unknown; decrypted: boolean }): ReactNode {
  if (!decrypted || !parsedJson) {
    return null;
  }

  const ancestralArtCategory = CATEGORIES.find(cat => cat.name === CATEGORY_NAME);
  const ancestralArts = ancestralArtCategory?.items ?? [];

  if (ancestralArts.length === 0) {
    return null;
  }

  let currentPercent = 0;
  let maxPercent = 0;

  ancestralArts.forEach(item => {
    const percent = item.completionPercent ?? 0;
    maxPercent += percent;
    const { unlocked } = isItemUnlockedInPlayerSave(item.parsingInfo, parsedJson);
    if (unlocked) {
      currentPercent += percent;
    }
  });

  return (
    <div className="text-xs text-blue-200 mt-1 font-normal">
      {`${formatPercent(currentPercent)} / ${formatPercent(maxPercent)}`}
    </div>
  );
}
