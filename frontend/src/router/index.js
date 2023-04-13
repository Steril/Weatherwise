import Vue from 'vue';
import VueRouter from 'vue-router';
import CampaignList from '@/frontend/src/views/CampaignList.vue';
import CampaignDetail from '@/frontend/src/views/CampaignDetail.vue';
import Login from '@/frontend/src/views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CampaignList',
    component: CampaignList,
  },
  {
    path: '/campaigns/:id',
    name: 'CampaignDetail',
    component: CampaignDetail,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
