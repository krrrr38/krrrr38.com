import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SITE_URL } from "./config";
import "./styles/global.css";

const LOCAL_HOSTNAMES = ["localhost", "127.0.0.1", "[::1]"];

// 本番ビルドが workers.dev など krrrr38.com 以外で開かれた場合は正規ドメインへ寄せる。
function redirectToSiteUrl(): boolean {
  const { hostname, pathname, search, hash } = window.location;
  if (
    !import.meta.env.PROD ||
    __IS_PREVIEW__ ||
    hostname === new URL(SITE_URL).hostname ||
    LOCAL_HOSTNAMES.includes(hostname)
  ) {
    return false;
  }
  window.location.replace(`${SITE_URL}${pathname}${search}${hash}`);
  return true;
}

if (!redirectToSiteUrl()) {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element #root not found");
  }

  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}
