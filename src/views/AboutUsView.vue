<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />
  <div class="title">
    <span class="text-primary gt-sm text-h4 text-weight-bold block">Ihre innovativen Zahnärztinnen in Dornbach und Mariahilf</span>
  </div>
  <div>
    <img class="groupImg" src="img/Uberuns/Gruppenbild.jpg">
  </div>
  <div class="soloPics">

  <div class="person">
    <p class="text-primary gt-sm text-h6 text-weight-bold block text-italic">
      Dr. Isabele Olivia
    </p>
    <img src="img/Uberuns/isabele.jpg" class="soloImg" />
    <div class="bubble">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <div class="person">
    <p class="text-primary gt-sm text-h6 text-weight-bold block text-italic">
      Dr. Eva Olivia
    </p>
    <img src="img/Uberuns/Eva.jpg" class="soloImg" />
    <div class="bubble">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <div class="person">
    <p class="text-primary gt-sm text-h6 text-weight-bold block text-italic">
      Dr. Miriam Matejka
    </p>
    <img src="img/Uberuns/dentist3.jpg" class="soloImg" />
    <div class="bubble">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.title{
  padding-top: 100px;
  text-align: center;
}

.groupImg{
  display: block;
  margin: 40px auto;
  width: 60%;
  width: 1000px;
  border-radius: 12px;
  object-fit: cover;
}

.soloPics {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.person {
  text-align: center;
}

.soloImg {
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
}

.bubble {
  background: #f0f0f0;
  border-radius: 12px;
  padding: 12px 16px;
  width: 320px;
  margin: 12px auto 0 auto;
  position: relative;
  font-style: italic;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.bubble::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent #f0f0f0 transparent;
}


@media (max-width: 1100px) {
  .groupImg {
    width: 90%;
    max-width: 600px;
  }

  .soloImg {
    height: 240px;
  }

  .bubble {
    width: 260px;
  }
}

@media (max-width: 800px) {
  .soloPics {
    flex-direction: column;
  }

  .soloImg {
    height: 220px;
  }

  .bubble {
    width: 90%;
    max-width: 340px;
  }
}

@media (max-width: 500px) {
  .soloImg {
    height: 180px;
  }

  .bubble {
    width: 95%;
    font-size: 14px;
  }
}
</style>
