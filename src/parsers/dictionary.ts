export type FlagParsingInfo = { type: 'flag'; internalId: string };
export type FlagIntParsingInfo = { type: 'flagInt'; internalId: [string, number] };
export type FlagReturnParsingInfo = { type: 'flagReturn'; internalId: string };
export type ToolParsingInfo = { type: 'tool'; internalId: string[] };
export type JournalParsingInfo = { type: 'journal'; internalId: [string, number] }; // [creature name, required kills number]
export type CrestParsingInfo = { type: 'crest'; internalId: string };
export type CollectableParsingInfo = { type: 'collectable'; internalId: string };
export type RelictParsingInfo = { type: 'relict'; internalId: string };
export type QuestParsingInfo = { type: 'quest'; internalId: string };
export type SceneDataParsingInfo = { type: 'sceneData'; internalId: [string, string, boolean?] };
export type ParsingInfo = FlagParsingInfo | FlagIntParsingInfo | FlagReturnParsingInfo | ToolParsingInfo | JournalParsingInfo | CrestParsingInfo | CollectableParsingInfo | RelictParsingInfo |QuestParsingInfo | SceneDataParsingInfo;

export type CategoryItem = {
  name: string;
  section?: string;
  whichAct: 0 | 1 | 2 | 3;
  completionPercent: number;
  prereqs: string[];
  location: string;
  parsingInfo: ParsingInfo;
  mapLink: string;
  killsRequired?: number;
};

export type CollectableCategory = {
  name: string;
  description: string;
  items: CategoryItem[];
};

export const CATEGORIES: CollectableCategory[] = [
    {
    name: 'Stats',
    description: 'Statistics tracked in the game.',
    items: [
      { name: 'Playtime', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'playTime' }, mapLink: '' },
      { name: 'Rosaries', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'geo' }, mapLink: '' },
      { name: 'Shell Shards', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'ShellShards' }, mapLink: '' },
    ],
  },
  {
    name: 'Mask Shards',
    description: 'Each mask shard counts 0.25% towards completion.',
    items: [
      { name: 'Mask Shard 1', whichAct: 1, completionPercent: 0.25, prereqs: [], location: 'Purchased from Bonebottom', parsingInfo: { type: 'flag', internalId: 'PurchasedBonebottomHeartPiece' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477840' },
      { name: 'Mask Shard 2', whichAct: 1, completionPercent: 0.25, prereqs: ['Swift Step'], location: 'Behind a breakable wall in the Wormways', parsingInfo: { type: 'sceneData', internalId: ['Crawl_02', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478091' },
      { name: 'Mask Shard 3', whichAct: 1, completionPercent: 0.25, prereqs: ['Drifters cloak'], location: 'Left of the seamstress', parsingInfo: { type: 'sceneData', internalId: ['Bone_East_20', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477975' },
      { name: 'Mask Shard 4', whichAct: 1, completionPercent: 0.25, prereqs: [], location: 'At the end of a parkour section in Shellwood', parsingInfo: { type: 'sceneData', internalId: ['Shellwood_14', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478177' },
      { name: 'Mask Shard 5', whichAct: 1, completionPercent: 0.25, prereqs: ['Cling Grip'], location: 'Near the Deep Docks entrance in the Marrow', parsingInfo: { type: 'sceneData', internalId: ['Dock_08', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477901' },
      { name: 'Mask Shard 6', whichAct: 1, completionPercent: 0.25, prereqs: ['Needolin'], location: 'Behind a breakable wall in Weavenest Atla', parsingInfo: { type: 'sceneData', internalId: ['Weave_05b', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478233' },
      { name: 'Mask Shard 7', whichAct: 1, completionPercent: 0.25, prereqs: [], location: 'Reward for the Savage Beastfly quest obtainable in Bellhart', parsingInfo: { type: 'quest', internalId: 'Beastfly Hunt' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478800' },
      { name: 'Mask Shard 8', whichAct: 2, completionPercent: 0.25, prereqs: [], location: 'Left of the Cogwork Core', parsingInfo: { type: 'sceneData', internalId: ['Song_09', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478615' },
      { name: 'Mask Shard 9', whichAct: 2, completionPercent: 0.25, prereqs: [], location: 'Whispering Vaults', parsingInfo: { type: 'sceneData', internalId: ['Library_05', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478671' },
      { name: 'Mask Shard 10', whichAct: 2, completionPercent: 0.25, prereqs: ['Clawline'], location: 'At the end of some long corridors in Bilewater', parsingInfo: { type: 'sceneData', internalId: ['Shadow_13', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478849' },
      { name: 'Mask Shard 11', whichAct: 2, completionPercent: 0.25, prereqs: ['Clawline'], location: 'Within the Skull Cavern in the Far Fields', parsingInfo: { type: 'sceneData', internalId: ['Bone_East_LavaChallenge', 'Heart Piece (1)'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478841' },
      { name: 'Mask Shard 12', whichAct: 2, completionPercent: 0.25, prereqs: [], location: 'At the end of a parkour section in the Slab behind a lock which requires the Key of Apostate', parsingInfo: { type: 'sceneData', internalId: ['Slab_17', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479001' },
      { name: 'Mask Shard 13', whichAct: 2, completionPercent: 0.25, prereqs: ['Faydown Cloak'], location: 'Left of the toll bench in Mount Fay', parsingInfo: { type: 'sceneData', internalId: ['Peak_04c', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479038' },
      { name: 'Mask Shard 14', whichAct: 2, completionPercent: 0.25, prereqs: ['Faydown Cloak'], location: 'Right of the Wisp Thicket', parsingInfo: { type: 'sceneData', internalId: ['Wisp_07', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479151' },
      { name: 'Mask Shard 15', whichAct: 2, completionPercent: 0.25, prereqs: [], location: 'Purchased from Jubilana', parsingInfo: { type: 'flag', internalId: 'MerchantEnclaveShellFragment' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478879' },
      { name: 'Mask Shard 16', whichAct: 2, completionPercent: 0.25, prereqs: ['Faydown Cloak'], location: 'Left part of the Blasted Steps', parsingInfo: { type: 'sceneData', internalId: ['Coral_19b', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478498' },
      { name: 'Mask Shard 17', whichAct: 3, completionPercent: 0.25, prereqs: [], location: 'Reward for the Fastest in Pharloom quest', parsingInfo: { type: 'quest', internalId: 'Sprintmaster Race' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479194' },
      { name: 'Mask Shard 18', whichAct: 3, completionPercent: 0.25, prereqs: [], location: 'Reward for the Hidden Hunter quest', parsingInfo: { type: 'quest', internalId: 'Ant Trapper' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479447' },
      { name: 'Mask Shard 19', whichAct: 3, completionPercent: 0.25, prereqs: [], location: 'Reward for the Dark Hearts quest', parsingInfo: { type: 'quest', internalId: 'Destroy Thread Cores' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479449' },
      { name: 'Mask Shard 20', whichAct: 3, completionPercent: 0.25, prereqs: ['Silk Soar'], location: 'At the top of Brightvein in Mount Fay', parsingInfo: { type: 'sceneData', internalId: ['Peak_06', 'Heart Piece'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479460' },
    ],
  },
  {
    name: 'Spool Fragments',
    description: 'Each Spool Fragment counts 0.5% towards completion.',
    items: [
      { name: 'Spool Fragment 1', whichAct: 1, completionPercent: 0.5, prereqs: [], location: 'Above the Bonebottom settlement', parsingInfo: { type: 'sceneData', internalId: ['Bone_11b', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478080' },
      { name: 'Spool Fragment 2', whichAct: 1, completionPercent: 0.5, prereqs: [], location: 'At the end of a long room in the Deep Docks', parsingInfo: { type: 'sceneData', internalId: ['Bone_East_13', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477926' },
      { name: 'Spool Fragment 3', whichAct: 1, completionPercent: 0.5, prereqs: ['Cling Grip'], location: 'In Greymoor, right and up of the Bell bench', parsingInfo: { type: 'sceneData', internalId: ['Greymoor_02', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478263' },
      { name: 'Spool Fragment 4', whichAct: 1, completionPercent: 0.5, prereqs: ['Cling Grip'], location: 'In the Slab, top of a frosty section to the left', parsingInfo: { type: 'sceneData', internalId: ['Peak_01', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478475' },
      { name: 'Spool Fragment 5', whichAct: 1, completionPercent: 0.5, prereqs: ['Needolin'], location: 'Behind a breakable wall in Weavenest Atla', parsingInfo: { type: 'sceneData', internalId: ['Weave_11', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478230' },
      { name: 'Spool Fragment 6', whichAct: 1, completionPercent: 0.5, prereqs: ['Needolin'], location: 'Purchased from Frey after completing the mission "My Missing Courier"', parsingInfo: { type: 'flag', internalId: 'PurchasedBelltownSpoolSegment' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478347' },
      { name: 'Spool Fragment 7', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Fleamaster reward (Caravan Location 2, 14 Fleas)', parsingInfo: { type: 'flagInt', internalId: ['CaravanTroupeLocation', 2] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478820' },
      { name: 'Spool Fragment 8', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Bottom-right of the Cogwork Core', parsingInfo: { type: 'sceneData', internalId: ['Cog_07', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478618' },
      { name: 'Spool Fragment 9', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Right of the Underworks', parsingInfo: { type: 'sceneData', internalId: ['Library_11b', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478704' },
      { name: 'Spool Fragment 10', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Top of the Grand Gate room', parsingInfo: { type: 'sceneData', internalId: ['Song_19_entrance', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478586' },
      { name: 'Spool Fragment 11', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Behind a Arena battle in the Underworks', parsingInfo: { type: 'sceneData', internalId: ['Under_10', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478931' },
      { name: 'Spool Fragment 12', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Bottom of the elevator shaft in Whiteward. Requires lift to be called up first.', parsingInfo: { type: 'sceneData', internalId: ['Ward_01', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479317' },
      { name: 'Spool Fragment 13', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Balm for The Wounded quest reward', parsingInfo: { type: 'quest', internalId: 'Save Sherma' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479180' },
      { name: 'Spool Fragment 14', whichAct: 2, completionPercent: 0.5, prereqs: [], location: 'Bottom-right of the Deep Docks', parsingInfo: { type: 'sceneData', internalId: ['Dock_03c', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478825' },
      { name: 'Spool Fragment 15', whichAct: 2, completionPercent: 0.5, prereqs: ['Clawline'], location: 'Top of the High Halls', parsingInfo: { type: 'sceneData', internalId: ['Hang_03_top', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478909' },
      { name: 'Spool Fragment 16', whichAct: 2, completionPercent: 0.5, prereqs: ['Faydown Cloak'], location: 'Left part of the Memorium', parsingInfo: { type: 'sceneData', internalId: ['Arborium_09', 'Silk Spool'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479117' },
      { name: 'Spool Fragment 17', whichAct: 2, completionPercent: 0.5, prereqs: ['Faydown Cloak'], location: 'Purchased from Grindle in Blasted Steps', parsingInfo: { type: 'flag', internalId: 'purchasedGrindleSpoolPiece' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478527' },
      { name: 'Spool Fragment 18', whichAct: 2, completionPercent: 0.5, prereqs: ['Faydown Cloak'], location: 'Purchased from Jubilana after saving her as part of the The Lost Merchant quest', parsingInfo: { type: 'flag', internalId: 'MerchantEnclaveSpoolPiece' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479249' },
  ],
  },
    {
    name: 'Upgrades',
    description: 'Each Upgrade Counts 1% towards completion',
    items: [
      // Needle Upgrades
      { name: 'Needle Upgrade 1', section: 'Needle Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades',1] }, mapLink: '' },
      { name: 'Needle Upgrade 2', section: 'Needle Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades',2] }, mapLink: '' },
      { name: 'Needle Upgrade 3', section: 'Needle Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades',3] }, mapLink: '' },
      { name: 'Needle Upgrade 4', section: 'Needle Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades',4] }, mapLink: '' },

      // Tool Pouch Upgrades
      { name: 'Tool Pouch Upgrade 1', section: 'Tool Pouch Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Far Fields: Pilgrims Rest, purchased from Mort for 220 Rosaries', parsingInfo: { type: 'flagInt', internalId: ['ToolPouchUpgrades',1] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477946' },
      { name: 'Tool Pouch Upgrade 2', section: 'Tool Pouch Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolPouchUpgrades',2] }, mapLink: '' },
      { name: 'Tool Pouch Upgrade 3', section: 'Tool Pouch Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolPouchUpgrades',3] }, mapLink: '' },
      { name: 'Tool Pouch Upgrade 4', section: 'Tool Pouch Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolPouchUpgrades',4] }, mapLink: '' },

      // Tool Kit Upgrades
      { name: 'Tool Kit Upgrade 1', section: 'Tool Kit Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolKitUpgrades',1] }, mapLink: '' },
      { name: 'Tool Kit Upgrade 2', section: 'Tool Kit Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolKitUpgrades',2] }, mapLink: '' },
      { name: 'Tool Kit Upgrade 3', section: 'Tool Kit Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolKitUpgrades',3] }, mapLink: '' },
      { name: 'Tool Kit Upgrade 4', section: 'Tool Kit Upgrades', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['ToolKitUpgrades',4] }, mapLink: '' },

      // Silk Hearts
      { name: 'Silk Heart 1', section: 'Silk Hearts', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['silkRegenMax',1] }, mapLink: '' },
      { name: 'Silk Heart 2', section: 'Silk Hearts', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['silkRegenMax',2] }, mapLink: '' },
      { name: 'Silk Heart 3', section: 'Silk Hearts', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'flagInt', internalId: ['silkRegenMax',3] }, mapLink: '' },
  ],
  },
  {
    name: 'Tools',
    description: 'Nearly every Tool counts 1% towards completion.',
    items: [
      //White Tools
      { name: 'Silkspear', section: 'Silk Skills', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Silk Spear'] }, mapLink: '' },
      { name: 'Thread Storm', section: 'Silk Skills', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Thread Sphere'] }, mapLink: '' },
      { name: 'Cross Stitch', section: 'Silk Skills', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Parry'] }, mapLink: '' },
      { name: 'Sharpdart', section: 'Silk Skills', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Silk Charge'] }, mapLink: '' },
      { name: 'Rune Rage', section: 'Silk Skills', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Silk Bomb'] }, mapLink: '' },
      { name: 'Pale Nails', section: 'Silk Skills', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Silk Boss Needle'] }, mapLink: '' },
      
      //Red Tools
      { name: 'Straight Pin', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Straight Pin'] }, mapLink: '' },
      { name: 'Threefold Pin', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Tri Pin'] }, mapLink: '' },
      { name: 'Sting Shard', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Sting Shard'] }, mapLink: '' },
      { name: 'Tacks', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Tack'] }, mapLink: '' },
      { name: 'Longpin', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Harpoon'] }, mapLink: '' },
      { name: 'Curveclaw / Curvesickle', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Curve Claws','Curve Claws Upgraded'] }, mapLink: '' },
      { name: 'Throwing Ring', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Shakra Ring'] }, mapLink: '' },
      { name: 'Pimpillo', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Pimpilo'] }, mapLink: '' },
      { name: 'Conchcutter', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Conch Drill'] }, mapLink: '' },
      { name: 'Silkshot', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['WebShot Forge', 'WebShot Architect', 'WebShot Weaver'] }, mapLink: '' },
      { name: "Delver's Drill", section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Screw Attack'] }, mapLink: '' },
      { name: 'Cogwork Wheel', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Cogwork Saw'] }, mapLink: '' },
      { name: 'Cogfly', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Cogwork Flier'] }, mapLink: '' },
      { name: 'Rosary Cannon', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Rosary Cannon'] }, mapLink: '' },
      { name: 'Voltvessels', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Lightning Rod'] }, mapLink: '' },
      { name: 'Flintslate', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Flintstone'] }, mapLink: '' },
      { name: 'Flea Brew', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Flea Brew'] }, mapLink: '' },
      { name: 'Plasmium Phial', section: 'Attack Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Lifeblood Syringe'] }, mapLink: '' },
      { name: 'Needle Phial', section: 'Attack Tools', whichAct: 0, completionPercent: 0, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Extractor'] }, mapLink: '' },
      { name: 'Snare Setter', section: 'Attack Tools', whichAct: 0, completionPercent: 0, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Silk Snare'] }, mapLink: '' },
      
      // Blue Tools
      { name: "Druid's Eye / Druid's Eyes", section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Mosscreep Tool 1','Mosscreep Tool 2'] }, mapLink: '' },
      { name: 'Magma Bell', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Lava Charm'] }, mapLink: '' },
      { name: 'Warding Bell', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Bell Bind'] }, mapLink: '' },
      { name: 'Pollip Pouch', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Poison Pouch'] }, mapLink: '' },
      { name: 'Fractured Mask', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Fractured Mask'] }, mapLink: '' },
      { name: 'Multibinder', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Bellhart: Purchased from Frey after completing My Missing Courier wish', parsingInfo: { type: 'tool', internalId: ['Multibind'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478203' },
      { name: 'Weavelight', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['White Ring'] }, mapLink: '' },
      { name: 'Sawtooth Circlet', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Brolly Spike'] }, mapLink: '' },
      { name: 'Injector Band', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Quickbind'] }, mapLink: '' },
      { name: 'Spool Extender', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Spool Extender'] }, mapLink: '' },
      { name: 'Reserve Bind', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Reserve Bind'] }, mapLink: '' },
      { name: 'Claw Mirror / Claw Mirrors', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Dazzle Bind', 'Dazzle Bind Upgraded'] }, mapLink: '' },
      { name: 'Memory Crystal', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Revenge Crystal'] }, mapLink: '' },
      { name: 'Snitch Pick', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Thief Claw'] }, mapLink: '' },
      { name: 'Volt Filament', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Zap Imbuement'] }, mapLink: '' },
      { name: 'Quick Sling', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Quick Sling'] }, mapLink: '' },
      { name: 'Wreath of Purity', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Maggot Charm'] }, mapLink: '' },
      { name: 'Longclaw', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Longneedle'] }, mapLink: '' },
      { name: 'Wispfire Latern', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Wisp Lantern'] }, mapLink: '' },
      { name: 'Egg of Flealia', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Flea Charm'] }, mapLink: '' },
      { name: 'Pin Badge', section: 'Defense Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Pinstress Tool'] }, mapLink: '' },
     
     // Yellow Tools
      { name: 'Compass', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Compass'] }, mapLink: '' },
      { name: 'Shard Pendant', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Bone Necklace'] }, mapLink: '' },
      { name: 'Magnetite Brooch', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Rosary Magnet'] }, mapLink: '' },
      { name: 'Weighted Belt', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Far Fields: Pilgrims Rest, purchased from Mort for 160 Rosaries', parsingInfo: { type: 'tool', internalId: ['Weighted Anklet'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477946' },
      { name: 'Barbed Bracelet', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Barbed Wire'] }, mapLink: '' },
      { name: "Dead Bug's Purse / Shell Satchel", section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Dead Mans Purse','Shell Satchel'] }, mapLink: '' },
      { name: 'Magnetite Dice', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Magnetite Dice'] }, mapLink: '' },
      { name: 'Scuttlebrace', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Scuttlebrace'] }, mapLink: '' },
      { name: "Ascendant's Grip", section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Wallcling'] }, mapLink: '' },
      { name: 'Spider Strings', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Musician Charm'] }, mapLink: '' },
      { name: 'Silkspeed Anklets', section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Sprintmaster'] }, mapLink: '' },
      { name: "Thief's Mark", section: 'Explore Tools', whichAct: 0, completionPercent: 1, prereqs: [], location: 'TODO', parsingInfo: { type: 'tool', internalId: ['Thief Charm'] }, mapLink: '' },
  ],
  },
  {
    name: 'Crests',
    description: 'Each Crest counts 1% towards completion (except Hunter Crest)',
    items: [
      { name: 'Hunter Crest', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Default Crest, already equipped at the beginning', parsingInfo: { type: 'crest', internalId: 'Hunter' }, mapLink: '' },
      { name: 'Hunter Crest 2', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Talk to Eva in Weavnest Atla', parsingInfo: { type: 'crest', internalId: 'Hunter_v2' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478228' },
      { name: 'Hunter Crest 3', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Unlock Wanderer, Beast, Reaper, Architect and Witch Crest / and use Memory Lockets and talk to Eva', parsingInfo: { type: 'crest', internalId: 'Hunter_v3' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479653' },
      { name: 'Vesticrest 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Unlock 4 Crests and talk to Eva: + 1 yellow tool slot on all crests', parsingInfo: { type: 'flag', internalId: 'UnlockedExtraYellowSlot' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479145' },
      { name: 'Vesticrest 2', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Use 9 Memory Lockets and talk to Eva: + 1 blue tool slot on all crests', parsingInfo: { type: 'flag', internalId: 'UnlockedExtraBlueSlot' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479434' },
      { name: 'Reaper Crest', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Greymore far left:  Chapel of Reaper', parsingInfo: { type: 'crest', internalId: 'Reaper' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478156' },
      { name: 'Wanderer Crest', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Mossgrotto far left (Bonegrave): Chapel of Wanderer', parsingInfo: { type: 'crest', internalId: 'Wanderer' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478240' },
      { name: 'Beast Crest', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Hunters March far right: Chapel of Beast', parsingInfo: { type: 'crest', internalId: 'Warrior' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478020' },
      { name: 'Witch Crest', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Take Twisted Bud to Greyroot, Complete Rite of Rebirth Wish, Complete Infestation Operation Wish', parsingInfo: { type: 'crest', internalId: 'Witch' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478815' },
      { name: 'Architect Crest', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Above The Cauldron: Chapel of the Architect', parsingInfo: { type: 'crest', internalId: 'Toolmaster' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478745' },
      { name: 'Shaman Crest', whichAct: 0, completionPercent: 1, prereqs: [], location: 'Moss Grotto: In a tunnel above the Lore Tablet, Silk Soar required', parsingInfo: { type: 'crest', internalId: 'Spell' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479384' },
  ],
  },
  {
    name: 'Ancestral Arts',
    description: 'Each Crest counts 1% towards completion (except Hunter Crest)',
    items: [
      { name: 'Swift Step (Dash / Sprint)', whichAct: 1, completionPercent: 1, prereqs: [], location: 'At the top of Deep Rocks', parsingInfo: { type: 'flag', internalId: 'hasDash' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477915' },
      { name: 'Drifters Cloak (Glide)', whichAct: 1, completionPercent: 0, prereqs: [], location: 'Far Fields: Complete Seamstress Wish Flexile Spines', parsingInfo: { type: 'flag', internalId: 'hasBrolly' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477971' },
      { name: 'Clawline (Needle Harpoon)', whichAct: 2, completionPercent: 1, prereqs: [], location: 'In The Cauldron (right side from Underworks', parsingInfo: { type: 'flag', internalId: 'hasHarpoonDash' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478714' },
      { name: 'Cling Grip (Walljump)', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Shellwood', parsingInfo: { type: 'flag', internalId: 'hasWalljump' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478189' },
      { name: 'Needolin', whichAct: 1, completionPercent: 1, prereqs: [], location: 'On Top of Bellhart (Deafeat Widow)', parsingInfo: { type: 'flag', internalId: 'hasNeedolin' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478199' },
      { name: 'Needle Strike', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Blasted Steps far left', parsingInfo: { type: 'flag', internalId: 'hasChargeSlash' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478510' },
      { name: 'Faydown Cloak (Double Jump)', whichAct: 2, completionPercent: 0, prereqs: ['Needoline','Clawline'], location: 'Top of Mount Fay', parsingInfo: { type: 'flag', internalId: 'hasDoubleJump' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479103' },
      { name: 'Silk Soar (Highjump)', whichAct: 3, completionPercent: 1, prereqs: [], location: 'Bottom right of the abyss', parsingInfo: { type: 'flag', internalId: 'hasSuperJump' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479288' },
      { name: 'Sylphsong', whichAct: 3, completionPercent: 1, prereqs: [], location: 'Use 18 Memory Lockets and bind Eva', parsingInfo: { type: 'flag', internalId: 'HasBoundCrestUpgrader' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479654' },
      { name: 'Everbloom', whichAct: 3, completionPercent: 1, prereqs: [], location: 'Complete The Old Hearts wish', parsingInfo: { type: 'collectable', internalId: 'White Flower' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479387' },
  ],
  },
  {
    name: 'Relics',
    description: 'Relics',
    items: [
      { name: 'Choral Commandment 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'On a high-up ledge. Left from Mosshome.', parsingInfo: { type: 'relict', internalId: 'Seal Chit Aspid_01' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477867' },
      { name: 'Choral Commandment 2', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Top-Left Room of Whiteward', parsingInfo: { type: 'relict', internalId: 'Seal Chit Ward Corpse' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478914' },
      { name: 'Choral Commandment 3', whichAct: 0, completionPercent: 0, prereqs: [], location: 'At the end of a room above the Hidden Passage in Whiteward, easiest to reach via Silk Soar', parsingInfo: { type: 'relict', internalId: 'Seal Chit Silk Siphon' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478919' },
      { name: 'Choral Commandment 4', whichAct: 0, completionPercent: 0, prereqs: ['The Lost Merchant Wish completed'], location: 'Can be purchased from Jubilana (Songclave) for 210 Rosaries', parsingInfo: { type: 'relict', internalId: 'Seal Chit City Merchant' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479251' },
      
      { name: 'Weaver Effigy 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'In a secret room above Bone Bottom. Easiest to reach wit Drifters Cloak and floating down from above.', parsingInfo: { type: 'relict', internalId: 'Weaver Totem Bonetown_upper_room' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478093' },
      { name: 'Weaver Effigy 2', whichAct: 0, completionPercent: 0, prereqs: ['Cling Grip'], location: 'Shellwood Witch Tunnel', parsingInfo: { type: 'relict', internalId: 'Weaver Totem Witch' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478794' },
      { name: 'Weaver Effigy 3', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bottom Right of the Slab. On a corpse', parsingInfo: { type: 'relict', internalId: 'Weaver Totem Slab_Bottom' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479034' },
      
      { name: 'Bone Scroll 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Greymore Secret Room. Swim all the way to the right', parsingInfo: { type: 'relict', internalId: 'Bone Record Greymoor_flooded_corridor' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478142' },
      { name: 'Bone Scroll 2', whichAct: 0, completionPercent: 0, prereqs: ['Drifters cloak'], location: 'Far fields secret Room. Reachable by Drifters Cloak', parsingInfo: { type: 'relict', internalId: 'Bone Record Bone_East_14' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478213' },
      { name: 'Bone Scroll 3', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Left side of Underworks behind a breakable wall', parsingInfo: { type: 'relict', internalId: 'Bone Record Understore_Map_Room' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478553' },
      { name: 'Bone Scroll 4', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Top of Wisp Thicket Platform Challange', parsingInfo: { type: 'relict', internalId: 'Bone Record Wisp Top' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479150' },
      
      { name: 'Rune Harp 1', whichAct: 1, completionPercent: 0, prereqs: [], location: 'On a high-up ledge in Weavernest Atla', parsingInfo: { type: 'relict', internalId: 'Weaver Record Weave_08' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478231' },
      { name: 'Rune Harp 2', whichAct: 1, completionPercent: 0, prereqs: [], location: 'Secret Room in Far Fields Weaver nest (Sprint Challange)', parsingInfo: { type: 'relict', internalId: 'Weaver Record Sprint_Challenge' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479057' },
      { name: 'Rune Harp 3', whichAct: 3, completionPercent: 0, prereqs: [], location: 'Where Conductor Ballador would be in Act 3.', parsingInfo: { type: 'relict', internalId: 'Weaver Record Conductor' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479495' },

      { name: 'Psalm Cylinder - Grindle', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Sold by Grindle for 240 Rosaries (Blasted Steps)', parsingInfo: { type: 'relict', internalId: 'Psalm Cylinder Grindle' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478530' },
      { name: 'Psalm Cylinder - Vaultkeeper Cardinius Lair', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Cylinder auf Vaultkeeper in Whispering Vaults', parsingInfo: { type: 'relict', internalId: 'Psalm Cylinder Librarian' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478650' },
      { name: 'Psalm Cylinder - Whispering Vaults', whichAct: 0, completionPercent: 0, prereqs: ['Clawline'], location: 'At the end of a parkour challenge at the top of the Whispering Vaults', parsingInfo: { type: 'relict', internalId: 'Psalm Cylinder Library Roof' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479717' },
      { name: 'Psalm Cylinder - High Halls', whichAct: 0, completionPercent: 0, prereqs: ['Clawline'], location: 'Behind a breakable wall in High Halls', parsingInfo: { type: 'relict', internalId: 'Psalm Cylinder Hang' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478908' },
      { name: 'Psalm Cylinder - Underworks', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Behind breakable wall at the top of Underworks', parsingInfo: { type: 'relict', internalId: 'Psalm Cylinder Ward' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478929' },
      { name: 'Sacred Cylinder', whichAct: 0, completionPercent: 0, prereqs: [], location: 'TODO', parsingInfo: { type: 'relict', internalId: 'Librarian Melody Cylinder' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479717' },
      
      { name: 'Arcane Egg', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Behind a platforming sequence in the Abyss', parsingInfo: { type: 'relict', internalId: 'Ancient Egg Abyss Middle' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479281' },
  ],
  },
  {
    name: 'Fleas',
    description: 'Fleas',
    items: [
      { name: 'Lost Flea 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'On a high-up ledge at the top of the marrows', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Bone_06' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477890' },
      { name: 'Lost Flea 2', whichAct: 0, completionPercent: 0, prereqs: [], location: 'To the left of Deep Docks Bellway. In the corner of an area fill with lavafalls. ', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Dock_16' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477907' },
      { name: 'Lost Flea 3', whichAct: 0, completionPercent: 0, prereqs: ['Swift Step'], location: 'Top of Deepdocks: Pull a Lever down below, and swift step your way up towards it', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Bone_East_05' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477916' },
      { name: 'Lost Flea 4', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Far Fields: Watch out for the pressure plate trap!', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Bone_East_17b' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477940' },
      { name: 'Lost Flea 5', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Hunters March: At the top of a long series of red fruit.', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Ant_03' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477999' },
      { name: 'Lost Flea 6', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Greymore Secret room (Kratt)', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Greymoor_15b' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478271' },
      { name: 'Lost Flea 7', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Greymore: Reached through the top of the tower', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Greymoor_06' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478287' },
      { name: 'Lost Flea 8', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Shellwood: At the bottom of a pit filled with Pollenica (and a few Phacia) enemies', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Shellwood_03' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478176' },
      { name: 'Lost Flea 9', whichAct: 0, completionPercent: 0, prereqs: ['Drifters Cloak', 'Cling Grip'], location: 'Far Fields: Hidden parkour path to the right of far fields bellway', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Bone_East_10_Church' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478219' },
      { name: 'Lost Flea 10', whichAct: 0, completionPercent: 0, prereqs: ['Cling Grip'], location: 'Top of Blasted Steps', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Coral_35' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478386' },
      { name: 'Lost Flea 11', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Sinners Road: Jump over the first cage, then hit the easternmost side of the one holding the flea to set it free.', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Dust_12' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478360' },
      { name: 'Lost Flea 12', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Inside the Exhaust Organ, there is a room with a silk refill spindle. Go left from there to access it.', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Dust_09' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478378' },
      { name: 'Lost Flea 13', whichAct: 0, completionPercent: 0, prereqs: ['Cling Grip'], location: 'Top of Bellhart behind breakable wall', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Belltown_04' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478193' },
      { name: 'Lost Flea 14', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Behind breakable wall in wormways. Carried by a Aknid', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Crawl_06' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478450' },
      { name: 'Lost Flea 15', whichAct: 0, completionPercent: 0, prereqs: ['Key of Indolent'], location: 'The Slab: In a small side-room at the edge of the area', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Slab_Cell' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478393' },
      { name: 'Lost Flea 16', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bilewater: In a room behind the Breakable Wall. Defeat the two Snitchflies to rescue it.', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Shadow_28' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478443' },
      { name: 'Lost Flea 17', whichAct: 0, completionPercent: 0, prereqs: ['Clawline'], location: 'Deep Docks: In a room that can only be reached after defeating a nearby Arena Battle', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Dock_03d' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478437' },
      { name: 'Lost Flea 18', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Underworks: Can be collected only by passing through Wisp Thicket area and traversing a room full of saws.', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Under_23' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478419' },
      { name: 'Lost Flea 19', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bilewater: At the end of a trap-filled secret room', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Shadow_10' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478408' },
      { name: 'Lost Flea 20', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Choral Chambers: At the end of a platforming challenge', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Song_14' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478398' },
      { name: 'Lost Flea 21', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Sands of Karak: Secret area behind breakable wall', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Coral_24' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478385' },
      { name: 'Lost Flea 22', whichAct: 0, completionPercent: 0, prereqs: ['Cling Grip'], location: 'Mount Fay: Top of Room in the middle', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Peak_05c' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478380' },
      { name: 'Lost Flea 23', whichAct: 0, completionPercent: 0, prereqs: ['Clawline'], location: 'Top Right of Songclave: Parkour Challange, Access throught Whispering Vaults', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Library_09' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478404' },
      { name: 'Lost Flea 24', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Choral Chambers: Enter the shaft from this section to turn on a fan, and this section to ride the air current to the top', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Song_11' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478416' },
      { name: 'Lost Flea 25', whichAct: 0, completionPercent: 0, prereqs: ['Clawline'], location: 'Whispering Vaults: Hit the box with a long track into its final position to reach this flea.', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Library_01' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478402' },
      { name: 'Lost Flea 26', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Underworks', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Under_21' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478420' },
      { name: 'Lost Flea 27', whichAct: 0, completionPercent: 0, prereqs: ['Faydown Cloak'], location: 'The Slab: Above the lower bench', parsingInfo: { type: 'flag', internalId: 'SavedFlea_Slab_06' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478392' },
  ],
  },
  {
    name: 'Memory Lockets',
    description: 'Memory Lockets',
    items: [
      { name: 'Memory Locket 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Far Fields: Pilgrims Rest, purchased from Mort for 150 Rosaries', parsingInfo: { type: 'flag', internalId: 'PurchasedPilgrimsRestMemoryLocket' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477953' },
      { name: 'Memory Locket 2', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Hunters March far right: In a cage at the end of the spiky corridor. Break the cage to loot it.', parsingInfo: { type: 'sceneData', internalId: ['Ant_20', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478017' },
      { name: 'Memory Locket 3', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Greymoore: On a ledge above the Mitemother', parsingInfo: { type: 'sceneData', internalId: ['Greymoor_16', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478035' },
      { name: 'Memory Locket 4', whichAct: 0, completionPercent: 0, prereqs: ['Faydown Cloak'], location: 'Greymoore: Inside Halfway Home', parsingInfo: { type: 'sceneData', internalId: ['Halfway_01', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478039' },
      { name: 'Memory Locket 5', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bellhart: Purchased from Frey for 330 Rosaries', parsingInfo: { type: 'flag', internalId: 'PurchasedBelltownMemoryLocket' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478204' },
      { name: 'Memory Locket 6', whichAct: 3, completionPercent: 0, prereqs: ['Silk Soar'], location: 'Bellhart town: Silk Soar into the roof', parsingInfo: { type: 'sceneData', internalId: ['Belltown', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478212' },
      { name: 'Memory Locket 7', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bone Bottom: Complete Volatile Flintbeetles Wish', parsingInfo: { type: 'quest', internalId: 'Rock Rollers' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478222' },
      { name: 'Memory Locket 8', whichAct: 0, completionPercent: 0, prereqs: ['Cling Grip'], location: 'Top of the Marrows', parsingInfo: { type: 'sceneData', internalId: ['Bone_18', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478246' },
      { name: 'Memory Locket 9', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Grand Bellway, behind a breakable wall above the bellway station', parsingInfo: { type: 'sceneData', internalId: ['Bellway_City', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478372' },
      { name: 'Memory Locket 10', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Wormways: Bottom right held by a corpse', parsingInfo: { type: 'sceneData', internalId: ['Crawl_09', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478493' },
      { name: 'Memory Locket 11', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Blasted Steps: On a narrow platform above the sands', parsingInfo: { type: 'sceneData', internalId: ['Coral_02', 'Collectable Item Pickup (1)'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478502' },
      { name: 'Memory Locket 12', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Underworks: Found by jumping into the Passage, then dropping down a hole to the left', parsingInfo: { type: 'sceneData', internalId: ['Under_08', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478571' },
      { name: 'Memory Locket 13', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Whispering Vaults: At the top of a tunnel', parsingInfo: { type: 'sceneData', internalId: ['Library_08', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478676' },
      { name: 'Memory Locket 14', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bilewater: At the far left edge of a secret room. Bounce over the infested waters and wall-jump up the vertical space to reach it', parsingInfo: { type: 'sceneData', internalId: ['Shadow_20', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478787' },
      { name: 'Memory Locket 15', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Deep Docks: Held by a corpse at the bottom of a magma-filled area found behind the Breakable Wall', parsingInfo: { type: 'sceneData', internalId: ['Dock_13', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478836' },
      { name: 'Memory Locket 16', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bilewater: Held by a corpse in a breakable cocoon dangling from the ceiling', parsingInfo: { type: 'sceneData', internalId: ['Shadow_27', 'Breakable Hang Sack Memory Locket'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478851' },
      { name: 'Memory Locket 17', whichAct: 0, completionPercent: 0, prereqs: [], location: 'The Slab: Inside the shortcut cave. Look out for a breakable wall as you climb a vertical space', parsingInfo: { type: 'sceneData', internalId: ['Slab_Cell_Quiet', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479017' },
      { name: 'Memory Locket 18', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Memorium, after platforming section', parsingInfo: { type: 'sceneData', internalId: ['Arborium_05', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479110' },
      { name: 'Memory Locket 19', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Farlands: Guarded by a void-powered Skarrgard.', parsingInfo: { type: 'sceneData', internalId: ['Bone_East_25', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479196' },
      { name: 'Memory Locket 20', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Sands of Karak: Held by a corpse at the top of the area', parsingInfo: { type: 'sceneData', internalId: ['Coral_23', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479204' },
  ],
  },
  {
    name: 'Bosses',
    description: 'Bosses',
    items: [
      { name: 'Moss Mother',                whichAct: 1, completionPercent: 0, prereqs: [], location: 'Appearing in the Ruined Chapel at the end of Moss Grotto.', parsingInfo: { type: 'flag', internalId: 'defeatedMossMother' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=476904' },
      { name: 'Bell Beast',                 whichAct: 1, completionPercent: 0, prereqs: [], location: 'The Bell Beast can be found the very top of the Marrow.' , parsingInfo: { type: 'flag', internalId: 'defeatedBellBeast' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477879' },
      { name: 'Lace',                       whichAct: 1, completionPercent: 0, prereqs: [], location: 'Encounter her at the entrance of deep docks.', parsingInfo: { type: 'flag', internalId: 'defeatedLace1' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=476915' },
      { name: 'Fourth Chorus',              whichAct: 1, completionPercent: 0, prereqs: [], location: 'Wakes up to fight you after receiving the Drifter\'s Cloak.', parsingInfo: { type: 'flag', internalId: 'defeatedSongGolem' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477978'},
      { name: 'Savage Beastfly',            whichAct: 1, completionPercent: 0, prereqs: [], location: 'Deep inside the Chapel of the Beast.', parsingInfo: { type: 'flag', internalId: 'defeatedBoneFlyerGiant' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478019'},
      { name: 'Sister Splinter',            whichAct: 1, completionPercent: 0, prereqs: [], location: 'At north end of Shellwood.', parsingInfo: { type: 'flag', internalId: 'defeatedSplinterQueen' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478137' },
      { name: 'Skull Tyrant',               whichAct: 1, completionPercent: 0, prereqs: [], location: 'Skull Tyrant can be fought first in The Marrow(center dome).' , parsingInfo: { type: 'flag', internalId: 'skullKingDefeated' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478136'},
      { name: 'Moorwing',                   whichAct: 1, completionPercent: 0, prereqs: [], location: '3 rooms west of the Greymoor Bellway.', parsingInfo: { type: 'flag', internalId: 'defeatedVampireGnatBoss' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478453'},
      { name: 'Widow',                      whichAct: 1, completionPercent: 0, prereqs: [], location: 'Encountered in the room just north of Bellhart.', parsingInfo: { type: 'flag', internalId: 'spinnerDefeated' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478138'},
      { name: 'Great Conchflies',           whichAct: 1, completionPercent: 0, prereqs: [], location: 'In the northwest section of the Blasted Steps, Hornet encounters a room filled with pinkish conch shells.', parsingInfo: { type: 'flag', internalId: 'defeatedCoralDrillers' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478506' },
      { name: 'Last Judge',                 whichAct: 1, completionPercent: 0, prereqs: [], location: 'Ring all five bells and play the Needolin in front of the door to begin the fight. If it\'s proving difficult, you can skip it by fighting Phantom instead.', parsingInfo: { type: 'flag', internalId: 'defeatedLastJudge' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478545'},
      { name: 'Phantom',                    whichAct: 1, completionPercent: 0, prereqs: [], location: 'In a room at the top of the Exhaust Organ, which acts as an alternative entrance to the Citadel, skipping the Last Judge boss.', parsingInfo: { type: 'flag', internalId: 'defeatedPhantom' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478370' },
      { name: 'Cogwork Dancers',            whichAct: 2, completionPercent: 0, prereqs: [], location: 'Cogwork Dancers are fought in the central area of Cogwork Core.', parsingInfo: { type: 'flag', internalId: 'defeatedCogworkDancers' }, mapLink:'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478606' },
      { name: 'Trobbio',                    whichAct: 2, completionPercent: 0, prereqs: [], location: 'Encountered at The Stage after traversing through the Whispering Vaults.', parsingInfo: { type: 'flag', internalId: 'defeatedTrobbio' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480343' },
      { name: 'Garmond and Zaza',           whichAct: 2, completionPercent: 0, prereqs: [], location: 'South east part of Songclave, Only available in Act 2.', parsingInfo: { type: 'journal', internalId: ['Garmond_Zaza',1] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479361' },
      { name: 'Forebrothers Signis & Gron', whichAct: 2, completionPercent: 0, prereqs: [], location: 'In an earlier room in the Deep Docks.', parsingInfo: { type: 'flag', internalId: 'defeatedDockForemen' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478831' },
      { name: 'The Unravelled',             whichAct: 2, completionPercent: 0, prereqs: [], location: 'The Unravelled is a hidden boss found at the top of Whiteward, at the bottom of a disposal pit locked by the Surgeon\'s Key.', parsingInfo: { type: 'flag', internalId: 'wardBossDefeated' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478926' },
      { name: 'Disgraced Chef Lugoli',      whichAct: 2, completionPercent: 0, prereqs: ['Faydown Cloak'], location: 'North east of Sinner\'s road in the kitchen.', parsingInfo: { type: 'flag', internalId: 'defeatedRoachkeeperChef' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478992'},
      { name: 'Father of the Flame',        whichAct: 2, completionPercent: 0, prereqs: ['Faydown Cloak'], location: 'West corner of Wisp Thicket.', parsingInfo: { type: 'flag', internalId: 'defeatedWispPyreEffigy' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479155' },
      { name: 'Groal the Great',            whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found in Bilehaven, at the top of Bilewater. ', parsingInfo: { type: 'flag', internalId: 'DefeatedSwampShaman' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478861'},
      { name: 'Craggler',                   whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found across the pit from the Mosshome exit above Bone Bottom.', parsingInfo: { type: 'flag', internalId: 'roofCrabDefeated' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478088'},
      { name: 'Voltvyrm',                   whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found in Voltnest within Sands of Karak.', parsingInfo: { type: 'flag', internalId: 'defeatedZapCoreEnemy' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479223'},
      { name: 'Raging Conchfly',            whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found in the north-west area of the Sands of Karak.' , parsingInfo: { type: 'flag', internalId: 'defeatedCoralDrillerSolo' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479227'},
      { name: 'First Sinner',               whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found in the lower area of the Slab, accessible after obtaining the Key of Apostate.', parsingInfo: { type: 'flag', internalId: 'defeatedFirstWeaver' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479023' },
      { name: 'Broodmother',                whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found in a cave in the Slab after accepting a Grand Hunt quest in Songclave.', parsingInfo: { type: 'flag', internalId: 'defeatedBroodMother' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479255'},
      { name: 'Second Sentinel',            whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can only be fought after beginning the Final Audience Wish, found next in south east of High halls.', parsingInfo: { type: 'flag', internalId: 'defeatedSongChevalierBoss' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479253'},
      { name: 'Shakra',                     whichAct: 2, completionPercent: 0, prereqs: [], location: 'Go East of Bellhart after completing Trail\'s End and hitting the ring as you enter the Greymoor area', parsingInfo: { type: 'journal', internalId: ['Shakra', 1] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479822' },
      { name: 'Grand Mother Silk',          whichAct: 2, completionPercent: 0, prereqs: [], location: 'Can be found above cogwork core in The Cradle.' ,parsingInfo: { type: 'journal', internalId: ['Silk Boss', 1] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479099' },
      { name: 'Bell Eater',                 whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in any Bellway Station after the beginning of Act 3.', parsingInfo: { type: 'flag', internalId: 'bellCentipedeAppeared' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479264'},
      { name: 'Lost Garmond',               whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in the Blasted Steps, in a room west of the Bellway. He can only be fought during the Hero\'s Call wish.', parsingInfo: { type: 'flag', internalId: 'garmondBlackThreadDefeated' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479452' },
      { name: 'Crawfather',                 whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in Greymoor, in the basement of the large building in Craw Lake.', parsingInfo: { type: 'flag', internalId: 'defeatedCrowCourt' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479740'},
      { name: 'Plasmified Zango',           whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in a secret room within western Wormways during Act 3', parsingInfo: { type: 'journal', internalId: ['Blue Assistant',1] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479273' },
      { name: 'Watcher at the Edge',        whichAct: 3, completionPercent: 0, prereqs: ['Silk Soar','Needolin'], location: 'Can be found West(center area) of Sand of karak', parsingInfo: { type: 'flag', internalId: 'defeatedGreyWarrior' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479494' },
      { name: 'Palestag',                   whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in Lost Verdania' , parsingInfo: { type: 'flag', internalId: 'defeatedWhiteCloverstag' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479408'},
      { name: 'Clover Dancers',             whichAct: 3, completionPercent: 0, prereqs: [], location: 'Encountered at the very top of Lost Verdania, after collecting enough memory orbs throughout the map', parsingInfo: { type: 'flag', internalId: 'defeatedCloverDancers' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479427' },
      { name: 'Gurr the Outcast',           whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in Far Fields after promising the The Hidden Hunter Wish', parsingInfo: { type: 'flag', internalId: 'defeatedAntTrapper' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479467'},
      { name: 'Tormented Trobbio',          whichAct: 3, completionPercent: 0, prereqs: [], location: 'Encountered at The Stage,above Bellway Station.', parsingInfo: { type: 'flag', internalId: 'defeatedTormentedTrobbio' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479377'},
      { name: 'Pinstress',                  whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in Mount Fay, in the same area as the bench halfway up the mountain.', parsingInfo: { type: 'flag', internalId: 'PinstressPeakBattleAccepted' }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479464'},
      { name: 'Shrine Guardian Seth',       whichAct: 3, completionPercent: 0, prereqs: ['Silk Soar'], location: 'Can be fought in a hidden area in Shellwood, accessed through a breakable wall in the Grand Gate\'s lift shaft.' , parsingInfo: { type: 'flag', internalId: 'defeatedSeth' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480352' },
      { name: 'Nyleth',                     whichAct: 3, completionPercent: 0, prereqs: [], location: 'Section behind a breakable wall on the left of the elevator shaft of the Grand Gate.' , parsingInfo: { type: 'flag', internalId: 'defeatedFlowerQueen' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479404' },
      { name: 'Skarrsinger Karmelita',      whichAct: 3, completionPercent: 0, prereqs: ['Elegy Of The Deep','Silk Soar'], location: ' Can be found in the northeast of Far Fields.', parsingInfo: { type: 'flag', internalId: 'defeatedAntQueen' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479198' },
      { name: 'Crust King Khann',           whichAct: 3, completionPercent: 0, prereqs: ['Elegy Of The Deep'], location: 'Can be found in the Coral Tower, Northeast in Sand of Karak.', parsingInfo: { type: 'flag', internalId: 'defeatedCoralKing' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479392' },
      { name: 'Summoned Saviour',           whichAct: 3, completionPercent: 0, prereqs: [], location: 'Can be found in the extreme bottom left of Bonegrave behind a breakable wall, a sub area of Moss Grotto.', parsingInfo: { type: 'journal', internalId: ['Abyss Mass', 1] }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479494'},
      { name: 'Lost Lace',                  whichAct: 3, completionPercent: 0, prereqs: [], location: 'Located in The Abyss, under the vast Void Ocean that lies within.', parsingInfo: { type: 'journal', internalId:['Lost Lace', 1] }, mapLink:  'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479471'},
    ]
  },
  {
    name: 'Keys',
    description: 'Keys',
    items: [
      { name: 'Simple Key 1', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Bone Bottom: Purchased from Pebb for 500 Rosaries', parsingInfo: { type: 'flag', internalId: 'PurchasedBonebottomFaithToken' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477839' },
      { name: 'Simple Key 2', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Sinners Road Top Right (Defeat Roachkeeper)', parsingInfo: { type: 'flag', internalId: 'CollectedDustCageKey' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478280' },
      { name: 'Simple Key 3', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Songclave: Can be purchased from Jubilana for 650 Rosaries', parsingInfo: { type: 'flag', internalId: 'MerchantEnclaveSimpleKey' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478880' },
      { name: 'Simple Key 4', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Sands of Karak: Far-right, held by a corpse sitting on the bench', parsingInfo: { type: 'sceneData', internalId: ['Bellshrine_Coral', 'Collectable Item Pickup'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479215' },
      { name: 'Key of Indolent', whichAct: 0, completionPercent: 0, prereqs: [], location: 'The Slab: At the edge of a room entered from above', parsingInfo: { type: 'flag', internalId: 'HasSlabKeyA' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478467' },
      { name: 'Key of Heretic', whichAct: 0, completionPercent: 0, prereqs: [], location: 'The Slab: Dropped by the final enemy in a room entered from above', parsingInfo: { type: 'flag', internalId: 'HasSlabKeyB' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478474' },
      { name: 'Key of Apostate', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Putrified Ducts: Bottom-left: Inside a cage. Hit it a few times to get the key out', parsingInfo: { type: 'flag', internalId: 'HasSlabKeyC' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478963' },
      { name: 'Architects Key', whichAct: 0, completionPercent: 0, prereqs: ['Aquire 25 Tools'], location: 'Underworks: Can be purchased from Twelfth Architect for 110 Rosaries. Used to unlock the Chapel of the Architect', parsingInfo: { type: 'flag', internalId: 'PurchasedArchitectKey' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478729' },
      { name: 'Diving Bell Key', whichAct: 3, completionPercent: 0, prereqs: [], location: 'Deep Docks: Used for the Diving Bell', parsingInfo: { type: 'flag', internalId: 'BallowGivenKey' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479279' },
      { name: 'White Key', whichAct: 0, completionPercent: 0, prereqs: [], location: 'Songclave: On a corpse at the edge of the area. Sold by Jubilana if you dont pick it up before completing The Wandering Merchant Wish. Unlocks the Locked Elevator in Whiteward', parsingInfo: { type: 'flag', internalId: 'collectedWardKey' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478599' },
      { name: 'Surgeons Key', whichAct: 0, completionPercent: 0, prereqs: ['Clawline'], location: 'Whiteward: Top-Right: Dangle from a metal ring for a few seconds, and a corpse will eventually appear holding this key. Used to open locked trapdoor in Whiteward', parsingInfo: { type: 'flag', internalId: 'collectedWardBossKey' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478923' },
  ],
  },
   {
    name: 'Hunter\'s Journal',
    description: 'Hunter\'s Journal',
    items: [
      {name: 'Mossgrub',                    killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['MossBone Crawler', 25]},  mapLink: ''},
      {name: 'Massive Mossgrub',            killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['MossBone Crawler Fat', 3]},  mapLink: ''},
      {name: 'Mossmir',                     killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['MossBone Fly', 20]},  mapLink: ''},
      {name: 'Moss Mother',                 killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Mossbone Mother', 3]},  mapLink: ''},
      {name: 'Aknid',                       killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Aspid Collector', 15]},  mapLink: ''},
      {name: 'Skull Scuttler',              killsRequired: 35, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Goomba', 35]},  mapLink: ''},
      {name: 'Skullwing',                   killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Goomba Bounce Fly', 15]},  mapLink: ''},
      {name: 'Skull Brute',                 killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Goomba Large', 15]},  mapLink: ''},
      {name: 'Skull Tyrant',                killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Skull King', 1]},  mapLink: ''},
      {name: 'Kilik',                       killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Crawler', 25]},  mapLink: ''},
      {name: 'Beastfly',                    killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Flyer', 30]},  mapLink: ''},
      {name: 'Savage Beastfly',             killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bone Flyer Giant', 2]},  mapLink: ''},
      {name: 'Caranid',                     killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Circler', 25]},  mapLink: ''},
      {name: 'Vicious Caranid',             killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Circler Vicious', 15]},  mapLink: ''},
      {name: 'Hardbone Hopper',             killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hopper', 20]},  mapLink: ''},
      {name: 'Hardbone Elder',              killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hopper Giant', 10]},  mapLink: ''},
      {name: 'Tarmite',                     killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Spitter', 10]},  mapLink: ''},
      {name: 'Mawling',                     killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Roller', 30]},  mapLink: ''},
      {name: 'Marrowmaw',                   killsRequired: 8,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bone Thumper', 8]},  mapLink: ''},
      {name: 'Hoker',                       killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Spine Floater', 15]},  mapLink: ''},
      {name: 'Flintbeetle',                 killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Rock Roller', 3]},  mapLink: ''},
      {name: 'Rhinogrund',                  killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Rhino', 2]},  mapLink: ''},
      {name: 'Gromling',                    killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crypt Worm', 25]},  mapLink: ''},
      {name: 'Grom',                        killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Worm', 10]},  mapLink: ''},
      {name: 'Bell Beast',                  killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bone Beast', 1]},  mapLink: ''},
      {name: 'Pilgrim Groveller',           killsRequired: 35, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 03', 35]},  mapLink: ''},
      {name: 'Pilgrim Pouncer',             killsRequired: 35, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 01', 35]},   mapLink: ''},
      {name: 'Pilgrim Hornfly',             killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 04', 15]},  mapLink: ''},
      {name: 'Pilgrim Hulk',                killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 02', 10]},  mapLink: ''},
      {name: 'Pilgrim Bellbearer',          killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Bell Thrower', 10]},  mapLink: ''},
      {name: 'Winged Pilgrim',              killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Fly', 25]},  mapLink: ''},
      {name: 'Elder Pilgrim',               killsRequired: 5,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '',  parsingInfo:{type: 'journal',  internalId: ['Pilgrim 05', 5]},  mapLink: ''},
      {name: 'Winged Pilgrim Bellbearer',   killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Bellthrower Fly', 10]},  mapLink: ''},
      {name: 'Pilgrim Hiker',               killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Hiker', 10]},  mapLink: ''},
      {name: 'Pilgrim Guide',               killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim StaffWielder', 15]},  mapLink: ''},
      {name: 'Overgrown Pilgrim',           killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Moss Spitter', 20]},  mapLink: ''},
      {name: 'Covetous Pilgrim',            killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Rosary Pilgrim', 2]},  mapLink: ''},
      {name: 'Snitchfly',                   killsRequired: 4,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Rosary Thief', 4]},  mapLink: ''},
      {name: 'Lavalug',                     killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Tar Slug', 12]},  mapLink: ''},
      {name: 'Lavalarga',                   killsRequired: 8,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Tar Slug Huge', 8]},  mapLink: ''},
      {name: 'Smelt Shoveller',             killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Dock Worker', 25]},  mapLink: ''},
      {name: 'Flintstone Flyer',            killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Dock Flyer', 25]},  mapLink: ''},
      {name: 'Flintflame Flyer',            killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Dock Bomber', 10]},  mapLink: ''},
      {name: 'Smokerock Sifter',            killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Shield Dock Worker', 10]},  mapLink: ''},
      {name: 'Deep Diver',                  killsRequired: 5,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Dock Charger', 5]},  mapLink: ''},
      {name: 'Forebrothers Signis & Gron',  killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Dock Guard Thrower', 1]},  mapLink: ''},
      {name: 'Cragglite',                   killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Small Crab', 3]},  mapLink: ''},
      {name: 'Craggler',                    killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Roof Crab', 1]},  mapLink: ''},
      {name: 'Brushflit',                   killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Fields Flock Flyers', 15]},  mapLink: ''},
      {name: 'Fertid',                      killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Fields Goomba', 25]},  mapLink: ''},
      {name: 'Flapping Fertid',             killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Fields Flyer', 20]},  mapLink: ''},
      {name: 'Fourth Chorus',               killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Golem', 1]},  mapLink: ''},
      {name: 'Skarrlid',                    killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Tiny', 25]},  mapLink: ''},
      {name: 'Skarrwing',                   killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Buzzer', 30]},  mapLink: ''},
      {name: 'Skarr Scout',                 killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Child', 20]},  mapLink: ''},
      {name: 'Skarr Stalker',               killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter', 15]},  mapLink: ''},
      {name: 'Spear Skarr',                 killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Fly', 10]},  mapLink: ''},
      {name: 'Skarrgard',                   killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Throw', 2]},  mapLink: ''},
      {name: 'Gurr the Outcast',            killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Trapper', 1]},  mapLink: ''},
      {name: 'Last Claw',                   killsRequired: 6,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bone Hunter Chief', 6]},  mapLink: ''},
      {name: 'Skarrsinger Karmelita',       killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Hunter Queen', 1]},  mapLink: ''},
      {name: 'Mite',                        killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Mite', 30]},  mapLink: ''},
      {name: 'Fluttermite',                 killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Mitefly', 25]},  mapLink: ''},
      {name: 'Mitemother',                  killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Gnat Giant', 10]},  mapLink: ''},
      {name: 'Dreg Catcher',                killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Farmer Catcher', 20]},  mapLink: ''},
      {name: 'Silk Snipper',                killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Farmer Scissors', 25]},  mapLink: ''},
      {name: 'Thread Raker',                killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Farmer Centipede', 15]},  mapLink: ''},
      {name: 'Moorwing',                    killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Vampire Gnat', 1]},  mapLink: ''},
      {name: 'Wisp',                        killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Wisp', 15]},  mapLink: ''},
      {name: 'Burning Bug',                 killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Farmer Wisp', 8]},  mapLink: ''},
      {name: 'Father of the Flame',         killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Wisp Pyre Effigy', 1]},  mapLink: ''},
      {name: 'Craw',                        killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crow', 25]},  mapLink: ''},
      {name: 'Tallcraw',                    killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crowman', 20]},  mapLink: ''},
      {name: 'Squatcraw',                   killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crowman Dagger', 15]},  mapLink: ''},
      {name: 'Craw Juror',                  killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crowman Juror Tiny', 15]},  mapLink: ''},
      {name: 'Tallcraw Juror',              killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crowman Juror', 10]},  mapLink: ''},
      {name: 'Squatcraw Juror',             killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId:  ['Crowman Dagger Juror', 8]},  mapLink: ''},
      {name: 'Crawfather',                  killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Crawfather', 1]},  mapLink: ''},
      {name: 'Muckmaggot',                  killsRequired: 80, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Maggots', 80]},  mapLink: ''},
      {name: 'Slubberlug',                  killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Dustroach Pollywog', 12]},  mapLink: ''},
      {name: 'Muckroach',                   killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Dustroach', 20]},  mapLink: ''},
      {name: 'Bloatroach',                  killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bloat Roach', 12]},  mapLink: ''},
      {name: 'Roachcatcher',                killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Roachfeeder Short', 20]},  mapLink: ''},
      {name: 'Roachfeeder',                 killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Roachfeeder Tall', 20]},  mapLink: ''},
      {name: 'Roachkeeper',                 killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Roachkeeper', 10]},  mapLink: ''},
      {name: 'Roachserver',                 killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Roachkeeper Chef Tiny', 10]},  mapLink: ''},
      {name: 'Disgraced Chef Lugoli',       killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Roachkeeper Chef', 1]},  mapLink: ''},
      {name: 'Wraith',                      killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Wraith', 10]},  mapLink: ''},
      {name: 'Mothleaf Lagnia',             killsRequired: 25,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Drifter', 25]},  mapLink: ''},
      {name: 'Miremite',                    killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Goomba', 20]},  mapLink: ''},
      {name: 'Swamp Squit',                 killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Mosquito', 30]},  mapLink: ''},
      {name: 'Spit Squit',                  killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Mosquito Skinny', 20]},  mapLink: ''},
      {name: 'Stilkin',                     killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Muckman', 15]},  mapLink: ''},
      {name: 'Stilkin Trapper',             killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Muckman Tall', 12]},  mapLink: ''},
      {name: 'Groal the Great',             killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Shaman', 1]},  mapLink: ''},
      {name: 'Barnak',                      killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Barnacle', 8]},  mapLink: ''},
      {name: 'Ductsucker',                  killsRequired: 6, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Swamp Ductsucker', 6]},  mapLink: ''},
      {name: 'Pond Skipper',                killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pond Skater', 15]},  mapLink: ''},
      {name: 'Pondcatcher',                 killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Fisher', 20]},  mapLink: ''},
      {name: 'Shellwood Gnat',              killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Shellwood Gnat', 15]},  mapLink: ''},
      {name: 'Wood Wasp',                   killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Shellwood Wasp', 12]},  mapLink: ''},
      {name: 'Splinter',                    killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Stick Insect', 12]},  mapLink: ''},
      {name: 'Splinterhorn',                killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Stick Insect Charger', 10]},  mapLink: ''},
      {name: 'Splinterbark',                killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Stick Insect Flyer', 10]},  mapLink: ''},
      {name: 'Sister Splinter',             killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId:  ['Splinter Queen', 1]},  mapLink: ''},
      {name: 'Phacia',                      killsRequired: 25,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Flower Drifter', 25]},  mapLink: ''},
      {name: 'Pollenica',                   killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bloom Shooter', 10]},  mapLink: ''},
      {name: 'Gahlia',                      killsRequired: 20,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Bloom Puncher', 20]},  mapLink: ''},
      {name: 'Shrine Guardian Seth',        killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Seth', 1]},  mapLink: ''},
      {name: 'Nyleth',                      killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Flower Queen', 1]},  mapLink: ''},
      {name: 'Furm',                        killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bell Goomba', 25]},  mapLink: ''},
      {name: 'Winged Furm',                 killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bell Fly', 12]},  mapLink: ''},
      {name: 'Pharlid',                     killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Blade Spider', 20]},  mapLink: ''},
      {name: 'Pharlid Diver',               killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Blade Spider Hang', 10]},  mapLink: ''},
      {name: 'Shardillard',                 killsRequired: 3, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Shell Fossil Mimic', 3]},  mapLink: ''},
      {name: 'Sandcarver',                  killsRequired: 40, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Sand Centipede', 40]},  mapLink: ''},
      {name: 'Squirrm',                     killsRequired: 4, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Judge Child', 4]},  mapLink: ''},
      {name: 'Judge',                       killsRequired: 15,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Judge', 15]},  mapLink: ''},
      {name: 'Last Judge',                  killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Last Judge', 1]},  mapLink: ''},
      {name: 'Coral Furm',                  killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Spike Goomba', 15]},  mapLink: ''},
      {name: 'Driznit',                     killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Conch Shooter', 25]},  mapLink: ''},
      {name: 'Driznarga',                   killsRequired: 14, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Conch Shooter Heavy', 14]},  mapLink: ''},
      {name: 'Pokenabbin',                  killsRequired: 16, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Conch Stabber', 16]},  mapLink: ''},
      {name: 'Conchfly',                    killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Conch Driller', 8]},  mapLink: ''},
      {name: 'Great Conchfly',              killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Conch Driller Giant', 2]},  mapLink: ''},
      {name: 'Crustcrawler',                killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Goombas', 10]},  mapLink: ''},
      {name: 'Crustcrag',                   killsRequired: 6, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Goomba Large', 6]},  mapLink: ''},
      {name: 'Kai',                         killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Swimmer Fat', 10]},  mapLink: ''},
      {name: 'Spinebeak Kai',               killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Poke Swimmer', 10]},  mapLink: ''},
      {name: 'Steelspine Kai',              killsRequired: 15,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Spike Swimmer', 15]},  mapLink: ''},
      {name: 'Yuma',                        killsRequired: 16, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Swimmer Small', 16]},  mapLink: ''},
      {name: 'Yumama',                      killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Big Jellyfish', 3]},  mapLink: ''},
      {name: 'Karaka',                      killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Warrior', 10]},  mapLink: ''},
      {name: 'Kakri',                       killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Coral Flyer', 10]},  mapLink: ''},
      {name: 'Yago',                        killsRequired: 12,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Flyer Throw', 12]},  mapLink: ''},
      {name: 'Karak Gor',                   killsRequired: 8,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Brawler', 8]},  mapLink: ''},
      {name: 'Alita',                       killsRequired: 6,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Hunter', 6]},  mapLink: ''},
      {name: 'Corrcrust Karaka',            killsRequired: 6,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Bubble Brute', 6]},  mapLink: ''},
      {name: 'Crust King Khann',            killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral King', 1]},  mapLink: ''},
      {name: 'Watcher at the Edge',         killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Coral Warrior Grey', 1]},  mapLink: ''},
      {name: 'Voltvyrm',                    killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Zap Core Enemy', 1]},  mapLink: ''},
      {name: 'Drapefly',                    killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Citadel Bat', 30]},  mapLink: ''},
      {name: 'Drapelord',                   killsRequired: 4,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Citadel Bat Large', 4]},  mapLink: ''},
      {name: 'Drapemite',                   killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Mite Heavy', 20]},  mapLink: ''},
      {name: 'Giant Drapemite',             killsRequired: 6,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Understore Mite Giant', 6]},  mapLink: ''},
      {name: 'Underworker',                 killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Understore Small', 15]},  mapLink: ''},
      {name: 'Underscrub',                  killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 03 Understore', 20]},  mapLink: ''},
      {name: 'Undersweep',                  killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Staff Understore', 10]},  mapLink: ''},
      {name: 'Underpoke',                   killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Understore Poker', 25]},  mapLink: ''},
      {name: 'Underloft',                   killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Understore Thrower', 25]},  mapLink: ''},
      {name: 'Undercrank',                  killsRequired: 4, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Understore Heavy', 4]},  mapLink: ''},
      {name: 'Envoy',                       killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Pilgrim 01', 20]},  mapLink: ''},
      {name: 'Choir Pouncer',               killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 01 Song', 30]},  mapLink: ''},
      {name: 'Choir Hornhead',              killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 02 Song', 15]},  mapLink: ''},
      {name: 'Choir Bellbearer',            killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 03 Song', 25]},  mapLink: ''},
      {name: 'Choir Flyer',                 killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim 04 Song', 20]},  mapLink: ''},
      {name: 'Choir Elder',                 killsRequired: 6,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Pilgrim Stomper Song', 6]},  mapLink: ''},
      {name: 'Choristor',                   killsRequired: 25,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Pilgrim 03', 25]},  mapLink: ''},
      {name: 'Reed',                        killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Reed', 30]},  mapLink: ''},
      {name: 'Grand Reed',                  killsRequired: 12,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Reed Grand', 12]},  mapLink: ''},
      {name: 'Choir Clapper',               killsRequired: 3, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Heavy Sentry', 3]},  mapLink: ''},
      {name: 'Clawmaiden',                  killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Handmaiden', 10]},  mapLink: ''},
      {name: 'Memoria',                     killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Arborium Keeper', 2]},  mapLink: ''},
      {name: 'Minister',                    killsRequired: 15,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Administrator', 15]},  mapLink: ''},
      {name: 'Maestro',                     killsRequired: 6,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Pilgrim Maestro', 6]},  mapLink: ''},
      {name: 'Second Sentinel',             killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Knight', 1]},  mapLink: ''},
      {name: 'Dreg Husk',                   killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Threaded Husk', 8]},  mapLink: ''},
      {name: 'Dregwheel',                   killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Threaded Husk Spin', 8]},  mapLink: ''},
      {name: 'Surgeon',                     killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Pilgrim 02', 3]},  mapLink: ''},
      {name: 'Mortician',                   killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Song Creeper', 10]},  mapLink: ''},
      {name: 'The Unravelled',              killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Conductor Boss', 1]},  mapLink: ''},
      {name: 'Cogwork Underfly',            killsRequired: 25, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Understore Automaton', 25]},  mapLink: ''},
      {name: 'Cogwork Hauler',              killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Understore Automaton EX', 12]},  mapLink: ''},
      {name: 'Cogwork Crawler',             killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton Goomba', 15]},  mapLink: ''},
      {name: 'Cogworker',                   killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton Fly', 15]},  mapLink: ''},
      {name: 'Cogwork Spine',               killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton Fly Spike', 10]},  mapLink: ''},
      {name: 'Cogwork Choirbug',            killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton 01', 20]},  mapLink: ''},
      {name: 'Cogwork Cleanser',            killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton 02', 12]},  mapLink: ''},
      {name: 'Cogwork Defender',            killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton Shield', 8]},  mapLink: ''},
      {name: 'Cogwork Clapper',             killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Automaton Ball', 1]},  mapLink: ''},
      {name: 'Cogwork Dancers',             killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Clockwork Dancer', 1]},  mapLink: ''},
      {name: 'Vaultborn',                   killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Song Scholar Acolyte', 20]},  mapLink: ''},
      {name: 'Lampbearer',                  killsRequired: 20,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Lightbearer', 20]},  mapLink: ''},
      {name: 'Scrollreader',                killsRequired: 15,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Scrollkeeper', 15]},  mapLink: ''},
      {name: 'Vaultkeeper',                 killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Scholar', 10]},  mapLink: ''},
      {name: 'Trobbio',                     killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Trobbio', 1]},  mapLink: ''},
      {name: 'Tormented Trobbio',           killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Tormented Trobbio', 1]},  mapLink: ''},
      {name: 'Penitent',                    killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Slab Prisoner Leaper New', 8]},  mapLink: ''},
      {name: 'Puny Penitent',               killsRequired: 6, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Slab Prisoner Fly New', 6]},  mapLink: ''},
      {name: 'Freshfly',                    killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Slab Fly Small Fresh', 20]},  mapLink: ''},
      {name: 'Scabfly',                     killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Slab Fly Small', 15]},  mapLink: ''},
      {name: 'Guardfly',                    killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Slab Fly Mid', 10]},  mapLink: ''},
      {name: 'Wardenfly',                   killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Slab Fly Large', 8]},  mapLink: ''},
      {name: 'Broodmother',                 killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Slab Fly Broodmother', 1]},  mapLink: ''},
      {name: 'Driftlin',                    killsRequired: 20, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Peaks Drifter', 20]},  mapLink: ''},
      {name: 'Mnemonid',                    killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Crystal Drifter', 10]},  mapLink: ''},
      {name: 'Mnemonord',                   killsRequired: 3,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Crystal Drifter Giant', 3]},  mapLink: ''},
      {name: 'Servitor Ignim',              killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Weaver Servitor', 8]},  mapLink: ''},
      {name: 'Servitor Boran',              killsRequired: 5, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Weaver Servitor Large', 5]},  mapLink: ''},
      {name: 'Winged Lifeseed',             killsRequired: 8, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Lifeblood Fly', 8]},  mapLink: ''},
      {name: 'Plasmid',                     killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Worm BlueBlood', 15]},  mapLink: ''},
      {name: 'Plasmidas',                   killsRequired: 6, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Bone Worm BlueTurret', 6]},  mapLink: ''},
      {name: 'Plasmified Zango',            killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Blue Assistant', 1]},  mapLink: ''},
      {name: 'Leaf Glider',                 killsRequired: 12, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Lilypad Fly', 12]},  mapLink: ''},
      {name: 'Leaf Roller',                 killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Grass Goomba', 10]},  mapLink: ''},
      {name: 'Pendra',                      killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Hornet Dragonfly', 10]},  mapLink: ''},
      {name: 'Pendragor',                   killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Dragonfly Large', 10]},  mapLink: ''},
      {name: 'Nuphar',                      killsRequired: 6, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Lilypad Trap', 6]},  mapLink: ''},
      {name: 'Cloverstag',                  killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Cloverstag', 10]},  mapLink: ''},
      {name: 'Palestag',                    killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Cloverstag White', 1]},  mapLink: ''},
      {name: 'Kindanir',                    killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Grasshopper Child', 10]},  mapLink: ''},
      {name: 'Verdanir',                    killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Grasshopper Slasher', 10]},  mapLink: ''},
      {name: 'Escalion',                    killsRequired: 10,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Grasshopper Fly', 10]},  mapLink: ''},
      {name: 'Clover Dancers',              killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Clover Dancer', 1]},  mapLink: ''},
      {name: 'Shadow Creeper',              killsRequired: 16, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Abyss Crawler', 16]},  mapLink: ''},
      {name: 'Shadow Charger',              killsRequired: 6, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Abyss Crawler Large', 6]},  mapLink: ''},
      {name: 'Gloomsac',                    killsRequired: 15, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Gloomfly', 15]},  mapLink: ''},
      {name: 'Gargant Gloom',               killsRequired: 4,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Gloom Beast', 4]},  mapLink: ''},
      {name: 'Void Tendrils',               killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Void Tendrils', 1]},  mapLink: ''},
      {name: 'Void Mass',                   killsRequired: 8,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Black Thread Core', 8]},  mapLink: ''},
      {name: 'Summoned Saviour',            killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Abyss Mass', 1]},  mapLink: ''},
      {name: 'Wingmould',                   killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['White Palace Fly', 10]},  mapLink: ''},
      {name: 'Garpid',                      killsRequired: 30, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Centipede Trap', 30]},  mapLink: ''},
      {name: 'Imoba',                       killsRequired: 4,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Spike Lazy Flyer', 4]},  mapLink: ''},
      {name: 'Skrill',                      killsRequired: 10, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Surface Scuttler', 10]},  mapLink: ''},
      {name: 'Bell Eater',                  killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Giant Centipede', 1]},  mapLink: ''},
      {name: 'Huge Flea',                   killsRequired: 1, whichAct: 0, completionPercent: 0, prereqs: [],   location: '', parsingInfo:{type: 'journal', internalId: ['Giant Flea', 1]},  mapLink: ''},
      {name: 'Shakra',                      killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Shakra', 1]},  mapLink: ''},
      {name: 'Garmond & Zaza',              killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Garmond_Zaza', 1]},  mapLink: ''},
      {name: 'Lost Garmond',                killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Garmond', 1]},  mapLink: ''},
      {name: 'Pinstress',                   killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Pinstress Boss', 1]},  mapLink: ''},
      {name: 'Widow',                       killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Spinner Boss', 1]},  mapLink: ''},
      {name: 'First Sinner',                killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['First Weaver', 1]},  mapLink: ''},
      {name: 'Phantom',                     killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Phantom', 1]},  mapLink: ''},
      {name: 'Lace',                        killsRequired: 2,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Lace', 2]},  mapLink: ''},
      {name: 'Grand Mother Silk',           killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Silk Boss', 1]},  mapLink: ''},
      {name: 'Lost Lace',                   killsRequired: 1,  whichAct: 0, completionPercent: 0, prereqs: [],  location: '', parsingInfo:{type: 'journal', internalId: ['Lost Lace', 1]},  mapLink: ''}
    ]
  }
];

// Check if a category item is unlocked in the save data
export function isItemUnlockedInPlayerSave(itemParsingInfo: ParsingInfo, saveData: any): { unlocked: boolean, returnValue?: number } {
  const playerData = saveData.playerData ?? {};
  const typeHandlers = {
    flag: (flagName: string) => {
      const val = !!playerData[flagName];
      return { unlocked: val };
    },
    flagInt: ([flagName, value]: [string, number]) => {
      const actual = playerData[flagName] ?? 0;
      return { unlocked: actual >= value };
    },
    flagReturn: (flagName: string) => {
      const val = !!playerData[flagName];
      return { unlocked: val, returnValue: playerData[flagName] };
    },
    tool: (toolNames: string[]) => {
      const tools = playerData?.Tools?.savedData || [];
      let unlocked = false;
      for (const name of toolNames) {
        const foundTool = tools.find((t: any) => t?.Name === name);
        if (foundTool && !!foundTool?.Data?.IsUnlocked) {
          unlocked = true;
          break;
        }
      }
      return { unlocked };
    },
    journal: ([entryName, _]: [string, number]) => {
      const journal = playerData?.EnemyJournalKillData?.list || [];
      let unlocked = false;
      let killsAchieved = 0;

      const foundEntry = journal.find((t: any) => t?.Name === entryName);
      if (foundEntry) {
        killsAchieved = foundEntry.Record.Kills;
        if (foundEntry.Record.Kills >= 0) {
          unlocked = true;
        }
      } else {
        console.log(`Journal entry not found: ${entryName}`);
      }
      return { unlocked, returnValue: killsAchieved };
    },
    crest: (crestName: string) => {
      const crest = playerData?.ToolEquips?.savedData || [];
      const foundCrest = crest.find((t: any) => t?.Name === crestName);
      return { unlocked: !!foundCrest?.Data?.IsUnlocked };
    },
    collectable: (itemName: string) => {
      const collectableEntry = playerData.Collectables?.savedData?.find(
        (x: any) => x.Name === itemName
      );
      const amount = collectableEntry?.Data?.Amount ?? 0;
      return { unlocked: amount > 0 };
    },
    relict: (relicName: string) => {
      const relics = playerData?.Relics?.savedData || [];
      const foundRelict = relics.find((r: any) => r?.Name === relicName);
      return { unlocked: !!foundRelict?.Data?.IsCollected };
    },
    quest: (questName: string) => {
      const questEntry = playerData.QuestCompletionData?.savedData?.find((x: any) => x.Name === questName);
      return { unlocked: questEntry?.Data?.IsCompleted ?? false };
    },
    sceneData: ([sceneName, Id, inverse = false]: [string, string, boolean?]) => {
      const sceneData = saveData.sceneData || {};
      const allEntries = sceneData.persistentBools?.serializedList || [];
      const match = allEntries.find((x: any) => x.SceneName === sceneName && x.ID === Id);
      return { unlocked: inverse ? match?.Value === false : match?.Value === true };
    },
  };
  // @ts-ignore
  return typeHandlers[itemParsingInfo.type](itemParsingInfo.internalId);
}
