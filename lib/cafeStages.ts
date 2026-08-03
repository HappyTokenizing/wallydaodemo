import * as THREE from "three";

/** The four visual milestones used by the Sunbeam Cafe build animation. */
export type CafeConstructionStage = 0 | 1 | 2 | 3;

export interface CafeStageTextureOptions {
  /** Square texture resolution. 512 is crisp on phones without wasting memory. */
  readonly size?: number;
  /** Stable seed for the subtle hand-painted variation. */
  readonly seed?: number;
  /** Override Three's default color-space choice when matching a custom pipeline. */
  readonly colorSpace?: THREE.ColorSpace;
  /** Pixel ratio used by the receiving renderer when choosing anisotropy. */
  readonly anisotropy?: number;
}

export interface CafeStageMaterialOptions extends CafeStageTextureOptions {
  readonly opacity?: number;
  readonly depthTest?: boolean;
}

interface Point {
  readonly x: number;
  readonly y: number;
}

const PALETTE = {
  ink: "#433b38",
  shadow: "#6f5c55",
  deepShadow: "#4f4240",
  paper: "#f7ecd5",
  cream: "#fff2d0",
  butter: "#e9bc68",
  butterLight: "#f8dc91",
  coral: "#cf725f",
  coralDark: "#9d514b",
  coralLight: "#ef9a7e",
  teal: "#4d8781",
  tealLight: "#91beb0",
  glass: "#b8d6cf",
  blueprint: "#568da2",
  blueprintLight: "#b7d8d4",
  timber: "#956956",
  leaf: "#557a58",
  leafLight: "#8faa69",
  terracotta: "#bd6e52",
} as const;

function mulberry32(seed: number): () => number {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4_294_967_296;
  };
}

function roundedRectPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  const r = Math.min(radius, Math.abs(width) / 2, Math.abs(height) / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.lineTo(x + width - r, y);
  context.quadraticCurveTo(x + width, y, x + width, y + r);
  context.lineTo(x + width, y + height - r);
  context.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  context.lineTo(x + r, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - r);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
  context.closePath();
}

function fillOrganicPolygon(
  context: CanvasRenderingContext2D,
  points: readonly Point[],
  fill: string,
  stroke: string = PALETTE.ink,
  lineWidth: number = 7,
): void {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const point = points[index];
    const middleX = (previous.x + point.x) / 2;
    const middleY = (previous.y + point.y) / 2;
    context.quadraticCurveTo(previous.x, previous.y, middleX, middleY);
  }
  const last = points[points.length - 1];
  const first = points[0];
  context.quadraticCurveTo(last.x, last.y, (last.x + first.x) / 2, (last.y + first.y) / 2);
  context.quadraticCurveTo(first.x, first.y, first.x, first.y);
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  if (lineWidth > 0) {
    context.strokeStyle = stroke;
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.stroke();
  }
}

function brushStroke(
  context: CanvasRenderingContext2D,
  from: Point,
  to: Point,
  color: string,
  width: number,
  alpha = 1,
): void {
  context.save();
  context.globalAlpha = alpha;
  context.strokeStyle = color;
  context.lineWidth = width;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.quadraticCurveTo(
    (from.x + to.x) / 2 + width * 0.08,
    (from.y + to.y) / 2 - width * 0.05,
    to.x,
    to.y,
  );
  context.stroke();
  context.restore();
}

function paintGroundShadow(context: CanvasRenderingContext2D, strength = 0.22): void {
  const gradient = context.createRadialGradient(267, 402, 15, 267, 402, 196);
  gradient.addColorStop(0, `rgba(72, 49, 46, ${strength})`);
  gradient.addColorStop(0.72, `rgba(72, 49, 46, ${strength * 0.42})`);
  gradient.addColorStop(1, "rgba(72, 49, 46, 0)");
  context.save();
  context.scale(1, 0.32);
  context.fillStyle = gradient;
  context.beginPath();
  context.ellipse(267, 1255, 198, 150, -0.03, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function paintBlueprintGround(context: CanvasRenderingContext2D): void {
  context.save();
  context.globalAlpha = 0.72;
  context.strokeStyle = PALETTE.blueprint;
  context.lineWidth = 4;
  context.setLineDash([13, 10]);
  roundedRectPath(context, 102, 205, 310, 192, 25);
  context.stroke();
  context.setLineDash([5, 9]);
  context.beginPath();
  context.moveTo(135, 249);
  context.lineTo(380, 249);
  context.moveTo(257, 213);
  context.lineTo(257, 386);
  context.stroke();
  context.restore();

  for (const [x, y] of [[102, 205], [412, 205], [102, 397], [412, 397]] as const) {
    brushStroke(context, { x: x - 6, y: y - 23 }, { x: x + 6, y: y + 28 }, PALETTE.timber, 9);
    brushStroke(context, { x: x - 11, y: y - 18 }, { x: x + 10, y: y - 18 }, PALETTE.cream, 4);
  }

  context.save();
  context.fillStyle = "rgba(121, 160, 151, .12)";
  context.strokeStyle = PALETTE.blueprintLight;
  context.lineWidth = 6;
  roundedRectPath(context, 121, 240, 274, 144, 18);
  context.fill();
  context.stroke();
  context.restore();

  // Rolled plan: large enough to remain legible on a small phone.
  context.save();
  context.translate(365, 398);
  context.rotate(-0.08);
  context.fillStyle = PALETTE.paper;
  context.strokeStyle = PALETTE.blueprint;
  context.lineWidth = 5;
  roundedRectPath(context, -54, -40, 107, 68, 9);
  context.fill();
  context.stroke();
  context.strokeStyle = PALETTE.blueprintLight;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(-35, -20);
  context.lineTo(32, -20);
  context.lineTo(32, 3);
  context.moveTo(-34, 8);
  context.lineTo(5, 8);
  context.stroke();
  context.restore();
}

function paintFoundation(context: CanvasRenderingContext2D): void {
  fillOrganicPolygon(context, [
    { x: 111, y: 356 }, { x: 139, y: 237 }, { x: 365, y: 226 },
    { x: 407, y: 353 }, { x: 371, y: 399 }, { x: 146, y: 399 },
  ], PALETTE.paper, PALETTE.ink, 8);
  brushStroke(context, { x: 137, y: 364 }, { x: 375, y: 364 }, PALETTE.butterLight, 22, 0.6);
  brushStroke(context, { x: 154, y: 381 }, { x: 360, y: 381 }, PALETTE.coralLight, 9, 0.35);
}

function paintTimberFrame(context: CanvasRenderingContext2D): void {
  const beams: readonly [Point, Point, number][] = [
    [{ x: 139, y: 350 }, { x: 139, y: 190 }, 13],
    [{ x: 375, y: 350 }, { x: 375, y: 190 }, 13],
    [{ x: 139, y: 192 }, { x: 375, y: 192 }, 13],
    [{ x: 143, y: 198 }, { x: 252, y: 117 }, 12],
    [{ x: 252, y: 117 }, { x: 374, y: 194 }, 12],
    [{ x: 252, y: 125 }, { x: 252, y: 350 }, 10],
    [{ x: 145, y: 338 }, { x: 251, y: 201 }, 7],
    [{ x: 367, y: 338 }, { x: 257, y: 201 }, 7],
  ];
  for (const [from, to, width] of beams) {
    brushStroke(context, from, to, PALETTE.deepShadow, width + 5, 0.28);
    brushStroke(context, { x: from.x - 2, y: from.y - 2 }, { x: to.x - 2, y: to.y - 2 }, PALETTE.timber, width);
    brushStroke(context, from, to, PALETTE.butterLight, Math.max(2, width * 0.19), 0.4);
  }
  // Two plaster wall sections communicate visible progress without hiding the frame.
  fillOrganicPolygon(context, [
    { x: 148, y: 221 }, { x: 242, y: 218 }, { x: 242, y: 343 }, { x: 148, y: 343 },
  ], PALETTE.butterLight, PALETTE.timber, 5);
  fillOrganicPolygon(context, [
    { x: 265, y: 220 }, { x: 367, y: 219 }, { x: 367, y: 283 }, { x: 265, y: 283 },
  ], PALETTE.cream, PALETTE.timber, 5);
}

function paintCafeShell(context: CanvasRenderingContext2D): void {
  // Warm dark underpaint peeking around the silhouette creates a cut-paper edge.
  fillOrganicPolygon(context, [
    { x: 119, y: 347 }, { x: 126, y: 185 }, { x: 252, y: 104 },
    { x: 387, y: 181 }, { x: 395, y: 352 }, { x: 364, y: 385 }, { x: 151, y: 385 },
  ], PALETTE.deepShadow, PALETTE.deepShadow, 0);
  fillOrganicPolygon(context, [
    { x: 131, y: 345 }, { x: 137, y: 192 }, { x: 252, y: 119 },
    { x: 378, y: 191 }, { x: 383, y: 345 }, { x: 357, y: 371 }, { x: 153, y: 371 },
  ], PALETTE.butter, PALETTE.ink, 8);

  // Gouache highlight and wall shading.
  brushStroke(context, { x: 151, y: 214 }, { x: 153, y: 327 }, PALETTE.butterLight, 18, 0.7);
  brushStroke(context, { x: 355, y: 210 }, { x: 357, y: 335 }, PALETTE.coralDark, 15, 0.28);

  // Coral roof with scalloped, irregular paint edge.
  fillOrganicPolygon(context, [
    { x: 118, y: 200 }, { x: 244, y: 103 }, { x: 259, y: 104 },
    { x: 395, y: 194 }, { x: 371, y: 214 }, { x: 251, y: 141 }, { x: 141, y: 220 },
  ], PALETTE.coral, PALETTE.ink, 8);
  brushStroke(context, { x: 154, y: 190 }, { x: 249, y: 122 }, PALETTE.coralLight, 9, 0.5);
}

function paintAwningAndWindows(context: CanvasRenderingContext2D, finished: boolean): void {
  // Bowed display window.
  context.save();
  context.fillStyle = PALETTE.glass;
  context.strokeStyle = PALETTE.ink;
  context.lineWidth = 7;
  roundedRectPath(context, 153, 237, 142, 99, 24);
  context.fill();
  context.stroke();
  context.globalAlpha = 0.6;
  brushStroke(context, { x: 171, y: 255 }, { x: 207, y: 246 }, PALETTE.cream, 7);
  brushStroke(context, { x: 183, y: 281 }, { x: 263, y: 259 }, PALETTE.cream, 4);
  context.restore();
  brushStroke(context, { x: 223, y: 241 }, { x: 223, y: 331 }, PALETTE.ink, 5);

  // Dark round-topped door and brass handle.
  context.save();
  context.fillStyle = PALETTE.teal;
  context.strokeStyle = PALETTE.ink;
  context.lineWidth = 7;
  roundedRectPath(context, 315, 234, 49, 125, 22);
  context.fill();
  context.stroke();
  context.fillStyle = PALETTE.butterLight;
  context.beginPath();
  context.arc(349, 299, 4.5, 0, Math.PI * 2);
  context.fill();
  context.restore();

  // Cream/coral cloth awning and its unmistakable scalloped hem.
  const awningY = 208;
  context.save();
  context.strokeStyle = PALETTE.ink;
  context.lineWidth = 7;
  context.fillStyle = PALETTE.cream;
  roundedRectPath(context, 141, awningY, 168, 49, 8);
  context.fill();
  context.stroke();
  for (let stripe = 0; stripe < 5; stripe += 1) {
    context.fillStyle = stripe % 2 === 0 ? PALETTE.coral : PALETTE.cream;
    context.beginPath();
    const x = 146 + stripe * 32;
    context.moveTo(x, awningY + 4);
    context.lineTo(x + 28, awningY + 4);
    context.lineTo(x + 34, awningY + 42);
    context.quadraticCurveTo(x + 18, awningY + 56, x + 2, awningY + 42);
    context.closePath();
    context.fill();
  }
  context.strokeStyle = PALETTE.ink;
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(144, awningY + 42);
  for (let x = 144; x <= 306; x += 16) {
    context.quadraticCurveTo(x + 8, awningY + 55, x + 16, awningY + 42);
  }
  context.stroke();
  context.restore();

  if (finished) {
    context.save();
    context.fillStyle = PALETTE.cream;
    context.strokeStyle = PALETTE.ink;
    context.lineWidth = 4;
    roundedRectPath(context, 187, 165, 128, 30, 10);
    context.fill();
    context.stroke();
    context.fillStyle = PALETTE.coralDark;
    context.font = "700 15px ui-rounded, system-ui, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("SUNBEAM", 251, 181);
    context.restore();
  }
}

function paintCafeDetails(context: CanvasRenderingContext2D, finished: boolean): void {
  // Terrace table and two stools.
  context.save();
  context.strokeStyle = PALETTE.ink;
  context.lineCap = "round";
  context.lineWidth = 6;
  context.beginPath();
  context.moveTo(92, 362);
  context.lineTo(154, 362);
  context.moveTo(123, 364);
  context.lineTo(123, 417);
  context.moveTo(103, 417);
  context.lineTo(143, 417);
  context.stroke();
  context.fillStyle = PALETTE.coral;
  context.beginPath();
  context.ellipse(123, 354, 39, 13, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.restore();

  // Oversized cup and readable looping steam.
  context.save();
  context.fillStyle = PALETTE.cream;
  context.strokeStyle = PALETTE.ink;
  context.lineWidth = 4;
  roundedRectPath(context, 105, 328, 29, 25, 6);
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(135, 340, 10, -Math.PI / 2, Math.PI / 2);
  context.stroke();
  context.strokeStyle = PALETTE.cream;
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(113, 321);
  context.bezierCurveTo(102, 308, 126, 301, 114, 286);
  context.moveTo(126, 320);
  context.bezierCurveTo(139, 306, 116, 299, 130, 284);
  context.stroke();
  context.restore();

  if (!finished) return;

  // Terracotta planters anchor both sides and add a lively finished silhouette.
  for (const [x, y, scale] of [[398, 361, 1], [78, 377, 0.82]] as const) {
    context.save();
    context.translate(x, y);
    context.scale(scale, scale);
    context.fillStyle = PALETTE.terracotta;
    context.strokeStyle = PALETTE.ink;
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(-23, 8);
    context.lineTo(23, 8);
    context.lineTo(17, 45);
    context.quadraticCurveTo(0, 53, -17, 45);
    context.closePath();
    context.fill();
    context.stroke();
    for (let leaf = 0; leaf < 6; leaf += 1) {
      const angle = -2.55 + leaf * 0.82;
      context.fillStyle = leaf % 2 === 0 ? PALETTE.leafLight : PALETTE.leaf;
      context.beginPath();
      context.ellipse(Math.cos(angle) * 18, -3 + Math.sin(angle) * 25, 8, 21, angle + Math.PI / 2, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }

  // Hanging lamp glow is a true highlight layer, not a flat colored dot.
  const glow = context.createRadialGradient(337, 219, 2, 337, 219, 44);
  glow.addColorStop(0, "rgba(255, 228, 146, .72)");
  glow.addColorStop(1, "rgba(255, 228, 146, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(337, 219, 44, 0, Math.PI * 2);
  context.fill();
  brushStroke(context, { x: 337, y: 187 }, { x: 337, y: 209 }, PALETTE.ink, 4);
  context.fillStyle = PALETTE.butterLight;
  context.strokeStyle = PALETTE.ink;
  context.lineWidth = 4;
  context.beginPath();
  context.arc(337, 217, 9, 0, Math.PI * 2);
  context.fill();
  context.stroke();
}

function paintStage(context: CanvasRenderingContext2D, stage: CafeConstructionStage): void {
  paintGroundShadow(context, stage === 0 ? 0.12 : stage === 3 ? 0.3 : 0.2);
  if (stage === 0) {
    paintBlueprintGround(context);
    return;
  }

  paintFoundation(context);
  if (stage === 1) {
    paintTimberFrame(context);
    return;
  }

  paintCafeShell(context);
  paintAwningAndWindows(context, stage === 3);
  paintCafeDetails(context, stage === 3);
}

function applyGouacheGrain(
  context: CanvasRenderingContext2D,
  size: number,
  seed: number,
): void {
  const random = mulberry32(seed);
  context.save();
  context.globalCompositeOperation = "source-atop";
  for (let index = 0; index < Math.max(420, size * 1.3); index += 1) {
    const x = random() * size;
    const y = random() * size;
    const radius = 0.35 + random() * 1.8;
    context.globalAlpha = 0.025 + random() * 0.055;
    context.fillStyle = random() > 0.46 ? PALETTE.cream : PALETTE.deepShadow;
    context.beginPath();
    context.ellipse(x, y, radius * 1.7, radius, random() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }
  // Dry-brush striations create organic variation that survives texture scaling.
  for (let index = 0; index < 34; index += 1) {
    const y = 90 + random() * 335;
    context.globalAlpha = 0.02 + random() * 0.025;
    context.strokeStyle = random() > 0.5 ? PALETTE.cream : PALETTE.deepShadow;
    context.lineWidth = 1 + random() * 2.4;
    context.beginPath();
    context.moveTo(65 + random() * 80, y);
    context.bezierCurveTo(190, y - 6, 325, y + 7, 440 - random() * 65, y + random() * 3);
    context.stroke();
  }
  context.restore();
}

/**
 * Paints one cafe milestone into a caller-owned canvas.
 * The canvas is cleared and resized, allowing texture reuse during a build reveal.
 */
export function paintCafeStageCanvas(
  canvas: HTMLCanvasElement,
  stage: CafeConstructionStage,
  options: Pick<CafeStageTextureOptions, "size" | "seed"> = {},
): HTMLCanvasElement {
  const size = Math.max(256, Math.min(1024, Math.round(options.size ?? 512)));
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("WALLY WORLD requires a 2D canvas context for cafe textures.");

  context.clearRect(0, 0, size, size);
  context.save();
  context.scale(size / 512, size / 512);
  paintStage(context, stage);
  context.restore();
  applyGouacheGrain(context, size, (options.seed ?? 0xcafe2026) + stage * 97);
  return canvas;
}

/** Creates a transparent, color-correct Three.js texture for one build milestone. */
export function createCafeStageTexture(
  stage: CafeConstructionStage,
  options: CafeStageTextureOptions = {},
): THREE.CanvasTexture {
  if (typeof document === "undefined") {
    throw new Error("createCafeStageTexture must be called in a browser/client component.");
  }
  const canvas = document.createElement("canvas");
  paintCafeStageCanvas(canvas, stage, options);
  const texture = new THREE.CanvasTexture(canvas);
  texture.name = `sunbeam-cafe-stage-${stage}`;
  texture.colorSpace = options.colorSpace ?? THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = Math.max(1, Math.min(16, Math.round(options.anisotropy ?? 4)));
  texture.needsUpdate = true;
  return texture;
}

/** Convenience wrapper for sprite/plane integration. Dispose both map and material. */
export function createCafeStageMaterial(
  stage: CafeConstructionStage,
  options: CafeStageMaterialOptions = {},
): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    map: createCafeStageTexture(stage, options),
    transparent: true,
    alphaTest: 0.015,
    opacity: options.opacity ?? 1,
    depthTest: options.depthTest ?? true,
    depthWrite: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
}

/** Updates an existing CanvasTexture in place, avoiding material churn mid-animation. */
export function setCafeTextureStage(
  texture: THREE.CanvasTexture,
  stage: CafeConstructionStage,
  options: Pick<CafeStageTextureOptions, "size" | "seed"> = {},
): void {
  const image = texture.image;
  if (!(image instanceof HTMLCanvasElement)) {
    throw new Error("setCafeTextureStage expects a CanvasTexture backed by an HTMLCanvasElement.");
  }
  paintCafeStageCanvas(image, stage, options);
  texture.name = `sunbeam-cafe-stage-${stage}`;
  texture.needsUpdate = true;
}
