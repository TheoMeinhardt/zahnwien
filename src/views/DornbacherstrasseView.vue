<template>
  <NavBar background="transparent" text="white" :sticky="false" :overlay="true" />
  <div class="slider" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag"
    @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
    <div class="slider-track" :style="trackStyle">
      <div v-for="(slide, i) in slides" :key="i" class="slide" :style="{ backgroundImage: `url(${slide})` }"></div>
    </div>
    <div class="overlay"></div>
    <button class="nav left" @click="prevSlide">‹</button>
    <button class="nav right" @click="nextSlide">›</button>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref, computed } from "vue";

const slides = ref<string[]>([
  "../../public/img/Ordi_1170/VFN_7243.jpg",
  "../../public/img/Ordi_1170/VFN_7229.jpg",
  "../../public/img/Ordi_1170/VFN_7330.jpg",
  "../../public/img/Ordi_1170/VFN_7216.jpg",
  "../../public/img/Ordi_1170/VFN_7245.jpg",
  "../../public/img/Ordi_1170/VFN_7224.jpg",
  "../../public/img/Ordi_1170/VFN_7248.jpg",
  "../../public/img/Ordi_1170/VFN_7234.jpg",
  "../../public/img/Ordi_1170/VFN_7219.jpg",
  "../../public/img/Ordi_1170/VFN_7249.jpg",
  "../../public/img/Ordi_1170/VFN_7225.jpg",
  "../../public/img/Ordi_1170/VFN_7230.jpg",
  "../../public/img/Ordi_1170/VFN_7244.jpg"
]);

const currentIndex = ref(0);
const trackOffset = ref(0);
let startX = 0;
let isDragging = false;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging = true;
  startX = "touches" in e ? e.touches[0].clientX : e.clientX;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging) return;
  const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
  trackOffset.value = startX - currentX;
};

const endDrag = () => {
  if (!isDragging) return;

  if (trackOffset.value > 100) {
    nextSlide();
  } else if (trackOffset.value < -100) {
    prevSlide();
  }

  trackOffset.value = 0;
  isDragging = false;
};

const trackStyle = computed(() => {
  return {
    transform: `translateX(calc(-${currentIndex.value * 100}% - ${trackOffset.value}px))`,
    transition: isDragging ? 'none' : 'transform 0.5s ease',
  };
});
</script>

<style scoped>
.slider {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  user-select: none;
}

.slider-track {
  display: flex;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: #1e87a7;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 0px 25px white;
}

.nav.left {
  left: 20px;
}

.nav.right {
  right: 20px;
}
</style>
