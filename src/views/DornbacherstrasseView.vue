<template>
  <div>
    <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

    <div class="inter text-primary q-mt-xl q-pt-xl q-pl-lg">
      <span class="text-h2 text-weight-bold block">Dornbacherstraße 1</span>
      <span class="text-h6 text-italic text-weight-regular">1170 Wien</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped></style>
