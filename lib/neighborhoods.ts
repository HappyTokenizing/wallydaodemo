import type { AssetDefinition, AssetId } from "./assets";
import type { GameState } from "./gameState";

export type WorldPoint = Readonly<{ x: number; y: number }>;
export type NeighborhoodId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Slightly tighter districts keep discoveries close without flattening their unique layouts. */
export const NEIGHBORHOOD_LAYOUT_SCALE = 0.9;

export type NeighborhoodDefinition = Readonly<{
  id: NeighborhoodId;
  packId: string;
  name: string;
  sign: string;
  signFolder: string;
  signAspect: number;
  center: WorldPoint;
  map: WorldPoint;
  palette: readonly [string, string, string];
}>;

/** Every district uses the same landscape sign silhouette for clear sightlines. */
export const HORIZONTAL_SIGN_ASPECT = 1672 / 941;

export const NEIGHBORHOODS: readonly NeighborhoodDefinition[] = [
  { id: 0, packId: "01_feast_street", name: "WALLY WORLD", sign: "WALLY WORLD", signFolder: "10_wally_world", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 0, y: 4 }, map: { x: 0, y: 0 }, palette: ["#d97b62", "#e9bd62", "#739b7e"] },
  { id: 1, packId: "02_homeward_gardens", name: "Tokenize N’ Chill", sign: "Tokenize N’ Chill", signFolder: "01_tokenize_n_chill", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: -47, y: 5 }, map: { x: -1, y: 0 }, palette: ["#7b9db0", "#d9a775", "#8aa17a"] },
  { id: 2, packId: "03_japan_quarter", name: "Relax, we're moving onchain", sign: "Relax, we're moving onchain", signFolder: "02_relax_were_moving_onchain", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 47, y: 4 }, map: { x: 1, y: 0 }, palette: ["#c96f63", "#5f8b88", "#e6c480"] },
  { id: 3, packId: "04_ledger_square", name: "COMING FOR WALL ST", sign: "COMING FOR WALL ST", signFolder: "03_coming_for_wall_st", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: -50, y: 53 }, map: { x: -1, y: 1 }, palette: ["#496a91", "#d8b46e", "#6c8a78"] },
  { id: 4, packId: "05_ubuntu_gardens", name: "Crypto Meets the World", sign: "Crypto Meets the World", signFolder: "04_crypto_meets_the_world", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 0, y: 56 }, map: { x: 0, y: 1 }, palette: ["#c57a4f", "#6e9b72", "#e0b65f"] },
  { id: 5, packId: "06_mountain_heights", name: "TokenizeThis", sign: "TokenizeThis", signFolder: "05_tokenizethis", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 50, y: 52 }, map: { x: 1, y: 1 }, palette: ["#668aa1", "#88a184", "#d9b77b"] },
  { id: 6, packId: "07_lantern_arts", name: "Zeus' RWA Lounge", sign: "Zeus' RWA Lounge", signFolder: "06_zeus_rwa_lounge", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: -51, y: -48 }, map: { x: -1, y: -1 }, palette: ["#9b7093", "#d77c62", "#e1b965"] },
  { id: 7, packId: "08_green_commons", name: "Prosperity for All", sign: "Prosperity for All", signFolder: "07_prosperity_for_all", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 0, y: -51 }, map: { x: 0, y: -1 }, palette: ["#6f9b76", "#90b1a0", "#e1be6f"] },
  { id: 8, packId: "09_latin_plaza", name: "YOU MADE IT THIS FAR", sign: "YOU MADE IT THIS FAR", signFolder: "08_you_made_it_this_far", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 51, y: -47 }, map: { x: 1, y: -1 }, palette: ["#d46e5e", "#e4a94f", "#62a19a"] },
  { id: 9, packId: "10_tropical_harbor", name: "Happy Tokenizing", sign: "Happy Tokenizing", signFolder: "09_happy_tokenizing", signAspect: HORIZONTAL_SIGN_ASPECT, center: { x: 0, y: -100 }, map: { x: 0, y: -2 }, palette: ["#4f9c9b", "#e3b55e", "#cf7964"] },
] as const;

export const UNLOCK_WAVES: readonly (readonly NeighborhoodId[])[] = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9],
] as const;

/** Eight authored building plots per neighborhood. Every district has a distinct
 * circulation pattern instead of reusing a circular ring. */
export const NEIGHBORHOOD_PLOT_OFFSETS: readonly (readonly WorldPoint[])[] = [
  [ // A lively, staggered market street.
    { x: -15, y: 9 }, { x: -6, y: 10 }, { x: 5, y: 9 }, { x: 15, y: 7 },
    { x: -14, y: -7 }, { x: -5, y: -8 }, { x: 6, y: -7 }, { x: 15, y: -9 },
  ],
  [ // A U-shaped residential garden lane.
    { x: -15, y: 11 }, { x: -16, y: 1 }, { x: -14, y: -10 }, { x: -5, y: -14 },
    { x: 6, y: -13 }, { x: 15, y: -8 }, { x: 16, y: 2 }, { x: 13, y: 13 },
  ],
  [ // Two diagonal banks divided by a lantern canal.
    { x: -17, y: 12 }, { x: -8, y: 9 }, { x: 2, y: 11 }, { x: 11, y: 1 },
    { x: -13, y: -2 }, { x: -6, y: -10 }, { x: 6, y: -11 }, { x: 16, y: -14 },
  ],
  [ // Tight finance avenues around an offset civic square.
    { x: -15, y: 12 }, { x: -4, y: 12 }, { x: 8, y: 12 }, { x: 16, y: 4 },
    { x: -15, y: -3 }, { x: -5, y: -10 }, { x: 6, y: -10 }, { x: 16, y: -8 },
  ],
  [ // Three courtyard spokes meeting at the community heart.
    { x: 0, y: 10 }, { x: -10, y: 6 }, { x: -19, y: 10 }, { x: 10, y: 7 },
    { x: 19, y: 11 }, { x: -6, y: -10 }, { x: -13, y: -17 }, { x: 9, y: -13 },
  ],
  [ // A mountain switchback climbing across the paper terrain.
    { x: -18, y: -13 }, { x: -9, y: -10 }, { x: 1, y: -7 }, { x: 13, y: -4 },
    { x: 9, y: 5 }, { x: -2, y: 7 }, { x: -13, y: 11 }, { x: 0, y: 16 },
  ],
  [ // An S-shaped arts promenade and theater forecourt.
    { x: -17, y: 11 }, { x: -7, y: 13 }, { x: 5, y: 11 }, { x: 16, y: 6 },
    { x: 10, y: -1 }, { x: 1, y: -6 }, { x: -12, y: -7 }, { x: -3, y: -14 },
  ],
  [ // An asymmetric park commons with a broad open center.
    { x: -18, y: 6 }, { x: -12, y: 15 }, { x: 0, y: 17 }, { x: 13, y: 13 },
    { x: 18, y: 2 }, { x: 10, y: -9 }, { x: -2, y: -14 }, { x: -15, y: -9 },
  ],
  [ // Stepped plaza terraces descending toward a music court.
    { x: -17, y: 14 }, { x: -8, y: 16 }, { x: 8, y: 17 }, { x: 17, y: 8 },
    { x: -13, y: 3 }, { x: 0, y: 10 }, { x: 13, y: -2 }, { x: -6, y: -12 },
  ],
  [ // A hooked harbor edge with a short paper pier.
    { x: -18, y: 11 }, { x: -8, y: 11 }, { x: 3, y: 10 }, { x: 14, y: 7 },
    { x: 17, y: -2 }, { x: 11, y: -12 }, { x: 1, y: -14 }, { x: -10, y: -11 },
  ],
] as const;

export function getNeighborhoodSignPoint(neighborhood: NeighborhoodDefinition): WorldPoint {
  return { ...neighborhood.center };
}

export function getCompletedNeighborhoodIds(
  state: Pick<GameState, "completedAssetIds">,
  groups: readonly (readonly AssetDefinition[])[],
): NeighborhoodId[] {
  const completed = new Set<AssetId>(state.completedAssetIds);
  return groups.flatMap((assets, index) => {
    const neighborhoodAssets = assets.filter((asset) => asset.discovery === "crowd");
    return (
    neighborhoodAssets.length > 0 && neighborhoodAssets.every((asset) => completed.has(asset.id as AssetId))
      ? [index as NeighborhoodId]
      : []
    );
  });
}

export function getUnlockedNeighborhoodIds(completedIds: readonly NeighborhoodId[]): NeighborhoodId[] {
  const completed = new Set(completedIds);
  const unlocked: NeighborhoodId[] = [];
  for (let waveIndex = 0; waveIndex < UNLOCK_WAVES.length; waveIndex += 1) {
    const wave = UNLOCK_WAVES[waveIndex];
    if (waveIndex > 0 && !UNLOCK_WAVES[waveIndex - 1].every((id) => completed.has(id))) break;
    unlocked.push(...wave);
  }
  return unlocked;
}

export function getNeighborhoodProgress(
  state: Pick<GameState, "assetProgress">,
  assets: readonly AssetDefinition[],
): number {
  const neighborhoodAssets = assets.filter((asset) => asset.discovery === "crowd");
  const required = neighborhoodAssets.reduce((sum, asset) => sum + asset.requiredPieces, 0);
  if (required === 0) return 1;
  const collected = neighborhoodAssets.reduce((sum, asset) => (
    sum + Math.min(asset.requiredPieces, Math.max(0, state.assetProgress[asset.id as AssetId] ?? 0))
  ), 0);
  return Math.min(1, collected / required);
}

export function getActiveWorldPeriod(unlockedIds: readonly NeighborhoodId[]): WorldPoint {
  const unlocked = new Set(unlockedIds);
  if (unlocked.has(9)) return { x: 184, y: 238 };
  if (unlocked.has(6)) return { x: 184, y: 180 };
  if (unlocked.has(3)) return { x: 182, y: 142 };
  if (unlocked.has(1)) return { x: 148, y: 100 };
  return { x: 62, y: 70 };
}

export function nearestToroidalPoint(point: WorldPoint, focus: WorldPoint, period: WorldPoint): WorldPoint {
  const wrapAxis = (value: number, target: number, size: number) => (
    value + Math.round((target - value) / size) * size
  );
  return {
    x: wrapAxis(point.x, focus.x, period.x),
    y: wrapAxis(point.y, focus.y, period.y),
  };
}

export function toroidalDelta(from: WorldPoint, to: WorldPoint, period: WorldPoint): WorldPoint {
  const nearest = nearestToroidalPoint(to, from, period);
  return { x: nearest.x - from.x, y: nearest.y - from.y };
}
