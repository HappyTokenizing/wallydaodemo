import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WALLY WORLD",
    short_name: "WALLY WORLD",
    description: "A peaceful hand-painted town-building adventure.",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f3ead7",
    theme_color: "#d67b4e",
    icons: [
      {
        src: "/assets/wally-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
