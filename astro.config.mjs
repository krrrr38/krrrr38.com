// https://astro.build/config
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import { cloudflare } from "@cloudflare/vite-plugin";
import { writeAssets } from "@cloudflare/build-output-utils";

// @cloudflare/vite-plugin writes only the client build (`_astro/`, `public/`) into
// the Build Output, so merge the prerendered pages from `dist/` after the build.
const cloudflareStaticPages = () => ({
  name: "cloudflare-static-pages",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      await writeAssets({
        root: process.cwd(),
        sourceDirectory: fileURLToPath(dir),
      });
    },
  },
});

export default defineConfig({
  site: "https://krrrr38.com",
  integrations: [
    react(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    cloudflareStaticPages(),
  ],
  output: "static",
  vite: {
    plugins: [
      cloudflare({
        assetsOnly: true,
        // Keep Astro's `ssr` environment for prerendering on Node.js.
        viteEnvironment: { name: "cloudflare" },
      }),
    ],
  },
});
