"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  EXCHANGE_ASSETS,
  GAME_ASSETS,
  type AssetCategory,
  type AssetDefinition,
  type AssetId,
} from "../lib/assets";
import {
  accrueActiveBudget,
  collectReserveToken,
  collectCrowdAssetPiece,
  clearSavedGameState,
  getAssetProgress,
  getRemainingPieces,
  isPlotOwned,
  isWorldTokenCollected,
  isExchangeOpen,
  isExchangeRevealEligible,
  loadGameState,
  markGameCompletionMessageSeen,
  markNeighborhoodCelebrated,
  markNeighborhoodExplored,
  markWorldTokenCollected,
  purchaseExchangePiece,
  purchaseLandPlot,
  recordPeoplePassed,
  refreshDailyPrices,
  saveGameState,
  updateWallyPosition,
  type ExchangeAssetId,
  type FacingDirection,
  type GameState,
} from "../lib/gameState";
import { getPackAsset, PACK_TOKEN_BASE_PATH } from "../lib/assetPack";
import { getLandPlotPrice } from "../lib/economy";
import { getGlobalAssetForGameAsset } from "../lib/globalAssets";
import {
  NEIGHBORHOODS,
  NEIGHBORHOOD_LAYOUT_SCALE,
  NEIGHBORHOOD_PLOT_OFFSETS,
  getActiveWorldPeriod,
  getCompletedNeighborhoodIds,
  getNeighborhoodSignPoint,
  getNeighborhoodProgress,
  getUnlockedNeighborhoodIds,
  nearestToroidalPoint,
  type NeighborhoodId,
  type WorldPoint,
} from "../lib/neighborhoods";
import {
  FLYING_BIRD_LEFT_PATH,
  FLYING_BIRD_RIGHT_PATH,
  NEIGHBORHOOD_PROP_FILES,
  getNeighborhoodPropPath,
  getUniversalEnvironmentPropPath,
} from "../lib/scoredPaperProps";
import {
  createNeighborhoodSignTexture,
  createWallyCastShadowTexture,
  createWorldPlanetTexture,
  updateNeighborhoodSignTexture,
  updateWorldPlanetTexture,
} from "../lib/worldLandmarks";
import {
  createNeighborhoodTile,
  wrapPointNear,
  type NeighborhoodTile,
  type NeighborhoodPropKind,
} from "../lib/worldPolish";

const CROWD_COUNT = 360;
const VISIBLE_BUILDINGS = 80;
const WORLD_SIZE = 1200;
const RESERVE_TOKEN_COUNT = 128;
const NEIGHBORHOOD_CENTERS: readonly XY[] = NEIGHBORHOODS.map((neighborhood) => neighborhood.center);
const CROWD_LIFE_COLORS = ["#f2d2b6", "#c88777", "#82a58a", "#7fa7bd", "#d6ad61", "#9a86aa", "#77a7a1", "#bc8a68", "#e09c67", "#69a7a3"] as const;
const CROWD_GREETINGS = [
  "Herd strong together!",
  "Trunks up!",
  "Bring the world onchain!",
  "Good to see you, WALLY!",
  "Looking sharp, WALLY!",
  "Have a wonderful walk!",
] as const;

type XY = { x: number; y: number };
type SceneryInstance = XY & { scale: number; z: number };
type NeighborhoodPropInstance = SceneryInstance & {
  canonicalX: number;
  canonicalY: number;
  neighborhood: number;
  rotation: number;
};
type PaperPropVisual = {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  canonical: XY;
  neighborhood: number;
  revealAfter: number;
  baseScale: number;
  radiusX: number;
  radiusY: number;
  footOffset: number;
  swayPhase: number;
  path: string;
  loaded: boolean;
  loading: boolean;
  texture?: THREE.Texture;
};
type CrowdPerson = XY & {
  canonicalHomeX: number;
  canonicalHomeY: number;
  homeX: number;
  homeY: number;
  size: number;
  phase: number;
  drift: number;
  variant: number;
  slot: number;
  neighborhood: number;
  passed: boolean;
  greetingEligible: boolean;
  greeted: boolean;
  active: boolean;
  arrivalOrder: number;
};

type ProjectTokenVisual = {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  canonical: XY;
  pieceIndex: number;
};

type ProjectVisual = {
  asset: AssetDefinition;
  plot: XY;
  canonicalPlot: XY;
  tokens: ProjectTokenVisual[];
  building?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  plotHalo?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  remainingLabel?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  branding?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  constructionTexture?: THREE.Texture;
  constructionStage?: number;
  pendingStage?: number;
  formCount: number;
  neighborhood: number;
  slot: number;
  flowAvailable: boolean;
  landOwned: boolean;
  landPrice: number;
  improvementGroup?: THREE.Group;
  improvements: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[];
  activity?: THREE.Group;
  activityKind: "rotor" | "steam" | "lights" | "orbit";
  unlocked: boolean;
  peopleThreshold?: number;
  pulsePhase: number;
  walkRevealArmed: boolean;
  artLoaded: boolean;
  tokenTextureLoaded: boolean;
};

type ReserveVisual = XY & { homeX: number; homeY: number; id: number; neighborhood: number; phase: number; collected: boolean };

type AmbientVignette = {
  group: THREE.Group;
  canonical: XY;
  neighborhood: number;
  kind: "soccer" | "family" | "fetch" | "reader";
  actors: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[];
  props: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[];
};

type PulseFx = {
  mesh: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  born: number;
  duration: number;
};

type ParticleFx = {
  mesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  from: XY;
  to: XY;
  born: number;
  duration: number;
  arc: number;
  delay: number;
  maxOpacity?: number;
};

type BirdFx = {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  from: XY;
  to: XY;
  born: number;
  duration: number;
  delay: number;
  phase: number;
  arc: number;
  baseScale: number;
  maxOpacity: number;
};

type AudioEngine = {
  context: AudioContext;
  gain: GainNode;
  beat: number;
  timer: number;
  theme: number;
  started: boolean;
};

type ExchangePanelSnapshot = {
  budget: number;
  cards: Array<{
    id: ExchangeAssetId;
    name: string;
    price: number;
    remaining: number;
    icon: string;
  }>;
};

type LandOfferSnapshot = {
  assetId: AssetId;
  name: string;
  price: number;
  budget: number;
};

const CATEGORY_COLORS: Record<AssetCategory, string> = {
  "food-hospitality": "#d98273",
  "real-estate": "#77aec7",
  "technology-companies": "#78b99b",
  "agriculture-commodities": "#d4aa55",
  "culture-collectibles": "#a28ab7",
  "public-community": "#5f9e98",
  "trade-industry-transport": "#ce874e",
  "finance-energy-infrastructure": "#496a91",
};

const CATEGORY_FREQUENCIES: Record<AssetCategory, number> = {
  "food-hospitality": 349.23,
  "real-estate": 392,
  "technology-companies": 440,
  "agriculture-commodities": 523.25,
  "culture-collectibles": 466.16,
  "public-community": 587.33,
  "trade-industry-transport": 329.63,
  "finance-energy-infrastructure": 293.66,
};

const LOFI_THEMES = [
  { roots: [130.81, 110], melody: [261.63, 329.63, 392, 329.63, 220, 261.63, 329.63, 293.66], cutoff: 1360 },
  { roots: [146.83, 116.54], melody: [293.66, 349.23, 440, 349.23, 233.08, 293.66, 349.23, 261.63], cutoff: 1480 },
  { roots: [116.54, 98], melody: [233.08, 293.66, 349.23, 293.66, 196, 233.08, 293.66, 261.63], cutoff: 1220 },
  { roots: [164.81, 130.81], melody: [329.63, 392, 493.88, 392, 261.63, 329.63, 392, 349.23], cutoff: 1660 },
  { roots: [123.47, 103.83], melody: [246.94, 311.13, 369.99, 311.13, 207.65, 246.94, 311.13, 277.18], cutoff: 1320 },
  { roots: [174.61, 146.83], melody: [349.23, 440, 523.25, 440, 293.66, 349.23, 440, 392], cutoff: 1780 },
  { roots: [110, 92.5], melody: [220, 277.18, 329.63, 277.18, 185, 220, 277.18, 246.94], cutoff: 1160 },
  { roots: [155.56, 123.47], melody: [311.13, 392, 466.16, 392, 246.94, 311.13, 392, 349.23], cutoff: 1580 },
] as const;

const LOFI_RHYTHMS = [
  { kicks: [0, 3, 7, 10], snares: [4, 12], ghosts: [15], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 3, 8, 10, 14], melody: [1, 3, 7, 9, 13], swing: 0.026 },
  { kicks: [0, 6, 10, 14], snares: [4, 12], ghosts: [11], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 6, 8, 13], melody: [1, 5, 7, 11, 15], swing: 0.032 },
  { kicks: [0, 3, 8, 11], snares: [4, 12], ghosts: [14], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 5, 8, 14], melody: [3, 7, 9, 13], swing: 0.022 },
  { kicks: [0, 3, 7, 8, 11], snares: [4, 12], ghosts: [15], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 5, 8, 13], melody: [1, 5, 9, 11, 15], swing: 0.028 },
  { kicks: [0, 7, 10, 14], snares: [4, 12], ghosts: [11], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 6, 8, 15], melody: [3, 5, 9, 13], swing: 0.034 },
  { kicks: [0, 3, 6, 10], snares: [4, 12], ghosts: [15], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 7, 8, 14], melody: [1, 3, 7, 11, 13], swing: 0.024 },
  { kicks: [0, 3, 8, 10], snares: [4, 12], ghosts: [14], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 3, 8, 14], melody: [3, 7, 11, 15], swing: 0.036 },
  { kicks: [0, 6, 10, 14], snares: [4, 12], ghosts: [11], hats: [0, 2, 4, 6, 8, 10, 12, 14], bass: [0, 6, 8, 13], melody: [1, 5, 9, 13, 15], swing: 0.03 },
] as const;

const LOFI_STATION_STEP_MS = 330;

const EXCHANGE_ICON_GLYPHS: Record<string, string> = {
  pear: "",
  cloud: "",
  robot: "",
  helix: "",
  fox: "",
  chip: "",
  sun: "",
  parcel: "",
  satellite: "",
  droplet: "",
  onre: "",
};

function exchangeSnapshot(state: GameState): ExchangePanelSnapshot {
  return {
    budget: state.budget,
    cards: EXCHANGE_ASSETS.map((asset) => ({
      id: asset.id,
      name: asset.name,
      price: state.dailyPrices.prices[asset.id],
      remaining: getRemainingPieces(state, asset.id),
      icon: asset.exchangeListing.iconShape,
    })),
  };
}

function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function assetFormCount(asset: AssetDefinition): number {
  return getGlobalAssetForGameAsset(asset).stageCount;
}

function visualStageForProgress(progress: number, requiredPieces: number, formCount: number): number {
  if (progress >= requiredPieces) return formCount - 1;
  return Math.max(0, Math.min(formCount - 2, Math.floor((progress / requiredPieces) * formCount)));
}

function createNeighborhoodAssetGroups(): AssetDefinition[][] {
  return NEIGHBORHOODS.map((_, neighborhoodIndex) => GAME_ASSETS.filter((asset) => (
    Math.floor((getGlobalAssetForGameAsset(asset).packNumber - 1) / 8) === neighborhoodIndex
  )));
}

function crowdProjectFlowAvailable(
  state: GameState,
  asset: AssetDefinition,
  neighborhoodAssets: readonly AssetDefinition[],
): boolean {
  if (asset.discovery !== "crowd") return true;
  if (getAssetProgress(state, asset.id as AssetId) > 0 || isPlotOwned(state, asset.id as AssetId)) return true;
  const projects = neighborhoodAssets.filter((candidate) => candidate.discovery === "crowd");
  const slot = projects.findIndex((candidate) => candidate.id === asset.id);
  if (slot <= 0) return true;
  const parentSlot = slot <= 2 ? 0 : slot <= 4 ? 1 : 2;
  const parent = projects[parentSlot];
  return Boolean(parent && getRemainingPieces(state, parent.id as AssetId) === 0);
}

function canvasTexture(
  width: number,
  height: number,
  paint: (context: CanvasRenderingContext2D, width: number, height: number) => void,
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas rendering is unavailable.");
  paint(context, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

function createCrowdGreetingTexture(message: string) {
  return canvasTexture(768, 224, (context) => {
    context.clearRect(0, 0, 768, 224);
    context.save();
    context.shadowColor = "rgba(69, 55, 45, 0.18)";
    context.shadowBlur = 14;
    context.shadowOffsetY = 7;
    context.fillStyle = "#fffaf0";
    context.strokeStyle = "#574a40";
    context.lineWidth = 8;
    context.beginPath();
    context.moveTo(54, 22);
    context.lineTo(714, 22);
    context.quadraticCurveTo(746, 22, 746, 54);
    context.lineTo(746, 154);
    context.quadraticCurveTo(746, 186, 714, 186);
    context.lineTo(356, 186);
    context.lineTo(316, 214);
    context.lineTo(324, 186);
    context.lineTo(54, 186);
    context.quadraticCurveTo(22, 186, 22, 154);
    context.lineTo(22, 54);
    context.quadraticCurveTo(22, 22, 54, 22);
    context.closePath();
    context.fill();
    context.shadowColor = "transparent";
    context.stroke();
    context.fillStyle = "#3f3732";
    context.font = "700 39px Georgia, serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(message, 384, 103, 660);
    context.restore();
  });
}

function createChromaKeyTexture(source: string, size = 1024) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Canvas rendering is unavailable.");
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  const image = new window.Image();
  image.onload = () => {
    context.clearRect(0, 0, size, size);
    context.drawImage(image, 0, 0, size, size);
    const pixels = context.getImageData(0, 0, size, size);
    for (let index = 0; index < pixels.data.length; index += 4) {
      const red = pixels.data[index];
      const green = pixels.data[index + 1];
      const blue = pixels.data[index + 2];
      const magenta = Math.min(
        Math.max(0, (red - 196) / 46),
        Math.max(0, (blue - 165) / 70),
        Math.max(0, (118 - green) / 92),
      );
      if (magenta > 0) pixels.data[index + 3] = Math.round(pixels.data[index + 3] * (1 - magenta));
    }
    context.putImageData(pixels, 0, 0);
    texture.needsUpdate = true;
  };
  image.src = source;
  return texture;
}

function createGrayscaleCrowdTexture(tone: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 384;
  canvas.height = 576;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Canvas rendering is unavailable.");
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  const image = new window.Image();
  image.onload = () => {
    context.clearRect(0, 0, 384, 576);
    context.drawImage(image, 330, 120, 600, 940, 0, 0, 384, 576);
    const pixels = context.getImageData(0, 0, 384, 576);
    for (let index = 0; index < pixels.data.length; index += 4) {
      const red = pixels.data[index];
      const green = pixels.data[index + 1];
      const blue = pixels.data[index + 2];
      const magenta = Math.min(
        Math.max(0, (red - 196) / 46),
        Math.max(0, (blue - 165) / 70),
        Math.max(0, (118 - green) / 92),
      );
      if (magenta > 0.08) {
        pixels.data[index + 3] = Math.round(pixels.data[index + 3] * (1 - magenta));
        continue;
      }
      const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
      const gray = Math.max(30, Math.min(255, 18 + luminance * tone));
      pixels.data[index] = gray;
      pixels.data[index + 1] = gray;
      pixels.data[index + 2] = gray;
    }
    context.putImageData(pixels, 0, 0);
    texture.needsUpdate = true;
  };
  image.src = "/assets/crowd-reference-front.png";
  return texture;
}

function createWallyTexture() {
  return createChromaKeyTexture("/assets/wally-reference-exact.png");
}
function createGroundTexture() {
  return canvasTexture(64, 64, (context) => {
    context.fillStyle = "#fffdf8";
    context.fillRect(0, 0, 64, 64);
  });
}

function createSproutTexture() {
  return canvasTexture(96, 96, (context) => {
    context.clearRect(0, 0, 96, 96);
    context.strokeStyle = "#5f7b60";
    context.lineWidth = 4;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(48, 82);
    context.quadraticCurveTo(46, 59, 50, 38);
    context.stroke();
    context.fillStyle = "#7f9a70";
    context.beginPath();
    context.ellipse(36, 55, 14, 7, 0.55, 0, Math.PI * 2);
    context.ellipse(61, 48, 14, 7, -0.52, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#d9a168";
    for (let index = 0; index < 5; index += 1) {
      const angle = (index / 5) * Math.PI * 2;
      context.beginPath();
      context.arc(49 + Math.cos(angle) * 9, 30 + Math.sin(angle) * 9, 6, 0, Math.PI * 2);
      context.fill();
    }
    context.fillStyle = "#ead17d";
    context.beginPath();
    context.arc(49, 30, 5, 0, Math.PI * 2);
    context.fill();
  });
}

function createNeighborhoodTileTexture(tile: NeighborhoodTile, tileSize: number) {
  const palettes: Record<NeighborhoodTile["palette"], readonly [string, string, string]> = {
    "sage-garden": ["#cad4b5", "#9eb78d", "#e8d9bd"],
    "cream-market": ["#e4d3ad", "#c9aa7e", "#f1e4c9"],
    "clay-court": ["#dfb19a", "#b87962", "#ead7bd"],
    "lavender-walk": ["#d5c8da", "#a991b2", "#ede0c9"],
    "bluebell-square": ["#bfd1d2", "#83a9ad", "#e8dcc2"],
  };
  const [pocket, accent, pathColor] = palettes[tile.palette];
  return canvasTexture(512, 512, (context) => {
    const scale = 512 / tileSize;
    context.clearRect(0, 0, 512, 512);
    context.save();
    context.scale(scale, scale);
    context.globalAlpha = 0.19;
    context.fillStyle = pocket;
    context.beginPath();
    context.moveTo(18, tileSize * 0.23);
    context.bezierCurveTo(tileSize * 0.2, 4, tileSize * 0.42, 17, tileSize * 0.44, tileSize * 0.31);
    context.bezierCurveTo(tileSize * 0.38, tileSize * 0.46, tileSize * 0.17, tileSize * 0.47, 18, tileSize * 0.34);
    context.closePath();
    context.fill();
    context.beginPath();
    context.moveTo(tileSize - 14, tileSize * 0.66);
    context.bezierCurveTo(tileSize * 0.82, tileSize * 0.53, tileSize * 0.6, tileSize * 0.68, tileSize * 0.65, tileSize * 0.88);
    context.bezierCurveTo(tileSize * 0.77, tileSize - 8, tileSize - 8, tileSize * 0.9, tileSize - 14, tileSize * 0.66);
    context.closePath();
    context.fill();

    context.globalAlpha = 0.68;
    context.strokeStyle = pathColor;
    context.lineCap = "round";
    context.lineJoin = "round";
    for (const path of tile.paths) {
      context.lineWidth = path.width;
      context.beginPath();
      context.moveTo(path.points[0].x, tileSize - path.points[0].y);
      context.bezierCurveTo(
        path.points[1].x, tileSize - path.points[1].y,
        path.points[2].x, tileSize - path.points[2].y,
        path.points[3].x, tileSize - path.points[3].y,
      );
      context.stroke();
      context.globalAlpha = 0.28;
      context.strokeStyle = "#fffaf0";
      context.lineWidth = Math.max(2, path.width * 0.08);
      context.stroke();
      context.strokeStyle = pathColor;
      context.globalAlpha = 0.68;
    }
    context.fillStyle = pathColor;
    context.globalAlpha = 0.72;
    context.beginPath();
    context.arc(tileSize * 0.5, tileSize * 0.5, tile.plazaRadius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(255,250,238,.48)";
    context.lineWidth = 2.4;
    for (let ring = 0; ring < 3; ring += 1) {
      context.beginPath();
      context.arc(tileSize * 0.5, tileSize * 0.5, tile.plazaRadius * (0.42 + ring * 0.23), 0.15, Math.PI * 1.72);
      context.stroke();
    }
    context.globalAlpha = 0.38;
    context.fillStyle = accent;
    for (let dot = 0; dot < 22; dot += 1) {
      const angle = dot * 2.4 + tile.rotationQuarterTurns;
      const radius = tile.greenInset + (dot % 5) * 5.2;
      context.beginPath();
      context.arc(
        tileSize * 0.5 + Math.cos(angle) * radius,
        tileSize * 0.5 + Math.sin(angle) * radius * 0.76,
        1.5 + (dot % 3),
        0,
        Math.PI * 2,
      );
      context.fill();
    }
    context.restore();
  });
}

function createTokenTexture(asset: AssetDefinition) {
  const packAsset = getPackAsset(asset);
  const texture = canvasTexture(512, 512, (context) => context.clearRect(0, 0, 512, 512));
  const target = texture.image as HTMLCanvasElement;
  const context = target.getContext("2d");
  if (!context) return texture;
  const base = new window.Image();
  const icon = new window.Image();
  const redraw = () => {
    context.clearRect(0, 0, 512, 512);
    const color = CATEGORY_COLORS[asset.category];
    const glow = context.createRadialGradient(256, 256, 70, 256, 256, 250);
    glow.addColorStop(0, `${color}5c`);
    glow.addColorStop(0.68, `${color}22`);
    glow.addColorStop(1, `${color}00`);
    context.fillStyle = glow;
    context.fillRect(0, 0, 512, 512);
    if (base.complete && base.naturalWidth > 0) context.drawImage(base, 24, 24, 464, 464);
    if (icon.complete && icon.naturalWidth > 0) context.drawImage(icon, 141, 134, 230, 230);
    texture.needsUpdate = true;
  };
  base.onload = redraw;
  icon.onload = redraw;
  base.src = PACK_TOKEN_BASE_PATH;
  icon.src = asset.id === "onre-reinsurance" ? "/assets/onre-icon.svg" : packAsset.iconPath;
  redraw();
  return texture;
}

function createReserveTokenTexture() {
  const texture = canvasTexture(192, 192, (context) => {
    context.clearRect(0, 0, 192, 192);
    const glow = context.createRadialGradient(96, 96, 5, 96, 96, 92);
    glow.addColorStop(0, "rgba(255,224,108,.96)");
    glow.addColorStop(0.5, "rgba(255,207,77,.42)");
    glow.addColorStop(1, "rgba(255,207,77,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, 192, 192);
    context.shadowColor = "#f4b83d";
    context.shadowBlur = 20;
    context.fillStyle = "#fff8dc";
    context.strokeStyle = "#d89a25";
    context.lineWidth = 8;
    context.beginPath();
    context.arc(96, 96, 52, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.shadowBlur = 0;
  });
  const image = new window.Image();
  image.onload = () => {
    const target = texture.image as HTMLCanvasElement;
    const context = target.getContext("2d");
    if (!context) return;
    const crop = document.createElement("canvas");
    crop.width = 320;
    crop.height = 300;
    const cropContext = crop.getContext("2d", { willReadFrequently: true });
    if (!cropContext) return;
    cropContext.drawImage(image, 235, 105, 770, 700, 0, 0, 320, 300);
    const pixels = cropContext.getImageData(0, 0, 320, 300);
    for (let index = 0; index < pixels.data.length; index += 4) {
      const red = pixels.data[index];
      const green = pixels.data[index + 1];
      const blue = pixels.data[index + 2];
      const magenta = Math.min(
        Math.max(0, (red - 196) / 46),
        Math.max(0, (blue - 165) / 70),
        Math.max(0, (118 - green) / 92),
      );
      if (magenta > 0) pixels.data[index + 3] = Math.round(pixels.data[index + 3] * (1 - magenta));
    }
    cropContext.putImageData(pixels, 0, 0);
    context.save();
    context.beginPath();
    context.arc(96, 95, 44, 0, Math.PI * 2);
    context.clip();
    context.drawImage(crop, 51, 48, 90, 88);
    context.restore();
    texture.needsUpdate = true;
  };
  image.src = "/assets/wally-reference-exact.png";
  return texture;
}

function createNeighborhoodPatchTexture(index: number) {
  const palette = NEIGHBORHOODS[index]?.palette ?? ["#dbe8d5", "#ead9b8", "#789680"];
  return canvasTexture(256, 256, (context) => {
    context.clearRect(0, 0, 256, 256);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.globalAlpha = 0.3;
    context.fillStyle = palette[0];
    const rounded = (x: number, y: number, width: number, height: number, radius = 18) => {
      context.beginPath();
      context.roundRect(x, y, width, height, radius);
      context.fill();
    };
    if (index === 0) {
      rounded(18, 62, 220, 58, 24); rounded(18, 145, 220, 58, 24);
    } else if (index === 1) {
      rounded(30, 28, 48, 196, 23); rounded(178, 28, 48, 196, 23); rounded(64, 170, 128, 54, 24);
    } else if (index === 2) {
      context.beginPath(); context.moveTo(8, 60); context.lineTo(198, 8); context.lineTo(248, 62); context.lineTo(50, 116); context.closePath(); context.fill();
      context.beginPath(); context.moveTo(8, 164); context.lineTo(206, 110); context.lineTo(248, 168); context.lineTo(52, 224); context.closePath(); context.fill();
    } else if (index === 3) {
      rounded(18, 40, 220, 66, 14); rounded(18, 150, 220, 66, 14); rounded(102, 82, 52, 94, 12);
    } else if (index === 4) {
      rounded(98, 70, 60, 116, 25);
      context.beginPath(); context.moveTo(112, 104); context.lineTo(18, 44); context.lineTo(36, 22); context.lineTo(128, 92); context.closePath(); context.fill();
      context.beginPath(); context.moveTo(142, 104); context.lineTo(238, 44); context.lineTo(222, 20); context.lineTo(128, 92); context.closePath(); context.fill();
      context.beginPath(); context.moveTo(112, 154); context.lineTo(56, 236); context.lineTo(90, 244); context.lineTo(134, 170); context.closePath(); context.fill();
    } else if (index === 5) {
      context.beginPath(); context.moveTo(10, 208); context.lineTo(28, 166); context.lineTo(105, 146); context.lineTo(66, 112); context.lineTo(86, 78); context.lineTo(180, 58); context.lineTo(142, 28); context.lineTo(166, 10); context.lineTo(242, 64); context.lineTo(224, 104); context.lineTo(138, 122); context.lineTo(174, 154); context.lineTo(150, 190); context.lineTo(58, 214); context.closePath(); context.fill();
    } else if (index === 6) {
      context.strokeStyle = palette[0]; context.lineWidth = 62; context.globalAlpha = 0.3;
      context.beginPath(); context.moveTo(26, 58); context.bezierCurveTo(220, 8, 224, 116, 124, 126); context.bezierCurveTo(22, 136, 30, 230, 224, 196); context.stroke();
    } else if (index === 7) {
      context.beginPath(); context.moveTo(35, 72); context.quadraticCurveTo(68, 12, 143, 26); context.quadraticCurveTo(230, 38, 226, 122); context.quadraticCurveTo(224, 214, 122, 229); context.quadraticCurveTo(32, 218, 24, 137); context.closePath(); context.fill();
    } else if (index === 8) {
      rounded(18, 34, 220, 48, 16); rounded(34, 92, 188, 50, 16); rounded(54, 152, 150, 50, 16); rounded(92, 210, 74, 32, 14);
    } else {
      rounded(20, 38, 192, 58, 20); rounded(154, 70, 64, 138, 20); rounded(66, 166, 130, 50, 20);
    }
    context.globalAlpha = 0.12;
    context.fillStyle = palette[1];
    rounded(54, 94, 148, 68, 26);
  });
}

function createAmbientActivityTexture(kind: "ball" | "dog" | "newspaper") {
  return canvasTexture(192, 192, (context) => {
    context.clearRect(0, 0, 192, 192);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = "#4d504c";
    context.lineWidth = 7;
    if (kind === "ball") {
      context.fillStyle = "#f6f1e6";
      context.beginPath(); context.arc(96, 96, 54, 0, Math.PI * 2); context.fill(); context.stroke();
      context.fillStyle = "#687a70";
      for (let spot = 0; spot < 5; spot += 1) {
        const angle = spot * Math.PI * 0.4 - Math.PI / 2;
        context.beginPath(); context.arc(96 + Math.cos(angle) * 31, 96 + Math.sin(angle) * 31, 8, 0, Math.PI * 2); context.fill();
      }
    } else if (kind === "newspaper") {
      context.fillStyle = "#f8f2df";
      context.beginPath(); context.roundRect(28, 43, 136, 106, 8); context.fill(); context.stroke();
      context.strokeStyle = "#7c827b"; context.lineWidth = 5;
      context.beginPath(); context.moveTo(44, 67); context.lineTo(145, 67); context.moveTo(44, 88); context.lineTo(104, 88); context.moveTo(44, 110); context.lineTo(145, 110); context.moveTo(44, 130); context.lineTo(124, 130); context.stroke();
    } else {
      context.fillStyle = "#b8b8b2";
      context.beginPath(); context.ellipse(100, 108, 48, 30, 0, 0, Math.PI * 2); context.fill(); context.stroke();
      context.beginPath(); context.arc(62, 79, 25, 0, Math.PI * 2); context.fill(); context.stroke();
      context.beginPath(); context.moveTo(43, 64); context.lineTo(35, 35); context.lineTo(62, 54); context.closePath(); context.fill(); context.stroke();
      context.beginPath(); context.moveTo(80, 132); context.lineTo(74, 162); context.moveTo(122, 131); context.lineTo(130, 160); context.moveTo(145, 99); context.quadraticCurveTo(172, 72, 162, 47); context.stroke();
      context.fillStyle = "#4d504c"; context.beginPath(); context.arc(55, 78, 4, 0, Math.PI * 2); context.fill();
    }
  });
}

function createAssetActivityVisual(asset: AssetDefinition, index: number) {
  const group = new THREE.Group();
  const color = new THREE.Color(CATEGORY_COLORS[asset.category]);
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82, depthWrite: true, depthTest: true, alphaTest: 0.02 });
  let kind: ProjectVisual["activityKind"] = "lights";
  if (asset.category === "agriculture-commodities" || asset.category === "finance-energy-infrastructure") kind = "rotor";
  else if (asset.category === "food-hospitality" || asset.category === "trade-industry-transport") kind = "steam";
  else if (asset.category === "culture-collectibles" || asset.category === "public-community") kind = "orbit";

  if (kind === "rotor") {
    for (let blade = 0; blade < 4; blade += 1) {
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 1.1), material.clone());
      mesh.position.y = 0.48;
      mesh.rotation.z = blade * Math.PI / 2;
      group.add(mesh);
    }
    const hub = new THREE.Mesh(new THREE.CircleGeometry(0.18, 24), material.clone());
    group.add(hub);
  } else {
    for (let item = 0; item < 4; item += 1) {
      const mesh = new THREE.Mesh(new THREE.CircleGeometry(0.1 + item * 0.018, 18), material.clone());
      const angle = item * Math.PI * 0.5 + index;
      mesh.position.set(Math.cos(angle) * 0.58, Math.sin(angle) * 0.42, 0);
      group.add(mesh);
    }
  }
  group.renderOrder = 15;
  group.visible = false;
  return { group, kind };
}

function createNumberTexture(value: number, color: string) {
  return canvasTexture(96, 96, (context) => {
    context.clearRect(0, 0, 96, 96);
    context.font = "700 50px Georgia, serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.lineJoin = "round";
    context.strokeStyle = "#fff7e8";
    context.lineWidth = 9;
    context.strokeText(String(value), 48, 43);
    context.fillStyle = color;
    context.fillText(String(value), 48, 43);
    context.globalAlpha = 0.58;
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(36, 76);
    context.quadraticCurveTo(48, 80, 60, 76);
    context.stroke();
    context.globalAlpha = 1;
  });
}

function createBuildingTexture(asset: AssetDefinition, stage = 0, formCount = 5) {
  const globalAsset = getGlobalAssetForGameAsset(asset);
  const packStage = 1 + Math.round((stage / Math.max(1, formCount - 1)) * (globalAsset.stageCount - 1));
  const texture = new THREE.TextureLoader().load(globalAsset.stagePath(packStage));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

function createPlotTexture() {
  return canvasTexture(192, 128, (context) => {
    context.clearRect(0, 0, 192, 128);
    context.fillStyle = "rgba(238,226,201,.94)";
    context.beginPath();
    context.moveTo(27, 35);
    context.lineTo(164, 27);
    context.lineTo(174, 94);
    context.lineTo(39, 102);
    context.closePath();
    context.fill();
    context.fillStyle = "#70907d";
    context.fillRect(36, 36, 10, 55);
    context.fillStyle = "#fffaf0";
    context.beginPath();
    context.moveTo(46, 38);
    context.lineTo(94, 31);
    context.lineTo(88, 59);
    context.lineTo(46, 64);
    context.closePath();
    context.fill();
    context.fillStyle = "#52675b";
    context.font = "700 24px Georgia, serif";
    context.fillText("$", 59, 55);
  });
}

function worldDepthForFootY(footY: number, bias = 0) {
  return 18 - footY * 0.055 + bias;
}

function createWally() {
  const group = new THREE.Group();
  group.renderOrder = 20;
  const texture = createWallyTexture();
  const material = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: texture },
      walkAmount: { value: 0 },
      walkPhase: { value: 0 },
      breath: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      uniform float walkAmount;
      uniform float walkPhase;
      uniform float breath;
      void main() {
        vUv = uv;
        vec3 animated = position;
        float lowerBody = 1.0 - smoothstep(0.17, 0.51, uv.y);
        float legBlend = smoothstep(0.42, 0.58, uv.x);
        float legSide = mix(-1.0, 1.0, legBlend);
        float step = sin(walkPhase) * legSide * walkAmount;
        animated.x += step * lowerBody * 0.062;
        animated.y += max(0.0, step) * lowerBody * 0.032;
        float torsoSway = smoothstep(0.35, 0.78, uv.y) * walkAmount;
        animated.x -= sin(walkPhase) * torsoSway * 0.009;
        animated.y += breath * smoothstep(0.25, 0.9, uv.y) * 0.008;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(animated, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform sampler2D map;
      void main() {
        vec4 color = texture2D(map, vUv);
        if (color.a < 0.025) discard;
        gl_FragColor = color;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: true,
    depthTest: true,
  });
  const sprite = new THREE.Mesh(new THREE.PlaneGeometry(3.22, 3.22, 32, 32), material);
  sprite.position.set(0, 0.08, 0.04);
  sprite.renderOrder = 10;
  group.add(sprite);

  const shadowTexture = createWallyCastShadowTexture();
  const shadowMaterial = new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, opacity: 0.62, depthWrite: true, depthTest: true, alphaTest: 0.02 });
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.42, 0.58), shadowMaterial);
  shadow.scale.set(1, 1, 1);
  shadow.position.set(0.2, -0.99, 0);
  shadow.renderOrder = 9;
  group.add(shadow);
  return { group, sprite, shadow, material, textures: [texture, shadowTexture] };
}

function projectPosition(neighborhood: number, slot: number, total: number, index: number): XY {
  void total;
  void index;
  const center = NEIGHBORHOOD_CENTERS[neighborhood] ?? NEIGHBORHOOD_CENTERS[0];
  const layout = NEIGHBORHOOD_PLOT_OFFSETS[neighborhood] ?? NEIGHBORHOOD_PLOT_OFFSETS[0];
  const source = layout[slot % layout.length];
  return {
    x: center.x + source.x * NEIGHBORHOOD_LAYOUT_SCALE,
    y: center.y + source.y * NEIGHBORHOOD_LAYOUT_SCALE,
  };
}

function neighborhoodSignDimensions(neighborhood: (typeof NEIGHBORHOODS)[number]) {
  const width = 7.6;
  return { width, height: width / neighborhood.signAspect };
}

function tokenPosition(neighborhood: number, slot: number, index: number, pieceIndex: number): XY {
  const center = NEIGHBORHOOD_CENTERS[neighborhood] ?? NEIGHBORHOOD_CENTERS[0];
  const layout = NEIGHBORHOOD_PLOT_OFFSETS[neighborhood] ?? NEIGHBORHOOD_PLOT_OFFSETS[0];
  const sign = getNeighborhoodSignPoint(NEIGHBORHOODS[neighborhood] ?? NEIGHBORHOODS[0]);
  const ordinal = slot * 6 + pieceIndex;
  const goldenAngle = 2.399963229728653;
  for (let attempt = 0; attempt < 48; attempt += 1) {
    const sample = ordinal + attempt * 37 + index * 0.13;
    const angle = sample * goldenAngle + neighborhood * 0.61;
    const distance = 5.8 + ((ordinal * 7 + attempt * 5 + neighborhood * 3) % 12);
    const skewX = neighborhood === 3 ? 1.08 : neighborhood === 5 ? 1.12 : 1;
    const skewY = neighborhood === 2 || neighborhood === 6 ? 0.72 : neighborhood === 8 ? 0.78 : 0.88;
    const candidate = {
      x: center.x + Math.cos(angle) * distance * skewX,
      y: center.y + Math.sin(angle) * distance * skewY,
    };
    const blocksBuilding = layout.some((plot) => {
      const dx = (candidate.x - center.x - plot.x * NEIGHBORHOOD_LAYOUT_SCALE) / 4.7;
      const dy = (candidate.y - center.y - plot.y * NEIGHBORHOOD_LAYOUT_SCALE) / 3.7;
      return dx * dx + dy * dy < 1;
    });
    const blocksSign = Math.hypot(candidate.x - sign.x, candidate.y - sign.y) < 3.6;
    if (!blocksBuilding && !blocksSign && Math.hypot(candidate.x - center.x, candidate.y - center.y) > 3.4) {
      return candidate;
    }
  }
  const fallbackAngle = (ordinal + neighborhood * 3) * 2.399963229728653;
  return {
    x: center.x + Math.cos(fallbackAngle) * 15,
    y: center.y + Math.sin(fallbackAngle) * 13.5,
  };
}

function projectBuildingScale(asset: AssetDefinition, stage: number, formCount: number): number {
  const meta = getGlobalAssetForGameAsset(asset);
  const finishedScale = 0.76 + meta.visualScale * 0.7;
  const stageProgress = stage / Math.max(1, formCount - 1);
  return finishedScale * (0.72 + stageProgress * 0.28);
}

function buildingCollisionRadii(asset: AssetDefinition, stage: number, formCount: number): readonly [number, number] {
  const meta = getGlobalAssetForGameAsset(asset);
  const scale = projectBuildingScale(asset, stage, formCount);
  const sizeMultiplier = meta.sizeClass === "landmark" ? 1.16 : meta.sizeClass === "large" ? 1.08 : 1;
  return [2.05 * scale * sizeMultiplier + 0.42, 1.26 * scale * sizeMultiplier + 0.38];
}

function buildingCollisionYOffset(asset: AssetDefinition, stage: number, formCount: number): number {
  return -0.62 * projectBuildingScale(asset, stage, formCount);
}

function buildingFootY(asset: AssetDefinition, stage: number, formCount: number, plotY: number) {
  const radii = buildingCollisionRadii(asset, stage, formCount);
  return plotY + buildingCollisionYOffset(asset, stage, formCount) - radii[1];
}

function directionName(x: number, y: number): FacingDirection {
  const angle = Math.atan2(y, x);
  const octant = Math.round(angle / (Math.PI / 4));
  return (["e", "ne", "n", "nw", "w", "sw", "s", "se"] as FacingDirection[])[(octant + 8) % 8];
}

export default function WallyWorldGame() {
  const mountRef = useRef<HTMLDivElement>(null);
  const joystickInput = useRef({ x: 0, y: 0, active: false, pointerId: -1, originX: 0, originY: 0 });
  const pausedRef = useRef(false);
  const soundRef = useRef(true);
  const [paused, setPaused] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [ready, setReady] = useState(false);
  const [hud, setHud] = useState({ budget: 0 });
  const [reserveCount, setReserveCount] = useState(0);
  const [restartConfirm, setRestartConfirm] = useState(false);
  const [exchangePanel, setExchangePanel] = useState<ExchangePanelSnapshot | null>(null);
  const [landOffer, setLandOffer] = useState<LandOfferSnapshot | null>(null);
  const [completionMessageVisible, setCompletionMessageVisible] = useState(false);
  const purchaseExchangeRef = useRef<(assetId: ExchangeAssetId) => void>(() => undefined);
  const purchaseLandRef = useRef<(assetId: AssetId) => void>(() => undefined);
  const dismissCompletionRef = useRef<() => void>(() => undefined);
  const exchangeDismissedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    soundRef.current = soundOn;
  }, [soundOn]);

  const initializeSoundRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let animationFrame = 0;
    let lastFrame = performance.now();
    let lastHudUpdate = 0;
    let lastSave = 0;
    let lastTrailDrop = 0;
    let lastMapUpdate = 0;
    let exchangePanelShown = false;
    let lastExchangePanelUpdate = 0;
    let exchangeAutoOpenUntil = 0;
    let activeLandOfferKey = "";
    let completionMessageQueued = false;
    let completionMessageOpen = false;
    const keys = new Set<string>();
    const tapTarget: { value: XY | null } = { value: null };
    const trail: Array<XY & { born: number }> = [];
    const pulses: PulseFx[] = [];
    const particles: ParticleFx[] = [];
    const birds: BirdFx[] = [];
    let state = loadGameState();
    if (isExchangeOpen(state)) exchangeAutoOpenUntil = performance.now() + 6500;
    const stateRef = { current: state };
    const neighborhoodGroups = createNeighborhoodAssetGroups();
    const neighborhoodByAsset = new Map<string, number>();
    neighborhoodGroups.forEach((assets, neighborhood) => assets.forEach((asset) => neighborhoodByAsset.set(asset.id, neighborhood)));
    const neighborhoodMembers = neighborhoodGroups.map((assets) => [...assets]);
    const completedNeighborhoodIds = (gameState: GameState) => getCompletedNeighborhoodIds(gameState, neighborhoodGroups);
    const unlockedNeighborhoodIds = (gameState: GameState) => getUnlockedNeighborhoodIds(completedNeighborhoodIds(gameState));
    const initialCompletedNeighborhoodIds = completedNeighborhoodIds(state);
    const knownCompletedNeighborhoodIds = new Set<NeighborhoodId>(initialCompletedNeighborhoodIds);
    let lastUnlockedNeighborhoodIds = unlockedNeighborhoodIds(state);
    let activeWorldPeriod: WorldPoint = getActiveWorldPeriod(lastUnlockedNeighborhoodIds);
    const revealedNeighborhoods = new Set<number>(lastUnlockedNeighborhoodIds);
    const celebrationWindows = new Map<number, { until: number; nextBurst: number }>();
    let ambientBirdSequence = 0;
    let nextAmbientBirdAt = performance.now() + 8_000 + (state.town.worldSeed % 5_000);
    let audio: AudioEngine | null = null;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0xffffff, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "wally-canvas";
    renderer.domElement.setAttribute("aria-label", "WALLY WORLD living town");
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff");
    scene.fog = new THREE.FogExp2("#ffffff", 0.0038);
    const daySky = new THREE.Color("#fffdf7");
    const duskSky = new THREE.Color("#d9d7e8");
    const nightSky = new THREE.Color("#243248");
    const atmosphereColor = new THREE.Color();
    const daySurface = new THREE.Color("#ffffff");
    const nightSurface = new THREE.Color("#8ea1b5");

    const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 500);
    camera.position.set(state.wallyPosition.x, state.wallyPosition.z + 2, 100);
    camera.lookAt(camera.position.x, camera.position.y, 0);

    const groundTexture = createGroundTexture();
    const initialDevelopment = Math.min(1, state.completedAssetIds.length / 10);
    const groundMaterial = new THREE.MeshBasicMaterial({
      map: groundTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.025 + initialDevelopment * 0.975,
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE), groundMaterial);
    ground.position.z = -6;
    scene.add(ground);

    const tempMatrix = new THREE.Matrix4();
    const sproutTexture = createSproutTexture();
    const sproutMaterial = new THREE.MeshBasicMaterial({ map: sproutTexture, transparent: true, depthWrite: false, alphaTest: 0.04, opacity: 0.06 + initialDevelopment * 0.94 });
    const sproutGeometry = new THREE.PlaneGeometry(0.72, 0.72);
    const sprouts = new THREE.InstancedMesh(sproutGeometry, sproutMaterial, 320);
    sprouts.frustumCulled = false;
    sprouts.visible = false;
    const sproutRandom = seeded(state.town.worldSeed ^ 0x7f4b);
    const sproutColors = ["#ffffff", "#f2d9c8", "#d6e0c4", "#d9d0e7"];
    const sproutInstances: SceneryInstance[] = [];
    for (let index = 0; index < 320; index += 1) {
      const near = index < 230;
      const range = near ? 28 : 135;
      let x = (sproutRandom() - 0.5) * range * 2;
      let y = (sproutRandom() - 0.5) * range * 2;
      if (Math.hypot(x, y) < 3) {
        x += x < 0 ? -3 : 3;
        y += y < 0 ? -2 : 2;
      }
      const scale = 0.48 + sproutRandom() * 0.7;
      const sproutInstance = { x, y, z: -2.6, scale };
      sproutInstances.push(sproutInstance);
      tempMatrix.compose(
        new THREE.Vector3(sproutInstance.x, sproutInstance.y, sproutInstance.z),
        new THREE.Quaternion(),
        new THREE.Vector3(scale, scale, 1),
      );
      sprouts.setMatrixAt(index, tempMatrix);
      sprouts.setColorAt(index, new THREE.Color(sproutColors[Math.floor(sproutRandom() * sproutColors.length)]));
    }
    sprouts.instanceColor!.needsUpdate = true;
    scene.add(sprouts);

    const neighborhoodConfig = {
      tileSize: 240,
      worldSeed: state.town.worldSeed ^ 0x2f98,
      rebaseDistance: 480,
      tileViewRadius: 1,
    };
    const neighborhoodScale = 0.1;
    const neighborhoodPeriod = neighborhoodConfig.tileSize * neighborhoodScale * 3;
    const neighborhoodKinds: NeighborhoodPropKind[] = [
      "tree", "flower-bed", "bench", "lamp", "planter", "bicycle", "notice-board",
    ];
    const initialUnlockedNeighborhoods = new Set(lastUnlockedNeighborhoodIds);
    const generatedProps = new Map<NeighborhoodPropKind, NeighborhoodPropInstance[]>();
    neighborhoodKinds.forEach((kind) => generatedProps.set(kind, []));
    const generatedTiles: Array<SceneryInstance & { rotation: number; tile: NeighborhoodTile }> = [];
    for (let tileY = -1; tileY <= 1; tileY += 1) {
      for (let tileX = -1; tileX <= 1; tileX += 1) {
        const tile = createNeighborhoodTile({ x: tileX, y: tileY }, neighborhoodConfig);
        generatedTiles.push({
          tile,
          x: (tileX * neighborhoodConfig.tileSize + neighborhoodConfig.tileSize * 0.5) * neighborhoodScale,
          y: (tileY * neighborhoodConfig.tileSize + neighborhoodConfig.tileSize * 0.5) * neighborhoodScale,
          z: -4.15,
          scale: 1,
          rotation: 0,
        });
      }
    }

    const themedKinds: readonly (readonly NeighborhoodPropKind[])[] = [
      ["flower-bed", "bench", "planter", "notice-board"],
      ["tree", "flower-bed", "bench", "bicycle"],
      ["planter", "lamp", "tree", "notice-board"],
      ["lamp", "bench", "notice-board", "planter"],
      ["tree", "planter", "flower-bed", "bench"],
      ["tree", "notice-board", "lamp", "planter"],
      ["lamp", "flower-bed", "bench", "planter"],
      ["tree", "bench", "flower-bed", "bicycle"],
      ["lamp", "flower-bed", "bench", "planter"],
      ["planter", "lamp", "bicycle", "bench"],
    ];
    const propRandom = seeded(state.town.worldSeed ^ 0x4a71c9);
    NEIGHBORHOODS.forEach((neighborhood, neighborhoodIndex) => {
      const occupied: Array<{ x: number; y: number; radius: number }> = [];
      const reserved: Array<{ x: number; y: number; radiusX: number; radiusY: number }> = [];
      const members = neighborhoodMembers[neighborhoodIndex] ?? [];
      members.forEach((asset, assetIndex) => {
        const plot = projectPosition(neighborhoodIndex, assetIndex, members.length, assetIndex);
        const formCount = assetFormCount(asset);
        const finalStage = formCount - 1;
        const radii = buildingCollisionRadii(asset, finalStage, formCount);
        reserved.push({
          x: plot.x,
          y: plot.y + buildingCollisionYOffset(asset, finalStage, formCount),
          radiusX: radii[0] + 1.5,
          radiusY: radii[1] + 1.35,
        });
      });
      const signPoint = getNeighborhoodSignPoint(neighborhood);
      const signDimensions = neighborhoodSignDimensions(neighborhood);
      reserved.push({
        x: signPoint.x,
        y: signPoint.y,
        radiusX: signDimensions.width * 0.5 + 1.2,
        radiusY: signDimensions.height * 0.42 + 1.1,
      });
      reserved.push({ x: neighborhood.center.x, y: neighborhood.center.y - 1.8, radiusX: 4.4, radiusY: 3.2 });
      if (neighborhoodIndex === 0) {
        reserved.push({ x: 0, y: -18.5, radiusX: 6.2, radiusY: 6.2 });
      }
      const choices = themedKinds[neighborhoodIndex] ?? neighborhoodKinds;
      let placed = 0;
      for (let attempt = 0; attempt < 220 && placed < 14; attempt += 1) {
        const angle = propRandom() * Math.PI * 2;
        const radius = 4.8 + Math.sqrt(propRandom()) * 10.8;
        const x = neighborhood.center.x + Math.cos(angle) * radius;
        const y = neighborhood.center.y + Math.sin(angle) * radius * 0.9;
        const kind = choices[(placed + attempt + neighborhoodIndex) % choices.length];
        const scale = (kind === "tree" ? 0.86 : 0.62) + propRandom() * (kind === "tree" ? 0.24 : 0.18);
        const spacingRadius = (kind === "tree" || kind === "bench" || kind === "bicycle" ? 1.15 : 0.86) * scale;
        const blocked = reserved.some((zone) => {
          const dx = (x - zone.x) / (zone.radiusX + spacingRadius);
          const dy = (y - zone.y) / (zone.radiusY + spacingRadius);
          return dx * dx + dy * dy < 1;
        }) || occupied.some((item) => Math.hypot(x - item.x, y - item.y) < item.radius + spacingRadius + 0.48);
        if (blocked) continue;
        occupied.push({ x, y, radius: spacingRadius });
        generatedProps.get(kind)?.push({
          x,
          y,
          canonicalX: x,
          canonicalY: y,
          neighborhood: neighborhoodIndex,
          z: worldDepthForFootY(y - (kind === "tree" || kind === "lamp" ? 1.38 : 0.9) * scale, -0.16),
          scale,
          rotation: (propRandom() - 0.5) * 0.16,
        });
        placed += 1;
      }
    });

    const environmentPropLoader = new THREE.TextureLoader();
    const neighborhoodTextures = new Map<NeighborhoodPropKind, THREE.Texture>();
    const neighborhoodPropPools = neighborhoodKinds.map((kind) => {
      const instances = generatedProps.get(kind) ?? [];
      const texture = environmentPropLoader.load(getUniversalEnvironmentPropPath(kind));
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      neighborhoodTextures.set(kind, texture);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: true, depthTest: true, alphaTest: 0.035, opacity: 0.05 + initialDevelopment * 0.95 });
      const width = kind === "bench" || kind === "bicycle" ? 2.25 : 1.72;
      const height = kind === "tree" || kind === "lamp" ? 2.75 : 2.12;
      const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(width, height), material, instances.length);
      mesh.frustumCulled = false;
      // Retained only as a lightweight texture source for per-asset flourishes.
      // World scenery now uses the supplied scored-paper prop pack exclusively.
      mesh.visible = false;
      instances.forEach((instance, index) => {
        const initialScale = initialUnlockedNeighborhoods.has(instance.neighborhood as NeighborhoodId) ? instance.scale : 0;
        tempMatrix.compose(
          new THREE.Vector3(instance.x, instance.y, instance.z),
          new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), instance.rotation),
          new THREE.Vector3(initialScale, initialScale, 1),
        );
        mesh.setMatrixAt(index, tempMatrix);
      });
      scene.add(mesh);
      return { mesh, instances, kind };
    });

    const neighborhoodTileTextures: THREE.Texture[] = [];
    const neighborhoodTileVisuals = generatedTiles.map((instance) => {
      const texture = createNeighborhoodTileTexture(instance.tile, neighborhoodConfig.tileSize);
      neighborhoodTileTextures.push(texture);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(neighborhoodConfig.tileSize * neighborhoodScale, neighborhoodConfig.tileSize * neighborhoodScale),
        new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, opacity: 0.035 + initialDevelopment * 0.965 }),
      );
      mesh.position.set(instance.x, instance.y, instance.z);
      mesh.renderOrder = 1;
      mesh.visible = false;
      scene.add(mesh);
      return { mesh, instance };
    });

    const neighborhoodPatchTextures = NEIGHBORHOOD_CENTERS.map((_, index) => createNeighborhoodPatchTexture(index));
    const initialCompletedNeighborhoods = new Set(initialCompletedNeighborhoodIds);
    const neighborhoodChapterVisuals = NEIGHBORHOOD_CENTERS.map((center, index) => {
      const material = new THREE.MeshBasicMaterial({
        map: neighborhoodPatchTextures[index],
        transparent: true,
        depthWrite: false,
        opacity: initialUnlockedNeighborhoods.has(index as NeighborhoodId)
          ? (initialCompletedNeighborhoods.has(index as NeighborhoodId) ? 0.94 : 0.28)
          : 0,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), material);
      mesh.position.set(center.x, center.y, -5.2);
      mesh.renderOrder = 1;
      scene.add(mesh);
      return { mesh, center: { ...center }, canonicalCenter: { ...center }, index };
    });

    const neighborhoodSignVisuals = NEIGHBORHOODS.map((neighborhood) => {
      const progress = getNeighborhoodProgress(stateRef.current, neighborhoodGroups[neighborhood.id]);
      const texture = createNeighborhoodSignTexture(neighborhood, progress);
      const signDimensions = neighborhoodSignDimensions(neighborhood);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(signDimensions.width, signDimensions.height),
        new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: true, depthTest: true, alphaTest: 0.025, opacity: 0 }),
      );
      const signPoint = getNeighborhoodSignPoint(neighborhood);
      const canonical = { x: signPoint.x, y: signPoint.y };
      mesh.position.set(canonical.x, canonical.y, worldDepthForFootY(canonical.y - signDimensions.height * 0.5, 0.02));
      mesh.renderOrder = 10;
      scene.add(mesh);
      return { mesh, texture, canonical, neighborhood, stage: Math.min(5, Math.max(1, Math.ceil(progress * 5))) };
    });

    const initialDistrictProgress = NEIGHBORHOODS.map((neighborhood) => (
      getNeighborhoodProgress(stateRef.current, neighborhoodGroups[neighborhood.id])
    ));
    const worldPlanetTexture = createWorldPlanetTexture(initialDistrictProgress);
    const worldPlanet = new THREE.Mesh(
      new THREE.PlaneGeometry(10.5, 10.5),
      new THREE.MeshBasicMaterial({ map: worldPlanetTexture, transparent: true, depthWrite: false }),
    );
    const worldPlanetCanonical = { x: 0, y: -18.5 };
    worldPlanet.position.set(worldPlanetCanonical.x, worldPlanetCanonical.y, -4.75);
    worldPlanet.renderOrder = 2;
    scene.add(worldPlanet);
    let lastLandmarkSignature = initialDistrictProgress.map((value) => Math.round(value * 20)).join(":");

    const crowdTones = [1.28, 1.12, 0.98, 0.84, 0.7, 0.57, 0.45, 0.33];
    const crowdTextures = crowdTones.map((tone) => createGrayscaleCrowdTexture(tone));
    const crowdLifeTargets = CROWD_LIFE_COLORS.map((color) => new THREE.Color(color));
    const crowdTint = new THREE.Color();
    const crowdWhite = new THREE.Color("#ffffff");
    const crowdGeometry = new THREE.PlaneGeometry(1.15, 1.75);
    const crowdMeshes = crowdTextures.map((texture) => {
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: true, depthTest: true, alphaTest: 0.04 });
      const mesh = new THREE.InstancedMesh(crowdGeometry, material, CROWD_COUNT / crowdTextures.length);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.renderOrder = 10;
      scene.add(mesh);
      return mesh;
    });
    const crowd: CrowdPerson[] = [];
    const crowdRandom = seeded(state.town.crowdSeed);
    const peoplePerNeighborhood = CROWD_COUNT / NEIGHBORHOOD_CENTERS.length;
    for (let index = 0; index < CROWD_COUNT; index += 1) {
      const neighborhood = Math.min(
        NEIGHBORHOOD_CENTERS.length - 1,
        Math.floor(index / peoplePerNeighborhood),
      );
      const center = NEIGHBORHOOD_CENTERS[neighborhood];
      const localIndex = index - neighborhood * peoplePerNeighborhood;
      const layout = NEIGHBORHOOD_PLOT_OFFSETS[neighborhood] ?? NEIGHBORHOOD_PLOT_OFFSETS[0];
      const from = layout[localIndex % layout.length];
      const to = layout[(localIndex * 3 + 2) % layout.length];
      const route = 0.16 + crowdRandom() * 0.68;
      const lateral = (crowdRandom() - 0.5) * 2.2;
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const routeLength = Math.max(0.01, Math.hypot(dx, dy));
      const x = center.x + THREE.MathUtils.lerp(from.x, to.x, route) * NEIGHBORHOOD_LAYOUT_SCALE - (dy / routeLength) * lateral;
      const y = center.y + THREE.MathUtils.lerp(from.y, to.y, route) * NEIGHBORHOOD_LAYOUT_SCALE + (dx / routeLength) * lateral;
      const variant = index % crowdMeshes.length;
      const slot = Math.floor(index / crowdMeshes.length);
      crowd.push({
        x, y, canonicalHomeX: x, canonicalHomeY: y, homeX: x, homeY: y,
        size: 0.72 + crowdRandom() * 0.3,
        phase: crowdRandom() * Math.PI * 2,
        drift: crowdRandom(),
        variant,
        slot,
        neighborhood,
        passed: false,
        greetingEligible: ((Math.imul(index + 1, 29) + state.town.crowdSeed) >>> 0) % 17 === 0,
        greeted: false,
        active: false,
        arrivalOrder: (localIndex * 17 + neighborhood * 7) % peoplePerNeighborhood,
      });
      crowdMeshes[variant].setColorAt(slot, new THREE.Color("#ffffff"));
      tempMatrix.compose(
        new THREE.Vector3(x, y, 4),
        new THREE.Quaternion(),
        new THREE.Vector3(0, 0, 1),
      );
      crowdMeshes[variant].setMatrixAt(slot, tempMatrix);
    }
    crowdMeshes.forEach((mesh) => {
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    });

    let nextGreetingAllowedAt = performance.now() + 10_000;
    let activeGreeting: {
      mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
      texture: THREE.Texture;
      person: CrowdPerson;
      born: number;
      duration: number;
    } | null = null;
    const dismissCrowdGreeting = () => {
      if (!activeGreeting) return;
      scene.remove(activeGreeting.mesh);
      activeGreeting.texture.dispose();
      activeGreeting.mesh.geometry.dispose();
      activeGreeting.mesh.material.dispose();
      activeGreeting = null;
    };
    const showCrowdGreeting = (person: CrowdPerson, message: string, now: number) => {
      dismissCrowdGreeting();
      const texture = createCrowdGreetingTexture(message);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(6.6, 1.92),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
          depthTest: false,
          opacity: 0,
        }),
      );
      mesh.renderOrder = 30;
      scene.add(mesh);
      activeGreeting = { mesh, texture, person, born: now, duration: 3_350 };
    };

    const ambientActivityTextures = {
      ball: createAmbientActivityTexture("ball"),
      dog: createAmbientActivityTexture("dog"),
      newspaper: createAmbientActivityTexture("newspaper"),
    };
    const vignetteKinds: AmbientVignette["kind"][] = ["soccer", "family", "fetch", "reader"];
    const ambientVignettes: AmbientVignette[] = NEIGHBORHOODS.map((neighborhood, neighborhoodIndex) => {
      const kind = vignetteKinds[neighborhoodIndex % vignetteKinds.length];
      const canonical = {
        x: neighborhood.center.x + (neighborhoodIndex % 2 === 0 ? -0.8 : 1.1),
        y: neighborhood.center.y - 1.8,
      };
      const group = new THREE.Group();
      group.position.set(canonical.x, canonical.y, 0);
      group.visible = false;
      const actors: AmbientVignette["actors"] = [];
      const props: AmbientVignette["props"] = [];
      const actorPositions = kind === "family"
        ? [[-1.65, 0], [0, 0.62], [1.55, -0.05]]
        : kind === "reader"
          ? [[0, 0.22]]
          : [[-2, 0], [2, 0]];
      actorPositions.forEach(([x, y], actorIndex) => {
        const material = new THREE.MeshBasicMaterial({
          map: crowdTextures[(actorIndex + neighborhoodIndex * 2) % crowdTextures.length],
          color: "#e7e7e3",
          transparent: true,
          depthWrite: true,
          depthTest: true,
          alphaTest: 0.04,
        });
        const actor = new THREE.Mesh(new THREE.PlaneGeometry(1.02, 1.58), material);
        actor.position.set(x, y, worldDepthForFootY(canonical.y + y - 0.79, 0.025));
        actor.renderOrder = 10;
        actors.push(actor);
        group.add(actor);
      });
      const addProp = (texture: THREE.Texture, width: number, height: number, x = 0, y = 0) => {
        const prop = new THREE.Mesh(
          new THREE.PlaneGeometry(width, height),
          new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: true, depthTest: true, alphaTest: 0.035 }),
        );
        prop.position.set(x, y, worldDepthForFootY(canonical.y + y - height * 0.5, 0.04));
        prop.renderOrder = 10;
        props.push(prop);
        group.add(prop);
        return prop;
      };
      if (kind === "soccer" || kind === "family") addProp(ambientActivityTextures.ball, 0.48, 0.48);
      if (kind === "fetch") {
        addProp(ambientActivityTextures.dog, 1.18, 0.9, 0, -0.08);
        addProp(ambientActivityTextures.ball, 0.42, 0.42, 1.85, -0.18);
      }
      if (kind === "reader") {
        const benchTexture = neighborhoodTextures.get("bench");
        if (benchTexture) addProp(benchTexture, 2.3, 1.28, 0, -0.45);
        addProp(ambientActivityTextures.newspaper, 0.72, 0.72, 0.05, 0.32);
      }
      scene.add(group);
      return { group, canonical, neighborhood: neighborhoodIndex, kind, actors, props };
    });

    const plotTexture = createPlotTexture();
    const plotMaterialBase = new THREE.MeshBasicMaterial({ map: plotTexture, transparent: true, depthWrite: false });
    const tokenGeometry = new THREE.PlaneGeometry(1.68, 1.68);
    const townAssets: readonly AssetDefinition[] = [...neighborhoodGroups.flat()];
    const tokenTextures = new Map<AssetId, THREE.Texture>();
    townAssets.forEach((asset) => {
      const neighborhood = neighborhoodByAsset.get(asset.id) ?? 0;
      if (initialUnlockedNeighborhoods.has(neighborhood as NeighborhoodId)) {
        tokenTextures.set(asset.id as AssetId, createTokenTexture(asset));
      }
    });
    const onReLogoTexture = new THREE.TextureLoader().load("/assets/onre-logo.jpg");
    onReLogoTexture.colorSpace = THREE.SRGBColorSpace;
    onReLogoTexture.minFilter = THREE.LinearFilter;
    onReLogoTexture.magFilter = THREE.LinearFilter;
    onReLogoTexture.generateMipmaps = false;
    const numberTextures = new Map<string, THREE.Texture>();
    const getNumberTexture = (value: number, category: AssetCategory) => {
      const key = `${category}:${value}`;
      let texture = numberTextures.get(key);
      if (!texture) {
        texture = createNumberTexture(value, CATEGORY_COLORS[category]);
        numberTextures.set(key, texture);
      }
      return texture;
    };

    const projects: ProjectVisual[] = [];
    townAssets.forEach((asset, index) => {
      const neighborhood = neighborhoodByAsset.get(asset.id) ?? 0;
      const members = neighborhoodMembers[neighborhood];
      const placementSlot = Math.max(0, members.findIndex((member) => member.id === asset.id));
      const crowdMembers = members.filter((member) => member.discovery === "crowd");
      const crowdSlot = crowdMembers.findIndex((member) => member.id === asset.id);
      const plot = projectPosition(neighborhood, placementSlot, members.length, index);
      const progress = getAssetProgress(stateRef.current, asset.id as AssetId);
      const remaining = getRemainingPieces(stateRef.current, asset.id as AssetId);
      const formCount = assetFormCount(asset);
      const neighborhoodAvailable = initialUnlockedNeighborhoods.has(neighborhood as NeighborhoodId);
      const flowAvailable = crowdProjectFlowAvailable(stateRef.current, asset, members);
      const landOwned = asset.discovery !== "crowd" || isPlotOwned(stateRef.current, asset.id as AssetId);
      const landPrice = getLandPlotPrice(neighborhood, Math.max(0, crowdSlot));
      const unlocked = flowAvailable && landOwned;
      const tokenMaterial = new THREE.MeshBasicMaterial({
        map: tokenTextures.get(asset.id as AssetId) ?? null,
        transparent: true,
        depthWrite: false,
        alphaTest: 0.025,
      });
      const tokens: ProjectTokenVisual[] = [];
      for (let pieceIndex = 0; pieceIndex < asset.requiredPieces; pieceIndex += 1) {
        const tokenAt = tokenPosition(neighborhood, Math.max(0, crowdSlot), index, pieceIndex);
        const token = new THREE.Mesh(tokenGeometry, tokenMaterial);
        token.position.set(tokenAt.x, tokenAt.y, 7 + pieceIndex * 0.001);
        token.renderOrder = 14;
        token.visible = neighborhoodAvailable
          && asset.discovery === "crowd"
          && unlocked
          && !isWorldTokenCollected(stateRef.current, asset.id as AssetId, pieceIndex)
          && (asset.id !== "hidden-stock-exchange" || isExchangeRevealEligible(stateRef.current));
        scene.add(token);
        tokens.push({ mesh: token, canonical: { ...tokenAt }, pieceIndex });
      }

      let building: ProjectVisual["building"];
      let plotHalo: ProjectVisual["plotHalo"];
      let remainingLabel: ProjectVisual["remainingLabel"];
      let branding: ProjectVisual["branding"];
      let constructionTexture: ProjectVisual["constructionTexture"];
      let constructionStage: ProjectVisual["constructionStage"];
      let improvementGroup: ProjectVisual["improvementGroup"];
      const improvements: ProjectVisual["improvements"] = [];
      let activity: ProjectVisual["activity"];
      let activityKind: ProjectVisual["activityKind"] = "lights";
      if (index < VISIBLE_BUILDINGS) {
        const haloMaterial = plotMaterialBase.clone();
        const globalAsset = getGlobalAssetForGameAsset(asset);
        const footprintScale = Math.max(0.9, Math.min(1.25, 0.72 + globalAsset.visualScale * 0.42));
        plotHalo = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 3.2), haloMaterial);
        plotHalo.scale.set(footprintScale, footprintScale, 1);
        plotHalo.position.set(plot.x, plot.y - 0.35, -0.3);
        scene.add(plotHalo);

        constructionStage = visualStageForProgress(progress, asset.requiredPieces, formCount);
        constructionTexture = neighborhoodAvailable
          ? createBuildingTexture(asset, constructionStage, formCount)
          : canvasTexture(2, 2, (context) => context.clearRect(0, 0, 2, 2));
        const buildingTexture = constructionTexture;
        const material = new THREE.MeshBasicMaterial({
          map: buildingTexture,
          transparent: true,
          depthWrite: true,
          depthTest: true,
          alphaTest: 0.025,
          color: "#ffffff",
          opacity: 1,
        });
        building = new THREE.Mesh(new THREE.PlaneGeometry(5.35, 5.35), material);
        const buildingScale = projectBuildingScale(asset, constructionStage, formCount);
        building.scale.set(buildingScale, buildingScale, 1);
        building.position.set(
          plot.x,
          plot.y + 0.72 * buildingScale,
          worldDepthForFootY(buildingFootY(asset, constructionStage, formCount, plot.y)),
        );
        building.renderOrder = 10;
        scene.add(building);

        improvementGroup = new THREE.Group();
        improvementGroup.position.set(plot.x, plot.y, worldDepthForFootY(plot.y - 1.1, 0.03));
        const improvementKinds: NeighborhoodPropKind[] = ["flower-bed", "planter", "lamp", "bench", "tree", "notice-board", "bicycle"];
        for (let improvementIndex = 0; improvementIndex < asset.requiredPieces; improvementIndex += 1) {
          const kind = improvementKinds[(improvementIndex + index) % improvementKinds.length];
          const texture = neighborhoodTextures.get(kind);
          if (!texture) continue;
          const propSize = kind === "tree" ? 2.2 : kind === "lamp" ? 1.65 : 1.35;
          const improvement = new THREE.Mesh(
            new THREE.PlaneGeometry(propSize, propSize),
            new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: true, depthTest: true, alphaTest: 0.03 }),
          );
          const angle = improvementIndex * 2.39996 + index * 0.33;
          const radius = 2.95 * buildingScale + (improvementIndex % 3) * 0.62;
          improvement.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.68, improvementIndex * 0.002);
          improvement.rotation.z = Math.sin(angle) * 0.08;
          improvement.visible = improvementIndex < progress;
          improvement.renderOrder = 7;
          improvementGroup.add(improvement);
          improvements.push(improvement);
        }
        scene.add(improvementGroup);

        const activityVisual = createAssetActivityVisual(asset, index);
        activity = activityVisual.group;
        activityKind = activityVisual.kind;
        activity.position.set(plot.x, plot.y + 3.15 * buildingScale, worldDepthForFootY(buildingFootY(asset, constructionStage, formCount, plot.y), 0.06));
        activity.visible = remaining === 0;
        scene.add(activity);

        if (asset.id === "onre-reinsurance") {
          branding = new THREE.Mesh(
            new THREE.PlaneGeometry(2.25, 0.7),
            new THREE.MeshBasicMaterial({ map: onReLogoTexture, transparent: true, depthWrite: true, depthTest: true, alphaTest: 0.025 }),
          );
          branding.position.set(plot.x, plot.y + 1.42 * buildingScale, worldDepthForFootY(buildingFootY(asset, constructionStage, formCount, plot.y), 0.05));
          branding.scale.set(buildingScale, buildingScale, 1);
          branding.visible = progress > 0;
          branding.renderOrder = 13;
          scene.add(branding);
        }

        const labelMaterial = new THREE.MeshBasicMaterial({
          map: getNumberTexture(remaining, asset.category),
          transparent: true,
          depthWrite: true,
          depthTest: true,
          alphaTest: 0.025,
        });
        remainingLabel = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 1.05), labelMaterial);
        remainingLabel.position.set(plot.x, plot.y + 4.15, worldDepthForFootY(buildingFootY(asset, constructionStage, formCount, plot.y), 0.08));
        remainingLabel.visible = progress > 0 && remaining > 0;
        remainingLabel.renderOrder = 18;
        scene.add(remainingLabel);
      }

      if (building) building.visible = neighborhoodAvailable && landOwned && (asset.discovery !== "exchange-exclusive" || isExchangeOpen(stateRef.current) || progress > 0);
      if (plotHalo) plotHalo.visible = neighborhoodAvailable && asset.discovery === "crowd" && flowAvailable && !landOwned;
      if (branding) branding.visible = neighborhoodAvailable && progress > 0;
      if (improvementGroup) improvementGroup.visible = neighborhoodAvailable && landOwned;
      projects.push({
        asset,
        plot,
        canonicalPlot: { ...plot },
        tokens,
        building,
        plotHalo,
        remainingLabel,
        branding,
        constructionTexture,
        constructionStage,
        formCount,
        neighborhood,
        slot: crowdSlot,
        flowAvailable,
        landOwned,
        landPrice,
        improvementGroup,
        improvements,
        activity,
        activityKind,
        unlocked,
        pulsePhase: index * 0.9,
        walkRevealArmed: false,
        artLoaded: neighborhoodAvailable,
        tokenTextureLoaded: neighborhoodAvailable,
      });
    });
    const projectsByNeighborhood = NEIGHBORHOODS.map((neighborhood) => (
      projects.filter((project) => project.neighborhood === neighborhood.id)
    ));
    const paperPropLoader = new THREE.TextureLoader();
    const paperPropVisuals: PaperPropVisual[] = [];
    const paperPropRevealSteps = [1, 1, 2, 3, 4, 5, 6, 7] as const;
    NEIGHBORHOODS.forEach((neighborhood, neighborhoodIndex) => {
      const occupied: Array<{ x: number; y: number; radiusX: number; radiusY: number }> = [];
      const files = NEIGHBORHOOD_PROP_FILES[neighborhoodIndex] ?? [];
      files.forEach((file, propIndex) => {
        const isLarge = /fountain|bridge|canopy|gazebo|subway|mural|hammock|tree|cable_car/.test(file);
        const baseScale = (isLarge ? 1.12 : 0.88) + ((propIndex + neighborhoodIndex) % 3) * 0.055;
        const radiusX = (isLarge ? 1.58 : 1.08) * baseScale;
        const radiusY = (isLarge ? 1.16 : 0.82) * baseScale;
        let canonical: XY | undefined;
        for (let attempt = 0; attempt < 96 && !canonical; attempt += 1) {
          const sampleX = ((propIndex + 1) * 0.61803398875 + attempt * 0.41421356237 + neighborhoodIndex * 0.137) % 1;
          const sampleY = ((propIndex + 1) * 0.7548776662 + attempt * 0.36787944117 + neighborhoodIndex * 0.211) % 1;
          const candidate = {
            x: neighborhood.center.x + (sampleX - 0.5) * 35.5,
            y: neighborhood.center.y + (sampleY - 0.5) * 32,
          };
          if (Math.hypot(candidate.x - neighborhood.center.x, candidate.y - neighborhood.center.y) < 4.5) continue;
          const blocksProject = (projectsByNeighborhood[neighborhoodIndex] ?? []).some((project) => {
            const finalStage = project.formCount - 1;
            const radii = buildingCollisionRadii(project.asset, finalStage, project.formCount);
            const dx = (candidate.x - project.canonicalPlot.x) / (radii[0] + radiusX + 1.05);
            const dy = (candidate.y - project.canonicalPlot.y - buildingCollisionYOffset(project.asset, finalStage, project.formCount))
              / (radii[1] + radiusY + 0.9);
            return dx * dx + dy * dy < 1;
          });
          if (blocksProject) continue;
          const sign = neighborhoodSignVisuals[neighborhoodIndex];
          if (sign) {
            const signDx = Math.abs(candidate.x - sign.canonical.x);
            const signDy = Math.abs(candidate.y - sign.canonical.y);
            if (
              signDx < sign.mesh.geometry.parameters.width * 0.5 + radiusX + 0.8
              && signDy < sign.mesh.geometry.parameters.height * 0.42 + radiusY + 0.65
            ) continue;
          }
          if (neighborhoodIndex === 0 && Math.hypot(candidate.x, candidate.y + 18.5) < 7) continue;
          if (occupied.some((item) => {
            const dx = (candidate.x - item.x) / (radiusX + item.radiusX + 0.7);
            const dy = (candidate.y - item.y) / (radiusY + item.radiusY + 0.55);
            return dx * dx + dy * dy < 1;
          })) continue;
          canonical = candidate;
        }
        if (!canonical) return;
        occupied.push({ ...canonical, radiusX, radiusY });
        const material = new THREE.MeshBasicMaterial({
          transparent: true,
          depthWrite: true,
          depthTest: true,
          alphaTest: 0.035,
          opacity: 0,
        });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 2.9), material);
        mesh.position.set(
          canonical.x,
          canonical.y,
          worldDepthForFootY(canonical.y - 1.18 * baseScale, -0.04),
        );
        mesh.scale.setScalar(0.01);
        mesh.visible = false;
        mesh.renderOrder = 9;
        scene.add(mesh);
        paperPropVisuals.push({
          mesh,
          canonical,
          neighborhood: neighborhoodIndex,
          revealAfter: paperPropRevealSteps[propIndex] ?? 7,
          baseScale,
          radiusX,
          radiusY,
          footOffset: 1.18 * baseScale,
          swayPhase: propIndex * 1.91 + neighborhoodIndex,
          path: getNeighborhoodPropPath(neighborhoodIndex, propIndex),
          loaded: false,
          loading: false,
        });
      });
    });
    const crowdCollisionTarget: XY = { x: 0, y: 0 };
    const pushCrowdOutsideEllipse = (
      target: XY,
      centerX: number,
      centerY: number,
      radiusX: number,
      radiusY: number,
      fallbackAngle: number,
    ) => {
      const dx = target.x - centerX;
      const dy = target.y - centerY;
      const normalizedDistance = (dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY);
      if (normalizedDistance >= 1) return;
      if (normalizedDistance < 0.0001) {
        target.x = centerX + Math.cos(fallbackAngle) * radiusX;
        target.y = centerY + Math.sin(fallbackAngle) * radiusY;
        return;
      }
      const correction = 1 / Math.sqrt(normalizedDistance);
      target.x = centerX + dx * correction;
      target.y = centerY + dy * correction;
    };
    const resolveCrowdCollisions = (target: XY, neighborhood: number, fallbackAngle: number) => {
      for (const project of projectsByNeighborhood[neighborhood] ?? []) {
        if (!project.landOwned && getAssetProgress(stateRef.current, project.asset.id as AssetId) <= 0) continue;
        const radii = buildingCollisionRadii(project.asset, project.constructionStage ?? 0, project.formCount);
        const collisionCenterY = project.plot.y
          + buildingCollisionYOffset(project.asset, project.constructionStage ?? 0, project.formCount);
        if (Math.abs(target.x - project.plot.x) > radii[0] + 0.8 || Math.abs(target.y - collisionCenterY) > radii[1] + 0.8) continue;
        pushCrowdOutsideEllipse(
          target,
          project.plot.x,
          collisionCenterY,
          radii[0] + 0.38,
          radii[1] + 0.32,
          fallbackAngle,
        );
      }
      for (const obstacle of paperPropVisuals) {
        if (obstacle.neighborhood !== neighborhood || !obstacle.mesh.visible) continue;
        if (
          Math.abs(target.x - obstacle.mesh.position.x) > obstacle.radiusX + 0.35
          || Math.abs(target.y - obstacle.mesh.position.y) > obstacle.radiusY + 0.35
        ) continue;
        pushCrowdOutsideEllipse(
          target,
          obstacle.mesh.position.x,
          obstacle.mesh.position.y - 0.08,
          obstacle.radiusX + 0.32,
          obstacle.radiusY + 0.28,
          fallbackAngle,
        );
      }
      const sign = neighborhoodSignVisuals[neighborhood];
      if (sign) {
        pushCrowdOutsideEllipse(
          target,
          sign.mesh.position.x,
          sign.mesh.position.y - 0.12,
          sign.mesh.geometry.parameters.width * 0.5 + 0.42,
          sign.mesh.geometry.parameters.height * 0.34 + 0.34,
          fallbackAngle,
        );
      }
      return target;
    };

    const keepCollectibleReachable = (point: XY, neighborhood: number, fallbackAngle: number) => {
      const center = NEIGHBORHOOD_CENTERS[neighborhood] ?? NEIGHBORHOOD_CENTERS[0];
      for (let pass = 0; pass < 8; pass += 1) {
        for (const project of projectsByNeighborhood[neighborhood] ?? []) {
          const finalStage = project.formCount - 1;
          const radii = buildingCollisionRadii(project.asset, finalStage, project.formCount);
          pushCrowdOutsideEllipse(
            point,
            project.canonicalPlot.x,
            project.canonicalPlot.y + buildingCollisionYOffset(project.asset, finalStage, project.formCount),
            radii[0] + 1.35,
            radii[1] + 1.18,
            fallbackAngle + pass * 0.47,
          );
        }
        const sign = neighborhoodSignVisuals[neighborhood];
        if (sign) {
          pushCrowdOutsideEllipse(
            point,
            sign.canonical.x,
            sign.canonical.y - 0.12,
            sign.mesh.geometry.parameters.width * 0.5 + 1.15,
            sign.mesh.geometry.parameters.height * 0.34 + 0.9,
            fallbackAngle + pass * 0.61,
          );
        }
        for (const prop of paperPropVisuals) {
          if (prop.neighborhood !== neighborhood) continue;
          pushCrowdOutsideEllipse(
            point,
            prop.canonical.x,
            prop.canonical.y - 0.08,
            prop.radiusX + 0.78,
            prop.radiusY + 0.66,
            fallbackAngle + pass * 0.39,
          );
        }
        if (neighborhood === 0) {
          pushCrowdOutsideEllipse(point, 0, -18.5, 6.1, 6.1, fallbackAngle + pass * 0.27);
        }
        // Collision pushes must never eject a collectible beyond the compact
        // district boundary, where it could look missing on a wrapped map.
        const normalizedX = (point.x - center.x) / 17.2;
        const normalizedY = (point.y - center.y) / 15.4;
        const boundaryDistance = normalizedX * normalizedX + normalizedY * normalizedY;
        if (boundaryDistance > 1) {
          const correction = 1 / Math.sqrt(boundaryDistance);
          point.x = center.x + (point.x - center.x) * correction;
          point.y = center.y + (point.y - center.y) * correction;
        }
      }
      return point;
    };

    projects.forEach((project, projectIndex) => {
      project.tokens.forEach((tokenVisual) => {
        keepCollectibleReachable(
          tokenVisual.canonical,
          project.neighborhood,
          projectIndex * 1.73 + tokenVisual.pieceIndex * 0.91,
        );
        tokenVisual.mesh.position.x = tokenVisual.canonical.x;
        tokenVisual.mesh.position.y = tokenVisual.canonical.y;
      });
    });

    const wally = createWally();
    wally.group.position.set(
      state.wallyPosition.x,
      state.wallyPosition.z,
      worldDepthForFootY(state.wallyPosition.z - 1.05, 0.04),
    );
    scene.add(wally.group);

    const reserveTexture = createReserveTokenTexture();
    const reserveMaterial = new THREE.MeshBasicMaterial({
      map: reserveTexture,
      transparent: true,
      depthWrite: false,
      alphaTest: 0.025,
    });
    const reserveMesh = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(1.28, 1.28),
      reserveMaterial,
      RESERVE_TOKEN_COUNT,
    );
    reserveMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    reserveMesh.frustumCulled = false;
    reserveMesh.renderOrder = 15;
    const reserveRandom = seeded(state.town.tokenSeed ^ 0xa84f21);
    const collectedReserve = new Set(state.town.reserveCollectedIds);
    const reserveTokens: ReserveVisual[] = [];
    for (let index = 0; index < RESERVE_TOKEN_COUNT; index += 1) {
      const neighborhood = 3 + (index % 7);
      const center = NEIGHBORHOOD_CENTERS[neighborhood];
      const radius = 3.8 + Math.sqrt(reserveRandom()) * 13;
      const angle = reserveRandom() * Math.PI * 2;
      const reserve = {
        id: index,
        neighborhood,
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
        homeX: center.x + Math.cos(angle) * radius,
        homeY: center.y + Math.sin(angle) * radius,
        phase: reserveRandom() * Math.PI * 2,
        collected: collectedReserve.has(index),
      };
      keepCollectibleReachable(reserve, neighborhood, index * 1.618);
      reserve.homeX = reserve.x;
      reserve.homeY = reserve.y;
      reserveTokens.push(reserve);
      const scale = reserve.collected ? 0 : 1;
      tempMatrix.compose(
        new THREE.Vector3(reserve.x, reserve.y, worldDepthForFootY(reserve.y - 0.64, 0.12)),
        new THREE.Quaternion(),
        new THREE.Vector3(scale, scale, 1),
      );
      reserveMesh.setMatrixAt(index, tempMatrix);
    }
    scene.add(reserveMesh);
    reserveMesh.visible = initialUnlockedNeighborhoods.has(3);
    setReserveCount(collectedReserve.size);

    const velocity = new THREE.Vector2();
    const desired = new THREE.Vector2();
    const player = new THREE.Vector2(state.wallyPosition.x, state.wallyPosition.z);
    let facingScaleX = state.wallyPosition.facing.includes("w") ? -1 : 1;
    let walkCycle = 0;
    let lastFootstep = -1;

    const playNote = (frequency: number, duration = 0.32, volume = 0.035, delay = 0) => {
      if (!audio || !soundRef.current) return;
      const now = audio.context.currentTime + delay;
      const oscillator = audio.context.createOscillator();
      const noteGain = audio.context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, now);
      oscillator.detune.setValueAtTime(-4, now);
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(volume, now + 0.018);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      oscillator.connect(noteGain).connect(audio.gain);
      oscillator.start(now);
      oscillator.stop(now + duration + 0.05);
    };

    const playLofiTone = (
      frequency: number,
      duration: number,
      volume: number,
      delay = 0,
      type: OscillatorType = "triangle",
      cutoff = 1450,
    ) => {
      if (!audio || !soundRef.current) return;
      const start = audio.context.currentTime + delay;
      const oscillator = audio.context.createOscillator();
      const filter = audio.context.createBiquadFilter();
      const noteGain = audio.context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.detune.setValueAtTime(Math.sin(audio.beat * 0.19) * 1.4, start);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(cutoff, start);
      filter.Q.setValueAtTime(0.65, start);
      noteGain.gain.setValueAtTime(0.0001, start);
      noteGain.gain.exponentialRampToValueAtTime(volume, start + 0.045);
      noteGain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume * 0.44), start + Math.min(0.48, duration * 0.42));
      noteGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.connect(filter).connect(noteGain).connect(audio.gain);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.06);
    };

    const playLofiDrum = (kind: "kick" | "hat" | "snare", delay = 0, velocity = 1) => {
      if (!audio || !soundRef.current) return;
      const start = audio.context.currentTime + delay;
      if (kind === "kick") {
        const oscillator = audio.context.createOscillator();
        const drumGain = audio.context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(88, start);
        oscillator.frequency.exponentialRampToValueAtTime(46, start + 0.18);
        drumGain.gain.setValueAtTime(0.054 * velocity, start);
        drumGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);
        oscillator.connect(drumGain).connect(audio.gain);
        oscillator.start(start);
        oscillator.stop(start + 0.26);
        return;
      }
      const duration = kind === "hat" ? 0.052 : 0.135;
      const buffer = audio.context.createBuffer(1, Math.ceil(audio.context.sampleRate * duration), audio.context.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index += 1) {
        samples[index] = (Math.random() * 2 - 1) * (1 - index / samples.length);
      }
      const source = audio.context.createBufferSource();
      const filter = audio.context.createBiquadFilter();
      const drumGain = audio.context.createGain();
      source.buffer = buffer;
      filter.type = kind === "hat" ? "highpass" : "bandpass";
      filter.frequency.value = kind === "hat" ? 6100 : 1380;
      filter.Q.value = kind === "hat" ? 0.62 : 0.72;
      drumGain.gain.setValueAtTime((kind === "hat" ? 0.012 : 0.026) * velocity, start);
      drumGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      source.connect(filter).connect(drumGain).connect(audio.gain);
      source.start(start);
    };

    const scheduleLofiStep = () => {
      if (!audio || audio.context.state !== "running" || pausedRef.current || !soundRef.current) return;
      const absoluteBeat = audio.beat++;
      const step = absoluteBeat % 16;
      // Each scene is a full 16-bar miniature, giving the town eight distinct
      // but harmonically related pieces instead of a single repeating loop.
      if (absoluteBeat > 0 && absoluteBeat % 256 === 0) audio.theme = (audio.theme + 1) % LOFI_THEMES.length;
      const theme = LOFI_THEMES[audio.theme];
      const rhythm = LOFI_RHYTHMS[audio.theme];
      const swing = step % 2 === 1 ? rhythm.swing : 0;
      const root = theme.roots[step < 8 ? 0 : 1];
      const chord = [root, root * 1.25, root * 1.5, root * 1.875];
      if (step === 0 || step === 8) {
        chord.forEach((frequency, noteIndex) => playLofiTone(frequency, 2.45, 0.016 - noteIndex * 0.0014, noteIndex * 0.01, "triangle", theme.cutoff));
      }
      if ((rhythm.kicks as readonly number[]).includes(step)) playLofiDrum("kick", 0, 0.9);
      if ((rhythm.snares as readonly number[]).includes(step)) playLofiDrum("snare", 0.014, 0.82);
      if ((rhythm.ghosts as readonly number[]).includes(step)) playLofiDrum("snare", swing, 0.22);
      if ((rhythm.hats as readonly number[]).includes(step)) playLofiDrum("hat", swing, step === 14 ? 0.72 : 0.55);
      if ((rhythm.bass as readonly number[]).includes(step)) {
        const bass = root / 2 * (step === 14 || step === 15 ? 1.125 : 1);
        playLofiTone(bass, 0.56, 0.029, swing * 0.45, "sine", 620);
      }
      const melody = (rhythm.melody as readonly number[]).includes(step)
        ? theme.melody[Math.floor(step / 2)]
        : 0;
      if (melody > 0) playLofiTone(melody, 0.42, 0.017, 0.015 + swing, "triangle", 1880);
    };

    const startLofiStation = () => {
      if (disposed || !audio || audio.started || audio.context.state !== "running") return;
      audio.started = true;
      scheduleLofiStep();
      audio.timer = window.setInterval(scheduleLofiStep, LOFI_STATION_STEP_MS);
    };

    const unlockAudioContext = (context: AudioContext) => {
      // iOS Safari requires both resume() and an actual source start inside the
      // original touch gesture before it will release Web Audio to the speakers.
      try {
        const resumePromise = context.state === "running" ? null : context.resume();
        const silentBuffer = context.createBuffer(1, 1, context.sampleRate);
        const silentSource = context.createBufferSource();
        const silentGain = context.createGain();
        silentGain.gain.value = 0;
        silentSource.buffer = silentBuffer;
        silentSource.connect(silentGain).connect(context.destination);
        silentSource.start(0);
        if (context.state === "running") startLofiStation();
        else void resumePromise?.then(startLofiStation).catch(() => undefined);
      } catch {
        // A later touch retries the unlock if the browser is not ready yet.
      }
    };

    const initializeSound = () => {
      if (audio) {
        unlockAudioContext(audio.context);
        return;
      }
      try {
        const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;
        const context = new AudioContextClass();
        const gain = context.createGain();
        gain.gain.value = 0.58;
        const compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -22;
        compressor.knee.value = 14;
        compressor.ratio.value = 2.6;
        compressor.attack.value = 0.025;
        compressor.release.value = 0.28;
        gain.connect(compressor).connect(context.destination);
        audio = { context, gain, beat: 0, timer: 0, theme: stateRef.current.town.worldSeed % LOFI_THEMES.length, started: false };
        unlockAudioContext(context);
      } catch {
        audio = null;
      }
    };
    initializeSoundRef.current = initializeSound;

    const birdTextureLoader = new THREE.TextureLoader();
    const birdLeftTexture = birdTextureLoader.load(FLYING_BIRD_LEFT_PATH);
    const birdRightTexture = birdTextureLoader.load(FLYING_BIRD_RIGHT_PATH);
    [birdLeftTexture, birdRightTexture].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
    });
    const birdGeometry = new THREE.PlaneGeometry(1.35, 0.82);
    const fxParticleGeometry = new THREE.CircleGeometry(0.08, 12);
    const fxRingGeometry = new THREE.RingGeometry(0.5, 0.66, 48);
    const makeFxParticle = (material: THREE.MeshBasicMaterial, radius: number, stretch = 1) => {
      const mesh = new THREE.Mesh(fxParticleGeometry, material);
      const scale = radius / 0.08;
      mesh.scale.set(scale * stretch, scale / Math.sqrt(stretch), 1);
      return mesh;
    };
    const makeFxRing = (material: THREE.MeshBasicMaterial, outerRadius: number) => {
      const mesh = new THREE.Mesh(fxRingGeometry, material);
      mesh.scale.setScalar(outerRadius / 0.66);
      return mesh;
    };

    const createBirdFlock = (
      from: XY,
      to: XY,
      now: number,
      options: {
        count?: number;
        baseScale?: number;
        duration?: number;
        arc?: number;
        maxOpacity?: number;
      } = {},
    ) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const length = Math.max(0.01, Math.hypot(dx, dy));
      const direction = { x: dx / length, y: dy / length };
      const side = { x: -direction.y, y: direction.x };
      const halfFlock = Math.max(1, Math.floor((options.count ?? 9) / 2));
      const baseScale = options.baseScale ?? 1;
      for (let birdIndex = -halfFlock; birdIndex <= halfFlock; birdIndex += 1) {
        const wing = Math.abs(birdIndex);
        const lateral = birdIndex * 0.48 * baseScale;
        const trailing = wing * 0.42 * baseScale;
        const material = new THREE.MeshBasicMaterial({
          map: dx < 0 ? birdLeftTexture : birdRightTexture,
          transparent: true,
          depthWrite: false,
          depthTest: false,
          alphaTest: 0.025,
          opacity: options.maxOpacity ?? 0.95,
        });
        const mesh = new THREE.Mesh(birdGeometry, material);
        const birdFrom = {
          x: from.x + side.x * lateral - direction.x * trailing,
          y: from.y + side.y * lateral - direction.y * trailing,
        };
        const birdTo = {
          x: to.x + side.x * lateral - direction.x * trailing,
          y: to.y + side.y * lateral - direction.y * trailing,
        };
        mesh.position.set(birdFrom.x, birdFrom.y, 28 + (halfFlock - wing) * 0.01);
        mesh.rotation.z = Math.atan2(dy, dx) * 0.08;
        mesh.scale.setScalar(0.01);
        mesh.visible = false;
        mesh.renderOrder = 48;
        scene.add(mesh);
        birds.push({
          mesh,
          from: birdFrom,
          to: birdTo,
          born: now,
          duration: (options.duration ?? 3500) + wing * 95,
          delay: wing * 58,
          phase: birdIndex * 0.9,
          arc: options.arc ?? 2.1,
          baseScale,
          maxOpacity: options.maxOpacity ?? 0.92,
        });
      }
    };

    const createScreenCrossingFlock = (
      target: XY,
      now: number,
      kind: "celebration" | "guidance" = "celebration",
    ) => {
      const nearestTarget = nearestToroidalPoint(target, player, activeWorldPeriod);
      let dx = nearestTarget.x - player.x;
      let dy = nearestTarget.y - player.y;
      let length = Math.hypot(dx, dy);
      if (length < 0.2) {
        dx = 1;
        dy = 0.28;
        length = Math.hypot(dx, dy);
      }
      const direction = { x: dx / length, y: dy / length };
      const side = { x: -direction.y, y: direction.x };
      const screenSpan = Math.hypot(camera.right - camera.left, camera.top - camera.bottom);
      const travel = screenSpan * 0.62 + 4;
      const center = {
        x: camera.position.x + side.x * (kind === "guidance" ? 1.4 : 0.5),
        y: camera.position.y + 0.85 + side.y * (kind === "guidance" ? 1.4 : 0.5),
      };
      createBirdFlock(
        {
          x: center.x - direction.x * travel,
          y: center.y - direction.y * travel,
        },
        {
          x: center.x + direction.x * travel,
          y: center.y + direction.y * travel,
        },
        now,
        kind === "celebration"
          ? { count: 13, baseScale: 1.5, duration: 3650, arc: 2.55, maxOpacity: 1 }
          : { count: 5, baseScale: 1.32, duration: 3500, arc: 1.5, maxOpacity: 0.95 },
      );
    };

    const findActiveBirdGuidanceTarget = (unlockedSet: Set<NeighborhoodId>): XY | null => {
      let closest: XY | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;
      const consider = (candidate: XY) => {
        const distance = Math.hypot(candidate.x - player.x, candidate.y - player.y);
        if (distance < 3.8 || distance >= closestDistance) return;
        closest = candidate;
        closestDistance = distance;
      };
      for (const project of projects) {
        if (!unlockedSet.has(project.neighborhood as NeighborhoodId)) continue;
        if (project.asset.discovery === "crowd" && project.flowAvailable && !project.landOwned) {
          consider(project.plot);
          continue;
        }
        if (!project.unlocked || project.asset.discovery === "exchange-exclusive") continue;
        for (const token of project.tokens) {
          if (token.mesh.visible) consider({ x: token.mesh.position.x, y: token.mesh.position.y });
        }
      }
      return closest;
    };

    const createCollectionFx = (project: ProjectVisual, now: number) => {
      const color = CATEGORY_COLORS[project.asset.category];
      [0, 110, 220].forEach((delay, ringIndex) => {
        const ringMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82, depthWrite: false });
        const ring = makeFxRing(ringMaterial, 0.72 + ringIndex * 0.08);
        ring.position.set(player.x, player.y, 1.6 + ringIndex * 0.02);
        ring.renderOrder = 11;
        scene.add(ring);
        pulses.push({ mesh: ring, born: now + delay, duration: 1180 + ringIndex * 180 });
      });
      [760, 930].forEach((delay, ringIndex) => {
        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.86, depthWrite: false });
        const ring = makeFxRing(material, 0.6);
        ring.position.set(project.plot.x, project.plot.y + 0.35, 10 + ringIndex * 0.02);
        ring.renderOrder = 17;
        scene.add(ring);
        pulses.push({ mesh: ring, born: now + delay, duration: 1220 });
      });

      [0.23, 0.47, 0.71].forEach((progress, signalIndex) => {
        const signalMaterial = new THREE.MeshBasicMaterial({
          color: signalIndex === 1 ? "#ecfbff" : color,
          transparent: true,
          opacity: 0.82,
          depthWrite: false,
        });
        const signal = makeFxRing(signalMaterial, 0.24 + signalIndex * 0.035);
        signal.position.set(
          THREE.MathUtils.lerp(player.x, project.plot.x, progress),
          THREE.MathUtils.lerp(player.y, project.plot.y, progress),
          12 + signalIndex * 0.02,
        );
        signal.renderOrder = 18;
        scene.add(signal);
        pulses.push({ mesh: signal, born: now + 150 + signalIndex * 155, duration: 680 });
      });

      for (let index = 0; index < 27; index += 1) {
        const packet = Math.floor(index / 9);
        const particleMaterial = new THREE.MeshBasicMaterial({
          color: index % 7 === 0 ? "#fff4c7" : index % 5 === 0 ? "#d9f8ff" : color,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
        });
        const particle = makeFxParticle(particleMaterial, 0.07 + (index % 4) * 0.018, index % 5 === 0 ? 1.9 : 1);
        particle.rotation.z = index * 1.618;
        particle.position.set(player.x, player.y, 8);
        particle.renderOrder = 16;
        scene.add(particle);
        particles.push({
          mesh: particle,
          from: { x: player.x, y: player.y },
          to: project.plot,
          born: now,
          duration: 720 + (index % 9) * 45,
          arc: (index % 2 === 0 ? 1 : -1) * (0.44 + (index % 7) * 0.15),
          delay: packet * 115 + (index % 9) * 18,
        });
      }
    };

    const createGrowthFx = (project: ProjectVisual, now: number) => {
      const color = CATEGORY_COLORS[project.asset.category];
      [0, 145, 290, 435].forEach((delay, ringIndex) => {
        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.74, depthWrite: false });
        const ring = makeFxRing(material, 0.67);
        ring.position.set(project.plot.x, project.plot.y + 0.35, 5 + ringIndex * 0.03);
        ring.renderOrder = 12;
        scene.add(ring);
        pulses.push({ mesh: ring, born: now + delay, duration: 1450 });
      });
      for (let index = 0; index < 46; index += 1) {
        const angle = index * 2.39996;
        const distance = 2.4 + (index % 8) * 0.24;
        const material = new THREE.MeshBasicMaterial({
          color: index % 4 === 0 ? "#fff1af" : color,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
        });
        const particle = makeFxParticle(material, 0.06 + (index % 5) * 0.018, index % 3 === 0 ? 2.15 : 1);
        particle.rotation.z = angle + 0.4;
        particle.renderOrder = 16;
        scene.add(particle);
        particles.push({
          mesh: particle,
          from: { x: project.plot.x, y: project.plot.y },
          to: { x: project.plot.x + Math.cos(angle) * distance, y: project.plot.y + Math.sin(angle) * distance * 0.66 },
          born: now,
          duration: 820 + (index % 6) * 90,
          arc: 0.9 + (index % 5) * 0.22,
          delay: index * 14,
        });
      }
    };

    const createReserveFx = (now: number) => {
      [0, 120, 240].forEach((delay) => {
        const material = new THREE.MeshBasicMaterial({ color: "#edbd4d", transparent: true, opacity: 0.82, depthWrite: false });
        const ring = makeFxRing(material, 0.66);
        ring.position.set(player.x, player.y, 9);
        ring.renderOrder = 17;
        scene.add(ring);
        pulses.push({ mesh: ring, born: now + delay, duration: 1100 });
      });
      for (let index = 0; index < 28; index += 1) {
        const angle = index * 2.39996;
        const material = new THREE.MeshBasicMaterial({ color: index % 4 === 0 ? "#ffffff" : "#edbd4d", transparent: true, opacity: 0.96, depthWrite: false });
        const particle = makeFxParticle(material, 0.065 + (index % 3) * 0.02, index % 4 === 0 ? 1.8 : 1);
        particle.rotation.z = angle;
        particle.renderOrder = 18;
        scene.add(particle);
        particles.push({
          mesh: particle,
          from: { x: player.x, y: player.y },
          to: { x: player.x + Math.cos(angle) * (2.2 + (index % 6) * 0.25), y: player.y + Math.sin(angle) * (1.5 + (index % 5) * 0.2) },
          born: now,
          duration: 650 + (index % 6) * 85,
          arc: 0.55 + (index % 4) * 0.18,
          delay: index * 10,
        });
      }
    };

    const createNeighborhoodCelebration = (center: XY, neighborhood: number, now: number, grand = true) => {
      const colors = ["#edbd4d", "#ef8d75", "#80a78e", "#80aecd", "#f7efe0"];
      const bursts = grand ? 7 : 3;
      for (let burst = 0; burst < bursts; burst += 1) {
        const burstAngle = (burst / bursts) * Math.PI * 2 + neighborhood * 0.43;
        const origin = {
          x: center.x + Math.cos(burstAngle) * (grand ? 5.8 : 2.8),
          y: center.y + Math.sin(burstAngle) * (grand ? 3.8 : 1.8),
        };
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: colors[burst % colors.length], transparent: true, opacity: 0.88, depthWrite: false,
        });
        const ring = makeFxRing(ringMaterial, 0.53);
        ring.position.set(origin.x, origin.y, 13 + burst * 0.01);
        ring.renderOrder = 20;
        scene.add(ring);
        pulses.push({ mesh: ring, born: now + burst * 90, duration: grand ? 1700 : 1150 });

        const particleCount = grand ? 18 : 9;
        for (let spark = 0; spark < particleCount; spark += 1) {
          const angle = (spark / particleCount) * Math.PI * 2 + burst * 0.29;
          const distance = (grand ? 3.2 : 1.8) + (spark % 5) * 0.32;
          const material = new THREE.MeshBasicMaterial({
            color: colors[(spark + burst) % colors.length], transparent: true, opacity: 0.98, depthWrite: false,
          });
          const particle = makeFxParticle(material, 0.07 + (spark % 3) * 0.025, spark % 4 === 0 ? 2.4 : 1.25);
          particle.rotation.z = angle;
          particle.renderOrder = 21;
          scene.add(particle);
          particles.push({
            mesh: particle,
            from: origin,
            to: { x: origin.x + Math.cos(angle) * distance, y: origin.y + Math.sin(angle) * distance * 0.78 },
            born: now + burst * 90,
            duration: 850 + (spark % 5) * 95,
            arc: 1.2 + (spark % 4) * 0.32,
            delay: spark * 13,
          });
        }
      }
      if (grand) {
        playNote(523.25, 0.58, 0.035);
        playNote(659.25, 0.66, 0.03, 0.1);
        playNote(783.99, 0.82, 0.028, 0.2);
      }
    };

    const createFootstepFx = (now: number, side: number) => {
      for (let index = 0; index < 4; index += 1) {
        const angle = -0.5 + index * 0.34 + side * 0.08;
        const material = new THREE.MeshBasicMaterial({
          color: index === 0 ? "#ffffff" : "#9fb3aa",
          transparent: true,
          opacity: 0.32,
          depthWrite: false,
        });
        const particle = makeFxParticle(material, 0.025 + index * 0.009, 1.6);
        particle.rotation.z = angle;
        particle.renderOrder = 9;
        scene.add(particle);
        const foot = { x: player.x + side * 0.18, y: player.y - 1.03 };
        particles.push({
          mesh: particle,
          from: foot,
          to: {
            x: foot.x + Math.cos(angle) * (0.18 + index * 0.035),
            y: foot.y + Math.sin(angle) * 0.12,
          },
          born: now,
          duration: 300 + index * 28,
          arc: 0.08 + index * 0.018,
          delay: index * 13,
          maxOpacity: 0.32,
        });
      }
    };

    const applyProjectStage = (
      project: ProjectVisual,
      nextStage: number,
      now: number,
    ) => {
      if (!project.building || !project.constructionTexture || nextStage === project.constructionStage) return;
      const previousTexture = project.constructionTexture;
      project.constructionTexture = createBuildingTexture(project.asset, nextStage, project.formCount);
      project.building.material.map = project.constructionTexture;
      project.building.material.needsUpdate = true;
      previousTexture.dispose();
      project.constructionStage = nextStage;
      project.pendingStage = undefined;
      project.building.material.color.set("#ffffff");
      project.building.material.opacity = 1;
      project.building.visible = true;
      if (project.branding) project.branding.visible = nextStage >= 1;
      project.building.scale.multiplyScalar(1.06);
      createGrowthFx(project, now);
    };

    const collectProject = (project: ProjectVisual, tokenVisual: ProjectTokenVisual, now: number) => {
      const result = collectCrowdAssetPiece(stateRef.current, project.asset.id as AssetId, Date.now());
      if (!result.collected) return;
      stateRef.current = markWorldTokenCollected(
        result.state,
        project.asset.id as AssetId,
        tokenVisual.pieceIndex,
      );
      state = stateRef.current;
      tokenVisual.mesh.visible = false;
      createCollectionFx(project, now);
      playNote(CATEGORY_FREQUENCIES[project.asset.category], 0.42, 0.038);
      playNote(CATEGORY_FREQUENCIES[project.asset.category] * 1.5, 0.52, 0.022, 0.08);
      playNote(CATEGORY_FREQUENCIES[project.asset.category] * 2, 0.36, 0.016, 0.16);
      if (navigator.vibrate) navigator.vibrate(result.completed ? [13, 45, 20] : 13);

      if (project.building) {
        const progress = getAssetProgress(stateRef.current, project.asset.id as AssetId);
        const improvement = project.improvements[Math.max(0, progress - 1)];
        if (improvement) {
          improvement.visible = true;
          improvement.scale.setScalar(0.08);
        }
        const nextStage = visualStageForProgress(progress, project.asset.requiredPieces, project.formCount);
        const isVisible = Math.abs(project.plot.x - camera.position.x) < Math.abs(camera.right) * 0.9
          && Math.abs(project.plot.y - camera.position.y) < camera.top * 0.95;
        if (isVisible) applyProjectStage(project, nextStage, now);
        else project.pendingStage = nextStage;
      }

      if (project.remainingLabel) {
        project.remainingLabel.material.map = getNumberTexture(result.remainingPieces, project.asset.category);
        project.remainingLabel.material.needsUpdate = true;
        project.remainingLabel.visible = result.remainingPieces > 0;
      }
      setHud({ budget: stateRef.current.budget });

      if (result.completed) {
        playNote(CATEGORY_FREQUENCIES[project.asset.category] * 2, 0.75, 0.026, 0.18);
        if (project.asset.id === "hidden-stock-exchange") {
          exchangeAutoOpenUntil = now + 12_000;
          exchangeDismissedRef.current = false;
          stateRef.current = refreshDailyPrices(stateRef.current, Date.now());
          state = stateRef.current;
          setExchangePanel(exchangeSnapshot(stateRef.current));
          exchangePanelShown = true;
          lastExchangePanelUpdate = now;
        }
      }
      stateRef.current = saveGameState(stateRef.current);
      state = stateRef.current;
    };

    purchaseLandRef.current = (assetId: AssetId) => {
      const project = projects.find((candidate) => candidate.asset.id === assetId);
      if (!project || !project.flowAvailable || project.asset.discovery !== "crowd") return;
      const result = purchaseLandPlot(stateRef.current, assetId, project.landPrice);
      stateRef.current = result.state;
      state = result.state;
      if (!result.purchased) {
        setLandOffer({
          assetId,
          name: project.asset.name,
          price: project.landPrice,
          budget: stateRef.current.budget,
        });
        return;
      }
      project.landOwned = true;
      project.unlocked = true;
      if (project.plotHalo) project.plotHalo.visible = false;
      if (project.building) {
        project.building.visible = true;
        project.building.scale.setScalar(0.08);
      }
      if (project.improvementGroup) project.improvementGroup.visible = true;
      createGrowthFx(project, performance.now());
      playNote(523.25, 0.54, 0.036);
      playNote(659.25, 0.68, 0.025, 0.11);
      if (navigator.vibrate) navigator.vibrate([10, 32, 16]);
      stateRef.current = saveGameState(stateRef.current);
      state = stateRef.current;
      setHud({ budget: stateRef.current.budget });
      setLandOffer(null);
    };

    purchaseExchangeRef.current = (assetId: ExchangeAssetId) => {
      const result = purchaseExchangePiece(stateRef.current, assetId, Date.now());
      stateRef.current = result.state;
      state = result.state;
      if (!result.purchased) {
        setExchangePanel(exchangeSnapshot(stateRef.current));
        return;
      }

      const projectIndex = projects.findIndex((project) => project.asset.id === assetId);
      const project = projects[projectIndex];
      if (project) {
        const progress = getAssetProgress(stateRef.current, project.asset.id as AssetId);
        const improvement = project.improvements[Math.max(0, progress - 1)];
        if (improvement) {
          improvement.visible = true;
          improvement.scale.setScalar(0.08);
        }
        const nextStage = visualStageForProgress(progress, project.asset.requiredPieces, project.formCount);
        if (project.building && project.constructionTexture && nextStage !== project.constructionStage) {
          const isVisible = Math.abs(project.plot.x - camera.position.x) < Math.abs(camera.right) * 0.9
            && Math.abs(project.plot.y - camera.position.y) < camera.top * 0.95;
          if (isVisible) applyProjectStage(project, nextStage, performance.now());
          else project.pendingStage = nextStage;
        }
        if (project.plotHalo) project.plotHalo.visible = false;
        if (project.remainingLabel) {
          project.remainingLabel.material.map = getNumberTexture(result.remainingPieces, project.asset.category);
          project.remainingLabel.material.needsUpdate = true;
          project.remainingLabel.visible = result.remainingPieces > 0;
        }
        createCollectionFx(project, performance.now());
        playNote(CATEGORY_FREQUENCIES[project.asset.category], 0.48, 0.036);
        if (result.completed) playNote(CATEGORY_FREQUENCIES[project.asset.category] * 2, 0.78, 0.025, 0.14);
      }
      if (navigator.vibrate) navigator.vibrate(result.completed ? [13, 45, 20] : 13);
      stateRef.current = saveGameState(stateRef.current);
      state = stateRef.current;
      setHud({ budget: stateRef.current.budget });
      setExchangePanel(exchangeSnapshot(stateRef.current));
    };

    dismissCompletionRef.current = () => {
      stateRef.current = saveGameState(markGameCompletionMessageSeen(stateRef.current));
      state = stateRef.current;
      completionMessageQueued = true;
      completionMessageOpen = false;
      pausedRef.current = false;
      setCompletionMessageVisible(false);
      setPaused(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", "escape"].includes(key)) {
        event.preventDefault();
      }
      initializeSound();
      if (completionMessageOpen) return;
      if (key === "escape") {
        setPaused((value) => !value);
        return;
      }
      keys.add(key);
    };
    const onKeyUp = (event: KeyboardEvent) => keys.delete(event.key.toLowerCase());

    const onCanvasPointerDown = (event: PointerEvent) => {
      if (pausedRef.current) return;
      initializeSound();
      if (event.pointerType !== "mouse") {
        renderer.domElement.setPointerCapture(event.pointerId);
        joystickInput.current = {
          x: 0,
          y: 0,
          active: true,
          pointerId: event.pointerId,
          originX: event.clientX,
          originY: event.clientY,
        };
        tapTarget.value = null;
        return;
      }
      const rect = renderer.domElement.getBoundingClientRect();
      const world = new THREE.Vector3(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1,
        0,
      ).unproject(camera);
      tapTarget.value = { x: world.x, y: world.y };
    };

    const onCanvasPointerMove = (event: PointerEvent) => {
      const input = joystickInput.current;
      if (!input.active || event.pointerId !== input.pointerId) return;
      const dx = event.clientX - input.originX;
      const dy = event.clientY - input.originY;
      const distance = Math.hypot(dx, dy);
      const radius = 58;
      const strength = Math.min(1, distance / radius);
      joystickInput.current.x = distance < 5 ? 0 : (dx / Math.max(1, distance)) * strength;
      joystickInput.current.y = distance < 5 ? 0 : (-dy / Math.max(1, distance)) * strength;
    };

    const onCanvasPointerEnd = (event: PointerEvent) => {
      if (event.pointerId !== joystickInput.current.pointerId) return;
      joystickInput.current = { x: 0, y: 0, active: false, pointerId: -1, originX: 0, originY: 0 };
    };

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 520 ? 1.6 : 1.75));
      const aspect = width / height;
      const viewHeight = aspect < 0.72 ? 24 : aspect > 1.25 ? 18 : 21;
      camera.left = (-viewHeight * aspect) / 2;
      camera.right = (viewHeight * aspect) / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", resize);
    window.addEventListener("touchend", initializeSound, { passive: true });
    renderer.domElement.addEventListener("pointerdown", onCanvasPointerDown);
    renderer.domElement.addEventListener("pointermove", onCanvasPointerMove);
    renderer.domElement.addEventListener("pointerup", onCanvasPointerEnd);
    renderer.domElement.addEventListener("pointercancel", onCanvasPointerEnd);
    resize();
    setHud({ budget: state.budget });
    setReady(true);

    const animate = (now: number) => {
      if (disposed) return;
      animationFrame = requestAnimationFrame(animate);
      const delta = Math.min(0.045, Math.max(0.001, (now - lastFrame) / 1000));
      lastFrame = now;

      if (!pausedRef.current) {
        const dayAngle = ((Date.now() + stateRef.current.town.worldSeed * 137) % 540_000) / 540_000 * Math.PI * 2;
        const daylight = (Math.cos(dayAngle) + 1) * 0.5;
        const nightAmount = THREE.MathUtils.smoothstep(1 - daylight, 0.38, 0.88);
        atmosphereColor.copy(daySky).lerp(duskSky, nightAmount * 0.44).lerp(nightSky, Math.max(0, nightAmount - 0.5) * 0.72);
        (scene.background as THREE.Color).copy(atmosphereColor);
        scene.fog?.color.copy(atmosphereColor);
        groundMaterial.color.copy(daySurface).lerp(nightSurface, nightAmount * 0.34);
        sproutMaterial.color.copy(daySurface).lerp(nightSurface, nightAmount * 0.22);
        desired.set(0, 0);
        if (keys.has("w") || keys.has("arrowup")) desired.y += 1;
        if (keys.has("s") || keys.has("arrowdown")) desired.y -= 1;
        if (keys.has("a") || keys.has("arrowleft")) desired.x -= 1;
        if (keys.has("d") || keys.has("arrowright")) desired.x += 1;
        if (joystickInput.current.active) {
          desired.x = joystickInput.current.x;
          desired.y = joystickInput.current.y;
          tapTarget.value = null;
        } else if (desired.lengthSq() > 0) {
          tapTarget.value = null;
        } else if (tapTarget.value) {
          desired.set(tapTarget.value.x - player.x, tapTarget.value.y - player.y);
          if (desired.length() < 0.34) {
            desired.set(0, 0);
            tapTarget.value = null;
          }
        }
        if (desired.lengthSq() > 1) desired.normalize();
        const completedSpeedBonus = completedNeighborhoodIds(stateRef.current).length * 0.14;
        const targetSpeed = desired.lengthSq() > 0.002 ? 6.35 + completedSpeedBonus : 0;
        if (desired.lengthSq() > 0) desired.normalize().multiplyScalar(targetSpeed);
        velocity.lerp(desired, 1 - Math.exp(-delta * (targetSpeed > 0 ? 12.8 : 16)));
        const movementUnlocked = new Set(unlockedNeighborhoodIds(stateRef.current));
        const collidesWithTown = (currentX: number, currentY: number, nextX: number, nextY: number) => {
          const movingDeeperIntoEllipse = (centerX: number, centerY: number, radiusX: number, radiusY: number) => {
            const currentDx = (currentX - centerX) / radiusX;
            const currentDy = (currentY - centerY) / radiusY;
            const nextDx = (nextX - centerX) / radiusX;
            const nextDy = (nextY - centerY) / radiusY;
            const currentDistance = currentDx * currentDx + currentDy * currentDy;
            const nextDistance = nextDx * nextDx + nextDy * nextDy;
            return nextDistance < 1 && nextDistance <= currentDistance + 0.0001;
          };
          for (const project of projects) {
            if (!movementUnlocked.has(project.neighborhood as NeighborhoodId)) continue;
            if (!project.landOwned && getAssetProgress(stateRef.current, project.asset.id as AssetId) <= 0) continue;
            const center = nearestToroidalPoint(project.canonicalPlot, { x: nextX, y: nextY }, activeWorldPeriod);
            const radii = buildingCollisionRadii(
              project.asset,
              project.constructionStage ?? 0,
              project.formCount,
            );
            const collisionCenterY = center.y + buildingCollisionYOffset(
              project.asset,
              project.constructionStage ?? 0,
              project.formCount,
            );
            if (movingDeeperIntoEllipse(center.x, collisionCenterY, radii[0], radii[1])) return true;
          }
          for (const sign of neighborhoodSignVisuals) {
            if (!movementUnlocked.has(sign.neighborhood.id)) continue;
            const center = nearestToroidalPoint(sign.canonical, { x: nextX, y: nextY }, activeWorldPeriod);
            const radiusX = sign.mesh.geometry.parameters.width * 0.5 + 0.55;
            const radiusY = sign.mesh.geometry.parameters.height * 0.34 + 0.52;
            if (movingDeeperIntoEllipse(center.x, center.y - 0.12, radiusX, radiusY)) return true;
          }
          for (const prop of paperPropVisuals) {
            if (!prop.mesh.visible || !movementUnlocked.has(prop.neighborhood as NeighborhoodId)) continue;
            const center = nearestToroidalPoint(prop.canonical, { x: nextX, y: nextY }, activeWorldPeriod);
            if (movingDeeperIntoEllipse(
              center.x,
              center.y - 0.08,
              prop.radiusX + 0.42,
              prop.radiusY + 0.36,
            )) return true;
          }
          return false;
        };
        const stepX = player.x + velocity.x * delta;
        if (!collidesWithTown(player.x, player.y, stepX, player.y)) player.x = stepX;
        else velocity.x = 0;
        const stepY = player.y + velocity.y * delta;
        if (!collidesWithTown(player.x, player.y, player.x, stepY)) player.y = stepY;
        else velocity.y = 0;

        if (now - lastTrailDrop > 235 && velocity.lengthSq() > 0.9) {
          trail.push({ x: player.x, y: player.y, born: now });
          if (trail.length > 16) trail.shift();
          lastTrailDrop = now;
        }
        while (trail.length && now - trail[0].born > 3500) trail.shift();

        const walking = Math.min(1, velocity.length() / 7.8);
        walkCycle += velocity.length() * delta * 3.15;
        const footfall = Math.abs(Math.sin(walkCycle));
        const footstep = Math.floor((walkCycle + Math.PI * 0.5) / Math.PI);
        if (walking > 0.5 && footstep !== lastFootstep) {
          lastFootstep = footstep;
          createFootstepFx(now, footstep % 2 === 0 ? -1 : 1);
        }
        wally.group.position.set(player.x, player.y, worldDepthForFootY(player.y - 1.05, 0.04));
        wally.group.rotation.z = THREE.MathUtils.lerp(wally.group.rotation.z, 0, 1 - Math.exp(-delta * 12));
        const breathing = 1 + Math.sin(now * 0.002) * 0.008;
        const verticalIntent = velocity.lengthSq() > 0.08 ? THREE.MathUtils.clamp(velocity.y / 7.8, -1, 1) : 0;
        if (Math.abs(velocity.x) > 0.14) facingScaleX = velocity.x < 0 ? -1 : 1;
        wally.group.scale.x = THREE.MathUtils.lerp(wally.group.scale.x, facingScaleX, 1 - Math.exp(-delta * 16));
        wally.sprite.scale.set(breathing + footfall * walking * 0.007, breathing - footfall * walking * 0.005, 1);
        wally.sprite.position.y = 0.08 + verticalIntent * 0.024 - footfall * walking * 0.012;
        wally.sprite.rotation.z = THREE.MathUtils.lerp(
          wally.sprite.rotation.z,
          -velocity.x * 0.0045 + Math.sin(walkCycle) * walking * 0.008,
          1 - Math.exp(-delta * 13),
        );
        wally.material.uniforms.walkAmount.value = THREE.MathUtils.lerp(
          wally.material.uniforms.walkAmount.value,
          walking,
          1 - Math.exp(-delta * 12),
        );
        wally.material.uniforms.walkPhase.value = walkCycle;
        wally.material.uniforms.breath.value = Math.sin(now * 0.002);
        wally.shadow.scale.x = THREE.MathUtils.lerp(wally.shadow.scale.x, 1.02 + footfall * walking * 0.07, 0.22);
        wally.shadow.scale.y = THREE.MathUtils.lerp(wally.shadow.scale.y, 1 - footfall * walking * 0.045, 0.22);
        wally.shadow.position.x = 0.2 - velocity.x * 0.012;
        wally.shadow.position.y = -0.99 + footfall * walking * 0.012;
        wally.shadow.material.opacity = 0.44 + walking * 0.07;

        if (velocity.lengthSq() > 0.08) {
          stateRef.current = updateWallyPosition(stateRef.current, {
            x: player.x,
            z: player.y,
            facing: directionName(velocity.x, velocity.y),
          });
        }

        const cameraTargetX = player.x + velocity.x * 0.105;
        const cameraTargetY = player.y + 2.15 + velocity.y * 0.09;
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, cameraTargetX, 1 - Math.exp(-delta * 6.8));
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, cameraTargetY, 1 - Math.exp(-delta * 6.8));

        const completedIds = completedNeighborhoodIds(stateRef.current);
        const unlockedIds = unlockedNeighborhoodIds(stateRef.current);
        const completedSet = new Set<NeighborhoodId>(completedIds);
        const unlockedSet = new Set<NeighborhoodId>(unlockedIds);
        const nextWorldPeriod = getActiveWorldPeriod(unlockedIds);
        if (
          nextWorldPeriod.x !== activeWorldPeriod.x
          || nextWorldPeriod.y !== activeWorldPeriod.y
        ) {
          // Rebase the whole moving frame around the nearest already-visible
          // neighborhood before expanding the torus. Camera-relative positions
          // and momentum remain exact, so completion never feels like a teleport.
          let anchorId = lastUnlockedNeighborhoodIds[0] ?? 0;
          let anchorDistance = Number.POSITIVE_INFINITY;
          for (const id of lastUnlockedNeighborhoodIds) {
            const displayed = nearestToroidalPoint(NEIGHBORHOODS[id].center, player, activeWorldPeriod);
            const distance = Math.hypot(displayed.x - player.x, displayed.y - player.y);
            if (distance < anchorDistance) {
              anchorId = id;
              anchorDistance = distance;
            }
          }
          const oldAnchor = nearestToroidalPoint(NEIGHBORHOODS[anchorId].center, player, activeWorldPeriod);
          const newAnchor = nearestToroidalPoint(NEIGHBORHOODS[anchorId].center, player, nextWorldPeriod);
          const shiftX = newAnchor.x - oldAnchor.x;
          const shiftY = newAnchor.y - oldAnchor.y;
          if (shiftX !== 0 || shiftY !== 0) {
            player.x += shiftX;
            player.y += shiftY;
            camera.position.x += shiftX;
            camera.position.y += shiftY;
            wally.group.position.x += shiftX;
            wally.group.position.y += shiftY;
            if (tapTarget.value) {
              tapTarget.value.x += shiftX;
              tapTarget.value.y += shiftY;
            }
            trail.forEach((point) => { point.x += shiftX; point.y += shiftY; });
            pulses.forEach((pulse) => { pulse.mesh.position.x += shiftX; pulse.mesh.position.y += shiftY; });
            particles.forEach((particle) => {
              particle.from.x += shiftX; particle.from.y += shiftY;
              particle.to.x += shiftX; particle.to.y += shiftY;
              particle.mesh.position.x += shiftX; particle.mesh.position.y += shiftY;
            });
            birds.forEach((bird) => {
              bird.from.x += shiftX; bird.from.y += shiftY;
              bird.to.x += shiftX; bird.to.y += shiftY;
              bird.mesh.position.x += shiftX; bird.mesh.position.y += shiftY;
            });
            crowd.forEach((person) => {
              person.x += shiftX; person.y += shiftY;
              person.homeX += shiftX; person.homeY += shiftY;
            });
            stateRef.current = updateWallyPosition(stateRef.current, {
              x: player.x,
              z: player.y,
              facing: stateRef.current.wallyPosition.facing,
            });
            state = stateRef.current;
          }
          activeWorldPeriod = nextWorldPeriod;
        }
        const neighborhoodLifeProgress = NEIGHBORHOODS.map((_, id) => (
          getNeighborhoodProgress(stateRef.current, neighborhoodGroups[id])
        ));
        const completedProjectsByNeighborhood = projectsByNeighborhood.map((neighborhoodProjects) => (
          neighborhoodProjects.filter((project) => getRemainingPieces(stateRef.current, project.asset.id as AssetId) === 0)
        ));
        const landmarkSignature = neighborhoodLifeProgress.map((value) => Math.round(value * 20)).join(":");
        if (landmarkSignature !== lastLandmarkSignature) {
          neighborhoodSignVisuals.forEach((visual, index) => {
            const stage = Math.min(5, Math.max(1, Math.ceil(neighborhoodLifeProgress[index] * 5)));
            if (stage === visual.stage) return;
            visual.stage = stage;
            visual.texture = updateNeighborhoodSignTexture(visual.texture, visual.neighborhood, neighborhoodLifeProgress[index]);
            visual.mesh.material.map = visual.texture;
            visual.mesh.material.needsUpdate = true;
          });
          updateWorldPlanetTexture(worldPlanetTexture, neighborhoodLifeProgress);
          lastLandmarkSignature = landmarkSignature;
        }
        const worldDevelopment = neighborhoodLifeProgress.reduce((sum, value) => sum + value, 0) / NEIGHBORHOODS.length;
        const revealSpeed = 1 - Math.exp(-delta * 1.4);
        groundMaterial.opacity = THREE.MathUtils.lerp(groundMaterial.opacity, 0.025 + worldDevelopment * 0.975, revealSpeed);
        sproutMaterial.opacity = THREE.MathUtils.lerp(sproutMaterial.opacity, 0.06 + worldDevelopment * 0.94, revealSpeed);
        for (const pool of neighborhoodPropPools) {
          pool.mesh.material.opacity = THREE.MathUtils.lerp(pool.mesh.material.opacity, 0.05 + worldDevelopment * 0.95, revealSpeed);
          pool.mesh.material.color.copy(daySurface).lerp(nightSurface, nightAmount * 0.2);
        }
        for (const visual of neighborhoodTileVisuals) {
          visual.mesh.material.opacity = THREE.MathUtils.lerp(visual.mesh.material.opacity, 0.035 + worldDevelopment * 0.965, revealSpeed);
        }
        for (const visual of neighborhoodChapterVisuals) {
          const targetOpacity = completedSet.has(visual.index as NeighborhoodId)
            ? 0.96
            : unlockedSet.has(visual.index as NeighborhoodId)
              ? 0.28 + neighborhoodLifeProgress[visual.index] * 0.34
              : 0;
          visual.mesh.material.opacity = THREE.MathUtils.lerp(visual.mesh.material.opacity, targetOpacity, 1 - Math.exp(-delta * 2.2));
        }
        for (const visual of neighborhoodSignVisuals) {
          const unlocked = unlockedSet.has(visual.neighborhood.id);
          visual.mesh.material.opacity = THREE.MathUtils.lerp(
            visual.mesh.material.opacity,
            unlocked ? 1 : 0,
            1 - Math.exp(-delta * 2.6),
          );
        }
        reserveMesh.visible = unlockedSet.has(3);

        const newlyCompletedNeighborhoods = completedIds.filter((id) => !knownCompletedNeighborhoodIds.has(id));
        for (const completedNeighborhood of newlyCompletedNeighborhoods) {
          knownCompletedNeighborhoodIds.add(completedNeighborhood);
          const availableTargets = unlockedIds.filter((id) => !completedSet.has(id));
          const targetIds = availableTargets.length > 0
            ? availableTargets
            : NEIGHBORHOODS.map((neighborhood) => neighborhood.id).filter((id) => !completedSet.has(id));
          let nextNeighborhood: NeighborhoodId | undefined;
          let nextNeighborhoodDistance = Number.POSITIVE_INFINITY;
          for (const targetId of targetIds) {
            const targetCenter = nearestToroidalPoint(NEIGHBORHOODS[targetId].center, player, activeWorldPeriod);
            const targetDistance = Math.hypot(targetCenter.x - player.x, targetCenter.y - player.y);
            if (targetDistance >= nextNeighborhoodDistance) continue;
            nextNeighborhood = targetId;
            nextNeighborhoodDistance = targetDistance;
          }
          if (nextNeighborhood !== undefined) {
            createScreenCrossingFlock(NEIGHBORHOODS[nextNeighborhood].center, now + 520, "celebration");
          }
        }

        if (unlockedIds.length > lastUnlockedNeighborhoodIds.length) {
          for (const newlyAvailable of unlockedIds) {
            if (revealedNeighborhoods.has(newlyAvailable)) continue;
            revealedNeighborhoods.add(newlyAvailable);
            const center = nearestToroidalPoint(NEIGHBORHOODS[newlyAvailable].center, player, activeWorldPeriod);
            createNeighborhoodCelebration(center, newlyAvailable, now, false);
          }
        }
        lastUnlockedNeighborhoodIds = unlockedIds;
        for (const neighborhood of completedIds) {
          if (stateRef.current.town.celebratedNeighborhoodIds.includes(neighborhood)) continue;
          const center = nearestToroidalPoint(NEIGHBORHOODS[neighborhood].center, player, activeWorldPeriod);
          if (Math.hypot(center.x - player.x, center.y - player.y) > 14) continue;
          createNeighborhoodCelebration(center, neighborhood, now, true);
          celebrationWindows.set(neighborhood, { until: now + 120_000, nextBurst: now + 3300 });
          if (navigator.vibrate) navigator.vibrate([18, 38, 18, 38, 26]);
          stateRef.current = markNeighborhoodCelebrated(stateRef.current, neighborhood);
          state = stateRef.current;
        }
        for (const [neighborhood, windowState] of celebrationWindows) {
          if (now >= windowState.until) {
            celebrationWindows.delete(neighborhood);
            continue;
          }
          if (now < windowState.nextBurst || particles.length > 210) continue;
          const center = nearestToroidalPoint(NEIGHBORHOODS[neighborhood].center, player, activeWorldPeriod);
          createNeighborhoodCelebration(center, neighborhood, now, false);
          windowState.nextBurst = now + 3600 + ((neighborhood * 773 + Math.floor(now)) % 2200);
        }

        if (now - lastMapUpdate > 650) {
          let closestNeighborhood: NeighborhoodId = 0;
          let closestDistance = Number.POSITIVE_INFINITY;
          for (const visual of neighborhoodChapterVisuals) {
            if (!unlockedSet.has(visual.index as NeighborhoodId)) continue;
            const nearestCopy = nearestToroidalPoint(NEIGHBORHOODS[visual.index].center, player, activeWorldPeriod);
            const distance = Math.hypot(nearestCopy.x - player.x, nearestCopy.y - player.y);
            if (distance >= closestDistance) continue;
            closestDistance = distance;
            closestNeighborhood = visual.index as NeighborhoodId;
          }
          const currentKey = `${NEIGHBORHOODS[closestNeighborhood].map.x}:${NEIGHBORHOODS[closestNeighborhood].map.y}`;
          stateRef.current = markNeighborhoodExplored(stateRef.current, currentKey);
          lastMapUpdate = now;
        }

        // The town is a seamless torus. Wally and the camera keep their exact
        // momentum while the opposite copy of every authored landmark is moved
        // into place far outside the viewport, before the player can see it.
        ground.position.x = player.x;
        ground.position.y = player.y;
        const gust = Math.max(0, Math.sin(now * 0.00021 + stateRef.current.town.worldSeed)) ** 4;

        let sproutsRebased = false;
        for (let index = 0; index < sproutInstances.length; index += 1) {
          const sproutInstance = sproutInstances[index];
          const wrapped = wrapPointNear(sproutInstance, player, 272);
          const nextX = wrapped.x;
          const nextY = wrapped.y;
          if (nextX === sproutInstance.x && nextY === sproutInstance.y) continue;
          sproutInstance.x = nextX;
          sproutInstance.y = nextY;
          tempMatrix.compose(
            new THREE.Vector3(sproutInstance.x, sproutInstance.y, sproutInstance.z),
            new THREE.Quaternion(),
            new THREE.Vector3(sproutInstance.scale, sproutInstance.scale, 1),
          );
          sprouts.setMatrixAt(index, tempMatrix);
          sproutsRebased = true;
        }
        if (sproutsRebased) sprouts.instanceMatrix.needsUpdate = true;

        for (const pool of neighborhoodPropPools) {
          if (!pool.mesh.visible) continue;
          let poolChanged = false;
          for (let index = 0; index < pool.instances.length; index += 1) {
            const instance = pool.instances[index];
            const wrapped = nearestToroidalPoint(
              { x: instance.canonicalX, y: instance.canonicalY },
              player,
              activeWorldPeriod,
            );
            const available = unlockedSet.has(instance.neighborhood as NeighborhoodId);
            instance.x = wrapped.x;
            instance.y = wrapped.y;
            const footOffset = (pool.kind === "tree" || pool.kind === "lamp" ? 1.38 : 0.9) * instance.scale;
            instance.z = worldDepthForFootY(instance.y - footOffset, -0.16);
            const sway = pool.kind === "tree"
              ? Math.sin(now * 0.0016 + index * 0.73 + instance.neighborhood) * (0.008 + gust * 0.045)
              : 0;
            const visibleScale = available ? instance.scale : 0;
            tempMatrix.compose(
              new THREE.Vector3(instance.x, instance.y, instance.z),
              new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), instance.rotation + sway),
              new THREE.Vector3(visibleScale, visibleScale, 1),
            );
            pool.mesh.setMatrixAt(index, tempMatrix);
            poolChanged = true;
          }
          if (poolChanged) pool.mesh.instanceMatrix.needsUpdate = true;
        }

        for (const prop of paperPropVisuals) {
          const completedLocalCount = completedProjectsByNeighborhood[prop.neighborhood]?.length ?? 0;
          const available = unlockedSet.has(prop.neighborhood as NeighborhoodId)
            && completedLocalCount >= prop.revealAfter;
          if (available && !prop.loaded && !prop.loading) {
            prop.loading = true;
            paperPropLoader.load(
              prop.path,
              (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace;
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false;
                prop.texture = texture;
                prop.mesh.material.map = texture;
                prop.mesh.material.needsUpdate = true;
                prop.loaded = true;
                prop.loading = false;
              },
              undefined,
              () => { prop.loading = false; },
            );
          }
          const wrapped = nearestToroidalPoint(prop.canonical, player, activeWorldPeriod);
          prop.mesh.position.x = wrapped.x;
          prop.mesh.position.y = wrapped.y;
          prop.mesh.position.z = worldDepthForFootY(wrapped.y - prop.footOffset, -0.04);
          const showing = available && prop.loaded;
          prop.mesh.visible = showing;
          if (!showing) continue;
          const sway = /tree|planter|flower/.test(prop.path)
            ? Math.sin(now * 0.0011 + prop.swayPhase) * (0.006 + gust * 0.025)
            : 0;
          prop.mesh.rotation.z = sway;
          const targetScale = prop.baseScale;
          const nextScale = THREE.MathUtils.lerp(prop.mesh.scale.x, targetScale, 1 - Math.exp(-delta * 3.8));
          prop.mesh.scale.setScalar(nextScale);
          prop.mesh.material.opacity = THREE.MathUtils.lerp(prop.mesh.material.opacity, 1, 1 - Math.exp(-delta * 3.2));
          prop.mesh.material.color.copy(daySurface).lerp(nightSurface, nightAmount * 0.16);
        }

        for (const visual of neighborhoodTileVisuals) {
          const instance = visual.instance;
          const wrapped = wrapPointNear(instance, player, neighborhoodPeriod);
          if (wrapped.x === instance.x && wrapped.y === instance.y) continue;
          instance.x = wrapped.x;
          instance.y = wrapped.y;
          visual.mesh.position.x = instance.x;
          visual.mesh.position.y = instance.y;
        }

        for (const visual of neighborhoodChapterVisuals) {
          const wrapped = nearestToroidalPoint(visual.canonicalCenter, player, activeWorldPeriod);
          visual.center.x = wrapped.x;
          visual.center.y = wrapped.y;
          visual.mesh.position.x = wrapped.x;
          visual.mesh.position.y = wrapped.y;
        }
        for (const visual of neighborhoodSignVisuals) {
          const wrapped = nearestToroidalPoint(visual.canonical, player, activeWorldPeriod);
          visual.mesh.position.x = wrapped.x;
          visual.mesh.position.y = wrapped.y;
          visual.mesh.position.z = worldDepthForFootY(wrapped.y - visual.mesh.geometry.parameters.height * 0.5, 0.02);
        }
        for (const vignette of ambientVignettes) {
          const life = neighborhoodLifeProgress[vignette.neighborhood] ?? 0;
          const wrapped = nearestToroidalPoint(vignette.canonical, player, activeWorldPeriod);
          vignette.group.position.x = wrapped.x;
          vignette.group.position.y = wrapped.y;
          vignette.group.visible = unlockedSet.has(vignette.neighborhood as NeighborhoodId)
            && (completedProjectsByNeighborhood[vignette.neighborhood]?.length ?? 0) >= 3;
          if (!vignette.group.visible) continue;
          vignette.actors.forEach((actor, actorIndex) => {
            crowdTint.copy(crowdWhite).lerp(
              crowdLifeTargets[(vignette.neighborhood + actorIndex * 2) % crowdLifeTargets.length],
              life * 0.76,
            );
            actor.material.color.copy(crowdTint);
            actor.rotation.z = Math.sin(now * 0.0014 + actorIndex * 2.1 + vignette.neighborhood) * 0.025;
            actor.position.z = worldDepthForFootY(wrapped.y + actor.position.y - 0.79, 0.025);
          });
          if (vignette.kind === "soccer" && vignette.props[0]) {
            const travel = (Math.sin(now * 0.0015 + vignette.neighborhood) + 1) * 0.5;
            vignette.props[0].position.x = THREE.MathUtils.lerp(-1.55, 1.55, travel);
            vignette.props[0].position.y = -0.22 + Math.sin(Math.PI * travel) * 0.62;
          } else if (vignette.kind === "family" && vignette.props[0]) {
            vignette.props[0].position.x = Math.sin(now * 0.0011 + vignette.neighborhood) * 0.92;
            vignette.props[0].position.y = 0.05 + Math.abs(Math.cos(now * 0.0011 + vignette.neighborhood)) * 0.34;
          } else if (vignette.kind === "fetch" && vignette.props[0]) {
            const run = Math.sin(now * 0.00125 + vignette.neighborhood);
            vignette.props[0].position.x = run * 1.45;
            vignette.props[0].position.y = -0.08 + Math.abs(Math.cos(now * 0.0025)) * 0.08;
            vignette.props[0].scale.x = run < 0 ? -1 : 1;
          } else if (vignette.kind === "reader" && vignette.props.at(-1)) {
            vignette.props.at(-1)!.rotation.z = Math.sin(now * 0.0008) * 0.018;
          }
          vignette.props.forEach((prop) => {
            prop.position.z = worldDepthForFootY(
              wrapped.y + prop.position.y - prop.geometry.parameters.height * 0.5,
              0.04,
            );
          });
        }
        const wrappedPlanet = nearestToroidalPoint(worldPlanetCanonical, player, activeWorldPeriod);
        worldPlanet.position.x = wrappedPlanet.x;
        worldPlanet.position.y = wrappedPlanet.y;

        for (let index = 0; index < projects.length; index += 1) {
          const project = projects[index];
          const wrapped = nearestToroidalPoint(project.canonicalPlot, player, activeWorldPeriod);
          const nextX = wrapped.x;
          const nextY = wrapped.y;
          const shiftX = nextX - project.plot.x;
          const shiftY = nextY - project.plot.y;
          for (const tokenVisual of project.tokens) {
            const wrappedToken = nearestToroidalPoint(tokenVisual.canonical, player, activeWorldPeriod);
            tokenVisual.mesh.position.x = wrappedToken.x;
            tokenVisual.mesh.position.y = wrappedToken.y;
            tokenVisual.mesh.position.z = worldDepthForFootY(wrappedToken.y - 0.84, 0.14);
          }
          const buildingFoot = buildingFootY(
            project.asset,
            project.constructionStage ?? 0,
            project.formCount,
            nextY,
          );
          if (project.building) project.building.position.z = worldDepthForFootY(buildingFoot);
          if (project.improvementGroup) project.improvementGroup.position.z = worldDepthForFootY(nextY - 1.1, 0.03);
          if (project.activity) project.activity.position.z = worldDepthForFootY(buildingFoot, 0.06);
          if (project.branding) project.branding.position.z = worldDepthForFootY(buildingFoot, 0.05);
          if (project.remainingLabel) project.remainingLabel.position.z = worldDepthForFootY(buildingFoot, 0.08);
          if (shiftX === 0 && shiftY === 0) continue;
          project.plot.x = nextX;
          project.plot.y = nextY;
          if (project.building) {
            project.building.position.x += shiftX;
            project.building.position.y += shiftY;
          }
          if (project.plotHalo) {
            project.plotHalo.position.x += shiftX;
            project.plotHalo.position.y += shiftY;
          }
          if (project.remainingLabel) {
            project.remainingLabel.position.x += shiftX;
            project.remainingLabel.position.y += shiftY;
          }
          if (project.branding) {
            project.branding.position.x += shiftX;
            project.branding.position.y += shiftY;
          }
          if (project.improvementGroup) {
            project.improvementGroup.position.x += shiftX;
            project.improvementGroup.position.y += shiftY;
          }
          if (project.activity) {
            project.activity.position.x += shiftX;
            project.activity.position.y += shiftY;
          }
        }

        for (let index = 0; index < reserveTokens.length; index += 1) {
          const reserve = reserveTokens[index];
          const wrapped = nearestToroidalPoint({ x: reserve.homeX, y: reserve.homeY }, player, activeWorldPeriod);
          reserve.x = wrapped.x;
          reserve.y = wrapped.y;
          const reserveAvailable = unlockedSet.has(reserve.neighborhood as NeighborhoodId) && reserve.neighborhood >= 3;
          if (reserveAvailable && !reserve.collected && Math.hypot(reserve.x - player.x, reserve.y - player.y) < 1.12) {
            const result = collectReserveToken(stateRef.current, reserve.id);
            if (result.collected) {
              stateRef.current = result.state;
              state = result.state;
              reserve.collected = true;
              setReserveCount(state.town.reserveCollectedIds.length);
              playNote(659.25, 0.42, 0.036);
              playNote(987.77, 0.58, 0.024, 0.08);
              if (navigator.vibrate) navigator.vibrate([10, 28, 10]);
              createReserveFx(now);
            }
          }
          const pulse = 0.9 + Math.sin(now * 0.0032 + reserve.phase) * 0.1;
          const scale = reserve.collected || !reserveAvailable ? 0 : pulse;
          tempMatrix.compose(
            new THREE.Vector3(
              reserve.x,
              reserve.y + Math.sin(now * 0.0021 + reserve.phase) * 0.13,
              worldDepthForFootY(reserve.y - 0.64, 0.14),
            ),
            new THREE.Quaternion(),
            new THREE.Vector3(scale, scale, 1),
          );
          reserveMesh.setMatrixAt(index, tempMatrix);
        }
        reserveMesh.instanceMatrix.needsUpdate = true;

        const exchangeProject = projects.find((project) => project.asset.id === "hidden-stock-exchange");
        const exchangeIsNear = Boolean(
          exchangeProject
          && isExchangeOpen(stateRef.current)
          && Math.hypot(exchangeProject.plot.x - player.x, exchangeProject.plot.y - player.y) < 5.1,
        );
        const exchangeShouldOpen = isExchangeOpen(stateRef.current)
          && (exchangeIsNear || now < exchangeAutoOpenUntil);
        if (exchangeProject?.building) {
          exchangeProject.building.material.opacity = THREE.MathUtils.lerp(
            exchangeProject.building.material.opacity,
            exchangeIsNear ? 0.28 : 1,
            0.08,
          );
        }
        if (exchangeShouldOpen && !exchangeDismissedRef.current && (!exchangePanelShown || now - lastExchangePanelUpdate > 500)) {
          stateRef.current = refreshDailyPrices(stateRef.current, Date.now());
          state = stateRef.current;
          setExchangePanel(exchangeSnapshot(stateRef.current));
          exchangePanelShown = true;
          lastExchangePanelUpdate = now;
        } else if (!exchangeShouldOpen && exchangePanelShown) {
          setExchangePanel(null);
          exchangePanelShown = false;
          exchangeDismissedRef.current = false;
        } else if (!exchangeShouldOpen) {
          exchangeDismissedRef.current = false;
        }

        let peoplePassedThisFrame = 0;
        for (let index = 0; index < crowd.length; index += 1) {
          const person = crowd[index];
          const life = THREE.MathUtils.smoothstep(neighborhoodLifeProgress[person.neighborhood] ?? 0, 0, 1);
          const completedLocalCount = completedProjectsByNeighborhood[person.neighborhood]?.length ?? 0;
          const localPopulationTarget = Math.min(
            peoplePerNeighborhood,
            [0, 5, 9, 14, 20, 27, 34, 36][completedLocalCount] ?? 36,
          );
          crowdTint.copy(crowdWhite).lerp(
            crowdLifeTargets[(person.variant + person.neighborhood) % crowdLifeTargets.length],
            life * 0.72,
          );
          crowdMeshes[person.variant].setColorAt(person.slot, crowdTint);
          if (
            completedLocalCount === 0
            || person.arrivalOrder >= localPopulationTarget
            || !unlockedSet.has(person.neighborhood as NeighborhoodId)
          ) {
            tempMatrix.compose(
              new THREE.Vector3(person.x, person.y, 4),
              new THREE.Quaternion(),
              new THREE.Vector3(0, 0, 1),
            );
            crowdMeshes[person.variant].setMatrixAt(person.slot, tempMatrix);
            person.active = false;
            continue;
          }
          person.active = true;
          const wrappedHome = nearestToroidalPoint(
            { x: person.canonicalHomeX, y: person.canonicalHomeY },
            player,
            activeWorldPeriod,
          );
          const homeShiftX = wrappedHome.x - person.homeX;
          const homeShiftY = wrappedHome.y - person.homeY;
          const wrapped = homeShiftX !== 0 || homeShiftY !== 0;
          person.homeX = wrappedHome.x;
          person.homeY = wrappedHome.y;
          if (wrapped) {
            person.x += homeShiftX;
            person.y += homeShiftY;
          }
          const dx = person.homeX - player.x;
          const dy = person.homeY - player.y;
          const distance = Math.max(0.001, Math.hypot(dx, dy));
          if (!person.passed && distance < 3.25) {
            person.passed = true;
            peoplePassedThisFrame += 1;
          }
          let desiredX = person.homeX + Math.sin(now * (0.00035 + life * 0.00012) + person.phase) * (0.1 + life * 0.16) * person.drift;
          let desiredY = person.homeY + Math.cos(now * (0.00031 + life * 0.0001) + person.phase) * (0.08 + life * 0.13) * person.drift;
          if (distance < 5.35) {
            const strength = (1 - distance / 5.35) ** 1.55;
            const side = index % 2 === 0 ? 1 : -1;
            desiredX += (dx / distance) * strength * 3.9 + (-dy / distance) * strength * side * 1.2;
            desiredY += (dy / distance) * strength * 3.9 + (dx / distance) * strength * side * 1.2;
          }
          for (let trailIndex = 0; trailIndex < trail.length; trailIndex += 1) {
            const wake = trail[trailIndex];
            const wx = person.homeX - wake.x;
            const wy = person.homeY - wake.y;
            const wakeDistance = Math.max(0.01, Math.hypot(wx, wy));
            if (wakeDistance < 1.45) {
              const fade = 1 - (now - wake.born) / 3500;
              desiredX += (wx / wakeDistance) * fade * 1.05;
              desiredY += (wy / wakeDistance) * fade * 1.05;
            }
          }
          let hasTownActivity = false;
          const localActivityProjects = projectsByNeighborhood[person.neighborhood] ?? [];
          const completedLocalProjects = completedProjectsByNeighborhood[person.neighborhood] ?? [];
          if (life > 0.86 && completedLocalProjects.length > 1 && index % 3 === 0) {
            const routePhase = now * (0.00007 + person.drift * 0.000025) + person.phase;
            const routeIndex = Math.floor(routePhase) % completedLocalProjects.length;
            const routeProgress = routePhase - Math.floor(routePhase);
            const fromProject = completedLocalProjects[routeIndex];
            const toProject = completedLocalProjects[(routeIndex + 1) % completedLocalProjects.length];
            const easedRoute = routeProgress * routeProgress * (3 - 2 * routeProgress);
            desiredX = THREE.MathUtils.lerp(fromProject.plot.x, toProject.plot.x, easedRoute);
            desiredY = THREE.MathUtils.lerp(fromProject.plot.y - 1.4, toProject.plot.y - 1.4, easedRoute);
            hasTownActivity = true;
          }
          if (!hasTownActivity && localActivityProjects.length > 0) {
            const activityProject = localActivityProjects[index % localActivityProjects.length];
            if (getRemainingPieces(stateRef.current, activityProject.asset.id as AssetId) === 0) {
              const slot = Math.floor(index / Math.max(1, localActivityProjects.length));
              const behavior = activityProject.asset.ambientPopulationBehavior;
              const namedRole = behavior.roles[slot % behavior.roles.length].toLowerCase();
              const residentHint = /resident|neighbor|gardener|keeper|worker|maker|engineer|operator/.test(namedRole);
              const customerHint = /visitor|guest|diner|reader|shopper|family|traveler|student/.test(namedRole);
              const activityRole = residentHint ? "resident" : customerHint ? "customer" : slot % 3 === 0 ? "customer" : slot % 3 === 1 ? "observer" : "resident";
              const sway = Math.sin(now * 0.0011 + person.phase);
              if (activityRole === "customer") {
                const lane = ((slot % 3) - 1) * 1.12;
                const approach = (Math.sin(now * 0.00042 + person.phase) + 1) * 0.5;
                desiredX = activityProject.plot.x + lane + sway * 0.12;
                desiredY = activityProject.plot.y - 1.5 - approach * 1.15;
              } else if (activityRole === "observer") {
                const angle = now * 0.00016 * (slot % 2 === 0 ? 1 : -1) + person.phase;
                desiredX = activityProject.plot.x + Math.cos(angle) * (2.75 + (slot % 2) * 0.42);
                desiredY = activityProject.plot.y + Math.sin(angle) * 1.72;
              } else {
                const side = slot % 2 === 0 ? -1 : 1;
                desiredX = activityProject.plot.x + side * (1.55 + (slot % 3) * 0.38) + sway * 0.24;
                desiredY = activityProject.plot.y + 2.12 + Math.cos(now * 0.0008 + person.phase) * 0.18;
              }
              hasTownActivity = true;
            }
          }
          crowdCollisionTarget.x = desiredX;
          crowdCollisionTarget.y = desiredY;
          resolveCrowdCollisions(crowdCollisionTarget, person.neighborhood, person.phase);
          desiredX = crowdCollisionTarget.x;
          desiredY = crowdCollisionTarget.y;
          const calmSpeed = 1 - Math.exp(-delta * (hasTownActivity ? 2.8 : distance < 5.35 ? 4.7 : 1.15));
          const requestedX = THREE.MathUtils.lerp(person.x, desiredX, calmSpeed);
          const requestedY = THREE.MathUtils.lerp(person.y, desiredY, calmSpeed);
          const moveX = requestedX - person.x;
          const moveY = requestedY - person.y;
          const moveDistance = Math.hypot(moveX, moveY);
          const maxCrowdStep = delta * (0.95 + life * 1.35 + (distance < 5.35 ? 0.85 : 0));
          const stepScale = moveDistance > maxCrowdStep ? maxCrowdStep / moveDistance : 1;
          person.x += moveX * stepScale;
          person.y += moveY * stepScale;
          const bob = Math.sin(now * (0.0018 + life * 0.0008) + person.phase) * (0.018 + life * 0.045);
          tempMatrix.compose(
            new THREE.Vector3(
              person.x,
              person.y + bob,
              worldDepthForFootY(person.y - person.size * 0.83, 0.01),
            ),
            new THREE.Quaternion(),
            new THREE.Vector3(person.size, person.size, 1),
          );
          crowdMeshes[person.variant].setMatrixAt(person.slot, tempMatrix);
          const greetingDistance = Math.hypot(person.x - player.x, person.y - player.y);
          if (
            person.greetingEligible
            && !person.greeted
            && walking > 0.28
            && greetingDistance < 2.45
            && now >= nextGreetingAllowedAt
          ) {
            person.greeted = true;
            const greetingIndex = (
              (index + person.neighborhood * 3 + state.town.crowdSeed) >>> 0
            ) % CROWD_GREETINGS.length;
            showCrowdGreeting(person, CROWD_GREETINGS[greetingIndex], now);
            nextGreetingAllowedAt = now + 14_000 + (index % 5) * 1_600;
          }
        }
        crowdMeshes.forEach((mesh) => {
          mesh.instanceMatrix.needsUpdate = true;
          if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        });
        if (activeGreeting) {
          const greeting = activeGreeting;
          const age = now - greeting.born;
          if (age >= greeting.duration || !greeting.person.active) {
            dismissCrowdGreeting();
          } else {
            const fadeIn = THREE.MathUtils.smoothstep(age, 0, 260);
            const fadeOut = 1 - THREE.MathUtils.smoothstep(age, greeting.duration - 520, greeting.duration);
            const visibleAmount = Math.min(fadeIn, fadeOut);
            greeting.mesh.material.opacity = visibleAmount;
            greeting.mesh.position.set(
              greeting.person.x,
              greeting.person.y + 2.08 + Math.sin(age * 0.004) * 0.035 + age * 0.000035,
              worldDepthForFootY(greeting.person.y - 1.3, 0.95),
            );
            const scale = 0.9 + visibleAmount * 0.1;
            greeting.mesh.scale.set(scale, scale, 1);
          }
        }
        if (peoplePassedThisFrame > 0) {
          stateRef.current = recordPeoplePassed(stateRef.current, peoplePassedThisFrame);
          state = stateRef.current;
        }

        let nearbyLandProject: ProjectVisual | undefined;
        let nearbyLandDistance = Number.POSITIVE_INFINITY;
        for (let index = 0; index < projects.length; index += 1) {
          const project = projects[index];
          const neighborhoodAvailable = unlockedSet.has(project.neighborhood as NeighborhoodId);
          if (!neighborhoodAvailable) {
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            if (project.building) project.building.visible = false;
            if (project.plotHalo) project.plotHalo.visible = false;
            if (project.branding) project.branding.visible = false;
            if (project.remainingLabel) project.remainingLabel.visible = false;
            if (project.improvementGroup) project.improvementGroup.visible = false;
            if (project.activity) project.activity.visible = false;
            continue;
          }
          const members = neighborhoodMembers[project.neighborhood] ?? [];
          project.flowAvailable = crowdProjectFlowAvailable(stateRef.current, project.asset, members);
          project.landOwned = project.asset.discovery !== "crowd"
            || isPlotOwned(stateRef.current, project.asset.id as AssetId);
          project.unlocked = project.flowAvailable && project.landOwned;
          if (project.asset.discovery === "crowd" && !project.flowAvailable) {
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            if (project.building) project.building.visible = false;
            if (project.plotHalo) project.plotHalo.visible = false;
            if (project.branding) project.branding.visible = false;
            if (project.remainingLabel) project.remainingLabel.visible = false;
            if (project.improvementGroup) project.improvementGroup.visible = false;
            if (project.activity) project.activity.visible = false;
            continue;
          }
          if (project.asset.discovery === "crowd" && !project.landOwned) {
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            if (project.building) project.building.visible = false;
            if (project.plotHalo) project.plotHalo.visible = true;
            if (project.branding) project.branding.visible = false;
            if (project.remainingLabel) project.remainingLabel.visible = false;
            if (project.improvementGroup) project.improvementGroup.visible = false;
            if (project.activity) project.activity.visible = false;
            const distance = Math.hypot(project.plot.x - player.x, project.plot.y - player.y);
            if (distance < 4.8 && distance < nearbyLandDistance) {
              nearbyLandDistance = distance;
              nearbyLandProject = project;
            }
            continue;
          }
          if (!project.artLoaded && project.building) {
            project.constructionTexture?.dispose();
            project.constructionTexture = createBuildingTexture(
              project.asset,
              project.constructionStage ?? 0,
              project.formCount,
            );
            project.building.material.map = project.constructionTexture;
            project.building.material.needsUpdate = true;
            project.artLoaded = true;
          }
          if (!project.tokenTextureLoaded) {
            const tokenTexture = createTokenTexture(project.asset);
            tokenTextures.set(project.asset.id as AssetId, tokenTexture);
            project.tokens.forEach((tokenVisual) => {
              tokenVisual.mesh.material.map = tokenTexture;
              tokenVisual.mesh.material.needsUpdate = true;
            });
            project.tokenTextureLoaded = true;
          }
          if (project.improvementGroup) project.improvementGroup.visible = project.landOwned;
          for (const improvement of project.improvements) {
            if (!improvement.visible) continue;
            const targetScale = improvement.geometry.parameters.width > 1.2 ? 1.08 : 1;
            improvement.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 1 - Math.exp(-delta * 5.8));
          }

          const projectCompleted = getRemainingPieces(stateRef.current, project.asset.id as AssetId) === 0;
          const playerIsNearProject = Math.hypot(project.plot.x - player.x, project.plot.y - player.y) < 13;
          if (project.activity) {
            project.activity.visible = projectCompleted && playerIsNearProject;
            if (project.activity.visible) {
              const activitySpeed = delta * (0.8 + (index % 4) * 0.16);
              if (project.activityKind === "rotor") {
                project.activity.rotation.z -= activitySpeed * 2.5;
              } else if (project.activityKind === "orbit") {
                project.activity.rotation.z += activitySpeed;
              }
              project.activity.children.forEach((child, childIndex) => {
                if (!(child instanceof THREE.Mesh)) return;
                if (project.activityKind === "steam") {
                  child.position.y = ((now * 0.00072 + childIndex * 0.23) % 1.5) - 0.25;
                  child.position.x = Math.sin(now * 0.0015 + childIndex) * 0.32;
                  child.scale.setScalar(0.75 + child.position.y * 0.3);
                } else if (project.activityKind === "lights") {
                  child.scale.setScalar(0.75 + Math.sin(now * 0.003 + childIndex * 1.7) * 0.28);
                }
                const material = child.material;
                if (!Array.isArray(material) && material instanceof THREE.MeshBasicMaterial) {
                  material.opacity = 0.5 + Math.sin(now * 0.0025 + childIndex) * 0.25;
                }
              });
            }
          }
          if (project.asset.discovery !== "exchange-exclusive") {
            if (project.building) project.building.visible = true;
            if (project.plotHalo) project.plotHalo.visible = false;
            if (project.branding) project.branding.visible = getAssetProgress(stateRef.current, project.asset.id as AssetId) > 0;
            if (project.remainingLabel) {
              project.remainingLabel.visible = getAssetProgress(stateRef.current, project.asset.id as AssetId) > 0 && !projectCompleted;
            }
          }
          if (project.pendingStage !== undefined) {
            const isVisible = Math.abs(project.plot.x - camera.position.x) < Math.abs(camera.right) * 0.9
              && Math.abs(project.plot.y - camera.position.y) < camera.top * 0.95;
            if (isVisible) applyProjectStage(project, project.pendingStage, now);
          }
          if (project.asset.discovery === "exchange-exclusive") {
            const revealed = isExchangeOpen(stateRef.current) || getAssetProgress(stateRef.current, project.asset.id as AssetId) > 0;
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            if (project.building) project.building.visible = revealed;
            if (project.plotHalo) project.plotHalo.visible = false;
            if (project.branding) project.branding.visible = revealed && getAssetProgress(stateRef.current, project.asset.id as AssetId) > 0;
            continue;
          }
          if (project.asset.id === "hidden-stock-exchange" && !isExchangeRevealEligible(stateRef.current)) {
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            continue;
          }
          const remaining = getRemainingPieces(stateRef.current, project.asset.id as AssetId);
          if (remaining <= 0) {
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            continue;
          }
          if (!project.unlocked) {
            project.tokens.forEach((tokenVisual) => { tokenVisual.mesh.visible = false; });
            continue;
          }
          for (const tokenVisual of project.tokens) {
            tokenVisual.mesh.visible = !isWorldTokenCollected(
              stateRef.current,
              project.asset.id as AssetId,
              tokenVisual.pieceIndex,
            );
            if (!tokenVisual.mesh.visible) continue;
            const wrappedToken = nearestToroidalPoint(tokenVisual.canonical, player, activeWorldPeriod);
            tokenVisual.mesh.position.y = wrappedToken.y
              + Math.sin(now * 0.0022 + project.pulsePhase + tokenVisual.pieceIndex * 0.8) * 0.08;
            const breathe = 0.92 + Math.sin(now * 0.003 + project.pulsePhase + tokenVisual.pieceIndex) * 0.09;
            tokenVisual.mesh.scale.setScalar(breathe);
            if (Math.hypot(tokenVisual.mesh.position.x - player.x, tokenVisual.mesh.position.y - player.y) < 1.16) {
              collectProject(project, tokenVisual, now);
            }
          }
          if (project.building) {
            project.building.material.color.copy(daySurface).lerp(nightSurface, nightAmount * 0.22);
            project.building.scale.lerp(
              new THREE.Vector3(
                projectBuildingScale(project.asset, project.constructionStage ?? 0, project.formCount),
                projectBuildingScale(project.asset, project.constructionStage ?? 0, project.formCount),
                1,
              ),
              0.08,
            );
          }
        }

        const gameIsComplete = stateRef.current.completedAssetIds.length >= GAME_ASSETS.length
          && stateRef.current.town.reserveCollectedIds.length >= RESERVE_TOKEN_COUNT;
        if (
          gameIsComplete
          && !stateRef.current.town.completionMessageSeen
          && !completionMessageQueued
        ) {
          completionMessageQueued = true;
          completionMessageOpen = true;
          pausedRef.current = true;
          setExchangePanel(null);
          setLandOffer(null);
          setCompletionMessageVisible(true);
          setPaused(true);
          playNote(523.25, 0.72, 0.04);
          playNote(659.25, 0.82, 0.035, 0.12);
          playNote(783.99, 1.05, 0.03, 0.24);
          if (navigator.vibrate) navigator.vibrate([18, 45, 24, 45, 32]);
        }

        if (now >= nextAmbientBirdAt && birds.length === 0) {
          const guidanceTarget = findActiveBirdGuidanceTarget(unlockedSet);
          ambientBirdSequence += 1;
          if (guidanceTarget) {
            createScreenCrossingFlock(guidanceTarget, now, "guidance");
            nextAmbientBirdAt = now + 15_000
              + ((stateRef.current.town.worldSeed + ambientBirdSequence * 7919) % 9_000);
          } else {
            nextAmbientBirdAt = now + 6_000;
          }
        }

        const landOfferKey = nearbyLandProject
          ? `${nearbyLandProject.asset.id}:${Math.floor(stateRef.current.budget)}`
          : "";
        if (landOfferKey !== activeLandOfferKey) {
          activeLandOfferKey = landOfferKey;
          setLandOffer(nearbyLandProject ? {
            assetId: nearbyLandProject.asset.id as AssetId,
            name: nearbyLandProject.asset.name,
            price: nearbyLandProject.landPrice,
            budget: stateRef.current.budget,
          } : null);
        }

        for (let index = pulses.length - 1; index >= 0; index -= 1) {
          const pulse = pulses[index];
          const t = (now - pulse.born) / pulse.duration;
          if (t < 0) {
            pulse.mesh.visible = false;
            continue;
          }
          pulse.mesh.visible = true;
          if (t >= 1) {
            scene.remove(pulse.mesh);
            pulse.mesh.material.dispose();
            pulses.splice(index, 1);
          } else {
            const eased = 1 - (1 - t) ** 3;
            pulse.mesh.scale.setScalar(0.35 + eased * 8.4);
            pulse.mesh.material.opacity = (1 - t) * 0.72;
          }
        }

        for (let index = particles.length - 1; index >= 0; index -= 1) {
          const particle = particles[index];
          const elapsed = now - particle.born - particle.delay;
          if (elapsed < 0) continue;
          const t = elapsed / particle.duration;
          if (t >= 1) {
            scene.remove(particle.mesh);
            particle.mesh.material.dispose();
            particles.splice(index, 1);
          } else {
            const eased = t * t * (3 - 2 * t);
            particle.mesh.position.x = THREE.MathUtils.lerp(particle.from.x, particle.to.x, eased);
            particle.mesh.position.y = THREE.MathUtils.lerp(particle.from.y, particle.to.y, eased) + Math.sin(Math.PI * t) * particle.arc;
            particle.mesh.material.opacity = Math.min(1, t * 5) * (1 - t * 0.45) * (particle.maxOpacity ?? 1);
          }
        }

        for (let index = birds.length - 1; index >= 0; index -= 1) {
          const bird = birds[index];
          const elapsed = now - bird.born - bird.delay;
          if (elapsed < 0) {
            bird.mesh.visible = false;
            continue;
          }
          const t = elapsed / bird.duration;
          if (t >= 1) {
            scene.remove(bird.mesh);
            bird.mesh.material.dispose();
            birds.splice(index, 1);
            continue;
          }
          bird.mesh.visible = true;
          const eased = t * t * (3 - 2 * t);
          bird.mesh.position.x = THREE.MathUtils.lerp(bird.from.x, bird.to.x, eased);
          bird.mesh.position.y = THREE.MathUtils.lerp(bird.from.y, bird.to.y, eased)
            + Math.sin(Math.PI * t) * bird.arc
            + Math.sin(now * 0.004 + bird.phase) * 0.1;
          const wingFold = 0.82 + Math.abs(Math.sin(now * 0.008 + bird.phase)) * 0.23;
          const arriveFade = Math.min(1, t * 8) * Math.min(1, (1 - t) * 6);
          bird.mesh.scale.set(
            bird.baseScale * wingFold * arriveFade,
            bird.baseScale * arriveFade,
            1,
          );
          bird.mesh.material.opacity = bird.maxOpacity * arriveFade;
        }

        if (now - lastHudUpdate > 350) {
          stateRef.current = accrueActiveBudget(stateRef.current, Date.now());
          state = stateRef.current;
          setHud({ budget: state.budget });
          lastHudUpdate = now;
        }
        if (now - lastSave > 3000) {
          stateRef.current = saveGameState(stateRef.current);
          state = stateRef.current;
          lastSave = now;
        }
      }

      renderer.render(scene, camera);
    };
    animationFrame = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", resize);
      window.removeEventListener("touchend", initializeSound);
      renderer.domElement.removeEventListener("pointerdown", onCanvasPointerDown);
      renderer.domElement.removeEventListener("pointermove", onCanvasPointerMove);
      renderer.domElement.removeEventListener("pointerup", onCanvasPointerEnd);
      renderer.domElement.removeEventListener("pointercancel", onCanvasPointerEnd);
      stateRef.current = saveGameState(stateRef.current);
      if (audio) {
        window.clearInterval(audio.timer);
        void audio.context.close();
      }
      dismissCrowdGreeting();
      renderer.dispose();
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh) && !(object instanceof THREE.InstancedMesh)) return;
        object.geometry?.dispose();
        const material = object.material;
        if (Array.isArray(material)) material.forEach((item) => item.dispose());
        else material?.dispose();
      });
      groundTexture.dispose();
      sproutTexture.dispose();
      neighborhoodTextures.forEach((texture) => texture.dispose());
      neighborhoodTileTextures.forEach((texture) => texture.dispose());
      neighborhoodPatchTextures.forEach((texture) => texture.dispose());
      neighborhoodSignVisuals.forEach((visual) => visual.texture.dispose());
      worldPlanetTexture.dispose();
      paperPropVisuals.forEach((visual) => visual.texture?.dispose());
      crowdTextures.forEach((texture) => texture.dispose());
      Object.values(ambientActivityTextures).forEach((texture) => texture.dispose());
      plotTexture.dispose();
      tokenTextures.forEach((texture) => texture.dispose());
      numberTextures.forEach((texture) => texture.dispose());
      projects.forEach((project) => project.building?.material.map?.dispose());
      onReLogoTexture.dispose();
      reserveTexture.dispose();
      birdLeftTexture.dispose();
      birdRightTexture.dispose();
      wally.textures.forEach((texture) => texture.dispose());
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="wally-game" aria-label="WALLY WORLD game">
      <div ref={mountRef} className="wally-stage" />

      <div className="wally-hud" aria-label="Town status">
        <div className="wally-budget" aria-label={`Budget ${Math.floor(hud.budget)}`}>
          <span className="wally-budget-mark" aria-hidden="true">$</span>
          <span>{Math.floor(hud.budget).toLocaleString()}</span>
        </div>
      </div>

      <button
        type="button"
        className="wally-pause-button"
        aria-label="Pause"
        onPointerDown={(event) => {
          event.stopPropagation();
          initializeSoundRef.current();
        }}
        onClick={() => {
          setPaused(true);
        }}
      >
        <span /><span />
      </button>

      {!ready && <div className="wally-loading" aria-label="Loading WALLY WORLD"><span /></div>}

      {landOffer && !paused && !exchangePanel && (
        <div
          className="wally-land-offer"
          role="dialog"
          aria-label={`Land available for ${landOffer.name}`}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <span className="wally-land-flag" aria-hidden="true">$</span>
          <span className="wally-land-copy">
            <strong>Available plot</strong>
            <small>{landOffer.name}</small>
          </span>
          <button
            type="button"
            disabled={landOffer.budget < landOffer.price}
            onClick={() => purchaseLandRef.current(landOffer.assetId)}
          >
            {landOffer.budget < landOffer.price ? `Save $${landOffer.price}` : `Buy · $${landOffer.price}`}
          </button>
        </div>
      )}

      {exchangePanel && !paused && (
        <div
          className="wally-exchange-panel"
          role="dialog"
          aria-label="Wally World Exchange"
          onPointerDown={(event) => event.stopPropagation()}
        >
          <div className="wally-exchange-head">
            <span className="wally-exchange-seal" aria-hidden="true">W</span>
            <span>Exchange</span>
            <button
              type="button"
              aria-label="Close exchange"
              onClick={() => {
                exchangeDismissedRef.current = true;
                setExchangePanel(null);
              }}
            >×</button>
          </div>
          <div className="wally-exchange-cards">
            {exchangePanel.cards.map((card) => {
              const sold = card.remaining === 0;
              const affordable = exchangePanel.budget >= card.price;
              return (
                <article className="wally-exchange-card" key={card.id}>
                  <span className={`wally-stock-icon is-${card.icon}`} aria-hidden="true">
                    {EXCHANGE_ICON_GLYPHS[card.icon]}
                  </span>
                  <span className="wally-stock-name">{card.name}</span>
                  <span className="wally-stock-price">${card.price}</span>
                  {card.remaining > 0 && <span className="wally-stock-remaining">{card.remaining}</span>}
                  <button
                    type="button"
                    disabled={sold || !affordable}
                    aria-label={sold ? `${card.name} complete` : `Buy ${card.name} for ${card.price}`}
                    onClick={() => purchaseExchangeRef.current(card.id)}
                  >
                    {sold ? "✓" : "Buy"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {completionMessageVisible && (
        <div
          className="wally-completion-layer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wally-completion-title"
          aria-describedby="wally-completion-copy"
        >
          <div className="wally-completion-card">
            <span className="wally-completion-glow" aria-hidden="true" />
            <p className="wally-completion-kicker">100% complete</p>
            <h1 id="wally-completion-title">Congratulations, you&apos;ve brought the world onchain.</h1>
            <p id="wally-completion-copy">
              You&apos;re a hero to the herd and humanity. You now have more blessings and good karma throughout your life.
            </p>
            <button type="button" onClick={() => dismissCompletionRef.current()}>Trunks up!</button>
          </div>
        </div>
      )}

      {paused && !completionMessageVisible && (
        <div className="wally-pause-layer" role="dialog" aria-modal="true" aria-label="WALLY WORLD paused">
          <div className="wally-pause-card">
            <h1>WALLY WORLD</h1>
            <p className="wally-reserve-status">WALLY Reserve {reserveCount} / {RESERVE_TOKEN_COUNT}</p>
            <button type="button" className="wally-continue" onClick={() => setPaused(false)}>Continue</button>
            <button
              type="button"
              className="wally-sound-toggle"
              aria-pressed={soundOn}
              onClick={() => {
                initializeSoundRef.current();
                setSoundOn((value) => !value);
              }}
            >
              Sound {soundOn ? "on" : "off"}
            </button>
            <button
              type="button"
              className={`wally-restart ${restartConfirm ? "is-confirming" : ""}`}
              onClick={() => {
                if (!restartConfirm) {
                  setRestartConfirm(true);
                  return;
                }
                clearSavedGameState();
                window.location.reload();
              }}
            >
              {restartConfirm ? "Tap again to restart" : "Restart town"}
            </button>
            {restartConfirm && (
              <button type="button" className="wally-restart-cancel" onClick={() => setRestartConfirm(false)}>Keep my town</button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
