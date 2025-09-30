<template>
  <div class="container bg-dark">
    <img src="@/components/icons/Logo.png" />
    <RouterLink to="/">Home</RouterLink>

    <div></div>

    <RouterLink to="/">Terminvereinbarung</RouterLink>
    <RouterLink to="/">Über uns</RouterLink>
    <RouterLink to="/">Standorte</RouterLink>
    <RouterLink to="/">Leistungen</RouterLink>
    <RouterLink to="/">Jobs</RouterLink>
    <RouterLink to="/">Kontakt</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
