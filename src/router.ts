import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Component from 'vue-class-component';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from './views/index/Home.vue';
import CvJa from './views/index/CvJa.vue';
import CvEn from './views/index/CvEn.vue';
import Signup from './views/auth/Signup.vue';
import Login from './views/auth/Login.vue';
import Logout from './views/auth/Logout.vue';
import Admin from './views/admin/Admin.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cv/ja',
      name: 'cv-ja',
      component: CvJa,
    },
    {
      path: '/cv/en',
      name: 'cv-en',
      component: CvEn,
    },
    // {
    //   path: '/practice/trace/folio',
    //   name: 'trace-folio-top',
    //   component: TraceFolioTop,
    // },
    {
      path: '/auth/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/auth/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requireAuth: true,
        requireAdmin: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((r) => r.meta.requireAuth);
  const requireAdmin = to.matched.some((r) => r.meta.requireAdmin); // TODO

  if (requireAuth) {
    const redirectLogin = () => {
      next({
        path: '/auth/login',
        query: { redirect: to.fullPath },
      });
    };
    firebase.auth().onAuthStateChanged((user) => {
      console.log("onAuthStateChanged: ", user); // tslint:disable-line
      if (user) {
        next();
      } else {
        redirectLogin();
      }
    });
  } else {
    next();
  }
});

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  // 'beforeRouteLeave',
  // 'beforeRouteUpdate', // for vue-router 2.2+
]);

Vue.use(VueAnalytics, {
  id: 'UA-37666832-1',
  router,
});

export default router;
