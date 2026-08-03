import * as THREE from "three";

import { NEIGHBORHOODS, type NeighborhoodDefinition } from "./neighborhoods";

const PLANET_SIZE = 768;
const SHADOW_WIDTH = 384;
const SHADOW_HEIGHT = 192;

type Canvas2D = CanvasRenderingContext2D;

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}

function createCanvas(width: number, height: number): HTMLCanvasElement {
  if (typeof document === "undefined") {
    throw new Error("World landmark textures can only be created in a browser.");
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function getContext(canvas: HTMLCanvasElement): Canvas2D {
  const context = canvas.getContext("2d");
  if (!context) throw new Error("A 2D canvas context is required for world landmark textures.");
  return context;
}

function prepareTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

function textureCanvas(texture: THREE.CanvasTexture): HTMLCanvasElement {
  const canvas = texture.image as HTMLCanvasElement;
  if (!canvas || typeof canvas.getContext !== "function") {
    throw new Error("Expected a CanvasTexture backed by an HTML canvas.");
  }
  return canvas;
}

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function roundedPath(
  context: Canvas2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  const r = Math.min(radius, width / 2, height / 2);
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

function washBlotches(
  context: Canvas2D,
  random: () => number,
  colors: readonly string[],
  count: number,
  bounds: { x: number; y: number; width: number; height: number },
  opacity: number,
): void {
  context.save();
  context.globalCompositeOperation = "multiply";
  for (let index = 0; index < count; index += 1) {
    const x = bounds.x + random() * bounds.width;
    const y = bounds.y + random() * bounds.height;
    const radiusX = 8 + random() * Math.max(12, bounds.width * 0.12);
    const radiusY = 5 + random() * Math.max(9, bounds.height * 0.11);
    const gradient = context.createRadialGradient(x, y, 0, x, y, radiusX);
    gradient.addColorStop(0, colors[index % colors.length]);
    gradient.addColorStop(0.65, colors[index % colors.length]);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.globalAlpha = opacity * (0.25 + random() * 0.55);
    context.beginPath();
    context.ellipse(x, y, radiusX, radiusY, random() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function addPaperGrain(context: Canvas2D, random: () => number, width: number, height: number): void {
  context.save();
  context.fillStyle = "#5e5144";
  for (let index = 0; index < Math.round((width * height) / 620); index += 1) {
    context.globalAlpha = 0.015 + random() * 0.035;
    const size = 0.35 + random() * 1.2;
    context.fillRect(random() * width, random() * height, size, size);
  }
  context.restore();
}

function neighborhoodSignStage(progress: number): number {
  return Math.min(5, Math.max(1, Math.ceil(clamp01(progress) * 5)));
}

const SIGN_LINES: Readonly<Record<number, readonly string[]>> = {
  0: ["WALLY", "WORLD"],
  1: ["Tokenize", "N’ Chill"],
  2: ["Relax, we're", "moving onchain"],
  3: ["COMING FOR", "WALL ST"],
  4: ["Crypto Meets", "the World"],
  5: ["TokenizeThis"],
  6: ["Zeus' RWA", "Lounge"],
  7: ["Prosperity", "for All"],
  8: ["YOU MADE IT", "THIS FAR"],
  9: ["Happy", "Tokenizing"],
};

function drawSimpleNeighborhoodSign(
  canvas: HTMLCanvasElement,
  neighborhood: NeighborhoodDefinition,
  progress: number,
): void {
  const context = getContext(canvas);
  const stage = neighborhoodSignStage(progress);
  const random = seededRandom(0x51a9 + neighborhood.id * 977 + stage * 31);
  const width = canvas.width;
  const height = canvas.height;
  const inset = Math.max(28, Math.min(width, height) * 0.075);
  const radius = Math.min(width, height) * 0.16;
  context.clearRect(0, 0, width, height);
  context.save();
  context.shadowColor = "rgba(56,63,57,.16)";
  context.shadowBlur = 14;
  context.shadowOffsetY = 7;
  roundedPath(context, inset, inset, width - inset * 2, height - inset * 2, radius);
  context.fillStyle = "rgba(250,246,231,.97)";
  context.fill();
  context.restore();

  roundedPath(context, inset, inset, width - inset * 2, height - inset * 2, radius);
  context.strokeStyle = neighborhood.palette[2];
  context.globalAlpha = 0.55;
  context.lineWidth = Math.max(12, inset * 0.34);
  context.stroke();
  context.globalAlpha = 1;
  roundedPath(context, inset + 9, inset + 9, width - inset * 2 - 18, height - inset * 2 - 18, radius * 0.82);
  context.strokeStyle = "#4b524c";
  context.lineWidth = Math.max(5, inset * 0.14);
  context.stroke();

  const growthCount = 2 + stage * 2;
  for (let leaf = 0; leaf < growthCount; leaf += 1) {
    const side = leaf % 2 === 0 ? 1 : -1;
    const y = height * (0.25 + ((leaf * 0.173) % 0.52));
    const x = side > 0 ? width - inset * 1.18 : inset * 1.18;
    context.save();
    context.translate(x, y);
    context.rotate(side * (0.4 + random() * 0.35));
    context.fillStyle = neighborhood.palette[(leaf + 1) % neighborhood.palette.length];
    context.globalAlpha = 0.42 + stage * 0.07;
    context.beginPath();
    context.ellipse(0, 0, inset * 0.16, inset * 0.31, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  context.globalAlpha = 1;
  context.fillStyle = neighborhood.palette[1];
  context.beginPath();
  context.arc(width / 2, inset * 1.42, inset * 0.18, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#4b524c";
  context.lineWidth = Math.max(3, inset * 0.09);
  context.stroke();

  const lines = SIGN_LINES[neighborhood.id] ?? [neighborhood.sign];
  let fontSize = Math.min(width * 0.16, height * (lines.length === 1 ? 0.19 : 0.13));
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `750 ${fontSize}px ui-rounded, "Trebuchet MS", sans-serif`;
  while (Math.max(...lines.map((line) => context.measureText(line).width)) > width - inset * 3.1 && fontSize > 28) {
    fontSize -= 2;
    context.font = `750 ${fontSize}px ui-rounded, "Trebuchet MS", sans-serif`;
  }
  const lineHeight = fontSize * 1.08;
  const startY = height * 0.52 - ((lines.length - 1) * lineHeight) / 2;
  context.lineJoin = "round";
  context.strokeStyle = "rgba(250,246,231,.95)";
  context.lineWidth = Math.max(6, fontSize * 0.12);
  context.fillStyle = "#414943";
  lines.forEach((line, lineIndex) => {
    const y = startY + lineIndex * lineHeight;
    context.strokeText(line, width / 2, y);
    context.fillText(line, width / 2, y);
  });

  context.strokeStyle = neighborhood.palette[0];
  context.lineWidth = Math.max(5, inset * 0.13);
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(width * 0.33, height - inset * 1.48);
  context.quadraticCurveTo(width * 0.5, height - inset * 1.15, width * 0.67, height - inset * 1.48);
  context.stroke();
  addPaperGrain(context, random, width, height);
}

/** Reinterprets the supplied sign wording as simple hand-painted town art. */
export function createNeighborhoodSignTexture(
  neighborhood: NeighborhoodDefinition,
  progress = 0,
): THREE.Texture {
  const width = neighborhood.signAspect >= 1 ? 900 : 620;
  const height = Math.round(width / neighborhood.signAspect);
  const canvas = createCanvas(width, height);
  drawSimpleNeighborhoodSign(canvas, neighborhood, progress);
  return prepareTexture(canvas);
}

/** Repaints a sign with its next quiet growth stage. */
export function updateNeighborhoodSignTexture(
  texture: THREE.Texture,
  neighborhood: NeighborhoodDefinition,
  progress: number,
): THREE.Texture {
  const nextTexture = createNeighborhoodSignTexture(neighborhood, progress);
  texture.dispose();
  return nextTexture;
}

function districtPath(
  context: Canvas2D,
  centerX: number,
  centerY: number,
  radius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number,
): void {
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
  context.closePath();
}

function drawPlanet(canvas: HTMLCanvasElement, progressValues: readonly number[]): void {
  const context = getContext(canvas);
  const progress = NEIGHBORHOODS.map((_, index) => clamp01(progressValues[index] ?? 0));
  const random = seededRandom(0x57a11);
  const centerX = canvas.width / 2;
  const centerY = 236;
  const radius = 182;
  const innerRadius = 38;
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.save();
  context.shadowColor = "rgba(49,46,39,0.17)";
  context.shadowBlur = 12;
  context.shadowOffsetY = 7;
  context.beginPath();
  context.arc(centerX, centerY, radius + 7, 0, Math.PI * 2);
  context.fillStyle = "rgba(249,247,238,0.96)";
  context.fill();
  context.restore();

  const gap = 0.026;
  for (let index = 0; index < NEIGHBORHOODS.length; index += 1) {
    const district = NEIGHBORHOODS[index];
    const start = -Math.PI / 2 + (index / 10) * Math.PI * 2 + gap;
    const end = -Math.PI / 2 + ((index + 1) / 10) * Math.PI * 2 - gap;
    districtPath(context, centerX, centerY, radius, innerRadius, start, end);
    context.fillStyle = "rgba(225,221,207,0.44)";
    context.fill();

    if (progress[index] > 0) {
      context.save();
      districtPath(context, centerX, centerY, radius, innerRadius, start, end);
      context.clip();
      const fillDepth = (radius - innerRadius) * progress[index];
      const gradient = context.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, radius);
      gradient.addColorStop(0, district.palette[1]);
      gradient.addColorStop(0.64, district.palette[0]);
      gradient.addColorStop(1, district.palette[2]);
      context.fillStyle = gradient;
      context.globalAlpha = 0.68 + progress[index] * 0.24;
      context.beginPath();
      context.arc(centerX, centerY, innerRadius + fillDepth, start, end);
      context.arc(centerX, centerY, innerRadius, end, start, true);
      context.closePath();
      context.fill();
      washBlotches(context, random, district.palette, 3, {
        x: centerX - radius,
        y: centerY - radius,
        width: radius * 2,
        height: radius * 2,
      }, 0.08 + progress[index] * 0.12);
      context.restore();
    }

    context.save();
    context.strokeStyle = "rgba(68,78,71,0.5)";
    context.lineWidth = 1.8;
    districtPath(context, centerX, centerY, radius, innerRadius, start, end);
    context.stroke();
    context.restore();
  }

  // One quiet contour keeps the mural readable as a planet without turning it
  // into a technical chart.
  context.save();
  context.strokeStyle = "rgba(65,76,68,0.78)";
  context.lineWidth = 4;
  context.beginPath();
  context.arc(centerX, centerY, radius + 4, 0, Math.PI * 2);
  context.stroke();
  context.restore();

  // Central W mark reads as a geographic stamp, never as a minimap icon.
  context.save();
  context.translate(centerX, centerY + 4);
  context.rotate(-0.05);
  context.fillStyle = "rgba(249,247,238,0.9)";
  context.beginPath();
  context.arc(0, 0, 43, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgba(47,43,39,0.8)";
  context.lineWidth = 3;
  context.stroke();
  context.font = "800 42px ui-rounded, 'Trebuchet MS', sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#302d29";
  context.fillText("W", 0, 4);
  context.restore();

  addPaperGrain(context, random, canvas.width, 640);

  context.save();
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "800 35px ui-rounded, 'Trebuchet MS', sans-serif";
  context.lineWidth = 6;
  context.strokeStyle = "rgba(250,247,236,0.98)";
  context.strokeText("BRING THE WORLD ONCHAIN", centerX, 494);
  context.fillStyle = "#526b5f";
  context.fillText("BRING THE WORLD ONCHAIN", centerX, 494);
  context.restore();

  if (progress[0] >= 0.999) {
    const average = progress.reduce((sum, value) => sum + value, 0) / progress.length;
    const barX = 188;
    const barY = 548;
    const barWidth = 392;
    const barHeight = 22;
    context.save();
    roundedPath(context, barX, barY, barWidth, barHeight, barHeight / 2);
    context.fillStyle = "rgba(224,220,207,0.72)";
    context.fill();
    context.clip();
    const barGradient = context.createLinearGradient(barX, barY, barX + barWidth, barY);
    barGradient.addColorStop(0, NEIGHBORHOODS[0].palette[0]);
    barGradient.addColorStop(0.5, NEIGHBORHOODS[4].palette[1]);
    barGradient.addColorStop(1, NEIGHBORHOODS[9].palette[0]);
    context.fillStyle = barGradient;
    context.globalAlpha = 0.9;
    context.fillRect(barX, barY, barWidth * average, barHeight);
    context.restore();
    context.save();
    roundedPath(context, barX, barY, barWidth, barHeight, barHeight / 2);
    context.strokeStyle = "rgba(48,45,41,0.72)";
    context.lineWidth = 2.5;
    context.stroke();
    context.textAlign = "center";
    context.font = "750 14px ui-rounded, 'Trebuchet MS', sans-serif";
    context.fillStyle = "rgba(48,45,41,0.8)";
    context.fillText(`${Math.round(average * 100)}% OF THE WORLD ONCHAIN`, centerX, 606);
    context.restore();
  }
}

/** Creates the large walkable world mural. Pass one 0..1 value per neighborhood. */
export function createWorldPlanetTexture(progressValues: readonly number[] = []): THREE.CanvasTexture {
  const canvas = createCanvas(PLANET_SIZE, PLANET_SIZE);
  drawPlanet(canvas, progressValues);
  return prepareTexture(canvas);
}

/** Updates the planet's ten painted sectors and optional global progress bar in place. */
export function updateWorldPlanetTexture(
  texture: THREE.CanvasTexture,
  progressValues: readonly number[],
): void {
  drawPlanet(textureCanvas(texture), progressValues);
  texture.needsUpdate = true;
}

function drawWallyShadow(canvas: HTMLCanvasElement): void {
  const context = getContext(canvas);
  const random = seededRandom(0x5ad047);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Directional, offset layers produce a cast shadow instead of a circular decal.
  context.save();
  context.translate(24, 10);
  context.filter = "blur(14px)";
  const gradient = context.createLinearGradient(78, 62, 326, 141);
  gradient.addColorStop(0, "rgba(49,45,39,0.38)");
  gradient.addColorStop(0.55, "rgba(49,45,39,0.2)");
  gradient.addColorStop(1, "rgba(49,45,39,0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.moveTo(66, 69);
  context.bezierCurveTo(95, 36, 154, 49, 178, 73);
  context.bezierCurveTo(220, 84, 289, 105, 333, 135);
  context.bezierCurveTo(276, 149, 202, 142, 147, 127);
  context.bezierCurveTo(105, 126, 56, 111, 66, 69);
  context.closePath();
  context.fill();
  context.restore();

  context.save();
  context.filter = "blur(4px)";
  context.fillStyle = "rgba(45,41,36,0.19)";
  context.beginPath();
  context.moveTo(78, 79);
  context.bezierCurveTo(102, 60, 144, 61, 166, 82);
  context.bezierCurveTo(205, 91, 248, 108, 270, 124);
  context.bezierCurveTo(224, 128, 174, 119, 136, 108);
  context.bezierCurveTo(104, 110, 72, 101, 78, 79);
  context.closePath();
  context.fill();
  context.restore();

  context.save();
  context.fillStyle = "rgba(50,45,39,0.08)";
  for (let index = 0; index < 34; index += 1) {
    const x = 88 + random() * 212;
    const y = 80 + random() * 55;
    const radius = 1 + random() * 4;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

/** Creates Wally's soft, organic, directional ground shadow texture. */
export function createWallyCastShadowTexture(): THREE.CanvasTexture {
  const canvas = createCanvas(SHADOW_WIDTH, SHADOW_HEIGHT);
  drawWallyShadow(canvas);
  return prepareTexture(canvas);
}
