import { execSync } from "node:child_process";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

const commitSha = (process.env.COMMIT_SHA || execSync("git rev-parse HEAD", { encoding: "utf8" }))
  .trim()
  .slice(0, 7);

export default defineConfig({
  plugins: [react(), cloudflare({ assetsOnly: true })],
  define: {
    __COMMIT_SHA__: JSON.stringify(commitSha),
    __IS_PREVIEW__: JSON.stringify(process.env.CLOUDFLARE_PREVIEW_BUILD === "true"),
  },
  fmt: {
    ignorePatterns: [".claude/**"],
  },
  lint: {
    ignorePatterns: [".claude/**"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
