<template>
  <!-- Opening Hours heading -->
  <span class="text-h5 text-bold text-primary q-mt-lg block">Öffnungszeiten:</span>
  <div>
    <span class="block text-body roboto text-weight-regular"
      >Montag:
      <span :class="formatClosedOrOpen(openingHoursData.monday)">{{
        formatDay(openingHoursData.monday)
      }}</span></span
    >
    <span class="block text-body roboto text-weight-regular"
      >Dienstag:
      <span :class="formatClosedOrOpen(openingHoursData.tuesday)">{{
        formatDay(openingHoursData.tuesday)
      }}</span></span
    >
    <span class="block text-body roboto text-weight-regular"
      >Mittwoch:
      <span :class="formatClosedOrOpen(openingHoursData.wednesday)">{{
        formatDay(openingHoursData.wednesday)
      }}</span></span
    >
    <span class="block text-body roboto text-weight-regular"
      >Donnerstag:
      <span :class="formatClosedOrOpen(openingHoursData.thursday)">{{
        formatDay(openingHoursData.thursday)
      }}</span></span
    >
    <span class="block text-body roboto text-weight-regular"
      >Freitag:
      <span :class="formatClosedOrOpen(openingHoursData.friday)">{{
        formatDay(openingHoursData.friday)
      }}</span></span
    >
    <span class="block text-body roboto text-weight-regular"
      >Samstag:
      <span :class="formatClosedOrOpen(openingHoursData.saturday)">{{
        formatDay(openingHoursData.saturday)
      }}</span></span
    >
    <span class="block text-body roboto text-weight-regular"
      >Sonntag:
      <span :class="formatClosedOrOpen(openingHoursData.sunday)">{{
        formatDay(openingHoursData.sunday)
      }}</span></span
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { openingHours } from '@/types'

defineProps<{
  openingHoursData: openingHours
}>()

function formatDay(day: { from: Date; to: Date } | undefined): string {
  if (!day) return 'geschlossen'
  else {
    return (
      day.from.toLocaleTimeString('de-AT', {
        hour: '2-digit',
        minute: '2-digit',
      }) +
      ' - ' +
      day.to.toLocaleTimeString('de-AT', {
        hour: '2-digit',
        minute: '2-digit',
      })
    )
  }
}

function formatClosedOrOpen(day: { from: Date; to: Date } | undefined): string {
  return day ? 'text-primary text-weight-bold' : 'text-grey text-italic'
}
</script>
