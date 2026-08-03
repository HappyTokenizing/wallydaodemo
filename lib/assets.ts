/**
 * The complete, renderer-agnostic content catalog for WALLY WORLD.
 *
 * Keep visual/gameplay code driven by this file: every constructible project has
 * the same complete shape, so the renderer never needs project-specific rules.
 */

export const ASSET_CATEGORIES = [
  "food-hospitality",
  "real-estate",
  "technology-companies",
  "agriculture-commodities",
  "culture-collectibles",
  "public-community",
  "trade-industry-transport",
  "finance-energy-infrastructure",
] as const;

export type AssetCategory = (typeof ASSET_CATEGORIES)[number];
export type PulseColor = `#${string}`;
export type DiscoveryMode = "crowd" | "exchange-exclusive";
export type PopulationDensity = "quiet" | "gentle" | "lively";
export type PathMaterial =
  | "cream-pavers"
  | "warm-brick"
  | "soft-gravel"
  | "boardwalk"
  | "garden-stone"
  | "civic-tile";
export type EntrySide = "north" | "east" | "south" | "west";

export interface CategoryDefinition {
  readonly id: AssetCategory;
  readonly name: string;
  readonly pulseColor: PulseColor;
  readonly particleStyle: string;
  readonly pickupTone: string;
}

/** One stable visual/audio identity per broad category. */
export const CATEGORY_DEFINITIONS: Readonly<
  Record<AssetCategory, CategoryDefinition>
> = {
  "food-hospitality": {
    id: "food-hospitality",
    name: "Food & Hospitality",
    pulseColor: "#D98273",
    particleStyle: "tiny coral steam curls and sesame-shaped flecks",
    pickupTone: "warm electric-piano sixth",
  },
  "real-estate": {
    id: "real-estate",
    name: "Real Estate",
    pulseColor: "#77AEC7",
    particleStyle: "sky-blue window squares and soft chalk motes",
    pickupTone: "two airy glass notes",
  },
  "technology-companies": {
    id: "technology-companies",
    name: "Technology & Fictional Companies",
    pulseColor: "#78B99B",
    particleStyle: "mint paper sparks joined by brief dotted trails",
    pickupTone: "muted wooden mallet triplet",
  },
  "agriculture-commodities": {
    id: "agriculture-commodities",
    name: "Agriculture & Commodities",
    pulseColor: "#D4AA55",
    particleStyle: "golden leaf specks and drifting seed husks",
    pickupTone: "soft kalimba fourth",
  },
  "culture-collectibles": {
    id: "culture-collectibles",
    name: "Culture & Collectibles",
    pulseColor: "#A28AB7",
    particleStyle: "lavender brush dabs and translucent paper stars",
    pickupTone: "felt-piano arpeggio",
  },
  "public-community": {
    id: "public-community",
    name: "Public Spaces & Community Services",
    pulseColor: "#5F9E98",
    particleStyle: "teal leaf rings and tiny lantern glows",
    pickupTone: "gentle marimba pair",
  },
  "trade-industry-transport": {
    id: "trade-industry-transport",
    name: "Trade, Industry & Transportation",
    pulseColor: "#CE874E",
    particleStyle: "warm-orange rivet dots and paper ribbon trails",
    pickupTone: "hollow woodblock and brushed chime",
  },
  "finance-energy-infrastructure": {
    id: "finance-energy-infrastructure",
    name: "Finance, Energy & Infrastructure",
    pulseColor: "#496A91",
    particleStyle: "deep-blue ripple lines and slow silver motes",
    pickupTone: "low vibraphone fifth",
  },
};

export interface AmbientPopulationBehavior {
  readonly roles: readonly string[];
  readonly activity: string;
  readonly density: PopulationDensity;
  readonly activePeriod: "morning" | "day" | "evening" | "all-day";
  readonly lingerSeconds: readonly [minimum: number, maximum: number];
}

export interface MapFootprint {
  /** World-space width, in the same units used by the player controller. */
  readonly width: number;
  /** World-space depth, in the same units used by the player controller. */
  readonly depth: number;
  /** Permanent crowd-free breathing room added after completion. */
  readonly clearingRadius: number;
  readonly shape: "compact" | "courtyard" | "linear" | "campus" | "landscape";
}

export interface PathPreferences {
  readonly material: PathMaterial;
  readonly entries: readonly EntrySide[];
  readonly width: "narrow" | "standard" | "broad";
  /** Higher values make this asset an earlier target for path generation. */
  readonly connectionPriority: 1 | 2 | 3 | 4 | 5;
  readonly plazaAtEntrance: boolean;
}

export interface DecorationPreferences {
  readonly items: readonly string[];
  readonly density: "restrained" | "balanced" | "lush";
  readonly lightTemperature: "candle" | "warm" | "neutral";
  readonly edgeTreatment: string;
}

export interface ExchangeListing {
  readonly companyIcon: string;
  readonly iconShape: "pear" | "cloud" | "robot" | "helix" | "fox" | "chip" | "sun" | "parcel" | "satellite" | "droplet" | "onre";
  readonly minimumPrice: number;
  readonly maximumPrice: number;
}

export interface AssetDefinition {
  readonly id: string;
  /** Unique player-facing project/company name. */
  readonly name: string;
  readonly category: AssetCategory;
  readonly pulseColor: PulseColor;
  readonly requiredPieces: number;
  readonly constructionStages: readonly string[];
  readonly finishedAppearance: string;
  /** Budget generated by a completed project per real-time minute. */
  readonly passiveBudgetPerMinute: number;
  readonly discovery: DiscoveryMode;
  readonly ambientPopulationBehavior: AmbientPopulationBehavior;
  readonly mapFootprint: MapFootprint;
  readonly pathPreferences: PathPreferences;
  readonly decorationPreferences: DecorationPreferences;
  /** Controls organic placement/spawn ordering without becoming visible UI. */
  readonly discoveryOrder: number;
  readonly exchangeListing?: ExchangeListing;
}

type AssetSeed = Omit<AssetDefinition, "pulseColor">;

function defineAsset<const T extends AssetSeed>(
  seed: T,
): Omit<T, "requiredPieces"> & Pick<AssetDefinition, "pulseColor" | "requiredPieces"> {
  return {
    ...seed,
    // Three discoveries preserve at least four visible construction forms
    // (foundation + three lifts) without turning each project into a grind.
    requiredPieces: 3,
    pulseColor: CATEGORY_DEFINITIONS[seed.category].pulseColor,
  };
}

const behavior = (
  roles: readonly string[],
  activity: string,
  density: PopulationDensity,
  activePeriod: AmbientPopulationBehavior["activePeriod"] = "all-day",
  lingerSeconds: readonly [number, number] = [8, 24],
): AmbientPopulationBehavior => ({ roles, activity, density, activePeriod, lingerSeconds });

const footprint = (
  width: number,
  depth: number,
  clearingRadius: number,
  shape: MapFootprint["shape"] = "compact",
): MapFootprint => ({ width, depth, clearingRadius, shape });

const paths = (
  material: PathMaterial,
  entries: readonly EntrySide[],
  width: PathPreferences["width"] = "standard",
  connectionPriority: PathPreferences["connectionPriority"] = 3,
  plazaAtEntrance = false,
): PathPreferences => ({ material, entries, width, connectionPriority, plazaAtEntrance });

const decor = (
  items: readonly string[],
  density: DecorationPreferences["density"] = "balanced",
  lightTemperature: DecorationPreferences["lightTemperature"] = "warm",
  edgeTreatment = "soft grass feathering",
): DecorationPreferences => ({ items, density, lightTemperature, edgeTreatment });

const stock = (
  companyIcon: string,
  iconShape: ExchangeListing["iconShape"],
  minimumPrice: number,
  maximumPrice: number,
): ExchangeListing => ({ companyIcon, iconShape, minimumPrice, maximumPrice });

/** Exactly 80 projects: ten complete records in each of eight categories. */
const ASSET_CATALOG_BASE = [
  // 01–10 · Food & hospitality — the gentlest early discoveries.
  defineAsset({
    id: "sunbeam-cafe", name: "Sunbeam Café", category: "food-hospitality", requiredPieces: 3,
    constructionStages: ["painted foundation and counter", "cream awning and round windows", "terrace tables, pastries, and steaming cups"],
    finishedAppearance: "A butter-yellow corner café with a coral awning, curved glass, and three tiny terrace tables.",
    passiveBudgetPerMinute: 4, discovery: "crowd", discoveryOrder: 1,
    ambientPopulationBehavior: behavior(["barista", "neighbor", "reader"], "sip, read, and exchange small waves at the terrace", "lively", "all-day", [10, 30]),
    mapFootprint: footprint(5, 4, 5), pathPreferences: paths("cream-pavers", ["south", "east"], "standard", 5, true),
    decorationPreferences: decor(["terracotta herbs", "striped awning", "chalkboard", "sparrows"], "lush", "candle"),
  }),
  defineAsset({
    id: "hearthside-bakery", name: "Hearthside Bakery", category: "food-hospitality", requiredPieces: 4,
    constructionStages: ["brick oven slab", "plaster walls and copper flue", "bread window and flour-dusted counter", "flower boxes and morning bread baskets"],
    finishedAppearance: "A round-doored bakery in warm plaster, with a copper chimney and bread glowing behind low windows.",
    passiveBudgetPerMinute: 5, discovery: "crowd", discoveryOrder: 2,
    ambientPopulationBehavior: behavior(["baker", "delivery cyclist", "breakfast visitor"], "carry loaves, queue briefly, and chat beside the warm window", "lively", "morning", [8, 22]),
    mapFootprint: footprint(5, 4, 5), pathPreferences: paths("warm-brick", ["south"], "standard", 5, true),
    decorationPreferences: decor(["wheat pots", "bread crates", "copper lamp", "gingham cloth"], "balanced", "candle"),
  }),
  defineAsset({
    id: "noodle-nook", name: "Noodle Nook", category: "food-hospitality", requiredPieces: 4,
    constructionStages: ["tiled kitchen pad", "mint timber frame", "open serving hatch", "paper lanterns and little stools"],
    finishedAppearance: "A tiny mint noodle shop with an open hatch, hand-painted bowls, and bobbing amber lanterns.",
    passiveBudgetPerMinute: 6, discovery: "crowd", discoveryOrder: 5,
    ambientPopulationBehavior: behavior(["cook", "courier", "diner"], "twirl noodles at the counter and carry bowls to shaded stools", "lively", "evening", [9, 25]),
    mapFootprint: footprint(4, 4, 4.5), pathPreferences: paths("cream-pavers", ["west", "south"], "narrow", 4, false),
    decorationPreferences: decor(["paper lanterns", "stacked bowls", "bamboo tub", "menu tiles"], "lush", "candle"),
  }),
  defineAsset({
    id: "olive-table", name: "The Olive Table", category: "food-hospitality", requiredPieces: 5,
    constructionStages: ["stone dining-room outline", "sage stucco walls", "arched kitchen and tiled roof", "pergola, long table, and olive planters"],
    finishedAppearance: "A sage restaurant wrapped around a shaded communal table, with blue crockery and a vine-laced pergola.",
    passiveBudgetPerMinute: 8, discovery: "crowd", discoveryOrder: 9,
    ambientPopulationBehavior: behavior(["chef", "server", "family diner"], "share plates beneath the pergola and pause for after-meal conversation", "lively", "evening", [15, 38]),
    mapFootprint: footprint(7, 6, 6), pathPreferences: paths("garden-stone", ["south", "east"], "broad", 4, true),
    decorationPreferences: decor(["olive tubs", "linen parasols", "ceramic jugs", "climbing vine"], "lush", "candle"),
  }),
  defineAsset({
    id: "bluebell-tea-room", name: "Bluebell Tea Room", category: "food-hospitality", requiredPieces: 5,
    constructionStages: ["porcelain-blue floor", "bowed timber walls", "glass conservatory roof", "tea cart and bluebell garden"],
    finishedAppearance: "A curved glass tea room with powder-blue trim, lace curtains, and a pocket garden of bluebells.",
    passiveBudgetPerMinute: 8, discovery: "crowd", discoveryOrder: 13,
    ambientPopulationBehavior: behavior(["tea keeper", "gardener", "quiet visitor"], "pour tea slowly, sketch flowers, and stroll the glasshouse", "gentle", "day", [14, 34]),
    mapFootprint: footprint(6, 5, 5.5, "courtyard"), pathPreferences: paths("garden-stone", ["west", "south"], "narrow", 3, false),
    decorationPreferences: decor(["bluebells", "porcelain pots", "lace curtains", "bird bath"], "lush", "warm"),
  }),
  defineAsset({
    id: "dockside-taco-kitchen", name: "Dockside Taco Kitchen", category: "food-hospitality", requiredPieces: 6,
    constructionStages: ["painted deck", "coral kitchen walls", "fold-up counter and canopy", "planters, stools, and enamel serving trays"],
    finishedAppearance: "A cheerful coral kitchen on a low timber deck, trimmed with aqua tiles and herb-filled cans.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 18,
    ambientPopulationBehavior: behavior(["grill cook", "dock worker", "street diner"], "lean on the rail, share quick meals, and return trays to the hatch", "lively", "day", [7, 20]),
    mapFootprint: footprint(6, 5, 5.5), pathPreferences: paths("boardwalk", ["north", "west"], "standard", 3, true),
    decorationPreferences: decor(["enamel signs", "lime tubs", "canvas canopy", "rope rail"], "balanced", "warm", "weathered boardwalk edge"),
  }),
  defineAsset({
    id: "orchard-inn", name: "Orchard Inn", category: "food-hospitality", requiredPieces: 7,
    constructionStages: ["stone cellar", "timber guest-room frame", "two gabled floors", "apple-red shutters and porch", "orchard yard and luggage bench"],
    finishedAppearance: "A small timber inn with apple-red shutters, three cozy dormers, and a porch facing a miniature orchard.",
    passiveBudgetPerMinute: 12, discovery: "crowd", discoveryOrder: 25,
    ambientPopulationBehavior: behavior(["innkeeper", "traveler", "orchard worker"], "roll tiny cases to the porch and linger over breakfast under apple trees", "gentle", "all-day", [18, 42]),
    mapFootprint: footprint(8, 7, 7, "courtyard"), pathPreferences: paths("soft-gravel", ["south", "east"], "standard", 3, true),
    decorationPreferences: decor(["apple trees", "luggage cart", "porch chairs", "rain barrel"], "lush", "candle", "low orchard hedge"),
  }),
  defineAsset({
    id: "moonrise-bistro", name: "Moonrise Rooftop Bistro", category: "food-hospitality", requiredPieces: 8,
    constructionStages: ["rounded ground floor", "curved stair tower", "second-floor kitchen", "roof terrace rail", "moon lamps and dining canopy"],
    finishedAppearance: "A two-story plum-and-cream bistro crowned by a quiet rooftop terrace and round moonlike lamps.",
    passiveBudgetPerMinute: 15, discovery: "crowd", discoveryOrder: 34,
    ambientPopulationBehavior: behavior(["host", "musician", "evening diner"], "climb to the terrace, dine under lamps, and listen to soft acoustic sets", "lively", "evening", [18, 44]),
    mapFootprint: footprint(7, 6, 6), pathPreferences: paths("civic-tile", ["south", "west"], "broad", 3, true),
    decorationPreferences: decor(["moon lamps", "rooftop herbs", "canvas canopy", "menu pedestal"], "balanced", "candle"),
  }),
  defineAsset({
    id: "lantern-market-hall", name: "Lantern Market Hall", category: "food-hospitality", requiredPieces: 10,
    constructionStages: ["broad market slab", "timber arcade", "high clerestory roof", "produce bays", "communal tables and hanging lantern canopy"],
    finishedAppearance: "An airy ochre market hall with open arches, colorful food bays, long tables, and dozens of softly swaying lanterns.",
    passiveBudgetPerMinute: 20, discovery: "crowd", discoveryOrder: 47,
    ambientPopulationBehavior: behavior(["stall keeper", "shopper", "busker", "porter"], "browse looping stall routes, rest at long tables, and carry paper parcels away", "lively", "day", [12, 36]),
    mapFootprint: footprint(12, 9, 9, "linear"), pathPreferences: paths("warm-brick", ["north", "east", "south", "west"], "broad", 5, true),
    decorationPreferences: decor(["produce baskets", "cloth banners", "lantern canopy", "water trough"], "lush", "candle", "brick planter edge"),
  }),
  defineAsset({
    id: "wally-world-hotel", name: "Wally World Grand Hotel", category: "food-hospitality", requiredPieces: 12,
    constructionStages: ["curved lobby foundation", "arcaded ground floor", "first guest-room wing", "second guest-room wing", "copper roof and central cupola", "garden court, bell desk, and lit windows"],
    finishedAppearance: "A gracious cream hotel with coral arcades, a sea-green copper roof, rounded wings, and a lamp-filled garden court.",
    passiveBudgetPerMinute: 28, discovery: "crowd", discoveryOrder: 63,
    ambientPopulationBehavior: behavior(["concierge", "guest", "porter", "garden visitor"], "arrive with luggage, cross the lobby court, and relax on deep porch chairs", "lively", "all-day", [20, 50]),
    mapFootprint: footprint(15, 12, 11, "courtyard"), pathPreferences: paths("civic-tile", ["south", "east", "west"], "broad", 5, true),
    decorationPreferences: decor(["topiary elephants", "luggage cart", "copper lamps", "fountain court"], "lush", "candle", "low cream balustrade"),
  }),

  // 11–20 · Real estate.
  defineAsset({
    id: "maple-row-townhomes", name: "Maple Row Townhomes", category: "real-estate", requiredPieces: 4,
    constructionStages: ["three garden plots", "three slim timber frames", "painted façades and pitched roofs", "stoops, mailboxes, and maple saplings"],
    finishedAppearance: "Three mismatched pastel townhomes with tiny stoops, shared side gardens, and young maple trees.",
    passiveBudgetPerMinute: 6, discovery: "crowd", discoveryOrder: 4,
    ambientPopulationBehavior: behavior(["resident", "dog walker", "neighbor"], "water stoop plants, collect mail, and cross between neighboring doors", "gentle", "all-day", [9, 28]),
    mapFootprint: footprint(8, 5, 6, "linear"), pathPreferences: paths("cream-pavers", ["south"], "standard", 4, false),
    decorationPreferences: decor(["maple saplings", "painted mailboxes", "stoop pots", "laundry line"], "lush", "warm", "low picket fence"),
  }),
  defineAsset({
    id: "skyblue-apartments", name: "Skyblue Apartments", category: "real-estate", requiredPieces: 6,
    constructionStages: ["shared lobby slab", "ground-floor frame", "first apartment floor", "second apartment floor", "blue cornice and rooftop laundry", "entry garden and lit balconies"],
    finishedAppearance: "A softly rounded blue apartment house with cream balconies, rooftop laundry, and plants in every other window.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 8,
    ambientPopulationBehavior: behavior(["resident", "visitor", "building keeper"], "enter with shopping bags, greet from balconies, and tend the shared garden", "lively", "all-day", [10, 30]),
    mapFootprint: footprint(8, 7, 7), pathPreferences: paths("cream-pavers", ["south", "east"], "standard", 4, true),
    decorationPreferences: decor(["balcony plants", "bicycle rack", "laundry line", "lobby lamp"], "balanced", "warm", "rounded hedge pockets"),
  }),
  defineAsset({
    id: "courtyard-homes", name: "Clover Courtyard Homes", category: "real-estate", requiredPieces: 6,
    constructionStages: ["four corner foundations", "paired cottage walls", "green roofs and chimneys", "central path ring", "clover lawn and shared picnic table"],
    finishedAppearance: "Four tiny cream cottages facing a clover-shaped common lawn with a shared picnic table.",
    passiveBudgetPerMinute: 11, discovery: "crowd", discoveryOrder: 15,
    ambientPopulationBehavior: behavior(["resident", "child", "neighbor"], "cross the common lawn, share tea, and pause around the picnic table", "gentle", "all-day", [14, 38]),
    mapFootprint: footprint(10, 9, 8, "courtyard"), pathPreferences: paths("garden-stone", ["north", "south"], "standard", 3, true),
    decorationPreferences: decor(["clover lawn", "picnic table", "shared herb beds", "birdhouses"], "lush", "warm", "woven willow fence"),
  }),
  defineAsset({
    id: "canal-lofts", name: "Canal Lofts", category: "real-estate", requiredPieces: 7,
    constructionStages: ["brick warehouse base", "tall arched first floor", "loft window floor", "sawtooth roof", "canal balconies and mooring steps"],
    finishedAppearance: "A converted red-brick warehouse with huge arched windows, mint balconies, and little steps touching the canal.",
    passiveBudgetPerMinute: 13, discovery: "crowd", discoveryOrder: 23,
    ambientPopulationBehavior: behavior(["resident", "paddler", "artist"], "carry canvases upstairs, watch canal boats, and sit on waterside steps", "gentle", "evening", [12, 35]),
    mapFootprint: footprint(9, 7, 7, "linear"), pathPreferences: paths("boardwalk", ["east", "west"], "standard", 3, false),
    decorationPreferences: decor(["mooring posts", "window plants", "folding chairs", "reed tubs"], "balanced", "warm", "canal stone retaining edge"),
  }),
  defineAsset({
    id: "garden-apartments", name: "Fern Garden Apartments", category: "real-estate", requiredPieces: 8,
    constructionStages: ["horseshoe foundation", "garden-level homes", "two curved residential floors", "leaf-green roofline", "central fern court and balcony vines"],
    finishedAppearance: "A horseshoe-shaped apartment garden in dusty rose and cream, its balconies softened by trailing ferns.",
    passiveBudgetPerMinute: 15, discovery: "crowd", discoveryOrder: 28,
    ambientPopulationBehavior: behavior(["resident", "gardener", "courier"], "follow the court loop, trim ferns, and exchange parcels by the arch", "lively", "day", [10, 32]),
    mapFootprint: footprint(11, 10, 9, "courtyard"), pathPreferences: paths("garden-stone", ["south", "east"], "broad", 4, true),
    decorationPreferences: decor(["tree ferns", "balcony vines", "stone basin", "wood benches"], "lush", "warm", "deep planted border"),
  }),
  defineAsset({
    id: "sunroom-cooperative", name: "Sunroom Cooperative", category: "real-estate", requiredPieces: 8,
    constructionStages: ["shared-house foundation", "cream masonry shell", "three residential wings", "glass sunroom spine", "solar roof and common dining garden"],
    finishedAppearance: "Three modest homes joined by a glowing glass sunroom, with a communal table beneath a shallow solar roof.",
    passiveBudgetPerMinute: 16, discovery: "crowd", discoveryOrder: 31,
    ambientPopulationBehavior: behavior(["resident", "cook", "gardener"], "move between shared rooms, prepare communal meals, and tend the edible garden", "gentle", "all-day", [16, 44]),
    mapFootprint: footprint(12, 8, 8, "linear"), pathPreferences: paths("cream-pavers", ["north", "south"], "standard", 3, true),
    decorationPreferences: decor(["solar awning", "edible garden", "long table", "watering cans"], "lush", "warm", "mixed herb hedge"),
  }),
  defineAsset({
    id: "townhouse-crescent", name: "Poppy Townhouse Crescent", category: "real-estate", requiredPieces: 9,
    constructionStages: ["curved row foundation", "five ground-floor shells", "five upper floors", "alternating roofs and dormers", "crescent path", "poppy green and front-door details"],
    finishedAppearance: "A graceful crescent of five narrow townhouses in faded peach, blue, oat, sage, and lilac.",
    passiveBudgetPerMinute: 18, discovery: "crowd", discoveryOrder: 40,
    ambientPopulationBehavior: behavior(["resident", "neighbor", "postal carrier"], "walk the crescent, stop at bright doors, and gather beside the poppy green", "lively", "all-day", [10, 30]),
    mapFootprint: footprint(14, 8, 9, "courtyard"), pathPreferences: paths("warm-brick", ["south", "east", "west"], "standard", 4, true),
    decorationPreferences: decor(["poppies", "door knockers", "boot scrapers", "crescent bench"], "lush", "warm", "wrought-iron garden edge"),
  }),
  defineAsset({
    id: "bricklane-offices", name: "Bricklane Offices", category: "real-estate", requiredPieces: 10,
    constructionStages: ["brick podium", "arched lobby", "first office floor", "second office floor", "clock cornice", "courtyard trees and bicycle court"],
    finishedAppearance: "A compact brick office block with broad factory windows, a corner clock, and a leafy bicycle court.",
    passiveBudgetPerMinute: 22, discovery: "crowd", discoveryOrder: 49,
    ambientPopulationBehavior: behavior(["office worker", "courier", "café visitor"], "arrive by bicycle, cross the lobby, and take lunch beneath court trees", "lively", "day", [7, 25]),
    mapFootprint: footprint(11, 9, 8), pathPreferences: paths("warm-brick", ["south", "west"], "broad", 4, true),
    decorationPreferences: decor(["bicycle court", "clock", "planter trees", "parcel cart"], "balanced", "neutral", "low brick seat wall"),
  }),
  defineAsset({
    id: "harbor-residences", name: "Harbor Residences", category: "real-estate", requiredPieces: 12,
    constructionStages: ["waterside piling deck", "two lobby cores", "lower residential terraces", "upper residential terraces", "wave-form roofs", "promenade balconies and reed gardens"],
    finishedAppearance: "Two terraced sea-blue residence blocks with wave-like roofs and balconies stepping toward the water.",
    passiveBudgetPerMinute: 27, discovery: "crowd", discoveryOrder: 61,
    ambientPopulationBehavior: behavior(["resident", "jogger", "boat watcher"], "follow the promenade, pause at railings, and carry groceries to stepped lobbies", "lively", "all-day", [10, 32]),
    mapFootprint: footprint(15, 11, 10, "linear"), pathPreferences: paths("boardwalk", ["east", "west", "south"], "broad", 4, true),
    decorationPreferences: decor(["reed gardens", "promenade lights", "deck chairs", "life-ring cabinet"], "balanced", "warm", "timber-and-rope waterside rail"),
  }),
  defineAsset({
    id: "hilltop-mixed-use", name: "Hilltop Mixed-Use House", category: "real-estate", requiredPieces: 14,
    constructionStages: ["stepped hill foundation", "arcaded shop floor", "first home terrace", "second home terrace", "corner tower", "green roof", "public steps, shops, and overlook gardens"],
    finishedAppearance: "A large stepped cream-and-ochre building where tiny shops, planted apartment terraces, and a corner lookout share one hill.",
    passiveBudgetPerMinute: 34, discovery: "crowd", discoveryOrder: 71,
    ambientPopulationBehavior: behavior(["resident", "shopkeeper", "visitor", "gardener"], "climb public steps, browse ground shops, and rest at the planted overlook", "lively", "all-day", [12, 40]),
    mapFootprint: footprint(17, 13, 12, "campus"), pathPreferences: paths("civic-tile", ["north", "east", "south", "west"], "broad", 5, true),
    decorationPreferences: decor(["overlook benches", "green roofs", "shop awnings", "stepped rain garden"], "lush", "warm", "terraced stone planter"),
  }),

  // 21–30 · Ten fictional public companies; all and only these are exchange-exclusive.
  defineAsset({
    id: "pear-technology", name: "Pear Technology Office", category: "technology-companies", requiredPieces: 4,
    constructionStages: ["mint office pad", "rounded timber-and-glass shell", "leaf-shaped skylight", "whole-pear sign and courtyard desks"],
    finishedAppearance: "A cozy mint studio with rounded windows, a leaf skylight, and an original whole-pear emblem over the door.",
    passiveBudgetPerMinute: 10, discovery: "exchange-exclusive", discoveryOrder: 21,
    ambientPopulationBehavior: behavior(["designer", "engineer", "visitor"], "carry sketchbooks between courtyard desks and gather around small prototypes", "gentle", "day", [8, 26]),
    mapFootprint: footprint(7, 6, 6, "courtyard"), pathPreferences: paths("cream-pavers", ["south", "east"], "standard", 3, true),
    decorationPreferences: decor(["pear tree", "round stools", "paper prototypes", "mint task lamps"], "balanced", "neutral"),
    exchangeListing: stock("A simple upright whole pear with one leaf", "pear", 24, 42),
  }),
  defineAsset({
    id: "nimbus-nest-cloud", name: "Nimbus Nest Cloud Studio", category: "technology-companies", requiredPieces: 5,
    constructionStages: ["pale-blue server floor", "soft cloudlike walls", "open studio loft", "roof vents and sky bridge", "cloud emblem and shaded work garden"],
    finishedAppearance: "A low cloud-shaped blue studio with porthole windows, quiet roof vents, and hammocklike courtyard seats.",
    passiveBudgetPerMinute: 13, discovery: "exchange-exclusive", discoveryOrder: 27,
    ambientPopulationBehavior: behavior(["systems maker", "illustrator", "technician"], "move between softly lit work bays and take breaks in hanging courtyard seats", "gentle", "day", [8, 25]),
    mapFootprint: footprint(8, 6, 6), pathPreferences: paths("cream-pavers", ["south", "west"], "standard", 3, false),
    decorationPreferences: decor(["hanging seats", "blue grasses", "round vents", "cloud pennant"], "balanced", "neutral"),
    exchangeListing: stock("Three overlapping rounded cloud puffs", "cloud", 28, 50),
  }),
  defineAsset({
    id: "mossbyte-robotics", name: "Mossbyte Robotics Laboratory", category: "technology-companies", requiredPieces: 5,
    constructionStages: ["workshop slab", "moss-green lab frame", "high test-bay doors", "glass observation loft", "friendly robot emblem and test garden"],
    finishedAppearance: "A moss-green robotics shed where gentle wheeled helpers trace tidy loops through a planted test yard.",
    passiveBudgetPerMinute: 14, discovery: "exchange-exclusive", discoveryOrder: 30,
    ambientPopulationBehavior: behavior(["roboticist", "mechanic", "test observer"], "adjust small helper machines and watch them water planters in calm loops", "gentle", "day", [9, 28]),
    mapFootprint: footprint(8, 7, 6.5), pathPreferences: paths("warm-brick", ["east", "south"], "standard", 3, false),
    decorationPreferences: decor(["test planters", "tool trolley", "chalk loop", "moss roof"], "balanced", "neutral", "timber test-yard rail"),
    exchangeListing: stock("A round friendly robot head with two dot lights", "robot", 34, 58),
  }),
  defineAsset({
    id: "petalhelix-bioworks", name: "PetalHelix Bioworks", category: "technology-companies", requiredPieces: 6,
    constructionStages: ["laboratory foundation", "cream clean-room wing", "curved glasshouse", "petal roof vents", "helix-flower emblem and research garden"],
    finishedAppearance: "A cream laboratory flowing into a lavender glasshouse, marked by an original flower-and-helix symbol.",
    passiveBudgetPerMinute: 18, discovery: "exchange-exclusive", discoveryOrder: 36,
    ambientPopulationBehavior: behavior(["biologist", "glasshouse keeper", "student"], "carry seed trays, examine leaves, and confer beside the glasshouse", "gentle", "day", [11, 31]),
    mapFootprint: footprint(9, 7, 7, "linear"), pathPreferences: paths("garden-stone", ["south", "east"], "standard", 3, true),
    decorationPreferences: decor(["research beds", "petal vents", "rain chains", "specimen cart"], "lush", "neutral", "pollinator border"),
    exchangeListing: stock("A flower whose center is a tiny double helix", "helix", 38, 64),
  }),
  defineAsset({
    id: "lantern-fox-games", name: "Lantern Fox Game Studio", category: "technology-companies", requiredPieces: 6,
    constructionStages: ["warm studio floor", "fox-red timber walls", "sawtooth skylights", "screening loft", "lantern-tail emblem and play-test terrace"],
    finishedAppearance: "A fox-red creative studio with sawtooth skylights, hand-painted posters, and lanterns shaped like soft tails.",
    passiveBudgetPerMinute: 20, discovery: "exchange-exclusive", discoveryOrder: 39,
    ambientPopulationBehavior: behavior(["game maker", "artist", "play tester"], "pin up drawings, test tiny tabletop games, and relax on the terrace", "lively", "day", [12, 34]),
    mapFootprint: footprint(9, 7, 7), pathPreferences: paths("warm-brick", ["south", "west"], "standard", 3, true),
    decorationPreferences: decor(["painted posters", "tail lanterns", "tabletop pieces", "beanbag terrace"], "lush", "candle"),
    exchangeListing: stock("A curled fox tail wrapped around a square lantern", "fox", 42, 70),
  }),
  defineAsset({
    id: "cinderchip-semiconductor", name: "Cinderchip Semiconductor Workshop", category: "technology-companies", requiredPieces: 7,
    constructionStages: ["charcoal utility base", "clean workshop shell", "fabrication bay", "copper service roof", "chip-flame emblem and inspection garden"],
    finishedAppearance: "A charcoal-and-copper micro-workshop with precise square windows and a tiny chip emblem warmed by a flame motif.",
    passiveBudgetPerMinute: 24, discovery: "exchange-exclusive", discoveryOrder: 45,
    ambientPopulationBehavior: behavior(["fabricator", "quality inspector", "maintenance worker"], "move quietly between clean bays and inspect trays beneath amber lamps", "gentle", "day", [7, 24]),
    mapFootprint: footprint(10, 8, 7.5), pathPreferences: paths("civic-tile", ["north", "south"], "standard", 3, false),
    decorationPreferences: decor(["copper vents", "inspection lamps", "sealed carts", "square rain garden"], "restrained", "neutral", "trimmed charcoal curb"),
    exchangeListing: stock("A rounded microchip containing one small flame", "chip", 48, 78),
  }),
  defineAsset({
    id: "everbright-energy", name: "Everbright Green Energy Company", category: "technology-companies", requiredPieces: 7,
    constructionStages: ["green campus pad", "timber office hall", "solar canopy", "small wind sculpture", "rising-sun emblem and energy garden"],
    finishedAppearance: "A timber energy office beneath a blue solar canopy, framed by tall grass and a slow kinetic wind sculpture.",
    passiveBudgetPerMinute: 26, discovery: "exchange-exclusive", discoveryOrder: 50,
    ambientPopulationBehavior: behavior(["energy planner", "field technician", "visitor"], "compare site maps, wheel tool cases, and sit beneath the solar shade", "gentle", "day", [8, 26]),
    mapFootprint: footprint(11, 8, 8, "campus"), pathPreferences: paths("garden-stone", ["east", "south"], "standard", 3, true),
    decorationPreferences: decor(["solar canopy", "tall grass", "wind sculpture", "battery bench"], "lush", "neutral", "bioswale edge"),
    exchangeListing: stock("A sunrise with three broad rays above a leaf", "sun", 52, 84),
  }),
  defineAsset({
    id: "wayfarer-logistics", name: "Wayfarer Logistics Company", category: "technology-companies", requiredPieces: 8,
    constructionStages: ["parcel-court foundation", "dispatch office", "sorting shed", "curved loading canopy", "walking-parcel emblem and cargo bicycle yard"],
    finishedAppearance: "A friendly orange dispatch hall with a curved canopy, clocklike loading doors, and a fleet of cargo bicycles.",
    passiveBudgetPerMinute: 28, discovery: "exchange-exclusive", discoveryOrder: 55,
    ambientPopulationBehavior: behavior(["dispatcher", "cargo cyclist", "sorter"], "sort small parcels, load cargo bicycles, and depart along connected paths", "lively", "day", [5, 18]),
    mapFootprint: footprint(12, 9, 8, "linear"), pathPreferences: paths("warm-brick", ["north", "east", "south"], "broad", 4, true),
    decorationPreferences: decor(["cargo bicycles", "parcel cages", "route board", "orange canopy"], "balanced", "neutral", "painted loading curb"),
    exchangeListing: stock("A parcel with two small walking feet", "parcel", 58, 92),
  }),
  defineAsset({
    id: "moonpost-satellite", name: "Moonpost Satellite Systems", category: "technology-companies", requiredPieces: 9,
    constructionStages: ["midnight-blue campus base", "control-room shell", "antenna workshop", "small tracking dome", "orbiting-letter emblem and listening garden"],
    finishedAppearance: "A deep-blue satellite studio with a tiny tracking dome, silver dish, and a moonlit grass listening garden.",
    passiveBudgetPerMinute: 32, discovery: "exchange-exclusive", discoveryOrder: 62,
    ambientPopulationBehavior: behavior(["orbital engineer", "radio operator", "night visitor"], "adjust the dish, cross-check star maps, and listen from garden benches", "gentle", "evening", [12, 36]),
    mapFootprint: footprint(12, 10, 9, "campus"), pathPreferences: paths("civic-tile", ["south", "west"], "standard", 3, true),
    decorationPreferences: decor(["silver dish", "star map table", "moon grass", "low red lamps"], "restrained", "warm", "dark stone seat wall"),
    exchangeListing: stock("A tiny satellite carrying a sealed letter", "satellite", 66, 104),
  }),
  defineAsset({
    id: "onre-reinsurance", name: "OnRe Reinsurance House", category: "technology-companies", requiredPieces: 10,
    constructionStages: ["quiet stone risk-vault foundation", "arched assurance hall", "cream upper offices", "blue mansard roof", "OnRe façade mark", "courtyard trees and warm reinsurance gallery"],
    finishedAppearance: "A dignified cream reinsurance house with blue rooflines, arched windows, warm interiors, and the exact OnRe identity above its entrance.",
    passiveBudgetPerMinute: 36, discovery: "exchange-exclusive", discoveryOrder: 69,
    ambientPopulationBehavior: behavior(["reinsurance analyst", "risk partner", "visiting broker"], "compare risk maps, meet beneath the courtyard trees, and cross the warmly lit assurance hall", "lively", "day", [9, 30]),
    mapFootprint: footprint(13, 11, 9.5, "courtyard"), pathPreferences: paths("civic-tile", ["north", "east", "south"], "broad", 4, true),
    decorationPreferences: decor(["OnRe façade mark", "blue awnings", "risk-map gallery", "courtyard trees"], "lush", "neutral", "curved stone bench"),
    exchangeListing: stock("The exact OnRe double-ring icon", "onre", 72, 118),
  }),

  // 31–40 · Agriculture & commodities.
  defineAsset({
    id: "honeycomb-apiary", name: "Honeycomb Apiary", category: "agriculture-commodities", requiredPieces: 3,
    constructionStages: ["wildflower clearing", "three painted hive boxes", "beekeeper shed and honey stall"],
    finishedAppearance: "Three powder-yellow hives among wildflowers, with a tiny striped shed and jars catching the afternoon light.",
    passiveBudgetPerMinute: 4, discovery: "crowd", discoveryOrder: 3,
    ambientPopulationBehavior: behavior(["beekeeper", "garden visitor"], "inspect hives calmly and follow a loop through the wildflowers", "quiet", "day", [10, 28]),
    mapFootprint: footprint(6, 5, 5.5, "landscape"), pathPreferences: paths("soft-gravel", ["south"], "narrow", 3, false),
    decorationPreferences: decor(["wildflowers", "hive boxes", "honey jars", "shallow bee basin"], "lush", "warm", "woven willow edge"),
  }),
  defineAsset({
    id: "kitchen-garden", name: "Patchwork Kitchen Garden", category: "agriculture-commodities", requiredPieces: 4,
    constructionStages: ["four soil patches", "raised timber beds", "potting shelter", "bean arches and harvest table"],
    finishedAppearance: "A quilt of small vegetable beds crossed by stepping stones, bean arches, and a green-roofed potting shelter.",
    passiveBudgetPerMinute: 5, discovery: "crowd", discoveryOrder: 7,
    ambientPopulationBehavior: behavior(["gardener", "cook", "neighbor"], "weed beds, fill baskets, and leave herbs on the sharing table", "gentle", "day", [12, 32]),
    mapFootprint: footprint(7, 6, 6, "landscape"), pathPreferences: paths("garden-stone", ["east", "south"], "narrow", 3, false),
    decorationPreferences: decor(["bean arches", "vegetable beds", "compost box", "harvest table"], "lush", "warm", "herb border"),
  }),
  defineAsset({
    id: "amber-wheat-farm", name: "Amber Wheat Farm", category: "agriculture-commodities", requiredPieces: 5,
    constructionStages: ["golden field strips", "stone barn base", "timber barn and red door", "windbreak trees and sheaf stacks"],
    finishedAppearance: "A softly waving patch of amber wheat beside a round-roofed cream barn and neat hand-tied sheaves.",
    passiveBudgetPerMinute: 7, discovery: "crowd", discoveryOrder: 11,
    ambientPopulationBehavior: behavior(["farmer", "field hand", "walker"], "follow field margins, stack sheaves, and rest in the barn shade", "gentle", "day", [9, 27]),
    mapFootprint: footprint(10, 8, 7.5, "landscape"), pathPreferences: paths("soft-gravel", ["south", "west"], "standard", 3, false),
    decorationPreferences: decor(["wheat strips", "sheaf stacks", "red barn door", "windbreak poplars"], "lush", "warm", "rough grass verge"),
  }),
  defineAsset({
    id: "bramble-berry-farm", name: "Bramble Berry Farm", category: "agriculture-commodities", requiredPieces: 5,
    constructionStages: ["berry rows", "wooden trellises", "lavender packing hut", "basket stand and shade arbor"],
    finishedAppearance: "Curving berry rows with violet fruit, a lavender packing hut, and little baskets beneath a leafy arbor.",
    passiveBudgetPerMinute: 7, discovery: "crowd", discoveryOrder: 14,
    ambientPopulationBehavior: behavior(["picker", "farm visitor", "packer"], "pick along looping rows and carry half-full baskets to the shaded hut", "gentle", "day", [10, 30]),
    mapFootprint: footprint(9, 7, 7, "landscape"), pathPreferences: paths("soft-gravel", ["north", "south"], "narrow", 2, false),
    decorationPreferences: decor(["berry trellises", "basket stand", "shade arbor", "scarecrow coat"], "lush", "warm", "bramble hedge"),
  }),
  defineAsset({
    id: "little-apple-orchard", name: "Little Apple Orchard", category: "agriculture-commodities", requiredPieces: 6,
    constructionStages: ["orchard grass", "first apple rows", "second apple rows", "cider shed", "harvest ladder and picnic hollow"],
    finishedAppearance: "A dozen small round apple trees around a sage cider shed, crossed by a wandering mown path.",
    passiveBudgetPerMinute: 9, discovery: "crowd", discoveryOrder: 19,
    ambientPopulationBehavior: behavior(["orchard keeper", "picker", "picnicker"], "carry apple baskets, use short ladders, and picnic in the mown hollow", "lively", "day", [12, 35]),
    mapFootprint: footprint(11, 9, 8.5, "landscape"), pathPreferences: paths("soft-gravel", ["east", "south"], "narrow", 3, false),
    decorationPreferences: decor(["apple trees", "short ladders", "cider shed", "picnic blanket"], "lush", "warm", "living orchard hedge"),
  }),
  defineAsset({
    id: "sunlit-greenhouse", name: "Sunlit Greenhouse", category: "agriculture-commodities", requiredPieces: 6,
    constructionStages: ["brick heat bed", "arched glass ribs", "glasshouse panels", "potting aisle", "tomato vines and rainwater tanks"],
    finishedAppearance: "A long arched greenhouse glowing green and gold, dense with tomatoes, vines, and hanging watering cans.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 22,
    ambientPopulationBehavior: behavior(["grower", "student", "produce courier"], "tend vines, check watering cans, and wheel shallow produce trays outside", "gentle", "day", [8, 26]),
    mapFootprint: footprint(10, 6, 6.5, "linear"), pathPreferences: paths("warm-brick", ["east", "west"], "standard", 3, false),
    decorationPreferences: decor(["tomato vines", "rain tanks", "potting bench", "watering cans"], "lush", "neutral", "brick herb border"),
  }),
  defineAsset({
    id: "meadow-dairy", name: "Meadow Dairy", category: "agriculture-commodities", requiredPieces: 7,
    constructionStages: ["pasture clearing", "cream dairy barn", "milking room wing", "hay loft", "fenced meadow and milk-cart porch"],
    finishedAppearance: "A cream-and-sage dairy barn with a half-moon hay window, small meadow, and quiet handcart of milk cans.",
    passiveBudgetPerMinute: 12, discovery: "crowd", discoveryOrder: 29,
    ambientPopulationBehavior: behavior(["dairy keeper", "milk courier", "farm visitor"], "carry silver cans, sweep the porch, and follow the meadow fence", "gentle", "morning", [8, 25]),
    mapFootprint: footprint(11, 9, 8.5, "landscape"), pathPreferences: paths("soft-gravel", ["south", "west"], "standard", 3, false),
    decorationPreferences: decor(["milk cans", "hay bales", "clover pasture", "wood handcart"], "balanced", "warm", "split-rail meadow fence"),
  }),
  defineAsset({
    id: "willow-watermill", name: "Willow Watermill", category: "agriculture-commodities", requiredPieces: 8,
    constructionStages: ["millrace stones", "timber mill house", "overshot wheel", "grain loft", "willow bank and flour-loading porch"],
    finishedAppearance: "A weathered timber mill with a slow blue wheel, cream sacks, and willows brushing a narrow millrace.",
    passiveBudgetPerMinute: 15, discovery: "crowd", discoveryOrder: 38,
    ambientPopulationBehavior: behavior(["miller", "grain courier", "riverside walker"], "roll flour sacks to a handcart and pause to watch the slow wheel", "gentle", "day", [8, 28]),
    mapFootprint: footprint(11, 8, 8, "linear"), pathPreferences: paths("garden-stone", ["east", "south"], "standard", 4, true),
    decorationPreferences: decor(["willow trees", "flour sacks", "mill wheel", "reed fringe"], "lush", "warm", "river-stone edge"),
  }),
  defineAsset({
    id: "wildflower-fiber-farm", name: "Wildflower Fiber Farm", category: "agriculture-commodities", requiredPieces: 8,
    constructionStages: ["striped crop fields", "drying frames", "indigo work shed", "spinning porch", "dyed-cloth lines and flower margins"],
    finishedAppearance: "Striped flax and dye-flower fields around an indigo shed, with soft lengths of cloth moving on the line.",
    passiveBudgetPerMinute: 16, discovery: "crowd", discoveryOrder: 44,
    ambientPopulationBehavior: behavior(["fiber grower", "dyer", "weaver"], "gather plant bundles, tend drying frames, and carry cloth toward town", "gentle", "day", [10, 31]),
    mapFootprint: footprint(12, 9, 8.5, "landscape"), pathPreferences: paths("soft-gravel", ["north", "south"], "standard", 2, false),
    decorationPreferences: decor(["flax strips", "dye flowers", "drying frames", "cloth lines"], "lush", "warm", "uncut wildflower margin"),
  }),
  defineAsset({
    id: "golden-ridge-mine", name: "Golden Ridge Mine", category: "agriculture-commodities", requiredPieces: 12,
    constructionStages: ["rocky ridge cut", "timbered mine portal", "ore shed", "short cart rail", "sorting house", "restored meadow, gold-veined stones, and safety lamps"],
    finishedAppearance: "A storybook hillside mine with stout timbering, a tiny ore cart, amber safety lamps, and a carefully replanted meadow.",
    passiveBudgetPerMinute: 30, discovery: "crowd", discoveryOrder: 65,
    ambientPopulationBehavior: behavior(["miner", "geologist", "cart handler"], "inspect rock trays, guide a slow ore cart, and rest by the replanted meadow", "gentle", "day", [7, 24]),
    mapFootprint: footprint(14, 11, 10, "landscape"), pathPreferences: paths("soft-gravel", ["south", "west"], "broad", 3, true),
    decorationPreferences: decor(["ore cart", "safety lamps", "gold-veined rocks", "replanted meadow"], "balanced", "warm", "rough stone retaining edge"),
  }),

  // 41–50 · Culture & collectibles.
  defineAsset({
    id: "pocket-gallery", name: "Pocket Gallery", category: "culture-collectibles", requiredPieces: 3,
    constructionStages: ["white gallery pad", "arched lavender room", "picture rail, sculpture window, and garden bench"],
    finishedAppearance: "A one-room lavender gallery with a huge arched window, three changing paintings, and one perfect bench.",
    passiveBudgetPerMinute: 4, discovery: "crowd", discoveryOrder: 6,
    ambientPopulationBehavior: behavior(["curator", "artist", "visitor"], "pause at each small artwork and sketch from the garden bench", "gentle", "day", [12, 36]),
    mapFootprint: footprint(5, 4, 5), pathPreferences: paths("civic-tile", ["south"], "standard", 4, true),
    decorationPreferences: decor(["gallery bench", "sculpture window", "poster frame", "lavender pot"], "restrained", "neutral"),
  }),
  defineAsset({
    id: "claybird-pottery", name: "Claybird Pottery", category: "culture-collectibles", requiredPieces: 4,
    constructionStages: ["clay studio floor", "rounded plaster walls", "kiln chimney", "wheel porch and shelves of handmade pots"],
    finishedAppearance: "A rounded terracotta pottery with a birdlike chimney cap, open wheel porch, and wonky pots on timber shelves.",
    passiveBudgetPerMinute: 5, discovery: "crowd", discoveryOrder: 12,
    ambientPopulationBehavior: behavior(["potter", "apprentice", "shop visitor"], "turn clay, carry glazed bowls, and inspect shelves on the porch", "gentle", "day", [10, 30]),
    mapFootprint: footprint(6, 5, 5.5), pathPreferences: paths("warm-brick", ["south", "east"], "standard", 3, false),
    decorationPreferences: decor(["pot shelves", "kiln wood", "clay basin", "apron hooks"], "balanced", "warm", "terracotta shard edge"),
  }),
  defineAsset({
    id: "town-library", name: "Town Library", category: "culture-collectibles", requiredPieces: 5,
    constructionStages: ["reading-hall foundation", "cream book-room walls", "arched blue roof", "window seats", "book return, story garden, and lamp"],
    finishedAppearance: "A small cream library with a blue barrel roof, deep window seats, and an outdoor story circle beneath a tree.",
    passiveBudgetPerMinute: 8, discovery: "crowd", discoveryOrder: 17,
    ambientPopulationBehavior: behavior(["librarian", "reader", "child"], "browse low shelves, settle into windows, and gather for quiet story circles", "lively", "day", [16, 46]),
    mapFootprint: footprint(8, 6, 6.5, "courtyard"), pathPreferences: paths("civic-tile", ["south", "west"], "broad", 5, true),
    decorationPreferences: decor(["book return", "story tree", "reading bench", "paper lantern"], "lush", "warm", "low alphabet tile edge"),
  }),
  defineAsset({
    id: "marionette-theater", name: "Marionette Theater", category: "culture-collectibles", requiredPieces: 6,
    constructionStages: ["tiny auditorium base", "plum theater shell", "painted proscenium", "backstage loft", "ticket booth and striped forecourt"],
    finishedAppearance: "A plum jewel-box theater with a gold-trimmed miniature stage, striped ticket booth, and puppets in the attic window.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 24,
    ambientPopulationBehavior: behavior(["puppeteer", "stagehand", "audience member"], "queue at the tiny booth, take seats, and gather around puppets after shows", "lively", "evening", [18, 48]),
    mapFootprint: footprint(8, 7, 7), pathPreferences: paths("civic-tile", ["south", "east"], "broad", 4, true),
    decorationPreferences: decor(["striped booth", "painted masks", "show posters", "velvet rope"], "balanced", "candle", "star-pattern forecourt"),
  }),
  defineAsset({
    id: "river-song-conservatory", name: "River Song Conservatory", category: "culture-collectibles", requiredPieces: 7,
    constructionStages: ["acoustic stone base", "curved practice rooms", "tall music hall", "blue copper roof", "river terrace and instrument garden"],
    finishedAppearance: "A flowing cream music school with round practice windows, blue roof, and a river terrace shaped like a staff of music.",
    passiveBudgetPerMinute: 13, discovery: "crowd", discoveryOrder: 32,
    ambientPopulationBehavior: behavior(["music student", "teacher", "listener"], "carry instrument cases, practice by windows, and sit for terrace recitals", "lively", "day", [12, 36]),
    mapFootprint: footprint(10, 8, 8, "campus"), pathPreferences: paths("civic-tile", ["north", "south", "west"], "broad", 4, true),
    decorationPreferences: decor(["music-note rail", "instrument cases", "river seats", "reed planters"], "balanced", "warm", "curved acoustic wall"),
  }),
  defineAsset({
    id: "ink-and-leaf-printworks", name: "Ink & Leaf Printworks", category: "culture-collectibles", requiredPieces: 6,
    constructionStages: ["ink-blue floor", "timber print shop", "north-light windows", "drying loft", "poster wall and paper courtyard"],
    finishedAppearance: "An ink-blue print shop with tall north windows, fluttering paper racks, and a public wall layered with gentle posters.",
    passiveBudgetPerMinute: 11, discovery: "crowd", discoveryOrder: 35,
    ambientPopulationBehavior: behavior(["printmaker", "bookbinder", "poster browser"], "turn the hand press, hang fresh sheets, and browse the outdoor poster wall", "gentle", "day", [10, 30]),
    mapFootprint: footprint(8, 6, 6.5), pathPreferences: paths("warm-brick", ["east", "south"], "standard", 3, true),
    decorationPreferences: decor(["drying racks", "poster wall", "ink bottles", "paper bundles"], "balanced", "neutral", "wood type-block edge"),
  }),
  defineAsset({
    id: "cloudstone-sculpture-garden", name: "Cloudstone Sculpture Garden", category: "culture-collectibles", requiredPieces: 7,
    constructionStages: ["meandering lawn", "first stone plinths", "cloudlike sculptures", "reflection rill", "curving seats and night lighting"],
    finishedAppearance: "A quiet lawn of rounded pale sculptures, a narrow reflecting rill, and seats that curl around the art like commas.",
    passiveBudgetPerMinute: 12, discovery: "crowd", discoveryOrder: 42,
    ambientPopulationBehavior: behavior(["sculptor", "visitor", "grounds keeper"], "circle sculptures, pause at changing viewpoints, and sketch beside the rill", "gentle", "all-day", [14, 42]),
    mapFootprint: footprint(11, 9, 8.5, "landscape"), pathPreferences: paths("garden-stone", ["north", "east", "south"], "narrow", 3, true),
    decorationPreferences: decor(["rounded sculptures", "reflection rill", "curved seats", "low art lights"], "restrained", "neutral", "mown grass ribbon"),
  }),
  defineAsset({
    id: "neighborhood-museum", name: "Neighborhood Memory Museum", category: "culture-collectibles", requiredPieces: 9,
    constructionStages: ["archive foundation", "brick memory rooms", "central cream hall", "sawtooth roof", "object windows", "oral-history porch and time garden"],
    finishedAppearance: "A brick-and-cream local museum whose windows display tiny everyday treasures, with a porch for recorded stories.",
    passiveBudgetPerMinute: 18, discovery: "crowd", discoveryOrder: 52,
    ambientPopulationBehavior: behavior(["archivist", "elder", "school visitor"], "study window objects, record stories on the porch, and walk the time garden", "lively", "day", [16, 46]),
    mapFootprint: footprint(12, 9, 9, "courtyard"), pathPreferences: paths("civic-tile", ["south", "east", "west"], "broad", 4, true),
    decorationPreferences: decor(["memory windows", "recording porch", "date stones", "archive cart"], "balanced", "warm", "timeline paving band"),
  }),
  defineAsset({
    id: "starlight-cinema", name: "Starlight Cinema", category: "culture-collectibles", requiredPieces: 10,
    constructionStages: ["deep-blue auditorium base", "curved screen hall", "balcony tier", "star marquee", "ticket lobby", "outdoor screen garden and glowing poster cases"],
    finishedAppearance: "A rounded midnight-blue cinema with a restrained star marquee, glowing poster cases, and a tiny outdoor screening lawn.",
    passiveBudgetPerMinute: 21, discovery: "crowd", discoveryOrder: 59,
    ambientPopulationBehavior: behavior(["projectionist", "cinema visitor", "snack keeper"], "gather under the marquee, enter in small groups, and sit on the screening lawn", "lively", "evening", [20, 52]),
    mapFootprint: footprint(13, 10, 9.5), pathPreferences: paths("civic-tile", ["south", "east"], "broad", 4, true),
    decorationPreferences: decor(["star marquee", "poster cases", "screening lawn", "paper cup stand"], "balanced", "candle", "dark terrazzo edge"),
  }),
  defineAsset({
    id: "collectors-archive", name: "Cabinet of Small Wonders", category: "culture-collectibles", requiredPieces: 12,
    constructionStages: ["octagonal archive base", "lower cabinet hall", "upper collection ring", "faceted glass roof", "conservation studio", "curiosity garden and lit display niches"],
    finishedAppearance: "An octagonal lilac archive under a faceted glass roof, filled with tiny shells, toys, maps, and beautifully ordinary curiosities.",
    passiveBudgetPerMinute: 28, discovery: "crowd", discoveryOrder: 68,
    ambientPopulationBehavior: behavior(["collector", "conservator", "curious visitor"], "lean into small display niches, catalog objects, and trade stories in the garden", "gentle", "day", [18, 50]),
    mapFootprint: footprint(13, 12, 10, "courtyard"), pathPreferences: paths("civic-tile", ["north", "east", "south", "west"], "broad", 4, true),
    decorationPreferences: decor(["display niches", "shell mosaic", "map table", "curiosity topiary"], "lush", "warm", "inlaid cabinet-pattern curb"),
  }),

  // 51–60 · Public spaces & community services.
  defineAsset({
    id: "clover-pocket-park", name: "Clover Pocket Park", category: "public-community", requiredPieces: 3,
    constructionStages: ["clover lawn clearing", "curved path and shade tree", "benches, drinking fountain, and flower edge"],
    finishedAppearance: "A tiny clover-shaped lawn with one generous shade tree, curved benches, and a bubbling drinking fountain.",
    passiveBudgetPerMinute: 3, discovery: "crowd", discoveryOrder: 10,
    ambientPopulationBehavior: behavior(["neighbor", "reader", "dog walker"], "cross the lawn, rest beneath the tree, and refill at the fountain", "lively", "all-day", [14, 40]),
    mapFootprint: footprint(7, 7, 6.5, "landscape"), pathPreferences: paths("garden-stone", ["north", "east", "south", "west"], "narrow", 5, true),
    decorationPreferences: decor(["shade tree", "curved benches", "drinking fountain", "clover beds"], "lush", "warm", "flowering groundcover"),
  }),
  defineAsset({
    id: "acorn-playground", name: "Acorn Playground", category: "public-community", requiredPieces: 4,
    constructionStages: ["soft play lawn", "acorn climbing house", "curved slide", "sand hollow, swings, and parent bench"],
    finishedAppearance: "A low natural playground with an acorn-shaped climbing hut, curved timber slide, sand hollow, and shaded family bench.",
    passiveBudgetPerMinute: 4, discovery: "crowd", discoveryOrder: 16,
    ambientPopulationBehavior: behavior(["child", "caregiver", "park keeper"], "loop between the acorn house, swings, and sand hollow while adults share the bench", "lively", "day", [16, 44]),
    mapFootprint: footprint(8, 7, 7, "landscape"), pathPreferences: paths("soft-gravel", ["east", "south"], "standard", 4, true),
    decorationPreferences: decor(["acorn climber", "timber swing", "sand hollow", "family bench"], "balanced", "warm", "soft log edge"),
  }),
  defineAsset({
    id: "meadow-clinic", name: "Meadow Community Clinic", category: "public-community", requiredPieces: 5,
    constructionStages: ["quiet clinic foundation", "cream treatment rooms", "mint waiting room", "green roof", "herb court and sheltered entry"],
    finishedAppearance: "A calm cream clinic with mint doors, a green roof, rounded waiting-room windows, and a healing herb courtyard.",
    passiveBudgetPerMinute: 7, discovery: "crowd", discoveryOrder: 20,
    ambientPopulationBehavior: behavior(["nurse", "doctor", "patient", "visitor"], "enter beneath the shelter, wait by garden windows, and take slow herb-court walks", "gentle", "day", [10, 34]),
    mapFootprint: footprint(9, 7, 7), pathPreferences: paths("civic-tile", ["south", "east"], "broad", 5, true),
    decorationPreferences: decor(["herb court", "covered bench", "green roof", "water carafe stand"], "lush", "neutral", "smooth seat-height planter"),
  }),
  defineAsset({
    id: "little-school", name: "Little Lantern School", category: "public-community", requiredPieces: 5,
    constructionStages: ["schoolyard outline", "two cream classrooms", "orange assembly room", "bell cupola", "garden classroom and lantern gate"],
    finishedAppearance: "A small cream school with orange doors, a round assembly room, lanternlike cupola, and outdoor garden classroom.",
    passiveBudgetPerMinute: 7, discovery: "crowd", discoveryOrder: 26,
    ambientPopulationBehavior: behavior(["teacher", "student", "caregiver"], "arrive in little groups, circle the garden classroom, and gather beneath the cupola", "lively", "day", [12, 38]),
    mapFootprint: footprint(10, 8, 8, "courtyard"), pathPreferences: paths("civic-tile", ["south", "west"], "broad", 5, true),
    decorationPreferences: decor(["garden classroom", "lantern gate", "chalk wall", "rainbow stools"], "lush", "warm", "low painted picket fence"),
  }),
  defineAsset({
    id: "roundhouse-fire-station", name: "Roundhouse Fire Station", category: "public-community", requiredPieces: 6,
    constructionStages: ["engine-bay slab", "coral roundhouse walls", "arched bay doors", "lookout cupola", "community safety garden and polished little engine"],
    finishedAppearance: "A compact coral roundhouse with cream arched doors, a tiny polished engine, and a lantern-capped lookout.",
    passiveBudgetPerMinute: 9, discovery: "crowd", discoveryOrder: 33,
    ambientPopulationBehavior: behavior(["firefighter", "mechanic", "school visitor"], "check the little engine, roll hoses neatly, and host calm safety visits", "lively", "day", [7, 24]),
    mapFootprint: footprint(10, 8, 7.5), pathPreferences: paths("warm-brick", ["south", "east"], "broad", 4, true),
    decorationPreferences: decor(["polished engine", "hose tower", "safety garden", "brass bell"], "balanced", "warm", "painted bay apron"),
  }),
  defineAsset({
    id: "pigeon-post-office", name: "Pigeon Post Office", category: "public-community", requiredPieces: 6,
    constructionStages: ["sorting-room pad", "blue post hall", "parcel porch", "clock roof", "pigeon loft, mailboxes, and bicycle rack"],
    finishedAppearance: "A dusty-blue post office with a clock roof, covered parcel porch, painted mailboxes, and a decorative pigeon loft.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 37,
    ambientPopulationBehavior: behavior(["postal worker", "resident", "cargo cyclist"], "sort letters, collect parcels, and depart by bicycle along town paths", "lively", "day", [6, 22]),
    mapFootprint: footprint(9, 7, 7), pathPreferences: paths("warm-brick", ["north", "south", "west"], "broad", 5, true),
    decorationPreferences: decor(["painted mailboxes", "parcel porch", "bicycle rack", "clock face"], "balanced", "warm", "blue brick curb"),
  }),
  defineAsset({
    id: "willow-town-hall", name: "Willow Town Hall", category: "public-community", requiredPieces: 8,
    constructionStages: ["civic hall foundation", "arcaded ground floor", "council chamber", "clock gable", "public counter", "willow plaza and notice colonnade"],
    finishedAppearance: "A welcoming sage civic hall with open cream arcades, a modest clock gable, and a willow-shaded public plaza.",
    passiveBudgetPerMinute: 15, discovery: "crowd", discoveryOrder: 46,
    ambientPopulationBehavior: behavior(["clerk", "neighbor", "council visitor"], "cross the arcade, study the community notice rail, and sit beneath the willow", "lively", "day", [10, 34]),
    mapFootprint: footprint(12, 9, 9, "courtyard"), pathPreferences: paths("civic-tile", ["north", "east", "south", "west"], "broad", 5, true),
    decorationPreferences: decor(["willow tree", "notice rail", "clock gable", "public water bowl"], "balanced", "warm", "civic tile band"),
  }),
  defineAsset({
    id: "wally-botanical-garden", name: "Wally Botanical Garden", category: "public-community", requiredPieces: 9,
    constructionStages: ["garden boundary grove", "curving discovery paths", "fern valley", "pond garden", "small glass pavilion", "benches, labels, and lantern walk"],
    finishedAppearance: "A lush miniature botanical garden of ferns, grasses, a lily pond, and a low glass pavilion threaded by wandering paths.",
    passiveBudgetPerMinute: 17, discovery: "crowd", discoveryOrder: 54,
    ambientPopulationBehavior: behavior(["botanist", "gardener", "stroller", "sketcher"], "wander branching loops, read plant labels, and pause at the lily pond", "lively", "all-day", [20, 55]),
    mapFootprint: footprint(15, 13, 11, "landscape"), pathPreferences: paths("garden-stone", ["north", "east", "south", "west"], "narrow", 4, true),
    decorationPreferences: decor(["fern valley", "lily pond", "glass pavilion", "plant labels"], "lush", "warm", "layered woodland fringe"),
  }),
  defineAsset({
    id: "rainlight-bathhouse", name: "Rainlight Bathhouse", category: "public-community", requiredPieces: 10,
    constructionStages: ["stone bath foundation", "warm changing rooms", "arched bathing hall", "rain roof", "steam courtyard", "reflecting basins and towel garden"],
    finishedAppearance: "A low stone-and-plaster bathhouse under a blue rain roof, with warm arched windows and shallow reflecting basins.",
    passiveBudgetPerMinute: 21, discovery: "crowd", discoveryOrder: 60,
    ambientPopulationBehavior: behavior(["bath keeper", "visitor", "laundry attendant"], "enter quietly, cross the steam court, and rest beside shallow basins", "gentle", "evening", [18, 46]),
    mapFootprint: footprint(13, 11, 9.5, "courtyard"), pathPreferences: paths("garden-stone", ["south", "east"], "broad", 3, true),
    decorationPreferences: decor(["reflecting basins", "towel garden", "rain chains", "stone lanterns"], "lush", "candle", "smooth river-stone edge"),
  }),
  defineAsset({
    id: "lakeside-community-house", name: "Lakeside Community House", category: "public-community", requiredPieces: 8,
    constructionStages: ["waterside community deck", "multi-use timber hall", "workshop wing", "kitchen wing", "folding lakeside wall", "fire circle and shared boat porch"],
    finishedAppearance: "A broad timber community house that opens to the lake, with workshop tables, shared kitchen, and a sheltered fire circle.",
    passiveBudgetPerMinute: 16, discovery: "crowd", discoveryOrder: 57,
    ambientPopulationBehavior: behavior(["neighbor", "workshop host", "cook", "paddler"], "join craft tables, share food, and carry small boats from the porch", "lively", "all-day", [16, 50]),
    mapFootprint: footprint(13, 10, 9.5, "linear"), pathPreferences: paths("boardwalk", ["north", "east", "west"], "broad", 5, true),
    decorationPreferences: decor(["fire circle", "shared boat rack", "workshop tables", "lake reeds"], "lush", "candle", "timber lake deck"),
  }),

  // 61–70 · Trade, industry & transportation.
  defineAsset({
    id: "spoke-bicycle-workshop", name: "Spoke Bicycle Workshop", category: "trade-industry-transport", requiredPieces: 4,
    constructionStages: ["brick repair pad", "orange workshop walls", "wide folding doors", "wheel sign, tool wall, and bicycle garden"],
    finishedAppearance: "A little orange repair shop with wide open doors, wheels on the wall, and bicycles tucked among tall grasses.",
    passiveBudgetPerMinute: 6, discovery: "crowd", discoveryOrder: 41,
    ambientPopulationBehavior: behavior(["mechanic", "cyclist", "courier"], "wheel bicycles in, test bells, and depart onto connected town paths", "lively", "day", [6, 22]),
    mapFootprint: footprint(7, 5, 5.5), pathPreferences: paths("warm-brick", ["east", "south"], "standard", 4, false),
    decorationPreferences: decor(["bicycle racks", "wheel sign", "tool wall", "air pump"], "balanced", "warm", "painted repair apron"),
  }),
  defineAsset({
    id: "makers-yard", name: "Makers' Yard", category: "trade-industry-transport", requiredPieces: 5,
    constructionStages: ["shared yard surface", "carpentry shed", "metal studio", "covered assembly table", "material racks and lantern gantry"],
    finishedAppearance: "A cluster of modest craft sheds around an open assembly yard, animated by sawdust curls and quiet hand tools.",
    passiveBudgetPerMinute: 8, discovery: "crowd", discoveryOrder: 43,
    ambientPopulationBehavior: behavior(["maker", "apprentice", "customer"], "carry small materials between sheds and gather around the assembly table", "lively", "day", [8, 27]),
    mapFootprint: footprint(9, 8, 7.5, "courtyard"), pathPreferences: paths("warm-brick", ["north", "south", "west"], "standard", 3, true),
    decorationPreferences: decor(["material racks", "assembly table", "sawdust sacks", "lantern gantry"], "balanced", "warm", "reused timber fence"),
  }),
  defineAsset({
    id: "cedar-timberworks", name: "Cedar Timberworks", category: "trade-industry-transport", requiredPieces: 6,
    constructionStages: ["timber yard base", "long cutting shed", "seasoning racks", "sawdust roof vent", "finished-furniture porch and replanted grove"],
    finishedAppearance: "A long cedar shed with orderly timber racks, a carved furniture porch, and a carefully replanted tree grove.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 48,
    ambientPopulationBehavior: behavior(["carpenter", "yard worker", "furniture buyer"], "move timber on hand trolleys, sand benches, and inspect finished pieces", "gentle", "day", [7, 25]),
    mapFootprint: footprint(11, 8, 7.5, "linear"), pathPreferences: paths("soft-gravel", ["east", "west", "south"], "standard", 3, false),
    decorationPreferences: decor(["timber racks", "hand trolley", "carved chairs", "replanted cedars"], "balanced", "warm", "stacked offcut edge"),
  }),
  defineAsset({
    id: "loomlight-textile-mill", name: "Loomlight Textile Mill", category: "trade-industry-transport", requiredPieces: 6,
    constructionStages: ["brick mill floor", "sawtooth weaving hall", "dye room", "cloth-loading porch", "thread mural and shade courtyard"],
    finishedAppearance: "A compact brick weaving hall with blue sawtooth roofs, long windows, and cloth samples fluttering beneath a shade frame.",
    passiveBudgetPerMinute: 11, discovery: "crowd", discoveryOrder: 51,
    ambientPopulationBehavior: behavior(["weaver", "dyer", "cloth courier"], "tend quiet looms, hang sample cloth, and wheel folded bolts to the porch", "lively", "day", [7, 24]),
    mapFootprint: footprint(11, 8, 8, "linear"), pathPreferences: paths("warm-brick", ["north", "east", "south"], "broad", 3, true),
    decorationPreferences: decor(["cloth samples", "thread mural", "folded bolts", "shade frame"], "balanced", "neutral", "brick-and-indigo curb"),
  }),
  defineAsset({
    id: "opal-glassworks", name: "Opal Glassworks", category: "trade-industry-transport", requiredPieces: 7,
    constructionStages: ["heatproof workshop base", "cream furnace room", "tall orange chimney", "cooling gallery", "glass garden and display arcade"],
    finishedAppearance: "A cream glass workshop with a tall orange chimney, glowing furnace windows, and an outdoor garden of translucent colored forms.",
    passiveBudgetPerMinute: 13, discovery: "crowd", discoveryOrder: 56,
    ambientPopulationBehavior: behavior(["glassblower", "apprentice", "gallery visitor"], "carry cooling pieces, work at the furnace, and circle the translucent garden", "gentle", "day", [10, 30]),
    mapFootprint: footprint(10, 8, 8, "courtyard"), pathPreferences: paths("warm-brick", ["south", "west"], "broad", 3, true),
    decorationPreferences: decor(["glass garden", "sand bins", "cooling rack", "orange chimney"], "balanced", "warm", "dark heatproof brick edge"),
  }),
  defineAsset({
    id: "canopy-warehouse", name: "Canopy Warehouse", category: "trade-industry-transport", requiredPieces: 7,
    constructionStages: ["loading apron", "timber storage frame", "high cream walls", "green canopy roof", "loading bays and pocket rain garden"],
    finishedAppearance: "A handsome cream warehouse beneath a wide green roof, with rounded loading arches and a rain garden softening the apron.",
    passiveBudgetPerMinute: 14, discovery: "crowd", discoveryOrder: 58,
    ambientPopulationBehavior: behavior(["warehouse keeper", "porter", "cargo cyclist"], "sort crates, move handcarts through arched bays, and depart by cargo bicycle", "lively", "day", [5, 19]),
    mapFootprint: footprint(12, 9, 8), pathPreferences: paths("warm-brick", ["north", "east", "south"], "broad", 4, false),
    decorationPreferences: decor(["handcarts", "labeled crates", "rain garden", "green loading canopy"], "balanced", "neutral", "painted loading stripe"),
  }),
  defineAsset({
    id: "teal-tram-depot", name: "Teal Tram Depot", category: "trade-industry-transport", requiredPieces: 8,
    constructionStages: ["short rail fan", "arched depot shell", "repair pit", "clock gable", "teal tram car", "waiting garden and route totem"],
    finishedAppearance: "An arched brick depot housing one rounded teal tram, beside a pocket waiting garden and simple route totem.",
    passiveBudgetPerMinute: 17, discovery: "crowd", discoveryOrder: 64,
    ambientPopulationBehavior: behavior(["tram driver", "mechanic", "passenger"], "check the tram, gather by the route totem, and board in unhurried groups", "lively", "all-day", [7, 25]),
    mapFootprint: footprint(13, 9, 9, "linear"), pathPreferences: paths("civic-tile", ["east", "west", "south"], "broad", 5, true),
    decorationPreferences: decor(["teal tram", "route totem", "platform bench", "tool cabinet"], "balanced", "warm", "grass-set tram rails"),
  }),
  defineAsset({
    id: "wally-town-station", name: "Wally Town Train Station", category: "trade-industry-transport", requiredPieces: 10,
    constructionStages: ["platform foundations", "cream ticket hall", "covered first platform", "footbridge", "clock tower", "second platform, luggage garden, and blue train"],
    finishedAppearance: "A cream station with a blue canopy, little clock tower, planted platforms, and a short rounded train that comes and goes.",
    passiveBudgetPerMinute: 23, discovery: "crowd", discoveryOrder: 70,
    ambientPopulationBehavior: behavior(["traveler", "conductor", "porter", "commuter"], "wait beneath canopies, cross the footbridge, and board the little train in waves", "lively", "all-day", [8, 30]),
    mapFootprint: footprint(17, 10, 10.5, "linear"), pathPreferences: paths("civic-tile", ["north", "east", "south", "west"], "broad", 5, true),
    decorationPreferences: decor(["blue train", "station clock", "luggage garden", "platform canopies"], "lush", "warm", "cream platform coping"),
  }),
  defineAsset({
    id: "sunset-cargo-port", name: "Sunset Cargo Port", category: "trade-industry-transport", requiredPieces: 14,
    constructionStages: ["stone harbor edge", "first timber pier", "harbor office", "small orange crane", "warehouse sheds", "second pier", "cargo boat, stacked containers, and quay market"],
    finishedAppearance: "A cozy working harbor of timber piers, one small orange crane, muted containers, a rounded cargo boat, and a lively quay edge.",
    passiveBudgetPerMinute: 36, discovery: "crowd", discoveryOrder: 75,
    ambientPopulationBehavior: behavior(["dock worker", "crane operator", "sailor", "quay visitor"], "guide cargo by hand signal, roll carts, and pause at the small quay market", "lively", "day", [6, 26]),
    mapFootprint: footprint(20, 15, 13, "linear"), pathPreferences: paths("boardwalk", ["north", "east", "west"], "broad", 5, true),
    decorationPreferences: decor(["orange crane", "cargo boat", "muted containers", "quay stalls"], "balanced", "warm", "rope-and-bollard harbor edge"),
  }),
  defineAsset({
    id: "cloudskip-freight-terminal", name: "Cloudskip Freight Terminal", category: "trade-industry-transport", requiredPieces: 16,
    constructionStages: ["broad grass landing field", "curved terminal hall", "freight sorting wing", "mooring mast", "hangar", "weather station", "small cream airship, cargo garden, and visitor deck"],
    finishedAppearance: "A fanciful but grounded freight field with a cream airship, low curved terminal, orange mooring mast, and grassy cargo apron.",
    passiveBudgetPerMinute: 44, discovery: "crowd", discoveryOrder: 79,
    ambientPopulationBehavior: behavior(["airship crew", "freight handler", "weather keeper", "visitor"], "tend mooring ropes, wheel light cargo, and watch the airship from a safe deck", "lively", "day", [8, 30]),
    mapFootprint: footprint(22, 17, 14, "campus"), pathPreferences: paths("soft-gravel", ["north", "east", "south", "west"], "broad", 4, true),
    decorationPreferences: decor(["cream airship", "orange mast", "windsocks", "cargo flower beds"], "balanced", "neutral", "mown landing-field rings"),
  }),

  // 71–80 · Finance, energy & infrastructure.
  defineAsset({
    id: "neighborly-bank", name: "Neighborly Bank", category: "finance-energy-infrastructure", requiredPieces: 5,
    constructionStages: ["deep-blue corner foundation", "cream banking room", "arched blue roof", "public counter", "shade porch and budget-tree court"],
    finishedAppearance: "A small deep-blue and cream bank with an open shade porch, round counter windows, and a symbolic tree in its court.",
    passiveBudgetPerMinute: 8, discovery: "crowd", discoveryOrder: 53,
    ambientPopulationBehavior: behavior(["bank clerk", "shopkeeper", "neighbor"], "visit the open counter, review small ledgers, and meet beneath the court tree", "gentle", "day", [8, 26]),
    mapFootprint: footprint(8, 6, 6.5, "courtyard"), pathPreferences: paths("civic-tile", ["south", "east"], "broad", 4, true),
    decorationPreferences: decor(["budget tree", "ledger desk", "shade porch", "blue ceramic clock"], "balanced", "warm", "low cream seat wall"),
  }),
  defineAsset({
    id: "harbor-credit-union", name: "Harbor Credit Union", category: "finance-energy-infrastructure", requiredPieces: 5,
    constructionStages: ["waterside office pad", "round blue meeting room", "member hall", "copper roof", "community table and reed court"],
    finishedAppearance: "A round blue member-owned finance house with a copper roof, communal planning table, and waterside reed court.",
    passiveBudgetPerMinute: 8, discovery: "crowd", discoveryOrder: 66,
    ambientPopulationBehavior: behavior(["member advisor", "local trader", "resident"], "gather around the planning table and talk quietly beside the reed court", "gentle", "day", [10, 30]),
    mapFootprint: footprint(8, 7, 6.5, "courtyard"), pathPreferences: paths("boardwalk", ["south", "west"], "standard", 3, true),
    decorationPreferences: decor(["community table", "reed court", "copper roof", "shared notice board"], "balanced", "warm", "river-stone planting rim"),
  }),
  defineAsset({
    id: "hidden-stock-exchange", name: "Wally World Stock Exchange", category: "finance-energy-infrastructure", requiredPieces: 8,
    constructionStages: ["secret civic foundation", "deep-blue exchange hall", "arched public entrance", "upper counting room", "copper clock roof", "interior counter, glowing door lamps, and exchange plaza"],
    finishedAppearance: "A dignified miniature exchange with deep-blue walls, copper clock roof, softly glowing entrance, and a roof that fades near Wally.",
    passiveBudgetPerMinute: 18, discovery: "crowd", discoveryOrder: 67,
    ambientPopulationBehavior: behavior(["exchange keeper", "messenger", "curious visitor"], "cross the tiny floor, carry paper slips, and gather near the softly lit counter", "lively", "day", [8, 28]),
    mapFootprint: footprint(11, 9, 8.5), pathPreferences: paths("civic-tile", ["south", "east", "west"], "broad", 5, true),
    decorationPreferences: decor(["copper clock", "glowing door lamps", "paper-slip baskets", "exchange plaza trees"], "balanced", "warm", "deep-blue terrazzo band"),
  }),
  defineAsset({
    id: "ribbon-water-tower", name: "Ribbon Water Tower", category: "finance-energy-infrastructure", requiredPieces: 6,
    constructionStages: ["stone pump base", "four blue support legs", "rounded water tank", "spiral service stair", "ribbon mural and rain garden"],
    finishedAppearance: "A soft blue water tower on four stout legs, wrapped by a painted ribbon mural and circled by a rain garden.",
    passiveBudgetPerMinute: 10, discovery: "crowd", discoveryOrder: 72,
    ambientPopulationBehavior: behavior(["water engineer", "gardener", "walker"], "check gauges, tend the rain garden, and loop beneath the tower", "gentle", "day", [7, 24]),
    mapFootprint: footprint(8, 8, 7, "landscape"), pathPreferences: paths("garden-stone", ["north", "south"], "narrow", 3, false),
    decorationPreferences: decor(["ribbon mural", "rain garden", "gauge cabinet", "spiral stair"], "lush", "neutral", "circular bioswale"),
  }),
  defineAsset({
    id: "whisper-wind-farm", name: "Whisper Wind Farm", category: "finance-energy-infrastructure", requiredPieces: 7,
    constructionStages: ["grassy energy field", "first slow turbine", "second slow turbine", "third slow turbine", "timber control hut and flower paths"],
    finishedAppearance: "Three modest cream wind turbines turning lazily above native grass, a timber control hut, and flower-lined maintenance paths.",
    passiveBudgetPerMinute: 14, discovery: "crowd", discoveryOrder: 73,
    ambientPopulationBehavior: behavior(["wind technician", "field ecologist", "walker"], "inspect turbine bases, survey meadow birds, and follow flower paths", "gentle", "day", [8, 26]),
    mapFootprint: footprint(15, 12, 10.5, "landscape"), pathPreferences: paths("soft-gravel", ["north", "east", "south"], "narrow", 2, false),
    decorationPreferences: decor(["native grass", "three slow turbines", "control hut", "bird markers"], "lush", "neutral", "unmown meadow edge"),
  }),
  defineAsset({
    id: "sunpatch-solar-garden", name: "Sunpatch Solar Garden", category: "finance-energy-infrastructure", requiredPieces: 7,
    constructionStages: ["pollinator field", "first blue panel rows", "second panel rows", "timber inverter shelter", "viewing arbor and sheep gate"],
    finishedAppearance: "Low blue solar panels floating above a gold pollinator meadow, with a timber shelter and shaded viewing arbor.",
    passiveBudgetPerMinute: 15, discovery: "crowd", discoveryOrder: 74,
    ambientPopulationBehavior: behavior(["solar keeper", "ecologist", "visitor"], "walk between panel rows, study flowers, and rest beneath the viewing arbor", "gentle", "day", [9, 28]),
    mapFootprint: footprint(15, 11, 10, "landscape"), pathPreferences: paths("soft-gravel", ["east", "south"], "narrow", 2, false),
    decorationPreferences: decor(["solar rows", "pollinator meadow", "viewing arbor", "inverter shelter"], "lush", "neutral", "wildflower field edge"),
  }),
  defineAsset({
    id: "earthwarm-geothermal", name: "Earthwarm Geothermal House", category: "finance-energy-infrastructure", requiredPieces: 10,
    constructionStages: ["deep-well marker field", "stone turbine base", "cream generation hall", "blue condenser roof", "warm-water channel", "fern terraces and public warmth pavilion"],
    finishedAppearance: "A low stone energy house with a blue curved roof, thin threads of steam, fern terraces, and a warm public sitting pavilion.",
    passiveBudgetPerMinute: 24, discovery: "crowd", discoveryOrder: 76,
    ambientPopulationBehavior: behavior(["plant engineer", "geologist", "pavilion visitor"], "check quiet pipes, study the well garden, and warm hands in the public pavilion", "gentle", "all-day", [10, 32]),
    mapFootprint: footprint(14, 11, 10, "campus"), pathPreferences: paths("garden-stone", ["north", "east", "south"], "standard", 3, true),
    decorationPreferences: decor(["fern terraces", "warm channel", "well markers", "sitting pavilion"], "lush", "warm", "dark geothermal stone edge"),
  }),
  defineAsset({
    id: "willow-arch-bridge", name: "Willow Arch Bridge", category: "finance-energy-infrastructure", requiredPieces: 8,
    constructionStages: ["paired stone abutments", "first cream arch", "second cream arch", "timber walking deck", "blue railings", "willow landings and bridge lamps"],
    finishedAppearance: "A graceful two-arch cream bridge with a timber walking deck, dusty-blue rails, tiny lamps, and willows at both landings.",
    passiveBudgetPerMinute: 16, discovery: "crowd", discoveryOrder: 77,
    ambientPopulationBehavior: behavior(["pedestrian", "cyclist", "bridge keeper"], "cross in both directions, pause at the center rail, and gather beneath landing willows", "lively", "all-day", [5, 20]),
    mapFootprint: footprint(18, 6, 8, "linear"), pathPreferences: paths("boardwalk", ["east", "west"], "broad", 5, true),
    decorationPreferences: decor(["willow landings", "bridge lamps", "blue railings", "river steps"], "lush", "warm", "stone river abutment"),
  }),
  defineAsset({
    id: "bluefin-hydro-station", name: "Bluefin Hydro Station", category: "finance-energy-infrastructure", requiredPieces: 12,
    constructionStages: ["river control stones", "low blue turbine hall", "cream spillway arches", "fish passage", "control room", "waterside walk and reed restoration"],
    finishedAppearance: "A low blue hydro house built into cream river arches, softened by a visible fish passage, reeds, and a waterside walk.",
    passiveBudgetPerMinute: 31, discovery: "crowd", discoveryOrder: 78,
    ambientPopulationBehavior: behavior(["hydro engineer", "river keeper", "walker"], "check the turbine hall, monitor the fish passage, and follow the waterside walk", "gentle", "day", [8, 28]),
    mapFootprint: footprint(17, 12, 11, "linear"), pathPreferences: paths("garden-stone", ["north", "east", "west"], "broad", 4, true),
    decorationPreferences: decor(["fish passage", "reed restoration", "control windows", "waterside walk"], "lush", "neutral", "layered river-stone bank"),
  }),
  defineAsset({
    id: "civic-data-grid", name: "Civic Data & Light Grid", category: "finance-energy-infrastructure", requiredPieces: 18,
    constructionStages: ["underground conduit garden", "first neighborhood light loop", "blue civic operations hall", "second light loop", "energy-storage courtyard", "third light loop", "community map room", "townwide lantern synchronization and planted service plaza"],
    finishedAppearance: "A deep-blue civic operations house linked to the whole town by warm synchronized lamps, subtle conduit gardens, and a public map room.",
    passiveBudgetPerMinute: 52, discovery: "crowd", discoveryOrder: 80,
    ambientPopulationBehavior: behavior(["grid keeper", "lamplighter", "community planner", "visitor"], "inspect town maps, tend lamp circuits, and walk outward along softly synchronized lights", "lively", "all-day", [8, 30]),
    mapFootprint: footprint(18, 14, 12, "campus"), pathPreferences: paths("civic-tile", ["north", "east", "south", "west"], "broad", 5, true),
    decorationPreferences: decor(["synchronized lanterns", "conduit gardens", "public map room", "storage court"], "lush", "warm", "deep-blue circuit mosaic"),
  }),
] as const satisfies readonly AssetDefinition[];

/** Exact physical assembly counts from the complete scored-paper art pack.
 * Gameplay uses one discovery per visible lift after the scored foundation. */
export const SCORED_PAPER_STAGE_COUNTS = [
  5, 5, 4, 4, 4, 4, 6, 5,
  4, 4, 5, 6, 5, 4, 5, 5,
  5, 4, 6, 5, 4, 5, 4, 5,
  6, 4, 5, 4, 4, 5, 5, 4,
  5, 4, 4, 5, 6, 4, 6, 5,
  4, 5, 6, 5, 6, 5, 4, 5,
  4, 5, 5, 4, 4, 5, 5, 6,
  4, 4, 4, 6, 5, 4, 5, 6,
  6, 5, 4, 5, 5, 4, 5, 6,
  4, 4, 6, 4, 5, 5, 6, 5,
] as const;

/** Finance landmarks are deliberately moved into the finance art set. */
export const GLOBAL_PACK_GAME_ASSET_OVERRIDES: Readonly<Record<number, string>> = {
  25: "hidden-stock-exchange",
  26: "neighborly-bank",
  27: "harbor-credit-union",
  29: "onre-reinsurance",
};

const gameAssetIdsByPack = ASSET_CATALOG_BASE.map((asset) => asset.id);
for (const [packNumberText, assetId] of Object.entries(GLOBAL_PACK_GAME_ASSET_OVERRIDES)) {
  const targetIndex = Number(packNumberText) - 1;
  const sourceIndex = gameAssetIdsByPack.findIndex((candidate) => candidate === assetId);
  if (sourceIndex < 0) throw new Error(`Missing global-pack game asset ${assetId}.`);
  [gameAssetIdsByPack[targetIndex], gameAssetIdsByPack[sourceIndex]] = [
    gameAssetIdsByPack[sourceIndex],
    gameAssetIdsByPack[targetIndex],
  ];
}

const scoredPaperPiecesByGameId = Object.fromEntries(
  gameAssetIdsByPack.map((assetId, packIndex) => [assetId, SCORED_PAPER_STAGE_COUNTS[packIndex] - 1]),
);

export const ASSET_CATALOG = ASSET_CATALOG_BASE.map((asset) => ({
  ...asset,
  requiredPieces: scoredPaperPiecesByGameId[asset.id] ?? 3,
}));

/** Canonical gameplay export; ASSET_CATALOG remains as a descriptive alias. */
export const GAME_ASSETS = ASSET_CATALOG;

export type AssetId = (typeof ASSET_CATALOG)[number]["id"];
export type ExchangeAsset = Extract<(typeof ASSET_CATALOG)[number], { discovery: "exchange-exclusive" }>;

export const ASSET_IDS = ASSET_CATALOG.map((asset) => asset.id) as readonly AssetId[];

export const ASSETS_BY_ID = Object.freeze(
  Object.fromEntries(ASSET_CATALOG.map((asset) => [asset.id, asset])) as Record<
    AssetId,
    (typeof ASSET_CATALOG)[number]
  >,
);

export const EXCHANGE_ASSETS = ASSET_CATALOG.filter(
  (asset): asset is ExchangeAsset => asset.discovery === "exchange-exclusive",
);

export const CROWD_ASSETS = ASSET_CATALOG.filter(
  (asset) => asset.discovery === "crowd",
);

export const HIDDEN_EXCHANGE_ASSET_ID = "hidden-stock-exchange" as const satisfies AssetId;

export function getAsset(id: AssetId): (typeof ASSET_CATALOG)[number] {
  return ASSETS_BY_ID[id];
}

export function getAssetsByCategory(category: AssetCategory): readonly AssetDefinition[] {
  return ASSET_CATALOG.filter((asset) => asset.category === category);
}

/** Fail loudly during development if a catalog edit breaks the 80/8/10 contract. */
function validateCatalog(): void {
  const ids = new Set(ASSET_CATALOG.map((asset) => asset.id));
  const names = new Set(ASSET_CATALOG.map((asset) => asset.name));
  if (ASSET_CATALOG.length !== 80 || ids.size !== 80 || names.size !== 80) {
    throw new Error("WALLY WORLD requires exactly 80 assets with unique ids and names.");
  }
  for (const category of ASSET_CATEGORIES) {
    if (ASSET_CATALOG.filter((asset) => asset.category === category).length !== 10) {
      throw new Error(`Asset category ${category} must contain exactly ten projects.`);
    }
  }
  if (EXCHANGE_ASSETS.length !== 10) {
    throw new Error("WALLY WORLD requires exactly ten exchange-exclusive companies.");
  }
  for (const asset of ASSET_CATALOG) {
    if (asset.requiredPieces < 3 || asset.requiredPieces > 18) {
      throw new Error(`${asset.id} has an out-of-range piece count.`);
    }
    if (asset.discovery === "exchange-exclusive" && !asset.exchangeListing) {
      throw new Error(`${asset.id} requires exchange listing data.`);
    }
  }
}

validateCatalog();
