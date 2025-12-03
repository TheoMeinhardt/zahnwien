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
            :disabled="isSubmitting"
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
            :disabled="isSubmitting"
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
            :disabled="isSubmitting"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        class="submit-btn"
        :disabled="isSubmitting"
        :class="{ 'is-submitting': isSubmitting }"
      >
        <span v-if="!isSubmitting">Nachricht senden</span>
        <span v-else class="loading-content">
          <span class="spinner"></span>
          Wird gesendet...
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
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  if (isSubmitting.value) return // Prevent double submission

  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Simulate API call - replace with your actual submission logic
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Form submitted:', formData.value)

    // Reset form on success
    formData.value = {
      name: '',
      email: '',
      message: ''
    }

    submitStatus.value = 'success'

    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
  } catch (error) {
    console.error('Submission error:', error)
    submitStatus.value = 'error'

    // Clear error message after 5 seconds
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
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
  transition: all 0.25s ease;
}

.input-wrapper:focus-within {
  border-color: #22d3ee;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
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
  transition: opacity 0.2s ease;
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
    transform 0.2s ease,
    opacity 0.2s ease;
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

.submit-btn.is-submitting {
  background: #0c4a6e;
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
    margin-bottom: 10px;
    line-height: 1.2;
    font-size: 2rem;
  }
}
</style>
