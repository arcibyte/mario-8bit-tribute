import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://tu-usuario.github.io",
  base: "/mario-8bit-tribute",
  output: "static",

  build: {
    assets: "assets",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});