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
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          placeholder="Dein Name"
          required
          :disabled="isSubmitting"
        />
      </div>

      <div class="form-group">
        <label for="email">E-Mail</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="deine@email.com"
          required
          :disabled="isSubmitting"
        />
      </div>

      <div class="form-group">
        <label for="message">Nachricht</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Deine Nachricht..."
          required
          :disabled="isSubmitting"
        ></textarea>
      </div>

      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        <span v-if="!isSubmitting">Nachricht senden</span>
        <span v-else class="loading-content">
          <span class="spinner"></span> Wird gesendet...
        </span>
      </button>

      <transition name="fade">
        <div v-if="submitStatus === 'success'" class="status-message success">
          ✓ Nachricht erfolgreich gesendet!
        </div>
        <div v-else-if="submitStatus === 'error'" class="status-message error">
          ✗ Fehler beim Senden. Bitte versuche es erneut.
        </div>
      </transition>
    </form>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

const formData = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  submitStatus.value = 'idle'
  try {
    // Simuliere API-Call (hier ersetzen mit echter Logik)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Form zurücksetzen
    formData.value = { name: '', email: '', message: '' }
    submitStatus.value = 'success'
    setTimeout(() => (submitStatus.value = 'idle'), 5000)
  } catch {
    // ESLint-sicher ohne unused var
    submitStatus.value = 'error'
    setTimeout(() => (submitStatus.value = 'idle'), 5000)
  } finally {
    isSubmitting.value = false
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

input:disabled,
textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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

.submit-btn:hover:not(:disabled) {
  background: #0c4a6e;
  transform: translateY(-3px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.status-message {
  margin-top: 20px;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  text-align: center;
  animation: slideIn 0.3s ease;
}

.status-message.success {
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.status-message.error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
