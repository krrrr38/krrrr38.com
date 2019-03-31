import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import './registerServiceWorker'
import firebase from './firebase'

import { authMutation } from './stores/modules/auth/auth'
import { LoginUser } from '@/types'

let app: Vue

firebase.initializeApp()
firebase.onAuthStateChanged(_ => {
  // initialize the app only when we are sure Firebase Auth object is ready to use.
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
firebase.onAuthStateChanged(user => {
  if (user) {
    store.commit(`auth/${authMutation.onAuthStateChanged}`, {
      name: user.displayName,
      picture: user.photoURL,
      userId: user.uid,
      email: user.email
    } as LoginUser)
  } else {
    store.commit(`auth/${authMutation.onAuthStateChanged}`, null)
  }
})
