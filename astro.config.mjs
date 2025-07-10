import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  base: "/mario-8bit-tribute",
  output: "static",
  build: {
    assets: "assets",
  },
});
