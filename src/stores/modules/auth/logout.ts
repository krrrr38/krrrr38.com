import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import {LogoutState, RootState} from '@/types';
import {AuthAPI} from '@/api/auth';

// initial state
export const state: LogoutState = {};

// getters
const getters: GetterTree<LogoutState, RootState> = {};

// actions
const actions: ActionTree<LogoutState, RootState> = {
  submitLogout({commit}) {
    return new Promise((resolve, reject) => {
      AuthAPI.signout(() => {
        resolve(); // redirect without commit
      });
    });
  },
};

// mutations
const mutations: MutationTree<LogoutState> = {};

export const authLogout: Module<LogoutState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
