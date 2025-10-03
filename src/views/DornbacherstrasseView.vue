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
    <div class="container">
      <!-- Linke Spalte -->
      <div class="textLinks">
        <h3>Dornbacher Straße 1</h3>
        <p><strong>Öffnungszeiten:</strong><br>
          Montag - Freitag: 09:00 - 18:00 Uhr<br>
          Samstag: 10:00 - 14:00 Uhr<br>
          Sonntag: Geschlossen
        </p>
        <p><strong>Kontakt:</strong><br>
          Telefon: +43 1 234 5678<br>
          E-Mail: office@example.at
        </p>
      </div>

      <div class="karteRechts" ref="mapContainer"></div>
    </div>
  </template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref, computed, onMounted } from "vue";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

const mapContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!mapContainer.value) return;

  const lat = 48.2312;
  const lng = 16.3380;

  const map = L.map(mapContainer.value).setView([lat, lng], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map)
    .bindPopup('Dornbacher Straße 1, 1170 Wien')
    .openPopup();
});

</script>

<style scoped>
.slider {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: visible;
  user-select: none;
}


.slider-track {
  display: flex;
  height: 100%;
  overflow: hidden;
}


.slide {
  flex: 0 0 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  pointer-events: none;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 10;
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


.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  height: 80vh;
}


.textLinks {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}


.karteRechts {
  flex: 1;
  height: 100%;
  min-height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

</style>
