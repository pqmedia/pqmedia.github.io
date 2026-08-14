import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://pqmedia.github.io",

  integrations: [
    sitemap(),
  ],
});