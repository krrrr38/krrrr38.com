import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "krrrr38-com",
    compatibilityDate: "2026-09-30",
    // TODO: Enable after the krrrr38.com zone is moved to Cloudflare.
    // A Custom Domain requires an active zone, so deploy fails until then.
    // www.krrrr38.com -> krrrr38.com is handled by a zone-level Redirect Rule,
    // since static assets `_redirects` does not support domain-level redirects.
    // domains: ["krrrr38.com"],
    observability: {
      logs: {
        enabled: true,
        headSamplingRate: 1,
        invocationLogs: true,
        persist: true,
      },
      traces: {
        enabled: false,
        headSamplingRate: 1,
        persist: true,
      },
    },
  },
});
