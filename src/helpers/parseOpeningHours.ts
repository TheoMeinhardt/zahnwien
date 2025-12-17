import type { openingHours } from '@/types'

type RawDay = { from: string; to: string }
type RawOpeningHours = Partial<
  Record<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday', RawDay>
>

export function parseOpeningHours(rawData: RawOpeningHours): openingHours {
  const data: openingHours = {
    monday: rawData.monday
      ? {
          from: new Date(`1970-01-01T${rawData.monday.from}`),
          to: new Date(`1970-01-01T${rawData.monday.to}`),
        }
      : undefined,
    tuesday: rawData.tuesday
      ? {
          from: new Date(`1970-01-01T${rawData.tuesday.from}`),
          to: new Date(`1970-01-01T${rawData.tuesday.to}`),
        }
      : undefined,
    wednesday: rawData.wednesday
      ? {
          from: new Date(`1970-01-01T${rawData.wednesday.from}`),
          to: new Date(`1970-01-01T${rawData.wednesday.to}`),
        }
      : undefined,
    thursday: rawData.thursday
      ? {
          from: new Date(`1970-01-01T${rawData.thursday.from}`),
          to: new Date(`1970-01-01T${rawData.thursday.to}`),
        }
      : undefined,
    friday: rawData.friday
      ? {
          from: new Date(`1970-01-01T${rawData.friday.from}`),
          to: new Date(`1970-01-01T${rawData.friday.to}`),
        }
      : undefined,
    saturday: rawData.saturday
      ? {
          from: new Date(`1970-01-01T${rawData.saturday.from}`),
          to: new Date(`1970-01-01T${rawData.saturday.to}`),
        }
      : undefined,
    sunday: rawData.sunday
      ? {
          from: new Date(`1970-01-01T${rawData.sunday.from}`),
          to: new Date(`1970-01-01T${rawData.sunday.to}`),
        }
      : undefined,
  }

  return data
}
