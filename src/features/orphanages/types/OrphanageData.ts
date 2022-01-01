export type Image = {
  id: string
  url: string
}

export type CreateOrphanageData = {
  id: string
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  openingHours: string
  openOnWeekends: boolean
  images: Image[]
}

export type OrphanageData = {
  id: string
  name: string
  latitude: number
  longitude: number
}
