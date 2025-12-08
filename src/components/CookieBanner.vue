<template>
  <div
    v-show="showCookieBanner"
    class="cookie-banner absolute absolute-bottom bg-accent q-mb-lg row"
  >
    <div class="col-12 col-md-9 q-pa-md">
      <span class="block text-subtitle1 text-bold">Cookies</span>
      <span class="text-body2"
        >Wir verwenden keinerlei Cookies um Ihre Nutzung dieser Webseite in welcher Weise auch immer
        zu speichern. Als Interessent und Besucher dieser Seite werden Sie völlig anonym behandelt.
        Wir werden erst Daten von Ihnen speichern wenn Sie mit uns in Kontakt getreten sind.</span
      >
    </div>
    <div class="col-12 col-md-3 column justify-center items-center">
      <div class="col-auto">
        <q-btn @click="showCookieBanner = false" outline rounded color="primary" label="ablehnen" />
      </div>
      <div class="col-auto">
        <q-btn @click="showCookieBanner = false" flat rounded color="primary" label="akzeptieren" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCookieBanner = ref<boolean>(true)
</script>

<style lang="scss" scoped>
.cookie-banner {
  height: fit-content;
  width: 50vw;
  min-width: 200px;

  z-index: 10000;
  transform: translateX(25vw);
  border-radius: 20px;
}
</style>
