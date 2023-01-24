// https://astro.build/config
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  site: "https://krrrr38.com",
  integrations: [
    react(),
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
