<template>
  <div>
    <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

    <div class="q-mt-xl q-pt-xl q-px-lg">
      <!-- Heading -->
      <div class="inter text-primary">
        <span class="text-h2 text-weight-bold block">Dornbacherstraße 1</span>
        <span class="text-h6 text-italic text-weight-regular">1170 Wien</span>
      </div>

      <div class="row q-mt-lg items-start q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <!-- Focus chips -->
          <div>
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
            <span class="text-h5 text-bold text-primary q-mt-lg block">Ausstattung:</span>

            <div class="inter row text-italic text-weight-light q-mt-sm">
              <Chip color="white" text-color="primary" img="src/assets/icons/x-ray.png">Röntgen</Chip>
              <Chip color="white" text-color="primary" img="">DVT</Chip>
              <Chip color="white" text-color="primary" img="src/assets/icons/digital_workflow.png"
                >digitale Workflows</Chip
              >
              <Chip color="white" text-color="primary" img="src/assets/icons/3d-scan.png"
                >3D-Scan</Chip
              >
            </div>
          </div>e

          <div>
            <span class="text-h5 text-bold text-primary q-mt-lg block">Öffnungszeiten:</span>
          </div>
        </div>

        <div class="col-12 col-md-6 flex justify-center">
          <div class="map-wrapper q-mt-lg">
            <l-map
              class="l-map"
              :zoom="17"
              :center="[48.2228, 16.2949]"
              :use-global-leaflet="false"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
              <l-marker :lat-lng="[48.2228, 16.2949]">
                <l-popup>Dornbacherstraße 1, 1170 Wien</l-popup>
              </l-marker>
            </l-map>
          </div>
        </div>
      </div>

      <div class="q-mt-xl">
        <span class="inter text-primary text-h3 text-weight-bold block">Leistungen</span>

        <div class="row wrap justify-between">
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            header="Prophylaxe & Bleaching"
            subtext="Sanfte Reinigung für gesunde Zähne. Aufhellung für ein frisches Lächeln."
            image="https://placehold.co/600x400"
          />
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            header="Kronen, Brücken, Veneers"
            subtext="Schöne Zähne durch Keramik."
            image="https://placehold.co/600x400"
          />
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            header="Kronen, Brücken, Veneers"
            subtext="Schöne Zähne durch Keramik."
            image="https://placehold.co/600x400"
          />
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            header="Prophylaxe & Bleaching"
            subtext="Sanfte Reinigung für gesunde Zähne. Aufhellung für ein frisches Lächeln."
            image="https://placehold.co/600x400"
          />
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            header="Prophylaxe & Bleaching"
            subtext="Sanfte Reinigung für gesunde Zähne. Aufhellung für ein frisches Lächeln."
            image="https://placehold.co/600x400"
          />
          <ServiceBox
            class="col-12 col-md-5 q-mt-xl"
            header="Prophylaxe & Bleaching"
            subtext="Sanfte Reinigung für gesunde Zähne. Aufhellung für ein frisches Lächeln."
            image="https://placehold.co/600x400"
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
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"

</script>

<style scoped>
.map-wrapper {
  width: 100%;
  max-width: 500px;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.map-wrapper:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.l-map {
  width: 100%;
  height: 100%;
}
</style>
