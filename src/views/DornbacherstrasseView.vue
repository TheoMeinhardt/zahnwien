<template>
  <div>
    <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

    <div class="q-mt-xl q-pt-xl q-px-lg">
      <!-- Heading -->
      <div class="inter text-primary">
        <span class="text-h2 text-weight-bold block">Dornbacherstraße 1</span>
        <span class="text-h6 text-italic text-weight-regular">1170 Wien</span>
      </div>

      <div class="row wrap">
        <div class="col-12 col-md-6">
          <!-- Focus chips -->
          <div>
            <!-- Focus heading -->
            <span class="text-h5 text-bold text-primary q-mt-lg block">Fokus:</span>

            <div class="inter row text-italic text-weight-light q-mt-sm">
              <Chip color="white" text-color="primary" img="src/assets/icons/teeth_medicin.png"
                >Allgemeine Zahnmedizin</Chip
              >

              <Chip color="white" text-color="primary" img="src/assets/icons/teeth_implants.png"
                >Implantologie</Chip
              >

              <Chip color="white" text-color="primary" img="src/assets/icons/teeth_aesthetic.png"
                >Ästhetik</Chip
              >
            </div>
          </div>

          <!-- Equipment chips -->
          <div>
            <!-- Equipment heading -->
            <span class="text-h5 text-bold text-primary q-mt-lg block">Ausstattung:</span>

            <div class="inter row text-italic text-weight-light q-mt-sm">
              <Chip color="white" text-color="primary" img="src/assets/icons/x-ray.png"
                >Röntgen</Chip
              >

              <Chip color="white" text-color="primary" img="">DVT</Chip>

              <Chip color="white" text-color="primary" img="src/assets/icons/digital_workflow.png"
                >digitale Workflows</Chip
              >

              <Chip color="white" text-color="primary" img="src/assets/icons/3d-scan.png"
                >3D-Scan</Chip
              >
            </div>
          </div>

          <!-- Opening Hours -->
          <div>
            <!-- Opening Hours heading -->
            <span class="text-h5 text-bold text-primary q-mt-lg block">Öffnungszeiten:</span>
          </div>
        </div>

        <!-- Map -->
        <div id="map" class="col-12 col-md-6"></div>
      </div>

      <div class="q-mt-xl">
        <span class="inter text-primary text-h3 text-weight-bold block">Leistungen</span>

        <div class="row wrap justify-between">
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            v-for="(item, key) in data"
            :header="item.header"
            :subtext="item.subtext"
            :detailtext="item.detailText"
            :image="item.image"
            :key="key"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Chip from '@/components/ChipComponent.vue'
import ServiceBox from '@/components/ServiceBox.vue'

import L from 'leaflet'
import { onMounted, ref, type Ref } from 'vue'

import type { locationData } from '@/types'
import { parseOpeningHours } from '@/helpers'
import rawData from '@/assets/data/1170/text.json'

const data: Ref<locationData[]> = ref(rawData)
const map: Ref<L.Map | undefined> = ref(undefined)
const mapMarker: Ref<L.Marker | undefined> = ref(undefined)

onMounted(() => {
  map.value = L.map('map').setView([48.22625, 16.3075], 15)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value)

  mapMarker.value = L.marker([48.226278, 16.307361], {}).addTo(map.value)
  mapMarker.value.bindPopup('<b>Dornbacraße 1</b><br>1170 Wien')
})
</script>

<style scoped>
#map {
  height: 20rem;
  min-width: 20rem;
}
</style>
