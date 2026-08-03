import { GAME_ASSETS, type AssetDefinition, type AssetId } from "./assets";

const PACK_ASSET_SLUGS = [
  "neighborhood_restaurant", "artisan_bakery", "coffee_shop", "pizza_parlor", "taco_stand",
  "ice_cream_shop", "farmers_market", "rooftop_garden_cafe", "noodle_house", "juice_bar",
  "starter_cottage", "townhome", "apartment_building", "luxury_apartments", "co_living_house",
  "brownstone", "artist_lofts", "garden_flats", "waterfront_condos", "senior_living",
  "pear_tech_office", "fashion_boutique", "bookstore", "record_shop", "bike_shop",
  "furniture_studio", "design_agency", "coworking_hub", "boutique_hotel", "department_store",
  "stock_exchange", "community_bank", "credit_union", "brokerage_house", "insurance_house",
  "venture_studio", "token_vault", "auction_house", "town_hall", "post_office",
  "public_library", "neighborhood_school", "fire_station", "community_clinic", "transit_station",
  "public_safety_office", "courthouse", "recycling_center", "solar_farm", "wind_lab",
  "water_tower", "power_station", "data_center", "microchip_factory", "textile_mill",
  "distribution_warehouse", "shipping_depot", "construction_yard", "cinema", "community_theater",
  "city_museum", "music_hall", "boardwalk_arcade", "bowling_alley", "fitness_club",
  "skate_park", "sports_arena", "community_pool", "central_park", "playground",
  "dog_park", "fountain_plaza", "botanical_garden", "community_garden", "neighborhood_orchard",
  "pond_pavilion", "tree_nursery", "flower_conservatory", "waterfront_pier", "hiking_lodge",
] as const;

const CATEGORY_PACK_NUMBERS: Record<AssetDefinition["category"], readonly number[]> = {
  "food-hospitality": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "real-estate": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  "technology-companies": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  "agriculture-commodities": [75, 74, 69, 73, 76, 78, 77, 72, 70, 80],
  "culture-collectibles": [61, 62, 41, 60, 59, 23, 73, 63, 64, 38],
  "public-community": [69, 70, 44, 42, 43, 40, 39, 73, 68, 41],
  "trade-industry-transport": [25, 58, 56, 55, 54, 56, 45, 57, 79, 58],
  "finance-energy-infrastructure": [32, 33, 31, 51, 50, 49, 52, 45, 57, 53],
};

const SPECIAL_PACK_NUMBERS: Partial<Record<AssetId, number>> = {
  "onre-reinsurance": 35,
  "hidden-stock-exchange": 25,
  "whisper-wind-farm": 50,
  "sunpatch-solar-garden": 49,
  "ribbon-water-tower": 51,
};

export type PackAsset = {
  readonly number: number;
  readonly paddedNumber: string;
  readonly slug: string;
  readonly iconPath: string;
  stagePath(stage: number): string;
};

export function getPackAsset(asset: AssetDefinition): PackAsset {
  const categoryAssets = GAME_ASSETS.filter((candidate) => candidate.category === asset.category);
  const categoryIndex = Math.max(0, categoryAssets.findIndex((candidate) => candidate.id === asset.id));
  const number = SPECIAL_PACK_NUMBERS[asset.id as AssetId]
    ?? CATEGORY_PACK_NUMBERS[asset.category][categoryIndex]
    ?? 1;
  const slug = PACK_ASSET_SLUGS[number - 1] ?? PACK_ASSET_SLUGS[0];
  const paddedNumber = String(number).padStart(2, "0");
  return {
    number,
    paddedNumber,
    slug,
    iconPath: `/assets/token-world/icons/${paddedNumber}_${slug}_icon.png`,
    stagePath: (stage) => `/assets/token-world/build_stages/${paddedNumber}_${slug}/stage_${Math.max(1, Math.min(5, Math.round(stage)))}.png`,
  };
}

export const PACK_TOKEN_BASE_PATH = "/assets/token-world/token_base/token_base.png";
