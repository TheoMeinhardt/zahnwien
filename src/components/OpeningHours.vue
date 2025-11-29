<template>
  <!-- Opening Hours heading -->
  <div class="text-body text-weight-regular">
    <div style="width: fit-content">
      <span class="text-h5 text-bold text-primary q-mt-lg block">Öffnungszeiten:</span>
      <span class="block"
        >Montag:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.monday)">
          {{ formatDay(openingHoursData.monday) }}</span
        ></span
      >
      <span class="block"
        >Dienstag:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.tuesday)">
          {{ formatDay(openingHoursData.tuesday) }}</span
        ></span
      >
      <span class="block"
        >Mittwoch:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.wednesday)">
          {{ formatDay(openingHoursData.wednesday) }}</span
        ></span
      >
      <span class="block"
        >Donnerstag:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.thursday)">
          {{ formatDay(openingHoursData.thursday) }}</span
        ></span
      >
      <span class="block"
        >Freitag:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.friday)">
          {{ formatDay(openingHoursData.friday) }}</span
        ></span
      >
      <span class="block"
        >Samstag:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.saturday)">
          {{ formatDay(openingHoursData.saturday) }}</span
        ></span
      >
      <span class="block"
        >Sonntag:
        <span class="float-right q-ml-lg" :class="formatClosedOrOpen(openingHoursData.sunday)">
          {{ formatDay(openingHoursData.sunday) }}</span
        ></span
      >
    </div>

    <span class="block q-mt-sm text-grey text-italic"
      >Auf Anfrage sind
      <span class="text-primary text-weight-bold">erweiterte Öffnungszeiten</span> möglich</span
    >
  </div>
</template>

<script setup lang="ts">
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
      }) +
      ' Uhr'
    )
  }
}

function formatClosedOrOpen(day: { from: Date; to: Date } | undefined): string {
  return day ? 'text-primary text-weight-bold' : 'text-grey text-italic'
}
</script>
