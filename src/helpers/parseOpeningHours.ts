import rawData from '@/assets/data/1170/openingHours.json'
import type { openingHours } from '@/types'

type RawDay = { from: string; to: string }
const source = rawData as Partial<
  Record<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday', RawDay>
>

export function parseOpeningHours(): openingHours {
  const data: openingHours = {
    monday: source.monday
      ? {
          from: new Date(`1970-01-01T${source.monday.from}`),
          to: new Date(`1970-01-01T${source.monday.to}`),
        }
      : undefined,
    tuesday: source.tuesday
      ? {
          from: new Date(`1970-01-01T${source.tuesday.from}`),
          to: new Date(`1970-01-01T${source.tuesday.to}`),
        }
      : undefined,
    wednesday: source.wednesday
      ? {
          from: new Date(`1970-01-01T${source.wednesday.from}`),
          to: new Date(`1970-01-01T${source.wednesday.to}`),
        }
      : undefined,
    thursday: source.thursday
      ? {
          from: new Date(`1970-01-01T${source.thursday.from}`),
          to: new Date(`1970-01-01T${source.thursday.to}`),
        }
      : undefined,
    friday: source.friday
      ? {
          from: new Date(`1970-01-01T${source.friday.from}`),
          to: new Date(`1970-01-01T${source.friday.to}`),
        }
      : undefined,
    saturday: source.saturday
      ? {
          from: new Date(`1970-01-01T${source.saturday.from}`),
          to: new Date(`1970-01-01T${source.saturday.to}`),
        }
      : undefined,
    sunday: source.sunday
      ? {
          from: new Date(`1970-01-01T${source.sunday.from}`),
          to: new Date(`1970-01-01T${source.sunday.to}`),
        }
      : undefined,
  }

  return data
}
