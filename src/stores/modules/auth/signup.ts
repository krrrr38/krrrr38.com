import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import {RootState, SignupState} from '@/types';
import {AuthAPI} from '@/api/auth';

// initial state
export const state: SignupState = {
  email: '',
  password: '',
};

// getters
const getters: GetterTree<SignupState, RootState> = {
  email(signupState): string {
    return signupState.email;
  },
  password(signupState): string {
    return signupState.password;
  },
};

// actions
const actions: ActionTree<SignupState, RootState> = {
  submitSignupEmail({commit}, {email, password}) {
    return new Promise((resolve, reject) => {
      AuthAPI.createUserWithEmailAndPassword(email, password, () => {
        resolve(); // redirect without commit
      });
    });
  },
  submitSigninGoogle({commit}) {
    return new Promise((resolve, reject) => {
      AuthAPI.signInWithGoogle(() => {
        resolve(); // redirect without commit
      });
    });
  },
};

// mutations
const mutations: MutationTree<SignupState> = {
  updateEmail(signupState: SignupState, value: string) {
    signupState.email = value;
  },
  updatePassword(signupState: SignupState, value: string) {
    signupState.password = value;
  },
};

export const authSignup: Module<SignupState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
