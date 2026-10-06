import { PageMeta } from "../components/PageMeta";
import { Basic } from "../components/top/Basic";
import { Blog } from "../components/top/Blog";
import { Social } from "../components/top/Social";
import { BLOG_RSS } from "../config";

export function HomePage() {
  return (
    <>
      <PageMeta />
      <Basic />
      <Social />
      <Blog rss={BLOG_RSS} />
    </>
  );
}
