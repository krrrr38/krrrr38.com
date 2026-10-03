/// <reference types="vite-plus/client" />

declare const __COMMIT_SHA__: string;
declare const __IS_PREVIEW__: boolean;

interface Window {
  dataLayer?: unknown[];
  [key: `gist_callback_${string}`]:
    | ((gist: { error?: string; div: string; stylesheet: string }) => void)
    | undefined;
}
