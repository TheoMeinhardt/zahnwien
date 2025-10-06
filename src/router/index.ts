import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import DornbacherstrasseView from '@/views/DornbacherstrasseView.vue'
import MariahilferstrasseView from '@/views/MariahilferstrasseView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: LandingView,
      name: 'LandingView',
    },
    {
      path: '/dornbacherstrasse',
      component: DornbacherstrasseView,
      name: 'DornbacherstrasseView',
    },
    {
      path: '/mariahilferstrasse',
      component: MariahilferstrasseView,
      name: 'MariahilferstrasseView',
    },
    {
      path: '/aboutUs',
      component: AboutUsView,
      name: 'AboutUsView',
    },
  ],
})

export default router
