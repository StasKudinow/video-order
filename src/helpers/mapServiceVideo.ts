import { getStrapiMediaUrl } from './getStrapiMediaUrl'
import type { ServiceVideo } from '../types/ServiceVideo'

export const mapServiceVideo = (data: ServiceVideo) => ({
  src: getStrapiMediaUrl(data.video),
  poster: getStrapiMediaUrl(data.poster),
})
