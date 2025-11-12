<template>
  <div
    class="navbar row no-wrap justify-between items-baseline inter text-center text-subtitle1 q-pa-md"
    :class="[bgClass, stickyClass, overlayClass]"
  >
    <RouterLink to="/" class="col-auto">
      <q-img src="@/assets/icons/Logo.png" width="1.5rem" fit="contain" />
    </RouterLink>

    <div class="col-6"></div>

    <RouterLink to="/" class="col-2 text-weight-bolder" :class="textClass"
      >Terminvereinbarung</RouterLink
    >
    <RouterLink to="/aboutUs" class="col-auto q-gutter-x-lg" :class="textClass">Über uns</RouterLink>
    <RouterLink to="/" class="col-auto" :class="textClass">Standorte</RouterLink>
    <RouterLink to="/" class="col-auto" :class="textClass">Leistungen</RouterLink>
    <RouterLink to="/" class="col-auto" :class="textClass">Jobs</RouterLink>
    <RouterLink to="/" class="col-auto" :class="textClass">Kontakt</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<style lang="scss" scoped>
a {
  color: $white;
}

.navbar {
  position: fixed;
  z-index: 9999;
}
</style>
