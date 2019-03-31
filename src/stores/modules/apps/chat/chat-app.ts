import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { ChatAppState, RootState } from '@/types'

// initial state
export const state: ChatAppState = {
  messages: []
}

// getters
const getters: GetterTree<ChatAppState, RootState> = {}

// actions
const actions: ActionTree<ChatAppState, RootState> = {}

// mutations
const mutations: MutationTree<ChatAppState> = {}

export const chatApp: Module<ChatAppState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
