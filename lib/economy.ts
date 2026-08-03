import {
  ASSET_IDS,
  EXCHANGE_ASSETS,
  GAME_ASSETS,
  type AssetId,
} from "./assets";
import { getGlobalAssetForGameAssetId } from "./globalAssets";

export const NEIGHBORHOOD_COUNT = 10;
export const FINANCE_NEIGHBORHOOD_INDEX = 3;

const NEIGHBORHOOD_LAND_BASE = [3, 5, 7, 9, 12, 15, 18, 22, 27, 33] as const;

export function getNeighborhoodIndexForAsset(assetId: AssetId): number {
  const packNumber = getGlobalAssetForGameAssetId(assetId).packNumber;
  return Math.max(0, Math.min(NEIGHBORHOOD_COUNT - 1, Math.floor((packNumber - 1) / 8)));
}

export function getLandPlotPrice(neighborhood: number, slot: number): number {
  const normalizedNeighborhood = Math.max(0, Math.min(NEIGHBORHOOD_COUNT - 1, Math.floor(neighborhood)));
  const base = NEIGHBORHOOD_LAND_BASE[normalizedNeighborhood] ?? NEIGHBORHOOD_LAND_BASE.at(-1)!;
  return base + Math.max(0, Math.floor(slot) - 1) * 2;
}

function getNeighborhoodLandCost(neighborhood: number): number {
  const crowdAssets = GAME_ASSETS.filter((asset) => (
    asset.discovery === "crowd"
    && getNeighborhoodIndexForAsset(asset.id as AssetId) === neighborhood
  ));
  return crowdAssets.reduce((total, asset, slot) => {
    // A new world grants its very first plot. Every later plot is purchased.
    if (neighborhood === 0 && asset.id === ASSET_IDS[0]) return total;
    return total + getLandPlotPrice(neighborhood, slot);
  }, 0);
}

/**
 * A district produces a finite community treasury: enough for its own plots,
 * the first step into the next district, and a modest creative buffer.
 */
export function getBaseNeighborhoodCoinCap(neighborhood: number): number {
  const normalizedNeighborhood = Math.max(0, Math.min(NEIGHBORHOOD_COUNT - 1, Math.floor(neighborhood)));
  const nextNeighborhood = Math.min(NEIGHBORHOOD_COUNT - 1, normalizedNeighborhood + 1);
  const nextDistrictSeed = getLandPlotPrice(nextNeighborhood, 0) * (normalizedNeighborhood === 9 ? 1 : 2);
  const workingTreasury = (getNeighborhoodLandCost(normalizedNeighborhood) + nextDistrictSeed) * 1.8;
  return Math.ceil(Math.max(60, workingTreasury) / 5) * 5;
}

/** Maximum possible cost prevents a daily price change from stranding the player. */
export function getMaximumExchangeInventoryCost(): number {
  return EXCHANGE_ASSETS.reduce((total, asset) => (
    total + asset.exchangeListing.maximumPrice * asset.requiredPieces
  ), 0);
}

export function getNeighborhoodCoinCap(neighborhood: number): number {
  const baseCap = getBaseNeighborhoodCoinCap(neighborhood);
  return neighborhood === FINANCE_NEIGHBORHOOD_INDEX
    ? baseCap + getMaximumExchangeInventoryCost()
    : baseCap;
}
