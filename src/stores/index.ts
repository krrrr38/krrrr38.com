import Vue from 'vue'
import Vuex from 'vuex'

import { RootState } from '@/types'
import { home } from './modules/home'
import { authSignup } from './modules/auth/signup'
import { authLogin } from './modules/auth/login'
import { authLogout } from './modules/auth/logout'

const version = process.env.VUE_APP_VERSION || 'unknown'
const debug = process.env.NODE_ENV !== 'production'

console.log({ env: process.env.NODE_ENV, version: version })

Vue.use(Vuex)
Vue.config.productionTip = debug

export default new Vuex.Store<RootState>({
  modules: {
    home,
    authSignup,
    authLogin,
    authLogout
  },
  state: { version },
  mutations: {},
  actions: {},
  strict: debug
})
