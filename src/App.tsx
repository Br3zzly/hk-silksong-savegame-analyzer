import { useState } from "react";
import type { ReactNode } from "react";

import HornetBackground from "./assets/HornetBackground.png";
import { FileUpload } from "./components/FileUpload";
import { TabBar } from "./components/TabBar";
import { TotalProgress } from "./components/TotalProgress";
import { useSaveFile } from "./hooks/useSaveFile";
import { tabDefinitions } from "./tabs";
import type { TabId } from "./tabs/types";

type PlatformId = "SteamWindows" | "SteamDeck" | "GamePassPC" | "macOS" | "Linux" | "Switch";

type PlatformOption = {
  id: PlatformId;
  label: string;
  path: string;
  note?: ReactNode;
};

const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    id: "SteamWindows",
    label: "Steam (Windows)",
    path: "%USERPROFILE%/AppData/LocalLow/Team Cherry/Hollow Knight Silksong/",
    note: (
      <>
        /SteamID/userX.dat (where X = 1-4, denotes the save slot)  {" "}
        <a
          href="https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
          className="underline text-green-300 hover:text-green-200"
          target="_blank"
          rel="noreferrer"
        >
          (Steam Cloud saves)
        </a>
      </>
    ),
  },
  {
    id: "SteamDeck",
    label: "Steam Deck (Linux)",
    path: "~/.local/share/Team Cherry/Hollow Knight Silksong/",
    note: (
      <>
        /SteamID/userX.dat (where X = 1-4, denotes the save slot)  {" "}
        <a
          href="https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
          className="underline text-green-300 hover:text-green-200"
          target="_blank"
          rel="noreferrer"
        >
          (Steam Cloud saves)
        </a>
      </>
    ),
  },
  {
    id: "GamePassPC",
    label: "Game Pass (Windows)",
    path: "%LOCALAPPDATA%/Packages/TeamCherry.Silksong_y4jvztpgccj42/SystemAppData/wgs/",
    note: "Savegame file has a really long name and doesn't have a file extension",
  },
  {
    id: "macOS",
    label: "macOS",
    path: "~/Library/Application Support/unity.Team-Cherry.Silksong/",
  },
  {
    id: "Linux",
    label: "Linux",
    path: "~/.config/unity3d/Team Cherry/Hollow Knight Silksong/",
    note: (
      <>
        /(a folder with random characters)/userX.dat (where X = 1-4, denotes the save slot)
      </>
    ),
  },
  {
    id: "Switch",
    label: "Nintendo Switch",
    path: "sdmc:/atmosphere/contents/<title-id>/saves/hollow_knight_silksong/",
    note: (
      <>
        Not a simple process! Requires Homebrew and JKSV (
        <a
          className="underline text-green-300 hover:text-green-200"
          href="https://www.reddit.com/r/HollowKnight/comments/1dacmy1/gamesave_from_switch_to_steam/"
          rel="noreferrer"
          target="_blank"
        >
          Reddit guide
        </a>
        )
      </>
    ),
  },
];

export default function App() {
  const {
    fileName,
    decrypted,
    jsonText,
    setJsonText,
    parsedJson,
    handleFile,
    handleDrop,
    handleDragOver,
    saveEncrypted,
    savePlain,
  } = useSaveFile();
  const [activeTab, setActiveTab] = useState<TabId>("Stats");
  const [showToast, setShowToast] = useState(false);
  const [activePlatformId, setActivePlatformId] = useState<PlatformId>("SteamWindows");

  const activePlatform =
    PLATFORM_OPTIONS.find(platform => platform.id === activePlatformId) ?? PLATFORM_OPTIONS[0];

  const handleCopyPath = () => {
    navigator.clipboard.writeText(activePlatform.path);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const activeTabConfig = tabDefinitions.find(tab => tab.id === activeTab);

  return (
    <div
      className="min-h-screen flex justify-center items-start p-4"
      style={{
        backgroundImage: `url(${HornetBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-4xl bg-[#1a1313cc] rounded-lg shadow-lg p-5 mt-0 space-y-5 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white text-center">
          Hollow Knight: Silksong Savegame Analyzer
        </h1>

        <div className="text-center text-sm">
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {PLATFORM_OPTIONS.map(platform => {
              const isActive = platform.id === activePlatform.id;

              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActivePlatformId(platform.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                    isActive
                      ? "bg-green-600 border-green-500 text-white"
                      : "bg-transparent border-white/30 text-white/80 hover:border-white hover:text-white"
                  }`}
                >
                  {platform.label}
                </button>
              );
            })}
          </div>

          <p className="font-bold text-white mb-4">
            <span
              className="text-green-500 hover:underline cursor-pointer"
              onClick={handleCopyPath}
            >
              {activePlatform.path}
            </span>
            <br />
            {activePlatform.note ? (
              <span className="font-light italic text-white mb-4">{activePlatform.note}</span>
            ) : null}
          </p>
        </div>

        <FileUpload
          fileName={fileName}
          onFileSelected={handleFile}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />

        {showToast && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#454d5c] text-white px-4 py-2 rounded shadow-lg z-50">
            Copied to clipboard.
          </div>
        )}

        <TotalProgress parsedJson={parsedJson} />

        <TabBar
          tabs={tabDefinitions}
          activeTab={activeTab}
          onSelect={tab => setActiveTab(tab)}
          parsedJson={parsedJson}
          decrypted={decrypted}
        />

        <div className="mt-4">
          {decrypted && activeTabConfig ? (
            activeTabConfig.render({
              parsedJson,
              decrypted,
              jsonText,
              setJsonText,
              saveEncrypted,
              savePlain,
            })
          ) : (
            <div className="text-white text-center">No Savefile loaded.</div>
          )}
        </div>
        <footer className="w-full mt-8 py-4  text-white text-center text-sm  ">
          Made by <a href="https://github.com/br3zzly" target="_blank" className="underline">Br3zzly</a><br />
          With help from <a href="https://github.com/theezeb" target="_blank" className="underline">theezeb</a>, <a href="https://github.com/btastic" target="_blank" className="underline">btastic</a>, <a href="https://github.com/TheSaneWriter" target="_blank" className="underline">TheSaneWriter</a>, <a href="https://github.com/saiki-k" target="_blank" className="underline">saiki-k</a><br />
          <a href="https://github.com/Br3zzly/hk-silksong-savegame-analyzer" target="_blank"className="underline">GitHub Repo</a><br />
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3571462700" target="_blank" className="underline">Steam Guide</a><br />
          <a href="https://www.buymeacoffee.com/Br3zzly" target="_blank" className="underline">Buy me a coffee</a>
        </footer>
      </div>
    </div>
  );
}

