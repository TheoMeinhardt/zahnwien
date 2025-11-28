<template>
  <div>
    <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

    <div class="q-mt-xl q-pt-xl q-px-lg">
      <!-- Heading -->
      <div class="inter text-primary" v-reveal="{ once: true }">
        <span class="gt-sm text-h4 text-weight-bold block">Dornbacherstraße 1</span>
        <span class="lt-md text-h6 text-weight-bold block">Dornbacherstraße 1</span>
        <span class="text-h6 text-italic text-weight-regular">1170 Wien</span>
      </div>

      <div class="row wrap items-center justify-between">
        <!-- Einführungstext -->
        <div class="col-12 col-md-5" v-reveal="{ once: true }">
          <span class="block q-my-lg roboto text-body1"
            >In unserer Kassenordination in Dornbach heißen wir Sie bereits seit 1989 – mittlerweile
            in 3. Generation - herzlich willkommen. Wir kooperieren mit MKG AKH Wien und St. Pölten
            und bieten hier nach Absprache auch erweiterte Öffnungszeiten an. Wir sprechen Sie auf
            deutsch, englisch, französisch oder polnisch an.</span
          >
          <q-carousel
            v-model="carouselSlide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="white"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            infinite
            :autoplay="carouselAutoplay"
            @mouseenter="carouselAutoplay = false"
            @mouseleave="carouselAutoplay = true"
            height="300px"
            class="shadow-1 rounded-borders"
          >
            <q-carousel-slide
              :name="0"
              class="column no-wrap flex-center"
              :img-src="parseImagePath('img/Ordi_1170/Ordi1_7290.jpg')"
            />
            <q-carousel-slide
              :name="1"
              class="column no-wrap flex-center"
              :img-src="parseImagePath('img/Ordi_1170/Ordi2_7224.jpg')"
            />
            <q-carousel-slide
              :name="2"
              class="column no-wrap flex-center"
              :img-src="parseImagePath('img/Ordi_1170/Ordi3_7303.jpg')"
            />
          </q-carousel>
        </div>

        <div class="col-12 col-md-6" v-reveal="{ once: true }">
          <!-- Focus chips -->
          <div>
            <!-- Focus heading -->
            <span class="text-h5 text-bold text-primary q-mt-lg block">Fokus:</span>

            <div class="inter row text-italic text-weight-light q-mt-sm">
              <Chip v-reveal="{ once: true }" color="white" text-color="primary" :img="teethMedicin"
                >Allgemeine Zahnmedizin</Chip
              >

              <Chip
                v-reveal="{ once: true }"
                color="white"
                text-color="primary"
                :img="teethImplants"
                >Implantologie</Chip
              >

              <Chip
                v-reveal="{ once: true }"
                color="white"
                text-color="primary"
                :img="teethAesthetic"
                >Ästhetik</Chip
              >
            </div>
          </div>

          <!-- Equipment chips -->
          <div>
            <!-- Equipment heading -->
            <span class="text-h5 text-bold text-primary q-mt-lg block">Ausstattung:</span>

            <div class="inter row text-italic text-weight-light q-mt-sm">
              <Chip v-reveal="{ once: true }" color="white" text-color="primary" :img="xray"
                >Röntgen</Chip
              >

              <Chip v-reveal="{ once: true }" color="white" text-color="primary" img="">DVT</Chip>

              <Chip
                v-reveal="{ once: true }"
                color="white"
                text-color="primary"
                :img="digitalWorkflow"
                >digitale Workflows</Chip
              >

              <Chip v-reveal="{ once: true }" color="white" text-color="primary" :img="scan3d"
                >3D-Scan</Chip
              >
            </div>
          </div>

          <!-- Opening Hours -->
          <div v-reveal="{ once: true }">
            <OpeningHours :opening-hours-data="openingHours" />
          </div>
        </div>
      </div>

      <div class="q-mt-xl">
        <span class="inter text-primary text-h3 text-weight-bold block" v-reveal="{ once: true }"
          >Leistungen</span
        >

        <div class="row wrap justify-between">
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            v-for="(item, key) in data"
            v-reveal="{ once: true }"
            :header="item.header"
            :subtext="item.subtext"
            :detailtext="item.detailText"
            :image="item.image"
            :key="key"
          />
        </div>
      </div>

      <!-- Kontakt und Karte -->
      <span
        class="inter text-primary text-h3 text-weight-bold block q-mt-xl"
        v-reveal="{ once: true }"
        >Kontakt</span
      >
      <div class="row q-mb-xl">
        <div class="col-12 col-md-6 q-pt-md">
          <span v-reveal="{ once: true }" class="roboto text-body1 block q-mb-sm q-ml-sm"
            >Bei Fragen oder wenn Sie weitere Informationen benötigen, senden Sie uns bitte eine
            E‑Mail oder rufen Sie uns an.
            <span class="text-primary text-weight-bold">Wir helfen Ihnen gerne weiter!</span></span
          >
          <q-chip
            v-reveal="{ once: true }"
            @click="redirectTo('https://maps.app.goo.gl/ELQbS8hAhRYHtrQ16')"
            clickable
            size="md"
            color="primary"
            dark
            icon="map"
            >Dornbacherstraße 1, 1170 Wien</q-chip
          >
          <q-chip
            v-reveal="{ once: true }"
            @click="redirectTo('tel:01/4864627')"
            size="md"
            clickable
            color="primary"
            dark
            icon="phone"
            >01/486 46 27</q-chip
          >
          <q-chip
            v-reveal="{ once: true }"
            @click="redirectTo('mailto:ordination@zahnwien.at?subject=Anfrage an Ordination 1170')"
            clickable
            size="md"
            color="primary"
            dark
            icon="mail"
            >ordination@zahnwien.at</q-chip
          >

          <OpeningHours :opening-hours-data="openingHours" />
        </div>

        <div class="col-12 col-md-6 q-mt-md">
          <div id="map" v-reveal="{ once: true }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Chip from '@/components/ChipComponent.vue'
import ServiceBox from '@/components/ServiceBox.vue'
import OpeningHours from '@/components/OpeningHours.vue'

import teethMedicin from '@/assets/icons/teeth_medicin.png'
import teethImplants from '@/assets/icons/teeth_implants.png'
import teethAesthetic from '@/assets/icons/teeth_aesthetic.png'
import digitalWorkflow from '@/assets/icons/digital_workflow.png'
import scan3d from '@/assets/icons/3d-scan.png'
import xray from '@/assets/icons/x-ray.png'

import L from 'leaflet'
import { onMounted, ref, type Ref } from 'vue'

import type { locationData, openingHours } from '@/types'
import { parseOpeningHours, parseImagePath } from '@/helpers'
import rawData from '@/assets/data/1170/text.json'

const data: Ref<locationData[]> = ref(rawData)
const openingHours: Ref<openingHours> = ref(parseOpeningHours())
const map: Ref<L.Map | undefined> = ref(undefined)
const mapMarker: Ref<L.Marker | undefined> = ref(undefined)
const carouselSlide: Ref<number> = ref(0)
const carouselAutoplay = ref(true)

onMounted(() => {
  map.value = L.map('map').setView([48.22625, 16.3075], 15)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value)

  mapMarker.value = L.marker([48.226278, 16.307361], {}).addTo(map.value)
  mapMarker.value.bindPopup('<b>Dornbacherstraße 1</b><br>1170 Wien')
})

data.value.forEach((locationDataItem) => {
  locationDataItem.image = parseImagePath('img/Details/' + locationDataItem.image)
})

function redirectTo(url: string): void {
  window.open(url)
}
</script>

<style scoped>
#map {
  height: 100%;
  min-height: 20rem;
  min-width: 20rem;
}
</style>
