<template>
  <div class="bg-primary text-accent q-pa-lg">
    <div v-if="props.locationInfo" class="text-body1 text-weight-medium">
      <span class="block">{{ props.locationInfo.name }}</span>
      <span class="block">{{ props.locationInfo.street }}</span>
      <span class="block">{{ props.locationInfo.zipcode }}</span>
      <span class="block">{{ props.locationInfo.email }}</span>
    </div>

    <div class="text-accent q-mt-lg">
      <RouterLink to="/" class="text-accent inline-block text-body1 text-weight-bold">Home</RouterLink>
      <br />
      <RouterLink to="/aboutUs" class="text-accent inline-block text-body1 text-weight-bold">Über uns</RouterLink><br />
      <RouterLink to="/" class="text-accent inline-block text-body1 text-weight-bold">FAQ</RouterLink><br />
      <RouterLink to="/" class="text-accent inline-block text-body1 text-weight-bold">Kontakt</RouterLink>
    </div>

    <div class="row justify-between text-body2 q-mt-lg">
      <div class="col-2 text-left">
        <span>© Copyright 2025 - All rights reserved</span>
      </div>
      <div class="col-1 text-center">
        <RouterLink to="/privacypolicy" class="text-accent">Datenschutzerklärung</RouterLink>
      </div>
      <div class="col-2 text-right">
        <RouterLink to="/legal" class="text-accent">Impressum</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  locationInfo?: {
    name: string
    street: string
    zipcode: string
    email: string
  }
}>()
</script>

<style scoped lang="scss"></style>
