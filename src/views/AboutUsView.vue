<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

  <section class="hero">
    <div class="hero-content">
      <h1 class="headline">Ihre innovativen Zahnärztinnen in Dornbach und Mariahilf</h1>
      <p class="subline">Moderne Zahnmedizin • Ästhetik • Wohlfühlatmosphäre</p>
    </div>
  </section>

  <div class="group-wrapper">
    <img class="groupImg" src="img/Uberuns/Gruppenbild.jpg" />
  </div>

  <div class="soloPics">

    <div class="person card">
      <p class="name">Dr. Isabelle Olivia</p>
      <img src="img/Uberuns/isabele.jpg" class="soloImg" />
      <p class="bio">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="person card">
      <p class="name">Dr. Ewa Olivia</p>
      <img src="img/Uberuns/Eva.jpg" class="soloImg" />
      <p class="bio">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="person card">
      <p class="name">Dr. Miriam Matejka</p>
      <img src="img/Uberuns/dentist3.jpg" class="soloImg" />
      <p class="bio">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>

.hero {
  width: 100%;
  padding: 140px 20px 100px;
  background: linear-gradient(135deg, #22D3EE, #0C4A6E);
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

/* GROUP IMAGE */
.group-wrapper {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.groupImg {
  width: 85%;
  max-width: 1000px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  object-fit: cover;
}


.soloPics {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  margin: 70px auto;
  flex-wrap: wrap;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  width: 300px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}

.name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0077b6;
  margin-bottom: 12px;
}

.soloImg {
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 15px;
}

.bio {
  font-style: italic;
  line-height: 1.4;
  color: #444;
}


@media (max-width: 900px) {
  .headline {
    font-size: 2rem;
  }
  .groupImg {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .headline {
    font-size: 1.7rem;
    line-height: 1.2;
  }
  .card {
    width: 90%;
  }
}
</style>
