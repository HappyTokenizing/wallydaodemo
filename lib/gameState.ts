import {
  ASSET_IDS,
  ASSETS_BY_ID,
  EXCHANGE_ASSETS,
  HIDDEN_EXCHANGE_ASSET_ID,
  type AssetId,
  type ExchangeAsset,
} from "./assets";
import {
  NEIGHBORHOOD_COUNT,
  getNeighborhoodCoinCap,
  getNeighborhoodIndexForAsset,
} from "./economy";

export const GAME_STATE_VERSION = 4 as const;
export const GAME_SAVE_KEY = "wally-world:town:v4";
export const AUTOSAVE_INTERVAL_MS = 3_000;
export const OFFLINE_ACCRUAL_CAP_MS = 6 * 60 * 60 * 1_000;
export const OFFLINE_ACCRUAL_EFFICIENCY = 0.22;
export const OFFLINE_ACCRUAL_BUDGET_CAP = 600;
const COOKIE_SAVE_PREFIX = "wally_world_checkpoint_v4";
const COOKIE_CHUNK_SIZE = 2_800;
const COOKIE_MAX_CHUNKS = 12;

export type ExchangeAssetId = ExchangeAsset["id"];
export type FacingDirection = "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

export interface WallyPosition {
  readonly x: number;
  readonly z: number;
  readonly facing: FacingDirection;
}

export type AssetProgress = Partial<Record<AssetId, number>>;
export type AssetCompletionTimes = Partial<Record<AssetId, number>>;
export type ExchangePurchaseCounts = Partial<Record<ExchangeAssetId, number>>;

export interface DailyPriceSnapshot {
  /** Local-calendar date, intentionally not shown in the exchange interface. */
  readonly dateKey: string;
  readonly prices: Readonly<Record<ExchangeAssetId, number>>;
}

export interface TownPath {
  readonly id: string;
  readonly from: AssetId;
  readonly to: AssetId;
  readonly createdAt: number;
}

/** Renderer-independent persistent changes to the single continuous town. */
export interface TownState {
  readonly worldSeed: number;
  readonly crowdSeed: number;
  readonly tokenSeed: number;
  readonly discoveredAssetIds: readonly AssetId[];
  /** Purchased construction plots. The first project is granted with a new town. */
  readonly ownedPlotAssetIds: readonly AssetId[];
  readonly visitedAssetIds: readonly AssetId[];
  readonly permanentClearingAssetIds: readonly AssetId[];
  readonly footpaths: readonly TownPath[];
  readonly tokensCollected: number;
  /** Stable world-token locations already collected, so no token can respawn elsewhere or on reload. */
  readonly collectedTokenKeys: readonly string[];
  /** One-time ambient encounters used to reveal people-gated token chains. */
  readonly peoplePassed: number;
  /** Lifetime coins minted by each district, used to enforce finite local treasuries. */
  readonly neighborhoodBudgetProduced: readonly number[];
  /** Stable WALLY Reserve token indices already found in the continuous world. */
  readonly reserveCollectedIds: readonly number[];
  /** Abstract neighborhood cells seen by the player; the minimap stores no points of interest. */
  readonly exploredNeighborhoodKeys: readonly string[];
  /** Completed neighborhoods whose first-return celebration has already played. */
  readonly celebratedNeighborhoodIds: readonly number[];
  readonly developmentLevel: number;
}

export interface GameState {
  readonly version: typeof GAME_STATE_VERSION;
  readonly wallyPosition: WallyPosition;
  readonly assetProgress: Readonly<AssetProgress>;
  /** Stored explicitly as well as derivable so completed buildings persist safely. */
  readonly completedAssetIds: readonly AssetId[];
  readonly completedAt: Readonly<AssetCompletionTimes>;
  readonly budget: number;
  readonly lifetimeBudgetEarned: number;
  readonly exchangePurchases: Readonly<ExchangePurchaseCounts>;
  /** Persisted hidden threshold selected once per new town. */
  readonly exchangeRevealAfterCompletions: number;
  readonly dailyPrices: DailyPriceSnapshot;
  readonly town: TownState;
  readonly totalPlaySeconds: number;
  readonly lastAccrualAt: number;
  readonly lastSavedAt: number;
}

export interface CreateGameStateOptions {
  readonly random?: () => number;
  readonly worldSeed?: number;
  readonly initialBudget?: number;
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem?(key: string): void;
}

export interface OfflineAccrualDetails {
  readonly amount: number;
  readonly elapsedMs: number;
  readonly creditedMs: number;
  readonly passiveBudgetPerMinute: number;
}

export type AssetPieceFailureReason = "already-complete" | "wrong-source" | "exchange-hidden";

export interface AssetPieceResult {
  readonly state: GameState;
  readonly collected: boolean;
  readonly completed: boolean;
  readonly remainingPieces: number;
  readonly reason?: AssetPieceFailureReason;
}

export type PurchaseFailureReason =
  | "exchange-closed"
  | "insufficient-budget"
  | "already-complete";

export interface ExchangePurchaseResult {
  readonly state: GameState;
  readonly purchased: boolean;
  readonly completed: boolean;
  readonly price: number;
  readonly remainingPieces: number;
  readonly reason?: PurchaseFailureReason;
}

export interface LandPurchaseResult {
  readonly state: GameState;
  readonly purchased: boolean;
  readonly price: number;
  readonly reason?: "already-owned" | "insufficient-budget";
}

export interface AutosaveOptions {
  readonly storage?: StorageLike;
  readonly intervalMs?: number;
  readonly onSaved?: (savedState: GameState) => void;
}

export interface AutosaveController {
  flush(): GameState;
  dispose(): void;
}

const ASSET_ID_SET = new Set<string>(ASSET_IDS);
const FACING_DIRECTIONS = new Set<FacingDirection>(["n", "ne", "e", "se", "s", "sw", "w", "nw"]);

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function finiteOr(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function nonNegative(value: unknown, fallback = 0): number {
  return Math.max(0, finiteOr(value, fallback));
}

function roundBudget(value: number): number {
  return Math.round(Math.max(0, value) * 100) / 100;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function randomUint32(random: () => number): number {
  return Math.floor(clamp(random(), 0, 0.999999999) * 0x1_0000_0000) >>> 0;
}

function randomIntInclusive(random: () => number, minimum: number, maximum: number): number {
  return minimum + Math.floor(clamp(random(), 0, 0.999999999) * (maximum - minimum + 1));
}

function addUnique<T>(items: readonly T[], item: T): readonly T[] {
  return items.includes(item) ? items : [...items, item];
}

function validAssetId(value: unknown): value is AssetId {
  return typeof value === "string" && ASSET_ID_SET.has(value);
}

function uniqueAssetIds(value: unknown): AssetId[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter(validAssetId))];
}

function uniqueStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item): item is string => (
    typeof item === "string" && /^-?\d+:-?\d+$/.test(item)
  )))];
}

function uniqueTokenKeys(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item): item is string => {
    if (typeof item !== "string") return false;
    const separator = item.lastIndexOf(":");
    const assetId = item.slice(0, separator);
    const pieceIndex = Number(item.slice(separator + 1));
    return separator > 0
      && validAssetId(assetId)
      && Number.isInteger(pieceIndex)
      && pieceIndex >= 0
      && pieceIndex < ASSETS_BY_ID[assetId].requiredPieces;
  }))];
}

function uniqueReserveIds(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value
    .filter((item): item is number => Number.isInteger(item) && item >= 0 && item < 256)
    .map((item) => Math.floor(item)))];
}

function uniqueNeighborhoodIds(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value
    .filter((item): item is number => Number.isInteger(item) && item >= 0 && item < 10)
    .map((item) => Math.floor(item)))];
}

function normalizeNeighborhoodBudgetProduced(value: unknown): number[] {
  const source = Array.isArray(value) ? value : [];
  return Array.from({ length: NEIGHBORHOOD_COUNT }, (_, index) => (
    roundBudget(nonNegative(source[index]))
  ));
}

function getDefaultStorage(): StorageLike | undefined {
  if (typeof document === "undefined") {
    try {
      return typeof globalThis.localStorage === "undefined" ? undefined : globalThis.localStorage;
    } catch {
      return undefined;
    }
  }

  const readCookies = () => Object.fromEntries(document.cookie
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const separator = entry.indexOf("=");
      return separator < 0 ? [entry, ""] : [entry.slice(0, separator), entry.slice(separator + 1)];
    }));
  const writeCookie = (name: string, value: string, maxAge: number) => {
    document.cookie = `${name}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  };
  const fallback = (() => {
    try { return globalThis.localStorage; } catch { return undefined; }
  })();

  return {
    getItem: (key) => {
      if (key !== GAME_SAVE_KEY) return fallback?.getItem(key) ?? null;
      try {
        const cookies = readCookies();
        const count = Math.min(COOKIE_MAX_CHUNKS, Math.max(0, Number(cookies[`${COOKIE_SAVE_PREFIX}_count`] ?? 0)));
        if (count > 0) {
          const encoded = Array.from({ length: count }, (_, index) => cookies[`${COOKIE_SAVE_PREFIX}_${index}`] ?? "").join("");
          if (encoded) return decodeURIComponent(encoded);
        }
      } catch {
        // Fall through to the full local checkpoint when cookies are restricted.
      }
      return fallback?.getItem(key) ?? null;
    },
    setItem: (key, value) => {
      fallback?.setItem(key, value);
      if (key !== GAME_SAVE_KEY) return;
      try {
        const encoded = encodeURIComponent(value);
        const chunks = Array.from(
          { length: Math.min(COOKIE_MAX_CHUNKS, Math.ceil(encoded.length / COOKIE_CHUNK_SIZE)) },
          (_, index) => encoded.slice(index * COOKIE_CHUNK_SIZE, (index + 1) * COOKIE_CHUNK_SIZE),
        );
        chunks.forEach((chunk, index) => writeCookie(`${COOKIE_SAVE_PREFIX}_${index}`, chunk, 31_536_000));
        for (let index = chunks.length; index < COOKIE_MAX_CHUNKS; index += 1) {
          writeCookie(`${COOKIE_SAVE_PREFIX}_${index}`, "", 0);
        }
        writeCookie(`${COOKIE_SAVE_PREFIX}_count`, String(chunks.length), 31_536_000);
      } catch {
        // The local checkpoint remains available if a browser rejects cookies.
      }
    },
    removeItem: (key) => {
      fallback?.removeItem(key);
      if (key !== GAME_SAVE_KEY) return;
      for (let index = 0; index < COOKIE_MAX_CHUNKS; index += 1) {
        writeCookie(`${COOKIE_SAVE_PREFIX}_${index}`, "", 0);
      }
      writeCookie(`${COOKIE_SAVE_PREFIX}_count`, "", 0);
    },
  };
}

/** Uses the player's local calendar rather than UTC, as the hidden price rule requires. */
export function getLocalDateKey(at: Date | number = Date.now()): string {
  const date = typeof at === "number" ? new Date(at) : at;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function hashString(value: string): number {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function getLocalDayOrdinal(at: Date | number): number {
  const date = typeof at === "number" ? new Date(at) : at;
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
}

/**
 * Returns one deterministic, bounded price for a fictional company and local day.
 * A company-specific modular step guarantees the displayed value changes at each
 * local midnight without retaining prior-day data or exposing movement metadata.
 */
export function getDailyPrice(
  assetId: ExchangeAssetId,
  at: Date | number = Date.now(),
): number {
  const asset = EXCHANGE_ASSETS.find((candidate) => candidate.id === assetId);
  if (!asset) throw new Error(`Unknown exchange company: ${assetId}`);
  const listing = asset.exchangeListing;
  const priceCount = listing.maximumPrice - listing.minimumPrice + 1;
  const offset = hashString(`WALLY-WORLD-PRICE-V1:offset:${assetId}`) % priceCount;
  const step = 1 + hashString(`WALLY-WORLD-PRICE-V1:step:${assetId}`) % (priceCount - 1);
  const priceIndex = (offset + (getLocalDayOrdinal(at) % priceCount) * step) % priceCount;
  return listing.minimumPrice + priceIndex;
}

export function createDailyPriceSnapshot(at: Date | number = Date.now()): DailyPriceSnapshot {
  const prices = Object.fromEntries(
    EXCHANGE_ASSETS.map((asset) => [asset.id, getDailyPrice(asset.id, at)]),
  ) as Record<ExchangeAssetId, number>;
  return { dateKey: getLocalDateKey(at), prices };
}

export function createInitialGameState(
  now = Date.now(),
  options: CreateGameStateOptions = {},
): GameState {
  const random = options.random ?? Math.random;
  const worldSeed = options.worldSeed === undefined
    ? randomUint32(random)
    : Math.floor(options.worldSeed) >>> 0;
  // Derive secondary seeds so a caller can reproduce a town with one value.
  const crowdSeed = hashString(`crowd:${worldSeed}`);
  const tokenSeed = hashString(`tokens:${worldSeed}`);

  return {
    version: GAME_STATE_VERSION,
    // A new world opens with Wally in the middle of the starter neighborhood,
    // facing its already-visible WALLY WORLD welcome sign.
    wallyPosition: { x: 0, z: 4, facing: "n" },
    assetProgress: {},
    completedAssetIds: [],
    completedAt: {},
    budget: roundBudget(options.initialBudget ?? 0),
    lifetimeBudgetEarned: 0,
    exchangePurchases: {},
    exchangeRevealAfterCompletions: randomIntInclusive(random, 5, 10),
    dailyPrices: createDailyPriceSnapshot(now),
    town: {
      worldSeed,
      crowdSeed,
      tokenSeed,
      discoveredAssetIds: [],
      ownedPlotAssetIds: [ASSET_IDS[0]],
      visitedAssetIds: [],
      permanentClearingAssetIds: [],
      footpaths: [],
      tokensCollected: 0,
      collectedTokenKeys: [],
      peoplePassed: 0,
      neighborhoodBudgetProduced: Array.from({ length: NEIGHBORHOOD_COUNT }, () => 0),
      reserveCollectedIds: [],
      exploredNeighborhoodKeys: ["0:0"],
      celebratedNeighborhoodIds: [],
      developmentLevel: 0,
    },
    totalPlaySeconds: 0,
    lastAccrualAt: now,
    lastSavedAt: now,
  };
}

function normalizeProgress(rawValue: unknown): AssetProgress {
  const raw = asRecord(rawValue);
  if (!raw) return {};
  const progress: AssetProgress = {};
  for (const id of ASSET_IDS) {
    const value = raw[id];
    if (typeof value === "number" && Number.isFinite(value) && value > 0) {
      progress[id] = Math.floor(clamp(value, 0, ASSETS_BY_ID[id].requiredPieces));
    }
  }
  return progress;
}

function normalizeCompletionTimes(rawValue: unknown): AssetCompletionTimes {
  const raw = asRecord(rawValue);
  if (!raw) return {};
  const result: AssetCompletionTimes = {};
  for (const id of ASSET_IDS) {
    const timestamp = raw[id];
    if (typeof timestamp === "number" && Number.isFinite(timestamp) && timestamp > 0) {
      result[id] = timestamp;
    }
  }
  return result;
}

function normalizePurchases(rawValue: unknown): ExchangePurchaseCounts {
  const raw = asRecord(rawValue);
  if (!raw) return {};
  const result: ExchangePurchaseCounts = {};
  for (const asset of EXCHANGE_ASSETS) {
    const value = raw[asset.id];
    if (typeof value === "number" && Number.isFinite(value) && value > 0) {
      result[asset.id] = Math.floor(clamp(value, 0, asset.requiredPieces));
    }
  }
  return result;
}

function normalizePaths(rawValue: unknown, fallbackTime: number): TownPath[] {
  if (!Array.isArray(rawValue)) return [];
  const paths: TownPath[] = [];
  const pathIds = new Set<string>();
  for (const candidate of rawValue) {
    const raw = asRecord(candidate);
    if (!raw || !validAssetId(raw.from) || !validAssetId(raw.to) || raw.from === raw.to) continue;
    const defaultId = [raw.from, raw.to].sort().join("::");
    const id = typeof raw.id === "string" && raw.id.length > 0 ? raw.id : defaultId;
    if (pathIds.has(id)) continue;
    pathIds.add(id);
    paths.push({
      id,
      from: raw.from,
      to: raw.to,
      createdAt: nonNegative(raw.createdAt, fallbackTime),
    });
  }
  return paths;
}

function normalizeDailyPrices(rawValue: unknown, now: number): DailyPriceSnapshot {
  const raw = asRecord(rawValue);
  const currentDateKey = getLocalDateKey(now);
  if (!raw || raw.dateKey !== currentDateKey) return createDailyPriceSnapshot(now);
  const rawPrices = asRecord(raw.prices);
  if (!rawPrices) return createDailyPriceSnapshot(now);

  const prices = {} as Record<ExchangeAssetId, number>;
  for (const asset of EXCHANGE_ASSETS) {
    const value = rawPrices[asset.id];
    const listing = asset.exchangeListing;
    const expectedPrice = getDailyPrice(asset.id, now);
    if (
      typeof value !== "number"
      || !Number.isFinite(value)
      || value < listing.minimumPrice
      || value > listing.maximumPrice
      || value !== expectedPrice
    ) {
      return createDailyPriceSnapshot(now);
    }
    prices[asset.id] = Math.round(value);
  }
  return { dateKey: currentDateKey, prices };
}

/** Repairs old/partial/corrupted local data while retaining every safe achievement. */
export function normalizeGameState(rawValue: unknown, now = Date.now()): GameState {
  const fresh = createInitialGameState(now);
  const raw = asRecord(rawValue);
  if (!raw) return fresh;

  const rawPosition = asRecord(raw.wallyPosition);
  const rawTown = asRecord(raw.town);
  const progress = normalizeProgress(raw.assetProgress);
  const purchases = normalizePurchases(raw.exchangePurchases);
  const storedCompleted = uniqueAssetIds(raw.completedAssetIds);

  // Purchases and completed-id storage are permanent sources of truth.
  for (const asset of EXCHANGE_ASSETS) {
    progress[asset.id] = Math.max(progress[asset.id] ?? 0, purchases[asset.id] ?? 0);
  }
  for (const id of storedCompleted) {
    progress[id] = ASSETS_BY_ID[id].requiredPieces;
  }

  const completedAssetIds = ASSET_IDS.filter(
    (id) => (progress[id] ?? 0) >= ASSETS_BY_ID[id].requiredPieces,
  );
  const completedSet = new Set(completedAssetIds);
  const completedAt = normalizeCompletionTimes(raw.completedAt);
  for (const id of completedAssetIds) {
    if (!completedAt[id]) completedAt[id] = nonNegative(raw.lastSavedAt, now);
  }

  const facingCandidate = rawPosition?.facing;
  const facing = typeof facingCandidate === "string" && FACING_DIRECTIONS.has(facingCandidate as FacingDirection)
    ? (facingCandidate as FacingDirection)
    : fresh.wallyPosition.facing;
  const worldSeed = Math.floor(nonNegative(rawTown?.worldSeed, fresh.town.worldSeed)) >>> 0;
  const discovered = uniqueAssetIds(rawTown?.discoveredAssetIds);
  const ownedPlotAssetIds = uniqueAssetIds(rawTown?.ownedPlotAssetIds);
  if (!ownedPlotAssetIds.includes(ASSET_IDS[0])) ownedPlotAssetIds.unshift(ASSET_IDS[0]);
  for (const id of ASSET_IDS) {
    if ((progress[id] ?? 0) > 0 && !ownedPlotAssetIds.includes(id)) ownedPlotAssetIds.push(id);
  }
  const clearingIds = uniqueAssetIds(rawTown?.permanentClearingAssetIds).filter((id) => completedSet.has(id));
  for (const id of completedAssetIds) {
    if (!clearingIds.includes(id)) clearingIds.push(id);
  }
  const storedTokenKeys = uniqueTokenKeys(rawTown?.collectedTokenKeys);
  const collectedTokenKeys: string[] = [];
  for (const id of ASSET_IDS) {
    const collectedPieces = progress[id] ?? 0;
    const storedIndices = storedTokenKeys
      .filter((key) => key.startsWith(`${id}:`))
      .map((key) => Number(key.slice(key.lastIndexOf(":") + 1)))
      .sort((a, b) => a - b)
      .slice(0, collectedPieces);
    const normalizedIndices = new Set(storedIndices);
    for (let pieceIndex = 0; normalizedIndices.size < collectedPieces; pieceIndex += 1) {
      if (pieceIndex >= ASSETS_BY_ID[id].requiredPieces) break;
      normalizedIndices.add(pieceIndex);
    }
    for (const pieceIndex of [...normalizedIndices].sort((a, b) => a - b)) {
      collectedTokenKeys.push(`${id}:${pieceIndex}`);
    }
  }

  return {
    version: GAME_STATE_VERSION,
    wallyPosition: {
      x: finiteOr(rawPosition?.x, fresh.wallyPosition.x),
      z: finiteOr(rawPosition?.z, fresh.wallyPosition.z),
      facing,
    },
    assetProgress: progress,
    completedAssetIds,
    completedAt,
    budget: roundBudget(nonNegative(raw.budget, fresh.budget)),
    lifetimeBudgetEarned: roundBudget(nonNegative(raw.lifetimeBudgetEarned)),
    exchangePurchases: purchases,
    exchangeRevealAfterCompletions: Math.floor(clamp(
      finiteOr(raw.exchangeRevealAfterCompletions, fresh.exchangeRevealAfterCompletions),
      5,
      10,
    )),
    dailyPrices: normalizeDailyPrices(raw.dailyPrices, now),
    town: {
      worldSeed,
      crowdSeed: Math.floor(nonNegative(rawTown?.crowdSeed, hashString(`crowd:${worldSeed}`))) >>> 0,
      tokenSeed: Math.floor(nonNegative(rawTown?.tokenSeed, hashString(`tokens:${worldSeed}`))) >>> 0,
      discoveredAssetIds: [...new Set([...discovered, ...completedAssetIds])],
      ownedPlotAssetIds,
      visitedAssetIds: uniqueAssetIds(rawTown?.visitedAssetIds),
      permanentClearingAssetIds: clearingIds,
      footpaths: normalizePaths(rawTown?.footpaths, now),
      tokensCollected: Math.floor(nonNegative(rawTown?.tokensCollected)),
      collectedTokenKeys,
      peoplePassed: Math.floor(nonNegative(rawTown?.peoplePassed)),
      neighborhoodBudgetProduced: normalizeNeighborhoodBudgetProduced(rawTown?.neighborhoodBudgetProduced),
      reserveCollectedIds: uniqueReserveIds(rawTown?.reserveCollectedIds),
      exploredNeighborhoodKeys: uniqueStrings(rawTown?.exploredNeighborhoodKeys),
      celebratedNeighborhoodIds: uniqueNeighborhoodIds(rawTown?.celebratedNeighborhoodIds),
      developmentLevel: Math.min(8, Math.floor(completedAssetIds.length / 10)),
    },
    totalPlaySeconds: nonNegative(raw.totalPlaySeconds),
    lastAccrualAt: nonNegative(raw.lastAccrualAt, nonNegative(raw.lastSavedAt, now)),
    lastSavedAt: nonNegative(raw.lastSavedAt, now),
  };
}

export function getAssetProgress(state: GameState, assetId: AssetId): number {
  return Math.floor(clamp(state.assetProgress[assetId] ?? 0, 0, ASSETS_BY_ID[assetId].requiredPieces));
}

export function getRemainingPieces(state: GameState, assetId: AssetId): number {
  return Math.max(0, ASSETS_BY_ID[assetId].requiredPieces - getAssetProgress(state, assetId));
}

export function isWorldTokenCollected(state: GameState, assetId: AssetId, pieceIndex: number): boolean {
  return state.town.collectedTokenKeys.includes(`${assetId}:${Math.floor(pieceIndex)}`);
}

export function isPlotOwned(state: GameState, assetId: AssetId): boolean {
  return state.town.ownedPlotAssetIds.includes(assetId)
    || getAssetProgress(state, assetId) > 0
    || state.completedAssetIds.includes(assetId);
}

export function purchaseLandPlot(
  state: GameState,
  assetId: AssetId,
  rawPrice: number,
): LandPurchaseResult {
  const price = Math.max(1, Math.round(nonNegative(rawPrice, 1)));
  if (isPlotOwned(state, assetId)) {
    return { state, purchased: false, price, reason: "already-owned" };
  }
  if (state.budget < price) {
    return { state, purchased: false, price, reason: "insufficient-budget" };
  }
  return {
    purchased: true,
    price,
    state: {
      ...state,
      budget: roundBudget(state.budget - price),
      town: {
        ...state.town,
        ownedPlotAssetIds: addUnique(state.town.ownedPlotAssetIds, assetId),
        discoveredAssetIds: addUnique(state.town.discoveredAssetIds, assetId),
      },
    },
  };
}

export function markWorldTokenCollected(state: GameState, assetId: AssetId, pieceIndex: number): GameState {
  const index = Math.floor(pieceIndex);
  if (index < 0 || index >= ASSETS_BY_ID[assetId].requiredPieces) return state;
  const key = `${assetId}:${index}`;
  if (state.town.collectedTokenKeys.includes(key)) return state;
  return {
    ...state,
    town: {
      ...state.town,
      collectedTokenKeys: [...state.town.collectedTokenKeys, key],
    },
  };
}

export function getUnfinishedAssetCount(state: GameState): number {
  return Math.max(0, ASSET_IDS.length - state.completedAssetIds.length);
}

export function getPassiveBudgetPerMinute(state: GameState): number {
  return getNeighborhoodBudgetRates(state).reduce((total, rate) => total + rate, 0);
}

function getNeighborhoodBudgetRates(state: GameState): number[] {
  const rawIncome = Array.from({ length: NEIGHBORHOOD_COUNT }, () => 0);
  for (const assetId of state.completedAssetIds) {
    rawIncome[getNeighborhoodIndexForAsset(assetId)] += ASSETS_BY_ID[assetId].passiveBudgetPerMinute;
  }
  return rawIncome.map((income, neighborhood) => {
    const produced = state.town.neighborhoodBudgetProduced[neighborhood] ?? 0;
    if (income <= 0 || produced >= getNeighborhoodCoinCap(neighborhood)) return 0;
    // The first working asset now funds the opening $3 plot in about twenty
    // seconds, while the soft curve keeps mature districts pleasantly paced.
    if (income <= 4) return income * 2.25;
    return Math.min(36, 9 + Math.sqrt(income - 4) * 1.65);
  });
}

interface BudgetAccrualResult {
  readonly amount: number;
  readonly neighborhoodBudgetProduced: readonly number[];
}

function calculateBudgetAccrual(
  state: GameState,
  elapsedMinutes: number,
  efficiency = 1,
  globalCap = Number.POSITIVE_INFINITY,
): BudgetAccrualResult {
  const rates = getNeighborhoodBudgetRates(state);
  const produced = Array.from({ length: NEIGHBORHOOD_COUNT }, (_, index) => (
    state.town.neighborhoodBudgetProduced[index] ?? 0
  ));
  let amount = 0;
  for (let neighborhood = 0; neighborhood < NEIGHBORHOOD_COUNT; neighborhood += 1) {
    const availableGlobally = Math.max(0, globalCap - amount);
    if (availableGlobally <= 0) break;
    const availableLocally = Math.max(0, getNeighborhoodCoinCap(neighborhood) - produced[neighborhood]);
    const credit = Math.min(
      availableGlobally,
      availableLocally,
      rates[neighborhood] * Math.max(0, elapsedMinutes) * Math.max(0, efficiency),
    );
    if (credit <= 0) continue;
    produced[neighborhood] = roundBudget(produced[neighborhood] + credit);
    amount = roundBudget(amount + credit);
  }
  return { amount, neighborhoodBudgetProduced: produced };
}

export function isExchangeRevealEligible(state: GameState): boolean {
  const otherCompletions = state.completedAssetIds.filter(
    (assetId) => assetId !== HIDDEN_EXCHANGE_ASSET_ID,
  ).length;
  return otherCompletions >= state.exchangeRevealAfterCompletions;
}

export function isExchangeOpen(state: GameState): boolean {
  return state.completedAssetIds.includes(HIDDEN_EXCHANGE_ASSET_ID);
}

export function refreshDailyPrices(state: GameState, now = Date.now()): GameState {
  const dateKey = getLocalDateKey(now);
  return state.dailyPrices.dateKey === dateKey
    ? state
    : { ...state, dailyPrices: createDailyPriceSnapshot(now) };
}

/** Full-speed passive generation used while the game is active. */
export function accrueActiveBudget(state: GameState, now = Date.now()): GameState {
  const elapsedMs = Math.max(0, now - state.lastAccrualAt);
  if (elapsedMs <= 0) return state;
  const accrual = calculateBudgetAccrual(state, elapsedMs / 60_000);
  return {
    ...state,
    budget: roundBudget(state.budget + accrual.amount),
    lifetimeBudgetEarned: roundBudget(state.lifetimeBudgetEarned + accrual.amount),
    town: {
      ...state.town,
      neighborhoodBudgetProduced: accrual.neighborhoodBudgetProduced,
    },
    totalPlaySeconds: state.totalPlaySeconds + elapsedMs / 1_000,
    lastAccrualAt: now,
  };
}

export function getOfflineAccrualDetails(
  state: GameState,
  now = Date.now(),
): OfflineAccrualDetails {
  const elapsedMs = Math.max(0, now - Math.max(state.lastSavedAt, state.lastAccrualAt));
  const creditedMs = Math.min(elapsedMs, OFFLINE_ACCRUAL_CAP_MS);
  const passiveBudgetPerMinute = getPassiveBudgetPerMinute(state);
  const accrual = calculateBudgetAccrual(
    state,
    creditedMs / 60_000,
    OFFLINE_ACCRUAL_EFFICIENCY,
    OFFLINE_ACCRUAL_BUDGET_CAP,
  );
  return {
    amount: accrual.amount,
    elapsedMs,
    creditedMs,
    passiveBudgetPerMinute,
  };
}

/**
 * Applies quiet, capped offline income with no report/popup payload. The details
 * helper exists for tests/telemetry, not for player-facing UI.
 */
export function applyOfflineAccrual(state: GameState, now = Date.now()): GameState {
  const details = getOfflineAccrualDetails(state, now);
  const accrual = calculateBudgetAccrual(
    state,
    details.creditedMs / 60_000,
    OFFLINE_ACCRUAL_EFFICIENCY,
    OFFLINE_ACCRUAL_BUDGET_CAP,
  );
  return {
    ...state,
    budget: roundBudget(state.budget + accrual.amount),
    lifetimeBudgetEarned: roundBudget(state.lifetimeBudgetEarned + accrual.amount),
    town: {
      ...state.town,
      neighborhoodBudgetProduced: accrual.neighborhoodBudgetProduced,
    },
    lastAccrualAt: now,
  };
}

function applyPiece(state: GameState, assetId: AssetId, now: number): AssetPieceResult {
  const asset = ASSETS_BY_ID[assetId];
  const current = getAssetProgress(state, assetId);
  if (current >= asset.requiredPieces) {
    return { state, collected: false, completed: true, remainingPieces: 0, reason: "already-complete" };
  }

  const next = current + 1;
  const completed = next >= asset.requiredPieces;
  const assetProgress: AssetProgress = { ...state.assetProgress, [assetId]: next };
  const completedAssetIds = completed
    ? addUnique(state.completedAssetIds, assetId)
    : state.completedAssetIds;
  const completedAt: AssetCompletionTimes = completed
    ? { ...state.completedAt, [assetId]: state.completedAt[assetId] ?? now }
    : state.completedAt;
  const permanentClearingAssetIds = completed
    ? addUnique(state.town.permanentClearingAssetIds, assetId)
    : state.town.permanentClearingAssetIds;

  const nextState: GameState = {
    ...state,
    assetProgress,
    completedAssetIds,
    completedAt,
    town: {
      ...state.town,
      discoveredAssetIds: addUnique(state.town.discoveredAssetIds, assetId),
      permanentClearingAssetIds,
      tokensCollected: state.town.tokensCollected + 1,
      developmentLevel: Math.min(8, Math.floor(completedAssetIds.length / 10)),
    },
  };
  return {
    state: nextState,
    collected: true,
    completed,
    remainingPieces: Math.max(0, asset.requiredPieces - next),
  };
}

/** Collects one proximity token; normal discovery never spends budget. */
export function collectCrowdAssetPiece(
  state: GameState,
  assetId: AssetId,
  now = Date.now(),
): AssetPieceResult {
  const asset = ASSETS_BY_ID[assetId];
  if (asset.discovery !== "crowd") {
    return {
      state,
      collected: false,
      completed: getRemainingPieces(state, assetId) === 0,
      remainingPieces: getRemainingPieces(state, assetId),
      reason: "wrong-source",
    };
  }
  if (assetId === HIDDEN_EXCHANGE_ASSET_ID && !isExchangeRevealEligible(state)) {
    return {
      state,
      collected: false,
      completed: false,
      remainingPieces: getRemainingPieces(state, assetId),
      reason: "exchange-hidden",
    };
  }
  return applyPiece(state, assetId, now);
}

export function purchaseExchangePiece(
  inputState: GameState,
  assetId: ExchangeAssetId,
  now = Date.now(),
): ExchangePurchaseResult {
  const state = refreshDailyPrices(inputState, now);
  const price = state.dailyPrices.prices[assetId];
  const remainingPieces = getRemainingPieces(state, assetId);
  if (!isExchangeOpen(state)) {
    return { state, purchased: false, completed: false, price, remainingPieces, reason: "exchange-closed" };
  }
  if (remainingPieces === 0) {
    return { state, purchased: false, completed: true, price, remainingPieces: 0, reason: "already-complete" };
  }
  if (state.budget < price) {
    return { state, purchased: false, completed: false, price, remainingPieces, reason: "insufficient-budget" };
  }

  const pieceResult = applyPiece(state, assetId, now);
  const purchaseCount = Math.min(
    ASSETS_BY_ID[assetId].requiredPieces,
    (state.exchangePurchases[assetId] ?? 0) + 1,
  );
  const purchasedState: GameState = {
    ...pieceResult.state,
    budget: roundBudget(state.budget - price),
    exchangePurchases: { ...state.exchangePurchases, [assetId]: purchaseCount },
  };
  return {
    state: purchasedState,
    purchased: true,
    completed: pieceResult.completed,
    price,
    remainingPieces: pieceResult.remainingPieces,
  };
}

export function updateWallyPosition(
  state: GameState,
  position: WallyPosition,
): GameState {
  return {
    ...state,
    wallyPosition: {
      x: finiteOr(position.x, state.wallyPosition.x),
      z: finiteOr(position.z, state.wallyPosition.z),
      facing: FACING_DIRECTIONS.has(position.facing) ? position.facing : state.wallyPosition.facing,
    },
  };
}

export function markAssetVisited(state: GameState, assetId: AssetId): GameState {
  return {
    ...state,
    town: {
      ...state.town,
      visitedAssetIds: addUnique(state.town.visitedAssetIds, assetId),
    },
  };
}

export function recordPeoplePassed(state: GameState, amount = 1): GameState {
  const increment = Math.max(0, Math.floor(amount));
  if (increment === 0) return state;
  return {
    ...state,
    town: {
      ...state.town,
      peoplePassed: state.town.peoplePassed + increment,
    },
  };
}

export function collectReserveToken(
  state: GameState,
  reserveId: number,
): { state: GameState; collected: boolean } {
  const id = Math.floor(reserveId);
  if (!Number.isFinite(id) || id < 0 || state.town.reserveCollectedIds.includes(id)) {
    return { state, collected: false };
  }
  return {
    collected: true,
    state: {
      ...state,
      town: {
        ...state.town,
        reserveCollectedIds: [...state.town.reserveCollectedIds, id],
      },
    },
  };
}

export function markNeighborhoodExplored(state: GameState, key: string): GameState {
  if (!/^-?\d+:-?\d+$/.test(key) || state.town.exploredNeighborhoodKeys.includes(key)) {
    return state;
  }
  return {
    ...state,
    town: {
      ...state.town,
      exploredNeighborhoodKeys: [...state.town.exploredNeighborhoodKeys, key],
    },
  };
}

export function markNeighborhoodCelebrated(state: GameState, neighborhoodId: number): GameState {
  const id = Math.floor(neighborhoodId);
  if (id < 0 || id >= 10 || state.town.celebratedNeighborhoodIds.includes(id)) return state;
  return {
    ...state,
    town: {
      ...state.town,
      celebratedNeighborhoodIds: [...state.town.celebratedNeighborhoodIds, id],
    },
  };
}

export function clearSavedGameState(storage: StorageLike | undefined = getDefaultStorage()): void {
  try {
    storage?.removeItem?.(GAME_SAVE_KEY);
  } catch {
    // Restart remains safe when persistence is unavailable.
  }
}

export function addTownPath(
  state: GameState,
  from: AssetId,
  to: AssetId,
  now = Date.now(),
): GameState {
  if (from === to) return state;
  const id = [from, to].sort().join("::");
  if (state.town.footpaths.some((path) => path.id === id)) return state;
  return {
    ...state,
    town: {
      ...state.town,
      footpaths: [...state.town.footpaths, { id, from, to, createdAt: now }],
    },
  };
}

/** Loads, repairs, refreshes the hidden price snapshot, and quietly applies offline income. */
export function loadGameState(
  storage: StorageLike | undefined = getDefaultStorage(),
  now = Date.now(),
): GameState {
  if (!storage) return createInitialGameState(now);
  try {
    const serialized = storage.getItem(GAME_SAVE_KEY);
    if (!serialized) return createInitialGameState(now);
    const normalized = normalizeGameState(JSON.parse(serialized) as unknown, now);
    return refreshDailyPrices(applyOfflineAccrual(normalized, now), now);
  } catch {
    return createInitialGameState(now);
  }
}

/** Accrues the active interval, timestamps it, and writes one atomic JSON value. */
export function saveGameState(
  state: GameState,
  storage: StorageLike | undefined = getDefaultStorage(),
  now = Date.now(),
): GameState {
  const accrued = refreshDailyPrices(accrueActiveBudget(state, now), now);
  const savedState: GameState = { ...accrued, lastSavedAt: now };
  if (!storage) return savedState;
  try {
    storage.setItem(GAME_SAVE_KEY, JSON.stringify(savedState));
  } catch {
    // Storage can be unavailable in private browsing; gameplay must continue.
  }
  return savedState;
}

/** Installs one low-frequency autosave loop plus background/page-exit flushes. */
export function startAutosave(
  getState: () => GameState,
  options: AutosaveOptions = {},
): AutosaveController {
  const storage = options.storage ?? getDefaultStorage();
  const intervalMs = Math.max(1_000, options.intervalMs ?? AUTOSAVE_INTERVAL_MS);
  const flush = (): GameState => {
    const savedState = saveGameState(getState(), storage);
    options.onSaved?.(savedState);
    return savedState;
  };

  const interval = globalThis.setInterval(flush, intervalMs);
  const onVisibilityChange = (): void => {
    if (typeof document !== "undefined" && document.visibilityState === "hidden") flush();
  };
  const onPageHide = (): void => { flush(); };
  if (typeof document !== "undefined") document.addEventListener("visibilitychange", onVisibilityChange);
  if (typeof window !== "undefined") window.addEventListener("pagehide", onPageHide);

  let disposed = false;
  return {
    flush,
    dispose: () => {
      if (disposed) return;
      disposed = true;
      globalThis.clearInterval(interval);
      if (typeof document !== "undefined") document.removeEventListener("visibilitychange", onVisibilityChange);
      if (typeof window !== "undefined") window.removeEventListener("pagehide", onPageHide);
      flush();
    },
  };
}
