import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { MyPageState, RootState } from '@/types'
import { AccessCountApi } from '@/api/access-count'

// initial state
export const state: MyPageState = {}

// getters
const getters: GetterTree<MyPageState, RootState> = {}

// actions
const actions: ActionTree<MyPageState, RootState> = {
  async incrementAccessCount(state: MyPageState, userId: string): Promise<number> {
    return await AccessCountApi.incrementAccessCount(userId)
  }
}

// mutations
const mutations: MutationTree<MyPageState> = {}

export const mypage: Module<MyPageState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
