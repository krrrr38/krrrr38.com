//////////////////////////////////////////////

export interface RootState {
  version: string;
}

export interface HomeState {
  blog?: HatenaBlog;
  blogItems: HatenaBlogItem[];
}

//////////////////////////////////////////////

export interface HatenaBlogFeedResponse {
  readonly feed: HatenaBlog;
  readonly items: HatenaBlogItem[];
}

export interface HatenaBlog {
  readonly url: string;
  readonly title: string;
  readonly link: string;
  readonly author: string;
  readonly description: string;
}

export interface HatenaBlogItem {
  readonly title: string;
  readonly pubDate: string;
  readonly link: string;
  readonly description: string;
}
