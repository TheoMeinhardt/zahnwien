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
        <q-btn @click="declineCookies" outline rounded color="primary" label="ablehnen" />
      </div>
      <div class="col-auto">
        <q-btn @click="acceptCookies" flat rounded color="primary" label="akzeptieren" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const STORAGE_KEY = 'cookie_banner_dismissed'
const showCookieBanner = ref<boolean>(!(localStorage.getItem(STORAGE_KEY) == 'true'))

function acceptCookies(): void {
  localStorage.setItem(STORAGE_KEY, 'true')
  showCookieBanner.value = false
}

function declineCookies(): void {
  showCookieBanner.value = false
}
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
