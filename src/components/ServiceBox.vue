<template>
  <div class="box row">
    <div class="col q-mt-xl q-mb-md q-mx-lg">
      <span class="inter text-primary text-h5 block">{{ props.header }}</span>
      <span class="roboto text-dark text-subtitle2 text-weight-regular block q-mt-sm">
        {{ props.subtext }}</span
      >
      <q-btn
        flat
        no-caps
        color="primary"
        icon-right="keyboard_arrow_right"
        label="mehr erfahren"
        size="md"
        class="float-right q-mt-lg"
      />
    </div>

    <q-img class="col full-width contain" :src="props.image"></q-img>
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
  border: $primary 2px solid;
  border-radius: 30px;
}

.q-img {
  border-radius: 0px 30px 30px 0px;
}
</style>
