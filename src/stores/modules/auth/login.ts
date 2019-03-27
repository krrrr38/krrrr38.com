import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { LoginState, RootState } from '@/types'
import { AuthAPI } from '@/api/auth'

// initial state
export const state: LoginState = {
  email: '',
  password: ''
}

// getters
const getters: GetterTree<LoginState, RootState> = {
  email(loginState): string {
    return loginState.email
  },
  password(loginState): string {
    return loginState.password
  }
}

// actions
const actions: ActionTree<LoginState, RootState> = {
  submitLoginEmail({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      AuthAPI.signInWithEmailAndPassword(email, password, () => {
        resolve() // redirect without commit
      })
    })
  },
  submitSigninGoogle({ commit }) {
    return new Promise((resolve, reject) => {
      AuthAPI.signInWithGoogle(() => {
        resolve() // redirect without commit
      })
    })
  }
}

// mutations
const mutations: MutationTree<LoginState> = {
  updateEmail(loginState: LoginState, value: string) {
    loginState.email = value
  },
  updatePassword(loginState: LoginState, value: string) {
    loginState.password = value
  }
}

export const authLogin: Module<LoginState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
