<template>
  <NavBar background="dark" text="white" :sticky="true" :overlay="false" />
    <section class="hero">
    <div class="hero-content">
      <h1 class="headline">Nehmen Sie Kontakt mit uns auf</h1>
    </div>
    </section>
     <div class="container">

        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <div class="input-wrapper">
                    <span class="input-icon">👤</span>
                    <input type="text" id="name" name="name" placeholder="Dein Name" required>
                </div>
            </div>

            <div class="form-group">
                <label for="email">E-Mail</label>
                <div class="input-wrapper">
                    <span class="input-icon">✉️</span>
                    <input type="email" id="email" name="email" placeholder="deine@email.com" required>
                </div>
            </div>

            <div class="form-group">
                <label for="message">Nachricht</label>
                <div class="input-wrapper textarea-wrapper">
                    <span class="input-icon">💬</span>
                    <textarea id="message" name="message" placeholder="Deine Nachricht..." required></textarea>
                </div>
            </div>

            <button type="submit" class="submit-btn">Nachricht senden</button>
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
  background: linear-gradient(135deg, #0C132B, #A8C4D0);
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
form {
  background: #ffffff;
  padding: 35px;
  border-radius: 20px;
  max-width: 550px;
  margin: 40px auto;
  box-shadow: 0 12px 30px rgba(0,0,0,0.18);
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
  color: #0077b6;
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
  border-color: #0077b6;
  box-shadow: 0 0 0 3px rgba(0,119,182,0.15);
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
  padding-left: 45px !important;
  padding-top: 10px;
}


.submit-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: #0077b6;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #005f8c;
  transform: translateY(-3px);
}


@media (max-width: 600px) {
  form {
    padding: 25px;
  }

  .input-icon {
    font-size: 1.1rem;
  }
}
</style>
