import { STRAPI_URL } from '../api/config'
import type { StrapiMedia } from '../types/StrapiMedia'

export const getStrapiMediaUrl = (media?: StrapiMedia | null) => {
  if (!media?.url) return undefined

  try {
    const url = new URL(media.url, STRAPI_URL)
    return url.toString()
  } catch {
    return undefined
  }
}
