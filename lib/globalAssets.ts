import {
  GAME_ASSETS,
  GLOBAL_PACK_GAME_ASSET_OVERRIDES,
  type AssetDefinition,
  type AssetId,
} from "./assets";

export type GlobalAssetSizeClass = "compact" | "medium" | "large" | "landmark";

export interface GlobalAssetDefinition {
  readonly packNumber: number;
  readonly neighborhoodId: string;
  readonly neighborhoodName: string;
  readonly slug: string;
  readonly displayName: string;
  readonly sizeClass: GlobalAssetSizeClass;
  readonly visualScale: number;
  readonly stageCount: 4 | 5 | 6;
  readonly stagePathPattern: string;
  readonly stagePath: (stage: number) => string;
}

type GlobalAssetSeed = Omit<GlobalAssetDefinition, "stagePathPattern" | "stagePath">;

export const GLOBAL_ASSET_BASE_PATH = "/assets/scored-paper/structures/construction_stages";

function defineGlobalAsset(seed: GlobalAssetSeed): GlobalAssetDefinition {
  const paddedNumber = String(seed.packNumber).padStart(2, "0");
  const stageDirectory = `${GLOBAL_ASSET_BASE_PATH}/${paddedNumber}_${seed.slug}`;

  return Object.freeze({
    ...seed,
    stagePathPattern: `${stageDirectory}/stage_N.png`,
    stagePath: (stage: number) => {
      const normalizedStage = Math.max(1, Math.min(seed.stageCount, Math.round(stage)));
      return `${stageDirectory}/stage_${normalizedStage}.png`;
    },
  });
}

export const GLOBAL_ASSETS = [
  defineGlobalAsset({ packNumber: 1, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "neighborhood_restaurant", displayName: "Neighborhood Restaurant", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 2, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "artisan_bakery", displayName: "Artisan Bakery", sizeClass: "large", visualScale: 0.96, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 3, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "coffee_shop", displayName: "Coffee Shop", sizeClass: "medium", visualScale: 0.74, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 4, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "pizza_parlor", displayName: "Pizza Parlor", sizeClass: "medium", visualScale: 0.84, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 5, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "taco_stand", displayName: "Taco Stand", sizeClass: "compact", visualScale: 0.58, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 6, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "ice_cream_shop", displayName: "Ice Cream Shop", sizeClass: "compact", visualScale: 0.66, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 7, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "farmers_market", displayName: "Farmers Market", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 8, neighborhoodId: "01_feast_street", neighborhoodName: "Feast Street", slug: "rooftop_garden_cafe", displayName: "Rooftop Garden Café", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),

  defineGlobalAsset({ packNumber: 9, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "starter_cottage", displayName: "Starter Cottage", sizeClass: "medium", visualScale: 0.74, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 10, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "townhome", displayName: "Townhome", sizeClass: "medium", visualScale: 0.84, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 11, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "apartment_building", displayName: "Apartment Building", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 12, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "luxury_apartments", displayName: "Luxury Apartments", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 13, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "co_living_house", displayName: "Co-Living House", sizeClass: "large", visualScale: 0.95, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 14, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "brownstone", displayName: "Brownstone", sizeClass: "medium", visualScale: 0.78, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 15, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "artist_lofts", displayName: "Artist Lofts", sizeClass: "large", visualScale: 0.88, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 16, neighborhoodId: "02_homeward_gardens", neighborhoodName: "Homeward Gardens", slug: "garden_flats", displayName: "Garden Flats", sizeClass: "large", visualScale: 0.96, stageCount: 5 }),

  defineGlobalAsset({ packNumber: 17, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "machiya_tea_house", displayName: "Machiya Tea House", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 18, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "ramen_alley_shop", displayName: "Ramen Alley Shop", sizeClass: "compact", visualScale: 0.68, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 19, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "sento_bathhouse", displayName: "Sento Bathhouse", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 20, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "capsule_hotel_tower", displayName: "Capsule Hotel Tower", sizeClass: "medium", visualScale: 0.80, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 21, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "garden_pavilion", displayName: "Garden Pavilion", sizeClass: "medium", visualScale: 0.72, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 22, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "tokyo_micro_office", displayName: "Tokyo Micro Office", sizeClass: "medium", visualScale: 0.82, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 23, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "stationery_townhouse", displayName: "Stationery Townhouse", sizeClass: "medium", visualScale: 0.82, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 24, neighborhoodId: "03_japan_quarter", neighborhoodName: "Japan Quarter", slug: "neighborhood_rail_station", displayName: "Neighborhood Rail Station", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),

  defineGlobalAsset({ packNumber: 25, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "stock_exchange", displayName: "Stock Exchange", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 26, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "community_bank", displayName: "Community Bank", sizeClass: "medium", visualScale: 0.80, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 27, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "credit_union", displayName: "Credit Union", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 28, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "brokerage_house", displayName: "Brokerage House", sizeClass: "medium", visualScale: 0.86, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 29, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "insurance_house", displayName: "Insurance House", sizeClass: "medium", visualScale: 0.72, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 30, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "venture_studio", displayName: "Venture Studio", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 31, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "token_vault", displayName: "Token Vault", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 32, neighborhoodId: "04_ledger_square", neighborhoodName: "Ledger Square — NYC Finance", slug: "auction_house", displayName: "Auction House", sizeClass: "medium", visualScale: 0.82, stageCount: 4 }),

  defineGlobalAsset({ packNumber: 33, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "earthen_courtyard_library", displayName: "Earthen Courtyard Library", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 34, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "swahili_coast_cafe", displayName: "Swahili Coast Café", sizeClass: "medium", visualScale: 0.84, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 35, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "highland_coffee_pavilion", displayName: "Highland Coffee Pavilion", sizeClass: "medium", visualScale: 0.72, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 36, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "west_african_arts_center", displayName: "West African Arts Center", sizeClass: "large", visualScale: 0.94, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 37, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "woven_canopy_market", displayName: "Woven Canopy Market", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 38, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "solar_craft_workshop", displayName: "Solar Craft Workshop", sizeClass: "compact", visualScale: 0.65, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 39, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "baobab_gathering_pavilion", displayName: "Baobab Gathering Pavilion", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 40, neighborhoodId: "05_ubuntu_gardens", neighborhoodName: "Ubuntu Gardens", slug: "garden_clinic", displayName: "Garden Clinic", sizeClass: "large", visualScale: 0.88, stageCount: 5 }),

  defineGlobalAsset({ packNumber: 41, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "a_frame_cabin", displayName: "A-Frame Cabin", sizeClass: "compact", visualScale: 0.58, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 42, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "alpine_lodge", displayName: "Alpine Lodge", sizeClass: "large", visualScale: 0.96, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 43, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "cable_car_station", displayName: "Cable-Car Station", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 44, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "stone_observatory", displayName: "Stone Observatory", sizeClass: "medium", visualScale: 0.83, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 45, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "terraced_hot_spring_spa", displayName: "Terraced Hot-Spring Spa", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 46, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "fire_lookout_tower", displayName: "Fire Lookout Tower", sizeClass: "medium", visualScale: 0.78, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 47, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "mountaineering_outfitter", displayName: "Mountaineering Outfitter", sizeClass: "compact", visualScale: 0.70, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 48, neighborhoodId: "06_mountain_heights", neighborhoodName: "Mountain Heights", slug: "avalanche_research_lab", displayName: "Avalanche Research Laboratory", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),

  defineGlobalAsset({ packNumber: 49, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "cinema", displayName: "Cinema", sizeClass: "medium", visualScale: 0.78, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 50, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "community_theater", displayName: "Community Theater", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 51, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "city_museum", displayName: "City Museum", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 52, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "music_hall", displayName: "Music Hall", sizeClass: "medium", visualScale: 0.85, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 53, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "boardwalk_arcade", displayName: "Boardwalk Arcade", sizeClass: "medium", visualScale: 0.76, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 54, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "bowling_alley", displayName: "Bowling Alley", sizeClass: "large", visualScale: 0.88, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 55, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "fitness_club", displayName: "Fitness Club", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 56, neighborhoodId: "07_lantern_arts", neighborhoodName: "Lantern Arts", slug: "skate_park", displayName: "Skate Park", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),

  defineGlobalAsset({ packNumber: 57, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "central_park", displayName: "Central Park Pavilion", sizeClass: "medium", visualScale: 0.80, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 58, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "playground", displayName: "Playground", sizeClass: "medium", visualScale: 0.85, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 59, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "dog_park", displayName: "Dog Park", sizeClass: "large", visualScale: 0.88, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 60, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "fountain_plaza", displayName: "Fountain Plaza", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 61, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "botanical_garden", displayName: "Botanical Garden", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 62, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "community_garden", displayName: "Community Garden", sizeClass: "medium", visualScale: 0.80, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 63, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "neighborhood_orchard", displayName: "Neighborhood Orchard", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 64, neighborhoodId: "08_green_commons", neighborhoodName: "Green Commons", slug: "pond_pavilion", displayName: "Pond Pavilion", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),

  defineGlobalAsset({ packNumber: 65, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "colonial_courtyard_casa", displayName: "Colonial Courtyard Casa", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 66, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "covered_mercado_hall", displayName: "Covered Mercado Hall", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 67, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "neighborhood_panaderia", displayName: "Neighborhood Panadería", sizeClass: "compact", visualScale: 0.70, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 68, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "art_deco_cinema", displayName: "Art Deco Cinema", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 69, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "creative_office_tower", displayName: "Creative Office Tower", sizeClass: "medium", visualScale: 0.78, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 70, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "corner_food_kiosk", displayName: "Corner Food Kiosk", sizeClass: "compact", visualScale: 0.58, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 71, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "community_music_courtyard", displayName: "Community Music Courtyard", sizeClass: "large", visualScale: 0.90, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 72, neighborhoodId: "09_latin_plaza", neighborhoodName: "Latin Plaza", slug: "hillside_row_homes", displayName: "Hillside Row Homes", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),

  defineGlobalAsset({ packNumber: 73, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "stilt_beach_bungalow", displayName: "Stilt Beach Bungalow", sizeClass: "compact", visualScale: 0.65, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 74, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "mangrove_cafe", displayName: "Mangrove Café", sizeClass: "medium", visualScale: 0.80, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 75, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "palm_courtyard_hotel", displayName: "Palm Courtyard Hotel", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 76, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "open_canopy_market", displayName: "Open-Canopy Market", sizeClass: "medium", visualScale: 0.85, stageCount: 4 }),
  defineGlobalAsset({ packNumber: 77, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "marine_research_center", displayName: "Marine Research Center", sizeClass: "medium", visualScale: 0.80, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 78, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "shell_event_pavilion", displayName: "Shell Event Pavilion", sizeClass: "large", visualScale: 0.88, stageCount: 5 }),
  defineGlobalAsset({ packNumber: 79, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "lagoon_bathhouse", displayName: "Lagoon Bathhouse", sizeClass: "landmark", visualScale: 1.00, stageCount: 6 }),
  defineGlobalAsset({ packNumber: 80, neighborhoodId: "10_tropical_harbor", neighborhoodName: "Tropical Harbor", slug: "marina_clubhouse", displayName: "Marina Clubhouse", sizeClass: "large", visualScale: 0.92, stageCount: 5 }),
] as const satisfies readonly GlobalAssetDefinition[];

if (GLOBAL_ASSETS.length !== GAME_ASSETS.length) {
  throw new Error("Global structure art must map one-to-one with the 80 GAME_ASSETS entries.");
}

// Preserve the original catalog ordering while swapping the four finance
// landmarks into Ledger Square. This keeps every gameplay asset one-to-one
// with the supplied art and, importantly, makes the exchange and OnRe's
// insurance house physically discoverable in the finance neighborhood.
const gameAssetsByPack = [...GAME_ASSETS];
for (const [packNumberText, assetIdText] of Object.entries(GLOBAL_PACK_GAME_ASSET_OVERRIDES)) {
  const assetId = assetIdText as AssetId;
  const targetIndex = Number(packNumberText) - 1;
  const sourceIndex = gameAssetsByPack.findIndex((asset) => asset.id === assetId);
  if (sourceIndex < 0) throw new Error(`Missing Ledger Square game asset ${assetId}.`);
  [gameAssetsByPack[targetIndex], gameAssetsByPack[sourceIndex]] = [
    gameAssetsByPack[sourceIndex],
    gameAssetsByPack[targetIndex],
  ];
}

export const GLOBAL_ASSET_BY_GAME_ID = Object.freeze(
  Object.fromEntries(
    gameAssetsByPack.map((gameAsset, catalogIndex) => [gameAsset.id, GLOBAL_ASSETS[catalogIndex]]),
  ) as Record<AssetId, GlobalAssetDefinition>,
);

export function getGlobalAssetByCatalogIndex(catalogIndex: number): GlobalAssetDefinition {
  const asset = GLOBAL_ASSETS[catalogIndex];
  if (!asset) throw new RangeError(`No global structure exists at catalog index ${catalogIndex}.`);
  return asset;
}

export function getGlobalAssetForGameAsset(
  gameAsset: Pick<AssetDefinition, "id">,
): GlobalAssetDefinition {
  const asset = GLOBAL_ASSET_BY_GAME_ID[gameAsset.id as AssetId];
  if (!asset) throw new Error(`No global structure mapping exists for game asset ${gameAsset.id}.`);
  return asset;
}

export function getGlobalAssetForGameAssetId(assetId: AssetId): GlobalAssetDefinition {
  return GLOBAL_ASSET_BY_GAME_ID[assetId];
}

export function getGlobalStagePathForGameAsset(
  gameAsset: Pick<AssetDefinition, "id">,
  stage: number,
): string {
  return getGlobalAssetForGameAsset(gameAsset).stagePath(stage);
}
