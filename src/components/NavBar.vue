<template>
  <div>
    <!-- Regular NavBar for big screens -->
    <div
      class="navbar row no-wrap justify-between items-baseline gt-sm inter text-center text-subtitle1 q-pa-md"
      :class="[bgClass, textClass, stickyClass, overlayClass]"
    >
      <RouterLink to="/" class="col-auto">
        <q-img src="@/assets/icons/logo.png" width="1.5rem" fit="contain" />
      </RouterLink>

      <div class="col-6"></div>

      <RouterLink to="/" class="col-2 text-weight-bolder">Terminvereinbarung</RouterLink>
      <RouterLink to="/aboutUs" class="col-auto q-gutter-x-lg">Über uns</RouterLink>
      <RouterLink to="/" class="col-auto">Standorte</RouterLink>
      <RouterLink to="/" class="col-auto">Leistungen</RouterLink>
      <RouterLink to="/" class="col-auto">Jobs</RouterLink>
      <RouterLink to="/contactUs" class="col-auto">Kontakt</RouterLink>
    </div>

    <!-- collapsed NavBar for small screens -->
    <div
      class="mobile-navbar row full-width lt-md q-pa-md"
      :class="[bgClass, textClass, stickyClass, overlayClass, animationClass]"
    >
      <RouterLink to="/" class="col-auto">
        <q-img src="@/assets/icons/logo.png" width="1.5rem" fit="contain" />
      </RouterLink>
      <q-space />
      <q-btn
        @click="navbarExpanded = !navbarExpanded"
        flat
        round
        dense
        dark
        :icon="navbarExpanded ? 'close' : 'menu'"
        class="col-auto"
        aria-label="Toggle navigation menu"
        :aria-expanded="navbarExpanded"
      />

      <!-- RouterLinks -->
      <nav
        class="col-12 column text-h6 text-center q-py-md test"
        v-show="navbarExpanded"
        :aria-hidden="!navbarExpanded"
      >
        <RouterLink to="/" class="text-weight-bolder">Terminvereinbarung</RouterLink>
        <RouterLink to="/aboutUs">Über uns</RouterLink>
        <RouterLink to="/">Standorte</RouterLink>
        <RouterLink to="/">Leistungen</RouterLink>
        <RouterLink to="/">Jobs</RouterLink>
        <RouterLink to="/">Kontakt</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  background: 'transparent' | 'dark'
  text: 'dark' | 'white'
  sticky: boolean
  overlay: boolean
}>()

const bgClass = ref(props.background === 'transparent' ? '' : 'bg-dark')
const textClass = ref(props.text === 'white' ? 'text-white' : 'text-dark')
const stickyClass = ref(props.sticky ? 'fixed-top' : '')
const overlayClass = ref(props.overlay ? 'absolute-top' : 'relative-position')

const navbarExpanded = ref(false)
const animationClass = computed(() => (navbarExpanded.value ? 'shown' : ''))
</script>

<style lang="scss" scoped>
a {
  color: $white;
}

.navbar {
  position: fixed;
  z-index: 9999;
}

.mobile-navbar {
  position: fixed;
  z-index: 9999;

  height: auto;
  max-height: 4.25rem;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.mobile-navbar.shown {
  max-height: 100vh;
}
</style>
