<template>
  <div>
    <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

    <div class="q-mt-xl q-pt-xl q-px-lg">
      <!-- Heading -->
      <div class="text-primary" v-reveal="{ once: true }">
        <span class="gt-sm text-h4 text-weight-bolder block">Mariahilfer Straße 112</span>
        <span class="lt-md text-h6 text-weight-bolder block">Mariahilfer Straße 112</span>
        <span class="gt-sm text-h4 text-italic">1070 Wien</span>
        <span class="lt-md text-h6 text-italic">1070 Wien</span>
      </div>

      <div class="row wrap items-center justify-between">
        <!-- Einführungstext -->
        <div class="col-12 col-md-5" v-reveal="{ once: true }">
          <span class="block q-my-lg text-body1 text-justify"
            >In unserer neuen sehr zentral gelegenen Wahlarztordination direkt auf der
            Mariahilferstraße empfangen wir Sie in einem modernen, künstlerischen Ambiente in einem
            typischen Wiener Gebäude. Lehnen Sie Sich zurück, genießen den Flair und die innovativen
            zahnärztlichen Leistungen unseres fortschrittlichen jungen Teams.</span
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
            height="40vh"
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

            <div class="row text-italic text-weight-light q-mt-sm">
              <Chip v-reveal="{ once: true }" color="white" text-color="primary" :img="teethMedicin"
                >Kieferorthopädie</Chip
              >

              <Chip
                v-reveal="{ once: true }"
                color="white"
                text-color="primary"
                :img="teethImplants"
                >Invisalign</Chip
              >

              <Chip
                v-reveal="{ once: true }"
                color="white"
                text-color="primary"
                :img="teethAesthetic"
                >Kinderbehandlung</Chip
              >
            </div>
          </div>

          <!-- Equipment chips -->
          <div>
            <!-- Equipment heading -->
            <span class="text-h5 text-bold text-primary q-mt-lg block">Ausstattung:</span>

            <div class="row text-italic text-weight-light q-mt-sm">
              <Chip v-reveal="{ once: true }" color="white" text-color="primary" :img="xray"
                >Digitale Scans</Chip
              >

              <Chip
                v-reveal="{ once: true }"
                color="white"
                text-color="primary"
                :img="digitalWorkflow"
                >moderne KFO-Technik</Chip
              >

              <Chip v-reveal="{ once: true }" color="white" text-color="primary" :img="scan3d"
                >Invisalign-Partnerpraxis</Chip
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
        <span class="text-primary text-h3 text-weight-bold block" v-reveal="{ once: true }"
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
      <span class="text-primary text-h3 text-weight-bold block q-mt-xl" v-reveal="{ once: true }"
        >Kontakt</span
      >
      <div class="row q-mb-xl">
        <div class="col-12 col-md-6 q-pt-md">
          <span v-reveal="{ once: true }" class="text-body1 block q-mb-sm q-ml-sm"
            >Bei Fragen oder wenn Sie weitere Informationen benötigen, senden Sie uns bitte eine
            E‑Mail oder rufen Sie uns an.
            <span class="text-primary text-weight-bold">Wir helfen Ihnen gerne weiter!</span></span
          >
          <q-chip
            v-reveal="{ once: true }"
            @click="redirectTo('https://maps.app.goo.gl/XJLwsii2k33Bef3U6')"
            clickable
            size="md"
            color="white"
            icon="map"
            square
            dense
            class="text-black"
            >Mariahilfer Straße 112, 1070 Wien</q-chip
          >
          <br />
          <q-chip
            v-reveal="{ once: true }"
            @click="redirectTo('tel:06644633073')"
            size="md"
            clickable
            color="white"
            icon="phone"
            square
            dense
            class="text-black"
            >0664-46 33 073</q-chip
          >
          <br />
          <q-chip
            v-reveal="{ once: true }"
            @click="redirectTo('mailto:ordination@zahnwien.at?subject=Anfrage an Ordination 1070')"
            clickable
            size="md"
            color="white"
            icon="mail"
            square
            dense
            class="text-black"
            >ordination@zahnwien.at</q-chip
          >

          <OpeningHours :opening-hours-data="openingHours" />
        </div>

        <div class="col-12 col-md-6 q-mt-md">
          <div id="map" v-reveal="{ once: true }"></div>
        </div>
      </div>
    </div>

    <Footer
      :location-info="{
        name: 'Ordination Mariahilfer Straße',
        street: 'Mariahilfer Straße 112',
        zipcode: '1070 Wien',
        email: 'ordination@zahnwien.at',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Chip from '@/components/ChipComponent.vue'
import ServiceBox from '@/components/ServiceBox.vue'
import OpeningHours from '@/components/OpeningHours.vue'
import Footer from '@/components/FooterComponent.vue'

import L from 'leaflet'
import { onMounted, ref, type Ref } from 'vue'

import type { locationData, openingHours } from '@/types'
import { parseOpeningHours, parseImagePath, redirectTo } from '@/helpers'
import rawData from '@/assets/data/1070/text.json'
import rawOpeningHours from '@/assets/data/1070/openingHours.json'

const data: Ref<locationData[]> = ref(rawData)
const openingHours: Ref<openingHours> = ref(parseOpeningHours(rawOpeningHours))
const map: Ref<L.Map | undefined> = ref(undefined)
const mapMarker: Ref<L.Marker | undefined> = ref(undefined)
const carouselSlide: Ref<number> = ref(0)
const carouselAutoplay = ref(true)

onMounted(() => {
  map.value = L.map('map').setView([48.19671613828359, 16.343123042851115], 15)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value)

  mapMarker.value = L.marker([48.19671613828359, 16.343123042851115], {}).addTo(map.value)
  mapMarker.value.bindPopup('<b>Mariahilfer Straße 112</b><br>1070 Wien')
})

data.value.forEach((locationDataItem) => {
  locationDataItem.image = parseImagePath('img/Details/' + locationDataItem.image)
})
</script>

<style scoped>
#map {
  height: 100%;
  min-height: 20rem;
  min-width: 20rem;
}
</style>
