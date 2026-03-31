import { createRouter, createWebHistory } from 'vue-router'

import MariahilferstrasseView from '@/views/MariahilferstrasseView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import LegalView from '@/views/LegalView.vue'
import ContactUsView from '@/views/ContactUs.vue'
import GalerieView from '@/views/GalerieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MariahilferstrasseView,
      name: 'MariahilferstrasseView',
    },
    {
      path: '/aboutUs',
      component: AboutUsView,
      name: 'AboutUsView',
    },
    {
      path: '/legal',
      component: LegalView,
      name: 'LegalView',
    },
    {
      path: '/privacypolicy',
      component: PrivacyPolicyView,
      name: 'PrivacyPolicyView',
    },
    {
      path: '/contactUs',
      component: ContactUsView,
      name: 'ContactUsView',
    },
    {
      path: '/galerie',
      component: GalerieView,
      name: 'GalerieView',
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
