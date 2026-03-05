import { STRAPI_URL } from './config'
import type { StrapiSingleResponse } from '../types/StrapiSingleResponse'
import type { ServiceVideo } from '../types/ServiceVideo'

export const getServiceVideo = async () => {
  const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`)

  if (!res.ok) {
    throw new Error('Failed to fetch home page')
  }

  const json: StrapiSingleResponse<ServiceVideo> = await res.json()
  return json.data
}
