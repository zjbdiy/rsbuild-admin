import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const staticRouters: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    component: () => import('@views/homePage.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@views/loginPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: staticRouters,
});

export default router;
