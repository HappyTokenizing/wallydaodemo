import assert from "node:assert/strict";
import test from "node:test";
import { ASSET_IDS, ASSETS_BY_ID } from "../lib/assets";
import {
  FINANCE_NEIGHBORHOOD_INDEX,
  getBaseNeighborhoodCoinCap,
  getMaximumExchangeInventoryCost,
  getNeighborhoodCoinCap,
  getNeighborhoodIndexForAsset,
} from "../lib/economy";
import {
  accrueActiveBudget,
  createInitialGameState,
  getPassiveBudgetPerMinute,
  normalizeGameState,
} from "../lib/gameState";
import {
  NEIGHBORHOODS,
  NEIGHBORHOOD_LAYOUT_SCALE,
  getNeighborhoodSignPoint,
} from "../lib/neighborhoods";

function completedAssetState(assetId: (typeof ASSET_IDS)[number], now = 1_000) {
  const initial = createInitialGameState(now, { worldSeed: 42 });
  return {
    ...initial,
    assetProgress: { [assetId]: ASSETS_BY_ID[assetId].requiredPieces },
    completedAssetIds: [assetId],
    completedAt: { [assetId]: now },
  };
}

test("the first neighborhood pays faster and stops exactly at its treasury cap", () => {
  const state = completedAssetState(ASSET_IDS[0]);
  assert.equal(getPassiveBudgetPerMinute(state), 9);

  const cap = getNeighborhoodCoinCap(0);
  const nearlyCapped = {
    ...state,
    town: {
      ...state.town,
      neighborhoodBudgetProduced: [cap - 0.5, ...state.town.neighborhoodBudgetProduced.slice(1)],
    },
  };
  const capped = accrueActiveBudget(nearlyCapped, nearlyCapped.lastAccrualAt + 60_000);
  assert.equal(capped.budget, 0.5);
  assert.equal(capped.town.neighborhoodBudgetProduced[0], cap);
  assert.equal(getPassiveBudgetPerMinute(capped), 0);
});

test("Ledger Square reserves the full maximum-priced exchange inventory", () => {
  assert.equal(
    getNeighborhoodCoinCap(FINANCE_NEIGHBORHOOD_INDEX)
      - getBaseNeighborhoodCoinCap(FINANCE_NEIGHBORHOOD_INDEX),
    getMaximumExchangeInventoryCost(),
  );

  const financeAssetId = ASSET_IDS.find((assetId) => (
    getNeighborhoodIndexForAsset(assetId) === FINANCE_NEIGHBORHOOD_INDEX
  ));
  assert.ok(financeAssetId);
  const state = completedAssetState(financeAssetId);
  const produced = [...state.town.neighborhoodBudgetProduced];
  produced[FINANCE_NEIGHBORHOOD_INDEX] = getNeighborhoodCoinCap(FINANCE_NEIGHBORHOOD_INDEX) - 0.25;
  const nearlyCapped = { ...state, town: { ...state.town, neighborhoodBudgetProduced: produced } };
  const capped = accrueActiveBudget(nearlyCapped, nearlyCapped.lastAccrualAt + 60_000);
  assert.equal(capped.budget, 0.25);
  assert.equal(getPassiveBudgetPerMinute(capped), 0);
});

test("older saves receive a safe ten-neighborhood production ledger", () => {
  const state = createInitialGameState(1_000, { worldSeed: 7 });
  const legacyTown = { ...state.town } as Record<string, unknown>;
  delete legacyTown.neighborhoodBudgetProduced;
  const normalized = normalizeGameState({ ...state, town: legacyTown }, 2_000);
  assert.deepEqual(normalized.town.neighborhoodBudgetProduced, Array.from({ length: 10 }, () => 0));
});

test("out-of-order token saves retain exactly one world token per collected piece", () => {
  const assetId = "townhouse-crescent";
  const state = createInitialGameState(1_000, { worldSeed: 11 });
  const outOfOrder = normalizeGameState({
    ...state,
    assetProgress: { [assetId]: 1 },
    town: { ...state.town, collectedTokenKeys: [`${assetId}:2`] },
  }, 2_000);
  assert.deepEqual(outOfOrder.town.collectedTokenKeys, [`${assetId}:2`]);

  const formerlyStranded = normalizeGameState({
    ...state,
    assetProgress: { [assetId]: 3 },
    town: {
      ...state.town,
      collectedTokenKeys: [0, 1, 2, 3].map((piece) => `${assetId}:${piece}`),
    },
  }, 2_000);
  assert.equal(formerlyStranded.town.collectedTokenKeys.length, 3);
  assert.equal(formerlyStranded.town.collectedTokenKeys.includes(`${assetId}:3`), false);
});

test("every neighborhood sign is centered inside a tightened district layout", () => {
  assert.ok(NEIGHBORHOOD_LAYOUT_SCALE < 1);
  assert.ok(NEIGHBORHOOD_LAYOUT_SCALE >= 0.85);
  for (const neighborhood of NEIGHBORHOODS) {
    assert.deepEqual(getNeighborhoodSignPoint(neighborhood), neighborhood.center);
  }
});
