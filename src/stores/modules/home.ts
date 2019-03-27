import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { HatenaBlog, HatenaBlogFeedResponse, HatenaBlogItem, HomeState, RootState } from '@/types'
import { HatenaBlogAPI } from '@/api/hatena-blog'

// initial state
export const state: HomeState = {
  blog: undefined,
  blogItems: []
}

// getters
const getters: GetterTree<HomeState, RootState> = {
  blog(homeState): HatenaBlog | undefined {
    return homeState.blog
  },
  blogItems(homeState): HatenaBlogItem[] {
    return homeState.blogItems
  }
}

// actions
const actions: ActionTree<HomeState, RootState> = {
  getBlogFeed({ commit }) {
    HatenaBlogAPI.getBlogFeed((res: HatenaBlogFeedResponse) => {
      commit('setBlogFeed', res)
    })
  }
}

// mutations
const mutations: MutationTree<HomeState> = {
  setBlogFeed(homeState: HomeState, res: HatenaBlogFeedResponse) {
    homeState.blog = res.feed
    homeState.blogItems = res.items
  }
}

export const home: Module<HomeState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
