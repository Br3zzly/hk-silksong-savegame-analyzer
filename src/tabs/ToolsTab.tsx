import type { ReactNode } from "react";

import { CATEGORIES, isItemUnlockedInPlayerSave } from "../parsers/dictionary";
import type { TabRenderProps } from "./types";
import { formatPercent } from "./utils";

const CATEGORY_NAME = "Tools";

type ToolItem = (typeof CATEGORIES)[number]["items"][number];

function ToolsTableSection({ section, tools, parsedJson }: { section: string; tools: ToolItem[]; parsedJson: any }) {
  if (tools.length === 0) return null;
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2 text-blue-200">{section}</h2>
      <div className="max-w-3xl mx-auto">
        <table className="w-full border-collapse divide-y divide-gray-600 table-fixed">
          <colgroup>
            <col style={{ width: "56px" }} />
            <col style={{ width: "56px" }} />
            <col style={{ width: "220px" }} />
            <col style={{ width: "260px" }} />
            <col style={{ width: "48px" }} />
            <col style={{ width: "64px" }} />
          </colgroup>
          <thead>
            <tr className="text-left">
              <th className="px-2 py-1" />
              <th className="px-2 py-1 text-center" />
              <th className="px-2 py-1">Name</th>
              <th className="px-2 py-1">Location</th>
              <th className="px-2 py-1">Act</th>
              <th className="px-2 py-1" />
            </tr>
          </thead>
          <tbody>
            {tools.map((item, index) => {
              const { unlocked } = isItemUnlockedInPlayerSave(item.parsingInfo, parsedJson);
              return (
                <tr key={index} className="border-b border-gray-700 last:border-b-0">
                  <td className="px-2 py-1 text-center align-middle">
                    <span className={unlocked ? "text-green-400" : "text-red-400"}>{unlocked ? "[x]" : "[ ]"}</span>
                  </td>
                  <td className="px-2 py-1 text-center align-middle">
                    <span className="text-xs text-blue-200 mt-1 font-normal">
                      {item.completionPercent ? `+${item.completionPercent}%` : ""}
                    </span>
                  </td>
                  <td className="px-2 py-1 break-words whitespace-pre-line">{item.name}</td>
                   <td className={`px-2 py-1 relative min-w-[140px] max-w-[260px] break-words whitespace-pre-line 
                      ${!unlocked ? "blur-sm hover:blur-none transition duration-100" : ""}`}>
                    {item.location}
                  </td>
                  <td className={`px-2 py-1 w-[48px] text-center ${!unlocked ? "blur-sm hover:blur-none transition duration-100" : ""}`}>{item.whichAct}</td>
                  <td className="px-2 py-1 text-center">
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

export function ToolsTab({ parsedJson, decrypted }: TabRenderProps) {
  if (!decrypted || !parsedJson) {
    return <div className="text-white text-center">Load a save file to view tools data.</div>;
  }

  const toolsCategory = CATEGORIES.find(cat => cat.name === CATEGORY_NAME);
  const tools = toolsCategory?.items ?? [];

  const sections = Array.from(new Set(tools.map(t => t.section).filter((s): s is string => typeof s === "string")));

  return (
    <div className="text-white">
      {sections.map(section => (
        <ToolsTableSection
          key={section}
          section={section}
          tools={tools.filter(t => t.section === section)}
          parsedJson={parsedJson}
        />
      ))}
    </div>
  );
}

export function getToolsExtra({ parsedJson, decrypted }: { parsedJson: unknown; decrypted: boolean }): ReactNode {
  if (!decrypted || !parsedJson) {
    return null;
  }

  const toolsCategory = CATEGORIES.find(cat => cat.name === CATEGORY_NAME);
  const tools = toolsCategory?.items ?? [];

  if (tools.length === 0) {
    return null;
  }

  let currentPercent = 0;
  let maxPercent = 0;

  tools.forEach(item => {
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
