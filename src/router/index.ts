import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/LandingView.vue'),
      name: 'LandingView',
    },
    {
      path: '/dornbacherstrasse',
      component: () => import('@/views/DornbacherstrasseView.vue'),
      name: 'DornbacherstrasseView',
    },
    {
      path: '/mariahilferstrasse',
      component: () => import('@/views/MariahilferstrasseView.vue'),
      name: 'MariahilferstrasseView',
    },
    {
      path: '/aboutUs',
      component: () => import('@/views/AboutUsView.vue'),
      name: 'AboutUsView',
    },
  ],
})

export default router
