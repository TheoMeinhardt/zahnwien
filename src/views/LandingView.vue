<template>
    <!-- Hier kommt HTML -->
  <div class="splitAnimation">
    <div class="PicLeft" style="background-image: url('../../img/Ordi_1170/VFN_7219.jpg');">
      <div class="TextLeft">
        <a href="../views/DornbacherstrasseView.vue">
          <h5>Dornbacher Straße 1 1170, Wien</h5>
          <p>➜ allg. Zahnmedizin</p>
          <p>➜ Implantologie</p>
          <p>➜ Ästhetik</p>
        </a>
      </div>
    </div>

    <div class="PicRight" style="background-image: url('../../img/Ordi_1070/VFN_7366.jpg');">
      <div class="TextRight">
        <a href="../views/MariahilferstrasseView.vue">
          <h5>Mariahilferstraße 112 1070, Wien</h5>
          <p>➜ Kieferorthopädie</p>
          <p>➜ Invisalign</p>
          <p>➜ Kinderbehandlung</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


</script>

<!-- Ich bekomme das standart margin vom browser nicht weg, mach du das bitte noch -->
<style scoped>

  a{
    text-decoration: none;
  }

.splitAnimation {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.PicLeft, .PicRight {
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

.TextLeft, .TextRight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  padding: 1em 2em;
  border-radius: 50px;
  text-align: center;
  color: white;
}

</style>
