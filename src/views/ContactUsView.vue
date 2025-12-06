<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="headline">Nehmen Sie Kontakt mit uns auf</h1>
      <p class="subline">Wir beantworten Ihre Fragen schnell und zuverlässig</p>
    </div>
  </section>

  <!-- Formular -->
  <div class="container">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Dein Name" required />
      </div>

      <div class="form-group">
        <label for="email">E-Mail</label>
        <input id="email" type="email" placeholder="deine@email.com" required />
      </div>

      <div class="form-group">
        <label for="message">Nachricht</label>
        <textarea id="message" placeholder="Deine Nachricht..." required></textarea>
      </div>

      <button type="submit" class="submit-btn">
        Nachricht senden
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

</script>

<style scoped>
.hero {
  width: 100%;
  padding: 140px 20px 100px;
  background: linear-gradient(135deg, #22d3ee, #0c4a6e);
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

form {
  background: #fff;
  padding: 35px;
  border-radius: 20px;
  max-width: 550px;
  margin: 40px auto;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  color: #222;
}

.form-group {
  margin-bottom: 22px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #22d3ee;
  font-size: 0.95rem;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: none;
  border-radius: 14px;
  background: #f7f7f7;
  font-size: 1rem;
  outline: none;
  resize: none;
  color: #222;
  transition: all 0.25s ease;
}

textarea {
  min-height: 120px;
  padding-top: 14px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: #22d3ee;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  position: relative;
}

.submit-btn:hover {
  background: #0c4a6e;
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  form {
    padding: 25px;
  }

  .headline {
    font-size: 2rem;
    line-height: 1.2;
  }
}
</style>
