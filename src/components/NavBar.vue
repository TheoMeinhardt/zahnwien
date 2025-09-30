<template>
  <div class="container bg-dark">
    <img class="navItem" src="@/components/icons/Logo.png" />
    <RouterLink to="/" class="navItem white inter-light">Home</RouterLink>

    <div class="spacer"></div>

    <RouterLink to="/" class="navItem white inter-light">Terminvereinbarung</RouterLink>
    <RouterLink to="/" class="navItem white inter-light">Über uns</RouterLink>
    <RouterLink to="/" class="navItem white inter-light">Standorte</RouterLink>
    <RouterLink to="/" class="navItem white inter-light">Leistungen</RouterLink>
    <RouterLink to="/" class="navItem white inter-light">Jobs</RouterLink>
    <RouterLink to="/" class="navItem white inter-light">Kontakt</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
img {
  height: 65%;
}

.container {
  height: 8vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.navItem {
  text-decoration: none;
  flex-shrink: 1;
}

.spacer {
  flex-grow: 1;
}
</style>
