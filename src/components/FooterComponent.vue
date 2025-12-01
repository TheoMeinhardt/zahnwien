<template>
  <div class="bg-primary text-accent q-pa-lg">
    <div class="text-body1 text-weight-medium">
      <span class="block">Ordination Dornbach</span>
      <span class="block">Dornbacherstraße 1</span>
      <span class="block">1170 Wien</span>
      <span class="block">ordination@zahnwien.at</span>
    </div>

    <div class="text-accent q-mt-lg">
      <RouterLink to="/home" class="text-accent inline-block text-body1 text-weight-bold"
        >Home</RouterLink
      >
      <br />
      <RouterLink to="/aboutUs" class="text-accent inline-block text-body1 text-weight-bold"
        >Über uns</RouterLink
      ><br />
      <RouterLink to="/" class="text-accent inline-block text-body1 text-weight-bold"
        >FAQ</RouterLink
      ><br />
      <RouterLink to="/" class="text-accent inline-block text-body1 text-weight-bold"
        >Kontakt</RouterLink
      >
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
</script>

<style scoped lang="scss"></style>
