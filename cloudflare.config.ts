import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "krrrr38-com",
    compatibilityDate: "2026-09-30",
    // www.krrrr38.com -> krrrr38.com is handled by a zone-level Redirect Rule,
    // since static assets `_redirects` does not support domain-level redirects.
    domains: ["krrrr38.com"],
  },
});
