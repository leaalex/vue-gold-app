import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue'),
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: () => import('../views/TaskList.vue'),
  },
  {
    path: '/tasklist/:id',
    name: 'PointList',
    props: true,
    component: () => import('../views/PointList.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
