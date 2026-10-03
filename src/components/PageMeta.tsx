import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_TITLE, SITE_URL } from "../config";

type PageMetaProps = {
  subtitle?: string;
  noIndex?: boolean;
};

function ensureMeta(name: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  return el;
}

function ensureCanonical() {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  return el;
}

export function PageMeta({ subtitle, noIndex = false }: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = subtitle ? `${subtitle} | ${SITE_TITLE}` : SITE_TITLE;
    document.title = title;
    ensureMeta("title").setAttribute("content", title);
    ensureMeta("robots").setAttribute("content", noIndex ? "noindex, nofollow" : "index, follow");

    if (noIndex) {
      document.querySelector('link[rel="canonical"]')?.remove();
    } else {
      ensureCanonical().setAttribute("href", new URL(pathname, SITE_URL).toString());
    }
  }, [pathname, subtitle, noIndex]);

  return null;
}
