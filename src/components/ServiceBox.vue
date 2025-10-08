<template>
  <div class="box row group">
    <div class="box-back"></div>
    <div class="box-glow"></div>

    <div class="col q-mt-xl q-mb-md q-mx-lg relative z-10">
      <span class="inter text-primary text-h5 block title-text">{{ props.header }}</span>
      <span class="roboto text-dark text-subtitle2 text-weight-regular block q-mt-sm subtext-fade">
        {{ props.subtext }}
      </span>

      <div class="button-container q-mt-lg">
        <button class="modern-btn">
          <span class="btn-text">mehr erfahren</span>
          <span class="btn-icon">→</span>
        </button>
      </div>
    </div>

    <q-img class="col full-width contain image" :src="props.image"></q-img>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string
  subtext: string
  image: string
}>()
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  min-width: 45vw;
  overflow: hidden;
  border: $primary 2px solid;
  border-radius: 30px;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.4s ease-out,
              border-color 0.3s ease;

  &:hover {
    transform: scale(1.025) translateY(-4px);
    box-shadow: 0 12px 40px rgba($primary, 0.25),
                0 0 20px rgba($primary, 0.4);
    border-color: lighten($primary, 10%);

    .box-glow {
      opacity: 1;
    }

    .image {
      transform: scale(1.08);
      filter: brightness(1.05);
    }

    .title-text {
      transform: translateX(4px);
    }

    .subtext-fade {
      opacity: 0.85;
    }
  }
}

.image {
  border-radius: 0 30px 30px 0;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
              filter 0.4s ease;
}

.box-back {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba($primary, 0.08), rgba(white, 0.95));
  z-index: 0;
  transition: background 0.4s ease;
}

.box-glow {
  position: absolute;
  inset: -2px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba($primary, 0.15), transparent);
  opacity: 0;
  z-index: -1;
  filter: blur(15px);
  transition: opacity 0.4s ease;
}

.title-text {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.subtext-fade {
  transition: opacity 0.3s ease;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.modern-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid $primary;
  border-radius: 8px;
  color: $primary;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  .btn-text {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  .btn-icon {
    position: relative;
    z-index: 1;
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: $primary;
    transition: left 0.3s ease;
  }

  &:hover {
    color: white;
    border-color: $primary;

    .btn-text {
      color: white;
    }

    .btn-icon {
      transform: translateX(4px);
    }

    &::before {
      left: 0;
    }
  }
}
</style>
