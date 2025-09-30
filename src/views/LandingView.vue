<template>
    <!-- Hier kommt HTML -->
  <div class="splitAnimation">
    <div class="PicLeft" style="background-image: url('../../img/Ordi_1170/VFN_7219.jpg');">
      <div class="TextLeft">
        <a href="../views/DornbacherstrasseView.vue">
          <p class="inter-light dark">Dornbacher Straße 1 1170, Wien</p>
        </a>
      </div>
    </div>

    <div class="PicRight" style="background-image: url('../../img/Ordi_1070/VFN_7366.jpg');">
      <div class="TextRight">
        <a href="../views/MariahilferstrasseView.vue">
          <p class="inter-light dark">Mariahilferstraße 112 1070, Wien</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { onMounted } from 'vue';

onMounted(() => {
  const picLeft = document.getElementsByClassName("PicLeft")[0] as HTMLElement | undefined;
  const picRight = document.getElementsByClassName("PicRight")[0] as HTMLElement | undefined;
  const textLeft = document.getElementsByClassName("TextLeft");
  const textRight = document.getElementsByClassName("TextRight");

  if (!picLeft || !picRight) return; 

  function hoverEffect(
    hoverPic: HTMLElement,
    hideTexts: HTMLCollectionOf<Element>,
    bubbleTexts: HTMLCollectionOf<Element>
  ) {
    hoverPic.addEventListener("mouseenter", () => {
      for (const el of hideTexts) {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translate(-50%, -50%) scale(0.3)";
      }
      for (const el of bubbleTexts) {
        (el as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)";
      }
    });
    hoverPic.addEventListener("mouseleave", () => {
      for (const el of hideTexts) {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)";
      }
      for (const el of bubbleTexts) {
        (el as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)";
      }
    });
  }

  hoverEffect(picLeft, textRight, textLeft);
  hoverEffect(picRight, textLeft, textRight);
});

</script>

<!-- Ich bekomme das standart margin vom browser nicht weg, mach du das bitte noch -->
<style scoped>

  a{
    text-decoration: none;
  }
  html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.splitAnimation {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.PicLeft, .PicRight {
  flex: 1;
  background-size: cover;
  background-position: center;
  transition: flex 0.8s ease;
  position: relative;
  cursor: pointer;
}

.splitAnimation:hover .PicLeft:hover {
  flex: 2;
}

.splitAnimation:hover .PicRight:hover {
  flex: 2;
}

.TextLeft, .TextRight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: white;
  padding: 1em 2em;
  border-radius: 50px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  transition: all 0.5s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  white-space: nowrap;
}


</style>
