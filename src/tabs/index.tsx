import type { TabDefinition } from "./types";
import { StatsTab } from "./StatsTab";
import { MaskShardsTab, getMaskShardsExtra } from "./MaskShardsTab";
import { SpoolFragmentsTab, getSpoolFragmentsExtra } from "./SpoolFragmentsTab";
import { UpgradesTab, getUpgradesExtra } from "./UpgradesTab";
import { ToolsTab, getToolsExtra } from "./ToolsTab";
import { CrestsTab, getCrestsExtra } from "./CrestsTab";
import { AncestralArtsTab, getAncestralArtsExtra } from "./AncestralArtsTab";
import { RelicsTab, getRelicsExtra } from "./RelicsTab";
import { FleasTab, getFleasExtra } from "./FleasTab";
import { MemoryLocketsTab, getMemoryLocketsExtra } from "./MemoryLocketsTab";
import { CraftMetalsTab, getCraftMetalsExtra } from "./CraftMetalsTab";
import { BossesTab, getBossesExtra } from "./BossesTab";
import { KeysTab, getKeysExtra } from "./KeysTab";
import { getHuntersJournalExtra, HuntersJournalTab } from "./HuntersJournalTab";
import { JsonEditorTab } from "./JsonEditorTab";

export const tabDefinitions: TabDefinition[] = [
  {
    id: "Stats",
    label: "Stats",
    render: props => <StatsTab {...props} />,
  },
  {
    id: "Mask Shards",
    label: "Mask Shards",
    render: props => <MaskShardsTab {...props} />,
    getExtra: getMaskShardsExtra,
  },
  {
    id: "Spool Fragments",
    label: "Spool Fragments",
    render: props => <SpoolFragmentsTab {...props} />,
    getExtra: getSpoolFragmentsExtra,
  },
  {
    id: "Upgrades",
    label: "Upgrades",
    render: props => <UpgradesTab {...props} />,
    getExtra: getUpgradesExtra,
  },
  {
    id: "Tools",
    label: "Tools",
    render: props => <ToolsTab {...props} />,
    getExtra: getToolsExtra,
  },
  {
    id: "Crests",
    label: "Crests",
    render: props => <CrestsTab {...props} />,
    getExtra: getCrestsExtra,
  },
  {
    id: "Ancestral Arts",
    label: "Ancestral Arts",
    render: props => <AncestralArtsTab {...props} />,
    getExtra: getAncestralArtsExtra,
  },
  {
    id: "Relics",
    label: "Relics",
    render: props => <RelicsTab {...props} />,
    getExtra: getRelicsExtra,
  },
  {
    id: "Fleas",
    label: "Fleas",
    render: props => <FleasTab {...props} />,
    getExtra: getFleasExtra,
  },
  {
    id: "Memory Lockets",
    label: "Memory Lockets",
    render: props => <MemoryLocketsTab {...props} />,
    getExtra: getMemoryLocketsExtra,
  },
  {
    id: "Craftmetals",
    label: "Craftmetals",
    render: props => <CraftMetalsTab {...props} />,
    getExtra: getCraftMetalsExtra,
  },
    {
    id: "Keys",
    label: "Keys",
    render: props => <KeysTab {...props} />,
    getExtra: getKeysExtra,
  },
  {
    id: "Bosses",
    label: "Bosses",
    render: props => <BossesTab {...props} />,
    getExtra: getBossesExtra,
  },
  {
    id: "Hunter's Journal",
    label: "Hunter's Journal",
    render: props => <HuntersJournalTab {...props} />,
    getExtra: getHuntersJournalExtra, 
  },
  {
    id: "JSON Editor",
    label: "JSON Editor",
    render: props => <JsonEditorTab {...props} />,
  },
];
