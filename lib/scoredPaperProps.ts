import type { NeighborhoodPropKind } from "./worldPolish";

export const SCORED_PAPER_PROP_BASE_PATH = "/assets/scored-paper/neighborhood_props";
export const SCORED_PAPER_ENVIRONMENT_BASE_PATH = "/assets/scored-paper/universal_environment";

export const UNIVERSAL_ENVIRONMENT_PROP_FILES: Readonly<Record<NeighborhoodPropKind, string>> = {
  tree: "01_broadleaf_tree.png",
  "flower-bed": "06_flower_cluster.png",
  bench: "09_wood_bench.png",
  lamp: "07_street_lamp.png",
  planter: "05_angular_shrub.png",
  bicycle: "16_bicycle_rack.png",
  "notice-board": "15_blank_signpost.png",
};

export function getUniversalEnvironmentPropPath(kind: NeighborhoodPropKind): string {
  return `${SCORED_PAPER_ENVIRONMENT_BASE_PATH}/${UNIVERSAL_ENVIRONMENT_PROP_FILES[kind]}`;
}

/** A performance-safe edited selection from the supplied 120-prop pack. The
 * remaining assets stay available in public/ for future scenes. */
export const NEIGHBORHOOD_PROP_FILES: readonly (readonly string[])[] = [
  [
    "01_bistro_table.png", "03_blank_menu_board.png", "05_herb_planter.png", "06_food_cart.png",
    "07_produce_crates.png", "09_umbrella_table.png", "11_deco_street_lamp.png", "12_decorative_fountain.png",
  ],
  [
    "01_mailbox.png", "02_hedge_section.png", "03_picket_gate.png", "04_porch_bench.png",
    "07_sandbox.png", "08_birdbath.png", "09_laundry_line.png", "11_residential_lamp.png",
  ],
  [
    "01_stone_garden_lantern.png", "02_vending_kiosk.png", "03_bonsai_planter.png", "04_bamboo_screen.png",
    "05_curved_bridge.png", "08_lantern_cluster.png", "09_stepping_stones.png", "10_cedar_bench.png",
  ],
  [
    "01_bronze_bull_sculpture.png", "02_street_clock.png", "03_news_kiosk.png", "04_deco_street_lamp.png",
    "06_stone_planter.png", "07_plaza_bench.png", "08_subway_entrance.png", "10_abstract_ticker_sculpture.png",
  ],
  [
    "01_patterned_planter.png", "02_shade_bench.png", "03_water_urns.png", "04_woven_canopy.png",
    "05_solar_street_lamp.png", "06_market_baskets.png", "09_bicycle.png", "10_baobab_planter.png",
  ],
  [
    "01_ski_rack.png", "02_trail_sign.png", "03_pine_planter.png", "04_firewood_stack.png",
    "05_cable_car_cabin.png", "06_telescope.png", "09_hot_spring_rocks.png", "10_rescue_sled.png",
  ],
  [
    "01_blank_marquee_sign.png", "02_ticket_booth.png", "03_film_reel_sculpture.png", "04_stage_light.png",
    "05_poster_case.png", "07_abstract_mural_wall.png", "08_plaza_bench.png", "10_record_crate.png",
  ],
  [
    "01_shade_tree.png", "02_sapling_guard.png", "03_park_bench.png", "04_park_lamp.png",
    "05_flower_bed.png", "07_picnic_table.png", "08_open_gazebo.png", "12_park_fountain.png",
  ],
  [
    "01_tiled_planter.png", "02_market_umbrella.png", "03_fruit_cart.png", "04_cafe_table_set.png",
    "05_courtyard_fountain.png", "06_pergola.png", "07_curved_bench.png", "09_string_light_arch.png",
  ],
  [
    "01_palm_planter.png", "02_lounge_chair.png", "03_surfboard_rack.png", "04_pier_lantern.png",
    "05_market_baskets.png", "06_boardwalk_bench.png", "07_coral_sculpture.png", "11_hammock.png",
  ],
] as const;

export function getNeighborhoodPropPath(neighborhood: number, propIndex: number): string {
  const folder = String(neighborhood + 1).padStart(2, "0");
  const packFolders = [
    "feast_street", "homeward_gardens", "japan_quarter", "ledger_square", "ubuntu_gardens",
    "mountain_heights", "lantern_arts", "green_commons", "latin_plaza", "tropical_harbor",
  ] as const;
  const file = NEIGHBORHOOD_PROP_FILES[neighborhood]?.[propIndex];
  if (!file) throw new RangeError(`No scored-paper prop ${propIndex} for neighborhood ${neighborhood}.`);
  return `${SCORED_PAPER_PROP_BASE_PATH}/${folder}_${packFolders[neighborhood]}/${file}`;
}

export const FLYING_BIRD_LEFT_PATH = `${SCORED_PAPER_ENVIRONMENT_BASE_PATH}/22_flying_bird_left.png`;
export const FLYING_BIRD_RIGHT_PATH = `${SCORED_PAPER_ENVIRONMENT_BASE_PATH}/23_flying_bird_right.png`;
