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
      <div
        v-for="(img, index) in ordination1Images"
        :key="'o1-' + index"
        class="gallery-card"
        @click="openLightbox(ordination1Images, index)"
      >
        <img :src="img" alt="Ordination 1 Bild" />
      </div>
    </div>

    <!-- Ordination 2 -->
    <h1 class="ordination-title">Dornbacherstrasse</h1>
    <div class="gallery-grid">
      <div
        v-for="(img, index) in ordination2Images"
        :key="'o2-' + index"
        class="gallery-card"
        @click="openLightbox(ordination2Images, index)"
      >
        <img :src="img" alt="Ordination 2 Bild" />
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <Transition name="lightbox">
    <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
      <button class="close-btn" @click="closeLightbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <button
        class="nav-btn prev-btn"
        @click="prevImage"
        :disabled="currentIndex === 0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="lightbox-content">
        <img :src="currentImages[currentIndex]" alt="Großansicht" />
        <div class="image-counter">
          {{ currentIndex + 1 }} / {{ currentImages.length }}
        </div>
      </div>

      <button
        class="nav-btn next-btn"
        @click="nextImage"
        :disabled="currentIndex === currentImages.length - 1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </Transition>

  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const lightboxOpen = ref(false)
const currentImages = ref<string[]>([])
const currentIndex = ref(0)

const openLightbox = (images: string[], index: number) => {
  currentImages.value = images
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentIndex.value < currentImages.value.length - 1) {
    currentIndex.value++
  }
}

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return

  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
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
  cursor: pointer;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px $primary;
  }
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
}

.image-counter {
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, $primary, $secondary);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.95) rotate(90deg);
  }
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, $primary, $secondary);
  border: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.15);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.prev-btn {
    left: 2rem;
  }

  &.next-btn {
    right: 2rem;
  }
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-active .lightbox-content,
.lightbox-leave-active .lightbox-content {
  transition: transform 0.3s ease;
}

.lightbox-enter-from .lightbox-content {
  transform: scale(0.8);
}

.lightbox-leave-to .lightbox-content {
  transform: scale(0.8);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .nav-btn {
    width: 50px;
    height: 50px;

    svg {
      width: 28px;
      height: 28px;
    }

    &.prev-btn {
      left: 1rem;
    }

    &.next-btn {
      right: 1rem;
    }
  }

  .close-btn {
    width: 50px;
    height: 50px;
    top: 1rem;
    right: 1rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .image-counter {
    font-size: 1rem;
    padding: 0.4rem 1rem;
  }
}
</style>
