<template>
  <!-- Hier kommt HTML -->

  <div class="splitAnimation">
    <div class="PicLeft" :style="'background-image: url(' + leftImage + ')'">
      <div class="overlay"></div>
      <div class="TextLeft">
        <RouterLink to="/dornbacherstrasse">
          <p class="text-h4 text-weight-bold text-no-wrap text-white">
            Dornbacher Straße 1<br />1170 Wien
          </p>
          <p class="text-white q-pt-lg">Kassenordination</p>
          <p class="text-white">mit Schwerpunkt</p>
          <p class="text-white">allgemeine Zahnmedizin</p>
          <p class="text-white">und Ästhetik</p>
        </RouterLink>
      </div>
    </div>

    <img class="Logo" :src="parseImagePath('Logo_zahnwien.png')" />

    <div class="PicRight" :style="'background-image: url(' + rightImage + ')'">
      <div class="overlay"></div>
      <div class="TextRight">
        <RouterLink to="/mariahilferstrasse">
          <p class="text-h4 text-weight-bold text-no-wrap text-white">
            Mariahilferstraße 112<br />1070 Wien
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
import { parseImagePath } from '@/helpers'

const leftImage = parseImagePath('img/Start1Normal.jpg')
const rightImage = parseImagePath('img/Start2Normal.jpg')
</script>

<style lang="scss" scoped>
.splitAnimation:hover .PicLeft:hover + .Logo {
  transform: translate(calc(105% - 2.5vw));
}

.splitAnimation:has(.PicRight:hover) .Logo {
  transform: translate(calc(-60% - 2.5vw));
}
.Logo {
  position: fixed;
  inset: 0;
  margin: auto;
  background: transparent;
  height: 300px;
  z-index: 1000;
  transition: transform 0.8s ease;
  pointer-events: none;
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0000005e;
  z-index: 1;
}

@media (max-width: 1024px) {
  .Logo {
    height: 200px;
  }

  .TextLeft,
  .TextRight {
    p.text-h4 {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 768px) {
  .splitAnimation {
    flex-direction: column;
  }

  .PicLeft,
  .PicRight {
    flex: 1;
  }

  .splitAnimation:hover .PicLeft:hover,
  .splitAnimation:hover .PicRight:hover {
    flex: 1.5;
  }

  .Logo {
    display: none;
  }

  .TextLeft,
  .TextRight {
    padding: 0.5em 1em;

    p.text-h4 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}

@media (max-width: 480px) {
  .Logo {
    display: none;
  }

  .TextLeft,
  .TextRight {
    p.text-h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
}
</style>
