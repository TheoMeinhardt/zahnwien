<template>
  <div class="row no-wrap bg-dark">
    <q-img src="@/components/icons/Logo.png" class="col" />
    <RouterLink to="/">Home</RouterLink>

    <div></div>

    <RouterLink to="/" class="col">Terminvereinbarung</RouterLink>
    <RouterLink to="/" class="col">Über uns</RouterLink>
    <RouterLink to="/" class="col">Standorte</RouterLink>
    <RouterLink to="/" class="col">Leistungen</RouterLink>
    <RouterLink to="/" class="col">Jobs</RouterLink>
    <RouterLink to="/" class="col">Kontakt</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
