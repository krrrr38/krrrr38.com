import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '../types';
import { home } from './modules/home';
import { createLogger } from '../plugins/logger';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    home,
  },
  state: {
    version: '0.1.0',
  },
  mutations: {

  },
  actions: {

  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
