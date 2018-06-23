import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CvJa from './views/CvJa.vue';
import CvEn from './views/CvEn.vue';

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
  ],
});

Vue.use(VueAnalytics, {
  id: 'UA-37666832-1',
  router,
});

export default router;
