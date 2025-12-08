<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="headline">Ihre innovativen Zahnärztinnen in Dornbach und Mariahilf</h1>
      <p class="subline">Moderne Zahnmedizin • Ästhetik • Wohlfühlatmosphäre</p>
    </div>
  </section>

  <!-- Gruppenbild -->
  <div class="group-wrapper" v-reveal="{ once: true }">
    <img class="groupImg" src="img/Uberuns/Gruppenbild.jpg" alt="Gruppenbild des Teams" />
  </div>

  <!-- Team-Karten -->
  <div class="soloPics">
    <article class="person card" v-for="member in team" :key="member.name" v-reveal="{ once: true }">
      <img :src="member.img" class="soloImg" :alt="member.name" />
      <h2 class="name">{{ member.name }}</h2>
      <p class="bio">{{ member.bio }}</p>
    </article>

  </div>
     <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooterComponent.vue'
import { ref } from 'vue'

const team = ref([
  {
    name: 'Dr. Isabelle Olivia',
    img: 'img/Uberuns/isabelle.jpg',
    bio: 'Dr. Isabelle Olivia ist spezialisiert auf ästhetische Zahnmedizin, Implantologie und digitale Workflows. Sie legt Wert auf individuelle Betreuung und moderne Behandlungsmethoden.'
  },
  {
    name: 'Dr. Ewa Olivia',
    img: 'img/Uberuns/Ewa.jpg',
    bio: 'Dr. Ewa Olivia arbeitet mit einem Fokus auf Prophylaxe, Parodontologie und Kinderzahnmedizin. Sie schafft eine angenehme und entspannte Atmosphäre für alle Patienten.'
  },
  {
    name: 'Dr. Miriam Matejka',
    img: 'img/Uberuns/dentist3.jpg',
    bio: 'Dr. Miriam Matejka bringt langjährige Erfahrung in der Chirurgie und Implantologie mit. Sie sorgt für präzise Behandlungen und höchste Qualitätsstandards.'
  }
])
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

/* Gruppenbild */
.group-wrapper {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.groupImg {
  width: 100%;
  max-width: 1200px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  object-fit: cover;
}

/* Teamkarten */
.soloPics {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  margin: 70px auto;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 0 20px;
}

.person {
  display: flex;
  flex-direction: column;
}

.card {
  max-width: 300px;
  overflow: hidden;
  position: relative;

  background: white;
  border: $primary 2px solid;
  border-radius: 20px;

  padding: 24px;

  transition:
    transform 0.15s ease-out,
    box-shadow 0.25s ease-out;
}

.card:hover {
  transform: scale(1.025);
  box-shadow: 0px 0px 10px $primary;
}

.name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0077b6;
  margin: 12px 0;
}

.soloImg {
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
}

.bio {
  font-style: italic;
  line-height: 1.4;
  color: #444;
}

@media (max-width: 900px) {
  .headline { font-size: 2rem; }
  .groupImg { width: 90%; }
}

@media (max-width: 600px) {
  .headline { font-size: 1.7rem; line-height: 1.2; }
  .card { width: 90%; }
  .soloPics { padding: 0 10px; }
}
</style>
