import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Campaigns from '@/views/Campaigns.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: Campaigns,
    },
  ],
});
