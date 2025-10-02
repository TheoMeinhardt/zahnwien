<template>
  <!-- Hier kommt HTML -->
  <NavBar background="transparent" text="white" :sticky="false" :overlay="true" />

  <div class="splitAnimation">
    <div class="PicLeft" style="background-image: url('../../img/Ordi_1170/VFN_7219.jpg')">
      <div class="overlay"></div>
      <div class="TextLeft">
        <a href="../views/DornbacherstrasseView.vue">
          <p class="text-h4 text-weight-bold text-no-wrap text-white">
            Dornbacher Straße 1 1170, Wien
          </p>
          <p class="text-white q-pt-lg">➜ allg. Zahnmedizin</p>
          <p class="text-white">➜ Implantologie</p>
          <p class="text-white">➜ Ästhetik</p>
        </a>
      </div>
    </div>

    <div class="PicRight" style="background-image: url('../../img/Ordi_1070/VFN_7366.jpg')">
      <div class="overlay"></div>
      <div class="TextRight">
        <a href="../views/MariahilferstrasseView.vue">
          <p class="text-h4 text-weight-bold text-no-wrap text-white">
            Mariahilferstraße 112 1070, Wien
          </p>
          <p class="text-white q-pt-lg">➜ Kieferorthopädie</p>
          <p class="text-white">➜ Invisalign</p>
          <p class="text-white">➜ Kinderbehandlung</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'


</script>

<style lang="scss" scoped>

a {
  text-decoration: none;
}

p {
  margin: 0;
  padding-left: 0;
}

.splitAnimation {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.PicLeft,
.PicRight {
  flex: 1;
  background-size: cover;
  background-position: center;
  transition: flex 0.8s ease;
  position: relative;
  cursor: pointer;
}

.splitAnimation:hover .PicLeft:hover {
  flex: 1.5;
}

.splitAnimation:hover .PicRight:hover {
  flex: 1.5;
}

.TextLeft,
.TextRight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  padding: 1em 2em;
  border-radius: 50px;
  text-align: center;
  z-index: 9999;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb($dark, 0.5);
  color: black;
  z-index: 1;
}



</style>

