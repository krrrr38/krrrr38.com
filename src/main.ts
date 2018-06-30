import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;

let app: Vue;

const firebaseConfig = {
  apiKey: 'AIzaSyBSvoT3y87azOryAWTcX2fTBGrHiMz5o3U',
  authDomain: 'dev-krrrr38.firebaseapp.com',
  databaseURL: 'https://dev-krrrr38.firebaseio.com',
  projectId: 'dev-krrrr38',
  storageBucket: 'dev-krrrr38.appspot.com',
  messagingSenderId: '614215594566',
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  // initialize the app only when we are sure Firebase Auth object is ready to use.
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
