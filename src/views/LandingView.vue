<template>
  <div ref="splitContainer" class="splitAnimation">
    <!-- Linkes Bild -->
    <div ref="leftPic" class="PicLeft" :style="'background-image: url(' + leftImage + ')'">
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

    <!-- Rechtes Bild -->
    <div ref="rightPic" class="PicRight" :style="'background-image: url(' + rightImage + ')'">
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

    <!-- 3D Logo - nur auf Desktop -->
    <div v-if="isDesktop" ref="threeContainer" class="Logo3D"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { parseImagePath } from '@/helpers'

const leftImage = parseImagePath('img/Start2_7229_c.jpg')
const rightImage = parseImagePath('img/Start2_7363_c.jpg')

const splitContainer = ref<HTMLDivElement | null>(null)
const leftPic = ref<HTMLDivElement | null>(null)
const rightPic = ref<HTMLDivElement | null>(null)
const threeContainer = ref<HTMLDivElement | null>(null)

// Mobile Detection
const isDesktop = ref(window.innerWidth > 1024)

const handleResize = () => {
  isDesktop.value = window.innerWidth > 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  // Three.js nur auf Desktop laden
  if (!isDesktop.value || !threeContainer.value || !splitContainer.value) return

  // THREE.js dynamisch importieren nur auf Desktop
  Promise.all([
    import('three'),
    import('three/examples/jsm/loaders/GLTFLoader.js')
  ]).then(([THREE, { GLTFLoader }]) => {
    if (!threeContainer.value || !isDesktop.value) return

    type THREEModule = typeof THREE
    type Group = InstanceType<THREEModule['Group']>
    type Scene = InstanceType<THREEModule['Scene']>
    type PerspectiveCamera = InstanceType<THREEModule['PerspectiveCamera']>
    type WebGLRenderer = InstanceType<THREEModule['WebGLRenderer']>

    // THREE.js Setup
    const scene: Scene = new THREE.Scene()
    const camera: PerspectiveCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)

    let hoverLeft = false
    let hoverRight = false

    // Zielrotation für smooth Übergang
    let targetRotationX = 0
    let targetRotationY = 0

    camera.position.z = 5

    const renderer: WebGLRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(800, 800)
    threeContainer.value.appendChild(renderer.domElement)

    // Licht
    scene.add(new THREE.AmbientLight(0xffffff, 1))
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)

    let model: Group | null = null

    const loader = new GLTFLoader()
    loader.load('/img/shaded.glb', (gltf: { scene: Group }) => {
      model = gltf.scene
      scene.add(model)
    })

    // Animation und mittige Position berechnen
    const animate = () => {
      if (!isDesktop.value) return // Stop animation wenn mobile

      requestAnimationFrame(animate)

      if (model) {
        const ROTATION_ANGLE = 0.5
        const ROTATION_SMOOTHING = 0.05

        // NORMALZUSTAND – kein Hover
        if (!hoverLeft && !hoverRight) {
          targetRotationX = 0
          targetRotationY = 0
        }

        // LINKS HOVER → leicht nach links kippen
        if (hoverLeft) {
          targetRotationX = 0           // nicht kippen nach vorne
          targetRotationY = -ROTATION_ANGLE
        }

        // RECHTS HOVER → leicht nach rechts kippen
        if (hoverRight) {
          targetRotationX = 0
          targetRotationY = ROTATION_ANGLE
        }

        // SMOOTH Übergang
        model.rotation.x += (targetRotationX - model.rotation.x) * ROTATION_SMOOTHING
        model.rotation.y += (targetRotationY - model.rotation.y) * ROTATION_SMOOTHING
      }

      // dynamische Mitte berechnen
      if (splitContainer.value && leftPic.value && rightPic.value && threeContainer.value) {
        const leftRect = leftPic.value.getBoundingClientRect()
        const rightRect = rightPic.value.getBoundingClientRect()

        const centerX = (leftRect.right + rightRect.left) / 2
        const centerY = splitContainer.value.clientHeight / 2

        // Logo mittig positionieren
        threeContainer.value.style.left = `${centerX - threeContainer.value.clientWidth / 2}px`
        threeContainer.value.style.top = `${centerY - threeContainer.value.clientHeight / 2}px`
      }

      renderer.render(scene, camera)
    }

    if (leftPic.value) {
      leftPic.value.addEventListener("mouseenter", () => {
        hoverLeft = true
        hoverRight = false
      })
      leftPic.value.addEventListener("mouseleave", () => {
        hoverLeft = false
      })
    }

    if (rightPic.value) {
      rightPic.value.addEventListener("mouseenter", () => {
        hoverRight = true
        hoverLeft = false
      })
      rightPic.value.addEventListener("mouseleave", () => {
        hoverRight = false
      })
    }

    animate()
  }).catch(err => {
    console.error('Failed to load Three.js:', err)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.splitAnimation {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  pointer-events: none;
}

.Logo3D {
  position: absolute;
  padding-top: 10rem;
  width: 800px;
  height: 800px;
  z-index: 1000;
  pointer-events: none;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
  padding-left: 0;
}

@media (min-width: 1025px) {
  .splitAnimation:hover .PicLeft:hover {
    flex: 1.5;
  }

  .splitAnimation:hover .PicRight:hover {
    flex: 1.5;
  }
}

/* Tablet & kleiner: Hover deaktivieren + Logo ausblenden */
@media (max-width: 1024px) {
  .Logo3D {
    display: none;
  }

  .splitAnimation:hover .PicLeft:hover,
  .splitAnimation:hover .PicRight:hover {
    flex: 1 !important;
    transition: none !important;
  }

  .PicLeft,
  .PicRight {
    cursor: default;
  }
}

/* Mobile Layout */
@media (max-width: 600px) {
  .splitAnimation {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }

  .PicLeft,
  .PicRight {
    width: 100%;
    height: 50vh;
    flex: unset;
    transition: none !important;
    cursor: default;
  }

  .PicLeft:hover,
  .PicRight:hover {
    flex: unset !important;
  }

  .TextLeft,
  .TextRight {
    transform: translate(-50%, -50%) scale(0.85);
    width: 90%;
    padding: 0.5em 1em;
  }

  .TextLeft p,
  .TextRight p {
    font-size: 0.95rem;
    line-height: 1.3;
  }
}

/* Sehr kleine Bildschirme */
@media (max-width: 480px) {
  .Logo3D {
    display: none;
  }

  .PicLeft,
  .PicRight {
    transition: none !important;
  }

  .TextLeft,
  .TextRight {
    transform: translate(-50%, -50%) scale(0.75);
  }

  .TextLeft p,
  .TextRight p {
    font-size: 0.85rem;
  }
}
</style>
