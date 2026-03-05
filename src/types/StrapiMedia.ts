export type StrapiMediaFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export type StrapiMediaFormats = {
  thumbnail?: StrapiMediaFormat
  small?: StrapiMediaFormat
  medium?: StrapiMediaFormat
  large?: StrapiMediaFormat
}

export type StrapiMedia = {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  focalPoint: unknown | null
  width: number | null
  height: number | null
  formats: StrapiMediaFormats | null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: unknown | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}
