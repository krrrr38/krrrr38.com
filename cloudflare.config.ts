import { defineConfig } from "cf/config";

export default defineConfig(({ isPreview }) => ({
  worker: {
    name: "krrrr38-com",
    compatibilityDate: "2026-09-30",
    // www.krrrr38.com -> krrrr38.com is handled by a zone-level Redirect Rule,
    // since static assets `_redirects` does not support domain-level redirects.
    // Preview uploads from Build Output don't support the `domains` field.
    ...(isPreview ? {} : { domains: ["krrrr38.com"] }),
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
}));
