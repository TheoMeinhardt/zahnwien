<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />
  <section class="hero">
    <div class="hero-content">
      <h1 class="headline">Nehmen Sie Kontakt mit uns auf</h1>
    </div>
  </section>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <div class="input-wrapper">
          <input
            id="name"
            v-model="formData.name"
            type="text"
            name="name"
            placeholder="Dein Name"
            required
            autocomplete="name"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="email">E-Mail</label>
        <div class="input-wrapper">
          <input
            id="email"
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="deine@email.com"
            required
            autocomplete="email"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="message">Nachricht</label>
        <div class="input-wrapper textarea-wrapper">
          <textarea
            id="message"
            v-model="formData.message"
            name="message"
            placeholder="Deine Nachricht..."
            required
            aria-required="true"
          ></textarea>
        </div>
      </div>

      <button type="submit" class="submit-btn">Nachricht senden</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Form submission logic hier
  console.log('Form submitted:', formData.value)
  // Reset form
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

form {
  background: #ffffff;
  padding: 35px;
  border-radius: 20px;
  max-width: 550px;
  margin: 40px auto;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  color: #222;
}

/* FORM GROUP */
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

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border-radius: 14px;
  border: 1px solid #d8d8d8;
  padding-left: 42px;
  transition: all 0.25s ease;
}

.input-wrapper:focus-within {
  border-color: #22d3ee;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
}

.input-icon {
  position: absolute;
  left: 14px;
  font-size: 1.2rem;
  opacity: 0.7;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: none;
  background: transparent;
  font-size: 1rem;
  outline: none;
  resize: none;
  color: #222;
}

textarea {
  min-height: 120px;
  padding-top: 14px;
}

.textarea-wrapper {
  padding-left: 45px;
  padding-top: 10px;
  align-items: flex-start;
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
  transition:
    background 0.3s ease,
    transform 0.2s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #0c4a6e;
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  form {
    padding: 25px;
  }

  .input-icon {
    font-size: 1.1rem;
  }

  .headline {
    margin-bottom: 10px;
    line-height: 1.2;
    font-size: 2rem;
  }
}
</style>
