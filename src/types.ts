//////////////////////////////////////////////

export interface RootState {
  version: string
}

export interface HomeState {
  blog?: HatenaBlog
  blogItems: HatenaBlogItem[]
}

export interface SignupState {
  email: string
  password: string
}

export interface LoginState {
  email: string
  password: string
}

export interface LogoutState {} // tslint:disable-line

export interface MyPageState {
  user: LoginUser
}

//////////////////////////////////////////////

export interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T
}

//////////////////////////////////////////////

export interface HatenaBlogFeedResponse {
  readonly feed: HatenaBlog
  readonly items: HatenaBlogItem[]
}

export interface HatenaBlog {
  readonly url: string
  readonly title: string
  readonly link: string
  readonly author: string
  readonly description: string
}

export interface HatenaBlogItem {
  readonly title: string
  readonly pubDate: string
  readonly link: string
  readonly description: string
}

export interface LoginUser {
  readonly name: string
  readonly picture: string
  readonly userId: string
  readonly email: string
}
