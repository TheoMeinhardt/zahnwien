export function parseImagePath(relativeImagePath: string): string {
  return import.meta.env.BASE_URL + relativeImagePath
}
