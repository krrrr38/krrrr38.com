import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

let app: Vue

console.log({ env: process.env.NODE_ENV, version: process.env.VUE_APP_VERSION })

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(user => {
  // initialize the app only when we are sure Firebase Auth object is ready to use.
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
