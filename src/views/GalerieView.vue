<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

    <section class="hero">
    <div class="hero-content">
      <h1 class="headline">Unsere Galerie</h1>
      <p class="subline"></p>
    </div>
  </section>

  <section class="gallery-section">

    <!-- Ordination 1 -->
    <h1 class="ordination-title">Mariahilferstraße</h1>
    <div class="gallery-grid">
      <div v-for="(img, index) in ordination1Images" :key="'o1-' + index" class="gallery-card">
        <img :src="img" alt="Ordination 1 Bild" />
      </div>
    </div>

    <!-- Ordination 2 -->
    <h1 class="ordination-title">Dornbacherstrasse</h1>
    <div class="gallery-grid">
      <div v-for="(img, index) in ordination2Images" :key="'o2-' + index" class="gallery-card">
        <img :src="img" alt="Ordination 2 Bild" />
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooterComponent.vue'

import { parseImagePath } from '@/helpers'

const ordination1Images = [
  parseImagePath('img/Ordi_1070/VFN_7361.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7363.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7366.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7370.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7374.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7376.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7379.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7390.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7392.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7393.jpg'),
  parseImagePath('img/Ordi_1070/VFN_7395.jpg')
]

const ordination2Images = [
  parseImagePath('img/Ordi_1170/Ordi1_7290.jpg'),
  parseImagePath('img/Ordi_1170/Ordi2_7224.jpg'),
  parseImagePath('img/Ordi_1170/Ordi3_7303.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7216.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7219.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7224.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7225.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7229.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7230.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7234.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7243.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7244.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7245.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7248.jpg'),
  parseImagePath('img/Ordi_1170/VFN_7249.jpg')
]
</script>

<style scoped lang="scss">
  .hero {
  width: 100%;
  padding: 140px 20px 100px;
  background: linear-gradient(135deg, $primary, $secondary);
  color: white;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.hero-content {
  max-width: 1300px;
  margin: 0 auto;
}

.headline {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.subline {
  font-size: 1.2rem;
  opacity: 0.85;
}
.gallery-section {
  padding: 3rem 2rem;
  text-align: center;
  background: #f8f9fa;
}

.ordination-title {
  font-size: 2rem;
  margin: 2rem 0 1rem 0;
  color: $primary;
  font-weight: 600;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.gallery-card {
  overflow: hidden;
  border-radius: 25px;
  border: 3px solid $primary;
  transition: transform 0.2s ease-out, box-shadow 0.3s ease-out;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

  }
}
</style>
