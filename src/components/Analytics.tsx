import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "../config";

export function Analytics() {
  useEffect(() => {
    if (__IS_PREVIEW__) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer ?? [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }, []);

  return null;
}
