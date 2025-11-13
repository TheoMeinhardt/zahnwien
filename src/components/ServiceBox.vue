<template>
  <div class="box row">
    <!-- Backside -->
    <div class="card-back col" :class="{ 'back-visible': showBack }">
      <span class="roboto text-dark text-subtitle2 text-weight-regular q-mt-sm">
        {{ detailtext }}
      </span>
      <q-btn @click="flip()" outline round color="primary" icon="close" />
    </div>

    <!-- Frontside -->
    <div class="col q-mt-xl q-mb-md q-mx-lg front-content" :class="{ 'front-hidden': !showFront }">
      <span class="inter text-primary text-h5 block">{{ props.header }}</span>
      <span class="roboto text-dark text-subtitle2 text-weight-regular block q-mt-sm">
        {{ props.subtext }}</span
      >
      <q-btn
        @click="flip()"
        flat
        no-caps
        dense
        color="primary"
        icon-right="keyboard_arrow_right"
        label="mehr erfahren"
        size="md"
        class="float-right q-mt-lg"
      />
    </div>
    <q-img
      class="col full-width front-image"
      :src="props.image"
      :class="{ 'front-hidden': !showFront }"
      contain
    ></q-img>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  header: string
  subtext: string
  detailtext: string
  image: string
}>()

const showFront = ref(true)
const showBack = ref(false)

const FLIP_DURATION = 250 // ms - should match the CSS transition duration

function flip() {
  if (showFront.value) {
    showFront.value = false
    setTimeout(() => (showBack.value = true), FLIP_DURATION)
  } else {
    showBack.value = false
    setTimeout(() => (showFront.value = true), FLIP_DURATION)
  }
}
</script>

<style lang="scss" scoped>
.box {
  min-width: 45vw;
  overflow: hidden;
  position: relative;

  border: $primary 2px solid;
  border-radius: 30px;

  transition:
    transform 0.15s ease-out,
    box-shadow 0.25s ease-out;
}

.box:hover {
  transform: scale(1.025);
  box-shadow: 0px 0px 10px $primary;
}

.q-img {
  border-radius: 0px 30px 30px 0px;
}

.card-back {
  position: absolute;
  inset: 0;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: none; /* don't block clicks when invisible */
}

.back-visible {
  opacity: 1;
  pointer-events: auto; /* allow interaction when visible */
}

.front-content,
.front-image {
  transition: opacity 0.25s ease;
  opacity: 1;
}

.front-hidden {
  opacity: 0;
  pointer-events: none; /* prevent interaction while hidden */
}
</style>
