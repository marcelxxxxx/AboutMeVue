import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Impressum from "@/views/Impressum.vue";
import Datenschutz from "@/views/Datenschutz.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz,
    }
  ],
})

export default router
