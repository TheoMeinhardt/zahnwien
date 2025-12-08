<script setup lang="ts">
import { RouterView } from 'vue-router'

import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <CookieBanner />

  <RouterView />
</template>
