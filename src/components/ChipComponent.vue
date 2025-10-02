<template>
  <q-chip square :clickable="false" :color="props.color" :text-color="props.textColor" size="1rem">
    <q-avatar size="sm"> <img :src="props.img" /> </q-avatar>
    <slot></slot>
  </q-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  color: string
  textColor: string
}>()
</script>
