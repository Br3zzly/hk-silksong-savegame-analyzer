import type { ALL_TRACKED_CATEGORIES } from "@/dictionary";

export type TabId = (typeof ALL_TRACKED_CATEGORIES)[number]["name"];

export type TabGroup = "core" | "collectibles" | "exploration" | "progression";

interface TabConfig {
  tabId: TabId;
  hasProgress: boolean;
  hasPercentProgression: boolean;
}

const createTab = (tabId: TabId, options?: { hasPercentProgression?: boolean }): TabConfig => ({
  tabId,
  hasProgress: true,
  hasPercentProgression: options?.hasPercentProgression ?? false,
});

export const TAB_GROUPS: Record<TabGroup, TabConfig[]> = {
  core: [
    createTab("Mask Shards", { hasPercentProgression: true }),
    createTab("Spool Fragments", { hasPercentProgression: true }),
    createTab("Abilities", { hasPercentProgression: true }),
    createTab("Upgrades", { hasPercentProgression: true }),
    createTab("Tools", { hasPercentProgression: true }),
    createTab("Crests", { hasPercentProgression: true }),
  ],
  collectibles: [
    createTab("Lost Fleas"),
    createTab("Relics"),
    createTab("Memory Lockets"),
    createTab("Craftmetals"),
    // createTab("Pale Oil"), //🚧
    createTab("Mossberries"),
    createTab("Keys"),
    createTab("Silkeaters"),
    // createTab("Void Masses"), //🚧
    // createTab("Devices"), //🚧
    // createTab("Materium"), //🚧
    createTab("Mementos"),
  ],
  exploration: [createTab("Maps"), createTab("Bellways"), createTab("Ventrica Stations")],
  progression: [createTab("Quests"), createTab("Bosses"), createTab("Hunter's Journal")],
};

export const GROUP_LABELS: Record<TabGroup, string> = {
  core: "Core Progress",
  collectibles: "Collectibles & Resources",
  exploration: "Exploration & Navigation",
  progression: "Progression & Journal",
};
