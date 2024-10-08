import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const staticRouters:RouteRecordRaw[]=[
  {
    name:'root',
    path:"/",
    component:() => import("@views/home.vue"),
  }
]

const router=createRouter({
  history:createWebHistory(),
  routes:staticRouters
})

export default router;