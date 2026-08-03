import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the WALLY WORLD game shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>WALLY WORLD<\/title>/i);
  assert.match(html, /A peaceful, hand-painted town-building adventure/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|TOKEN TOWN/i);
});

test("ships the complete game contract", async () => {
  const [assets, assetPack, gameState, game, neighborhoods, globalAssets, landmarks, packageJson, layout] = await Promise.all([
    readFile(new URL("../lib/assets.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/assetPack.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/gameState.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/WallyWorldGame.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/neighborhoods.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/globalAssets.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/worldLandmarks.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.equal((assets.match(/\bdefineAsset\(\{/g) ?? []).length, 80);
  assert.match(assets, /EXCHANGE_ASSETS/);
  assert.match(assets, /Wally World Stock Exchange/);
  assert.match(gameState, /getDailyPrice/);
  assert.match(gameState, /applyOfflineAccrual/);
  assert.match(gameState, /saveGameState/);
  assert.match(game, /from ["']three["']/);
  assert.match(game, /wally-reference-exact\.png/);
  assert.match(game, /RESERVE_TOKEN_COUNT = 128/);
  assert.match(game, /onre-logo\.jpg/);
  assert.match(gameState, /reserveCollectedIds/);
  assert.match(gameState, /exploredNeighborhoodKeys/);
  assert.match(game, /InstancedMesh/);
  assert.match(game, /purchaseExchangePiece/);
  assert.match(game, /wally-exchange-panel/);
  assert.match(game, /exchangeAutoOpenUntil/);
  assert.match(game, /exchangeShouldOpen/);
  assert.match(game, /EXCHANGE_ASSETS/);
  assert.match(assetPack, /"hidden-stock-exchange": 25/);
  assert.equal((neighborhoods.match(/\{ id: \d, packId:/g) ?? []).length, 10);
  for (const signText of [
    "WALLY WORLD",
    "Tokenize N’ Chill",
    "Relax, we're moving onchain",
    "COMING FOR WALL ST",
    "Crypto Meets the World",
    "TokenizeThis",
    "Zeus' RWA Lounge",
    "Prosperity for All",
    "YOU MADE IT THIS FAR",
    "Happy Tokenizing",
  ]) assert.match(neighborhoods, new RegExp(signText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.doesNotMatch(neighborhoods, /Feast Street|Homeward Gardens|Japan Quarter|Ledger Square|Ubuntu Gardens|Mountain Heights|Lantern Arts|Green Commons|Latin Plaza|Tropical Harbor/);
  assert.match(neighborhoods, /\[0\],\s*\[1, 2\],\s*\[3, 4, 5\],\s*\[6, 7, 8\],\s*\[9\]/s);
  assert.match(game, /getActiveWorldPeriod/);
  assert.match(game, /worldDepthForFootY/);
  assert.match(game, /buildingFootY/);
  assert.match(game, /keepCollectibleReachable/);
  assert.match(game, /canonicalX/);
  assert.match(game, /themedKinds/);
  assert.match(game, /const occupied:/);
  assert.match(game, /new THREE\.TextureLoader\(\)\.load\(globalAsset\.stagePath/);
  assert.match(game, /movingDeeperIntoEllipse/);
  assert.match(game, /ambientVignettes/);
  assert.match(game, /maxCrowdStep/);
  assert.match(game, /completedSpeedBonus/);
  assert.match(game, /crowdProjectFlowAvailable/);
  assert.match(game, /purchaseLandPlot/);
  assert.match(gameState, /ownedPlotAssetIds/);
  assert.match(game, /LOFI_THEMES/);
  assert.match(game, /LOFI_STATION_STEP_MS = 330/);
  assert.equal((game.match(/snares: \[4, 12\]/g) ?? []).length, 8);
  assert.equal((game.match(/swing: 0\.\d+/g) ?? []).length, 8);
  assert.match(game, /createDynamicsCompressor/);
  assert.match(game, /clearSavedGameState/);
  assert.match(game, /resolveCrowdCollisions/);
  assert.match(game, /project\.tokens/);
  assert.match(game, /createScreenCrossingFlock/);
  assert.match(game, /knownCompletedNeighborhoodIds/);
  assert.match(game, /findActiveBirdGuidanceTarget/);
  assert.match(game, /nextAmbientBirdAt/);
  assert.match(gameState, /COOKIE_SAVE_PREFIX/);
  assert.match(gameState, /collectedTokenKeys/);
  assert.equal((globalAssets.match(/defineGlobalAsset\(\{ packNumber:/g) ?? []).length, 80);
  assert.match(globalAssets, /scored-paper\/structures\/construction_stages/);
  assert.match(landmarks, /BRING THE WORLD ONCHAIN/);
  assert.match(landmarks, /drawSimpleNeighborhoodSign/);
  assert.match(neighborhoods, /NEIGHBORHOOD_LAYOUT_SCALE/);
  assert.match(neighborhoods, /return \{ \.\.\.neighborhood\.center \}/);
  assert.match(neighborhoods, /getNeighborhoodSignPoint/);
  assert.match(landmarks, /createWallyCastShadowTexture/);
  assert.doesNotMatch(game, /nearestUnlockedDistance|createWorldLoopFx|velocity\.multiplyScalar\(0\.72\)/);
  assert.doesNotMatch(game, /createWelcomeTexture|WELCOME TO|wally-map-button|wally-mini-map/);
  assert.match(packageJson, /"three"/);
  assert.match(layout, /WALLY WORLD/);
  assert.doesNotMatch(game, /className="wally-joystick"/);
  assert.doesNotMatch(`${assets}\n${gameState}\n${game}\n${layout}`, /TOKEN TOWN/i);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await Promise.all([
    "01_tokenize_n_chill",
    "02_relax_were_moving_onchain",
    "03_coming_for_wall_st",
    "04_crypto_meets_the_world",
    "05_tokenizethis",
    "06_zeus_rwa_lounge",
    "07_prosperity_for_all",
    "08_you_made_it_this_far",
    "09_happy_tokenizing",
    "10_wally_world",
  ].flatMap((folder) => Array.from({ length: 5 }, (_, index) => (
    access(new URL(`../public/assets/neighborhood-signs/${folder}/stage_${index + 1}.png`, import.meta.url))
  ))));
  await Promise.all([
    access(new URL("../public/assets/scored-paper/structures/construction_stages/01_neighborhood_restaurant/stage_1.png", import.meta.url)),
    access(new URL("../public/assets/scored-paper/structures/construction_stages/80_marina_clubhouse/stage_5.png", import.meta.url)),
  ]);
});
