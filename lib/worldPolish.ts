/**
 * Deterministic helpers for making Wally World's finite simulation feel endless.
 *
 * This module deliberately knows nothing about Three.js. Values can be copied into
 * Object3D positions, InstancedMesh matrices, or sprite uniforms by the renderer.
 * Every function is pure, so tiles can be regenerated after an origin rebase
 * without storing the decoration geometry in the save game.
 */

export type WorldPoint = Readonly<{ x: number; y: number }>;
export type MutableWorldPoint = { x: number; y: number };
export type TileAddress = Readonly<{ x: number; y: number }>;

export type ActivityRole = "customer" | "observer" | "resident";
export type ActivityMotion = "arriving" | "dwelling" | "departing";

export type NeighborhoodPalette =
  | "sage-garden"
  | "cream-market"
  | "clay-court"
  | "lavender-walk"
  | "bluebell-square";

export type NeighborhoodPropKind =
  | "tree"
  | "flower-bed"
  | "bench"
  | "lamp"
  | "planter"
  | "bicycle"
  | "notice-board";

export type NeighborhoodProp = Readonly<{
  id: number;
  kind: NeighborhoodPropKind;
  offset: WorldPoint;
  rotation: number;
  scale: number;
  tint: number;
  phase: number;
}>;

export type PathSocket = "north" | "east" | "south" | "west";

export type NeighborhoodPath = Readonly<{
  socket: PathSocket;
  /** Local points inside the tile, starting at the shared edge and ending near its heart. */
  points: readonly [WorldPoint, WorldPoint, WorldPoint, WorldPoint];
  width: number;
}>;

export type NeighborhoodTile = Readonly<{
  address: TileAddress;
  key: string;
  palette: NeighborhoodPalette;
  rotationQuarterTurns: 0 | 1 | 2 | 3;
  greenInset: number;
  plazaRadius: number;
  paths: readonly NeighborhoodPath[];
  props: readonly NeighborhoodProp[];
  crowdAnchors: readonly WorldPoint[];
}>;

export type WorldPolishConfig = Readonly<{
  tileSize: number;
  worldSeed: number;
  /** Rebase only after the focus is this far from the renderer's local origin. */
  rebaseDistance: number;
  tileViewRadius: number;
}>;

export const DEFAULT_WORLD_POLISH: WorldPolishConfig = Object.freeze({
  tileSize: 360,
  worldSeed: 0x57414c4c,
  rebaseDistance: 1_440,
  tileViewRadius: 3,
});

const PALETTES: readonly NeighborhoodPalette[] = [
  "sage-garden",
  "cream-market",
  "clay-court",
  "lavender-walk",
  "bluebell-square",
];

const PROP_KINDS: readonly NeighborhoodPropKind[] = [
  "tree",
  "flower-bed",
  "bench",
  "lamp",
  "planter",
  "bicycle",
  "notice-board",
];

const TWO_PI = Math.PI * 2;

function mix32(value: number): number {
  let mixed = value >>> 0;
  mixed ^= mixed >>> 16;
  mixed = Math.imul(mixed, 0x7feb352d);
  mixed ^= mixed >>> 15;
  mixed = Math.imul(mixed, 0x846ca68b);
  mixed ^= mixed >>> 16;
  return mixed >>> 0;
}

/** A stable integer hash that behaves consistently for negative tile coordinates. */
export function worldHash(seed: number, x = 0, y = 0, salt = 0): number {
  const hx = Math.imul(x | 0, 0x9e3779b1);
  const hy = Math.imul(y | 0, 0x85ebca77);
  const hs = Math.imul(salt | 0, 0xc2b2ae3d);
  return mix32((seed ^ hx ^ hy ^ hs) >>> 0);
}

export function hashUnit(seed: number, x = 0, y = 0, salt = 0): number {
  return worldHash(seed, x, y, salt) / 0x1_0000_0000;
}

export function tileAddressAt(
  point: WorldPoint,
  tileSize = DEFAULT_WORLD_POLISH.tileSize,
): TileAddress {
  return {
    x: Math.floor(point.x / tileSize),
    y: Math.floor(point.y / tileSize),
  };
}

export function tileOrigin(
  address: TileAddress,
  tileSize = DEFAULT_WORLD_POLISH.tileSize,
): WorldPoint {
  return { x: address.x * tileSize, y: address.y * tileSize };
}

export function tileCenter(
  address: TileAddress,
  tileSize = DEFAULT_WORLD_POLISH.tileSize,
): WorldPoint {
  return {
    x: (address.x + 0.5) * tileSize,
    y: (address.y + 0.5) * tileSize,
  };
}

export function localPointInTile(
  point: WorldPoint,
  tileSize = DEFAULT_WORLD_POLISH.tileSize,
): WorldPoint {
  const address = tileAddressAt(point, tileSize);
  return {
    x: point.x - address.x * tileSize,
    y: point.y - address.y * tileSize,
  };
}

/**
 * Returns the periodic copy of `point` closest to `focus`. Useful for keeping
 * pooled crowd and ambient props close to the camera without visible teleporting.
 */
export function wrapPointNear(
  point: WorldPoint,
  focus: WorldPoint,
  period: WorldPoint | number,
): WorldPoint {
  const periodX = typeof period === "number" ? period : period.x;
  const periodY = typeof period === "number" ? period : period.y;
  const wrapAxis = (value: number, target: number, size: number) => {
    if (size <= 0) return value;
    return value + Math.round((target - value) / size) * size;
  };
  return {
    x: wrapAxis(point.x, focus.x, periodX),
    y: wrapAxis(point.y, focus.y, periodY),
  };
}

export type OriginRebase = Readonly<{
  didRebase: boolean;
  /** Persistent/global coordinate represented by local renderer coordinate (0, 0). */
  origin: WorldPoint;
  /** Add this delta to every local Three.js object, camera, particle, and steering target. */
  localDelta: WorldPoint;
}>;

/**
 * Moves the renderer origin by whole tiles once the focus travels far enough.
 * Saved/global coordinates never change; only local scene coordinates receive
 * `localDelta`. Keeping the shift tile-aligned prevents procedural seams.
 */
export function calculateOriginRebase(
  globalFocus: WorldPoint,
  currentOrigin: WorldPoint,
  config: WorldPolishConfig = DEFAULT_WORLD_POLISH,
): OriginRebase {
  const localX = globalFocus.x - currentOrigin.x;
  const localY = globalFocus.y - currentOrigin.y;
  if (
    Math.abs(localX) < config.rebaseDistance &&
    Math.abs(localY) < config.rebaseDistance
  ) {
    return {
      didRebase: false,
      origin: currentOrigin,
      localDelta: { x: 0, y: 0 },
    };
  }

  const shiftX = Math.round(localX / config.tileSize) * config.tileSize;
  const shiftY = Math.round(localY / config.tileSize) * config.tileSize;
  return {
    didRebase: true,
    origin: { x: currentOrigin.x + shiftX, y: currentOrigin.y + shiftY },
    localDelta: { x: -shiftX, y: -shiftY },
  };
}

export function toLocalWorldPoint(globalPoint: WorldPoint, origin: WorldPoint): WorldPoint {
  return { x: globalPoint.x - origin.x, y: globalPoint.y - origin.y };
}

export function toGlobalWorldPoint(localPoint: WorldPoint, origin: WorldPoint): WorldPoint {
  return { x: localPoint.x + origin.x, y: localPoint.y + origin.y };
}

/** Mutating convenience for large pooled arrays during an origin rebase. */
export function applyRebaseInPlace<T extends MutableWorldPoint>(
  points: readonly T[],
  rebase: OriginRebase,
): void {
  if (!rebase.didRebase) return;
  for (const point of points) {
    point.x += rebase.localDelta.x;
    point.y += rebase.localDelta.y;
  }
}

/** Tiles to keep mounted, ordered from the focus tile out for stable reuse. */
export function visibleTileAddresses(
  globalFocus: WorldPoint,
  config: WorldPolishConfig = DEFAULT_WORLD_POLISH,
): TileAddress[] {
  const center = tileAddressAt(globalFocus, config.tileSize);
  const result: Array<TileAddress & { distance: number }> = [];
  for (let y = -config.tileViewRadius; y <= config.tileViewRadius; y += 1) {
    for (let x = -config.tileViewRadius; x <= config.tileViewRadius; x += 1) {
      result.push({
        x: center.x + x,
        y: center.y + y,
        distance: x * x + y * y,
      });
    }
  }
  result.sort((a, b) => a.distance - b.distance || a.y - b.y || a.x - b.x);
  return result.map(({ x, y }) => ({ x, y }));
}

function sharedEdgeOpen(
  address: TileAddress,
  socket: PathSocket,
  seed: number,
): boolean {
  // Canonicalize the shared edge so adjacent tiles independently agree.
  let edgeX = address.x;
  let edgeY = address.y;
  let axis = 0;
  if (socket === "east") {
    edgeX += 1;
    axis = 1;
  } else if (socket === "west") {
    axis = 1;
  } else if (socket === "north") {
    edgeY += 1;
    axis = 2;
  } else {
    axis = 2;
  }
  // Most edges connect, but occasional garden enclosures keep the rhythm organic.
  return hashUnit(seed, edgeX, edgeY, 701 + axis) > 0.18;
}

function rotateLocal(point: WorldPoint, turns: number, tileSize: number): WorldPoint {
  let x = point.x - tileSize * 0.5;
  let y = point.y - tileSize * 0.5;
  for (let index = 0; index < turns; index += 1) {
    const oldX = x;
    x = -y;
    y = oldX;
  }
  return { x: x + tileSize * 0.5, y: y + tileSize * 0.5 };
}

function makePath(
  socket: PathSocket,
  address: TileAddress,
  config: WorldPolishConfig,
): NeighborhoodPath {
  const size = config.tileSize;
  const half = size * 0.5;
  const jitterA = (hashUnit(config.worldSeed, address.x, address.y, 810 + socket.length) - 0.5) * 48;
  const jitterB = (hashUnit(config.worldSeed, address.x, address.y, 830 + socket.charCodeAt(0)) - 0.5) * 34;

  let points: [WorldPoint, WorldPoint, WorldPoint, WorldPoint];
  if (socket === "north") {
    points = [
      { x: half, y: size },
      { x: half + jitterA, y: size * 0.76 },
      { x: half + jitterB, y: size * 0.61 },
      { x: half, y: half },
    ];
  } else if (socket === "south") {
    points = [
      { x: half, y: 0 },
      { x: half - jitterA, y: size * 0.24 },
      { x: half - jitterB, y: size * 0.39 },
      { x: half, y: half },
    ];
  } else if (socket === "east") {
    points = [
      { x: size, y: half },
      { x: size * 0.76, y: half - jitterA },
      { x: size * 0.61, y: half - jitterB },
      { x: half, y: half },
    ];
  } else {
    points = [
      { x: 0, y: half },
      { x: size * 0.24, y: half + jitterA },
      { x: size * 0.39, y: half + jitterB },
      { x: half, y: half },
    ];
  }

  return {
    socket,
    points,
    width: 16 + hashUnit(config.worldSeed, address.x, address.y, 850 + socket.length) * 7,
  };
}

/**
 * Builds an authored-looking, seam-safe tile. Shared path sockets always match,
 * while local curve, prop, and crowd anchor choices remain varied.
 */
export function createNeighborhoodTile(
  address: TileAddress,
  config: WorldPolishConfig = DEFAULT_WORLD_POLISH,
): NeighborhoodTile {
  const seed = config.worldSeed;
  const size = config.tileSize;
  const base = worldHash(seed, address.x, address.y, 17);
  const rotationQuarterTurns = (base & 3) as 0 | 1 | 2 | 3;
  const palette = PALETTES[worldHash(seed, address.x, address.y, 23) % PALETTES.length];
  const sockets: readonly PathSocket[] = ["north", "east", "south", "west"];
  const paths = sockets
    .filter((socket) => sharedEdgeOpen(address, socket, seed))
    .map((socket) => makePath(socket, address, config));

  // Guarantee that an unusually enclosed tile still has an inviting internal walk.
  if (paths.length === 0) paths.push(makePath("south", address, config));

  const propCount = 10 + (base % 9);
  const props: NeighborhoodProp[] = [];
  for (let index = 0; index < propCount; index += 1) {
    const angle = hashUnit(seed, address.x, address.y, 100 + index) * TWO_PI;
    const radius = size * (0.25 + hashUnit(seed, address.x, address.y, 200 + index) * 0.2);
    const rawPoint = {
      x: size * 0.5 + Math.cos(angle) * radius,
      y: size * 0.5 + Math.sin(angle) * radius * 0.86,
    };
    const kindIndex = worldHash(seed, address.x, address.y, 300 + index) % PROP_KINDS.length;
    props.push({
      id: worldHash(seed, address.x, address.y, 400 + index),
      kind: PROP_KINDS[kindIndex],
      offset: rotateLocal(rawPoint, rotationQuarterTurns, size),
      rotation: hashUnit(seed, address.x, address.y, 500 + index) * TWO_PI,
      scale: 0.82 + hashUnit(seed, address.x, address.y, 600 + index) * 0.38,
      tint: worldHash(seed, address.x, address.y, 650 + index) % 4,
      phase: hashUnit(seed, address.x, address.y, 690 + index) * TWO_PI,
    });
  }

  const crowdAnchors: WorldPoint[] = [];
  const crowdCount = 14 + (worldHash(seed, address.x, address.y, 901) % 10);
  for (let index = 0; index < crowdCount; index += 1) {
    const u = hashUnit(seed, address.x, address.y, 910 + index * 2);
    const v = hashUnit(seed, address.x, address.y, 911 + index * 2);
    crowdAnchors.push({
      x: size * (0.08 + u * 0.84),
      y: size * (0.08 + v * 0.84),
    });
  }

  return {
    address,
    key: `${address.x}:${address.y}`,
    palette,
    rotationQuarterTurns,
    greenInset: 19 + hashUnit(seed, address.x, address.y, 33) * 18,
    plazaRadius: 28 + hashUnit(seed, address.x, address.y, 34) * 24,
    paths,
    props,
    crowdAnchors,
  };
}

export type CompletedBuildingActivity = Readonly<{
  buildingId: string;
  position: WorldPoint;
  /** Full footprint dimensions. */
  footprint: WorldPoint;
  /** Radians; 0 points right, PI / 2 points up. */
  entranceAngle: number;
  completedAt: number;
  population: "quiet" | "social" | "busy";
}>;

export type ActivityAssignment = Readonly<{
  role: ActivityRole;
  slot: number;
  phase: number;
  speed: number;
  orbitDirection: -1 | 1;
  dwellSeconds: number;
}>;

export type ActivityPose = Readonly<{
  target: WorldPoint;
  facing: number;
  gait: number;
  bob: number;
  look: number;
  motion: ActivityMotion;
  /** 0 at the start of the current activity motion, 1 at its end. */
  motionProgress: number;
}>;

const ROLE_WEIGHTS: Record<CompletedBuildingActivity["population"], readonly [number, number]> = {
  // [customer cutoff, observer cutoff], the remainder are residents.
  quiet: [0.26, 0.48],
  social: [0.42, 0.7],
  busy: [0.58, 0.78],
};

function hashString(text: string): number {
  let value = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

export function assignBuildingActivity(
  agentId: number | string,
  building: CompletedBuildingActivity,
  worldSeed = DEFAULT_WORLD_POLISH.worldSeed,
): ActivityAssignment {
  const agentSeed = typeof agentId === "number" ? agentId : hashString(agentId);
  const buildingSeed = hashString(building.buildingId);
  const sample = hashUnit(worldSeed ^ buildingSeed, agentSeed, 0, 1);
  const [customerCutoff, observerCutoff] = ROLE_WEIGHTS[building.population];
  const role: ActivityRole =
    sample < customerCutoff ? "customer" : sample < observerCutoff ? "observer" : "resident";

  return {
    role,
    slot: worldHash(worldSeed ^ buildingSeed, agentSeed, 0, 2) % 9,
    phase: hashUnit(worldSeed ^ buildingSeed, agentSeed, 0, 3) * TWO_PI,
    speed: 0.82 + hashUnit(worldSeed ^ buildingSeed, agentSeed, 0, 4) * 0.34,
    orbitDirection: hashUnit(worldSeed ^ buildingSeed, agentSeed, 0, 5) < 0.5 ? -1 : 1,
    dwellSeconds: 3.8 + hashUnit(worldSeed ^ buildingSeed, agentSeed, 0, 6) * 7.4,
  };
}

function smoothstep(value: number): number {
  const clamped = Math.max(0, Math.min(1, value));
  return clamped * clamped * (3 - 2 * clamped);
}

function lerp(a: number, b: number, amount: number): number {
  return a + (b - a) * amount;
}

function entranceBasis(building: CompletedBuildingActivity) {
  const outward = {
    x: Math.cos(building.entranceAngle),
    y: Math.sin(building.entranceAngle),
  };
  return { outward, tangent: { x: -outward.y, y: outward.x } };
}

/**
 * Gives a stable local destination and animation phase for an attached crowd agent.
 * Call every frame with elapsed world seconds. The loops include long dwell periods,
 * so visitors do not look like synchronized orbiting particles.
 */
export function sampleBuildingActivityPose(
  building: CompletedBuildingActivity,
  assignment: ActivityAssignment,
  elapsedSeconds: number,
): ActivityPose {
  const { outward, tangent } = entranceBasis(building);
  const halfWidth = building.footprint.x * 0.5;
  const halfDepth = building.footprint.y * 0.5;
  const entryDistance = Math.max(halfWidth, halfDepth) + 15;
  const slotSigned = ((assignment.slot % 5) - 2) / 2;
  const cycleLength = assignment.dwellSeconds + 8.4 / assignment.speed;
  const cycleTime = ((elapsedSeconds + assignment.phase * 1.71) % cycleLength + cycleLength) % cycleLength;

  let motion: ActivityMotion;
  let motionProgress: number;
  let along: number;
  if (cycleTime < 3.2 / assignment.speed) {
    motion = "arriving";
    motionProgress = cycleTime / (3.2 / assignment.speed);
    along = smoothstep(motionProgress);
  } else if (cycleTime < 3.2 / assignment.speed + assignment.dwellSeconds) {
    motion = "dwelling";
    motionProgress =
      (cycleTime - 3.2 / assignment.speed) / assignment.dwellSeconds;
    along = 1;
  } else {
    motion = "departing";
    motionProgress =
      (cycleTime - 3.2 / assignment.speed - assignment.dwellSeconds) /
      (5.2 / assignment.speed);
    along = 1 - smoothstep(motionProgress);
  }

  let localX = 0;
  let localY = 0;
  if (assignment.role === "customer") {
    const queueGap = 7 + assignment.slot * 3.1;
    localX = lerp(entryDistance + 60 + assignment.slot * 2, entryDistance + queueGap, along);
    localY = tangent.x * 0 + slotSigned * 11;
  } else if (assignment.role === "observer") {
    const arc = assignment.phase + Math.sin(elapsedSeconds * 0.21 + assignment.phase) * 0.3;
    const distance = entryDistance + 30 + (assignment.slot % 3) * 10;
    localX = Math.cos(arc) * distance;
    localY = Math.sin(arc) * distance * 0.64;
    // Observers drift into their viewing spot instead of popping into a ring.
    localX = lerp(entryDistance + 82, localX, along);
  } else {
    const side = assignment.slot % 2 === 0 ? -1 : 1;
    localX = entryDistance * (0.34 + (assignment.slot % 3) * 0.17);
    localY = side * (halfWidth + 20 + (assignment.slot % 4) * 9);
    // A resident occasionally takes a tiny stroll along the facade.
    localY += Math.sin(elapsedSeconds * 0.18 * assignment.speed + assignment.phase) * 9;
  }

  const target = {
    x: building.position.x + outward.x * localX + tangent.x * localY,
    y: building.position.y + outward.y * localX + tangent.y * localY,
  };
  const facing =
    motion === "departing"
      ? building.entranceAngle
      : Math.atan2(building.position.y - target.y, building.position.x - target.x);
  const moving = motion === "dwelling" ? 0.08 : Math.sin(motionProgress * Math.PI);
  const gait = elapsedSeconds * assignment.speed * 5.4 + assignment.phase;

  return {
    target,
    facing,
    gait,
    bob: Math.sin(gait * 2) * 0.8 * moving,
    look: Math.sin(elapsedSeconds * 0.72 + assignment.phase) * (assignment.role === "observer" ? 0.22 : 0.1),
    motion,
    motionProgress: Math.max(0, Math.min(1, motionProgress)),
  };
}

export type SteeringSample = Readonly<{
  velocity: WorldPoint;
  facing: number;
  arrived: boolean;
}>;

/** Critically damped-feeling crowd steering with a caller-controlled maximum speed. */
export function steerTowardActivity(
  position: WorldPoint,
  currentVelocity: WorldPoint,
  pose: ActivityPose,
  deltaSeconds: number,
  maxSpeed = 18,
): SteeringSample {
  const dx = pose.target.x - position.x;
  const dy = pose.target.y - position.y;
  const distance = Math.hypot(dx, dy);
  const desiredSpeed = Math.min(maxSpeed, distance * 1.7);
  const inverseDistance = distance > 0.0001 ? 1 / distance : 0;
  const desiredX = dx * inverseDistance * desiredSpeed;
  const desiredY = dy * inverseDistance * desiredSpeed;
  const response = 1 - Math.exp(-Math.max(0, deltaSeconds) * 4.8);
  const velocity = {
    x: lerp(currentVelocity.x, desiredX, response),
    y: lerp(currentVelocity.y, desiredY, response),
  };
  return {
    velocity,
    facing: Math.hypot(velocity.x, velocity.y) > 0.25
      ? Math.atan2(velocity.y, velocity.x)
      : pose.facing,
    arrived: distance < 2.5,
  };
}

/**
 * Smoothly increases permanent clearing around a completed building. This can
 * multiply the usual player/crowd repulsion force, avoiding a sudden crowd pop.
 */
export function completedBuildingClearance(
  building: CompletedBuildingActivity,
  nowMilliseconds: number,
): Readonly<{ radius: number; strength: number }> {
  const ageSeconds = Math.max(0, (nowMilliseconds - building.completedAt) / 1000);
  const settle = smoothstep(ageSeconds / 5.5);
  return {
    radius: (Math.max(building.footprint.x, building.footprint.y) * 0.64 + 34) * settle,
    strength: settle,
  };
}
