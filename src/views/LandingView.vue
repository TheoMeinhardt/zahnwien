<template>
  <!-- Hier kommt HTML -->
  <header class="navbar">
    <div class="navbar-logo">
      <img src="../../img/Logo_zahnwien.png" alt="Logo" />
      <li class="button">Home</li>
    </div>
    <ul class="navbar-menu">
      <li class="button">Terminvereinbarung</li>
      <li class="button">Über uns</li>
      <li class="button">Jobs</li>
      <li class="button">Kontakt</li>
    </ul>
  </header>
  <div class="splitAnimation">
    <div class="PicLeft" style="background-image: url('../../img/Ordi_1170/VFN_7219.jpg')">
      <div class="TextLeft">
        <a href="../views/DornbacherstrasseView.vue">
          <h5 class="text-white">Dornbacher Straße 1 1170, Wien</h5>
          <p class="text-white">➜ allg. Zahnmedizin</p>
          <p class="text-white">➜ Implantologie</p>
          <p class="text-white">➜ Ästhetik</p>
        </a>
      </div>
    </div>

    <div class="PicRight" style="background-image: url('../../img/Ordi_1070/VFN_7366.jpg')">
      <div class="TextRight">
        <a href="../views/MariahilferstrasseView.vue">
          <h5 class="text-white">Mariahilferstraße 112 1070, Wien</h5>
          <p class="text-white">➜ Kieferorthopädie</p>
          <p class="text-white">➜ Invisalign</p>
          <p class="text-white">➜ Kinderbehandlung</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>


<style scoped>
a {
  text-decoration: none;
}

p {
  margin: 0;
  padding-left: 0;
}


.splitAnimation {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  z-index: 9999;
}


.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  height: 50px;
  margin-right: 10px;
}

.navbar-logo span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* Menü rechts */
.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.button {
  margin-left: 24px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  backdrop-filter: blur(20px);
  transition: 300ms;
  list-style: none;
}

.button:hover {
    border-color: #007bff;
  color: #007bff;
  background: rgba(0, 123, 255, 0.1);   /* leichter blauer Glas-Effekt */
  transform: scale(1.05);              /* sanfte Vergrößerung */
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.3); /* Glow */
}

</style>
