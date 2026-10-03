import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_TITLE, SITE_URL } from "../config";

type PageMetaProps = {
  subtitle?: string;
};

export function PageMeta({ subtitle }: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = subtitle ? `${subtitle} | ${SITE_TITLE}` : SITE_TITLE;
    document.title = title;

    const titleMeta = document.querySelector('meta[name="title"]');
    titleMeta?.setAttribute("content", title);

    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", new URL(pathname, SITE_URL).toString());
  }, [pathname, subtitle]);

  return null;
}
