import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

Vue.use(VueAnalytics, {
  id: 'UA-37666832-1',
  router,
});

export default router;
