import { defineConfig } from "cf/config";

export default defineConfig(({ isPreview }) => ({
  worker: {
    name: "krrrr38-com",
    compatibilityDate: "2026-09-30",
    workersDev: true,
    previewUrls: true,
    assets: {
      notFoundHandling: "single-page-application",
    },
    // Preview uploads don't support `domains`.
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
