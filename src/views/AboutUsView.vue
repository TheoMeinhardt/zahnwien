<template>
  <div>
    <NavBar background="dark" text="white" :sticky="true" :overlay="false" />
    <div class="q-mt-xl q-pt-xl q-px-lg">
      <div class="inter text-primary text-center q-mb-xl">
        <span class="text-h2 text-weight-bold block">Unser Team</span>
        <span class="text-h6 text-italic text-weight-regular">
          Leidenschaft, Präzision & Menschlichkeit
        </span>
      </div>
      <div class="row q-col-gutter-xl justify-center">
        <div
          v-for="(person, index) in team"
          :key="person.name"
          class="col-12 col-md-4 flex flex-center column text-center animate-fade-up"
          :style="{ animationDelay: index * 0.2 + 's' }"
        >
          <div class="relative overflow-hidden team-img-wrapper">
            <img :src="person.image" :alt="person.name" class="team-img" />
          </div>
          <div class="q-mt-md text-h5 text-weight-bold text-primary">
            {{ person.name }}
          </div>
          <div class="text-subtitle2 text-grey-7 q-mb-md">
            {{ person.role }}
          </div>
          <div class="speech-bubble inter text-grey-8">
            {{ person.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

const team = [
  {
    name: 'Dr. Olivia',
    role: 'Zahnärztin & Praxisleitung',
    image: '',
    text: 'Ich liebe es, Menschen zu einem natürlichen Lächeln zu verhelfen – mit Feingefühl und moderner Zahnmedizin.',
  },
  {
    name: 'Dr. Muster',
    role: 'Spezialist für Implantologie',
    image: '',
    text: 'Technische Präzision trifft auf Ästhetik – mein Ziel ist dauerhafter Komfort und Funktion.',
  },
  {
    name: 'Mag. Luster',
    role: 'Dentalhygienikerin',
    image: '',
    text: 'Prophylaxe ist die Basis jedes gesunden Lächelns – ich helfe, dieses zu bewahren.',
  },
]
</script>

<style scoped>
.team-img-wrapper {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  transition:
    transform 0.4s ease,
    box-shadow 0.3s ease,
    border-radius 0.4s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.team-img-wrapper:hover {
  transform: scale(1.05);
  border-radius: 1rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
}

.team-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.speech-bubble {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  position: relative;
  max-width: 90%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px 10px 0;
  border-style: solid;
  border-color: white transparent transparent transparent;
}
.speech-bubble:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
</style>
