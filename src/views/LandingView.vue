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

    <!-- 3D Logo -->
    <div ref="threeContainer" class="Logo3D"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RouterLink } from 'vue-router'
import { parseImagePath } from '@/helpers'

const leftImage = parseImagePath('img/Start1Normal.jpg')
const rightImage = parseImagePath('img/Start2Normal.jpg')

const splitContainer = ref<HTMLDivElement | null>(null)
const leftPic = ref<HTMLDivElement | null>(null)
const rightPic = ref<HTMLDivElement | null>(null)
const threeContainer = ref<HTMLDivElement | null>(null)


onMounted(() => {
  if (!threeContainer.value || !splitContainer.value) return

  // THREE.js Setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)

  let hoverLeft = false
  let hoverRight = false

  // Zielrotation für smooth Übergang
  let targetRotationX = 0
  let targetRotationY = 0

  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(800, 800) // größeres Logo
  threeContainer.value.appendChild(renderer.domElement)

  // Licht
  scene.add(new THREE.AmbientLight(0xffffff, 1))
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight)

  let model: THREE.Group | null = null

  const loader = new GLTFLoader()
  loader.load('/img/shaded.glb', (gltf: { scene: THREE.Group }) => {
    model = gltf.scene
    scene.add(model)
  })


  // Animation und mittige Position berechnen
  const animate = () => {
    requestAnimationFrame(animate)

    if (model) {

  // NORMALZUSTAND – kein Hover
  if (!hoverLeft && !hoverRight) {
    targetRotationX = 0
    targetRotationY = 0
  }

  // LINKS HOVER → leicht nach links kippen
  if (hoverLeft) {
    targetRotationX = 0        // nicht kippen nach vorne
    targetRotationY = -0.5     // links kippen
  }

  // RECHTS HOVER → leicht nach rechts kippen
  if (hoverRight) {
    targetRotationX = 0
    targetRotationY = +0.5    // rechts kippen
  }

  // SMOOTH Übergang
  model.rotation.x += (targetRotationX - model.rotation.x) * 0.05
  model.rotation.y += (targetRotationY - model.rotation.y) * 0.05
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
      console.log("qasf")
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

.PicLeft, .PicRight {
  flex: 1;
  background-size: cover;
  background-position: center;
  transition: flex 0.8s ease;
  position: relative;
  cursor: pointer;
}

.splitAnimation:hover .PicLeft:hover { flex: 1.5; }
.splitAnimation:hover .PicRight:hover { flex: 1.5; }

.TextLeft, .TextRight {
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
  top:0; left:0; right:0; bottom:0;
  background-color: #0000005e;
  z-index:1;
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

a { text-decoration: none; }
p { margin: 0; padding-left: 0; }

@media (max-width:1024px) { .Logo3D { width:300px; height:300px; } }
@media (max-width:768px) { .Logo3D { display:none; } }
@media (max-width:480px) { .Logo3D { display:none; } }
</style>
