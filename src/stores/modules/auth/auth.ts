import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { AuthState, LoginUser, RootState } from '@/types'

export const authMutation = {
  onAuthStateChanged: 'onAuthStateChanged'
}

// initial state
export const state: AuthState = {
  user: undefined
}

// getters
const getters: GetterTree<AuthState, RootState> = {
  user(authState): LoginUser | undefined {
    return authState.user
  }
}

// actions
const actions: ActionTree<AuthState, RootState> = {}

// mutations
const mutations: MutationTree<AuthState> = {
  [authMutation.onAuthStateChanged](authState: AuthState, user: LoginUser) {
    authState.user = user
  }
}

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
