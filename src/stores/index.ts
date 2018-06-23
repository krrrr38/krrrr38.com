import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '../types';
import { home } from './modules/home';
import { createLogger } from '../plugins/logger';

const debug = process.env.NODE_ENV !== 'production';
const version = process.env.CIRCLE_SHA1 || '0.0.1';
console.log({version: version}); // tslint:disable-line

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    home,
  },
  state: { version },
  mutations: {

  },
  actions: {

  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
