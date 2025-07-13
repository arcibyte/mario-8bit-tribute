import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  base: "/",
  output: "static",
  build: {
    assets: "assets",
  },
});
