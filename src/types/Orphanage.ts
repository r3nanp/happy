export type Image = {
  id: string
  url: string
}

export type Orphanage = {
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
