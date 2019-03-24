import axios from 'axios';
import { HatenaBlogFeedResponse } from '@/types.ts';

const BLOG_URL = 'http://krrrr.hatenablog.com/feed';

type HatenaBlogGetFeedHandler = (blog: HatenaBlogFeedResponse) => void;

export const HatenaBlogAPI = {
  getBlogFeed(handler: HatenaBlogGetFeedHandler) {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      BLOG_URL,
    )}`;
    axios
      .get(url)
      .then((response) => {
        handler(response.data as HatenaBlogFeedResponse);
      })
      .catch((error) => {
        console.error(error) // tslint:disable-line
      });
  },
};
