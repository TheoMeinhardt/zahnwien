<template>
  <!-- Hier kommt HTML -->

  <div class="splitAnimation">
    <div class="PicLeft" :style="'background-image: url(' + leftImage + ')'">
      <div class="overlay"></div>
      <div class="TextLeft">
        <RouterLink to="/dornbacherstrasse">
          <p class="text-h4 text-weight-bold text-no-wrap text-white">
            Dornbacher Straße 1<br>1170 Wien
          </p>
          <p class="text-white q-pt-lg">Kassenordination</p>
          <p class="text-white">mit Schwerpunkt</p>
          <p class="text-white">allgemeine Zahnmedizin</p>
          <p class="text-white">und Ästhetik</p>
        </RouterLink>
      </div>
    </div>


      <img class="Logo" src="/public/Logo_zahnwien.png">


    <div class="PicRight" :style="'background-image: url(' + rightImage + ')'">
      <div class="overlay"></div>
      <div class="TextRight">
        <RouterLink to="/mariahilferstrasse">
          <p class="text-h4 text-weight-bold text-no-wrap text-white">
            Mariahilferstraße 112<br> 1070 Wien
          </p>
          <p class="text-white q-pt-lg">Wahlarztordination</p>
          <p class="text-white">mit Schwerpunkt</p>
          <p class="text-white">Kieferorthopädie</p>
          <p class="text-white">und Kinderbehandlung</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const leftImage = import.meta.env.BASE_URL + 'img/Start1_7216_b.jpg'
const rightImage = import.meta.env.BASE_URL + 'img/Start1_7379_b.jpg'
</script>

<style lang="scss" scoped>

.Logo{
  position: fixed;
  inset: 0;
  margin: auto;
  background: transparent;
  height: 450px;
  z-index: 1000;
}
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

@keyframes float {
  0% { transform: translate(-50%, -50%) translateY(0); }
  100% { transform: translate(-50%, -50%) translateY(-15px); }
}

@media (max-width: 1200px) {
  .splitAnimation {
    flex-direction: column;
  }
  .PicLeft, .PicRight {
    flex: none;
    width: 100%;
    height: 50vh;
  }
  .splitAnimation:hover .PicLeft:hover,
  .splitAnimation:hover .PicRight:hover {
    flex: none;
  }
  .TextLeft, .TextRight {
    transform: translate(-50%, -50%) scale(0.9);
    padding: 0.5em 1em;
  }
  .Logo{
  position: fixed;
  inset: 0;
  margin: auto;
  background: transparent;
  height: 100px;
  z-index: 1000;
}
}

@media (max-width: 768px) {
  .TextLeft, .TextRight {
    font-size: 0.8rem;
    padding: 0.5em 0.8em;
  }

.Logo{
  position: fixed;
  inset: 0;
  margin: auto;
  background: transparent;
  height: 100px;
  z-index: 1000;
}
}


</style>
